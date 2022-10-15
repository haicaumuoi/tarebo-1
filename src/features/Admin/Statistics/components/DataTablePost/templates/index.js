import { Paginator } from 'primereact/paginator';
import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export const postBodyTemplate = (rowData) => (
  <Flex align="center" gap="1rem">
    <Image
      w="20"
      h="20"
      src={rowData?.image}
      alt="post"
      borderRadius="12px"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src =
          'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1';
      }}
    />
    <Text fontSize="1.4rem" color="textColor.400">
      {rowData?.title}
    </Text>
  </Flex>
);

export const actionBodyTemplate = (rowData, handleActions) => (
  <BiDotsHorizontalRounded
    size="3rem"
    onClick={(e) => {
      e.stopPropagation();
      handleActions(rowData);
    }}
  />
);

export const dataTableFooterTemplate = ({
  first,
  rows,
  totalRecords,
  rowsPerPageOptions,
  onPageChange,
}) => (
  <Paginator
    first={first}
    rows={rows}
    totalRecords={totalRecords}
    rowsPerPageOptions={rowsPerPageOptions}
    onPageChange={onPageChange}
  />
);
