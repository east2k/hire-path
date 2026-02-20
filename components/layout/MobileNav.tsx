"use client";

import { useState } from "react";
import { Menu, X, House, Briefcase, CalendarDays } from "lucide-react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import NavLink from "./NavLink";
import SidebarSignOutButton from "./SignOutButton";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between border-b border-ink-100 bg-white px-4 lg:hidden">
                <div className="flex items-center gap-2 text-blue-ribbon-400">
                    <Image src="/images/logo.png" width={28} height={28} alt="HirePath Logo" />
                    <span className="text-lg font-bold">HirePath</span>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg p-1.5 text-ink-600 hover:bg-ink-50"
                    aria-label="Open menu"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`fixed left-0 top-0 z-50 h-screen w-64 transform border-r border-ink-100 bg-white transition-transform duration-200 lg:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col">
                    <div className="flex h-14 items-center justify-between border-b border-ink-100 px-4">
                        <div className="flex items-center gap-2 text-blue-ribbon-400">
                            <Image
                                src="/images/logo.png"
                                width={28}
                                height={28}
                                alt="HirePath Logo"
                            />
                            <span className="text-lg font-bold">HirePath</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg p-1.5 text-ink-600 hover:bg-ink-50"
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-1 p-4">
                        <div onClick={() => setIsOpen(false)}>
                            <NavLink href="/dashboard" icon={<House className="w-5 h-5" />}>
                                Dashboard
                            </NavLink>
                        </div>
                        <div onClick={() => setIsOpen(false)}>
                            <NavLink href="/applications" icon={<Briefcase className="w-5 h-5" />}>
                                Applications
                            </NavLink>
                        </div>
                        <div onClick={() => setIsOpen(false)}>
                            <NavLink href="/calendar" icon={<CalendarDays className="w-5 h-5" />}>
                                Calendar
                            </NavLink>
                        </div>
                    </nav>

                    <div className="border-t border-ink-100 p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <UserButton />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-ink-900 truncate">
                                    {user?.fullName}
                                </span>
                                <span className="text-xs text-ink-400 truncate">
                                    {user?.emailAddresses[0]?.emailAddress}
                                </span>
                            </div>
                        </div>
                        <SidebarSignOutButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
