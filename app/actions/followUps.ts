"use server";

import { db } from "@/db";
import { followUps } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createFollowUp(applicationId: string, formData: FormData) {
    await db.insert(followUps).values({
        applicationId,
        title: formData.get("title") as string,
        dueDate: new Date(formData.get("dueDate") as string),
        status: "pending",
        notes: (formData.get("notes") as string) || null,
    });

    revalidatePath(`/applications/${applicationId}`);
}

export async function updateFollowUpStatus(id: string, status: string, applicationId: string) {
    await db.update(followUps).set({ status }).where(eq(followUps.id, id));
    revalidatePath(`/applications/${applicationId}`);
}

export async function deleteFollowUp(id: string, applicationId: string) {
    await db
        .update(followUps)
        .set({ deletedAt: new Date() })
        .where(eq(followUps.id, id));

    revalidatePath(`/applications/${applicationId}`);
}
