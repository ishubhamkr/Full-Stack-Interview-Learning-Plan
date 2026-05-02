import { useEffect, useState } from 'react';

let _id = 0;
const listeners = new Set();

export function toast(msg, type = 'success') {
  const id = ++_id;
  listeners.forEach((fn) => fn({ id, msg, type }));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handler = (t) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== t.id)), 2900);
    };
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type}`}>
          <span>{t.type === 'success' ? '✅' : 'ℹ️'}</span>
          {t.msg}
        </div>
      ))}
    </div>
  );
}
