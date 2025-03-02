import { ICreateOptions } from "../../../../../../typescript/interfaces/interfaces";

export = (options: ICreateOptions) => {
  return [
    `const { SelectMenu } = require("sheweny");
  
module.exports = class SelectTest extends SelectMenu {
  constructor(client) {
    super(client, ["selectId"]);
  }
  
  async execute(selectMenu) {
    switch (selectMenu.values[0]) {
      case "first_option":
        await selectMenu.reply({ content: "You have choose **first** option !" });
        break;
      case "second_option":
        await selectMenu.reply({ content: "You have choose **second** option !" });
        break;
    }
  }
};
`,
    "selectmenu.js",
  ];
};
