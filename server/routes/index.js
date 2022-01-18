import haloInfinite from "./halo-infinite.js";

const routes = (app, express) => {
  const router = express.Router();

  haloInfinite(app, router);

  return router;
};

export default routes;
