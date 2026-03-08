import { useState } from 'react';
import Layout from '../components/Layout';

const supplierFields = [
  ['companyName', 'Company Name'],
  ['country', 'Country'],
  ['productsSupplied', 'Products Supplied'],
  ['industryCategory', 'Industry Category'],
  ['minimumOrderQuantity', 'Minimum Order Quantity'],
  ['certifications', 'Certifications'],
  ['factoryLocation', 'Factory Location'],
  ['website', 'Website'],
  ['email', 'Email', 'email'],
  ['phone', 'Phone Number']
];

export default function BecomeSupplier() {
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/supplier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setStatus(res.ok ? 'Registration submitted. RYOVAX team will reach out.' : 'Could not submit registration.');
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-semibold">Become a Supplier</h1>
        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {supplierFields.map(([name, label, type]) => (
              <input key={name} name={name} type={type || 'text'} placeholder={label} required={name !== 'website'} className="rounded-xl bg-slate-900 px-4 py-3" />
            ))}
          </div>
          <textarea name="additionalInformation" rows="4" placeholder="Additional Information" className="w-full rounded-xl bg-slate-900 px-4 py-3" />
          <button className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950">Submit Supplier Profile</button>
          {status && <p className="text-cyan-300">{status}</p>}
        </form>
      </section>
    </Layout>
  );
}
