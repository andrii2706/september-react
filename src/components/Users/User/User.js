import './User.css'

export default function User({item: value}) {
    return (
        <div className="user">
            <h1>{value.name}</h1>
            <h2>{value.email}</h2>
        </div>
    )
}
