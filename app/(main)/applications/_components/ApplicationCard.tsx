import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import { Application } from "@/types/applications-type";
import { BanknoteIcon, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

type ApplicationCardProps = {
    application: Application;
};

const ApplicationCard = ({ application }: ApplicationCardProps) => {
    return (
        <Link href={`/applications/${application.id}`}>
            <Card>
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold text-ink-900">{application.company}</h3>
                        <p className="truncate text-sm text-ink-500">{application.position}</p>
                    </div>
                    <StatusBadge status={application.status} />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500">
                    {application.location && (
                        <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {application.location}
                        </span>
                    )}

                    {application.salary && (
                        <span className="flex items-center gap-1.5">
                            <BanknoteIcon className="h-4 w-4" />
                            {application.salary}
                        </span>
                    )}

                    {application.appliedDate && (
                        <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            Applied{" "}
                            {new Date(application.appliedDate).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                    )}
                </div>
            </Card>
        </Link>
    );
};

export default ApplicationCard;
