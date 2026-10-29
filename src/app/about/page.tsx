import { InteriorPage } from "@/components/InteriorPage";
import { site } from "@/lib/content";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <InteriorPage title={`About ${site.name}`} eyebrow="The University">
      <p>
        {site.name} is building a world-class, future-ready academic home in{" "}
        {site.location} — positioning the institution as a leader in modern
        African education, digital innovation, research, and global academic
        collaboration.
      </p>
      <p>
        Our vision: {site.tagline}. The website and digital ecosystem serve
        prospective students, enrolled students, lecturers, parents, sponsors,
        and international partners.
      </p>
    </InteriorPage>
  );
}
