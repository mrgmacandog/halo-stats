import { createRequire } from "module";
import { getAppearanceByGamertag } from "./helpers/autocode-helper/index.js";

const haloInfinite = (app, router) => {
  const require = createRequire(import.meta.url);
  const lib = require("lib")({ token: process.env.AUTOCODE_SECRET_TOKEN });

  router.get("/halo-infinite/:gamertag/appearance", async (req, res) => {
    try {
      const response = await getAppearanceByGamertag(lib, req.params.gamertag);
      res.send(response);
    } catch (error) {
      return res.send(error); // TODO: send better error response
    }
  });
};

export default haloInfinite;
