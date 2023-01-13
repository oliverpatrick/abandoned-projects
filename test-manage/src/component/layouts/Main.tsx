import { ReactNode } from 'react';
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { SidebarContent } from '../Sidebar/Sidebar';
import MobileNav from '../Sidebar/MobileNav';

export default function SidebarWithHeaderLayout({
  firstname,
  lastname,
  role,
  children
}: {
  firstname: string;
  lastname: string;
  role: string;
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav
        onOpen={onOpen}
        firstname={firstname}
        lastname={lastname}
        role={role}
      />
      <Box ml={{ base: 0, md: 200 }}>{children}</Box>
    </Box>
  );
}
