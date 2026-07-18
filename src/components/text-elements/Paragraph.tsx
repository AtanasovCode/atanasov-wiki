import clsx from "clsx"

interface ParagraphProps {
    children: React.ReactNode
    firstLetter: boolean
}


const Paragraph = ({ children, firstLetter = false }: ParagraphProps) => {
    return (
        <p className={clsx(
            "w-full mb-4",
            firstLetter && 
                "first-letter:text-[4rem] first-letter:float-left first-letter:font-bold first-letter:m-4 first-letter:leading-none"
        )}>
            {children}
        </p>
    );
}

export default Paragraph;