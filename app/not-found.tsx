import Link from "next/link";
import { SearchX } from "lucide-react";
import StandardButton from "@/components/StandardButton";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink-50 p-4">
            <div className="flex max-w-md flex-col items-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-ribbon-50">
                    <SearchX className="h-10 w-10 text-blue-ribbon-500" />
                </div>

                <div>
                    <p className="text-8xl font-bold text-blue-ribbon-500">404</p>
                    <h1 className="mt-2 text-2xl font-bold text-ink-900">Page not found</h1>
                    <p className="mt-3 text-sm text-ink-500">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <Link href="/">
                    <StandardButton title="Go to Dashboard" variant="primary" size="md" />
                </Link>
            </div>
        </div>
    );
}
