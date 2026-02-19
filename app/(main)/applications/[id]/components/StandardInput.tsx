type StandardInputProps = {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
};

const StandardInput = ({ id, name, label, type, placeholder, required }: StandardInputProps) => {
    const error = false;
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-ink-700">
                    {label}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className={`cursor-verticaltext rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-blue-ribbon-500 focus:outline-none focus:ring-2 focus:ring-blue-ribbon-500/20 disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-500
                    ${false && "border-red-500 focus:border-red-500 focus:ring-red-500/20"} `}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default StandardInput;
