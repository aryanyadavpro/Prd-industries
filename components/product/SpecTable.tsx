interface SpecTableProps {
  specs: Record<string, string>;
}

export function SpecTable({ specs }: SpecTableProps) {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-[clamp(0.5rem,1.5vw,0.75rem)] border border-gray-800">
      <table className="w-full text-[clamp(0.8rem,1.2vw,0.9rem)]">
        <thead>
          <tr className="bg-gray-800/60">
            <th className="px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] text-left font-semibold text-gray-300">
              Property
            </th>
            <th className="px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] text-left font-semibold text-gray-300">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value], i) => (
            <tr
              key={key}
              className={i % 2 === 0 ? "bg-gray-900/40" : "bg-gray-900/20"}
            >
              <td className="px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1vw,0.625rem)] text-gray-400 font-medium">
                {key}
              </td>
              <td className="px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1vw,0.625rem)] text-white">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
