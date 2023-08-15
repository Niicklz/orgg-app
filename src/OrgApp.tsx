import { useState } from "react";
import { Form, FormData } from "./components/Form/Form";
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
  const [personal, setPersonal] = useState<Person[]>([]);
  const [currentTeams, setCurrentTeams] = useState<string[]>([]);
  const [personData, setPersonData] = useState<FormData>({
    name: "",
    photoUrl: "",
    position: "",
    role: "",
  });

  const createNewPersonalFn = () => {
    const { name, position, photoUrl: photo, role } = personData;
    setPersonal([...personal, { name, position, photo, role }]);
    if (!currentTeams.includes(role)) setCurrentTeams([...currentTeams, role]);
  };

  return (
    <div className=".container">
      <Header />
      <Form onChange={setPersonData} onSubmit={createNewPersonalFn} />
      <main>
        <section>
          {currentTeams.map((team) => {
            return (
              <Team key={team} team={team}>
                {personal.map((person) => {
                  if (person.role == team) {
                    return (
                      <PersonalCards
                        key={generateRandomId(5)}
                        name={person.name}
                        position={person.position}
                        team={person.role}
                        imgUrl={person.photo}
                      />
                    );
                  }
                })}
              </Team>
            );
          })}
        </section>
      </main>
    </div>
  );
};
