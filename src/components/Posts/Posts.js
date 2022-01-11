import './Posts.css'
export default function Posts({item:value}){
return(
<div className="post">
    <h2>{value.userId}</h2>
    <h4>{value.title}</h4>
    <p>{value.body}</p>
</div>
)}
