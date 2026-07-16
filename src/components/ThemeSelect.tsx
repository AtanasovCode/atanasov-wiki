import { useWikiStore } from "../useWikiStore";
import clsx from "clsx";


interface ThemeSelectProps {
    themeName: string
    themeValue: string
}


const ThemeSelect = ({ themeName, themeValue }: ThemeSelectProps) => {

    const { theme, setTheme } = useWikiStore()


    return (
        <div
            className="flex gap-1 items-center justify-center cursor-pointer"
            onClick={() => setTheme(themeValue)}
        >
            <div className={clsx(
                "w-4 aspect-square border rounded-full flex items-center justify-center",
                "animate-slide-down",
                theme != themeValue && "border-text"
            )}>
                {
                    theme == themeValue && <div className="w-[60%] aspect-square rounded-full bg-accent animate-slide-down"></div>
                }
            </div>
            <div>
                {themeName}
            </div>
        </div>
    );
};

export default ThemeSelect;