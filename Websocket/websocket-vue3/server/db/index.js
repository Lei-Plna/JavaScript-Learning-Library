const connection = require('./connect');

(async () => {
  try {
    await connection.authenticate();
    console.log('connect database success');
  } catch (error) {
    console.log(error);
  }
})()