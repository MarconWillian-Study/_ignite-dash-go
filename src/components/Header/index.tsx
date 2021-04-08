import { Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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
      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileDate={isWideVersion} />
      </Flex>
    </Flex>
  )
}