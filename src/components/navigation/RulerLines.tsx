
interface SectionProps {
    id: string
    title: string
    content: React.ReactNode
}

interface RulerLinesProps {
    sections: SectionProps[]
}




const RulerLines = ({
    sections,
}: RulerLinesProps) => {

    const lines = []

    for (let i = 0; i < sections.length * 10; i++) {
        if (i % 10 === 0) {
            const sectionIndex = i / 10

            if (sectionIndex < sections.length) {
                lines.push(
                    <div
                        key={i}
                        className="w-full h-0.5 flex items-center justify-end gap-2"
                    >
                        <div className="whitespace-nowrap">
                            {sections[sectionIndex].title}
                        </div>
                        <div className="w-6 h-0.5 bg-secondary"></div>
                    </div>
                )
            }
        }
        else {
            lines.push(
                <div key={i} className="w-full h-0.5 flex justify-end">
                    <div className="w-2 h-0.5 bg-secondary"></div>
                </div>
            )
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-end justify-between pl-4">
            {lines}
        </div>
    );
}

export default RulerLines;