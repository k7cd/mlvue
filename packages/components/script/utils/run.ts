import { spawn } from "child_process";

export default async (command: string, path: string) => {
  // cmd 表示命令, args 表示传递给命令的参数, 如rm -rf rm就是命令, -rf就是参数
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: "inherit", // 子进程的输入输出都复制到主进程(输出共享给父进程)
      shell: false, //mac 不需要开启，windows下git base需要开启支持
    });

    // 执行完毕关闭并退出
    app.on("close", resolve);
  });
};
