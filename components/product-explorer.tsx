"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  FileText,
  Layers3,
  BarChart3,
} from "lucide-react";
const views = [
  {
    label: "Accounting",
    icon: FileText,
    heading: "Know what’s coming in. And going out.",
    text: "Keep invoices, receivables, payables, and your general ledger organised. A clearer foundation for your financial decisions.",
    tags: ["General ledger", "Invoicing", "Receivables & payables"],
    title: "Invoices",
    sub: "A simple view of outstanding and settled transactions.",
    columns: ["Invoice", "Customer", "Amount", "Status"],
    rows: [
      ["INV-2026-041", "Example customer A", "BHD 1,250.000", "Paid"],
      ["INV-2026-042", "Example customer B", "BHD 860.000", "Pending"],
      ["INV-2026-043", "Example customer C", "BHD 2,400.000", "Paid"],
      ["INV-2026-044", "Example customer D", "BHD 575.000", "Pending"],
    ],
  },
  {
    label: "Inventory",
    icon: Layers3,
    heading: "A closer view of every stock movement.",
    text: "Follow inventory, review valuation, and keep low-stock alerts in view. Bring more clarity to the goods your business relies on.",
    tags: ["Stock movements", "Low-stock alerts", "Inventory valuation"],
    title: "Inventory",
    sub: "Stock quantities and alerts, kept in view.",
    columns: ["Item", "Reference", "In stock", "Status"],
    rows: [
      ["Office paper · A4", "STK-001", "240 units", "In stock"],
      ["Shipping cartons", "STK-002", "18 units", "Low stock"],
      ["Label rolls", "STK-003", "96 units", "In stock"],
      ["Packing tape", "STK-004", "12 units", "Low stock"],
    ],
  },
  {
    label: "Reporting",
    icon: BarChart3,
    heading: "See the detail. Understand the picture.",
    text: "Turn everyday records into useful financial and operational reporting. Review cash flow and business performance with more context.",
    tags: [
      "Financial dashboards",
      "Cash-flow monitoring",
      "Business reporting",
    ],
    title: "Financial overview",
    sub: "An illustrative monthly summary, drawn from sample records.",
    columns: ["Account", "Period", "Amount", "Type"],
    rows: [
      ["Sales income", "October 2026", "BHD 12,450.000", "Income"],
      ["Operating expenses", "October 2026", "BHD 6,230.000", "Expense"],
      ["Accounts receivable", "October 2026", "BHD 3,600.000", "Balance"],
      ["Accounts payable", "October 2026", "BHD 1,850.000", "Balance"],
    ],
  },
];
export function ProductExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const view = views[active];
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? 2
            : (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
      setActive(next);
      document.getElementById(`product-tab-${next}`)?.focus();
    }
  };
  return (
    <section
      className={`product-explorer section-pad ${compact ? "compact-explorer" : ""}`}
    >
      <div className="container">
        <div className="section-label">
          <span className="eyebrow">ERP & ACCOUNTING</span>
          <span className="section-number">A CLOSER LOOK</span>
        </div>
        {!compact && (
          <div className="section-heading-row" data-reveal>
            <h2>
              A clearer view
              <br />
              of your business.
            </h2>
            <p>
              Keep the details connected.
              <br />
              See what matters, sooner.
            </p>
          </div>
        )}
        <div className="explorer-layout" data-reveal>
          <div className="explorer-info">
            <div
              className="explorer-tabs"
              role="tablist"
              aria-label="Explore ERP capabilities"
            >
              {views.map((item, i) => (
                <button
                  key={item.label}
                  id={`product-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-controls="product-panel"
                  tabIndex={active === i ? 0 : -1}
                  onKeyDown={(e) => handleKey(e, i)}
                  onClick={() => setActive(i)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="explorer-copy" key={view.label}>
              <h3>{view.heading}</h3>
              <p>{view.text}</p>
              <ul className="feature-pills">
                {view.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link className="text-link" href="/solutions/erp-accounting">
                Explore ERP & Accounting
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div
            className="software-window"
            id="product-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`product-tab-${active}`}
          >
            <div className="software-titlebar">
              <span>
                <img
                  src="/images/quantum-mark.png"
                  width="22"
                  height="22"
                  alt=""
                />
                Quantum
              </span>
              <span className="concept-label">CONCEPT PREVIEW</span>
            </div>
            <div className="software-body">
              <div className="software-breadcrumb">
                Workspace
                <ChevronRight size={12} />
                {view.label}
              </div>
              <div className="software-heading">
                <div>
                  <h4>{view.title}</h4>
                  <p>{view.sub}</p>
                </div>
                <view.icon size={23} />
              </div>
              <div className="software-summary">
                <div>
                  <span>
                    {active === 0
                      ? "Total invoices"
                      : active === 1
                        ? "Items shown"
                        : "Reporting period"}
                  </span>
                  <strong>{active === 2 ? "Oct 2026" : "04"}</strong>
                </div>
                <div>
                  <span>
                    {active === 0
                      ? "Awaiting payment"
                      : active === 1
                        ? "Low-stock items"
                        : "Report type"}
                  </span>
                  <strong>{active === 2 ? "Financial" : "02"}</strong>
                </div>
              </div>
              <div
                className="software-table-wrap"
                tabIndex={0}
                role="region"
                aria-label="Sample records; scroll horizontally on smaller screens"
              >
                <table
                  aria-label={`Illustrative ${view.title.toLowerCase()} data`}
                >
                  <thead>
                    <tr>
                      {view.columns.map((c) => (
                        <th key={c} scope="col">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {view.rows.map((row, i) => (
                      <tr key={`${active}-${i}`}>
                        {row.map((cell, j) => (
                          <td key={j}>
                            {j === 3 ? (
                              <span
                                className={`table-status ${["Pending", "Low stock", "Expense"].includes(cell) ? "status-warm" : ""}`}
                              >
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="software-footnote">
                <span>Illustrative interface · Sample data</span>
                <span>01 — 04</span>
              </div>
            </div>
          </div>
        </div>
        <p className="concept-disclaimer">
          Conceptual interface illustrating confirmed capabilities. Actual
          product appearance may differ.
        </p>
      </div>
    </section>
  );
}
