import { formatInr, servicePrices } from "@/content/pricing";

export function ServicePriceTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-border">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Starting prices for individual services
        </caption>
        <thead>
          <tr className="bg-slate-light text-navy">
            <th scope="col" className="px-5 py-3 font-semibold">
              Service
            </th>
            <th scope="col" className="px-5 py-3 text-right font-semibold">
              Starting price
            </th>
          </tr>
        </thead>
        <tbody>
          {servicePrices.map((entry) => (
            <tr
              key={entry.id}
              className="border-t border-slate-border align-top"
            >
              <th scope="row" className="px-5 py-4 font-normal text-slate-muted">
                <span className="font-medium text-navy">{entry.service}</span>
                {entry.note ? (
                  <span className="mt-1 block text-xs leading-relaxed text-slate-muted">
                    {entry.note}
                  </span>
                ) : null}
              </th>
              <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-navy">
                {entry.amount !== null ? formatInr(entry.amount) : "On request"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
