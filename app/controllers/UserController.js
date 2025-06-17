import { loginService, registerService } from "../services/UserService.js"

export const registerController = async (req, res)=>{
    let result = await registerService(req, res)
    return res.json(result);
}

export const loginController = async (req, res)=>{
    let result = await loginService(req, res)
    return res.json(result);
}