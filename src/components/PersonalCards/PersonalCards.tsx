import { removeSpaces } from "../../utilities/removeSpaces";
import "./PersonalCards.css"

interface PersonalCardsProps {
    team:string;
    name:string;
    position:string;
    imgUrl: string;
}



export const PersonalCards = ({team, name, position, imgUrl}:PersonalCardsProps) => {
    const teamSelected:string = removeSpaces(team).toLowerCase()  
  return (
    <div className={`personal-card-container card-${teamSelected}`}>
        <header  className={`top-card top-card-${teamSelected}`}>
            <figure>
                <img src={imgUrl} alt="" />
            </figure>
        </header>
        <section>
            <h3>{name}</h3>
            <h4>{position}</h4>
        </section>
    </div>
  )
}
