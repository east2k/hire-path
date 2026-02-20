import Link from "next/link";

const CTASection = () => {
    return (
        <section className="py-16 md:py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto bg-blue-ribbon-500 rounded-xl p-8 md:p-12 lg:p-20 text-white shadow-2xl shadow-blue-ribbon-500/20">
                <h2 className="text-4xl md:text-6xl font-black mb-5 md:mb-8 leading-tight tracking-tighter">
                    Ready to secure your next role?
                </h2>
                <p className="text-xl font-medium mb-8 md:mb-12 opacity-80">
                    Start your professional life and start landing your dream jobs with HirePath.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/sign-up"
                        className="bg-white text-blue-ribbon-600 text-lg md:text-xl font-black px-8 py-4 md:px-12 md:py-6 rounded-full hover:shadow-lg transition-all"
                    >
                        Get Started Free
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
