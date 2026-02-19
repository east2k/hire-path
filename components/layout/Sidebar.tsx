import { Briefcase, House, CalendarDays } from "lucide-react";
import NavLink from "./NavLink";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SidebarSignOutButton from "./SignOutButton";

const Sidebar = async () => {
    const user = await currentUser();

    return (
        <aside className="hidden lg:block fixed left-0 top-0 z-40 h-screen w-64 border-r border-ink-100 bg-white">
            <div className="flex h-full flex-col">
                <div className="flex flex-row h-16 items-center  gap-2 border-b border-ink-100 text-blue-ribbon-400 px-6 ">
                    <Image src="/images/logo.png" width={32} height={32} alt="HirePath Logo" />
                    <h1 className="text-xl font-bold">HirePath</h1>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    <NavLink href="/" icon={<House className="w-5 h-5" />}>
                        Dashboard
                    </NavLink>
                    <NavLink href="/applications" icon={<Briefcase className="w-5 h-5" />}>
                        Applications
                    </NavLink>
                    <NavLink href="/calendar" icon={<CalendarDays className="w-5 h-5" />}>
                        Calendar
                    </NavLink>
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
        </aside>
    );
};

export default Sidebar;
