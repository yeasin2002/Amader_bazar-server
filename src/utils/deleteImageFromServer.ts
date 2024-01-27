import { unlink } from "fs/promises";
import kleur from "kleur";
import { cwd } from "process";
import { imgSubFolder } from "../types";

export const deleteImageFromServer = async (
    folderName: imgSubFolder,
    pathName: string
) => {
    try {
        pathName &&
            (await unlink(cwd() + `/uploads/${folderName}/${pathName}`));
    } catch (err) {
        console.log(kleur.red("Avatar Did not deleted"));
        console.log(err?.message);
    }
};
