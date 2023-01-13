import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';

export const AuthenticatedRoute: FC<React.PropsWithChildren> = ({
  children
}) => {
  const location = useLocation();
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="column" justifyContent="center">
          <Spinner size="xl" speed="1s" mb={5} />
          <Text>Loading...</Text>
        </Flex>
      </Box>
    );
  }

  if (user) return <>{children}</>;
  return <Navigate to="/login" state={{ from: location }} replace />;
};
