import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const LandingFooter = () => {
    return (
        <footer className="bg-white px-6 border-t border-ink-100">
            <div className="max-w-7xl mx-auto">
                <div className="pt-8 border-t border-ink-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="col-span-2">
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
                        <p className="text-ink-500 leading-relaxed mb-6 max-w-xs text-sm">
                            The modern job application tracking platform for professionals who value
                            speed, data, and design.
                        </p>
                    </div>
                    <p className="text-xs text-ink-400">
                        © 2026 HirePath Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
