import * as chalk from "chalk";
import { constants } from "fs";
import { access } from "fs/promises";
import { join } from "path";
import { IAddOptions } from "../../../typescript/interfaces/interfaces";
import { resolveHandlersDir } from "./resolveHandlersDir";
export async function checkPath(options: IAddOptions): Promise<IAddOptions> {
  try {
    const pathDir = join(process.cwd(), resolveHandlersDir(options)!);
    await access(pathDir, constants.R_OK);
    options = {
      ...options,
      target: pathDir,
    };
    return options;
  } catch (err) {
    console.log(
      `${chalk.red.bold("ERROR")} The path for ${options.addType!} handler doesn't exist`
    );
    return process.exit(1);
  }
}
