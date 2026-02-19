import StandardButton from "@/components/StandardButton";
import StandardTextarea from "./StandardTextarea";
import { Trash } from "lucide-react";

const NotesList = () => {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Notes</h3>
                {!true && <StandardButton title="Edit notes" variant="secondary" size="sm" />}
            </div>

            {true && (
                <form className="mb-6 rounded-lg border border-ink-200 bg-ink-50 p-4">
                    <StandardTextarea
                        id="notes"
                        name="notes"
                        placeholder="Write your note here..."
                        size="min-h-[120px]"
                    />

                    <div className="mt-4 flex gap-2">
                        <StandardButton title="Save" variant="primary" size="sm" />
                        <StandardButton title="Cancel" variant="ghost" size="sm" />
                    </div>
                </form>
            )}

            {false ? (
                <p className="text-sm text-ink-500">No notes yet</p>
            ) : (
                <div className="space-y-3">
                    <div className="rounded-lg border border-ink-100 bg-white p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <p className="whitespace-pre-wrap text-sm text-ink-700">
                                    Notes content
                                </p>
                                <p className="mt-2 text-xs text-ink-400">
                                    February 14, 2026 at 10:30 AM
                                </p>
                            </div>
                            <button className="cursor-pointer text-ink-400 hover:text-red-500">
                                <Trash className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotesList;
