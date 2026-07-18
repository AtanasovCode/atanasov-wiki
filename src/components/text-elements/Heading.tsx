
interface HeadingProps {
    children: React.ReactNode

}


const Heading = ({ children }: HeadingProps) => {

    const heading = children?.toLocaleString().toLowerCase().split(" ").join("-")

    return (
        <div
            className="font-bold text-3xl my-22 pb-4 border-b border-secondary/50"
            id={heading}
        >
            {children}
        </div>
    );
}

export default Heading;