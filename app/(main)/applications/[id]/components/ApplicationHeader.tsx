import { APPLICATION_STATUSES } from "@/utils/status-color-identifier";
import StandardSelect from "./StandardSelect";
import Link from "next/link";
import StandardButton from "@/components/StandardButton";
import { BanknoteIcon, Calendar, MapPin } from "lucide-react";

const ApplicationHeader = () => {
    return (
        <>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-ink-900">Google</h1>
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
                            Pending
                        </div>
                    </div>
                    <p className="mt-1 text-lg text-ink-500">Postion</p>
                </div>

                <div className="flex items-center gap-3">
                    <form>
                        <StandardSelect
                            selectOptions={APPLICATION_STATUSES.map((s) => ({
                                value: s.value,
                                label: s.label,
                            }))}
                        />
                    </form>
                    <Link href={`/applications/5/edit`}>
                        <StandardButton title="Edit" variant="outline" size="sm" />
                    </Link>
                    <StandardButton title="Delete" variant="danger" size="sm" />
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
                {true && (
                    <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        Location
                    </span>
                )}

                {true && (
                    <span className="flex items-center gap-1.5">
                        <BanknoteIcon className="h-4 w-4" />P 50,000
                    </span>
                )}

                {true && (
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        Applied February 14, 2026
                    </span>
                )}
            </div>

            {/* jobposting url or comnpany website */}
            {true && (
                <div className="mt-4 flex gap-4">
                    {true && (
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-ribbon-500 hover:text-blue-ribbon-600"
                        >
                            View Job Posting &rarr;
                        </Link>
                    )}
                    {true && (
                        <Link
                            href="#"
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
