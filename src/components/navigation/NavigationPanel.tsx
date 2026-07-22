import { useWikiStore } from "../../useWikiStore"

import RulerLines from "./RulerLines"

interface SectionProps {
    id: string
    title: string
    content: React.ReactNode
}

interface NavigationPanelProps {
    sections: SectionProps[]
}


const HEIGHT_RATIO: number = 5


const NavigationPanel = ({
    sections
}: NavigationPanelProps) => {

    const { websiteHeight } = useWikiStore()

    const panelHeight = websiteHeight / HEIGHT_RATIO
    let sectionCount: number = 0

    sections.map(() => {
        sectionCount += 1
    })

    return (
        <div
            className={`flex items-stretch mr-6 pr-2 sticky top-2 p-2 border border-white/50`}
            style={{ height: `${panelHeight}px` }}
        >
            <div className="w-full h-full flex flex-col items-center justify-between">
                {
                    sections.map((section) => {
                        return (
                            <div className="gap-2 flex items-center justify-between">
                                <div className="">
                                    {section.title}
                                </div>
                                <div className="w-3 h-0.5 bg-white/50">

                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <RulerLines amount={sectionCount * 13} />
        </div>
    );
}

export default NavigationPanel;