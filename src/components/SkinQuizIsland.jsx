import { useState } from 'react';

const mapToService = (answers) => {
  const concern = answers.concern;
  if (concern === 'anti-aging') return { name: 'Sculpting Face Massage', href: '/book' };
  if (concern === 'acne') return { name: 'Custom Facial (clarifying)', href: '/book' };
  if (concern === 'time-saver') return { name: 'Lash Lift & Tint', href: '/book' };
  return { name: 'Custom Facial', href: '/book' };
};

export default function SkinQuizIsland() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = [
    { key: 'concern', label: 'Your main skin goal right now?', options: [
      {v:'hydration', l:'Hydration & glow'},
      {v:'anti-aging', l:'Lift, de-puff, anti-aging'},
      {v:'acne', l:'Clarify & calm breakouts'},
      {v:'time-saver', l:'Low-maintenance beauty (lashes)'},
    ]},
    { key: 'sensitivity', label: 'Skin sensitivity level?', options: [
      {v:'low', l:'Low'}, {v:'medium', l:'Medium'}, {v:'high', l:'High'}
    ]},
  ];

  if (step >= q.length) {
    const rec = mapToService(answers);
    return (
      <div className="card">
        <h3 className="font-display text-2xl">Your recommendation</h3>
        <p className="mt-2">We suggest: <strong>{rec.name}</strong></p>
        <a className="btn btn-primary mt-4 no-underline" href={rec.href}>Book Now</a>
      </div>
    );
  }

  const current = q[step];
  return (
    <div className="card">
      <h3 className="font-display text-2xl">{current.label}</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {current.options.map(o => (
          <button key={o.v} className="btn btn-ghost" onClick={() => {
            setAnswers({...answers, [current.key]: o.v});
            setStep(step+1);
          }}>{o.l}</button>
        ))}
      </div>
    </div>
  );
}
