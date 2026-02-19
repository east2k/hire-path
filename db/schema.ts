import { pgTable, text, timestamp, integer, uuid, index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const applications = pgTable(
    "applications",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        clerkUserId: text("clerk_user_id").notNull(),
        company: text("company").notNull(),
        position: text("position").notNull(),
        status: text("status").notNull().default("wishlist"),
        jobPostingUrl: text("job_posting_url"),
        companyWebsite: text("company_website"),
        location: text("location"),
        salary: text("salary"),
        appliedDate: timestamp("applied_date"),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at")
            .notNull()
            .defaultNow()
            .$onUpdateFn(() => new Date()),
        deletedAt: timestamp("deleted_at"),
    },
    (table) => [
        index("applications_clerk_user_id_idx").on(table.clerkUserId),
        index("applications_status_idx").on(table.status),
        index("applications_deleted_at_idx").on(table.deletedAt),
        index("applications_updated_at_idx").on(table.updatedAt),
    ]
);

export const interviewStages = pgTable(
    "interview_stages",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        applicationId: uuid("application_id")
            .notNull()
            .references(() => applications.id, { onDelete: "cascade" }),
        type: text("type").notNull(),
        title: text("title").notNull(),
        scheduledAt: timestamp("scheduled_at"),
        duration: integer("duration"),
        location: text("location"),
        interviewers: text("interviewers"),
        status: text("status").notNull().default("scheduled"),
        feedback: text("feedback"),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at")
            .notNull()
            .defaultNow()
            .$onUpdateFn(() => new Date()),
        deletedAt: timestamp("deleted_at"),
    },
    (table) => [
        index("interview_stages_application_id_idx").on(table.applicationId),
        index("interview_stages_scheduled_at_idx").on(table.scheduledAt),
        index("interview_stages_deleted_at_idx").on(table.deletedAt),
    ]
);

export const notes = pgTable(
    "notes",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        applicationId: uuid("application_id")
            .notNull()
            .references(() => applications.id, { onDelete: "cascade" }),
        content: text("content").notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at")
            .notNull()
            .defaultNow()
            .$onUpdateFn(() => new Date()),
        deletedAt: timestamp("deleted_at"),
    },
    (table) => [
        index("notes_application_id_idx").on(table.applicationId),
        index("notes_deleted_at_idx").on(table.deletedAt),
    ]
);

export const followUps = pgTable(
    "follow_ups",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        applicationId: uuid("application_id")
            .notNull()
            .references(() => applications.id, { onDelete: "cascade" }),
        title: text("title").notNull(),
        dueDate: timestamp("due_date").notNull(),
        status: text("status").notNull().default("pending"),
        notes: text("notes"),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at")
            .notNull()
            .defaultNow()
            .$onUpdateFn(() => new Date()),
        deletedAt: timestamp("deleted_at"),
    },
    (table) => [
        index("follow_ups_application_id_idx").on(table.applicationId),
        index("follow_ups_due_date_idx").on(table.dueDate),
        index("follow_ups_status_idx").on(table.status),
        index("follow_ups_deleted_at_idx").on(table.deletedAt),
    ]
);

// Relations

export const applicationsRelations = relations(applications, ({ many }) => ({
    interviews: many(interviewStages),
    notes: many(notes),
    followUps: many(followUps),
}));

export const interviewStagesRelations = relations(interviewStages, ({ one }) => ({
    application: one(applications, {
        fields: [interviewStages.applicationId],
        references: [applications.id],
    }),
}));

export const notesRelations = relations(notes, ({ one }) => ({
    application: one(applications, {
        fields: [notes.applicationId],
        references: [applications.id],
    }),
}));

export const followUpsRelations = relations(followUps, ({ one }) => ({
    application: one(applications, {
        fields: [followUps.applicationId],
        references: [applications.id],
    }),
}));
