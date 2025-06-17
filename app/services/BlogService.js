import BlogModel from "../models/BlogModel.js"


export const createService = async (req, res) => {
    try {
        let reqBody = req.body

        let data = await BlogModel.create(reqBody, req.user.id);
        return {status: true, data}
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}

export const readAllService = async (req, res) => {
    try {
        let email = req.headers.email

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

        let data = await BlogModel.aggregate[matchingStage, projectStage];
        return {status:true, data:data};
    
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}

export const updateService = async (req, res) => {
    try {
        let reqBody = req.body

        let data = await BlogModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        return {status: true, data}
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}

export const deleteService = async (req, res) => {
    try {
        // let reqBody = req.body

        let data = await BlogModel.findOneAndDelete({_id:req.params.id})
        return {status: true, data}
    } catch (error) {
        return {status: false, error:error.toString()}
    }
}