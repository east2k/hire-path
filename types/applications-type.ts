
export type Application = {
  id: string
  company: string
  position: string
  status: ApplicationStatus
  jobPostingUrl: string | null
  companyWebsite: string | null
  location: string | null
  salary: string | null
  appliedDate: Date | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type ApplicationStatus =
    | "wishlist"
    | "applied"
    | "screening"
    | "interviewing"
    | "offer"
    | "accepted"
    | "rejected"
    | "withdrawn";

export type InterviewType =
    | "phone_screen"
    | "technical"
    | "behavioral"
    | "onsite"
    | "panel"
    | "final"
    | "other";

export type InterviewStatus = "scheduled" | "completed" | "cancelled";

export type FollowUpStatus = "pending" | "completed" | "skipped";

