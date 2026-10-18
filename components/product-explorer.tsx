"use client";
import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { TextLink } from "./ui";
import { demoHref, solutionHref, type PreviewProduct } from "@/lib/content";
import { productPreviews } from "@/lib/product-previews";
export function ProductExplorer({
  product = "erp",
  compact = false,
}: {
  product?: PreviewProduct;
  compact?: boolean;
}) {
  const [active, setActive] = useState(0);
  const data = productPreviews[product];
  const views = data.views;
  const view = views[active];
  function selectByKey(e: React.KeyboardEvent<HTMLButtonElement>, i: number) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? views.length - 1
          : (i + (e.key === "ArrowRight" ? 1 : views.length - 1)) %
            views.length;
    setActive(next);
    document.getElementById(`product-tab-${next}`)?.focus();
  }
  return (
    <section
      id="product-preview"
      className={`product-explorer section-pad ${compact ? "compact-explorer" : ""} preview-${product}`}
    >
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="eyebrow">{data.name} · Software preview</span>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <div className="explorer-layout" data-reveal>
          <div className="explorer-info">
            <div
              className="explorer-tabs"
              role="tablist"
              aria-label={`Explore ${data.name} capabilities`}
            >
              {views.map((v, i) => (
                <button
                  key={v.label}
                  id={`product-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-controls="product-panel"
                  tabIndex={active === i ? 0 : -1}
                  onKeyDown={(e) => selectByKey(e, i)}
                  onClick={() => setActive(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <div className="explorer-copy" key={view.label}>
              <h3>{view.heading}</h3>
              <p>{view.text}</p>
              <ul className="explorer-tags">
                {view.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <TextLink
                href={
                  compact
                    ? demoHref(
                        product === "school" ? "School Management" : data.name,
                      )
                    : solutionHref(data.slug)
                }
              >
                {compact
                  ? "Request a demonstration"
                  : "Explore ERP & Accounting"}
              </TextLink>
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
                  alt=""
                  width="22"
                  height="22"
                />
                {data.brand}
              </span>
              <span className="software-sample-label">
                Illustrative interface
              </span>
            </div>
            <div className="software-body" key={view.label}>
              <div className="software-breadcrumb">
                {data.name}
                <ChevronRight size={12} />
                {view.label}
              </div>
              <div className="software-heading">
                <div>
                  <h4>{view.title}</h4>
                  <p>{view.sub}</p>
                </div>
                <FileText size={23} />
              </div>
              <div className="software-summary">
                {view.summary.map((s) => (
                  <div key={s.label}>
                    <span>{s.label}</span>
                    <strong>{s.value}</strong>
                  </div>
                ))}
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
                      <tr
                        key={`${view.label}-${i}`}
                        style={{ "--row-index": i } as React.CSSProperties}
                      >
                        {row.map((cell, j) => (
                          <td key={j}>
                            {view.badges && j === 3 ? (
                              <span
                                className={`table-status ${["Pending", "Low stock", "Expense", "Absent"].includes(cell) ? "status-warm" : ""}`}
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
            </div>
          </div>
        </div>
        <p className="concept-disclaimer">
          Conceptual interface using sample data. Actual product screens may
          differ.
        </p>
      </div>
    </section>
  );
}
