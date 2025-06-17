import { createService, deleteService, readAllService, updateService } from "../services/BlogService.js";

export const createController = async (req, res)=>{
    let result = await createService(req, res)
    return res.json(result);
}

export const readAllController = async (req, res)=>{
    let result = await readAllService(req, res)
    return res.json(result);
}

export const updateController = async (req, res)=>{
    let result = await updateService(req, res)
    return res.json(result);
}

export const deleteController = async (req, res)=>{
    let result = await deleteService(req, res)
    return res.json(result);
}