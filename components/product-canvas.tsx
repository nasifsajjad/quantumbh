import type { PreviewProduct } from "@/lib/content";
import type { PreviewView } from "@/lib/product-previews";
function Status({ value }: { value: string }) {
  return (
    <span
      className={`record-status ${["Pending", "Low stock", "Absent", "Expense"].includes(value) ? "record-status-warm" : ""}`}
    >
      <i aria-hidden="true" />
      {value}
    </span>
  );
}
export function ProductCanvas({
  product,
  view,
  brand,
  compact = false,
}: {
  product: PreviewProduct;
  view: PreviewView;
  brand: string;
  compact?: boolean;
}) {
  const isCards =
    (product === "hr" && view.label === "Records") ||
    (product === "hospital" && view.label === "Patient records") ||
    (product === "school" && view.label === "Admissions");
  return (
    <div
      className={`demo-canvas canvas-${product} ${compact ? "canvas-compact" : ""}`}
    >
      <div className="canvas-titlebar">
        <span className={product === "school" ? "classveew-label" : ""}>
          <img src="/brand/quantum-mark.svg" width="23" height="23" alt="" />
          {brand}
        </span>
        <span>Sample workspace</span>
      </div>
      <div className="canvas-body" key={view.label}>
        <div className="canvas-breadcrumb">
          {product === "school"
            ? "School administration"
            : product === "hospital"
              ? "Healthcare administration"
              : product === "hr"
                ? "People & administration"
                : "Business workspace"}
          <span aria-hidden="true">/</span>
          {view.label}
        </div>
        <div className="canvas-heading">
          <div>
            <h3>{view.title}</h3>
            <p>{view.sub}</p>
          </div>
          <span className="canvas-record-count">
            {String(view.rows.length).padStart(2, "0")}
            <small>records</small>
          </span>
        </div>
        {product === "erp" && view.label === "Reporting" ? (
          <div className="finance-report">
            <div className="report-period">
              <span>Reporting period</span>
              <strong>October 2026</strong>
            </div>
            {view.rows.map((row, i) => {
              const amount = Number(row[2].replace(/[^\d.]/g, ""));
              return (
                <div className="report-row" key={row[0]}>
                  <div>
                    <span>{row[0]}</span>
                    <strong>{row[2]}</strong>
                  </div>
                  <div className="report-bar" aria-hidden="true">
                    <i
                      style={
                        {
                          width: `${(amount / 15000) * 100}%`,
                          "--bar-index": i,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : product === "hospital" && view.label === "Appointments" ? (
          <div className="appointment-timeline">
            {view.rows.map((row, i) => (
              <div
                className="appointment-row"
                key={row[2]}
                style={{ "--row-index": i } as React.CSSProperties}
              >
                <time>{row[0]}</time>
                <div className="appointment-detail">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div>
                    <strong>{row[1]}</strong>
                    <span>{row[2]}</span>
                  </div>
                  <Status value={row[3]} />
                </div>
              </div>
            ))}
          </div>
        ) : product === "school" && view.label === "Timetables" ? (
          <div className="school-timetable">
            <div className="timetable-class">
              <span>Class timetable</span>
              <strong>4A</strong>
            </div>
            {view.rows.map((row, i) => (
              <div
                className="lesson-row"
                key={row[0]}
                style={{ "--row-index": i } as React.CSSProperties}
              >
                <time>{row[0]}</time>
                <div>
                  <span className="lesson-period">Period 0{i + 1}</span>
                  <strong>{row[2]}</strong>
                  <span>{row[3]}</span>
                </div>
              </div>
            ))}
          </div>
        ) : product === "school" && view.label === "Gradebook" ? (
          <div className="gradebook-view">
            <div className="gradebook-subject">
              <span>Class 4A</span>
              <strong>Mathematics</strong>
            </div>
            {view.rows.map((row) => (
              <div className="gradebook-row" key={row[0]}>
                <span>{row[0]}</span>
                <strong>{row[3]}</strong>
              </div>
            ))}
          </div>
        ) : product === "hr" && view.label === "Attendance" ? (
          <div className="attendance-view">
            <div className="attendance-date">
              <span>Daily attendance</span>
              <strong>18 October 2026</strong>
            </div>
            {view.rows.map((row, i) => (
              <div className="attendance-row" key={row[0]}>
                <span className="employee-avatar" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <strong>{row[0]}</strong>
                  <span>{row[2]}</span>
                </div>
                <Status value={row[3]} />
              </div>
            ))}
          </div>
        ) : product === "hr" && view.label === "Payroll" ? (
          <div className="payroll-register">
            <div className="register-period">
              <span>Payroll period</span>
              <strong>October 2026</strong>
            </div>
            {view.rows.map((row, i) => (
              <div className="payroll-row" key={row[0]}>
                <span className="employee-avatar" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <strong>{row[0]}</strong>
                  <span>Payroll record</span>
                </div>
                <strong>{row[2]}</strong>
              </div>
            ))}
          </div>
        ) : product === "hr" && view.label === "Leave" ? (
          <div className="leave-view">
            {view.rows.map((row, i) => (
              <div className="leave-record" key={row[0]}>
                <div>
                  <span className="employee-avatar" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <strong>{row[0]}</strong>
                </div>
                <div className="leave-dates">
                  <span>{row[1]}</span>
                  <i aria-hidden="true" />
                  <span>{row[2]}</span>
                </div>
              </div>
            ))}
          </div>
        ) : isCards ? (
          <div className="record-cards">
            {view.rows.map((row, i) => (
              <article
                className="person-record"
                key={row[0]}
                style={{ "--row-index": i } as React.CSSProperties}
              >
                <span className="person-record-avatar" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <strong>{row[0]}</strong>
                  <span>{row[1]}</span>
                </div>
                <dl>
                  <div>
                    <dt>{view.columns[2]}</dt>
                    <dd>{row[2]}</dd>
                  </div>
                  <div>
                    <dt>{view.columns[3]}</dt>
                    <dd>{row[3]}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="canvas-summary">
              {view.summary.map((s) => (
                <div key={s.label}>
                  <span>{s.label}</span>
                  <strong>{s.value}</strong>
                </div>
              ))}
            </div>
            <div
              className="canvas-table-wrap"
              tabIndex={0}
              role="region"
              aria-label="Sample records; scroll to see all columns"
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
                      key={row[0]}
                      style={{ "--row-index": i } as React.CSSProperties}
                    >
                      {row.map((cell, j) => (
                        <td key={j} data-label={view.columns[j]}>
                          {view.badges && j === 3 ? (
                            <Status value={cell} />
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
            <p className="table-scroll-hint">
              Scroll horizontally to see all columns{" "}
              <span aria-hidden="true">↔</span>
            </p>
          </>
        )}
      </div>
      <div className="canvas-footnote">
        <span className="sample-dot" aria-hidden="true" />
        Illustrative interface · Sample data
      </div>
    </div>
  );
}
