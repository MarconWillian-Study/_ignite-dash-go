import { Flex, Input, FormLabel, FormControl, Button, Stack } from '@chakra-ui/react'

export default function Home() {
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
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: "gray.900"
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input 
              name="password"
              type="password"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: "gray.900"
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button 
          type="submit"
          mt="8"
          colorScheme="pink" 
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
