import { ButtonContainer } from "./buttonStyle";

interface ButtonProps{
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    type?: "button" | "submit" | "reset";
    color?: "black" | "red" | "green";
    onClick: () => void;
}

const MyButton: React.FC<ButtonProps> = ({children, size, type= "button", color="black", onClick}) => {
    return(
        <ButtonContainer
            type={type}
            className={`${
                size
            } ${color}`}
            onClick={onClick}>
            {children}
        </ButtonContainer>
    )
}

export default MyButton; 