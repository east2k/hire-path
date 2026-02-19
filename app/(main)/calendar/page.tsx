import { auth } from "@clerk/nextjs/server";
import { getCalendarEvents } from "@/db/queries/applications";
import CalendarView from "./_components/CalendarView";

const CalendarPage = async () => {
    const { userId } = await auth();
    if (!userId) return null;

    const { interviews, followUpEvents, applicationEvents } = await getCalendarEvents(userId);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-ink-900">Calendar</h1>
            </div>
            <CalendarView
                interviews={interviews}
                followUpEvents={followUpEvents}
                applicationEvents={applicationEvents}
            />
        </div>
    );
};

export default CalendarPage;
