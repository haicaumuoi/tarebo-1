import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { BsDot } from 'react-icons/bs';

const DetailModal = ({ isOpen, onClose, content, title, authorName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="65%" h="85%" position="relative">
        <ModalCloseButton
          fontSize="1.2rem"
          top="1.5rem"
          right="1.5rem"
          w="30px"
          h="30px"
          bg="rgba(22, 24, 35, 0.03)"
          borderRadius="100rem"
          zIndex="10"
        />
        <ModalBody p="3rem 1rem 0 2rem" display="flex" flexDirection="column">
          {title && (
            <Text as="h1" fontSize="2.6rem" lineHeight="30px" fontWeight="600" maxW="80%">
              {title}
            </Text>
          )}
          <Flex m="1rem 0" color="textColor.300" align="center" gap="0.5rem">
            <Text>{authorName}</Text>
            <BsDot />
            <Text>{moment().format('MMMM DD, YYYY')}</Text>
          </Flex>
          <Flex flex="1" gap="2rem">
            <Box position="relative" flex="0.7">
              <Box
                className="hide-scroll"
                position="absolute"
                inset="0"
                w="auto"
                h="auto"
                overflowY="scroll"
                dangerouslySetInnerHTML={{ __html: content }}
              ></Box>
            </Box>

            <Box flex="0.3">
              {/* author */}
              <Box
                bg="#fff"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                borderRadius="12px"
                p="1rem 2rem"
              >
                <Text className="text" fontSize="2rem" mb="1rem">
                  Author profile
                </Text>
                <Flex align="center" gap="1rem">
                  <Image
                    src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    width="70px"
                    height="70px"
                    borderRadius="12px"
                  />
                  <Box>
                    <Text className="text" fontSize="1.8rem">
                      Taun san
                    </Text>
                    <Text color="textColor.200">tuan@email.com</Text>
                  </Box>
                </Flex>
              </Box>

              {/* reports */}
              <Box
                mt="2rem"
                bg="#fff"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                borderRadius="12px"
                p="1rem 2rem"
              >
                <Text className="text" fontSize="1.8rem">
                  Reports
                </Text>
                <Flex direction="column"></Flex>
              </Box>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter borderTop="1px solid rgba(22,24,35,0.12)">
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
