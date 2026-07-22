import Heading from "../text-elements/Heading";

import { myInfo } from "../../articles/MyInfo";


const MainBody = () => {
    return (
        <div
            className="
                w-3xl py-6 text-body animate-slide-into-view"
        >
            {
                myInfo.map((data) => {
                    return (
                        <>
                            <Heading id={data.id}>
                                {data.title}
                            </Heading>
                            {data.content}
                        </>
                    );
                })
            }
        </div>
    );
}


export default MainBody;