import './Users.css'
export default function Users({item:value}) {

    return (
        <div className="user">
            <h2>{value.name}</h2>
        </div>
    )
}
