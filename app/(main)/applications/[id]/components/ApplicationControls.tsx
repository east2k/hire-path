"use client";

import { updateApplicationStatus, deleteApplication } from "@/app/actions/applications";
import { APPLICATION_STATUSES } from "@/utils/status-color-identifier";
import StandardButton from "@/components/StandardButton";
import StandardSelect from "./StandardSelect";
import Link from "next/link";

type ApplicationControlsProps = {
    applicationId: string;
    currentStatus: string;
};

const ApplicationControls = ({ applicationId, currentStatus }: ApplicationControlsProps) => {
    return (
        <div className="flex items-center gap-3">
            <StandardSelect
                defaultValue={currentStatus}
                onChange={(e) => updateApplicationStatus(applicationId, e.target.value)}
                selectOptions={APPLICATION_STATUSES.map((s) => ({
                    value: s.value,
                    label: s.label,
                }))}
            />
            <Link href={`/applications/${applicationId}/edit`}>
                <StandardButton title="Edit" variant="outline" size="sm" />
            </Link>
            <form action={() => deleteApplication(applicationId)}>
                <StandardButton title="Delete" variant="danger" size="sm" type="submit" />
            </form>
        </div>
    );
};

export default ApplicationControls;
