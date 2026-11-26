"use client";

import { useMemo, useState } from "react";

export type ChecklistGroup = {
  title: string;
  items: { id: string; label: string }[];
};

type ProgramDocumentChecklistProps = {
  groups: ChecklistGroup[];
  footnote: string;
};

export function ProgramDocumentChecklist({ groups, footnote }: ProgramDocumentChecklistProps) {
  const allIds = useMemo(() => groups.flatMap((g) => g.items.map((i) => i.id)), [groups]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const doneCount = allIds.filter((id) => checked[id]).length;
  const progress = allIds.length ? Math.round((doneCount / allIds.length) * 100) : 0;

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="doclist">
      <div className="dl-top">
        <b>Your document checklist</b>
        <div className="dl-prog" aria-hidden>
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="dl-count">
          {doneCount} / {allIds.length}
        </span>
      </div>
      <div className="dl-groups">
        {groups.map((group) => (
          <div key={group.title} className="dl-group">
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <label key={item.id}>
                <input
                  type="checkbox"
                  checked={Boolean(checked[item.id])}
                  onChange={() => toggle(item.id)}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
      <p className="dl-foot">{footnote}</p>
    </div>
  );
}