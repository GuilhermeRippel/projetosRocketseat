import {FiPlus, FiSearch} from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import Input from '../../components/Input'
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
                    <ButtonText title="Todos" isActive={false}/>
                </li>
                <li>
                    <ButtonText title="React" isActive={false}/>
                </li>
                <li>
                    <ButtonText title="Node" isActive={false}/>
                </li>
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Search>

            <Content></Content>

            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}