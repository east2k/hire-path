"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarEvents } from "@/db/queries/applications";
import CalendarEventPopup from "./CalendarEventPopup";
import { useCalendarEvents } from "../_hooks/useCalendarEvents";
import { useCalendarControls } from "../_hooks/useCalendarControls";

type CalendarViewProps = {
    interviews: Awaited<ReturnType<typeof getCalendarEvents>>["interviews"];
    followUpEvents: Awaited<ReturnType<typeof getCalendarEvents>>["followUpEvents"];
    applicationEvents: Awaited<ReturnType<typeof getCalendarEvents>>["applicationEvents"];
};

const VIEWS = [
    { view: "dayGridMonth", label: "Month" },
    { view: "timeGridWeek", label: "Week" },
    { view: "timeGridDay", label: "Day" },
    { view: "listMonth", label: "List" },
] as const;

const CalendarView = ({ interviews, followUpEvents, applicationEvents }: CalendarViewProps) => {
    const events = useCalendarEvents({ interviews, followUpEvents, applicationEvents });
    const {
        calendarRef,
        selectedEvent,
        setSelectedEvent,
        currentTitle,
        currentView,
        handleEventClick,
        handleDatesSet,
        goToday,
        goPrev,
        goNext,
        changeView,
    } = useCalendarControls();

    return (
        <div className="relative">
            <div className="fc-hire-path rounded-xl border border-ink-100 bg-white shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row items-start justify-between px-4 pt-4 pb-3 border-b border-ink-100">
                    <div className="flex flex-row md:flex-col justify-between gap-2 w-full">
                        <h2 className="text-md md:text-xl font-bold text-ink-900">
                            {currentTitle}
                        </h2>
                        <div className="flex flex-row gap-2">
                            <button
                                onClick={goToday}
                                className="self-start rounded-md border border-ink-200 px-3 py-1 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition-colors cursor-pointer"
                            >
                                Today
                            </button>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={goPrev}
                                    className="rounded-md border border-ink-200 p-1.5 text-ink-600 hover:bg-ink-50 transition-colors cursor-pointer"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="rounded-md border border-ink-200 p-1.5 text-ink-600 hover:bg-ink-50 transition-colors cursor-pointer"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center gap-1 rounded-lg bg-ink-50 p-1 mt-5 md:mt-0">
                        {VIEWS.map(({ view, label }) => (
                            <button
                                key={view}
                                onClick={() => changeView(view)}
                                className={`flex-1 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors cursor-pointer ${
                                    currentView === view
                                        ? "bg-blue-ribbon-400 text-white shadow-sm"
                                        : "text-ink-600 hover:text-ink-900"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={false}
                    events={events}
                    eventClick={handleEventClick}
                    eventDisplay="block"
                    eventTimeFormat={{
                        hour: "numeric",
                        minute: "2-digit",
                        meridiem: "short",
                    }}
                    datesSet={handleDatesSet}
                    height="auto"
                    dayMaxEvents={3}
                />
            </div>

            {selectedEvent && (
                <CalendarEventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
};

export default CalendarView;
