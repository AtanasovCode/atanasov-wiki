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
        <div className="flex items-start justify-start flex-col gap-1 w-full">
            <div className="font-medium text-lg">
                {optionType}:
            </div>
            <div className="flex flex-col items-start justify-start gap-2 pl-2 w-full">
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