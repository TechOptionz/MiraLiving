import React from "react";
import Reveal from "@/components/common/Reveal";

export type SpecLedgerItem = {
  title: string;
  description?: string;
  /** Short category printed above the title, e.g. "Kitchen" or "Bedrooms". */
  category?: string;
};

type SpecLedgerProps = {
  items: SpecLedgerItem[];
  /** One column reads like a drawing-set schedule; two columns suit a longer list. */
  columns?: 1 | 2;
  /** Row numbering starts here — useful when a list continues from another. */
  startAt?: number;
  /**
   * A closing note. In a two-column ledger with an odd count it fills the last
   * empty cell so the grid finishes square; otherwise it sits under the rows.
   */
  footnote?: React.ReactNode;
  /** Stagger the reveal of each row. */
  revealDelay?: number;
  className?: string;
};

/**
 * A numbered specification schedule — the drawing-set language already used by
 * the home page's architectural elements, shared so every finish, amenity and
 * detail list on the site reads the same way: index, category, item, note.
 */
export default function SpecLedger({
  items,
  columns = 1,
  startAt = 1,
  footnote,
  revealDelay = 70,
  className = "",
}: SpecLedgerProps) {
  const twoUp = columns === 2;
  const fillsLastCell = twoUp && footnote && items.length % 2 === 1;

  return (
    <div className={className}>
      <dl
        className={
          twoUp
            ? "grid grid-cols-1 border-t border-mira-border md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
            : "border-t border-mira-border"
        }
      >
        {items.map((item, idx) => (
          <Reveal
            key={item.title}
            delay={(twoUp ? idx % 2 : idx) * revealDelay}
            className="group grid grid-cols-[2.75rem_1fr] items-start gap-x-4 border-b border-mira-border py-6 transition-colors sm:grid-cols-[3.25rem_1fr] sm:gap-x-6 sm:py-7 md:hover:bg-white/50"
          >
            <span
              aria-hidden="true"
              className="pt-[0.35em] font-sans text-[11px] font-medium tracking-[0.2em] text-mira-brown/70 transition-colors group-hover:text-mira-brownDeep sm:text-[12px]"
            >
              {String(startAt + idx).padStart(2, "0")}
            </span>

            <div className="min-w-0 pr-2 sm:pr-6">
              {item.category && (
                <span className="mb-2 block font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-mira-tealDark sm:text-[11px]">
                  {item.category}
                </span>
              )}
              <dt className="font-serif text-[1.35rem] font-light leading-tight text-mira-charcoal sm:text-[1.6rem]">
                {item.title}
              </dt>
              {item.description && (
                <dd className="mt-2 max-w-[46ch] font-sans text-[14.5px] font-light leading-[1.75] text-mira-muted sm:text-[15px]">
                  {item.description}
                </dd>
              )}
            </div>
          </Reveal>
        ))}

        {fillsLastCell && (
          <Reveal
            variant="fade"
            delay={revealDelay}
            className="hidden border-b border-mira-border py-7 md:flex md:items-end"
          >
            <div className="max-w-[40ch] border-l border-mira-sandDark pl-5 font-sans text-[12.5px] font-light leading-[1.75] text-mira-muted">
              {footnote}
            </div>
          </Reveal>
        )}
      </dl>

      {footnote && (
        <Reveal
          variant="fade"
          delay={revealDelay}
          className={`mt-5 max-w-[60ch] font-sans text-[12.5px] font-light leading-[1.75] text-mira-muted ${
            fillsLastCell ? "md:hidden" : ""
          }`}
        >
          {footnote}
        </Reveal>
      )}
    </div>
  );
}
