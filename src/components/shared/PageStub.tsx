import { Container } from "@/components/shared/Container";

type PageStubProps = {
  title: string;
  note?: string;
};

/**
 * Placeholder for a route whose real content depends on facts that are
 * not yet confirmed (Law 1). Deliberately plain — a stub must never look
 * like a finished page, since that would be its own kind of dishonest
 * signal (Section 11 psychological audit).
 */
export function PageStub({ title, note }: PageStubProps) {
  return (
    <Container className="flex min-h-[50vh] flex-col justify-center gap-3 py-24">
      <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
      <p className="max-w-[60ch] text-muted-foreground">
        {note ?? "Content for this page is in progress."}
      </p>
    </Container>
  );
}
