import { useEffect, useState } from "react";

export function useFetch(url){
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    async function getDeatils(){
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()

        setData(json)
        setLoading(false)
    }

    useEffect(() => {
        getDeatils()
    },[url])

    return {
        data,
        loading
    }
}