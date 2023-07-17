import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";

// 需要保留的文件路径
const stayPath = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file) => {
      let curPath = resolve(path, file);
      // 如果是文件夹则递归删除
      if (fs.statSync(curPath).isDirectory()) {
        // 递归删除
        if (file != "node_modules") await delPath(curPath);
      } else {
        // 删除文件
        if (!stayPath.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/mili`) fs.rmdirSync(path);
  }
};

export default delPath;
