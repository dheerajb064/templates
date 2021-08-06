import "./unit.css"
import Input from "./Input"
export default function Unit({ data }) {
    return (
        <div className="unitContainer">
            <div className="unitTitle">{data.title}</div>
            <div className="unitItems">
                {data.fields.map((input) => {
                    return <Input field={input} />
                })}
            </div>
        </div>
    )
}
