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
                Hello ipsum dolor sit amet consectetur, adipisicing elit. Ad deleniti architecto dolor nam porro voluptatibus sed fugit facilis laboriosam facere dolorum, at aliquam nisi quas, necessitatibus molestias ipsa possimus quae.
                Praesentium, illum optio ipsa sit, porro sunt ut eum maiores quia beatae quod officia. Molestiae ratione nisi dignissimos temporibus ea, earum, ipsam assumenda aperiam harum commodi error impedit, id voluptates.
                Laudantium quae deserunt ad. Dolores, provident maiores cupiditate, doloremque commodi ullam impedit reprehenderit error ea, eligendi rem? Nisi velit quaerat architecto ea, quae officia? Accusamus ex ut ipsa adipisci ipsam?
                Animi nisi vitae recusandae commodi sint! Corporis libero, dolorem explicabo, temporibus aperiam a iure nisi ratione qui culpa, recusandae voluptas molestias earum sequi magnam dignissimos animi velit quam id impedit!
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque veritatis vitae voluptates? Neque, ducimus quibusdam. Vel ratione tempore ex accusantium tenetur magnam sequi voluptatibus, molestiae, dolorum amet minus. Incidunt, assumenda!
                Consequuntur dolorum possimus veniam suscipit nesciunt? Quia fugit consequatur necessitatibus! Numquam, odit accusamus temporibus perspiciatis eius ea aliquam aspernatur amet iure doloremque rem consequatur quia fugit doloribus ducimus laudantium mollitia.
                Facere quas delectus quos, rem ducimus ipsa suscipit corporis modi dolores, non quae dolore? Iste quas sit beatae sapiente aut hic consequuntur sint, facere vel dignissimos ex aliquid dolorem nesciunt!
                Odio porro suscipit illum. Eveniet, ipsum voluptas! Beatae debitis, commodi vero adipisci recusandae labore nulla. Necessitatibus doloremque ducimus repudiandae obcaecati magni sapiente qui reprehenderit, nemo porro iure modi quasi dignissimos.
                Voluptates maiores architecto similique quas necessitatibus atque dolor itaque labore provident? Totam magnam nihil, temporibus ullam placeat deserunt iure, facilis aliquid, perspiciatis perferendis officiis? Dolores quas dolorem ducimus laudantium iusto.
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