import { useState } from 'react';
import Layout from '../components/Layout';

const fields = [
  ['companyName', 'Company Name'],
  ['contactPerson', 'Contact Person'],
  ['email', 'Email', 'email'],
  ['phone', 'Phone Number'],
  ['productRequired', 'Product Required'],
  ['industryCategory', 'Industry Category'],
  ['quantityRequired', 'Quantity Required'],
  ['preferredCountry', 'Preferred Sourcing Country'],
  ['deliveryLocation', 'Delivery Location'],
  ['budgetRange', 'Budget Range']
];

export default function RFQPage() {
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/rfq', { method: 'POST', body: data });
    setStatus(res.ok ? 'RFQ submitted successfully. Our team will contact you shortly.' : 'Submission failed. Please retry.');
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-semibold">Request Procurement (RFQ)</h1>
        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map(([name, label, type]) => (
              <input key={name} name={name} type={type || 'text'} placeholder={label} required className="rounded-xl bg-slate-900 px-4 py-3" />
            ))}
          </div>
          <textarea name="additionalNotes" rows="4" placeholder="Additional Notes" className="w-full rounded-xl bg-slate-900 px-4 py-3" />
          <input name="file" type="file" className="w-full rounded-xl bg-slate-900 px-4 py-3" />
          <button className="rounded-full bg-white px-6 py-3 font-medium text-slate-950">Submit RFQ</button>
          {status && <p className="text-cyan-300">{status}</p>}
        </form>
      </section>
    </Layout>
  );
}
