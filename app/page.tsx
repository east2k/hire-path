import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
    CTASection,
    DashboardPreviewSection,
    FeaturesSection,
    HeroSection,
    LandingFooter,
    LandingNav,
} from "./_components";

const LandingPage = async () => {
    const { userId } = await auth();
    if (userId) redirect("/dashboard");

    return (
        <div className="bg-ink-50 text-ink-500 antialiased">
            <LandingNav />
            <main className="pt-16 md:pt-20">
                <HeroSection />
                <FeaturesSection />
                <DashboardPreviewSection />
                <CTASection />
            </main>
            <LandingFooter />
        </div>
    );
};

export default LandingPage;
