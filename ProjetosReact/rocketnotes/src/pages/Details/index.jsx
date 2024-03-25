import { Container, Links } from './styles'

import { Header } from '../../components/header'

import { Button } from '../../components/Button'

import { Section } from '../../components/Section'

import {Tag} from '../../components/Tag'


export function Details(){

  return(
    <Container>
        <Header/>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https://youtube.com</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>  
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title='Express'></Tag>
          <Tag title='NodeJS'></Tag>
        </Section>

        <Button title="Voltar"/>
    </Container>
  )
}