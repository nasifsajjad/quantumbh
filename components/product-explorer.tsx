"use client";
import { useEffect, useRef, useState } from "react";
import { Maximize2, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TextLink } from "./ui";
import { ProductCanvas } from "./product-canvas";
import { demoHref, solutionHref, type PreviewProduct } from "@/lib/content";
import { productPreviews } from "@/lib/product-previews";
import { measure } from "@/lib/measurement";
export function ProductExplorer({
  product = "erp",
  compact = false,
}: {
  product?: PreviewProduct;
  compact?: boolean;
}) {
  const data = productPreviews[product];
  const views = data.views;
  const [active, setActive] = useState(product === "school" ? 2 : 0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const view = views[active];
  function select(i: number) {
    setActive(i);
    measure("preview_tab", { product, view: views[i].label });
  }
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
    select(next);
    document.getElementById(`product-tab-${next}`)?.focus();
  }
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    const opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previous;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [expanded]);
  function close() {
    dialog.current?.close();
    setExpanded(false);
  }
  return (
    <section
      id="product-preview"
      className={`product-explorer section-pad preview-${product} ${compact ? "compact-explorer" : ""}`}
    >
      <div className="container">
        <div className="preview-introduction" data-reveal>
          <div>
            <span className="eyebrow">{data.name} · A closer look</span>
            <h2>{data.title}</h2>
          </div>
          <p>
            {product === "erp"
              ? "Follow the records behind your finances and stock. Select an area to explore."
              : product === "hr"
                ? "Explore the records behind employee administration."
                : product === "hospital"
                  ? "A view of the information behind a hospital or clinic’s working day."
                  : "Explore the schedules and records that structure school life."}
          </p>
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
                  onClick={() => select(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <div className="explorer-copy-stack">
              {views.map((v, i) => (
                <div
                  className={`explorer-copy ${active === i ? "is-active" : ""}`}
                  aria-hidden={active !== i}
                  inert={active !== i}
                  key={v.label}
                >
                  <h3>{v.heading}</h3>
                  <p>{v.text}</p>
                  <ul className="explorer-tags">
                    {v.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <TextLink
                    href={
                      compact
                        ? demoHref(
                            product === "school"
                              ? "School Management"
                              : data.name,
                          )
                        : solutionHref(data.slug)
                    }
                  >
                    {compact
                      ? "Request a demonstration"
                      : "Explore ERP & Accounting"}
                  </TextLink>
                </div>
              ))}
            </div>
          </div>
          <div className="preview-stage">
            <div className="preview-stage-controls">
              <span>Concept preview</span>
              <button
                type="button"
                onClick={() => {
                  setExpanded(true);
                  measure("preview_expand", { product, view: view.label });
                }}
                aria-label={`Enlarge ${data.name} preview`}
              >
                <Maximize2 size={15} />
                Enlarge preview
              </button>
            </div>
            <div
              id="product-panel"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`product-tab-${active}`}
            >
              {views.map((v, i) => (
                <div
                  className={`canvas-frame ${active === i ? "is-active" : ""}`}
                  aria-hidden={active !== i}
                  inert={active !== i}
                  key={v.label}
                >
                  <ProductCanvas
                    product={product}
                    view={v}
                    brand={data.brand}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="concept-disclaimer">
          Illustrative layouts of confirmed functions. Request a demonstration
          to see the actual software.
        </p>
      </div>
      {expanded && (
        <dialog
          ref={dialog}
          className="preview-dialog"
          aria-labelledby="preview-dialog-title"
          onKeyDown={(e) => {
            if (e.key !== "Tab") return;
            const controls = Array.from(
              dialog.current?.querySelectorAll<HTMLElement>(
                'a[href], button, [tabindex="0"]',
              ) || [],
            ).filter((el) => el.getClientRects().length > 0);
            const first = controls[0],
              last = controls[controls.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first?.focus();
            }
          }}
          onCancel={() => setExpanded(false)}
          onClose={() => setExpanded(false)}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="preview-dialog-inner">
            <div className="preview-dialog-heading">
              <div>
                <span className="eyebrow">{data.name} · Concept preview</span>
                <h2 id="preview-dialog-title">{view.title}</h2>
              </div>
              <button
                type="button"
                className="preview-close"
                onClick={close}
                aria-label="Close preview"
                autoFocus
              >
                <X size={24} />
              </button>
            </div>
            <ProductCanvas product={product} view={view} brand={data.brand} />
            <div className="preview-dialog-footer">
              <p>
                Sample data in an illustrative layout. Actual product screens
                may differ.
              </p>
              <Link
                href={demoHref(
                  product === "school" ? "School Management" : data.name,
                )}
                onClick={close}
                className="text-link"
              >
                Request a demonstration
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
