import Card from "@/components/Card";
import Link from "next/link";
import InterviewList from "./components/InterviewList";
import FollowUpsList from "./components/FollowupList";
import NotesList from "./components/NotesList";
import ApplicationHeader from "./components/ApplicationHeader";

const page = () => {
    return (
        <div>
            <div className="mb-6">
                <Link href="/applications" className="text-sm text-ink-500 hover:text-ink-700">
                    &larr; Back to applications
                </Link>
            </div>

            <div className="mb-8">
                <ApplicationHeader />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <InterviewList />
                </Card>

                <Card>
                    <FollowUpsList />
                </Card>
            </div>

            <div className="mt-6">
                <Card>
                    <NotesList />
                </Card>
            </div>
        </div>
    );
};

export default page;
