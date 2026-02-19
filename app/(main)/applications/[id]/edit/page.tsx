import Card from "@/components/Card";
import StandardButton from "@/components/StandardButton";
import Link from "next/link";
import StandardInput from "../components/StandardInput";
import StandardSelect from "../components/StandardSelect";
import { APPLICATION_STATUSES } from "@/utils/status-color-identifier";

const page = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <div className="mb-8">
                <Link href={`/applications/5`} className="text-sm text-ink-500 hover:text-ink-700">
                    &larr; Back to application
                </Link>
                <h1 className="mt-2 text-2xl font-bold text-ink-900">Edit Application</h1>
            </div>

            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink-900">Application Details</h3>
                </div>
                <form className="space-y-4">
                    {false && (
                        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">Error</div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="company"
                            name="company"
                            label="Company"
                            type="text"
                            required
                        />
                        <StandardInput
                            id="position"
                            name="position"
                            label="Position"
                            type="text"
                            required
                        />
                    </div>

                    <StandardSelect
                        id="status"
                        name="status"
                        label="Status"
                        selectOptions={APPLICATION_STATUSES.map((s) => ({
                            value: s.value,
                            label: s.label,
                        }))}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput id="location" name="location" label="Location" type="text" />
                        <StandardInput id="salary" name="salary" label="Salary Range" type="text" />
                    </div>

                    <StandardInput
                        id="appliedDate"
                        name="appliedDate"
                        label="Applied Date"
                        type="date"
                    />

                    <StandardInput
                        id="jobPostingUrl"
                        name="jobPostingUrl"
                        label="Job Posting URL"
                        type="url"
                    />

                    <StandardInput
                        id="companyWebsite"
                        name="companyWebsite"
                        label="Company Website"
                        type="url"
                    />

                    <div className="flex gap-3 pt-4">
                        <StandardButton title="Save Changes" variant="primary" size="md" />
                        <Link href={`/applications/5`}>
                            <StandardButton title="Cancel" variant="secondary" size="md" />
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default page;
