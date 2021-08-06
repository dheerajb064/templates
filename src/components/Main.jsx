import "./main.css"
import Unit from "./Unit"
import { Data } from "../dummydata"


export default function Main() {
    return (
        <>
            <div className="mainContainer">
                <div>
                    {Data.map((element, index) => {
                        return <Unit data={element} />
                    })}
                </div>
                <button className="sendButton">Save</button>
            </div>

        </>
    )
}
