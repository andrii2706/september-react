import "./Comments.css"
export default function Comments({item:value}){

return(
<div className="comment">
    <h2>{value.name}</h2>
    <h3>{value.email}</h3>
    <p>{value.body}</p>
</div>
)}
