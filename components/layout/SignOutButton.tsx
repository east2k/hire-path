"use client";

import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

const SidebarSignOutButton = () => (
    <SignOutButton>
        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900 transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" />
            Sign out
        </button>
    </SignOutButton>
);

export default SidebarSignOutButton;
