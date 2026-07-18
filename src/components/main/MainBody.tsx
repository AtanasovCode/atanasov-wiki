import Paragraph from "../text-elements/Paragraph";
import Heading from "../text-elements/Heading";

import { myInfo } from "../../articles/MyInfo";


const MainBody = () => {
    return (
        <div
            className="
                w-3xl py-12 text-body animate-slide-into-view"
        >
            <Paragraph firstLetter>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad deleniti architecto dolor nam porro voluptatibus sed fugit facilis laboriosam facere dolorum, at aliquam nisi quas, necessitatibus molestias ipsa possimus quae.
                Praesentium, illum optio ipsa sit, porro sunt ut eum maiores quia beatae quod officia. Molestiae ratione nisi dignissimos temporibus ea, earum, ipsam assumenda aperiam harum commodi error impedit, id voluptates.
                Laudantium quae deserunt ad. Dolores, provident maiores cupiditate, doloremque commodi ullam impedit reprehenderit error ea, eligendi rem? Nisi velit quaerat architecto ea, quae officia? Accusamus ex ut ipsa adipisci ipsam?
                Animi nisi vitae recusandae commodi sint! Corporis libero, dolorem explicabo, temporibus aperiam a iure nisi ratione qui culpa, recusandae voluptas molestias earum sequi magnam dignissimos animi velit quam id impedit!
            </Paragraph>
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