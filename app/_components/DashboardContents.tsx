import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import { FollowUpStatus, InterviewStatus } from "@/types/applications-type";
import Link from "next/link";
import {
    getDashboardStats,
    getUpcomingInterviews,
    getPendingFollowUps,
} from "@/db/queries/applications";

type DashboardContentsProps = {
    stats: Awaited<ReturnType<typeof getDashboardStats>>;
    upcomingInterviews: Awaited<ReturnType<typeof getUpcomingInterviews>>;
    pendingFollowUps: Awaited<ReturnType<typeof getPendingFollowUps>>;
};

const DashboardContents = ({ upcomingInterviews, pendingFollowUps }: DashboardContentsProps) => {
    console.log(upcomingInterviews);
    return (
        <>
            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-ink-900">
                        Upcoming Interviews
                    </div>
                    {upcomingInterviews.length === 0 ? (
                        <p className="text-sm text-ink-500">No upcoming interviews</p>
                    ) : (
                        <div className="space-y-3">
                            {upcomingInterviews.map((interview) => {
                                return (
                                    <Link
                                        key={interview.id}
                                        href={`/applications/${interview.applicationId}`}
                                        className="block rounded-lg border border-ink-100 p-3 transition-colors hover:bg-ink-50"
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <p className="font-medium text-ink-900">
                                                    {interview.title}
                                                </p>
                                                <p className="text-sm text-ink-500">
                                                    {interview.company} — {interview.position}
                                                </p>
                                                {interview.scheduledAt && (
                                                    <p className="mt-1 text-sm text-ink-500">
                                                        {new Date(
                                                            interview.scheduledAt,
                                                        ).toLocaleString("en-US", {
                                                            month: "long",
                                                            day: "numeric",
                                                            year: "numeric",
                                                            hour: "numeric",
                                                            minute: "2-digit",
                                                        })}
                                                    </p>
                                                )}
                                            </div>
                                            <StatusBadge
                                                status={interview.status as InterviewStatus}
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </Card>

                <Card>
                    <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-ink-900">
                        Pending Follow-ups
                    </div>
                    {pendingFollowUps.length === 0 ? (
                        <p className="text-sm text-ink-500">No pending follow-ups</p>
                    ) : (
                        <div className="space-y-3">
                            {pendingFollowUps.map((followUp) => {
                                const isOverdue = new Date(followUp.dueDate) < new Date();
                                return (
                                    <Link
                                        key={followUp.id}
                                        href={`/applications/${followUp.applicationId}`}
                                        className="block rounded-lg border border-ink-100 p-3 transition-colors hover:bg-ink-50"
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <p className="font-medium text-ink-900">
                                                    {followUp.title}
                                                </p>
                                                <p className="text-sm text-ink-500">
                                                    {followUp.company} — {followUp.position}
                                                </p>
                                                <p
                                                    className={`mt-1 text-sm ${isOverdue ? "text-red-500" : "text-ink-500"}`}
                                                >
                                                    Due:{" "}
                                                    {new Date(followUp.dueDate).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "long",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        },
                                                    )}
                                                </p>
                                            </div>
                                            <StatusBadge
                                                status={followUp.status as FollowUpStatus}
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </Card>
            </div>
        </>
    );
};

export default DashboardContents;
