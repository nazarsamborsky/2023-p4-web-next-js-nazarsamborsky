import { Center } from "./centerStyle";

interface ContainerProps{
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <Center>
            {children}
        </Center>
    );
};
export default Container;