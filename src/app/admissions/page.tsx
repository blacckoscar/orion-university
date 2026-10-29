import { InteriorPage } from "@/components/InteriorPage";

export const metadata = {
  title: "Admissions",
};

export default function AdmissionsPage() {
  return (
    <InteriorPage title="Admissions" eyebrow="Join Orion">
      <p>
        Applications are open for the next intake. Explore programme
        requirements, scholarships, tuition guidance, and support for
        international students.
      </p>
      <p>
        Orion is designing secure admissions workflows with document upload,
        registration, and clear next steps — edit this page with your final
        requirements and deadlines.
      </p>
    </InteriorPage>
  );
}
