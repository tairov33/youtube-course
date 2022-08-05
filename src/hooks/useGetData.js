import { useState } from "react"

const path = process.env.REACT_APP_API_URL


const useGetData = (url, initialState)=> {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(true)
}

export default useGetData