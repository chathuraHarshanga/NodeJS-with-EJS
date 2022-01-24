import express from "express";

const app = express();
const PORT = 5000;

//listen on port

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
