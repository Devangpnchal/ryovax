const nodemailer = require('nodemailer');

function createTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  return nodemailer.createTransport({ jsonTransport: true });
}

async function sendEmail({ subject, html, attachments = [] }) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: process.env.MAIL_FROM || 'no-reply@ryovax.com',
    to: 'info@ryovax.com',
    subject,
    html,
    attachments
  });
}

module.exports = { sendEmail };
