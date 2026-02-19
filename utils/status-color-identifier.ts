import { APPLICATION_STATUS, FOLLOW_UP_STATUSES, INTERVIEW_STATUSES } from "@/constants/application-settings";
import { ApplicationStatus, FollowUpStatus, InterviewStatus } from "@/types/applications-type";

type AnyStatus = ApplicationStatus | FollowUpStatus | InterviewStatus;

const ALL_STATUSES = [...APPLICATION_STATUS, ...FOLLOW_UP_STATUSES, ...INTERVIEW_STATUSES];

export const getStatusColor = (status: AnyStatus): string => {
    return ALL_STATUSES.find((s) => s.value === status)?.color ?? "bg-gray-100 text-gray-700";
};

export const getStatusLabel = (status: AnyStatus): string => {
    return ALL_STATUSES.find((s) => s.value === status)?.label ?? status;
};
