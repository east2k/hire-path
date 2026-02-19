import { useMemo } from "react";
import { EventInput } from "@fullcalendar/core";
import type { getCalendarEvents } from "@/db/queries/applications";
import { CalendarEventMeta } from "../_types";

type UseCalendarEventsInput = {
    interviews: Awaited<ReturnType<typeof getCalendarEvents>>["interviews"];
    followUpEvents: Awaited<ReturnType<typeof getCalendarEvents>>["followUpEvents"];
    applicationEvents: Awaited<ReturnType<typeof getCalendarEvents>>["applicationEvents"];
};

export function useCalendarEvents({
    interviews,
    followUpEvents,
    applicationEvents,
}: UseCalendarEventsInput): EventInput[] {
    return useMemo(
        () => [
            ...interviews.map((i) => ({
                id: i.id,
                title: i.title,
                start: new Date(i.scheduledAt!).toISOString(),
                end: i.duration
                    ? new Date(
                          new Date(i.scheduledAt!).getTime() + i.duration * 60_000,
                      ).toISOString()
                    : undefined,
                backgroundColor: "#dbeafe",
                borderColor: "#3b82f6",
                textColor: "#1e40af",
                extendedProps: {
                    type: "interview",
                    applicationId: i.applicationId,
                    company: i.company,
                    position: i.position,
                    duration: i.duration,
                    location: i.location,
                    interviewType: i.type,
                    interviewStatus: i.status,
                    rawDate: i.scheduledAt!.toISOString(),
                } satisfies Omit<CalendarEventMeta, "title">,
            })),
            ...followUpEvents.map((f) => ({
                id: f.id,
                title: f.title,
                start: new Date(f.dueDate).toISOString(),
                allDay: true,
                backgroundColor: "#fef3c7",
                borderColor: "#f59e0b",
                textColor: "#92400e",
                extendedProps: {
                    type: "followup",
                    applicationId: f.applicationId,
                    company: f.company,
                    position: f.position,
                    followUpStatus: f.status,
                    followUpNotes: f.notes,
                    rawDate: f.dueDate!.toISOString(),
                } satisfies Omit<CalendarEventMeta, "title">,
            })),
            ...applicationEvents.map((a) => ({
                id: a.id,
                title: `${a.company} – ${a.position}`,
                start: new Date(a.appliedDate!).toISOString(),
                allDay: true,
                backgroundColor: "#d1fae5",
                borderColor: "#10b981",
                textColor: "#065f46",
                extendedProps: {
                    type: "application",
                    applicationId: a.id,
                    company: a.company,
                    position: a.position,
                    applicationStatus: a.status,
                    rawDate: a.appliedDate!.toISOString(),
                } satisfies Omit<CalendarEventMeta, "title">,
            })),
        ],
        [interviews, followUpEvents, applicationEvents],
    );
}
