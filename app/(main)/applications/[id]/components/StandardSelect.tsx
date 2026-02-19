import { ChevronDown } from "lucide-react";

type SelectOption = {
    value: string;
    label: string;
};

type StandardSelectProps = {
    id?: string;
    label?: string;
    name?: string;
    selectOptions: SelectOption[];
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StandardSelect = ({
    id,
    label,
    name,
    selectOptions,
    defaultValue,
    onChange,
}: StandardSelectProps) => {
    return (
        <div className="relative flex flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-ink-700">
                    {label}
                </label>
            )}
            <select
                id={id}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                className="appearance-none cursor-pointer rounded-lg border border-ink-200 bg-white px-3 pr-8 py-2 text-sm focus:border-blue-ribbon-500 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-500/20 "
            >
                {selectOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
            />
        </div>
    );
};

export default StandardSelect;
