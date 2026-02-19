import { ApplicationStatus } from "@/types/applications-type";

export const APPLICATION_STATUSES: { value: ApplicationStatus; label: string; color: string }[] = [
  { value: "wishlist", label: "Wishlist", color: "bg-indigo-100 text-indigo-700" },
  { value: "applied", label: "Applied", color: "bg-blue-100 text-blue-700" },
  { value: "screening", label: "Screening", color: "bg-violet-100 text-violet-700" },
  { value: "interviewing", label: "Interviewing", color: "bg-amber-100 text-amber-700" },
  { value: "offer", label: "Offer", color: "bg-emerald-100 text-emerald-700" },
  { value: "accepted", label: "Accepted", color: "bg-green-100 text-green-700" },
  { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
  { value: "withdrawn", label: "Withdrawn", color: "bg-gray-100 text-gray-700" },
]

export const getStatusColor = (status: ApplicationStatus): string => {
  return APPLICATION_STATUSES.find((s) => s.value === status)?.color ?? "bg-gray-100 text-gray-700"
}

export const getStatusLabel = (status: ApplicationStatus): string => {
  return APPLICATION_STATUSES.find((s) => s.value === status)?.label ?? status
}
