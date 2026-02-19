export type CalendarEventMeta = {
    type: "interview" | "followup" | "application";
    title: string;
    applicationId: string;
    company: string;
    position: string;
    duration?: number | null;
    location?: string | null;
    interviewType?: string;
    interviewStatus?: string;
    followUpStatus?: string;
    followUpNotes?: string | null;
    applicationStatus?: string;
    rawDate: string;
};
