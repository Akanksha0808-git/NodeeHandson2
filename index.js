const express = require('express');

const route=require("./router/userRouting");

const app = express();

app.use("/api/main",route)

const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running fine on http://localhost:${port}`);
});
