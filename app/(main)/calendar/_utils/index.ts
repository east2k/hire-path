

export const isUrl = (s: string): boolean => {
    return s.startsWith("http") || s.startsWith("www.");
};

export const formatTimeRange = (isoStart: string, durationMin?: number | null): string => {
    const start = new Date(isoStart);
    const startStr = start.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    if (!durationMin) return startStr;
    const end = new Date(start.getTime() + durationMin * 60_000);
    const endStr = end.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return `${startStr} – ${endStr} (${durationMin} min)`;
};