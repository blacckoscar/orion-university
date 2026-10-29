import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <InteriorPage title="Orion News" eyebrow="Stories">
      <p>
        Stories to keep you informed and inspired — research breakthroughs,
        campus life, athletics, and community impact. Replace these placeholders
        with your CMS-driven articles when ready.
      </p>
    </InteriorPage>
  );
}
