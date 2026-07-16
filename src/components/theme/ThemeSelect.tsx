import { useWikiStore } from "../../useWikiStore";
import clsx from "clsx";


interface ThemeSelectProps {
    themeName: string
    themeValue: string
}


const ThemeSelect = ({ themeName, themeValue }: ThemeSelectProps) => {

    const { theme, setTheme } = useWikiStore()


    return (
        <div
            className={clsx(
                "flex items-center justify-center cursor-pointer border",
                "p-2 rounded-xl font-sm transition-all duration-300",
                theme == themeValue ? "border-accent w-24 font-semibold" : "border-secondary w-20",
            )}
            onClick={() => setTheme(themeValue)}
        >
            <div
                className={clsx(
                    "w-3 aspect-square rounded-full bg-accent transition-transform duration-200",
                    theme === themeValue ? "scale-100 mx-2" : "scale-0 mx-0"
                )}
            >

            </div>
            <div>
                {themeName}
            </div>
        </div>
    );
};

export default ThemeSelect;