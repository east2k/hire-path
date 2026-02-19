"use client";

import { useState, useTransition } from "react";
import { Note } from "@/types/applications-type";
import { createNote, deleteNote } from "@/app/actions/notes";
import StandardButton from "@/components/StandardButton";
import StandardTextarea from "./StandardTextarea";
import { Trash } from "lucide-react";

type NotesListProps = {
    notes: Note[];
    applicationId: string;
};

const formatDateTime = (date: Date) =>
    new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });

const NotesList = ({ notes, applicationId }: NotesListProps) => {
    const [showForm, setShowForm] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await createNote(applicationId, formData);
            setShowForm(false);
        });
    };

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-900">Notes</h3>
                {!showForm && (
                    <StandardButton
                        title="Add Note"
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
                    <StandardTextarea
                        id="content"
                        name="content"
                        placeholder="Write your note here..."
                        size="min-h-[120px]"
                    />

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

            {notes.length === 0 ? (
                <p className="text-sm text-ink-500">No notes yet</p>
            ) : (
                <div className="space-y-3">
                    {notes.map((note) => (
                        <div
                            key={note.id}
                            className="rounded-lg border border-ink-100 bg-white p-4"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="whitespace-pre-wrap text-sm text-ink-700">
                                        {note.content}
                                    </p>
                                    <p className="mt-2 text-xs text-ink-400">
                                        {formatDateTime(note.createdAt)}
                                    </p>
                                </div>
                                <form action={deleteNote.bind(null, note.id, applicationId)}>
                                    <button
                                        type="submit"
                                        className="cursor-pointer text-ink-400 hover:text-red-500"
                                    >
                                        <Trash className="h-5 w-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotesList;
