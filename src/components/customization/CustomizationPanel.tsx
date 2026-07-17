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
        fontSize, setFontSize,
    } = useWikiStore();

    const themes: OptionTypes[] = [
        { index: 1, name: "System", value: "system" },
        { index: 1, name: "Light", value: "light" },
        { index: 2, name: "Dark", value: "dark" },
        { index: 3, name: "Night", value: "night" }
    ]

    const fonts: OptionTypes[] = [
        { index: 1, name: "Sans", value: "sans" },
        { index: 1, name: "Serif", value: "serif" },
        { index: 1, name: "Mono", value: "mmono" },
    ]

    const fontSizes: OptionTypes[] = [
        { index: 1, name: "Small", value: "small" },
        { index: 2, name: "Normal", value: "normal" },
        { index: 3, name: "Large", value: "large" },
    ]

    return (
        <div
            className="flex flex-col items-start justify-start gap-3 min-w-48 min-h-screen border-r p-6 pr-0 border-slate-700"
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
            <OptionSelect
                optionType="Font Size"
                availableOptions={fontSizes}
                currentOption={fontSize}
                setOption={setFontSize}
            />
        </div>
    );
}

export default CustomizationPanel;