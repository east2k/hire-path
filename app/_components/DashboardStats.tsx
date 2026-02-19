import Card from "@/components/Card";

type DashboardStatsProps = {
    total: number;
    interviewing: number;
    pendingFollowUps: number;
    offers: number;
};

const DashboardStats = ({ total, interviewing, pendingFollowUps, offers }: DashboardStatsProps) => {
    return (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
                <p className="text-sm text-ink-500">Total Applications</p>
                <p className="mt-1 text-3xl font-bold text-ink-900">{total}</p>
            </Card>

            <Card>
                <p className="text-sm text-ink-500">Interviews Scheduled</p>
                <p className="mt-1 text-3xl font-bold text-ink-900">{interviewing}</p>
            </Card>

            <Card>
                <p className="text-sm text-ink-500">Pending Follow-ups</p>
                <p className="mt-1 text-3xl font-bold text-ink-900">{pendingFollowUps}</p>
            </Card>

            <Card>
                <p className="text-sm text-ink-500">Offers</p>
                <p className="mt-1 text-3xl font-bold text-ink-900">{offers}</p>
            </Card>
        </div>
    );
};

export default DashboardStats;
