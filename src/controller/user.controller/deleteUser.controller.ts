import { Request, Response } from "express";
import { User } from "../../model";
import {
    createPrettyError,
    deleteImageFromServer,
    errorResponse,
    successResponse,
} from "../../utils";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await User.findOneAndDelete({ id });
        if (!data) createPrettyError(404, "Unable to delete this user");
        deleteImageFromServer("users", data.avatar);

        successResponse({
            res,
            message: `User Deleted with ${id} ID `,
            data,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
