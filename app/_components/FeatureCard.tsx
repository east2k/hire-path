type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    desc: string;
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
    return (
        <div className="group p-5 md:p-8 rounded-xl bg-ink-50 border border-ink-100 hover:border-blue-ribbon-300 hover:bg-white transition-all hover:shadow-lg">
            <div className="w-14 h-14 bg-blue-ribbon-500/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-all text-2xl">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-ink-900">{title}</h3>
            <p className="text-ink-500 leading-relaxed text-sm">{desc}</p>
        </div>
    );
};

export default FeatureCard;
