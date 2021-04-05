import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex 
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      mx="auto"
      mt="8"
      px="8"
      align="center"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{color: "gray.400"}}
        />

        <Icon as={RiSearchLine} fontSize="20"/>
        
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20"/>
          <Icon as={RiUserAddLine} fontSize="20"/>
        </HStack>

        <Flex
          align="center"
        >
          <Box>
            <Text mr="4" textAlign="right">Marcon Willian</Text>
            <Text mr="4"  color="gray.300" fontSize="small">
              marconwillian@protonmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Marcon Willian" src="https://github.com/MarconWillian.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}