// src/app/api/uploadthing/route.ts
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// DO NOT import core.ts here — it triggers build-time execution
// We'll import it lazily inside the handler

import { createRouteHandler } from "uploadthing/next";
import type { NextRequest } from "next/server";

let handler: ReturnType<typeof createRouteHandler> | null = null;

const getHandler = async () => {
  if (!handler) {
    const { ourFileRouter } = await import("./core");
    handler = createRouteHandler({ router: ourFileRouter });
  }
  return handler;
};

export async function GET(req: NextRequest) {
  const h = await getHandler();
  return h.GET(req);
}

export async function POST(req: NextRequest) {
  const h = await getHandler();
  return h.POST(req);
}
