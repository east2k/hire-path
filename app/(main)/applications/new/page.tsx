import Card from "@/components/Card";
import StandardButton from "@/components/StandardButton";
import Link from "next/link";
import StandardInput from "../[id]/components/StandardInput";
import StandardSelect from "../[id]/components/StandardSelect";
import { createApplication } from "@/app/actions/applications";
import { APPLICATION_STATUS } from "@/constants/application-settings";

const page = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <div className="mb-8">
                <Link href="/applications" className="text-sm text-ink-500 hover:text-ink-700">
                    &larr; Back to applications
                </Link>
                <h1 className="mt-2 text-2xl font-bold text-ink-900">New Application</h1>
            </div>

            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink-900">Application Details</h3>
                </div>
                <form action={createApplication} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="company"
                            name="company"
                            label="Company"
                            type="text"
                            placeholder="e.g., Google"
                            required
                        />
                        <StandardInput
                            id="position"
                            name="position"
                            label="Position"
                            type="text"
                            placeholder="e.g., Software Engineer"
                            required
                        />
                    </div>

                    <StandardSelect
                        id="status"
                        name="status"
                        label="Status"
                        defaultValue="applied"
                        selectOptions={APPLICATION_STATUS.map((s) => ({
                            value: s.value,
                            label: s.label,
                        }))}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            placeholder="e.g., Remote, New York"
                        />
                        <StandardInput
                            id="salary"
                            name="salary"
                            label="Salary Range"
                            type="text"
                            placeholder="e.g., $80k–$100k"
                        />
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
                        placeholder="https://..."
                    />

                    <StandardInput
                        id="companyWebsite"
                        name="companyWebsite"
                        label="Company Website"
                        type="url"
                        placeholder="https://..."
                    />

                    <div className="flex gap-3 pt-4">
                        <StandardButton
                            title="Create Application"
                            variant="primary"
                            size="md"
                            type="submit"
                        />
                        <Link href="/applications">
                            <StandardButton title="Cancel" variant="secondary" size="md" />
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default page;
