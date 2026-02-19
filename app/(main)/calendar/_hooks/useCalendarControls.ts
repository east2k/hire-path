import { useCallback, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { DatesSetArg, EventClickArg } from "@fullcalendar/core";
import { CalendarEventMeta } from "../_components/CalendarEventPopup";

export function useCalendarControls() {
    const calendarRef = useRef<FullCalendar>(null);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEventMeta | null>(null);
    const [currentTitle, setCurrentTitle] = useState(() =>
        new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    );
    const [currentView, setCurrentView] = useState("dayGridMonth");

    const handleEventClick = useCallback((arg: EventClickArg) => {
        setSelectedEvent({
            title: arg.event.title,
            ...(arg.event.extendedProps as Omit<CalendarEventMeta, "title">),
        });
    }, []);

    const handleDatesSet = useCallback((arg: DatesSetArg) => {
        setCurrentTitle(
            calendarRef.current?.getApi().view.title ??
                new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
        );
        setCurrentView(arg.view.type);
    }, []);

    const goToday = useCallback(() => calendarRef.current?.getApi().today(), []);
    const goPrev = useCallback(() => calendarRef.current?.getApi().prev(), []);
    const goNext = useCallback(() => calendarRef.current?.getApi().next(), []);
    const changeView = useCallback(
        (view: string) => calendarRef.current?.getApi().changeView(view),
        [],
    );

    return {
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
    };
}
