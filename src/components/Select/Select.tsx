

import "./Select.css"
interface SelectProps {
    options: Array<string>
    onChange?: (value:string)=> void
    value:string;
}

export const Select = ({options, onChange,value}:SelectProps) => {
  return (
    <div className="select-container">
<label htmlFor="">Equipo</label>
<select value={value}className="select-position" name="" id="" onChange={(event)=> {if(onChange) {onChange(event.target.value)}}}>
        {options.map(option => {
            return (
                <option placeholder="ola" key={option} value={option}>{option}</option>
            )
        })}
    </select>

    </div>
    
  )
}


