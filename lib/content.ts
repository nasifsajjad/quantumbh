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
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Building%202004%20Road%201527%20Block%20115%20Al%20Hidd%20Bahrain",
};
export type PreviewProduct = "erp" | "hr" | "hospital" | "school";
export type Solution = {
  slug: string;
  name: string;
  short: string;
  category: "systems" | "services";
  kind: "product" | "service";
  preview?: PreviewProduct;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  intro: string;
  detail: string;
  audienceIntro: string;
  audience: string[];
  modules: { title: string; description: string; items: string[] }[];
  faqs: { question: string; answer: string }[];
  enquiryTitle: string;
  enquiryText: string;
  cta: string;
};
export type ServiceContent = {
  sectionLabel: string;
  contextTitle: string;
  situations: { title: string; text: string }[];
  discussionTitle: string;
  discussionIntro: string;
  topics: { title: string; text: string }[];
};
export const solutions: Solution[] = [
  {
    slug: "erp-accounting",
    name: "ERP & Accounting",
    short:
      "Manage your accounts, invoices, inventory, customers and suppliers, with financial and operational reporting.",
    category: "systems",
    kind: "product",
    preview: "erp",
    eyebrow: "ERP & Accounting",
    title: "ERP and accounting",
    accent: "for everyday business.",
    description:
      "Cloud software for the financial records, sales transactions and stock behind your business. Keep your accounts and operations organised through one system.",
    intro: "For the business behind every transaction.",
    detail:
      "A sale affects more than an invoice. Your team also needs to know what is in stock, what customers owe and what is due to suppliers. Quantum’s ERP and accounting offering brings these areas together, with records and reports that help you follow the day-to-day business.",
    audienceIntro:
      "For retail, wholesale, manufacturing and service businesses that need accounting, inventory and financial management. Suitable for SMEs looking for a more organised way to manage operational information.",
    audience: [
      "Retail",
      "Wholesale",
      "Manufacturing",
      "Service businesses",
      "SMEs",
    ],
    modules: [
      {
        title: "Accounting",
        description:
          "Maintain the records at the centre of your finances. Organise income and expenses, and keep amounts owed by customers and due to suppliers in view.",
        items: [
          "General ledger & chart of accounts",
          "Income & expense management",
          "Accounts receivable & payable",
        ],
      },
      {
        title: "Sales transactions",
        description:
          "Keep the paperwork around a sale in order, from the quotation you prepare to the invoice and its payment record.",
        items: ["Quotations", "Invoices", "Payment tracking"],
      },
      {
        title: "Inventory",
        description:
          "Know what your business holds and how stock changes. Follow movements, monitor valuation and identify items that need attention.",
        items: [
          "Stock records & movements",
          "Low-stock alerts",
          "Inventory valuation",
        ],
      },
      {
        title: "Customers & suppliers",
        description:
          "Keep business relationships connected to the right records. Refer to statements and credit limits when managing customer and supplier accounts.",
        items: [
          "Customer & supplier records",
          "Customer & supplier statements",
          "Credit limits",
        ],
      },
      {
        title: "Cash & banking",
        description:
          "Organise cash and bank transactions and monitor the movement of money through your business.",
        items: [
          "Cash transactions",
          "Bank transactions",
          "Cash-flow monitoring",
        ],
      },
      {
        title: "Reporting",
        description:
          "Turn financial and operational records into information you can review. Use dashboards and reports to understand business performance.",
        items: [
          "Financial dashboards",
          "Business-performance reports",
          "Financial & operational reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the offering cover inventory as well as accounting?",
        answer:
          "Yes. Inventory management includes stock movements, low-stock alerts and inventory valuation, alongside accounting, sales transactions, and customer and supplier records.",
      },
      {
        question: "Is the software cloud-based?",
        answer:
          "Yes. Quantum’s business software is cloud-based, with centrally managed information. Contact our team for the setup and technical details of the product you are considering.",
      },
      {
        question: "Can we focus a demonstration on particular areas?",
        answer:
          "Yes. Tell us whether your priority is accounting, invoices, inventory, customer and supplier accounts, or reporting. That gives the discussion a clear starting point.",
      },
    ],
    enquiryTitle: "Explore ERP & Accounting with Quantum.",
    enquiryText:
      "Tell us how your business manages accounts, stock and transactions today. Request a demonstration focused on the areas your team needs to understand.",
    cta: "Request an ERP demo",
  },
  {
    slug: "hr-management",
    name: "HR Management",
    short:
      "Keep employee records, payroll, attendance and leave information together in a cloud HR system.",
    category: "systems",
    kind: "product",
    preview: "hr",
    eyebrow: "HR Management",
    title: "HR software for",
    accent: "your working day.",
    description:
      "Employee records, payroll, attendance and leave management. A practical system for the regular administration behind your people.",
    intro: "For the team looking after your employees.",
    detail:
      "HR involves information that needs attention throughout the month: employee details, attendance, leave and pay. Quantum’s HR system gives these essential areas a more organised home, so your administration team has a consistent set of records to work with.",
    audienceIntro:
      "For businesses and organisations with employees, particularly HR and administration teams working in Bahrain and the GCC.",
    audience: ["Businesses with employees", "HR teams", "Administration teams"],
    modules: [
      {
        title: "Employee records",
        description:
          "Maintain employee information in a structured record your HR and administration teams can refer to.",
        items: [],
      },
      {
        title: "Payroll",
        description:
          "Manage payroll information alongside your employee records and regular HR administration.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Record daily attendance and keep the information together for your team to review.",
        items: [],
      },
      {
        title: "Leave management",
        description:
          "Organise employee leave information and maintain a clearer record of time away from work.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "Which HR functions does the system cover?",
        answer:
          "The system covers employee records, payroll, attendance and leave management. Tell us which areas you would like to see in a demonstration.",
      },
      {
        question: "Can we discuss our Bahrain or GCC operations?",
        answer:
          "Yes. Quantum is based in Bahrain and serves the wider GCC. Explain how your organisation manages HR so our team can discuss the relevant product scope and setup.",
      },
      {
        question: "Can we request a demonstration of payroll or attendance?",
        answer:
          "You can request a demonstration and identify the areas you want to explore, including payroll, attendance, leave or employee records.",
      },
    ],
    enquiryTitle: "Take a closer look at HR Management.",
    enquiryText:
      "Bring the HR tasks your team handles every month. We can discuss the system around your employee records, payroll, attendance and leave requirements.",
    cta: "Request an HR demo",
  },
  {
    slug: "hospital-management",
    name: "Hospital Management",
    short:
      "Organise patient records, appointments, billing and pharmacy operations for hospitals and clinics.",
    category: "systems",
    kind: "product",
    preview: "hospital",
    eyebrow: "Hospital Management",
    title: "Software for hospitals",
    accent: "and clinics.",
    description:
      "Manage the patient records, appointments, billing and pharmacy operations behind day-to-day healthcare services.",
    intro: "Support the administration behind patient care.",
    detail:
      "A hospital or clinic needs well-organised information throughout the day. Quantum’s Hospital Management System focuses on the operational work around patient records, appointments, billing and pharmacy, helping administration teams keep these areas in order.",
    audienceIntro:
      "For hospitals, clinics and the teams coordinating their daily administration.",
    audience: ["Hospitals", "Clinics", "Healthcare administration"],
    modules: [
      {
        title: "Patient records",
        description:
          "Keep patient information in structured records for the teams responsible for healthcare administration.",
        items: [],
      },
      {
        title: "Appointments",
        description:
          "Manage appointment information and keep the day’s schedule in view for the people coordinating patient visits.",
        items: [],
      },
      {
        title: "Billing",
        description:
          "Keep the billing information behind your healthcare services organised as part of everyday administration.",
        items: [],
      },
      {
        title: "Pharmacy operations",
        description:
          "Manage pharmacy operations as part of the hospital-management system. Ask Quantum about the functions relevant to your pharmacy.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "Is the system intended for clinics as well as hospitals?",
        answer:
          "Yes. The offering is intended for both hospitals and clinics, covering patient records, appointment management, billing and pharmacy operations.",
      },
      {
        question: "Can we discuss our pharmacy requirements?",
        answer:
          "Yes. Pharmacy operations are part of the offering. Share the work your team needs to manage so Quantum can confirm the relevant functionality with you.",
      },
      {
        question: "What should we explain before a demonstration?",
        answer:
          "Tell us about your hospital or clinic, the administrative tasks you want to review and the areas of the system you would like to explore.",
      },
    ],
    enquiryTitle: "Discuss your hospital or clinic.",
    enquiryText:
      "Request a demonstration around the operational information your team manages. Tell us which areas matter most, from patient records and appointments to billing and pharmacy.",
    cta: "Request a hospital system demo",
  },
  {
    slug: "school-management",
    name: "School Management",
    short:
      "Classveew brings admissions, attendance, timetables, gradebook and parent-teacher communication together.",
    category: "systems",
    kind: "product",
    preview: "school",
    eyebrow: "School management by Quantum",
    title: "Classveew.",
    accent: "Software for the school day.",
    description:
      "Admissions, attendance, timetables, gradebook and parent-teacher communication. One platform for the daily work of school administration.",
    intro: "For the work that keeps a school organised.",
    detail:
      "School administration carries on throughout the academic year. Classveew helps schools keep admissions, attendance, timetables and grade information organised, alongside communication between parents and teachers.",
    audienceIntro:
      "For schools and educational institutions looking for a structured way to manage school information and the daily routines around it.",
    audience: ["Schools", "Educational institutions"],
    modules: [
      {
        title: "Admissions",
        description:
          "Organise the admissions information and records at the start of a student’s time at school.",
        items: [],
      },
      {
        title: "Attendance",
        description:
          "Record student attendance and keep day-to-day information available for reference by the school.",
        items: [],
      },
      {
        title: "Timetables",
        description:
          "Organise the schedules that structure the school day, with timetable information kept together for everyday reference.",
        items: [],
      },
      {
        title: "Gradebook",
        description:
          "Keep grade information in a structured academic record for your school to maintain and refer to.",
        items: [],
      },
      {
        title: "Parent-teacher communication",
        description:
          "Support communication between parents and teachers as part of the school’s day-to-day work.",
        items: [],
      },
    ],
    faqs: [
      {
        question: "Is Classveew a Quantum product?",
        answer:
          "Yes. Classveew is Quantum’s school-management platform, covering admissions, gradebook, attendance, timetables and parent-teacher communication.",
      },
      {
        question: "Is Classveew currently used in Bahrain?",
        answer:
          "Yes. Classveew is currently serving schools in Bahrain. Contact Quantum to discuss the platform and request a demonstration.",
      },
      {
        question: "Can our school request a demonstration?",
        answer:
          "Yes. Tell us about your school and which areas you want to explore, such as admissions, attendance, timetables, gradebook or communication.",
      },
    ],
    enquiryTitle: "See Classveew with your school in mind.",
    enquiryText:
      "Tell us how your school manages its information today. Request a demonstration focused on the functions your administration and teaching teams want to explore.",
    cta: "Request a Classveew demo",
  },
  {
    slug: "software-development",
    name: "Software Development",
    short:
      "Discuss business software built around your organisation’s own processes and requirements.",
    category: "services",
    kind: "service",
    eyebrow: "Software Development",
    title: "Software built around",
    accent: "your business.",
    description:
      "Custom business software and digital systems shaped around your organisation’s operational requirements.",
    intro: "When your requirements need a closer look.",
    detail:
      "Every organisation has its own way of working. If you need software around a particular business process, Quantum can discuss a custom solution with you. The starting point is the work itself: who does it, what information they use and what the system needs to achieve.",
    audienceIntro:
      "For businesses and organisations with requirements that need individual consideration.",
    audience: ["Businesses", "Organisations with specific requirements"],
    modules: [],
    faqs: [],
    enquiryTitle: "Tell us what you need to build.",
    enquiryText:
      "You do not need a technical specification to start the conversation. An outline of your current process, the people involved and the result you want is a useful beginning.",
    cta: "Discuss your project",
  },
  {
    slug: "ai-solutions-support",
    name: "AI Solutions & Support",
    short:
      "Discuss useful business applications of AI and the AI-related assistance your organisation needs.",
    category: "services",
    kind: "service",
    eyebrow: "AI Solutions & Support",
    title: "AI solutions",
    accent: "and business support.",
    description:
      "Explore AI around a business need. Discuss the task you want to address and the AI-related support your organisation is looking for.",
    intro: "Begin with a useful business question.",
    detail:
      "What is your team trying to do, and where would assistance make a difference? Quantum offers AI solutions and AI support. A conversation about your current work helps establish which capabilities are relevant and what scope needs to be considered.",
    audienceIntro:
      "For businesses exploring AI and organisations seeking AI-related assistance.",
    audience: ["Businesses exploring AI", "Organisations seeking support"],
    modules: [
      {
        title: "AI solutions",
        description:
          "Discuss a business application you would like to explore. Explain the task, the information involved and the result you want to achieve, so Quantum can consider the requirement with you.",
        items: [],
      },
      {
        title: "AI support",
        description:
          "Describe the AI-related assistance your organisation needs. Our team can discuss the relevant capabilities and confirm the scope of support with you.",
        items: [],
      },
    ],
    faqs: [],
    enquiryTitle: "Discuss an AI requirement.",
    enquiryText:
      "Tell us about the work you want to improve or the assistance you need. We’ll discuss the relevant capabilities and establish a suitable starting point.",
    cta: "Discuss an AI requirement",
  },
  {
    slug: "sales-automation",
    name: "Sales Automation",
    short:
      "Explore sales automation around the daily work and administrative needs of your sales team.",
    category: "systems",
    kind: "service",
    eyebrow: "Sales Automation",
    title: "Sales automation",
    accent: "for your business.",
    description:
      "Discuss a more efficient way to handle sales work. Start with the tasks your team repeats and the parts of the process you want to improve.",
    intro: "Start with the work around a sale.",
    detail:
      "Sales teams need to spend time on customers while keeping the administration around their work in order. Talk to Quantum about the tasks you want to simplify and the functionality your business needs.",
    audienceIntro:
      "For businesses reviewing their sales processes and teams looking at how software could support their daily work.",
    audience: ["Businesses reviewing sales work", "Sales teams"],
    modules: [],
    faqs: [],
    enquiryTitle: "Discuss your sales process.",
    enquiryText:
      "Walk us through how your team works today and where time is being spent. Quantum can discuss your requirements and confirm the relevant functionality with you.",
    cta: "Discuss your sales process",
  },
];
export const serviceContent: Record<string, ServiceContent> = {
  "software-development": {
    sectionLabel: "Custom business software",
    contextTitle: "Software around your operational needs.",
    situations: [
      {
        title: "Processes specific to your organisation",
        text: "Your software requirements may involve particular responsibilities, records or steps in a business process. Describe how the work is done so the system can be discussed in that context.",
      },
      {
        title: "Business information that needs more structure",
        text: "If your team needs a better way to organise operational information, explain the records it uses, who maintains them and where the current approach becomes difficult.",
      },
    ],
    discussionTitle: "A useful brief starts with four things.",
    discussionIntro:
      "These details help make an initial conversation specific. Share what you know; the scope can be discussed with Quantum.",
    topics: [
      {
        title: "Your current process",
        text: "Describe the work from beginning to end. Explain where it takes place, who is involved and which steps are difficult to manage.",
      },
      {
        title: "The people using the system",
        text: "Tell us which teams will work with the software and what each needs to do. The everyday users are an important part of understanding the requirement.",
      },
      {
        title: "The information you manage",
        text: "Explain which business records and documents the work depends on, how they are maintained and what information the team needs to find.",
      },
      {
        title: "The result you want",
        text: "Identify what you want to improve. A clear business goal makes it easier to discuss which requirements matter and what should be included.",
      },
    ],
  },
  "ai-solutions-support": {
    sectionLabel: "AI solutions & AI support",
    contextTitle: "AI solutions and AI support.",
    situations: [],
    discussionTitle: "Give the conversation a clear starting point.",
    discussionIntro:
      "A business requirement is more useful than a broad request to “add AI”. Describe the work, the intended result and the assistance you need.",
    topics: [
      {
        title: "The task you want to address",
        text: "Explain what your team is trying to do and why the current approach needs attention. Keep the focus on a useful business outcome.",
      },
      {
        title: "Your current way of working",
        text: "Describe the process and information involved. This helps Quantum understand the requirement before discussing relevant AI capabilities.",
      },
      {
        title: "The assistance you need",
        text: "Tell us whether you want to explore an AI solution or discuss AI-related support. The exact scope can then be considered with your organisation.",
      },
    ],
  },
  "sales-automation": {
    sectionLabel: "Your sales operations",
    contextTitle: "Look at where the time goes.",
    situations: [
      {
        title: "Work that repeats",
        text: "Identify the administrative tasks your team carries out regularly. Explain which take time and what you want to improve.",
      },
      {
        title: "Information people need",
        text: "Consider the information your team needs before, during and after a sale, and where it becomes difficult to keep track of.",
      },
    ],
    discussionTitle: "Explore the fit for your team.",
    discussionIntro:
      "The right scope depends on how your sales work is organised. Discuss the available functionality with Quantum around these practical questions.",
    topics: [
      {
        title: "How does a sale move through your business?",
        text: "Describe the people, steps and administrative work involved in your current process.",
      },
      {
        title: "What would you like to improve?",
        text: "Explain the tasks that need attention and the result you want from a different way of working.",
      },
      {
        title: "What functionality do you need to confirm?",
        text: "Bring your requirements to Quantum so our team can discuss the offering and confirm which functions are relevant to your business.",
      },
    ],
  },
};
export const homeFaqs = [
  {
    question: "Which solution should I explore?",
    answer:
      "Start with the work you want to organise: accounts and stock, employee administration, healthcare operations, school information or sales. For a particular business requirement, explore Software Development or AI Solutions & Support. If you are unsure, contact Quantum and explain what you need.",
  },
  {
    question: "Are Quantum’s products cloud-based?",
    answer:
      "Yes. Quantum’s business software is cloud-based, with centrally managed information. Ask our team about the setup and technical details for your chosen product.",
  },
  {
    question: "How do I request a demonstration?",
    answer:
      "Choose Request a demo and select the solution you want to explore. Prepare an enquiry through the contact page and send it from your email app, or contact sales@quantumbh.net or +973 3216 6628 directly.",
  },
];
export const solutionHref = (slug: string) => `/solutions/${slug}`;
export const demoHref = (solution?: string) =>
  `/contact?intent=demo${solution ? `&solution=${encodeURIComponent(solution)}` : ""}`;
export const enquiryHref = (solution: Solution) =>
  solution.kind === "product"
    ? demoHref(solution.name)
    : `/contact?solution=${encodeURIComponent(solution.name)}`;
