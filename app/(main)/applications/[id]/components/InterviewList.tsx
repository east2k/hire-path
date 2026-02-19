"use client";

import { useState, useTransition } from "react";
import { INTERVIEW_STATUSES, INTERVIEW_TYPES } from "@/constants/application-settings";
import { InterviewStage } from "@/types/applications-type";
import { createInterview, updateInterviewStatus, deleteInterview } from "@/app/actions/interviews";
import StandardInput from "./StandardInput";
import StandardSelect from "./StandardSelect";
import StandardButton from "@/components/StandardButton";
import { Trash } from "lucide-react";

type InterviewListProps = {
    interviews: InterviewStage[];
    applicationId: string;
};

const getTypeLabel = (type: string) => INTERVIEW_TYPES.find((t) => t.value === type)?.label ?? type;

const formatDate = (date: Date) =>
    new Date(date).toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });

const InterviewList = ({ interviews, applicationId }: InterviewListProps) => {
    const [showForm, setShowForm] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await createInterview(applicationId, formData);
            setShowForm(false);
        });
    };

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Interviews</h3>
                {!showForm && (
                    <StandardButton
                        title="Add Interview"
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
                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="title"
                            name="title"
                            label="Title"
                            placeholder="e.g., Technical Interview Round 1"
                            required
                            type="text"
                        />
                        <StandardSelect
                            label="Interview Type"
                            name="type"
                            required
                            selectOptions={INTERVIEW_TYPES.map((s) => ({
                                value: s.value,
                                label: s.label,
                            }))}
                        />
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="scheduledAt"
                            name="scheduledAt"
                            label="Scheduled Date & Time"
                            type="datetime-local"
                        />
                        <StandardInput
                            id="duration"
                            name="duration"
                            label="Duration (minutes)"
                            type="number"
                            placeholder="60"
                        />
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="location"
                            name="location"
                            label="Location / Link"
                            placeholder="Zoom link or office address"
                            type="text"
                        />
                        <StandardInput
                            id="interviewers"
                            name="interviewers"
                            label="Interviewers"
                            placeholder="John, Jane"
                            type="text"
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

            {interviews.length === 0 ? (
                <p className="text-sm text-ink-500">No interviews scheduled yet</p>
            ) : (
                <div className="space-y-3">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            className="rounded-lg border border-ink-100 bg-white p-4"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="sm:min-w-0 sm:flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h4 className="font-medium text-ink-900">
                                            {interview.title}
                                        </h4>
                                        <span className="rounded-full bg-ink-100 px-2 py-0.5 text-xs text-ink-600">
                                            {getTypeLabel(interview.type)}
                                        </span>
                                    </div>
                                    {interview.scheduledAt && (
                                        <p className="mt-1 text-sm text-ink-500">
                                            {formatDate(interview.scheduledAt)}
                                            {interview.duration && ` (${interview.duration} mins)`}
                                        </p>
                                    )}
                                    {interview.location && (
                                        <p className="mt-1 text-sm text-ink-500">
                                            {interview.location}
                                        </p>
                                    )}
                                    {interview.interviewers && (
                                        <p className="mt-1 text-sm text-ink-500">
                                            With: {interview.interviewers}
                                        </p>
                                    )}
                                    {interview.feedback && (
                                        <p className="mt-2 text-sm text-ink-700">
                                            {interview.feedback}
                                        </p>
                                    )}
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <StandardSelect
                                        defaultValue={interview.status}
                                        onChange={(e) =>
                                            updateInterviewStatus(
                                                interview.id,
                                                e.target.value,
                                                applicationId,
                                            )
                                        }
                                        selectOptions={INTERVIEW_STATUSES.map((s) => ({
                                            value: s.value,
                                            label: s.label,
                                        }))}
                                    />
                                    <form
                                        action={deleteInterview.bind(
                                            null,
                                            interview.id,
                                            applicationId,
                                        )}
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default InterviewList;
