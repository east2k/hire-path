"use client";

import { useState, useTransition } from "react";
import { FOLLOW_UP_STATUSES } from "@/constants/application-settings";
import { FollowUp } from "@/types/applications-type";
import {
    createFollowUp,
    updateFollowUpStatus,
    deleteFollowUp,
} from "@/app/actions/followUps";
import StandardButton from "@/components/StandardButton";
import StandardInput from "./StandardInput";
import StandardSelect from "./StandardSelect";
import StandardTextarea from "./StandardTextarea";
import { Trash } from "lucide-react";

type FollowUpListProps = {
    followUps: FollowUp[];
    applicationId: string;
};

const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const FollowUpsList = ({ followUps, applicationId }: FollowUpListProps) => {
    const [showForm, setShowForm] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await createFollowUp(applicationId, formData);
            setShowForm(false);
        });
    };

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Follow-ups</h3>
                {!showForm && (
                    <StandardButton
                        title="Add follow-up"
                        variant="primary"
                        size="sm"
                        onClick={() => setShowForm(true)}
                    />
                )}
            </div>

            {showForm && (
                <form
                    action={handleSubmit}
                    className="mb-6 rounded-lg border border-ink-200 bg-ink-50 p-4"
                >
                    <StandardInput
                        id="title"
                        name="title"
                        label="Title"
                        placeholder="e.g., Send thank you email"
                        type="text"
                        required
                    />
                    <div className="mt-4">
                        <StandardInput
                            id="dueDate"
                            name="dueDate"
                            label="Due Date"
                            type="date"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <StandardTextarea
                            id="notes"
                            name="notes"
                            label="Notes (optional)"
                            placeholder="Additional details..."
                            size="min-h-[80px]"
                        />
                    </div>
                    <div className="mt-4 flex gap-2">
                        <StandardButton
                            title={isPending ? "Saving..." : "Save"}
                            variant="primary"
                            size="sm"
                            type="submit"
                            disabled={isPending}
                        />
                        <StandardButton
                            title="Cancel"
                            variant="ghost"
                            size="sm"
                            type="button"
                            onClick={() => setShowForm(false)}
                        />
                    </div>
                </form>
            )}

            {followUps.length === 0 ? (
                <p className="text-sm text-ink-500">No follow-ups yet</p>
            ) : (
                <div className="space-y-3">
                    {followUps.map((followUp) => {
                        const isOverdue = new Date(followUp.dueDate) < new Date();
                        return (
                            <div
                                key={followUp.id}
                                className="rounded-lg border border-ink-100 bg-white p-4"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-ink-900">{followUp.title}</h4>
                                        <p
                                            className={`mt-1 text-sm ${isOverdue && followUp.status === "pending" ? "text-red-500" : "text-ink-500"}`}
                                        >
                                            Due: {formatDate(followUp.dueDate)}
                                        </p>
                                        {followUp.notes && (
                                            <p className="mt-2 text-sm text-ink-500">{followUp.notes}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <StandardSelect
                                            defaultValue={followUp.status}
                                            onChange={(e) =>
                                                updateFollowUpStatus(
                                                    followUp.id,
                                                    e.target.value,
                                                    applicationId
                                                )
                                            }
                                            selectOptions={FOLLOW_UP_STATUSES.map((s) => ({
                                                value: s.value,
                                                label: s.label,
                                            }))}
                                        />
                                        <form
                                            action={deleteFollowUp.bind(null, followUp.id, applicationId)}
                                        >
                                            <button
                                                type="submit"
                                                className="cursor-pointer text-ink-400 hover:text-red-500"
                                            >
                                                <Trash className="h-6 w-6" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FollowUpsList;
