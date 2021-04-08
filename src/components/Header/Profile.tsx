import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function Profile() {
  return (
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
  )
}