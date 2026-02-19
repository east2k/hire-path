"use client";

import { X, Building2, Clock, Link2, FileText, Pencil } from "lucide-react";
import Link from "next/link";
import StandardButton from "@/components/StandardButton";
import { CalendarEventMeta } from "../_types";
import { EVENT_STYLES } from "../_constants";
import { formatTimeRange, isUrl } from "../_utils";

type CalendarEventPopupProps = {
    event: CalendarEventMeta;
    onClose: () => void;
};

const CalendarEventPopup = ({ event, onClose }: CalendarEventPopupProps) => {
    const styles = EVENT_STYLES[event.type];

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={onClose} />

            <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-ink-100 bg-white shadow-xl lg:bottom-auto lg:right-0 lg:top-0 lg:left-auto lg:h-screen lg:w-80 lg:rounded-none lg:border-t-0 lg:border-l">
                <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                        <span
                            className={`rounded px-2 py-1 text-xs font-bold uppercase tracking-wider ${styles.badge}`}
                        >
                            {styles.label}
                        </span>
                        <button
                            onClick={onClose}
                            className="text-ink-400 hover:text-ink-900 transition-colors cursor-pointer"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-100">
                            <Building2 className="h-5 w-5 text-ink-500" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-bold leading-tight text-ink-900">
                                {event.company} – {event.position}
                            </h3>
                            <p className="truncate text-sm text-ink-500">{event.title}</p>
                        </div>
                    </div>

                    <div className="mb-3 flex items-center gap-2 text-sm text-ink-600">
                        <Clock className="h-4 w-4 shrink-0 text-ink-400" />
                        {event.type === "interview" && (
                            <span>{formatTimeRange(event.rawDate, event.duration)}</span>
                        )}
                        {event.type === "followup" && (
                            <span>
                                Due:{" "}
                                {new Date(event.rawDate).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        )}
                        {event.type === "application" && (
                            <span>
                                Applied:{" "}
                                {new Date(event.rawDate).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        )}
                    </div>

                    {event.type === "interview" && event.location && (
                        <div className="mb-3 flex items-center gap-2 text-sm">
                            <Link2 className="h-4 w-4 shrink-0 text-ink-400" />
                            {isUrl(event.location) ? (
                                <a
                                    href={event.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="truncate text-blue-ribbon-400 hover:underline"
                                >
                                    Join Meeting
                                </a>
                            ) : (
                                <span className="truncate text-ink-600">{event.location}</span>
                            )}
                        </div>
                    )}

                    {event.followUpNotes && (
                        <div className="mb-3 flex items-start gap-2 text-sm text-ink-600">
                            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                            <span>{event.followUpNotes}</span>
                        </div>
                    )}

                    <div className="mt-6 flex items-center gap-2 border-t border-ink-100 pt-4">
                        <Link href={`/applications/${event.applicationId}`} className="flex-1">
                            <StandardButton title="View Application" variant="primary" size="sm" />
                        </Link>
                        <Link href={`/applications/${event.applicationId}/edit`}>
                            <button className="rounded-md border border-ink-200 p-2 text-ink-500 hover:bg-ink-50 transition-colors cursor-pointer">
                                <Pencil className="h-4 w-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarEventPopup;
