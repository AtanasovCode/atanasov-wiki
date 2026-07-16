import ThemeSelect from "./ThemeSelect"

interface ThemeOptions {
    name: string
    value: "light" | "dark" | "blackout"
}



const ThemeToggle = () => {

    const themes: ThemeOptions[] = [
        {
            name: "Light",
            value: "light"
        },
        {
            name: "Dark",
            value: "dark"
        },
        {
            name: "Blackout",
            value: "blackout"
        }
    ]

    return (
        <div className="flex items-start justify-start flex-col gap-2">
            <div className="font-semibold text-lg">Theme:</div>
            <div className="flex flex-col items-start justify-start gap-2">
                {
                    themes.map((t) => {
                        return (
                            <ThemeSelect themeName={t.name} themeValue={t.value} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ThemeToggle;