import dotenv from "dotenv";
import path from "path";
import express from "express";
import routes from "./routes/index.js";

const PORT = process.env.PORT || 3001;

dotenv.config();
const __dirname = path.resolve();
const app = express();

const BUILD_FILE_PATH = path.join(__dirname, "client", "build");

// Have Node serve the files for our built React app
app.use(express.static(BUILD_FILE_PATH));

// Handle GET requests to /api route
app.use("/api", routes(app, express));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(index);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
