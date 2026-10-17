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
  outcomes: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "erp-accounting",
    name: "ERP & Accounting",
    short: "Finance, inventory, and a clearer business picture.",
    category: "systems",
    eyebrow: "ERP & Accounting",
    title: "Your business.",
    accent: "In better balance.",
    description:
      "Bring accounting, sales, inventory, and reporting into a clearer view. Practical cloud software for the work behind every business.",
    intro: "Less time piecing it together. More time moving forward.",
    detail:
      "From your first quotation to your financial reports, keep the details that matter in one place. Quantum’s ERP and accounting offering supports the daily operations of retail, wholesale, manufacturing, and service businesses.",
    audience: [
      "Retail & wholesale",
      "Manufacturing",
      "Service businesses",
      "Small & medium businesses",
    ],
    modules: [
      {
        title: "Accounting & finance",
        description: "A structured foundation for your financial records.",
        items: [
          "General ledger & chart of accounts",
          "Income & expense management",
          "Accounts receivable & payable",
          "Cash & bank transactions",
        ],
      },
      {
        title: "Sales & transactions",
        description: "Keep the details of each transaction organised.",
        items: [
          "Quotations",
          "Invoices",
          "Payment tracking",
          "Customer statements",
        ],
      },
      {
        title: "Inventory",
        description: "Stay close to the stock your business depends on.",
        items: [
          "Inventory management",
          "Stock movements",
          "Low-stock alerts",
          "Inventory valuation",
        ],
      },
      {
        title: "Customers & suppliers",
        description: "Keep business relationships and balances in view.",
        items: [
          "Customer records",
          "Supplier records",
          "Customer & supplier statements",
          "Credit limits",
        ],
      },
      {
        title: "Reporting & oversight",
        description: "Make everyday records useful for everyday decisions.",
        items: [
          "Financial dashboards",
          "Cash-flow monitoring",
          "Business-performance reporting",
          "Operational & financial reports",
        ],
      },
    ],
    outcomes: [
      {
        title: "Know where you stand",
        text: "Review income, expenses, and outstanding balances with a consistent set of records.",
      },
      {
        title: "Keep stock in view",
        text: "Follow stock movements, valuation, and low-stock alerts alongside your operational work.",
      },
      {
        title: "Make reporting simpler",
        text: "Bring financial and operational information into a clearer business picture.",
      },
    ],
    faqs: [
      {
        question: "Who is the ERP and accounting offering for?",
        answer:
          "It is relevant to small and medium businesses, retailers, wholesalers, manufacturers, and service companies that need accounting, inventory, and financial management.",
      },
      {
        question: "Can I see the software before deciding?",
        answer:
          "Yes. Request a demo and tell us which areas you would like to explore so we can discuss the relevant product with you.",
      },
      {
        question: "Which features are right for my business?",
        answer:
          "Tell us about your accounting and operational requirements. We can discuss the relevant capabilities and confirm the scope before you make a decision.",
      },
    ],
  },
  {
    slug: "hr-management",
    name: "HR Management",
    short: "A more organised working day for your people.",
    category: "systems",
    eyebrow: "HR Management",
    title: "People first.",
    accent: "Admin, simplified.",
    description:
      "Employee records, payroll, attendance, and leave. Keep the essentials of people management organised with practical business software.",
    intro: "Bring the everyday work of HR into focus.",
    detail:
      "People management comes with details that need attention every day. Quantum’s HR solution gives businesses and organisations a more structured way to work with employee information and routine HR tasks.",
    audience: [
      "Businesses with employees",
      "HR & administration teams",
      "Bahrain & GCC organisations",
    ],
    modules: [
      {
        title: "Employee records",
        description:
          "Keep employee information together, so routine HR work starts from an organised record.",
        items: [],
      },
      {
        title: "Payroll",
        description:
          "Support the regular work of managing employee pay with an organised place for payroll information.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Maintain a clear record of day-to-day attendance as part of your HR administration.",
        items: [],
      },
      {
        title: "Leave management",
        description:
          "Bring structure to employee leave information and the routine work of managing time away.",
        items: [],
      },
    ],
    outcomes: [
      {
        title: "One place for people information",
        text: "Reduce the need to piece together employee details from separate records.",
      },
      {
        title: "More organised routines",
        text: "Give payroll, attendance, and leave management a clear place in your working day.",
      },
      {
        title: "A practical local conversation",
        text: "Discuss your organisation’s needs with a Bahrain-based software company.",
      },
    ],
    faqs: [
      {
        question: "Which HR functions does Quantum cover?",
        answer:
          "The confirmed HR functions are employee records, payroll, attendance, and leave management. We can discuss your specific requirements during a demo.",
      },
      {
        question: "Is it relevant to businesses in Bahrain?",
        answer:
          "Yes. Quantum is based in Bahrain and focuses on business software for organisations in Bahrain and the GCC. Specific payroll or regulatory requirements should be confirmed directly with our team.",
      },
    ],
  },
  {
    slug: "hospital-management",
    name: "Hospital Management",
    short: "Practical systems for day-to-day healthcare operations.",
    category: "systems",
    eyebrow: "Hospital Management",
    title: "More clarity.",
    accent: "For better coordination.",
    description:
      "Help your hospital or clinic organise patient records, appointments, billing, and pharmacy operations in a more practical way.",
    intro: "Keep the operational side of care organised.",
    detail:
      "Healthcare teams handle information across different parts of the working day. Quantum’s hospital management offering brings focus to the operational records and processes that hospitals and clinics rely on.",
    audience: ["Hospitals", "Clinics", "Healthcare administration teams"],
    modules: [
      {
        title: "Patient records",
        description:
          "Keep patient records organised for the operational work of your hospital or clinic.",
        items: [],
      },
      {
        title: "Appointments",
        description:
          "Manage the appointment information your team works with throughout the day.",
        items: [],
      },
      {
        title: "Billing",
        description:
          "Support the billing work behind your healthcare services as part of everyday administration.",
        items: [],
      },
      {
        title: "Pharmacy operations",
        description:
          "Include the daily work of pharmacy operations in your hospital-management system.",
        items: [],
      },
    ],
    outcomes: [
      {
        title: "Better organised information",
        text: "Give administrative teams a clearer way to maintain everyday operational records.",
      },
      {
        title: "A view across the working day",
        text: "Consider patient information, appointments, billing, and pharmacy operations together.",
      },
      {
        title: "Start with your setting",
        text: "Discuss how the available system relates to the needs of your hospital or clinic.",
      },
    ],
    faqs: [
      {
        question: "Is this for hospitals or clinics?",
        answer:
          "Quantum’s hospital management offering is intended for hospitals and clinics. Speak with us about your organisation’s size, processes, and requirements.",
      },
      {
        question: "Which operational areas are covered?",
        answer:
          "The confirmed areas are patient records, appointment management, billing, and pharmacy operations. Any additional requirements should be discussed and confirmed with Quantum.",
      },
    ],
  },
  {
    slug: "school-management",
    name: "School Management",
    short: "Meet Classveew. A clearer view of school life.",
    category: "systems",
    eyebrow: "School Management · Classveew",
    title: "School life.",
    accent: "Better organised.",
    description:
      "Meet Classveew, Quantum’s school-management platform. Bring admissions, attendance, timetables, gradebook, and parent-teacher communication into focus.",
    intro: "A school day has many moving parts. See them more clearly.",
    detail:
      "Classveew helps schools organise the information and routines behind everyday school life. Currently serving schools in Bahrain, it supports administrative teams and the communication between parents and teachers.",
    audience: [
      "Schools",
      "Educational institutions",
      "School administration teams",
    ],
    modules: [
      {
        title: "Admissions",
        description:
          "Bring admissions information into an organised school-management workflow.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Keep an organised record of student attendance throughout the school day.",
        items: [],
      },
      {
        title: "Timetables",
        description:
          "Maintain the timetables that give the school day its structure.",
        items: [],
      },
      {
        title: "Gradebook",
        description:
          "Give grade information a structured home in your school’s gradebook.",
        items: [],
      },
      {
        title: "Parent-teacher communication",
        description:
          "Support everyday communication between parents and teachers around school life.",
        items: [],
      },
    ],
    outcomes: [
      {
        title: "A clearer school routine",
        text: "Give admissions, attendance, timetables, and grade information their own organised place.",
      },
      {
        title: "Keep communication connected",
        text: "Support the relationship between parents and teachers through the school’s daily work.",
      },
      {
        title: "Made relevant through local use",
        text: "Classveew is currently serving schools in Bahrain.",
      },
    ],
    faqs: [
      {
        question: "What is Classveew?",
        answer:
          "Classveew is Quantum’s school-management platform. Its confirmed features include admissions, gradebook, attendance, timetables, and parent-teacher communication.",
      },
      {
        question: "Is Classveew being used in Bahrain?",
        answer:
          "Yes. Classveew is currently serving schools in Bahrain. Contact Quantum to discuss the platform and request a demonstration.",
      },
      {
        question: "Can our school request a demo?",
        answer:
          "Yes. Share your school’s requirements through the demo enquiry form, or contact our sales team directly.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    short: "Business software shaped around your organisation.",
    category: "services",
    eyebrow: "Software Development",
    title: "Your way of working.",
    accent: "Built into software.",
    description:
      "Custom software and digital business systems, starting with what your organisation actually needs.",
    intro: "Start with the business. Then find the right system.",
    detail:
      "Every organisation has its own processes, responsibilities, and priorities. Quantum provides software development for businesses that need digital tools shaped around those needs. Talk to us about the work you want to make simpler.",
    audience: [
      "Businesses with specific requirements",
      "Organisations reviewing manual processes",
      "Teams planning a business system",
    ],
    modules: [
      {
        title: "Business software",
        description:
          "Discuss the system your organisation needs to support its daily work.",
        items: [
          "Operational requirements",
          "Business processes",
          "The people using the system",
        ],
      },
      {
        title: "Custom software solutions",
        description:
          "Explore a software approach shaped around your organisation.",
        items: [
          "Your business goals",
          "Your current way of working",
          "The scope of a suitable solution",
        ],
      },
      {
        title: "Digital business tools",
        description:
          "Bring a specific business need into a practical software conversation.",
        items: [
          "Tasks you want to simplify",
          "Information you need to organise",
          "The outcomes that matter to your team",
        ],
      },
    ],
    outcomes: [
      {
        title: "Begin with a clear need",
        text: "Describe the problem in business terms, including how it affects the people doing the work.",
      },
      {
        title: "Discuss a practical scope",
        text: "Explore what the software needs to do and where it fits within your organisation.",
      },
      {
        title: "Make an informed next step",
        text: "Speak with Quantum about the requirements before deciding how to move forward.",
      },
    ],
    faqs: [
      {
        question: "What kind of development can we discuss?",
        answer:
          "Quantum provides software development and digital business systems. Share your requirements so we can confirm whether the proposed scope is a suitable fit.",
      },
      {
        question: "Do we need a complete specification first?",
        answer:
          "You can start by describing your business, the problem you are addressing, and what you want the software to achieve. Any technical scope and delivery details will need to be discussed directly.",
      },
    ],
  },
  {
    slug: "ai-solutions-support",
    name: "AI Solutions & Support",
    short: "Useful AI begins with a real business need.",
    category: "services",
    eyebrow: "AI Solutions & Support",
    title: "A clear purpose.",
    accent: "For intelligent tools.",
    description:
      "Explore AI with your business needs in focus. A practical conversation about useful applications and the support your organisation may need.",
    intro: "The right starting point is a useful question.",
    detail:
      "Where could AI make a meaningful difference to your business? Quantum’s AI solutions and support offering starts with a discussion of your organisation, your current challenges, and the outcome you are looking for.",
    audience: [
      "Businesses exploring AI",
      "Organisations reviewing AI needs",
      "Teams looking for AI-related support",
    ],
    modules: [
      {
        title: "AI solutions",
        description:
          "Discuss your business need and explore whether an AI solution is relevant.",
        items: [
          "Your intended business outcome",
          "The task or process in question",
          "The requirements to discuss with Quantum",
        ],
      },
      {
        title: "AI support",
        description:
          "Talk through the AI-related assistance your organisation is looking for.",
        items: [
          "Your current situation",
          "The support you need",
          "A suitable scope to confirm together",
        ],
      },
    ],
    outcomes: [
      {
        title: "Business purpose first",
        text: "Focus the conversation on a real task, practical need, or organisational challenge.",
      },
      {
        title: "A grounded discussion",
        text: "Explore what is relevant to your situation, with the scope confirmed directly with Quantum.",
      },
      {
        title: "Clarity before commitment",
        text: "Discuss capabilities, requirements, and support expectations before moving ahead.",
      },
    ],
    faqs: [
      {
        question: "Which AI services does Quantum provide?",
        answer:
          "AI solutions and AI support are part of Quantum’s offering. Specific capabilities and support arrangements are discussed and confirmed based on your requirements.",
      },
      {
        question: "How should we start?",
        answer:
          "Tell us what your organisation wants to achieve, where you are considering AI, and whether you are looking for a solution or assistance. Our team can discuss the next step with you.",
      },
    ],
  },
  {
    slug: "sales-automation",
    name: "Sales Automation",
    short: "A practical conversation about a smoother sales process.",
    category: "systems",
    eyebrow: "Sales Automation",
    title: "Less friction.",
    accent: "More focus on sales.",
    description:
      "Explore software that supports a more efficient sales process. Start with the everyday tasks your business wants to make simpler.",
    intro: "Look at the work around the sale.",
    detail:
      "The sales process is different for every business. Quantum offers sales automation as part of its business-software portfolio. Speak with us about your current process and the requirements that matter to your team.",
    audience: [
      "Businesses reviewing sales processes",
      "Teams exploring sales automation",
      "Organisations looking to reduce routine work",
    ],
    modules: [
      {
        title: "Your sales process",
        description: "Describe how sales work in your organisation today.",
        items: [
          "The work your sales team handles",
          "The tasks that take time",
          "The information you need to manage",
        ],
      },
      {
        title: "Your automation needs",
        description:
          "Discuss where software could be relevant to your sales operations.",
        items: [
          "Your business priorities",
          "The requirements you want to explore",
          "A suitable product scope to confirm",
        ],
      },
    ],
    outcomes: [
      {
        title: "Start with the everyday work",
        text: "Identify the sales tasks and administrative steps your team wants to review.",
      },
      {
        title: "Keep the goal practical",
        text: "Focus on a more efficient way of working and the information your business needs.",
      },
      {
        title: "Confirm the right fit",
        text: "Discuss the available functionality directly with Quantum before choosing a solution.",
      },
    ],
    faqs: [
      {
        question: "What does the sales automation offering include?",
        answer:
          "Sales automation is part of Quantum’s portfolio. The exact functionality and suitability for your business should be confirmed directly with our team.",
      },
      {
        question: "Can we discuss our existing sales process?",
        answer:
          "Yes. Tell us how your sales team works and which tasks you would like to improve. This gives us a useful starting point for a focused discussion.",
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
      "Quantum Software Solutions WLL is a Bahrain-based company providing practical business software, custom software development, AI solutions and support, and operational systems for organisations in Bahrain and the GCC.",
  },
  {
    question: "Which solution is right for my organisation?",
    answer:
      "Start with the part of your business you want to organise: finance and inventory, HR, healthcare operations, school administration, or sales. If your requirements are more specific, talk to us about software development or AI solutions.",
  },
  {
    question: "Are your products cloud-based?",
    answer:
      "Quantum’s products are positioned around cloud access and centrally managed business information. Contact our team to confirm the available setup and technical details for the product you are considering.",
  },
  {
    question: "How can I arrange a demonstration?",
    answer:
      "Choose Request a Demo, tell us which solution interests you, and send your enquiry to sales@quantumbh.net. You can also call +973 3216 6628.",
  },
];
