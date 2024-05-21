const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('dist'));

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
