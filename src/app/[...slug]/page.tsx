import { Suspense } from "react";
import { InteriorPage } from "@/components/InteriorPage";

type Props = {
  params: Promise<{ slug: string[] }>;
};

function titleFromSlug(slug: string[]) {
  const last = slug[slug.length - 1] ?? "Page";
  return last
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function CatchAllContent({ params }: Props) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return (
    <InteriorPage title={title} eyebrow="Orion University">
      <p>
        This section is ready for your content. The homepage layout mirrors a
        premium academic site structure; swap in Orion-specific copy, media, and
        programme details here.
      </p>
    </InteriorPage>
  );
}

export default function CatchAllPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <InteriorPage title="Orion University" eyebrow="Loading">
          <p>Loading…</p>
        </InteriorPage>
      }
    >
      <CatchAllContent params={params} />
    </Suspense>
  );
}
