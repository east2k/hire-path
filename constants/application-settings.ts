import {
    ApplicationStatus,
    FollowUpStatus,
    InterviewStatus,
    InterviewType,
} from "@/types/applications-type";

export const APPLICATION_STATUS: { value: ApplicationStatus; label: string; color: string }[] = [
    { value: "applied", label: "Applied", color: "bg-blue-100 text-blue-700" },
    { value: "wishlist", label: "Wishlist", color: "bg-indigo-100 text-indigo-700" },
    { value: "screening", label: "Screening", color: "bg-violet-100 text-violet-700" },
    { value: "interviewing", label: "Interviewing", color: "bg-amber-100 text-amber-700" },
    { value: "offer", label: "Offer", color: "bg-emerald-100 text-emerald-700" },
    { value: "accepted", label: "Accepted", color: "bg-green-100 text-green-700" },
    { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
    { value: "withdrawn", label: "Withdrawn", color: "bg-gray-100 text-gray-700" },
];

export const INTERVIEW_TYPES: { value: InterviewType; label: string }[] = [
    { value: "phone_screen", label: "Phone Screen" },
    { value: "technical", label: "Technical" },
    { value: "behavioral", label: "Behavioral" },
    { value: "onsite", label: "Onsite" },
    { value: "panel", label: "Panel" },
    { value: "final", label: "Final Round" },
    { value: "other", label: "Other" },
];

export const INTERVIEW_STATUSES: { value: InterviewStatus; label: string; color: string }[] = [
    { value: "scheduled", label: "Scheduled", color: "bg-blue-100 text-blue-700" },
    { value: "completed", label: "Completed", color: "bg-green-100 text-green-700" },
    { value: "cancelled", label: "Cancelled", color: "bg-gray-100 text-gray-700" },
];

export const FOLLOW_UP_STATUSES: { value: FollowUpStatus; label: string; color: string }[] = [
    { value: "pending", label: "Pending", color: "bg-amber-100 text-amber-700" },
    { value: "completed", label: "Completed", color: "bg-green-100 text-green-700" },
    { value: "skipped", label: "Skipped", color: "bg-gray-100 text-gray-700" },
];
