interface SpecTableProps {
  specs: Record<string, string>;
}

export function SpecTable({ specs }: SpecTableProps) {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-[24px] neu-inset p-2">
      <table className="w-full text-[clamp(0.85rem,1.2vw,0.95rem)]">
        <thead>
          <tr className="border-b border-[#A3B1C6]/40">
            <th className="px-[clamp(1rem,2.5vw,1.5rem)] py-3 text-left font-display font-bold text-[#3D4852]">
              Specification
            </th>
            <th className="px-[clamp(1rem,2.5vw,1.5rem)] py-3 text-left font-display font-bold text-[#3D4852]">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value], i) => (
            <tr
              key={key}
              className={i !== entries.length - 1 ? "border-b border-[#A3B1C6]/20" : ""}
            >
              <td className="px-[clamp(1rem,2.5vw,1.5rem)] py-3 text-[#6B7280] font-medium">
                {key}
              </td>
              <td className="px-[clamp(1rem,2.5vw,1.5rem)] py-3 text-[#3D4852] font-semibold">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
