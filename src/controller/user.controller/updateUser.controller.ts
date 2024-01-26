import { Request, Response } from "express";
import kleur from "kleur";
import { User } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const updateUser = async (req: Request, res: Response) => {
    try {
        console.log(kleur.bgBlue("Body"), req.body);
        console.table({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
        });

        const { id } = req.params;
        const updatedUser = await User.findOneAndUpdate(
            { id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    phone: req.body.phone,
                },
            },
            { new: true }
        );
        if (!updatedUser) {
            return createPrettyError(
                401,
                "Unable to update the user with this ID"
            );
        }

        return successResponse({
            res,
            data: updatedUser,
            message: `User  Data updated `,
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
