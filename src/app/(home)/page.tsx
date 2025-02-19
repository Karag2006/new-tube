import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HydrateClient, trpc } from "@/trpc/server";

import { PageClient } from "./client";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Martin" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading ....</div>}>
        <ErrorBoundary fallback={<div>failed to load</div>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
