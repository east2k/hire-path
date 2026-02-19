import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Sidebar />
            <MobileNav />
            <div className="min-h-screen p-4 pt-18 lg:ml-64 lg:p-8 lg:pt-8">{children}</div>
        </main>
    );
};

export default MainLayout;
