"use server";

import { db } from "@/db";
import { applications } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createApplication(formData: FormData) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const result = await db
        .insert(applications)
        .values({
            clerkUserId: userId,
            company: formData.get("company") as string,
            position: formData.get("position") as string,
            status: (formData.get("status") as string) || "wishlist",
            location: (formData.get("location") as string) || null,
            salary: (formData.get("salary") as string) || null,
            jobPostingUrl: (formData.get("jobPostingUrl") as string) || null,
            companyWebsite: (formData.get("companyWebsite") as string) || null,
            appliedDate: formData.get("appliedDate")
                ? new Date(formData.get("appliedDate") as string)
                : null,
        })
        .returning({ id: applications.id });

    revalidatePath("/applications");
    redirect(`/applications/${result[0].id}`);
}

export async function updateApplication(id: string, formData: FormData) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    await db
        .update(applications)
        .set({
            company: formData.get("company") as string,
            position: formData.get("position") as string,
            status: formData.get("status") as string,
            location: (formData.get("location") as string) || null,
            salary: (formData.get("salary") as string) || null,
            jobPostingUrl: (formData.get("jobPostingUrl") as string) || null,
            companyWebsite: (formData.get("companyWebsite") as string) || null,
            appliedDate: formData.get("appliedDate")
                ? new Date(formData.get("appliedDate") as string)
                : null,
        })
        .where(eq(applications.id, id));

    revalidatePath(`/applications/${id}`);
    redirect(`/applications/${id}`);
}

export async function updateApplicationStatus(id: string, status: string) {
    await db.update(applications).set({ status }).where(eq(applications.id, id));
    revalidatePath(`/applications/${id}`);
}

export async function deleteApplication(id: string) {
    await db
        .update(applications)
        .set({ deletedAt: new Date() })
        .where(eq(applications.id, id));

    revalidatePath("/applications");
    redirect("/applications");
}
