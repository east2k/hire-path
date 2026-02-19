"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
};

const NavLink = ({ href, children, icon }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <Link
            href={href}
            className={`
                flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                ${isActive ? "bg-blue-ribbon-50 text-blue-ribbon-600" : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"}
            `}
        >
            {icon && <span className="h-5 w-5">{icon}</span>}
            {children}
        </Link>
    );
};

export default NavLink;
