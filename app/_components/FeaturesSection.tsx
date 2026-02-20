import { Calendar, ChartBar, Folder, Mic } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: <Folder className="w-6 h-6 text-blue-ribbon-500" />,
        title: "Application Tracking",
        desc: "Never lose sight of an opportunity with our intuitive 8-stage visual pipeline management.",
    },
    {
        icon: <Mic className="w-6 h-6 text-blue-ribbon-500" />,
        title: "Interview Prep",
        desc: "Prepare with confidence for every round with integrated notes, history, and feedback loops.",
    },
    {
        icon: <Calendar className="w-6 h-6 text-blue-ribbon-500" />,
        title: "Unified Calendar",
        desc: "Visualize your deadlines, follow-ups, and interview dates in a unified, sync-ready view.",
    },
    {
        icon: <ChartBar className="w-6 h-6 text-blue-ribbon-500" />,
        title: "Analytics Dashboard",
        desc: "Data-driven insights into your search progress, response rates, and salary benchmarks.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-16 md:py-24 px-6 bg-white border-y border-ink-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-ink-950">
                        Designed for Professionals
                    </h2>
                    <p className="text-lg text-ink-500">
                        Everything you need to manage your professional job search in one
                        tech-forward platform.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
