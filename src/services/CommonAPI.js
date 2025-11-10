import React from 'react'
import axios from 'axios'

export const CommonAPI = async (httpMethod,url,reqBody) => {
const refConfig={
    method:httpMethod,
    url,
    data:reqBody,
}
   return await axios(refConfig).then((res)=>{
    return res
   }).catch((err)=>{
    return err
   })
}


