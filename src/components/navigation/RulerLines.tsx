
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
                    <div className="w-full flex items-center justify-between gap-2">
                        <div>{sections[sectionIndex].title}</div>
                        <div key={i} className="w-6 h-0.5 bg-white/50"></div>
                    </div>
                )
            }
        }
        if (i === sections.length * 10 - 1) {
            lines.push(
                <div className="w-full flex items-center justify-between gap-2">
                    <div>Footer</div>
                    <div key={i} className="w-6 h-0.5 bg-white/50"></div>
                </div>
            )
        }
        else {
            lines.push(<div key={i} className="w-2 h-0.5 bg-white/50"></div>)
        }
    }

    return (
        <div className="h-full flex flex-col items-end justify-between pl-4 py-2">
            {lines}
        </div>
    );
}

export default RulerLines;