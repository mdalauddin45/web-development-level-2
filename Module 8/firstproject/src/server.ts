const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

import app from './app';
const PORT=5000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })