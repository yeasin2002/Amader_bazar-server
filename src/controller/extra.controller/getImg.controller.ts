import { Request, Response } from "express";
import { createPrettyError, errorResponse } from "../../utils";

export const getImg = async (req: Request, res: Response) => {
    console.log("Requested")
    try {
        const { src } = req.params;
        if (!src)
            createPrettyError("src path is not valid, no image found", 404);

            const path = `${process.cwd()}/uploads/user/${src}`;
            console.log("path", path);  

        return res.sendFile(path);
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
// 