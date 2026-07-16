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
                "p-2 rounded-xl font-sm transition-all duration-300",
                currentOption == value ? "border-accent w-24 font-semibold" : "border-secondary w-20",
            )}
            onClick={() => setOption(value)}
        >
            <div
                className={clsx(
                    "aspect-square rounded-full bg-accent transition-transform duration-200",
                    currentOption === value ? "w-3 scale-100 mx-2" : "scale-0 mx-0 w-0"
                )}
            >

            </div>
            <div>
                {name}
            </div>
        </div>
    );
};

export default OptionChoice;