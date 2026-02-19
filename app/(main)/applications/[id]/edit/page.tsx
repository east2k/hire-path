import Card from "@/components/Card";
import StandardButton from "@/components/StandardButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import StandardInput from "../components/StandardInput";
import StandardSelect from "../components/StandardSelect";
import { getApplicationById } from "@/db/queries/applications";
import { updateApplication } from "@/app/actions/applications";
import { Application } from "@/types/applications-type";
import { APPLICATION_STATUS } from "@/constants/application-settings";

type PageProps = {
    params: Promise<{ id: string }>;
};

const page = async ({ params }: PageProps) => {
    const { id } = await params;
    const application = await getApplicationById(id);

    if (!application) notFound();

    const app = application as unknown as Application;
    const updateApplicationWithId = updateApplication.bind(null, id);

    const formatDateForInput = (date: Date | null) => {
        if (!date) return "";
        return new Date(date).toISOString().split("T")[0];
    };

    return (
        <div className="mx-auto max-w-2xl">
            <div className="mb-8">
                <Link
                    href={`/applications/${id}`}
                    className="text-sm text-ink-500 hover:text-ink-700"
                >
                    &larr; Back to application
                </Link>
                <h1 className="mt-2 text-2xl font-bold text-ink-900">Edit Application</h1>
            </div>

            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink-900">Application Details</h3>
                </div>
                <form action={updateApplicationWithId} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <StandardInput
                            id="company"
                            name="company"
                            label="Company"
                            type="text"
                            required
                            defaultValue={app.company}
                        />
                        <StandardInput
                            id="position"
                            name="position"
                            label="Position"
                            type="text"
                            required
                            defaultValue={app.position}
                        />
                    </div>

                    <StandardSelect
                        id="status"
                        name="status"
                        label="Status"
                        defaultValue={app.status}
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
                            defaultValue={app.location ?? ""}
                        />
                        <StandardInput
                            id="salary"
                            name="salary"
                            label="Salary Range"
                            type="text"
                            defaultValue={app.salary ?? ""}
                        />
                    </div>

                    <StandardInput
                        id="appliedDate"
                        name="appliedDate"
                        label="Applied Date"
                        type="date"
                        defaultValue={formatDateForInput(app.appliedDate)}
                    />

                    <StandardInput
                        id="jobPostingUrl"
                        name="jobPostingUrl"
                        label="Job Posting URL"
                        type="url"
                        defaultValue={app.jobPostingUrl ?? ""}
                    />

                    <StandardInput
                        id="companyWebsite"
                        name="companyWebsite"
                        label="Company Website"
                        type="url"
                        defaultValue={app.companyWebsite ?? ""}
                    />

                    <div className="flex gap-3 pt-4">
                        <StandardButton title="Save Changes" variant="primary" size="md" type="submit" />
                        <Link href={`/applications/${id}`}>
                            <StandardButton title="Cancel" variant="secondary" size="md" />
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default page;
