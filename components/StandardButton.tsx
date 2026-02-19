import { ButtonHTMLAttributes } from "react";
import { getButtonStyles } from "@/utils/button-style-chooser";

type StandardButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    variant: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size: "sm" | "md" | "lg";
};

const StandardButton = ({ title, variant = "primary", size = "md", ...props }: StandardButtonProps) => {
    return (
        <button
            {...props}
            className={`flex flex-row cursor-pointer items-center font-semibold rounded-md hover:opacity-70 transition-opacity duration-200 ${getButtonStyles(variant, size)} ${props.className ?? ""}`}
        >
            {title}
        </button>
    );
};

export default StandardButton;
