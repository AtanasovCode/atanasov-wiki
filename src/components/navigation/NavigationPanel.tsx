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


const HEIGHT_RATIO: number = 4


const NavigationPanel = ({
    sections
}: NavigationPanelProps) => {

    const { websiteHeight } = useWikiStore()

    const panelHeight = websiteHeight / HEIGHT_RATIO

    return (
        <div
            className={`mr-8 sticky top-2 border border-white/50`}
            style={{ height: `${panelHeight}px` }}
        >
            <RulerLines sections={sections} />
        </div >
    );
}

export default NavigationPanel;