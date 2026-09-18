import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center">
      <Logo size="lg" />
      <h1 className="mt-8 font-display text-6xl sm:text-7xl">WRONG TURN.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        This page wandered off. Even the buddies lose track sometimes.
      </p>
      <Button href="/" className="mt-8">
        Back to the crew
      </Button>
      <p className="sr-only">
        <Link href="/">Return to homepage</Link>
      </p>
    </div>
  );
}
