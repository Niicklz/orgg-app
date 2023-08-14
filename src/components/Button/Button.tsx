import "./Button.css";
interface ButtonProps {
  onClick?: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button className="button-comp" onClick={onClick} type="button">
      Crear
    </button>
  );
};
