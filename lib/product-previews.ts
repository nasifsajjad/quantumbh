import type { PreviewProduct } from "./content";
export type PreviewView = {
  label: string;
  heading: string;
  text: string;
  tags: string[];
  title: string;
  sub: string;
  columns: string[];
  rows: string[][];
  summary: { label: string; value: string }[];
  badges: boolean;
};
export type ProductPreview = {
  name: string;
  brand: string;
  title: string;
  text: string;
  slug: string;
  views: PreviewView[];
};
export const productPreviews: Record<PreviewProduct, ProductPreview> = {
  erp: {
    name: "ERP & Accounting",
    brand: "Quantum",
    title: "A closer look at accounts, stock and reporting.",
    text: "Explore the work these functions support. Select an area to see an illustrative interface with sample records.",
    slug: "erp-accounting",
    views: [
      {
        label: "Accounting",
        heading: "Keep your accounts in order.",
        text: "Organise invoices, receivables and payables alongside the financial records behind each transaction.",
        tags: ["General ledger", "Invoicing", "Receivables & payables"],
        title: "Invoices",
        sub: "An example of outstanding and settled transactions.",
        columns: ["Invoice", "Customer", "Amount", "Status"],
        rows: [
          ["INV-2026-041", "Example customer A", "BHD 1,250.000", "Paid"],
          ["INV-2026-042", "Example customer B", "BHD 860.000", "Pending"],
          ["INV-2026-043", "Example customer C", "BHD 2,400.000", "Paid"],
          ["INV-2026-044", "Example customer D", "BHD 575.000", "Pending"],
        ],
        summary: [
          {
            label: "Invoices shown",
            value: "04",
          },
          {
            label: "Awaiting payment",
            value: "02",
          },
        ],
        badges: true,
      },
      {
        label: "Inventory",
        heading: "Know what is in stock.",
        text: "Review stock quantities and movements, identify low-stock items and keep inventory valuation in view.",
        tags: ["Stock movements", "Low-stock alerts", "Inventory valuation"],
        title: "Inventory",
        sub: "Example stock quantities and alerts.",
        columns: ["Item", "Reference", "In stock", "Status"],
        rows: [
          ["Office paper · A4", "STK-001", "240 units", "In stock"],
          ["Shipping cartons", "STK-002", "18 units", "Low stock"],
          ["Label rolls", "STK-003", "96 units", "In stock"],
          ["Packing tape", "STK-004", "12 units", "Low stock"],
        ],
        summary: [
          {
            label: "Items shown",
            value: "04",
          },
          {
            label: "Low-stock items",
            value: "02",
          },
        ],
        badges: true,
      },
      {
        label: "Reporting",
        heading: "Make sense of your financial records.",
        text: "Use dashboards, cash-flow monitoring and operational reports to review what is happening across the business.",
        tags: [
          "Financial dashboards",
          "Cash-flow monitoring",
          "Business reporting",
        ],
        title: "Financial overview",
        sub: "An illustrative monthly summary using sample figures.",
        columns: ["Account", "Period", "Amount", "Type"],
        rows: [
          ["Sales income", "October 2026", "BHD 12,450.000", "Income"],
          ["Operating expenses", "October 2026", "BHD 6,230.000", "Expense"],
          ["Accounts receivable", "October 2026", "BHD 3,600.000", "Balance"],
          ["Accounts payable", "October 2026", "BHD 1,850.000", "Balance"],
        ],
        summary: [
          {
            label: "Reporting period",
            value: "Oct 2026",
          },
          {
            label: "Report type",
            value: "Financial",
          },
        ],
        badges: true,
      },
    ],
  },
  hr: {
    name: "HR Management",
    brand: "Quantum",
    title: "A closer look at everyday HR.",
    text: "Explore employee records, attendance, leave and payroll through illustrative examples using sample data.",
    slug: "hr-management",
    views: [
      {
        label: "Records",
        heading: "Keep employee information organised.",
        text: "Maintain a structured employee record that the people responsible for HR administration can refer to.",
        tags: [
          "Employee information",
          "Organised records",
          "HR administration",
        ],
        title: "Employee records",
        sub: "Illustrative employee information.",
        columns: ["Employee", "Reference", "Department", "Record"],
        rows: [
          ["Employee 01", "EMP-001", "Accounts", "Recorded"],
          ["Employee 02", "EMP-002", "Operations", "Recorded"],
          ["Employee 03", "EMP-003", "Administration", "Recorded"],
          ["Employee 04", "EMP-004", "Sales", "Recorded"],
        ],
        summary: [
          {
            label: "Records shown",
            value: "04",
          },
          {
            label: "View",
            value: "Employees",
          },
        ],
        badges: true,
      },
      {
        label: "Attendance",
        heading: "Keep the day’s attendance in view.",
        text: "Maintain attendance information as part of the records your HR team works with each day.",
        tags: ["Daily attendance", "Employee records", "HR administration"],
        title: "Attendance",
        sub: "An illustrative daily attendance record.",
        columns: ["Employee", "Date", "Department", "Attendance"],
        rows: [
          ["Employee 01", "18 Oct 2026", "Accounts", "Present"],
          ["Employee 02", "18 Oct 2026", "Operations", "Present"],
          ["Employee 03", "18 Oct 2026", "Administration", "Absent"],
          ["Employee 04", "18 Oct 2026", "Sales", "Present"],
        ],
        summary: [
          {
            label: "Attendance date",
            value: "18 Oct",
          },
          {
            label: "Records shown",
            value: "04",
          },
        ],
        badges: true,
      },
      {
        label: "Leave",
        heading: "Organise time away from work.",
        text: "Keep employee leave information together so your team can refer to a consistent record.",
        tags: ["Employee leave", "Leave dates", "Organised information"],
        title: "Leave records",
        sub: "Illustrative employee leave dates.",
        columns: ["Employee", "From", "To", "Record"],
        rows: [
          ["Employee 01", "20 Oct 2026", "22 Oct 2026", "Recorded"],
          ["Employee 02", "25 Oct 2026", "26 Oct 2026", "Recorded"],
          ["Employee 03", "01 Nov 2026", "03 Nov 2026", "Recorded"],
          ["Employee 04", "08 Nov 2026", "12 Nov 2026", "Recorded"],
        ],
        summary: [
          {
            label: "Leave records",
            value: "04",
          },
          {
            label: "View",
            value: "Leave",
          },
        ],
        badges: true,
      },
      {
        label: "Payroll",
        heading: "Manage the records around employee pay.",
        text: "Bring payroll information into the system your team uses for HR administration.",
        tags: ["Payroll records", "Employee pay", "Monthly administration"],
        title: "Payroll",
        sub: "Sample payroll figures for illustration.",
        columns: ["Employee", "Period", "Amount", "Record"],
        rows: [
          ["Employee 01", "October 2026", "BHD 850.000", "Recorded"],
          ["Employee 02", "October 2026", "BHD 720.000", "Recorded"],
          ["Employee 03", "October 2026", "BHD 680.000", "Recorded"],
          ["Employee 04", "October 2026", "BHD 790.000", "Recorded"],
        ],
        summary: [
          {
            label: "Payroll period",
            value: "Oct 2026",
          },
          {
            label: "Records shown",
            value: "04",
          },
        ],
        badges: true,
      },
    ],
  },
  hospital: {
    name: "Hospital Management",
    brand: "Quantum",
    title: "A closer look at healthcare administration.",
    text: "Explore examples of appointment, patient and billing information. These are illustrative interfaces using sample records.",
    slug: "hospital-management",
    views: [
      {
        label: "Appointments",
        heading: "Keep appointment information in order.",
        text: "Give the people coordinating visits a structured view of the appointment information they work with.",
        tags: [
          "Appointment management",
          "Daily schedules",
          "Healthcare administration",
        ],
        title: "Appointments",
        sub: "An illustrative appointment schedule.",
        columns: ["Time", "Patient", "Reference", "Status"],
        rows: [
          ["09:00", "Sample patient 01", "APT-001", "Scheduled"],
          ["09:30", "Sample patient 02", "APT-002", "Arrived"],
          ["10:00", "Sample patient 03", "APT-003", "Scheduled"],
          ["10:30", "Sample patient 04", "APT-004", "Scheduled"],
        ],
        summary: [
          {
            label: "Appointments shown",
            value: "04",
          },
          {
            label: "Schedule date",
            value: "18 Oct",
          },
        ],
        badges: true,
      },
      {
        label: "Patient records",
        heading: "Give patient information a structured home.",
        text: "Organise the patient records used in healthcare administration. Discuss your organisation’s record requirements with Quantum.",
        tags: [
          "Patient information",
          "Structured records",
          "Administrative reference",
        ],
        title: "Patient records",
        sub: "Illustrative records; no real patient data.",
        columns: ["Patient", "Reference", "Record date", "Record"],
        rows: [
          ["Sample patient 01", "PAT-001", "18 Oct 2026", "Recorded"],
          ["Sample patient 02", "PAT-002", "18 Oct 2026", "Recorded"],
          ["Sample patient 03", "PAT-003", "18 Oct 2026", "Recorded"],
          ["Sample patient 04", "PAT-004", "18 Oct 2026", "Recorded"],
        ],
        summary: [
          {
            label: "Records shown",
            value: "04",
          },
          {
            label: "View",
            value: "Patients",
          },
        ],
        badges: true,
      },
      {
        label: "Billing",
        heading: "Keep healthcare billing organised.",
        text: "Maintain the billing information behind your services as part of the operational work of a hospital or clinic.",
        tags: [
          "Billing records",
          "Healthcare services",
          "Administrative information",
        ],
        title: "Billing records",
        sub: "Illustrative billing information and sample amounts.",
        columns: ["Reference", "Patient", "Amount", "Status"],
        rows: [
          ["BILL-001", "Sample patient 01", "BHD 35.000", "Paid"],
          ["BILL-002", "Sample patient 02", "BHD 50.000", "Pending"],
          ["BILL-003", "Sample patient 03", "BHD 25.000", "Paid"],
          ["BILL-004", "Sample patient 04", "BHD 40.000", "Pending"],
        ],
        summary: [
          {
            label: "Bills shown",
            value: "04",
          },
          {
            label: "Awaiting payment",
            value: "02",
          },
        ],
        badges: true,
      },
    ],
  },
  school: {
    name: "Classveew",
    brand: "Classveew",
    title: "A closer look at the school day.",
    text: "Explore selected school-management functions through illustrative interfaces. All records and figures shown are sample data.",
    slug: "school-management",
    views: [
      {
        label: "Admissions",
        heading: "Organise the information at the start.",
        text: "Keep admissions records together as part of the administrative work around a student joining the school.",
        tags: [
          "Admissions information",
          "School administration",
          "Student records",
        ],
        title: "Admissions",
        sub: "An illustrative admissions record.",
        columns: ["Student", "Reference", "Year group", "Record"],
        rows: [
          ["Sample student 01", "ADM-001", "Year 4", "Recorded"],
          ["Sample student 02", "ADM-002", "Year 5", "Recorded"],
          ["Sample student 03", "ADM-003", "Year 4", "Recorded"],
          ["Sample student 04", "ADM-004", "Year 6", "Recorded"],
        ],
        summary: [
          {
            label: "Records shown",
            value: "04",
          },
          {
            label: "View",
            value: "Admissions",
          },
        ],
        badges: true,
      },
      {
        label: "Attendance",
        heading: "Keep student attendance in view.",
        text: "Maintain a consistent record of daily attendance for reference by the school.",
        tags: ["Student attendance", "Daily records", "School information"],
        title: "Attendance",
        sub: "An illustrative attendance record for one class.",
        columns: ["Student", "Class", "Date", "Attendance"],
        rows: [
          ["Sample student 01", "4A", "18 Oct 2026", "Present"],
          ["Sample student 02", "4A", "18 Oct 2026", "Present"],
          ["Sample student 03", "4A", "18 Oct 2026", "Absent"],
          ["Sample student 04", "4A", "18 Oct 2026", "Present"],
        ],
        summary: [
          {
            label: "Class shown",
            value: "4A",
          },
          {
            label: "Attendance date",
            value: "18 Oct",
          },
        ],
        badges: true,
      },
      {
        label: "Timetables",
        heading: "Give the school day a clear schedule.",
        text: "Keep timetable information organised so the school can refer to the schedules that structure its day.",
        tags: ["School schedules", "Class timetables", "Daily reference"],
        title: "Class timetable",
        sub: "An illustrative morning timetable.",
        columns: ["Time", "Class", "Subject", "Room"],
        rows: [
          ["08:00–08:45", "4A", "Mathematics", "Room 04"],
          ["08:45–09:30", "4A", "English", "Room 04"],
          ["09:45–10:30", "4A", "Science", "Room 08"],
          ["10:30–11:15", "4A", "Art", "Room 12"],
        ],
        summary: [
          {
            label: "Class shown",
            value: "4A",
          },
          {
            label: "Periods shown",
            value: "04",
          },
        ],
        badges: false,
      },
      {
        label: "Gradebook",
        heading: "Keep grade information organised.",
        text: "Maintain the academic records the school needs to refer to, with grade information kept in a structured record.",
        tags: [
          "Grade information",
          "Academic records",
          "School administration",
        ],
        title: "Gradebook",
        sub: "Illustrative grade information using sample records.",
        columns: ["Student", "Class", "Subject", "Grade"],
        rows: [
          ["Sample student 01", "4A", "Mathematics", "A"],
          ["Sample student 02", "4A", "Mathematics", "B"],
          ["Sample student 03", "4A", "Mathematics", "A"],
          ["Sample student 04", "4A", "Mathematics", "B"],
        ],
        summary: [
          {
            label: "Class shown",
            value: "4A",
          },
          {
            label: "Records shown",
            value: "04",
          },
        ],
        badges: false,
      },
    ],
  },
};
