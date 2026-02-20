import StandardButton from "@/components/StandardButton";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
    getDashboardStats,
    getUpcomingInterviews,
    getPendingFollowUps,
    getLatestApplications,
} from "@/db/queries/applications";
import DashboardStats from "./_components/DashboardStats";
import DashboardContents from "./_components/DashboardContents";

const MainPage = async () => {
    const { userId } = await auth();
    if (!userId) return null;

    const [stats, upcomingInterviews, pendingFollowUps, latestApplications] = await Promise.all([
        getDashboardStats(userId),
        getUpcomingInterviews(userId),
        getPendingFollowUps(userId),
        getLatestApplications(userId),
    ]);

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-ink-900">Dashboard</h1>
                <Link href="/applications/new">
                    <StandardButton title="Add Application" variant="primary" size="md" />
                </Link>
            </div>
            <DashboardStats
                total={stats.total}
                interviewing={stats.interviewing}
                pendingFollowUps={stats.pendingFollowUps}
                offers={stats.offers}
            />
            <DashboardContents
                stats={stats}
                upcomingInterviews={upcomingInterviews}
                pendingFollowUps={pendingFollowUps}
                latestApplications={latestApplications}
            />
        </div>
    );
};

export default MainPage;
