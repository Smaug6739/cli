import { IAddOptions } from "../../typescript/interfaces/interfaces";

export = (options: IAddOptions) => {
  return `${
    options.config!.template === "javascript"
      ? `const { Event } = require("sheweny");`
      : `import { Event } from "sheweny";
import type { ShewenyClient } from "sheweny";`
  }

${options.config!.template === "javascript" ? "module.exports =" : "export"} class ${
    options.addName
  }Event extends Event {
  constructor(client${
    options.config!.template === "typescript" ? ": ShewenyClient" : ""
  }) {
    super(client, "${options.addName!}", {
      description: "${options.eventOptions!.description}",
      only: ${options.eventOptions!.once},
    });
  }

  execute() {
    console.log("Test");
  }
};
`;
};
