type TableRow = {
    color: string;
    label: string;
    labelClass: string;
    w: string;
    highlight?: boolean;
};

const tableRows: TableRow[] = [
    { color: "bg-blue-ribbon-500/10", label: "Applied",      labelClass: "bg-blue-100 text-blue-700",       w: "w-full max-w-48" },
    { color: "bg-emerald-100",        label: "Interviewing", labelClass: "bg-amber-100 text-amber-700",     w: "w-full max-w-40", highlight: true },
    { color: "bg-blue-ribbon-500",    label: "Offer",        labelClass: "bg-emerald-100 text-emerald-700", w: "w-full max-w-52" },
    { color: "bg-violet-100",         label: "Screening",    labelClass: "bg-violet-100 text-violet-700",   w: "w-full max-w-44" },
    { color: "bg-red-100",            label: "Rejected",     labelClass: "bg-red-100 text-red-700",         w: "w-full max-w-36" },
];

const DashboardPreviewSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto bg-white rounded-xl border border-ink-200 overflow-hidden shadow-xl relative">
                <div className="p-6 md:p-12 lg:p-20 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-ink-950 mb-8">
                        One View. Total Control.
                    </h2>
                    <p className="text-ink-500 text-lg mb-12">
                        The HirePath dashboard is built to give you a competitive edge.
                        Status badges, and detailed logging help you
                        focus on what matters — landing the offer.
                    </p>
                    <div className="relative rounded-xl border border-ink-100 bg-ink-50 p-4 shadow-inner">
                        <div className="rounded-lg border border-ink-100 bg-white overflow-hidden">
                            <div className="flex items-center gap-4 px-6 py-4 border-b border-ink-100 bg-ink-50">
                                <div className="h-4 w-32 bg-ink-200 rounded"></div>
                                <div className="h-4 w-24 bg-ink-100 rounded ml-auto hidden sm:block"></div>
                                <div className="h-4 w-20 bg-ink-100 rounded hidden sm:block"></div>
                                <div className="h-4 w-16 bg-ink-100 rounded hidden sm:block"></div>
                            </div>
                            <div className="divide-y divide-ink-100">
                                {tableRows.map((row, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-4 px-6 py-4 ${row.highlight ? "bg-blue-ribbon-50/50" : ""}`}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-lg ${row.color} shrink-0`}
                                        ></div>
                                        <div className="flex-1 space-y-2">
                                            <div
                                                className={`h-3 ${row.w} bg-ink-200 rounded`}
                                            ></div>
                                            <div className="h-2 w-3/4 max-w-[112px] bg-ink-100 rounded"></div>
                                        </div>
                                        <span
                                            className={`text-xs ${row.labelClass} px-2.5 py-1 rounded-full font-medium`}
                                        >
                                            {row.label}
                                        </span>
                                        <div className="h-3 w-20 bg-ink-100 rounded hidden sm:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sm:absolute sm:top-10 sm:right-10 mt-4 sm:mt-0 flex flex-row flex-wrap sm:flex-col gap-3">
                            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                                    Offer Accepted
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                                    Pending Feedback
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                                    Rejected
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default DashboardPreviewSection;
