const express = require('express');
const multer = require('multer');
const { sendEmail } = require('./mailer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

function toHtml(title, payload) {
  return `
    <h2>${title}</h2>
    <ul>
      ${Object.entries(payload)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value || '-'}</li>`)
        .join('')}
    </ul>
  `;
}

router.post('/rfq', upload.single('file'), async (req, res) => {
  try {
    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    await sendEmail({
      subject: `RYOVAX RFQ - ${req.body.companyName || 'New Request'}`,
      html: toHtml('New RFQ Submission', req.body),
      attachments
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/supplier', async (req, res) => {
  try {
    await sendEmail({
      subject: `RYOVAX Supplier Registration - ${req.body.companyName || 'New Supplier'}`,
      html: toHtml('Supplier Registration', req.body)
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    await sendEmail({
      subject: `RYOVAX Contact - ${req.body.name || 'New Message'}`,
      html: toHtml('Contact Message', req.body)
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
