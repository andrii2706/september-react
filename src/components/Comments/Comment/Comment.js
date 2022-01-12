import './Comment.css'

export default function Comment({item:value}) {
    return (
        <div className="comment">
            <h1>{value.name}</h1>
            <h2>{value.email}</h2>
            <h3>{value.body}</h3>
        </div>
    )
}
