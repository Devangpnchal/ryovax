import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setStatus(res.ok ? 'Message sent successfully.' : 'Unable to send message right now.');
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-white/20 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Contact RYOVAX</h3>
      <input name="name" placeholder="Name" required className="w-full rounded-lg bg-slate-900 px-3 py-2" />
      <input type="email" name="email" placeholder="Email" required className="w-full rounded-lg bg-slate-900 px-3 py-2" />
      <textarea name="message" placeholder="How can we help?" rows="4" required className="w-full rounded-lg bg-slate-900 px-3 py-2" />
      <button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950">Send Message</button>
      {status && <p className="text-sm text-cyan-300">{status}</p>}
    </form>
  );
}
