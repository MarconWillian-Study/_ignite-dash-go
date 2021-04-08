import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer()

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

      { !isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

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