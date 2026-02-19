import StandardButton from "@/components/StandardButton";
import Link from "next/link";
import StatusFilters from "./_components/StatusFilters";
import ApplicationsList from "./_components/ApplicationsList";

const page = () => {
    return (
        <div>
            <div className="mb-8 flex items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-ink-900">Applications</h1>
                <Link href="/applications/new">
                    <StandardButton title="Add Application" variant="primary" size="md" />
                </Link>
            </div>

            <div className="mb-6">
                <StatusFilters />
            </div>
            <ApplicationsList  />
        </div>
    );
};

export default page;
