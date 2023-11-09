import chalk from "chalk";

const success = (txt: string, ...rest: any) => {
    const err = chalk.bgGreen.bold("🔥");
    const msg = chalk.green.bold(txt, ...rest);
    console.log(err, msg);
};

const error = (txt: string, ...rest: any) => {
    const err = chalk.bgRed.white("❌");
    const msg = chalk.red.bold(txt, ...rest);
    console.log(err, msg);
};
const warning = (txt: string, ...rest: any) => {
    const err = chalk.bgYellow.bold("☠️");
    const msg = chalk.yellow.bold(txt, ...rest);
    console.log(err, msg);
};

export const prettyLogger = {
    success,
    error,
    warning,
};
