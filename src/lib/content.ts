export const site = {
  name: "Orion University",
  shortName: "Orion",
  tagline: "Transforming African Education to Match the Future",
  location: "Lomé, Togo",
  domain: "orionuniversity.org",
};

/* ---------------------------------------------------------------- */
/* Navigation                                                        */
/* ---------------------------------------------------------------- */

export type NavLink = { label: string; href: string };

export type MegaSection = {
  id: string;
  label: string;
  href: string;
  blurb: string;
  links: NavLink[];
  image: string;
};

export const audienceLinks: NavLink[] = [
  { label: "Applicants", href: "/admissions-aid" },
  { label: "Faculty & Staff", href: "/faculty-staff" },
  { label: "Families", href: "/families" },
  { label: "Alumni", href: "/alumni" },
];

export const utilityLinks: NavLink[] = [
  { label: "Orion Home", href: "/" },
  { label: "Maps & Directions", href: "/life/visit" },
  { label: "Search Orion", href: "/search" },
];

export const megaNav: MegaSection[] = [
  {
    id: "impact",
    label: "Our Impact",
    href: "/about/impact",
    blurb:
      "How Orion research, teaching, and service are shaping Togo, West Africa, and the world.",
    links: [
      { label: "Civics & Governance", href: "/impact/civics" },
      { label: "Health Research", href: "/impact/health-research" },
      { label: "Artificial Intelligence", href: "/impact/artificial-intelligence" },
      { label: "Climate & Agriculture", href: "/impact/climate" },
      { label: "See all impact topics", href: "/about/impact" },
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "about",
    label: "About Orion",
    href: "/about",
    blurb:
      "A young university with an ambitious mission: world-class education built in Africa, for the future.",
    links: [
      { label: "About Orion", href: "/about" },
      { label: "News", href: "/news" },
      { label: "History", href: "/about/history" },
      { label: "Facts & Figures", href: "/about/facts" },
      { label: "Leadership & Governance", href: "/about/leadership" },
      { label: "Vision & Mission", href: "/about/vision" },
    ],
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "academics",
    label: "Academics",
    href: "/academics",
    blurb:
      "Seven schools, dozens of programmes, and an online learning ecosystem designed for every learner.",
    links: [
      { label: "Academics", href: "/academics" },
      { label: "The 7 Schools", href: "/academics/schools" },
      { label: "Undergraduate", href: "/academics/undergraduate" },
      { label: "Graduate Programmes", href: "/academics/graduate" },
      { label: "Orion Online", href: "/online" },
      { label: "Orion for Everyone", href: "/academics/everyone" },
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "research",
    label: "Research",
    href: "/research",
    blurb:
      "Laboratories, institutes, and field stations tackling the continent’s most pressing questions.",
    links: [
      { label: "Research", href: "/research" },
      { label: "Research News", href: "/news/research" },
      { label: "Research Support", href: "/research/support" },
      { label: "Undergraduate Opportunities", href: "/research/undergraduate" },
      { label: "Libraries & Catalogue", href: "/libraries" },
      { label: "Publications", href: "/research/publications" },
    ],
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "health",
    label: "Health & Medicine",
    href: "/health-medicine",
    blurb:
      "Training the next generation of clinicians and researchers while caring for our community.",
    links: [
      { label: "Health & Medicine", href: "/health-medicine" },
      { label: "Orion Health Clinic", href: "/health/clinic" },
      { label: "Children’s Health", href: "/health/children" },
      { label: "Student Wellness", href: "/health/wellness" },
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "athletics",
    label: "Athletics",
    href: "/athletics",
    blurb:
      "Student-athletes who compete with heart and study with purpose.",
    links: [
      { label: "Athletics", href: "/athletics" },
      { label: "Athletics News", href: "/athletics/news" },
      { label: "Tickets", href: "/athletics/tickets" },
      { label: "Gameday Central", href: "/athletics/gameday" },
      { label: "Facilities", href: "/athletics/facilities" },
    ],
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "admissions",
    label: "Admissions & Aid",
    href: "/admissions-aid",
    blurb:
      "Everything you need to apply, fund your studies, and join the Orion community.",
    links: [
      { label: "Admissions & Aid", href: "/admissions-aid" },
      { label: "Undergraduate", href: "/admissions-aid/undergraduate" },
      { label: "Graduate", href: "/admissions-aid/graduate" },
      { label: "International Students", href: "/admissions-aid/international" },
      { label: "Scholarships & Financial Aid", href: "/admissions-aid/financial-aid" },
      { label: "Tuition & Fees", href: "/admissions-aid/tuition" },
    ],
    image:
      "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "life",
    label: "Campus Life",
    href: "/life",
    blurb:
      "Residences, arts, clubs, and community — life at Orion extends far beyond the lecture hall.",
    links: [
      { label: "Campus Life", href: "/life" },
      { label: "Visit", href: "/life/visit" },
      { label: "Events", href: "/events" },
      { label: "Arts", href: "/life/arts" },
      { label: "Accommodation", href: "/life/accommodation" },
      { label: "Community Engagement", href: "/life/community" },
    ],
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
  },
];

/* ---------------------------------------------------------------- */
/* Hero                                                              */
/* ---------------------------------------------------------------- */

export type HeroSlide = {
  id: string;
  kind: "video" | "image";
  src: string;
  poster?: string;
  eyebrow: string;
  headline: string;
  href: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "lab",
    kind: "video",
    src: "/media/pipette.mp4",
    poster:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Research",
    headline: "New diagnostic tool speeds up identifying diseases in infants",
    href: "/news/diagnostic-tool",
  },
  {
    id: "campus",
    kind: "video",
    src: "/media/classroom.mp4",
    poster:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Campus",
    headline: "Building a path for future leaders across Africa",
    href: "/about",
  },
  {
    id: "students",
    kind: "video",
    src: "/media/students.mp4",
    poster:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Student Life",
    headline: "A new academic year begins on a lively campus",
    href: "/life",
  },
];

/* ---------------------------------------------------------------- */
/* Intro                                                             */
/* ---------------------------------------------------------------- */

export const intro = {
  title: "Advancing the Frontier",
  body: "Orion was founded on a simple conviction: that Africa’s next generation deserves a university built for the century ahead. On our hillside campus in Lomé, students and scholars from across the continent work on hard problems together — in laboratories, studios, clinics, and classrooms that connect to the world. Ambitious, open, and rooted in Togo, Orion is where big ideas get to work.",
  video: "/media/team.mp4",
  poster:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  caption: "Orion at a glance — students and faculty collaborating across disciplines.",
  cta: { label: "About Orion", href: "/about" },
};

export const stats = [
  { value: 7, suffix: "", label: "Schools" },
  { value: 120, suffix: "+", label: "Degree programmes" },
  { value: 18, suffix: ":1", label: "Student-to-faculty ratio" },
  { value: 40, suffix: "+", label: "Partner institutions worldwide" },
];

/* ---------------------------------------------------------------- */
/* News                                                              */
/* ---------------------------------------------------------------- */

export type Story = {
  category: string;
  title: string;
  href: string;
  image: string;
  excerpt?: string;
  action?: string;
};

export const news: Story[] = [
  {
    category: "University News",
    title: "Orion Innovation Park marks its first decade of partnerships",
    href: "/news/innovation-park",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Health",
    title: "Study refines our understanding of long-term malaria recovery",
    href: "/news/malaria-recovery",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Science",
    title: "Exploring the cellular mystery behind neurodegenerative disease",
    href: "/news/cellular-mystery",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Campus",
    title: "Fellowship offers a roadmap for civic life at Orion",
    href: "/news/civic-fellowship",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
];

/* ---------------------------------------------------------------- */
/* Research                                                          */
/* ---------------------------------------------------------------- */

export const research = {
  title: "Research for a Better World",
  body: "The questions that matter most to West Africa — food security, public health, clean energy, good governance — rarely fit inside a single discipline. Orion brings engineers, physicians, economists, and artists into the same rooms, backs them with modern facilities, and gives them room to take risks.",
  featureTitle: "Achieving the promise of human-centered AI",
  featureBody:
    "Orion’s Centre for Intelligent Systems was founded to pursue artificial intelligence that serves people first — building tools for farmers, clinicians, and teachers across the region.",
  featureQuote:
    "We believe AI should answer to the communities it serves. Orion researchers build systems with farmers, nurses, and teachers as co-designers, publish their work openly, and advise regional governments on the rules that keep these tools safe and fair.",
  featureImage:
    "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?auto=format&fit=crop&w=1932&q=80",
  portraitVideo: "/media/portrait.mp4",
  portraitPoster:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  portraitQuote:
    "“It’s a fun time now, where we can generate big amounts of biological data and also have the tools to model from it.”",
  portraitName: "Ama Koffi, PhD candidate in Computational Biology",
  stories: [
    {
      category: "Research",
      title: "Computing ecosystem allows faculty to aim high",
      excerpt:
        "A new high-performance computing cluster — the largest at any Togolese university — lets Orion teams run climate models, genomic analyses, and large-scale simulations that were previously out of reach.",
      href: "/research/computing",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Report",
      title: "12 takeaways from the 2026 Orion AI Index Report",
      excerpt:
        "Our annual report tracks how AI is being built, deployed, and governed across Africa and the world.",
      href: "/research/ai-index",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Institutes",
      title: "Orion merges AI and data science efforts under single institute",
      excerpt:
        "A new institute brings together computer scientists, statisticians, and domain experts under one roof.",
      href: "/research/data-institute",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ] satisfies Story[],
  infraTitle: "An infrastructure for innovation",
  infraBody:
    "Great research needs great places to happen. From our Innovation Park to a field station on the Gulf of Guinea, these are a few of the spaces where Orion students and faculty cross disciplines and turn ideas into prototypes, policies, and companies.",
  venues: [
    {
      title: "Orion Innovation Park",
      body: "Where start-ups, researchers, and industry partners work side by side.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      href: "/research/innovation-park",
    },
    {
      title: "Centre for Intelligent Systems",
      body: "Human-centered AI research for health, agriculture, and education.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      href: "/research/intelligent-systems",
    },
    {
      title: "Design & Fabrication Lab",
      body: "Prototyping space open to every student, from first-years to doctoral candidates.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80",
      href: "/research/fab-lab",
    },
    {
      title: "Coastal Field Station",
      body: "Marine science and climate monitoring on the Gulf of Guinea.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
      href: "/research/coastal-station",
    },
    {
      title: "Orion Libraries",
      body: "Digital and physical collections serving scholars across the region.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      href: "/libraries",
    },
  ],
};

/* ---------------------------------------------------------------- */
/* Education                                                         */
/* ---------------------------------------------------------------- */

export const education = {
  title: "Education for Engaged Citizenship",
  body: "An Orion education is as much about character as it is about credentials. We teach students to reason carefully, argue honestly, and serve the communities that shaped them.",
  civicTitle: "Civic engagement on a lively campus",
  civicBody:
    "Student government, debate societies, community service corps, and a campus newspaper give Orion students daily practice in democratic life. Faculty-led dialogues bring together students from different regions, faiths, and languages to work through hard questions with respect.",
  civicImage:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
  civicStories: [
    {
      category: "Academics",
      title: "New undergraduate minor launches in civic thought and practice",
      href: "/news/civic-minor",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Teaching",
      title: "Course helps students put pluralism into practice",
      href: "/news/pluralism-course",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Ideas",
      title: "Why democracy may be our best defense against collapse",
      href: "/news/democracy",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Community",
      title: "Student volunteers bring coding clubs to Lomé secondary schools",
      href: "/news/coding-clubs",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
  ] satisfies Story[],
  aidTitle: "Financial aid places an Orion degree within reach",
  aidBody:
    "No admitted student should turn Orion down because of cost. Need-based grants, merit scholarships, and work-study positions support the majority of our undergraduates.",
  aidHighlight:
    "The Orion Promise covers full tuition for undergraduates from households earning below the national median, and extends to accommodation and meals for students from the lowest-income families.",
  aidCta: { label: "Explore financial aid", href: "/admissions-aid/financial-aid" },
  aidCards: [
    {
      title: "Easing the transition to university",
      body: "Our six-week Summer Bridge Programme welcomes incoming students to campus early for intensive coursework, peer mentoring, and one-on-one advising — so the first term starts with confidence rather than culture shock.",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=800&q=80",
      href: "/academics/summer-bridge",
    },
    {
      title: "Holistic support for first-gen and low-income students",
      body: "The Student Success Centre pairs first-generation and low-income students with faculty mentors, emergency funding, and career coaching from the first week of orientation through graduation.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      href: "/life/first-gen",
    },
  ],
};

/* ---------------------------------------------------------------- */
/* Athletics                                                         */
/* ---------------------------------------------------------------- */

export const athletics = {
  title: "Home of Champions",
  body: "Twenty-four varsity teams compete under the Orion crest, and in the past five seasons they have brought home national titles in football, athletics, basketball, and swimming. Our athletes train hard, study harder, and represent Togo on the continental stage.",
  heroImage:
    "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=2000&q=80",
  subTitle: "Scholar Nation",
  subBody:
    "Every Orion athlete is a student first. Dedicated academic advisors, flexible lab schedules, and a sports-science centre help them excel in both arenas — producing 85 individual national champions and 140 Academic All-Africans so far.",
  cta: { label: "Orion Athletics", href: "/athletics" },
  stories: [
    {
      category: "Athletics",
      title: "Kossi Mensah finds joy in giving back",
      href: "/athletics/kossi-mensah",
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Athletics",
      title: "9 Orion athletes to watch this season",
      href: "/athletics/athletes-to-watch",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Athletics",
      title: "New head coach named for women’s basketball",
      href: "/athletics/head-coach",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Athletics",
      title: "Programme invites faculty into the world of athletics",
      href: "/athletics/faculty-programme",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    },
  ] satisfies Story[],
  gallery: [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=900&q=80",
  ],
};

/* ---------------------------------------------------------------- */
/* Snap-scroll features                                              */
/* ---------------------------------------------------------------- */

export const features = [
  {
    eyebrow: "Online Learning",
    title: "A university that travels with you",
    body: "Orion Online brings live classes, recorded lectures, digital libraries, and secure assessments to students anywhere — built for low-bandwidth access and mobile-first learning.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1800&q=80",
    href: "/online",
    cta: "Explore Orion Online",
  },
  {
    eyebrow: "Student Portal",
    title: "Admissions to transcripts, in one place",
    body: "Secure, role-based portals connect students, lecturers, and administrators — applications, registration, fee payments, timetables, results, and notifications, all in one system.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=80",
    href: "/portal",
    cta: "Visit the portal",
  },
  {
    eyebrow: "Global Partnerships",
    title: "Connected to the world",
    body: "Exchange programmes, joint research, and dual degrees with partner institutions on four continents give Orion students a truly international education.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1800&q=80",
    href: "/about/partnerships",
    cta: "Our partners",
  },
];

/* ---------------------------------------------------------------- */
/* Campus parallax                                                   */
/* ---------------------------------------------------------------- */

export const campusParallax = {
  video: "/media/coast.mp4",
  poster:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
  title: "Life on the Hill",
  body: "Minutes from the Gulf of Guinea, Orion’s green hillside campus above Lomé is a place to study, create, compete, and belong.",
  cta: { label: "Explore campus life", href: "/life" },
};

/* ---------------------------------------------------------------- */
/* Research Matters                                                  */
/* ---------------------------------------------------------------- */

export const researchMatters = {
  eyebrow: "Research Matters",
  title: "Adjoa Mensah is mapping the chemicals we encounter in daily life",
  body: "An environmental chemist at Orion is building the first regional database of everyday chemical exposures — and the tools to make that data useful to families, clinicians, and policymakers.",
  video: "/media/dna.mp4",
  poster:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=80",
  href: "/news/research-matters-adjoa-mensah",
  cta: "Read the story",
};

/* ---------------------------------------------------------------- */
/* Schools                                                           */
/* ---------------------------------------------------------------- */

export const schools = [
  {
    name: "Business",
    href: "/academics/schools/business",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Education",
    href: "/academics/schools/education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Engineering",
    href: "/academics/schools/engineering",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Humanities & Sciences",
    href: "/academics/schools/humanities-sciences",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Law",
    href: "/academics/schools/law",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Medicine",
    href: "/academics/schools/medicine",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sustainability",
    href: "/academics/schools/sustainability",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=80",
  },
];

/* ---------------------------------------------------------------- */
/* Events                                                            */
/* ---------------------------------------------------------------- */

export const events = [
  {
    day: "04",
    month: "Nov",
    title: "Open Day: Undergraduate Admissions",
    where: "Main Auditorium",
    href: "/events/open-day",
  },
  {
    day: "11",
    month: "Nov",
    title: "Orion Lecture Series: AI and the Future of Work in Africa",
    where: "Centre for Intelligent Systems",
    href: "/events/lecture-ai",
  },
  {
    day: "18",
    month: "Nov",
    title: "Varsity Football: Orion vs. University of Lomé",
    where: "Orion Stadium",
    href: "/events/football",
  },
  {
    day: "27",
    month: "Nov",
    title: "Research Showcase & Poster Session",
    where: "Innovation Park Atrium",
    href: "/events/research-showcase",
  },
];

/* ---------------------------------------------------------------- */
/* The Latest / Social                                               */
/* ---------------------------------------------------------------- */

export const latest: Story[] = [
  {
    category: "Orion Report",
    title: "Students celebrate a new chapter on campus",
    href: "/news/celebration",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    action: "Read the story",
  },
  {
    category: "Athletics",
    title: "Fans fill the stands as Orion hosts regional finals",
    href: "/news/athletics-finals",
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
    action: "Watch video",
  },
  {
    category: "Campus Life",
    title: "Spirit week brings the community together",
    href: "/news/spirit-week",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    action: "Read the story",
  },
];

export const landscapes = [
  {
    alt: "Rolling hills near campus at golden hour",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    caption: "The hills above campus at golden hour",
  },
  {
    alt: "University courtyard with arches at dusk",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80",
    caption: "The main quad at dusk",
  },
  {
    alt: "Students walking across a sunlit campus path",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80",
    caption: "Between classes on the central walkway",
  },
];

/* ---------------------------------------------------------------- */
/* Footer                                                            */
/* ---------------------------------------------------------------- */

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Overview",
    links: [
      { label: "Home", href: "/" },
      { label: "About Orion", href: "/about" },
      { label: "Academics", href: "/academics" },
      { label: "Research", href: "/research" },
      { label: "Health & Medicine", href: "/health-medicine" },
      { label: "Athletics", href: "/athletics" },
      { label: "Admissions & Aid", href: "/admissions-aid" },
      { label: "Life on the Hill", href: "/life" },
    ],
  },
  {
    title: "Action",
    links: [
      { label: "Apply", href: "/admissions-aid" },
      { label: "Visit", href: "/life/visit" },
      { label: "Give", href: "/give" },
      { label: "Reconnect", href: "/alumni" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Newsletter", href: "/news/subscribe" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "X/Twitter", href: "https://x.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Podcasts", href: "/podcasts" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Work at Orion", href: "/careers" },
      { label: "Faculty Positions", href: "/careers/faculty" },
      { label: "Career Education", href: "/careers/education" },
    ],
  },
  {
    title: "The 7 Schools",
    links: schools.map((s) => ({ label: s.name, href: s.href })),
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Directory", href: "/directory" },
      { label: "Orion Profiles", href: "/profiles" },
      { label: "Cookies", href: "/cookies" },
      { label: "Policies", href: "/policies" },
      { label: "Accreditation", href: "/about/accreditation" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Orion Home", href: "/" },
  { label: "Maps & Directions", href: "/life/visit" },
  { label: "Search Orion", href: "/search" },
  { label: "Emergency Info", href: "/emergency" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Copyright", href: "/copyright" },
  { label: "Trademarks", href: "/trademarks" },
  { label: "Non-Discrimination", href: "/non-discrimination" },
  { label: "Accessibility", href: "/accessibility" },
];
