import {
  Box,
  CloseButton,
  Flex,
  Text,
  BoxProps,
  Divider
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiGrid, FiCalendar, FiClock, FiSettings } from 'react-icons/fi';
import { NavItem } from './NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiGrid },
  { name: 'Holidays', icon: FiCalendar },
  { name: 'Timesheet', icon: FiClock }
];

export const SidebarContent = ({ onClose, ...props }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      w={{ base: 'full', md: 200 }}
      pos="fixed"
      h="full"
      {...props}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex flexDirection="column" justifyContent="space-between">
        <Box>
          {LinkItems.map(link => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box>

        <Divider />
        <NavItem icon={FiSettings}>Settings</NavItem>
      </Flex>
    </Box>
  );
};
