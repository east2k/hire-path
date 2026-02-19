import Card from "@/components/Card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationById } from "@/db/queries/applications";
import { ApplicationWithRelations } from "@/types/applications-type";
import InterviewList from "./components/InterviewList";
import FollowUpsList from "./components/FollowupList";
import NotesList from "./components/NotesList";
import ApplicationHeader from "./components/ApplicationHeader";

type PageProps = {
    params: Promise<{ id: string }>;
};

const page = async ({ params }: PageProps) => {
    const { id } = await params;
    const application = await getApplicationById(id);

    if (!application) notFound();

    const app = application as unknown as ApplicationWithRelations;

    return (
        <div>
            <div className="mb-6">
                <Link href="/applications" className="text-sm text-ink-500 hover:text-ink-700">
                    &larr; Back to applications
                </Link>
            </div>

            <div className="mb-8">
                <ApplicationHeader application={app} />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <InterviewList interviews={app.interviews} applicationId={app.id} />
                </Card>

                <Card>
                    <FollowUpsList followUps={app.followUps} applicationId={app.id} />
                </Card>
            </div>

            <div className="mt-6">
                <Card>
                    <NotesList notes={app.notes} applicationId={app.id} />
                </Card>
            </div>
        </div>
    );
};

export default page;
