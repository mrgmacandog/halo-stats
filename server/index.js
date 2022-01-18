import dotenv from "dotenv";
import path from "path";
import express from "express";
import routes from "./routes/index.js";

const PORT = process.env.PORT || 3001;

dotenv.config();
const __dirname = path.resolve();
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.use("/api", routes(app, express));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
