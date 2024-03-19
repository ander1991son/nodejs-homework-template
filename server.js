const app = require("./app");
const { connectionPromise } = require("./routes/api/db/conecction");
const { PORT } = process.env;

connectionPromise
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`server not running. error message: ${err.message}`);
  });
