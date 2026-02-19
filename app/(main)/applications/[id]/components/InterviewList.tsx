import { INTERVIEW_STATUSES, INTERVIEW_TYPES } from "@/constants/application-settings";
import StandardInput from "./StandardInput";
import StandardButton from "@/components/StandardButton";
import { Trash } from "lucide-react";
import { Application } from "@/types/applications-type";
import StatusBadge from "@/components/StatusBadge";
import StandardSelect from "./StandardSelect";

const InterviewList = () => {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Interviews</h3>
                {true && <StandardButton title="Add Interview" variant="primary" size="sm" />}
            </div>

            {true && (
                <form className="mb-6 rounded-lg border border-ink-200 bg-ink-50 p-4">
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
                        <StandardButton title="Save" variant="primary" size="sm" />
                        <StandardButton title="Cancel" variant="ghost" size="sm" />
                    </div>
                </form>
            )}

            {false ? (
                <p className="text-sm text-ink-500">No interviews scheduled yet</p>
            ) : (
                <div className="space-y-3">
                    <div className="rounded-lg border border-ink-100 bg-white p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-medium text-ink-900">Title</h4>
                                    <StatusBadge status={"interviewing" as Application["status"]} />
                                </div>
                                <p className="mt-1 text-sm text-ink-500">
                                    Mon, Jan 1, 2024 at 10:00 AM (60 mins)
                                </p>
                                {true && <p className="mt-1 text-sm text-ink-500">Location</p>}
                                {true && (
                                    <p className="mt-1 text-sm text-ink-500">
                                        With: Mark Zuckerberg
                                    </p>
                                )}
                                {true && <p className="mt-2 text-sm text-ink-700">Feedback</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <StandardSelect
                                    selectOptions={INTERVIEW_STATUSES.map((s) => ({
                                        value: s.value,
                                        label: s.label,
                                    }))}
                                />
                                <button className="cursor-pointer text-ink-400 hover:text-red-500">
                                    <Trash className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterviewList;
