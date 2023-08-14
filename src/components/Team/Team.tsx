import { removeSpaces } from "../../utilities/removeSpaces";
import "./Team.css"

interface TeamProps {
    children: React.ReactNode;
    team:string;
}
export const Team = ({children, team}:TeamProps) => {
    const teamSelected:string = removeSpaces(team).toLowerCase()  

  return (
    <article className={`team-container ${team? `team-${teamSelected}`: ""}`}>
       <h2>{team}</h2>
       <div className="cards-container">
       {children}
       </div>
        
    </article>
  )
}
