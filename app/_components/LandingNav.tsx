import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const LandingNav = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-ink-200 backdrop-blur-md bg-ink-50/90">
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        width={32}
                        height={32}
                        alt="HirePath Logo"
                        className="rounded-lg"
                    />
                    <span className="text-xl font-bold text-ink-950">HirePath</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link
                        href="/sign-in"
                        className="text-sm font-bold px-4 py-2 md:px-6 md:py-2.5 text-ink-700 hover:text-blue-ribbon-500 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/sign-up"
                        className="bg-blue-ribbon-500 text-white text-sm font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-blue-ribbon-600 hover:shadow-[0_0_20px_rgba(59,118,246,0.3)] transition-all"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default LandingNav;
