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
      "Bring accounting, sales transactions, stock and reporting into one practical system. Keep track of what your business earns, spends, owes and holds in inventory, with a clearer view of the records behind each figure.",
    audience: [
      "Retail & wholesale",
      "Manufacturing",
      "Service businesses",
      "SMEs",
    ],
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
      "Employee information, pay, attendance and leave are closely connected parts of the working day. Quantum’s HR system helps your team keep these essential records organised, so the administration behind people management is easier to follow.",
    audience: ["Businesses with employees", "HR & administration teams"],
    modules: [
      {
        title: "Employee records",
        description:
          "Give employee information a structured home, so your HR team can maintain the records it needs for day-to-day administration.",
        items: [],
      },
      {
        title: "Payroll",
        description:
          "Bring the regular work of employee pay into your HR system and keep payroll information organised alongside your people records.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Keep day-to-day attendance information in order and give your administration team a consistent record to work from.",
        items: [],
      },
      {
        title: "Leave management",
        description:
          "Organise employee leave records, with a clearer view of the information your team needs to manage time away from work.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "What does the HR system cover?",
        answer:
          "The system covers employee records, payroll, attendance and leave management. Talk to Quantum about the day-to-day requirements of your HR and administration teams.",
      },
      {
        question: "Who is it for?",
        answer:
          "Businesses and organisations with employees, particularly those looking for practical HR software for their Bahrain or GCC operations.",
      },
    ],
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
    detail:
      "A hospital or clinic relies on well-organised information throughout the day. Quantum brings patient records, appointments, billing and pharmacy operations into a management system focused on the administrative work behind care.",
    audience: ["Hospitals", "Clinics"],
    modules: [
      {
        title: "Patient records",
        description:
          "Keep patient information organised so your healthcare administration team can work from structured records.",
        items: [],
      },
      {
        title: "Appointments",
        description:
          "Manage appointment information and keep the day’s schedule in view for the teams coordinating patient visits.",
        items: [],
      },
      {
        title: "Billing",
        description:
          "Organise the billing information behind your healthcare services as part of day-to-day hospital or clinic administration.",
        items: [],
      },
      {
        title: "Pharmacy operations",
        description:
          "Support the operational work of your pharmacy within the broader hospital-management system.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "Is the system for clinics as well as hospitals?",
        answer:
          "Yes. Quantum’s hospital-management offering is intended for hospitals and clinics, covering patient records, appointments, billing and pharmacy operations.",
      },
      {
        question: "Can we discuss our organisation’s requirements?",
        answer:
          "Yes. Share your current processes and the areas you would like to see in a demonstration. Quantum can confirm the relevant functionality and scope with you.",
      },
    ],
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
    detail:
      "From the first admission record to everyday attendance and timetables, Classveew gives school information a structured home. Its gradebook and parent-teacher communication tools help schools organise the work around teaching and learning.",
    audience: ["Schools", "Educational institutions"],
    modules: [
      {
        title: "Admissions",
        description:
          "Keep admissions information organised, with a structured record for the administration at the start of a student’s time at school.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Maintain day-to-day student attendance information in one place, so the school has a consistent record to work from.",
        items: [],
      },
      {
        title: "Timetables",
        description:
          "Organise the schedules that structure the school day, keeping timetable information together for everyday reference.",
        items: [],
      },
      {
        title: "Gradebook",
        description:
          "Give student grade information a structured home, helping the school maintain and refer to its academic records.",
        items: [],
      },
      {
        title: "Parent-teacher communication",
        description:
          "Support communication between parents and teachers alongside the school’s administrative information.",
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
    faqs: [
      {
        question: "What kind of software can we discuss?",
        answer:
          "Business software and digital systems built around your organisation’s operational needs. Share the problem you want to address so Quantum can discuss a suitable scope.",
      },
      {
        question: "What should we bring to an initial conversation?",
        answer:
          "An outline of your current process, the people who will use the software and what you want it to achieve. Existing examples of how your team works can also help explain the requirement.",
      },
    ],
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
    faqs: [
      {
        question: "How do we start an AI discussion?",
        answer:
          "Start with the business problem rather than a particular technology. Tell Quantum what your team is trying to do and where you are looking for AI-related assistance.",
      },
      {
        question: "Can we ask about AI support?",
        answer:
          "Yes. AI support is part of Quantum’s offering. Describe the assistance you need so the relevant capabilities and scope can be confirmed with you.",
      },
    ],
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
    faqs: [
      {
        question: "What does sales automation include?",
        answer:
          "Sales automation is part of Quantum’s portfolio. Discuss your sales process with our team to confirm the available functionality and whether it fits your business.",
      },
      {
        question: "Can we discuss our existing sales process?",
        answer:
          "Yes. Explain how your sales team works today, which tasks take time and what you would like to improve. This gives the conversation a practical starting point.",
      },
    ],
  },
];
export const solutionHref = (slug: string) => `/solutions/${slug}`;
export const demoHref = (solution?: string) =>
  `/contact?intent=demo${solution ? `&solution=${encodeURIComponent(solution)}` : ""}`;

export const homeFaqs = [
  {
    question: "What does Quantum do?",
    answer:
      "Quantum Software Solutions WLL provides cloud business software, custom software development, and AI solutions and support. Our portfolio includes ERP and accounting, HR, hospital management, Classveew school management, and sales automation.",
  },
  {
    question: "Which solution is right for my organisation?",
    answer:
      "Start with the work you want to improve: finance and inventory, people management, healthcare operations, school administration or sales. If you have a more specific requirement, talk to us about custom software development or AI solutions.",
  },
  {
    question: "Are Quantum’s products cloud-based?",
    answer:
      "Our products are built around cloud access and centrally managed business information. Speak with Quantum to confirm the available setup and technical details for the product you are considering.",
  },
  {
    question: "Where is Quantum based?",
    answer:
      "We’re based in Al Hidd, Kingdom of Bahrain, and serve businesses and organisations across Bahrain and the wider GCC.",
  },
  {
    question: "How can I arrange a demonstration?",
    answer:
      "Choose Request a demo and tell us which solution interests you. You can prepare an enquiry through our contact form, email sales@quantumbh.net or call +973 3216 6628.",
  },
];
