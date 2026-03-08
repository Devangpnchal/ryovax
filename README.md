# RYOVAX - Global Procurement Platform

Premium, modern B2B global procurement website combining supplier discovery, RFQ procurement workflows, and sourcing intelligence.

## Stack
- Frontend: Next.js + Tailwind CSS + Framer Motion
- Backend: Node.js + Express + Nodemailer
- Data: `data/sourcing_data.json`

## Features
- Home page with Apple/Stripe-inspired UI and animated world sourcing visualization
- Global Sourcing Intelligence cards + product sourcing intelligence tool
- Searchable supplier directory with country + industry filters
- RFQ form with file upload and email submission
- Become Supplier registration form with email submission
- Industries page and trade insights dashboard
- Contact form and unified backend API routes:
  - `POST /api/rfq`
  - `POST /api/supplier`
  - `POST /api/contact`

## Setup
```bash
npm install
npm run dev
npm test
```

- Frontend runs at `http://localhost:3000`
- Backend runs at `http://localhost:4000`

## Email Integration (Nodemailer)
Set environment variables for real SMTP delivery:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM=no-reply@ryovax.com
API_BASE_URL=http://localhost:4000
```

All form submissions are sent to `info@ryovax.com`.

Without SMTP variables, backend uses `jsonTransport` for development-safe email simulation.

## Vercel Deployment Notes
- Deploy frontend as Next.js project.
- Set `API_BASE_URL` to the deployed backend URL.
- Deploy backend separately (Node/Express host like Render/Railway/Fly) and expose `/api/*`.
