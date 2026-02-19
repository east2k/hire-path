"use client";

import { APPLICATION_STATUS } from "@/constants/application-settings";
import { useRouter, useSearchParams } from "next/navigation";

const StatusFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentStatus = searchParams.get("status");

    const handleStatusChange = (status: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if (status) {
            params.set("status", status);
        } else {
            params.delete("status");
        }

        router.push(`/applications?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap gap-2">
            <button
                onClick={() => handleStatusChange(null)}
                className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    !currentStatus
                        ? "bg-blue-ribbon-500 text-white"
                        : "bg-ink-100 text-ink-600 hover:bg-ink-200"
                }`}
            >
                All
            </button>
            {APPLICATION_STATUS.map((status) => (
                <button
                    key={status.value}
                    onClick={() => handleStatusChange(status.value)}
                    className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        currentStatus === status.value
                            ? "bg-blue-ribbon-500 text-white"
                            : "bg-ink-100 text-ink-600 hover:bg-ink-200"
                    }`}
                >
                    {status.label}
                </button>
            ))}
        </div>
    );
};

export default StatusFilters;
