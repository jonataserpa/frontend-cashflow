import { routes } from "@/app/constants";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
                <Sidebar routes={routes} />
            </div>
            <main className="md:pl-72 pb-10">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
