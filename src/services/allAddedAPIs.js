import { CommonAPI } from "./CommonAPI"
import { serverURL } from "./serverURL"


export const addResumeAPI=async(reqBody)=>{
    return await CommonAPI("post", `${serverURL}/resumes`,reqBody)
}
export const getResumeAPI = async(id) => {
    return await CommonAPI("get", `${serverURL}/resumes/${id}`,"")
}
export const addHistoryAPI = async (reqBody) => {
    return await CommonAPI("post", `${serverURL}/history`, reqBody)
}
export const getHistoryAPI = async() => {
    return await CommonAPI("get", `${serverURL}/history`, "")
}
export const deleteHistoryAPI = async (id) => {
    return await CommonAPI("delete", `${serverURL}/history/${id}`, "")
}
export const editResumeAPI = async (id) => {
    return await CommonAPI("get", `${serverURL}/resumes/${id}`, "")
}
export const updateResumeAPI = async (id,reqBody) => {
    return await CommonAPI("put",`${serverURL}/resumes/${id}`, reqBody)
}