import { Request, Response } from "express";
import geoip from "geoip-lite";
import { User } from "../../model";
import { errorResponse, successResponse } from "../../utils";

export const UsrInfo = async (req: Request, res: Response) => {
    try {
        const geo = geoip.lookup(req.ip);


        const user = await User.findById(req.body.userInfo.id);

        if (!user) {
            return errorResponse({
                res,
                statusCode: 404,
                message: "User not found",
            });
        }
        console.log(
            "🚀 ~ file: UserInfo.controller.ts:10 ~ UsrInfo ~ user:",
            user
        );
        successResponse({
            res,
            data: {
                name: user.name,
                avatar: user.avatar,
                city: geo?.city,
                country: geo?.country,
            },
            message: "Got  User info successfully",
        });
    } catch (error: any) {
        console.log(error.message);
        errorResponse({ res });
    }
};
