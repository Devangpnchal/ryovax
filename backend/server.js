const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', apiRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`RYOVAX backend listening on ${port}`);
});
