type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-ribbon-500 text-white hover:bg-blue-ribbon-600 active:bg-blue-ribbon-700",
    secondary: "bg-ink-100 text-ink-700 hover:bg-ink-200 active:bg-ink-300",
    outline: "border border-ink-200 text-ink-700 hover:bg-ink-50 active:bg-ink-100",
    ghost: "text-ink-700 hover:bg-ink-50 active:bg-ink-100",
    danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

export const getButtonStyles = (variant: ButtonVariant, size: ButtonSize) => {
    return `${variantStyles[variant]} ${sizeStyles[size]}`;
};
