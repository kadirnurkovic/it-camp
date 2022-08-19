import "./TeamCard.css"
export default function TeamCard({ name , points ,onDeleteTeam}) {
    return (
        <div className="team-card">
           <p>{name}</p>
           <p>{points}</p>
           <button onClick={onDeleteTeam}>DELETE</button>
        </div>
    )
}