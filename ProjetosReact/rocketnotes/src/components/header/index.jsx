import  { Container, Profile } from './styles'

export function Header(){
    return(
        <Container>
        <Profile>
            <img src="https://github.com/GuilhermeRippel.png" alt="Foto do usuário"></img>

            <div>
                <span>Bem-Vindo</span>
                <strong>Guilherme Rippel</strong>
            </div>
        </Profile>
        </Container>
    )
}
