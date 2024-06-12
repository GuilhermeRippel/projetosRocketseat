import { Container } from "./styles";

export function Note({data , ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
        </Container>
    )
}