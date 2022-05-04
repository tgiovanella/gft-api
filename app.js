const app = require("./src/server/server");
require("dotenv-safe").config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.info(`Server listen on ${PORT}`);
});
