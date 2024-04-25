import {FiPlus} from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import {Input} from '../../components/Input'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/Buttontext'

 
export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos"/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="Node"/>
                </li>
            </Menu>

            <Search>
                <Input icon={null} placeholder="Pesquisar pelo título" />
            </Search>

            <Content></Content>

            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}