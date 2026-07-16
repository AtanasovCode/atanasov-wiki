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
                "flex items-center justify-center cursor-pointer border",
                "p-2 rounded-lg text-sm transition-all duration-300 gap-2",
                currentOption == value ? "border-text w-20 font-semibold" : "border-secondary w-16",
            )}
            onClick={() => setOption(value)}
        >
            <div
                className={clsx(
                    "aspect-square text-black text-xs flex items-center justify-center rounded-full bg-text transition-transform duration-200",
                    currentOption === value ? "w-2 scale-100" : "scale-0 w-0"
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