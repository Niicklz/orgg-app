import "./Button.css"
interface ButtonProps {
  onClickFn:()=> void
}



export const Button = ({onClickFn}:ButtonProps) => {
  return (
    <button className="button-comp" onClick={onClickFn} type="button">Crear</button>
  )
}
