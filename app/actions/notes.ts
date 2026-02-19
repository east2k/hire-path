"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createNote(applicationId: string, formData: FormData) {
    await db.insert(notes).values({
        applicationId,
        content: formData.get("content") as string,
    });

    revalidatePath(`/applications/${applicationId}`);
}

export async function deleteNote(id: string, applicationId: string) {
    await db.update(notes).set({ deletedAt: new Date() }).where(eq(notes.id, id));
    revalidatePath(`/applications/${applicationId}`);
}
