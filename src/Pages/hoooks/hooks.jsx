import { useEffect } from "react"



const setTitleName = title=>{
    useEffect(()=>{
        document.title=`Toyz | ${title}`;
    },[title])
}

export default setTitleName;