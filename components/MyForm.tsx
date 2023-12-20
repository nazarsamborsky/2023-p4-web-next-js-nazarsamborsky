import { Wrapper } from "./MyFormStyle";

interface MyFormProps{
    children: React.ReactNode;
}

const MyForm:React.FC<MyFormProps> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};
export default MyForm;