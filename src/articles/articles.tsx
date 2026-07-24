import Paragraph from "../components/text-elements/Paragraph";


const myArticle = {
    id: 1,
    articleName: "my-info",
    content: [
        {
            sectionId: 'about',
            sectionName: "about",
            sectionTitle: "About",
            paragraphs: (
                <>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum mollitia. Nisi cum quas repellendus ducimus quasi labore alias ex dolorum explicabo cumque? In, officiis ut? Delectus eligendi unde et!
                        Nulla possimus suscipit aspernatur error quibusdam non, adipisci, nam in quasi odio voluptatem explicabo porro reiciendis incidunt aliquam totam molestias saepe officia eos. Nihil consectetur dignissimos blanditiis ad ullam dolor?
                        Corporis placeat a sequi error et sint, tempore ab ad neque, fugit quam praesentium in, nesciunt suscipit iure repellendus ullam labore dolor fugiat repellat sit! Quas animi neque tenetur consequuntur.
                        Perferendis doloremque odio iusto tenetur sit necessitatibus est impedit quas nisi ducimus similique id, voluptas vero nesciunt reprehenderit in voluptatem. Laboriosam iste est repudiandae quae facilis praesentium et laborum maxime.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore. Blanditiis commodi architecto recusandae explicabo quidem! Optio, quam qui recusandae, unde doloribus molestias quidem quibusdam tenetur fugit perferendis magni necessitatibus.
                        Fugit natus deserunt, soluta animi eius, odio neque architecto officia ab ipsam laudantium consequuntur voluptatibus dolor in deleniti recusandae libero veniam molestiae quisquam, velit autem? Fugiat esse at ex tempora.
                    </Paragraph>
                </>
            )
        },
        {
            sectionId: "skills",
            sectionName: "skills",
            sectionTitle: "Skills",
            paragraphs: (
                <>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum mollitia. Nisi cum quas repellendus ducimus quasi labore alias ex dolorum explicabo cumque? In, officiis ut? Delectus eligendi unde et!
                        Nulla possimus suscipit aspernatur error quibusdam non, adipisci, nam in quasi odio voluptatem explicabo porro reiciendis incidunt aliquam totam molestias saepe officia eos. Nihil consectetur dignissimos blanditiis ad ullam dolor?
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore. Blanditiis commodi architecto recusandae explicabo quidem! Optio, quam qui recusandae, unde doloribus molestias quidem quibusdam tenetur fugit perferendis magni necessitatibus.
                        Fugit natus deserunt, soluta animi eius, odio neque architecto officia ab ipsam laudantium consequuntur voluptatibus dolor in deleniti recusandae libero veniam molestiae quisquam, velit autem? Fugiat esse at ex tempora.
                    </Paragraph>
                </>
            )
        }
    ]
}



const reactArticle = {
    id: 2,
    articleName: "react-wiki",
    content: [
        {
            sectionId: "history",
            sectionName: "history",
            sectionTitle: "History",
            paragraphs: (
                <>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum mollitia. Nisi cum quas repellendus ducimus quasi labore alias ex dolorum explicabo cumque? In, officiis ut? Delectus eligendi unde et!
                        Nulla possimus suscipit aspernatur error quibusdam non, adipisci, nam in quasi odio voluptatem explicabo porro reiciendis incidunt aliquam totam molestias saepe officia eos. Nihil consectetur dignissimos blanditiis ad ullam dolor?
                        Corporis placeat a sequi error et sint, tempore ab ad neque, fugit quam praesentium in, nesciunt suscipit iure repellendus ullam labore dolor fugiat repellat sit! Quas animi neque tenetur consequuntur.
                        Perferendis doloremque odio iusto tenetur sit necessitatibus est impedit quas nisi ducimus similique id, voluptas vero nesciunt reprehenderit in voluptatem. Laboriosam iste est repudiandae quae facilis praesentium et laborum maxime.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore. Blanditiis commodi architecto recusandae explicabo quidem! Optio, quam qui recusandae, unde doloribus molestias quidem quibusdam tenetur fugit perferendis magni necessitatibus.
                        Fugit natus deserunt, soluta animi eius, odio neque architecto officia ab ipsam laudantium consequuntur voluptatibus dolor in deleniti recusandae libero veniam molestiae quisquam, velit autem? Fugiat esse at ex tempora.
                    </Paragraph>
                </>
            )
        },
        {
            sectionId: "skills",
            sectionName: "skills",
            sectionTitle: "Skills",
            paragraphs: (
                <>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum mollitia. Nisi cum quas repellendus ducimus quasi labore alias ex dolorum explicabo cumque? In, officiis ut? Delectus eligendi unde et!
                        Nulla possimus suscipit aspernatur error quibusdam non, adipisci, nam in quasi odio voluptatem explicabo porro reiciendis incidunt aliquam totam molestias saepe officia eos. Nihil consectetur dignissimos blanditiis ad ullam dolor?
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore. Blanditiis commodi architecto recusandae explicabo quidem! Optio, quam qui recusandae, unde doloribus molestias quidem quibusdam tenetur fugit perferendis magni necessitatibus.
                        Fugit natus deserunt, soluta animi eius, odio neque architecto officia ab ipsam laudantium consequuntur voluptatibus dolor in deleniti recusandae libero veniam molestiae quisquam, velit autem? Fugiat esse at ex tempora.
                    </Paragraph>
                </>
            )
        }
    ]
}



const allArticles = [myArticle, reactArticle]

export default allArticles;
