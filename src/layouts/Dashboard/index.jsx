import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from '~/components';
import Sidebar from './components/Sidebar';

const paddingX = '3rem';

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Flex w="100vw" h="100vh">
      {/* sidebar */}
      <Flex flex="0.3" direction="column" maxW="30rem" borderRight="1px solid rgb(22,24,35,0.12)">
        <Sidebar />
      </Flex>

      <Flex direction="column" flex="1">
        <Flex
          justify="space-between"
          p={`2.2rem ${paddingX}`}
          borderBottom="1px solid rgba(22,24,35,0.12)"
        >
          <Text textTransform="capitalize" fontWeight={600} fontSize="2.6rem">
            {location.pathname.replace('/', '')}
          </Text>
          <Flex align="center" gap="2rem">
            <Search />

            <Flex align="center" gap="1.5rem">
              <Box>
                <Text textTransform="capitalize" className="text">
                  alex mora
                </Text>
                <Text textTransform="capitalize" fontSize="1.2rem" color="textColor.300">
                  Super Admin
                </Text>
              </Box>
              <Avatar src="" name="alex mora" w="4rem" h="4rem" />
            </Flex>
          </Flex>
        </Flex>

        <Box h="calc(100% - 91px)">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
