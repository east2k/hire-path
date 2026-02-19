
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

export type InterviewStage = {
    id: string
    applicationId: string
    type: string
    title: string
    scheduledAt: Date | null
    duration: number | null
    location: string | null
    interviewers: string | null
    status: string
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export type Note = {
    id: string
    applicationId: string
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export type FollowUp = {
    id: string
    applicationId: string
    title: string
    dueDate: Date
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}

export type ApplicationWithRelations = Application & {
    interviews: InterviewStage[]
    notes: Note[]
    followUps: FollowUp[]
}
