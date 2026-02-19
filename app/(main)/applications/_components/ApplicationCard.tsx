import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import { Application } from "@/types/applications-type";
import { BanknoteIcon, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const ApplicationCard = () => {
    return (
        <Link href={`/applications/5`}>
            <Card>
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold text-ink-900">Company</h3>
                        <p className="truncate text-sm text-ink-500">Junior Web Dev</p>
                    </div>
                    <StatusBadge status={"accepted" as Application["status"]} />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500">
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
            </Card>
        </Link>
    );
};

export default ApplicationCard;
