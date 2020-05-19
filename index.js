#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const NEWLINE = "\n";
const EMPTYLINE = "";
const LINE = "_______________";

const data = {
      name: ("Noah-Lee Dierna"),
      email: "noahdierna@me.com",
      github: "https://github.com/Noahdierna",
      studies: "graphic design / Web development ",
      linkedin: "https://www.linkedin.com/in/noah-dierna-6933b419b/",
      labelEmail: chalk.bold.bgBlue("Email"),
      labelStudies: chalk.bold.bgMagenta("Studies"),
      labelGithub: chalk.bold.bgGreen("Github"),
      labelLinkedin: chalk.bold.bgWhite.black("LinkedIn"),
};

console.log(
      boxen(
            [
                  `${data.name}`,
                  LINE,
                  EMPTYLINE,
                  `${data.labelEmail} ${data.email}`,
                  LINE,
                  EMPTYLINE,
                  `${data.labelStudies} ${data.studies}`,
                  LINE,
                  EMPTYLINE,
                  `${data.labelGithub} ${data.github}`,
                  LINE,
                  EMPTYLINE,
                  `${data.labelLinkedin} ${data.linkedin}`,
            ].join(NEWLINE), {
                  padding: 1,
                  borderStyle: "round",
                  borderColor: "red",
                  float: "center",
                  borderStyle: 'double',
            }
      )
);