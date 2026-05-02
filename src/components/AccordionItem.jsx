import { useRef, useEffect } from 'react';

export default function AccordionItem({ question, index, dayId, isViewed, onViewed }) {
  const itemRef   = useRef(null);
  const bodyRef   = useRef(null);

  const toggle = () => {
    const item = itemRef.current;
    const body = bodyRef.current;
    const isOpen = item.classList.contains('open');

    // close siblings
    item.closest('.accordion-list')
      ?.querySelectorAll('.accordion-item.open')
      .forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.accordion-body').style.maxHeight = '0';
      });

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      if (!isViewed) onViewed(`${dayId}_${index}`);
    }
  };

  // Sync open state after filter re-renders
  useEffect(() => {
    if (itemRef.current?.classList.contains('open') && bodyRef.current) {
      bodyRef.current.style.maxHeight = bodyRef.current.scrollHeight + 'px';
    }
  });

  const copy = (e) => {
    const pre = e.target.closest('.code-block-wrap')?.querySelector('pre');
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText).then(() => {
      e.target.textContent = 'Copied!';
      e.target.classList.add('copied');
      setTimeout(() => { e.target.textContent = 'Copy'; e.target.classList.remove('copied'); }, 1800);
    });
  };

  return (
    <div
      ref={itemRef}
      id={`acc_${dayId}_${index}`}
      className={`accordion-item${isViewed ? ' viewed' : ''}`}
    >
      <button className="accordion-header" onClick={toggle} aria-expanded="false">
        <span className="accordion-q-icon">Q{index + 1}</span>
        <span
          className="accordion-question"
          dangerouslySetInnerHTML={{ __html: question.q }}
        />
        <span className={`accordion-tag ${question.tag}`}>{question.tag}</span>
        <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="accordion-body" ref={bodyRef}>
        <div
          className="accordion-body-inner"
          dangerouslySetInnerHTML={{ __html: question.body }}
          onClick={(e) => {
            if (e.target.matches('[data-copy]') || e.target.closest('[data-copy]')) copy(e);
          }}
        />
      </div>
    </div>
  );
}
