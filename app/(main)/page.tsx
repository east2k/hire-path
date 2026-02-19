import Card from "@/components/Card";
import StandardButton from "@/components/StandardButton";
import StatusBadge from "@/components/StatusBadge";
import { Application } from "@/types/applications-type";
import Link from "next/link";

const MainPage = () => {
    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-ink-900">Dashboard</h1>
                <Link href="/applications/new">
                    <StandardButton title="Add Application" variant="primary" size="md" />
                </Link>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <p className="text-sm text-ink-500">Total Applications</p>
                    <p className="mt-1 text-3xl font-bold text-ink-900">5</p>
                </Card>

                <Card>
                    <p className="text-sm text-ink-500">Interviews Scheduled</p>
                    <p className="mt-1 text-3xl font-bold text-ink-900">5</p>
                </Card>

                <Card>
                    <p className="text-sm text-ink-500">Pending Follow-ups</p>
                    <p className="mt-1 text-3xl font-bold text-ink-900">5</p>
                </Card>

                <Card>
                    <p className="text-sm text-ink-500">Offers</p>
                    <p className="mt-1 text-3xl font-bold text-ink-900">5</p>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-ink-900">
                            Upcoming Interviews
                        </div>
                    </div>
                    <div>
                        {false ? (
                            <p className="text-sm text-ink-500">No upcoming interviews</p>
                        ) : (
                            <div className="space-y-3">
                                <Link
                                    href={`/applications/5`}
                                    className="block rounded-lg border border-ink-100 p-3 transition-colors hover:bg-ink-50"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="font-medium text-ink-900">Title Here</p>
                                            <p className="text-sm text-ink-500">
                                                Google - Junior Web Developer
                                            </p>
                                            <p className="mt-1 text-sm text-ink-500">
                                                February 14, 2026 at 10:30 AM
                                            </p>
                                        </div>
                                        <StatusBadge
                                            status={"interviewing" as Application["status"]}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </Card>

                <Card>
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-ink-900">
                            Pending Follow-ups
                        </div>
                    </div>
                    <div>
                        {true ? (
                            <p className="text-sm text-ink-500">No pending follow-ups</p>
                        ) : (
                            <div className="space-y-3">
                                <Link
                                    href={`/applications/5`}
                                    className="block rounded-lg border border-ink-100 p-3 transition-colors hover:bg-ink-50"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="font-medium text-ink-900">Title Here</p>
                                            <p className="text-sm text-ink-500">
                                                Google - Junior Web Developer
                                            </p>
                                            <p
                                                className={`mt-1 text-sm ${false ? "text-red-500" : "text-ink-500"}`}
                                            >
                                                Due: February 14, 2026
                                            </p>
                                        </div>
                                        <StatusBadge
                                            status={"screening" as Application["status"]}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MainPage;
