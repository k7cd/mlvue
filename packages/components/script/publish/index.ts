import run from "../utils/run";
import { series } from "gulp";
import { pkgPath } from "../utils/paths";

export const publisComponent = async () => {
  run("release-it", `${pkgPath}/mlvue`);
};

export default series(async () => publisComponent());
