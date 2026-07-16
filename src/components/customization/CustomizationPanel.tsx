import { useWikiStore } from "../../useWikiStore";
import OptionSelect from "./OptionSelect";


interface OptionTypes {
    index: number
    name: string
    value: string
}

const CustomizationPanel = () => {

    const {
        theme, setTheme,
        font, setFont,
    } = useWikiStore();

    const themes: OptionTypes[] = [
        { index: 1, name: "Light", value: "light" },
        { index: 2, name: "Dark", value: "dark" },
        { index: 3, name: "Night", value: "night" }
    ]

    const fonts: OptionTypes[] = [
        { index: 1, name: "Sans", value: "sans" },
        { index: 1, name: "Serif", value: "serif" },
        { index: 1, name: "Mono", value: "mmono" },
    ]

    return (
        <div
            className="flex flex-col items-start justify-start gap-3 w-64 p-6 border-l border-secondary"
        >
            <div className="font-bold text-lg">
                Customization
            </div>
            <OptionSelect
                optionType="Theme"
                availableOptions={themes}
                currentOption={theme}
                setOption={setTheme}
            />
            <OptionSelect
                optionType="Font"
                availableOptions={fonts}
                currentOption={font}
                setOption={setFont}
            />
        </div>
    );
}

export default CustomizationPanel;