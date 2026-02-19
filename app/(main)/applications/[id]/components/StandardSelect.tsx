type SelectOption = {
    value: string;
    label: string;
};

type StandardSelectProps = {
    id?: string;
    label?: string;
    name?: string;
    selectOptions: SelectOption[];
};

const StandardSelect = ({ id, label, name, selectOptions }: StandardSelectProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-ink-700">
                    {label}
                </label>
            )}
            <select
                id={id}
                name={name}
                className="cursor-pointer rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm focus:border-blue-ribbon-500 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-500/20"
            >
                {selectOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StandardSelect;
