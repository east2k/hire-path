import StandardButton from "@/components/StandardButton";
import StandardInput from "./StandardInput";
import StatusBadge from "@/components/StatusBadge";
import { FOLLOW_UP_STATUSES } from "@/constants/application-settings";
import { Application } from "@/types/applications-type";
import { Trash } from "lucide-react";
import StandardTextarea from "./StandardTextarea";
import StandardSelect from "./StandardSelect";

const FollowUpsList = () => {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Follow-ups</h3>
                {true && <StandardButton title="Add follow-up" variant="primary" size="sm" />}
            </div>

            {true && (
                <form className="mb-6 rounded-lg border border-ink-200 bg-ink-50 p-4">
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
                        <StandardButton title="Save" variant="primary" size="sm" />
                        <StandardButton title="Cancel" variant="ghost" size="sm" />
                    </div>
                </form>
            )}

            {false ? (
                <p className="text-sm text-ink-500">No follow-ups yet</p>
            ) : (
                <div className="space-y-3">
                    <div className="rounded-lg border border-ink-100 bg-white p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-medium">Follow up title here</h4>
                                    <StatusBadge status={"accepted" as Application["status"]} />
                                </div>
                                <p className="mt-1 text-sm">Due: February 14, 2026</p>
                                {false && (
                                    <p className="mt-2 text-sm text-ink-500">
                                        Follow up notes Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Voluptates explicabo omnis ipsum.
                                        Voluptatibus sit, reprehenderit, expedita accusantium eaque
                                        optio blanditiis non excepturi, dolorem quis quisquam odio
                                        doloribus quibusdam saepe quaerat?
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <StandardSelect
                                    selectOptions={FOLLOW_UP_STATUSES.map((s) => ({
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

export default FollowUpsList;
