import { series, parallel, src, dest } from "gulp";
import delPath from "../utils/delpath";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoPrefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/mlvue`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoPrefixer())
    .pipe(dest(`${pkgPath}/mlvue/es/src`))
    .pipe(dest(`${pkgPath}/mlvue/lib/src`));
};

// 打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
