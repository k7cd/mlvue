import components from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
import { Icon } from "./src/icon/index.mjs";
const index = {
  install: (app) => {
    components.forEach((c) => app.use(c));
  }
};
export {
  Button,
  Icon,
  index as default
};
