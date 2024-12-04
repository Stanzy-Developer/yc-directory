import React from "react";
import Ping from "@/components/Ping";

import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

export default async function Views({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  let NumOfView;

  if (totalViews > 1) {
    NumOfView = "views";
  } else {
    NumOfView = "view";
  }
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black text-black">{`${NumOfView}: ${totalViews}`}</span>
      </p>
    </div>
  );
}