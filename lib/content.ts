export const company = {
  name: "Quantum Software Solutions WLL",
  email: "sales@quantumbh.net",
  phone: "+973 3216 6628",
  phoneHref: "+97332166628",
  address: [
    "Office #4221, Building #2004",
    "Road #1527, Block #115",
    "Al Hidd Industrial Area",
    "Kingdom of Bahrain",
  ],
  cr: "197818-1",
};
export type Solution = {
  slug: string;
  name: string;
  short: string;
  category: "systems" | "services";
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  intro: string;
  detail: string;
  audience: string[];
  modules: { title: string; description: string; items: string[] }[];
  faqs: { question: string; answer: string }[];
  media: { src: string; alt: string; caption?: string };
};
const workplace = {
  src: "/images/workplace.webp",
  alt: "Editorial scene of professionals discussing their work in a sunlit office",
};
export const solutions: Solution[] = [
  {
    slug: "erp-accounting",
    name: "ERP & Accounting",
    short: "Accounting, inventory, transactions and reporting.",
    category: "systems",
    eyebrow: "ERP & Accounting",
    title: "Accounting,",
    accent: "without the clutter.",
    description:
      "Keep your accounts, stock and transactions in order. Cloud software for the daily work of running a business.",
    intro: "From quotations to your financial reports.",
    detail:
      "A practical system for retail, wholesale, manufacturing and service businesses.",
    audience: [
      "Retail & wholesale",
      "Manufacturing",
      "Service businesses",
      "SMEs",
    ],
    media: {
      src: "/images/software-editorial.webp",
      alt: "Illustrative accounting software displayed on a laptop",
      caption: "Illustrative product visual",
    },
    modules: [
      {
        title: "Accounting & finance",
        description: "The foundation for your financial records.",
        items: [
          "General ledger & chart of accounts",
          "Income & expenses",
          "Accounts receivable & payable",
          "Cash & bank transactions",
        ],
      },
      {
        title: "Sales & transactions",
        description: "Follow a transaction from quotation to payment.",
        items: [
          "Quotations",
          "Invoices",
          "Payment tracking",
          "Customer statements",
        ],
      },
      {
        title: "Inventory",
        description: "Keep stock levels and movements in view.",
        items: [
          "Stock management & movements",
          "Low-stock alerts",
          "Inventory valuation",
        ],
      },
      {
        title: "Customers & suppliers",
        description: "Organise the records behind your business relationships.",
        items: [
          "Customer & supplier records",
          "Account statements",
          "Credit limits",
        ],
      },
      {
        title: "Reporting",
        description: "Put your financial and operational records to work.",
        items: [
          "Financial dashboards",
          "Cash-flow monitoring",
          "Business-performance reports",
          "Operational & financial reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Which businesses is it for?",
        answer:
          "Retailers, wholesalers, manufacturers, service companies and SMEs that need accounting, inventory and financial management.",
      },
      {
        question: "Can I request a demo?",
        answer:
          "Yes. Tell us which areas you want to explore, and we can discuss the relevant product with you.",
      },
    ],
  },
  {
    slug: "hr-management",
    name: "HR Management",
    short: "Employee records, payroll, attendance and leave.",
    category: "systems",
    eyebrow: "HR Management",
    title: "HR, with",
    accent: "less admin.",
    description:
      "Keep employee information, payroll, attendance and leave organised in one HR system.",
    intro: "The essentials of people management.",
    detail:
      "For businesses and organisations managing the everyday responsibilities of HR.",
    audience: ["Businesses with employees", "HR & administration teams"],
    media: workplace,
    modules: [
      {
        title: "Employee records",
        description: "Keep staff information organised and accessible.",
        items: [],
      },
      {
        title: "Payroll",
        description: "Manage the regular work of employee pay.",
        items: [],
      },
      {
        title: "Attendance",
        description: "Maintain day-to-day attendance records.",
        items: [],
      },
      {
        title: "Leave management",
        description: "Keep employee leave information in order.",
        items: [],
      },
    ],
    faqs: [],
  },
  {
    slug: "hospital-management",
    name: "Hospital Management",
    short: "Patient records, appointments, billing and pharmacy.",
    category: "systems",
    eyebrow: "Hospital Management",
    title: "Focus on care.",
    accent: "Organise the day.",
    description:
      "Practical software for the patient records, appointments, billing and pharmacy operations behind your hospital or clinic.",
    intro: "The work behind the care.",
    detail: "For hospitals, clinics and healthcare administration teams.",
    audience: ["Hospitals", "Clinics"],
    media: {
      src: "/images/healthcare.webp",
      alt: "Illustrative clinic scene showing a healthcare professional at a reception desk",
    },
    modules: [
      {
        title: "Patient records",
        description: "Organise the patient information your team works with.",
        items: [],
      },
      {
        title: "Appointments",
        description: "Keep appointment information in view throughout the day.",
        items: [],
      },
      {
        title: "Billing",
        description:
          "Support the billing work behind your healthcare services.",
        items: [],
      },
      {
        title: "Pharmacy operations",
        description: "Manage the operational side of your pharmacy.",
        items: [],
      },
    ],
    faqs: [],
  },
  {
    slug: "school-management",
    name: "School Management",
    short: "Meet Classveew. Software for school life.",
    category: "systems",
    eyebrow: "School management by Quantum",
    title: "Classveew.",
    accent: "A better-organised school day.",
    description:
      "Admissions, attendance, timetables, gradebook and parent-teacher communication. School management, together.",
    intro: "What Classveew covers.",
    detail: "School administration and the daily routines around it.",
    audience: ["Schools", "Educational institutions"],
    media: {
      src: "/images/education.webp",
      alt: "Illustrative classroom scene of a teacher working with two students",
    },
    modules: [
      {
        title: "Admissions",
        description: "Give admissions information an organised home.",
        items: [],
      },
      {
        title: "Attendance",
        description: "Maintain a record of student attendance.",
        items: [],
      },
      {
        title: "Timetables",
        description: "Keep the school’s schedules in order.",
        items: [],
      },
      {
        title: "Gradebook",
        description: "Bring grade information into one structured record.",
        items: [],
      },
      {
        title: "Parent-teacher communication",
        description:
          "Support everyday conversations between parents and teachers.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "What is Classveew?",
        answer:
          "Classveew is Quantum’s school-management platform, covering admissions, gradebook, attendance, timetables and parent-teacher communication.",
      },
      {
        question: "Is it used in Bahrain?",
        answer:
          "Yes. Classveew is currently serving schools in Bahrain. Contact Quantum to discuss the platform or request a demonstration.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    short: "Custom business software, shaped around your needs.",
    category: "services",
    eyebrow: "Software Development",
    title: "Your business.",
    accent: "Your software.",
    description:
      "Custom business systems built around your organisation’s processes and priorities.",
    intro: "When the requirements are yours, the software should fit.",
    detail:
      "Tell us what your business needs to do. We’ll discuss the scope of a suitable software solution.",
    audience: ["Businesses", "Organisations"],
    media: workplace,
    modules: [
      {
        title: "Business systems",
        description:
          "Software that supports your organisation’s operational needs.",
        items: [
          "Business processes",
          "Operational information",
          "The people using the system",
        ],
      },
      {
        title: "Custom requirements",
        description:
          "A practical discussion about what your software needs to achieve.",
        items: [
          "Your current way of working",
          "The problem to address",
          "The scope of a suitable solution",
        ],
      },
    ],
    faqs: [],
  },
  {
    slug: "ai-solutions-support",
    name: "AI Solutions & Support",
    short: "Practical AI solutions and business-focused support.",
    category: "services",
    eyebrow: "AI Solutions & Support",
    title: "A practical",
    accent: "approach to AI.",
    description:
      "Explore where AI could be useful to your business, and discuss the support your organisation needs.",
    intro: "Start with a business need.",
    detail:
      "Share the business problem you want to address. We’ll discuss the relevant capabilities and confirm the scope with you.",
    audience: ["Businesses exploring AI", "Organisations seeking AI support"],
    media: workplace,
    modules: [
      {
        title: "AI solutions",
        description:
          "Discuss a useful business application and the requirements behind it.",
        items: [],
      },
      {
        title: "AI support",
        description:
          "Talk through the AI-related assistance your organisation is looking for.",
        items: [],
      },
    ],
    faqs: [],
  },
  {
    slug: "sales-automation",
    name: "Sales Automation",
    short: "Explore a more efficient way to manage sales work.",
    category: "systems",
    eyebrow: "Sales Automation",
    title: "A smoother",
    accent: "sales process.",
    description:
      "Explore sales automation for your business. Start with the tasks your team wants to make simpler.",
    intro: "Build the conversation around your sales process.",
    detail:
      "Tell us how your team works today and what you want to improve. We’ll confirm the available functionality with you.",
    audience: ["Businesses reviewing sales processes", "Sales teams"],
    media: workplace,
    modules: [
      {
        title: "Your current process",
        description:
          "Walk us through the daily work around a sale and the steps that take time.",
        items: [],
      },
      {
        title: "Your requirements",
        description:
          "Discuss where automation could help, and confirm the right scope with Quantum.",
        items: [],
      },
    ],
    faqs: [],
  },
];
export const solutionHref = (slug: string) => `/solutions/${slug}`;
export const demoHref = (solution?: string) =>
  `/contact?intent=demo${solution ? `&solution=${encodeURIComponent(solution)}` : ""}`;
