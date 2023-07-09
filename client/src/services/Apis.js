import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerfunction=async(data,header)=>{
    return await commonrequest('POST',`${BASE_URL}/user/register`,data,header)
}

export const usergetfunction=async()=>{
    return await commonrequest('GET',`${BASE_URL}/user/getallusers`,"")
}
