type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
  id?: string;
};

export function FaqSection({ title = "Frequently asked questions", items, id }: FaqSectionProps) {
  return (
    <section className="section section-alt" id={id}>
      <div className="section-inner">
        <h2>{title}</h2>
        <dl className="faq-list">
          {items.map((item) => (
            <div key={item.q} className="faq-item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}