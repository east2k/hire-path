import { Application } from "@/types/applications-type";
import ApplicationCard from "./ApplicationCard";

type ApplicationsListProps = {
    applications: Application[];
};

const ApplicationsList = ({ applications }: ApplicationsListProps) => {
    if (applications.length === 0) {
        return (
            <p className="text-sm text-ink-500">No applications found. Add one to get started.</p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
            ))}
        </div>
    );
};

export default ApplicationsList;
