import { Application } from "@/types/applications-type";
import { getStatusColor, getStatusLabel } from "@/utils/status-color-identifier";
import { BanknoteIcon, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import ApplicationControls from "./ApplicationControls";

type ApplicationHeaderProps = {
    application: Application;
};

const ApplicationHeader = ({ application }: ApplicationHeaderProps) => {
    return (
        <>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-ink-900">{application.company}</h1>
                        <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(application.status)}`}
                        >
                            {getStatusLabel(application.status)}
                        </div>
                    </div>
                    <p className="mt-1 text-lg text-ink-500">{application.position}</p>
                </div>

                <ApplicationControls
                    applicationId={application.id}
                    currentStatus={application.status}
                />
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
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
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                )}
            </div>

            {(application.jobPostingUrl || application.companyWebsite) && (
                <div className="mt-4 flex gap-4">
                    {application.jobPostingUrl && (
                        <Link
                            href={application.jobPostingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-ribbon-500 hover:text-blue-ribbon-600"
                        >
                            View Job Posting &rarr;
                        </Link>
                    )}
                    {application.companyWebsite && (
                        <Link
                            href={application.companyWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-ribbon-500 hover:text-blue-ribbon-600"
                        >
                            Company Website &rarr;
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default ApplicationHeader;
