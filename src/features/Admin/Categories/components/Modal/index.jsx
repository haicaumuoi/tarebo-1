import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { default as axios } from '~/app/api';
import { InputField } from '~/components/Form-field';
import { API_PATH, API_CODE } from '~/constants';

const schema = yup
  .object({
    categoryName: yup.string().required('Category name is required field'),
  })
  .required();

const CategoryModal = ({ initialRef, finalRef, isOpen, onClose, initialValue, callback }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialValue,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      if (initialValue.categoryName) {
        const { code, message } = await axios.put(
          API_PATH.categories.detail.replace(':id', initialValue.categoryId),
          data
        );
        if (+code === API_CODE.success) {
          toast.success(message);
          onClose();
          typeof callback === 'function' && callback();
        }
      } else {
        const { code, message } = await axios.post(API_PATH.categories.getList, data);
        if (+code === API_CODE.success) {
          toast.success(message);
          onClose();
          typeof callback === 'function' && callback();
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent p="3rem 0.5rem">
        <ModalCloseButton
          fontSize="1rem"
          top="1rem"
          right="1rem"
          w="25px"
          h="25px"
          bg="rgba(22, 24, 35, 0.03)"
          borderRadius="100rem"
        />

        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              initialRef={initialRef}
              name="categoryName"
              label="Name"
              placeholder="Enter Name"
              control={control}
              errors={errors}
            />

            <Button
              as={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              size="lg"
              mt="2.1rem"
              w="100%"
              variant={!isValid ? 'disabled' : 'primary'}
            >
              {initialValue.categoryName ? 'Edit' : 'Add'}
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
