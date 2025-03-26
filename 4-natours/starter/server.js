const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port:${port}...`);
});
