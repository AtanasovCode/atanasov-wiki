

interface RulerLinesProps {
    amount: number
}


const RulerLines = ({
    amount,
}: RulerLinesProps) => {

    const lines = []

    for (let i = 0; i <= amount; i++) {
        lines.push(<div key={i} className="w-2 h-0.5 bg-white/50"></div>)
    }

    return (
        <div className="h-full flex flex-col items-center justify-between">
            {lines}
        </div>
    );
}

export default RulerLines;