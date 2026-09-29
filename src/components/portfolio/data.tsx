import type { ReactNode } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  ClipboardList,
  FileSpreadsheet,
  GraduationCap,
  Handshake,
  Headphones,
  LayoutGrid,
  Linkedin,
  Mail,
  MessagesSquare,
  Presentation,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";

export const PROFILE = {
  name: "Jacqueline Ramos",
  title: "Licensed Professional Teacher",
  subtitle: "Administrative & Remote Support",
  location: "Valenzuela City, Philippines",
  email: "jacqueline.ramos@gmail.com",
  socials: {
    upwork: "https://www.upwork.com/freelancers/~01f6974fe4e426da91?mp_source=share",
    linkedin: "http://www.linkedin.com/in/jacqueline-ramos-504922379",
  },
  kicker: "Licensed Professional Teacher • Administrative Support • Online ESL",
  headline:
    "Virtual Assistant Bringing Educator-Level Organization, Clear Communication, and Reliable Remote Support",
  intro:
    "I am a detail-oriented administrative professional and licensed teacher with 12+ years of experience in documentation, scheduling, stakeholder communication, reporting, record management, online teaching, project coordination, digital organization, and client support. I am ready to support remote teams as a Virtual Assistant.",
};

export const HIGHLIGHTS = [
  { value: "12+", label: "Years Professional Experience", tone: "bg-blue-pastel" },
  { value: "LPT", label: "Licensed Professional Teacher", tone: "bg-sage" },
  { value: "T-III", label: "Teacher III • Department of Education", tone: "bg-lavender" },
  { value: "ESL", label: "Online ESL & Private Tutoring", tone: "bg-peach" },
];

export const EXPERTISE = [
  { label: "Administrative Support", icon: ClipboardList },
  { label: "Email & Calendar Management", icon: CalendarClock },
  { label: "Data Entry & Record Management", icon: FileSpreadsheet },
  { label: "Documents & Presentations", icon: Presentation },
  { label: "Customer & Stakeholder Support", icon: Headphones },
  { label: "Task & Project Coordination", icon: LayoutGrid },
  { label: "Data Analysis & Reporting", icon: Sparkles },
  { label: "Online ESL & Virtual Teaching Support", icon: GraduationCap },
];

const SERVICES: { name: string; body: string }[] = [
  {
    name: "Administrative Support",
    body: "Day-to-day organization of documents, records, forms, and follow-ups so nothing slips between tasks and deadlines.",
  },
  {
    name: "Email and Calendar Management",
    body: "Inbox sorting, timely replies, scheduling of meetings and activities, reminders, and conflict-free calendars.",
  },
  {
    name: "Data Entry and Record Management",
    body: "Accurate encoding, updating, and maintenance of spreadsheets and digital records with careful attention to confidentiality.",
  },
  {
    name: "Document and Presentation Creation",
    body: "Clean letters, reports, forms, handouts, and slide decks prepared in Word, Google Docs, PowerPoint, Slides, and Canva.",
  },
  {
    name: "Customer and Stakeholder Support",
    body: "Professional, patient communication with clients, parents, and colleagues, including updates, clarifications, and follow-through.",
  },
  {
    name: "Task and Project Coordination",
    body: "Tracking deliverables, timelines, and responsibilities for activities and projects, keeping everyone aligned.",
  },
  {
    name: "Data Analysis and Reporting",
    body: "Organizing information into clear summaries and reports that support decisions and routine monitoring.",
  },
  {
    name: "Online ESL and Virtual Teaching Support",
    body: "Lesson planning, learner progress notes, virtual classroom setup, and one-on-one English instruction support.",
  },
];

const TOOL_GROUPS = [
  { group: "Productivity", tools: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Docs", "Google Sheets", "Google Slides"] },
  { group: "Communication", tools: ["Gmail", "Zoom", "Google Meet", "Microsoft Teams"] },
  { group: "Collaboration", tools: ["Google Drive", "OneDrive"] },
  { group: "Content Creation", tools: ["Canva", "ChatGPT"] },
];

const STRENGTHS = [
  "Organization",
  "Attention to Detail",
  "Confidentiality",
  "Clear Communication",
  "Adaptability",
  "Problem-Solving",
  "Initiative",
  "Dependability",
  "Sound Judgment",
  "Service-Focused Mindset",
  "Fast Learning",
  "Virtual Classroom Experience",
];

const EXPERIENCES = [
  {
    role: "Teacher III",
    org: "Department of Education",
    period: "2024 – Present",
    points: [
      "Manages learner records, schedules, reports, and official correspondence with accuracy and confidentiality.",
      "Coordinates meetings and school activities, including preparation, documentation, and follow-ups.",
      "Prepares documents, spreadsheets, and presentations for reporting and stakeholder communication.",
      "Maintains organized digital files and supports school projects and digital initiatives within deadlines.",
    ],
  },
  {
    role: "Online ESL Teacher",
    org: "Polly English",
    period: "May 2026 – Present",
    points: [
      "Delivers one-on-one English lessons to roughly 7–10 learners weekly, ages 3 to 18.",
      "Adapts instruction to each learner's age and proficiency level.",
      "Maintains returning students and receives good ratings from parents and learners.",
      "Plans lessons that build confidence, participation, and steady progress.",
    ],
  },
  {
    role: "Private Online Tutor",
    org: "Independent",
    period: "August 1, 2025 – Present",
    points: [
      "Provides ongoing one-on-one English tutoring to a Grade 5 learner, age 10, based in the United States.",
      "Tailors lessons to grade-level curriculum needs.",
      "Built a trusted long-term relationship with the student and family.",
    ],
  },
];

const CREDENTIALS = [
  { name: "Licensed Professional Teacher", note: "Professional Regulation Commission license" },
  { name: "Online ESL Teacher", note: "Virtual English instruction for learners ages 3–18" },
  { name: "One-on-One & Private Tutoring Experience", note: "Ongoing individual tutoring engagements" },
];

const SUPPORT_POINTS = [
  { title: "Dependable day-to-day support", body: "Consistent follow-through on routine tasks so your week runs without gaps." },
  { title: "Organized information and files", body: "Records, folders, and trackers kept tidy, labeled, and easy to retrieve." },
  { title: "Professional communication", body: "Clear, courteous writing for clients, colleagues, and stakeholders." },
  { title: "Quick learning of digital systems", body: "Comfortable picking up new tools and platforms with minimal hand-holding." },
  { title: "Accuracy and confidentiality", body: "Careful handling of sensitive documents and data, a daily habit in education." },
  { title: "Adaptability and initiative", body: "Adjusts to changing priorities and moves tasks forward without being chased." },
  { title: "Virtual coordination experience", body: "Comfortable running online sessions, schedules, and remote follow-ups." },
];

/* ---------- shared presentational bits ---------- */

function Para({ children }: { children: ReactNode }) {
  return <p className="text-sm leading-relaxed text-ink-soft">{children}</p>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
          <span className="mt-1.5 size-2 shrink-0 bg-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink">
      {children}
    </span>
  );
}

export type Section = {
  id: string;
  label: string;
  micro: string;
  icon: typeof User;
  tone: string;
  preview: string;
  previewBits: string[];
  detail: ReactNode;
  detailType?: "my-works";
};

export const SECTIONS: Section[] = [
  {
    id: "about",
    label: "About",
    micro: "01 / profile",
    icon: User,
    tone: "bg-blue-pastel",
    preview:
      "An experienced educator's structure, communication, confidentiality, and attention to detail — paired with practical administrative and remote support skills.",
    previewBits: ["12+ years", "Education + admin", "Remote-ready"],
    detail: (
      <div className="space-y-4">
        <Para>
          I am a Licensed Professional Teacher and administrative professional with 12+ years of
          experience keeping documentation, schedules, records, and communication in order. Teaching
          at scale means handling confidential information, meeting firm deadlines, and coordinating
          with many stakeholders at once — the same disciplines a remote team needs from its support.
        </Para>
        <Para>
          My daily work covers documentation and reporting, scheduling of meetings and activities,
          digital record keeping, stakeholder correspondence, online teaching, project coordination,
          and client support. I prepare documents, spreadsheets, and presentations, track follow-ups,
          and maintain organized digital files across Microsoft and Google workspaces.
        </Para>
        <Para>
          Moving into virtual assistance is a natural extension of what I already do professionally,
          not a change of career skill set. What shifts is the setting: the same accuracy,
          discretion, and service-focused mindset, applied to a client's inbox, calendar, records,
          documents, and coordination needs.
        </Para>
      </div>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    micro: "02 / timeline",
    icon: BadgeCheck,
    tone: "bg-sage",
    preview:
      "Teacher III at the Department of Education, Online ESL Teacher at Polly English, and independent private online tutoring.",
    previewBits: ["DepEd 2024–now", "Polly English", "1:1 tutoring"],
    detail: (
      <div className="space-y-6">
        {EXPERIENCES.map((job) => (
          <div key={job.role} className="border-l-2 border-border pl-5">
            <span className="micro-label">{job.period}</span>
            <h4 className="mt-1 text-base font-semibold text-ink">{job.role}</h4>
            <p className="text-sm text-muted-foreground">{job.org}</p>
            <div className="mt-3">
              <Bullets items={job.points} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "services",
    label: "Services",
    micro: "03 / support",
    icon: Handshake,
    tone: "bg-lavender",
    preview:
      "Eight focused support services across administration, communication, records, documents, coordination, reporting, and virtual teaching.",
    previewBits: ["Admin support", "Email & calendar", "Reporting"],
    detail: (
      <div className="grid gap-3 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.name} className="card-tile p-4">
            <h4 className="text-sm font-semibold text-ink">{service.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "tools",
    label: "Tools",
    micro: "04 / stack",
    icon: Wrench,
    tone: "bg-peach",
    preview:
      "Microsoft 365, Google Workspace, Canva, Zoom, Meet, Teams, and ChatGPT — grouped by how they are actually used.",
    previewBits: ["Microsoft 365", "Google Workspace", "Canva"],
    detail: (
      <div className="space-y-5">
        {TOOL_GROUPS.map((group) => (
          <div key={group.group}>
            <span className="micro-label">{group.group}</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <Chip key={tool}>{tool}</Chip>
              ))}
            </div>
          </div>
        ))}
        <Para>
          Tools are listed by practical, day-to-day use rather than self-rated proficiency scores.
        </Para>
      </div>
    ),
  },
  {
    id: "credentials",
    label: "Credentials",
    micro: "05 / qualified",
    icon: GraduationCap,
    tone: "bg-blush",
    preview:
      "Licensed Professional Teacher, Online ESL Teacher, and one-on-one private tutoring experience.",
    previewBits: ["LPT", "Online ESL", "1:1 experience"],
    detail: (
      <div className="space-y-3">
        {CREDENTIALS.map((item) => (
          <div key={item.name} className="card-tile flex items-start gap-3 p-4">
            <span className="mt-1 size-2.5 shrink-0 bg-sage" aria-hidden />
            <div>
              <h4 className="text-sm font-semibold text-ink">{item.name}</h4>
              <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "strengths",
    label: "Strengths",
    micro: "06 / qualities",
    icon: Sparkles,
    tone: "bg-blue-pastel",
    preview:
      "Organization, attention to detail, confidentiality, clear communication, adaptability, and ten more working habits.",
    previewBits: ["Organized", "Discreet", "Adaptable"],
    detail: (
      <div className="flex flex-wrap gap-2">
        {STRENGTHS.map((strength) => (
          <Chip key={strength}>{strength}</Chip>
        ))}
      </div>
    ),
  },
  {
    id: "support",
    label: "What I Bring to Your Team",
    micro: "07 / remote fit",
    icon: MessagesSquare,
    tone: "bg-sage",
    preview:
      "Dependable support, organized files, professional communication, fast learning of digital systems, and virtual coordination experience.",
    previewBits: ["Dependable", "Accurate", "Proactive"],
    detail: (
      <div className="space-y-3">
        {SUPPORT_POINTS.map((point) => (
          <div key={point.title} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <h4 className="text-sm font-semibold text-ink">{point.title}</h4>
            <p className="mt-1 text-sm text-ink-soft">{point.body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    micro: "08 / let's connect",
    icon: Mail,
    tone: "bg-lavender",
    preview:
      "Email is the best way to reach me. Based in Valenzuela City, Philippines, available for remote support roles.",
    previewBits: ["Email first", "Philippines", "Remote"],
    detail: (
      <div className="space-y-5">
        <Para>
          If you are looking for reliable administrative or virtual assistant support, I would be
          glad to hear about the work and how I can help. Email is my main professional contact
          method and the fastest way to get a thoughtful reply.
        </Para>
        <div className="card-tile p-4">
          <span className="micro-label">Email</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-sm font-semibold break-all text-ink underline decoration-accent decoration-2 underline-offset-4"
          >
            {PROFILE.email}
          </a>
        </div>
        <div className="card-tile p-4">
          <span className="micro-label">Find me online</span>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm text-ink hover:bg-card"
            >
              <Mail className="size-4" aria-hidden />
              Email
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm text-ink hover:bg-card"
            >
              <Linkedin className="size-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={PROFILE.socials.upwork}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm text-ink hover:bg-card"
            >
              <BriefcaseBusiness className="size-4" aria-hidden />
              Upwork
            </a>
          </div>
        </div>
        <div className="card-tile p-4">
          <span className="micro-label">Location</span>
          <p className="mt-1 text-sm font-semibold text-ink">{PROFILE.location}</p>
          <p className="mt-1 text-sm text-ink-soft">Available for remote engagements.</p>
        </div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent("Virtual Assistant Opportunity")}`}
          className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink-soft"
        >
          <Mail className="size-4" aria-hidden />
          Send an email
        </a>
      </div>
    ),
  },
  {
    id: "my-works",
    label: "My Works",
    micro: "09 / VA portfolio",
    icon: BriefcaseBusiness,
    tone: "bg-peach",
    preview:
      "A focused space for virtual assistant work samples, screenshots, and project photos.",
    previewBits: ["Work samples", "Project photos", "VA portfolio"],
    detailType: "my-works",
    detail: null,
  },
];
