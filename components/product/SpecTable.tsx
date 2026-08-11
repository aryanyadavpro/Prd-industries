interface SpecTableProps {
  specs: Record<string, string>;
}

export function SpecTable({ specs }: SpecTableProps) {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="border border-[#E8E2D9] rounded-[clamp(0.5rem,1vw,0.75rem)] overflow-hidden">
      <table className="w-full text-[clamp(0.8125rem,0.85vw,0.9375rem)]">
        <thead>
          <tr className="border-b border-[#E8E2D9] bg-[#F3EFE9]">
            <th className="px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.625rem,1vh,0.875rem)] text-left font-medium tracking-[0.05em] uppercase text-[#7A7468] text-[clamp(0.6875rem,0.7vw,0.75rem)]">
              Specification
            </th>
            <th className="px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.625rem,1vh,0.875rem)] text-left font-medium tracking-[0.05em] uppercase text-[#7A7468] text-[clamp(0.6875rem,0.7vw,0.75rem)]">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value], i) => (
            <tr
              key={key}
              className={i !== entries.length - 1 ? "border-b border-[#E8E2D9]" : ""}
            >
              <td className="px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.625rem,1vh,0.875rem)] text-[#7A7468]">
                {key}
              </td>
              <td className="px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.625rem,1vh,0.875rem)] text-[#1A1A1A] font-medium">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
