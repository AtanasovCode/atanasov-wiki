
interface HeadingProps {
    children: React.ReactNode
    id: string
}


const Heading = ({ children, id }: HeadingProps) => {
    return (
        <div
            className="font-bold text-3xl mb-12 pb-4 border-b border-secondary/50"
            id={id}
        >
            {children}
        </div>
    );
}

export default Heading;