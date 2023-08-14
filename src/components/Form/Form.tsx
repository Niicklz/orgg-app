


import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import "./Form.css"
interface FormProps {
  name:string;
  setName: (value:string)=> void;
  position:string;
  setPosition: (value:string)=> void;
  photo:string;
  setPhoto: (value:string)=> void;
  role:string;
  setRole: (value:string)=> void;
  createNewPersonalFn: ()=>void
}
export const Form = ({name, setName, position, setPosition, photo, setPhoto, role, setRole, createNewPersonalFn}:FormProps) => {
  
  
 
 
  



  return (
    <form action="" className="form-colaborator">
         <fieldset className="form-colaborator-fieldset">
        <legend>Rellena el Formulario para crear el colaborador</legend>
        <Input placeholder="Este es un input" type="text" labelText="Nombre" value={name} handleChange={setName}/>
        <Input placeholder="Este es un input" type="text" labelText="Puesto" value={position} handleChange={setPosition}/>
        <Input placeholder="Este es un input" type="text" labelText="Foto"   value={photo} handleChange={setPhoto}/>
        <Select onChange={setRole} value={role} options={["Programacion", "Front-End","Data Cience","DevOps", "UX y Diseño", "Movil", "Innovacion y Gestion"]}/>
        <Button onClickFn={createNewPersonalFn} />
        
    </fieldset>
    </form>
   
  )
}
