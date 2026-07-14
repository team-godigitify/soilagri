"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { updateRfq } from "@/lib/db";
import { rfqStatuses, type RfqStatus } from "@/types/crm";

export async function updateRfqAction(id: number, formData: FormData) {
  // Server actions are reachable directly (not just through the page that renders the form), so re-check auth here rather than trusting the layout alone.
  const store = await cookies();
  if (!verifySessionToken(store.get(ADMIN_SESSION_COOKIE)?.value)) {
    throw new Error("Not authenticated");
  }

  const status = formData.get("status");
  const notes = formData.get("notes");

  await updateRfq(id, {
    status: typeof status === "string" && rfqStatuses.includes(status as RfqStatus) ? (status as RfqStatus) : undefined,
    notes: typeof notes === "string" ? notes : undefined,
  });

  revalidatePath(`/admin/rfqs/${id}`);
  revalidatePath("/admin/rfqs");
  revalidatePath("/admin");
}
