import OptionChoice from "./OptionChoice"

// Types for the options that will be passed down (eg. theme options, font options, etc.)
interface OptionTypes {
    index: number
    name: string
    value: string
}

interface OptionSelectProps {
    optionType: string // example: Theme / Font / etc.
    availableOptions: OptionTypes[]
    currentOption: string
    setOption: (option: string) => void
}


const OptionSelect = ({ optionType, availableOptions, currentOption, setOption }: OptionSelectProps) => {
    return (
        <div className="flex items-start justify-start flex-col gap-2">
            <div className="font-medium text-md">
                {optionType}:
            </div>
            <div className="flex flex-col items-start justify-start gap-1 pl-6">
                {
                    availableOptions.map((option) => {
                        return (
                            <OptionChoice
                                name={option.name}
                                value={option.value}
                                currentOption={currentOption}
                                setOption={setOption}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default OptionSelect;