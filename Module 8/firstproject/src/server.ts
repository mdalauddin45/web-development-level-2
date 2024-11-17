const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('process.env.DATABASE_URL');
}

import app from './app';
const PORT=5000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })