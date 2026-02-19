import { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div
            className="rounded-xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
            {children}
        </div>
    );
};
export default Card;
