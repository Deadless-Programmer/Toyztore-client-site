import { useEffect } from "react"



const setTitleName = title=>{
    useEffect(()=>{
        document.title=`Toyztore | ${title}`;
    },[title])
}

export default setTitleName;