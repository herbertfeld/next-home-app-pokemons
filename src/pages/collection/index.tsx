import * as React from 'react'
import { Button, Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Hero, Prevew, Container } from './styles'
import HeaderComponent from '../collection/components/header/index'
import previewImage from '../../../public/assets/capa-home.png'
import { ArrowCircleRight } from 'phosphor-react'
import { GetServerSideProps } from 'next'

export default function Collection(props) {
  return (
    <Container>
      <HeaderComponent />
      <Hero>
        <Heading size="xl">{JSON.stringify(props.list)}</Heading>
        <Text size="lg">Encontre e capture seus favoritos.</Text>
        <Link href="/collection">
          <Button size="md" type="submit">
            <ArrowCircleRight />
            Entrar
          </Button>
        </Link>
      </Hero>
      <Prevew>
        <Image
          src={previewImage}
          height={700}
          quality={100}
          priority
          alt="App Pokémon"
        />
      </Prevew>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://hocalhost:3001/api/pokelista/')
  console.log(response)
  return {
    props: {
      list: response,
    },
  }
}
