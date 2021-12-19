import { FILTER_DATA } from "../types"

export const filterData = (data)=>{
    console.log("action", data);
    return{
        type:FILTER_DATA,
        payload:data
    }
}