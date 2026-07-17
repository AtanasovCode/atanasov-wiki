import clsx from "clsx";


interface ThemeSelectProps {
    name: string
    value: string
    currentOption: string
    setOption: (option: string) => void
}


const OptionChoice = ({
    name,
    value,
    currentOption,
    setOption,
}: ThemeSelectProps) => {


    return (
        <div
            className={clsx(
                "relative flex items-center justify-start cursor-pointer w-full p-1",
                "text-md gap-2 transition-all duration-300",
                "before:transition-all before:duration-400 before:absolute before:content-['']",
                "before:z-1 before:top-0 before:left-0 before:h-full before:w-0",
                currentOption == value && "font-medium bg-text/20 hover:before:w-0",
                currentOption != value && "hover:before:bg-text/25 hover:before:w-full",
            )}
            onClick={() => setOption(value)}
        >
            <div
                className={clsx(
                    "rounded-full aspect-square bg-text transition-transform duration-300",
                    currentOption === value ? "w-2 scale-100 animate-slide-in" : "scale-0 w-0"
                )}
            >
                {/* This is the dot that shows currently active option */}
            </div>
            <div
                className={clsx(
                    value === "sans" && "font-sans",
                    value === "serif" && "font-serif",
                    value === "mono" && "font-mono"
                )}
            >
                {name}
            </div>
        </div>
    );
};

export default OptionChoice;