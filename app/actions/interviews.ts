"use server";

import { db } from "@/db";
import { interviewStages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createInterview(applicationId: string, formData: FormData) {
    await db.insert(interviewStages).values({
        applicationId,
        title: formData.get("title") as string,
        type: (formData.get("type") as string) || "other",
        scheduledAt: formData.get("scheduledAt")
            ? new Date(formData.get("scheduledAt") as string)
            : null,
        duration: formData.get("duration") ? Number(formData.get("duration")) : null,
        location: (formData.get("location") as string) || null,
        interviewers: (formData.get("interviewers") as string) || null,
        status: "scheduled",
    });

    revalidatePath(`/applications/${applicationId}`);
}

export async function updateInterviewStatus(id: string, status: string, applicationId: string) {
    await db.update(interviewStages).set({ status }).where(eq(interviewStages.id, id));
    revalidatePath(`/applications/${applicationId}`);
}

export async function deleteInterview(id: string, applicationId: string) {
    await db
        .update(interviewStages)
        .set({ deletedAt: new Date() })
        .where(eq(interviewStages.id, id));

    revalidatePath(`/applications/${applicationId}`);
}
