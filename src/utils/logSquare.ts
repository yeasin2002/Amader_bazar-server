import kleur from "kleur";

const success = (icon: string, txt: string) => {
    console.log(icon, kleur.bgGreen().white().bold(`${txt}`));
};

export const logSquare = {
    success,
};
