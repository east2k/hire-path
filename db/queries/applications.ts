import { db } from "@/db";
import { applications, interviewStages, followUps } from "@/db/schema";
import { and, eq, isNull, isNotNull, gte, count, SQL } from "drizzle-orm";

export async function getUserApplications(clerkUserId: string, status?: string) {
    const conditions: SQL<unknown>[] = [
        eq(applications.clerkUserId, clerkUserId),
        isNull(applications.deletedAt),
    ];

    if (status) {
        conditions.push(eq(applications.status, status));
    }

    return db
        .select()
        .from(applications)
        .where(and(...conditions))
        .orderBy(applications.updatedAt);
}

export async function getApplicationById(id: string) {
    return db.query.applications.findFirst({
        where: (application) => and(eq(application.id, id), isNull(application.deletedAt)),
        with: {
            interviews: {
                where: (interview, { isNull }) => isNull(interview.deletedAt),
                orderBy: (interview, { asc }) => asc(interview.scheduledAt),
            },
            notes: {
                where: (note, { isNull }) => isNull(note.deletedAt),
                orderBy: (note, { desc }) => desc(note.createdAt),
            },
            followUps: {
                where: (followUp, { isNull }) => isNull(followUp.deletedAt),
                orderBy: (followUp, { asc }) => asc(followUp.dueDate),
            },
        },
    });
}

export async function getDashboardStats(clerkUserId: string) {
    const [total, interviewing, pendingFollowUps, offers] = await Promise.all([
        db
            .select({ count: count() })
            .from(applications)
            .where(and(eq(applications.clerkUserId, clerkUserId), isNull(applications.deletedAt))),
        db
            .select({ count: count() })
            .from(applications)
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    eq(applications.status, "interviewing"),
                    isNull(applications.deletedAt),
                ),
            ),
        db
            .select({ count: count() })
            .from(followUps)
            .innerJoin(applications, eq(followUps.applicationId, applications.id))
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    eq(followUps.status, "pending"),
                    isNull(followUps.deletedAt),
                    isNull(applications.deletedAt),
                ),
            ),
        db
            .select({ count: count() })
            .from(applications)
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    eq(applications.status, "offer"),
                    isNull(applications.deletedAt),
                ),
            ),
    ]);

    return {
        total: total[0].count,
        interviewing: interviewing[0].count,
        pendingFollowUps: pendingFollowUps[0].count,
        offers: offers[0].count,
    };
}

export async function getUpcomingInterviews(clerkUserId: string) {
    const now = new Date();
    return db
        .select({
            id: interviewStages.id,
            title: interviewStages.title,
            scheduledAt: interviewStages.scheduledAt,
            applicationId: interviewStages.applicationId,
            company: applications.company,
            position: applications.position,
            status: interviewStages.status,
        })
        .from(interviewStages)
        .innerJoin(applications, eq(interviewStages.applicationId, applications.id))
        .where(
            and(
                eq(applications.clerkUserId, clerkUserId),
                eq(interviewStages.status, "scheduled"),
                gte(interviewStages.scheduledAt, now),
                isNull(interviewStages.deletedAt),
                isNull(applications.deletedAt),
            ),
        )
        .orderBy(interviewStages.scheduledAt)
        .limit(5);
}

export async function getPendingFollowUps(clerkUserId: string) {
    return db
        .select({
            id: followUps.id,
            title: followUps.title,
            dueDate: followUps.dueDate,
            status: followUps.status,
            applicationId: followUps.applicationId,
            company: applications.company,
            position: applications.position,
        })
        .from(followUps)
        .innerJoin(applications, eq(followUps.applicationId, applications.id))
        .where(
            and(
                eq(applications.clerkUserId, clerkUserId),
                eq(followUps.status, "pending"),
                isNull(followUps.deletedAt),
                isNull(applications.deletedAt),
            ),
        )
        .orderBy(followUps.dueDate)
        .limit(5);
}

export async function getCalendarEvents(clerkUserId: string) {
    const [interviews, followUpEvents, applicationEvents] = await Promise.all([
        db
            .select({
                id: interviewStages.id,
                title: interviewStages.title,
                scheduledAt: interviewStages.scheduledAt,
                duration: interviewStages.duration,
                location: interviewStages.location,
                type: interviewStages.type,
                status: interviewStages.status,
                applicationId: interviewStages.applicationId,
                company: applications.company,
                position: applications.position,
            })
            .from(interviewStages)
            .innerJoin(applications, eq(interviewStages.applicationId, applications.id))
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    isNull(interviewStages.deletedAt),
                    isNull(applications.deletedAt),
                    isNotNull(interviewStages.scheduledAt),
                ),
            ),
        db
            .select({
                id: followUps.id,
                title: followUps.title,
                dueDate: followUps.dueDate,
                status: followUps.status,
                notes: followUps.notes,
                applicationId: followUps.applicationId,
                company: applications.company,
                position: applications.position,
            })
            .from(followUps)
            .innerJoin(applications, eq(followUps.applicationId, applications.id))
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    isNull(followUps.deletedAt),
                    isNull(applications.deletedAt),
                ),
            ),
        db
            .select({
                id: applications.id,
                company: applications.company,
                position: applications.position,
                status: applications.status,
                appliedDate: applications.appliedDate,
            })
            .from(applications)
            .where(
                and(
                    eq(applications.clerkUserId, clerkUserId),
                    isNull(applications.deletedAt),
                    isNotNull(applications.appliedDate),
                ),
            ),
    ]);

    return { interviews, followUpEvents, applicationEvents };
}
