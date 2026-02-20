import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-6"
            style={{
                background:
                    "radial-gradient(circle at top right, rgba(59,118,246,0.07), transparent 50%), radial-gradient(circle at bottom left, rgba(59,118,246,0.04), transparent 50%)",
            }}
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-ribbon-500/10 border border-blue-ribbon-500/20 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-ribbon-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-ribbon-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-ribbon-500">
                            Become 100% more efficient
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight text-ink-950 uppercase">
                        Master Your <br /> <span className="text-blue-ribbon-500">Job Search</span>
                    </h1>

                    <p className="text-lg md:text-xl text-ink-500 max-w-lg leading-relaxed">
                        Track your application and stay organized, prepared, and 3x faster than the
                        competition.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/sign-up"
                            className="bg-blue-ribbon-500 text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-blue-ribbon-600 hover:shadow-[0_0_30px_rgba(59,118,246,0.4)] transition-all flex items-center gap-2"
                        >
                            Get Started for free
                        </Link>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-ribbon-500/10 rounded-xl blur-3xl group-hover:bg-blue-ribbon-500/15 transition-all"></div>
                    <div className="relative bg-white border border-ink-200 rounded-xl overflow-hidden shadow-xl">
                        <div className="h-12 bg-ink-50 border-b border-ink-100 flex items-center px-6 justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/60"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400/60"></div>
                            </div>
                            <div className="bg-ink-100 px-4 py-1 rounded-full text-[10px] text-ink-400">
                                hirepath.app/dashboard
                            </div>
                        </div>
                        <div className="p-6 grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold text-ink-400 uppercase tracking-widest">
                                    Interview
                                </div>
                                <div className="relative bg-ink-50 border border-ink-100 p-4 rounded-xl space-y-3">
                                    <div className="relative md:absolute top-0 md:top-3 right-0 md:right-2 flex justify-end items-center">
                                        <span className="text-[10px] bg-blue-ribbon-500/10 text-blue-ribbon-500 px-2 py-0.5 rounded-full font-medium">
                                            Scheduled
                                        </span>
                                    </div>
                                    <div className="h-3 w-3/4 bg-ink-200 rounded"></div>
                                    <div className="h-2 w-1/2 bg-ink-100 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold text-ink-400 uppercase tracking-widest">
                                    Offers
                                </div>
                                <div className="relative bg-blue-ribbon-50 border border-blue-ribbon-200 p-4 rounded-xl space-y-3">
                                    <div className="relative md:absolute top-0 md:top-3 right-0 md:right-2 flex justify-end items-center">
                                        <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-medium">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="h-3 w-3/4 bg-blue-ribbon-200 rounded"></div>
                                    <div className="h-2 w-1/2 bg-blue-ribbon-100 rounded"></div>
                                </div>
                            </div>
                            <div className="space-y-4 col-span-2">
                                <div className="text-[10px] font-bold text-ink-400 uppercase tracking-widest">
                                    Applied
                                </div>
                                <div className="relative bg-ink-50 border border-ink-100 p-4 rounded-xl space-y-3">
                                    <div className="relative md:absolute top-0 md:top-3 right-0 md:right-2 flex justify-end items-center">
                                        <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-medium">
                                            Applied
                                        </span>
                                    </div>
                                    <div className="h-3 w-3/4 bg-ink-200 rounded"></div>
                                    <div className="h-2 w-1/2 bg-ink-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
