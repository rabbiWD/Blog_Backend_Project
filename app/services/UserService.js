import UserModel from "../models/UserModel.js"
import { EncodeToken } from "../utility/tokenUtility.js"

export const registerService = async (req, res) => {
    try {
        let reqBody = req.body
        
        let data = await UserModel.create(reqBody)
        return {status: true, data}
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}

export const loginService = async (req, res) => {
    try {
       let reqBody = req.body;

       let matchingStage = {
        $match : reqBody
       }
       let projectStage = {
        $project : {
            _id: 1,
            email: 1,
        }
       }

       let data = await UserModel.aggregate([matchingStage, projectStage]);

       if(data.length>0){
        let token = EncodeToken(data?.[0]?.email)
        console.log(token);

        // set cookie

        let options = {
            maxAge: 30 * 24 * 60 * 60 * 1000, //30days
            httpOnly: true,
            sameSite: "none",
            secure: true,
            };

             res.cookie("Token", token, options)
             return {status: true, token, data: data[0]};
        
       }else{
            return {status: false, data: data};
       }
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}