import Sidebar from "@/components/layout/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Sidebar />
            <div className="ml-64 min-h-screen p-8">{children}</div>
        </main>
    );
};

export default MainLayout;
