import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Team } from "./components/Team/Team";
import { generateRandomId } from "./utilities/randomID";
import { PersonalCards } from "./components/PersonalCards/PersonalCards";
type Person = {
  name: string;
  position: string;
  photo: string;
  role: string;
};


export const OrgApp = () => {
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [role, setRole] = useState<string>("Programacion");
  const [personal, setPersonal] = useState<Person[]>([]);
  const [currentTeams, setCurrentTeams] = useState<string[]>([])

  const createNewPersonalFn = () => {
    
    setPersonal([
      ...personal,
      { name: name, position: position, photo: photo, role: role },
    ]);
    if(!currentTeams.includes(role)) setCurrentTeams([...currentTeams, role])
    setName("")
    setPosition("")
    setPhoto("")
    setRole("")

  };

  console.log(role);
  
 
  return (
    <div className=".container">
      <Header />
      <Form
        name={name}
        setName={setName}
        position={position}
        setPosition={setPosition}
        photo={photo}
        setPhoto={setPhoto}
        role={role}
        setRole={setRole}
        createNewPersonalFn={createNewPersonalFn}
      />
      <main>
        <section>
        {currentTeams.map(team=> {
          return (
            <Team key={team} team={team}>
              {personal.map((person) => {
                if(person.role  == team){
                  return(
                   <PersonalCards key={generateRandomId(5)} name={person.name} position={person.position} team={person.role} imgUrl={person.photo}/>
                  )
                }
              })}

            </Team>
          )
        })}
        </section>
      </main>
    </div>
  );
};
