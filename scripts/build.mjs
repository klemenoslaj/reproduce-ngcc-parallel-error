import { spawn as spawnNative } from "child_process";
import { join } from "path";
import {
  copyFileSync,
  rmdirSync,
  mkdirSync,
  readdirSync,
  existsSync,
} from "fs";

buildLibraries().then(() =>
  Promise.all([
    spawn("ng", ["build", "first-app", "--prod"]),
    spawn("ng", ["build", "second-app", "--prod"]),
  ])
);

function buildLibraries() {
  rmdirSync("./dist", { recursive: true });

  if (existsSync("./.fake-cache")) {
    copyDir("./.fake-cache", "./dist", {});
    return Promise.resolve(0);
  }

  return Promise.all([
    spawn("ng", ["build", "first-lib", "--prod"]),
    spawn("ng", ["build", "second-lib", "--prod"]),
  ])
    .then(() => spawn("ng", ["build", "third-lib", "--prod"]))
    .then(() =>
      Promise.all([
        spawn("ng", ["build", "fourth-lib", "--prod"]),
        spawn("ng", ["build", "fifth-lib", "--prod"]),
      ])
    )
    .then((code) => {
      copyDir("./dist", "./.fake-cache", {});
      return code;
    });
}

function spawn(command, args) {
  console.log("------------------------------------------");
  console.log([command, ...args].join(" "));
  console.log("------------------------------------------");

  return new Promise(function (resolve, reject) {
    const cp = spawnNative(command, args, { stdio: "inherit" });

    cp.on("error", reject).on("close", function (code) {
      if (code === 0) {
        resolve(0);
      } else {
        reject(code);
      }
    });
  });
}

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  const entries = readdirSync(from, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = join(from, entry.name);
    let destPath = join(to, entry.name);

    entry.isDirectory()
      ? copyDir(srcPath, destPath)
      : copyFileSync(srcPath, destPath);
  }
}

// function makeNgccArguments(tsconfigPath) {
//   const req = createRequire(import.meta.url);
//   return [
//     req.resolve("@angular/compiler-cli/ngcc/main-ngcc.js"),
//     "--source",
//     join(process.cwd(), "node_modules"),
//     "--properties",
//     "es2015",
//     "browser",
//     "module",
//     "main",
//     "--first-only",
//     "--create-ivy-entry-points",
//     "--async",
//     "--tsconfig",
//     join(process.cwd(), tsconfigPath),
//     "--use-program-dependencies",
//   ];
// }
