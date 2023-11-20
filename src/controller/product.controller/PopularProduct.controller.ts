import { Request, Response } from "express";
import kleur from "kleur";
import { Product } from "../../model";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const PopularProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.find({}).sort({ totalSold: -1 }).limit(20);
        if (!data) {
            return createPrettyError(404, "Unable to get popular products");
        }
        successResponse({
            res,
            data,
            message: "Successfully got popular products",
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(
                `${kleur.bgRed().bold(error.name)}, Message: ${kleur.red(
                    error.message
                )}}`
            );
            errorResponse({ res, message: error.message });
        }
        errorResponse({ res });
    }
};
