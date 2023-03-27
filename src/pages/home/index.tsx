import * as React from 'react'

import { Button, Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Hero, Prevew, Container } from './styles'

import previewImage from '../../../public/assets/capa-home.png'
import { ArrowCircleRight } from 'phosphor-react'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="xl">Pokémon App</Heading>
        <Text size="lg">Encontre e capture seus favoritos.</Text>
        <Link href="http://localhost:3002/">
          <Button className="Button" size="md" type="submit">
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
