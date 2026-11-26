"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ITEMS = [
  { who: "ai", label: "Intake agent", what: "Application organized, 3 questions flagged" },
  { who: "ai", label: "Document agent", what: "Pay stubs and W-2s matched to the checklist" },
  { who: "ai", label: "Income agent", what: "Income worksheet drafted for review" },
  { who: "hu", label: "Mortgage pro", what: "Worksheet verified, conditions sent to you" },
  { who: "hu", label: "Underwriter", what: "Credit decision: made by a person" },
] as const;

export function SampleFileFeed() {
  const [index, setIndex] = useState<number>(ITEMS.length);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIndex(ITEMS.length - 1);
      return;
    }
    setIndex(ITEMS.length - 1);
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % (ITEMS.length + 1));
    }, 1800);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="float-file">
      <div className="ffh">
        <span className="ffh-t">
          <Image src="/brand/homeloanagents-icon-color.svg" alt="" width={20} height={20} />
          Sample loan file
        </span>
        <span className="tag-illus">Illustration</span>
      </div>
      <ol className="feed" data-feed>
        {ITEMS.map((item, k) => (
          <li
            key={item.label}
            className={`${k < index ? "done" : ""}${k === index ? " live" : ""}`}
          >
            <span className={`who ${item.who}`}>{item.label}</span>
            <span className="what">{item.what}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}