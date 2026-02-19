import SpinningLoadingCircle from "./SpinningLoadingCircle";
import { getButtonStyles } from "@/utils/button-style-chooser";

type StandardButtonProps = {
    title: string;
    variant: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size: "sm" | "md" | "lg";
};

const StandardButton = ({ title, variant = "primary", size = "md" }: StandardButtonProps) => {
    return (
        <button
            disabled={false}
            className={`flex flex-row cursor-pointer items-center font-semibold rounded-md hover:opacity-70 transition-opacity duration-200 ${getButtonStyles(variant, size)}`}
        >
            {false && <SpinningLoadingCircle />}
            {title}
        </button>
    );
};

export default StandardButton;
