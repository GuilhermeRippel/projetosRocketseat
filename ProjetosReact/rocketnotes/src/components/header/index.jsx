import { RiShutDownLine } from 'react-icons/ri'
import  { Container, Profile, Logout } from './styles'

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

            <Logout>
                <RiShutDownLine/>        
            </Logout>
        </Container>
    )
}
