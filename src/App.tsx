import { FC, useEffect } from "react"

import "./App.css"

const Child: FC<{ data: number[] }> = ({ data }) => {
    useEffect(() => {
        return () => {
            console.log(1212121212)
        }
    }, [])
    return <div>{data.join(",")}</div>
}

const App = () => {
    return (
        <div className="content h-2 w-1 bg-white">
            <Child data={[1]}></Child>
        </div>
    )
}

export default App
