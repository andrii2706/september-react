import './Post.css'

export default function Post({item:value}) {
    return (
        <div className="post">
            <h3>{value.title}</h3>
            <h4>{value.body}</h4>
        </div>
    )
}
