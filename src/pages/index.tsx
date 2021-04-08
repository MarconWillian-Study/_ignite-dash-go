import { Flex, Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>

        <Link href="/dashboard" passHref>
          <Button 
            type="submit"
            mt="8"
            colorScheme="pink" 
            size="lg"
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
