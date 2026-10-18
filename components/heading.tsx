export function Heading({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <h1 className={`display-heading ${className}`}>
      {lines.map((line, index) => (
        <span className="line-mask" key={line}>
          <span style={{ "--line-index": index } as React.CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
