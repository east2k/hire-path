import { ApplicationStatus, FollowUpStatus, InterviewStatus } from "@/types/applications-type";
import { getStatusColor, getStatusLabel } from "@/utils/status-color-identifier";

type StatusBadgeProps = {
    status: ApplicationStatus | FollowUpStatus | InterviewStatus;
};
const StatusBadge = ({ status }: StatusBadgeProps) => {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(status)}`}
        >
            {getStatusLabel(status)}
        </span>
    );
};

export default StatusBadge;
