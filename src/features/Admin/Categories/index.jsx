import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useRef, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { HiPencil } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { default as axios } from '~/app/api';
import { Loading } from '~/components';
import { API_CODE, API_PATH } from '~/constants';
import { CategoryServices } from '~/services';
import CategoryModal from './components/Modal';
import { Wrapper } from './styles';

const paddingX = '3rem';

const DEFAULT_VALUE = {
  categoryName: '',
};

const AdUsersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState();
  const [initialValue, setInitialValue] = useState();

  const initialRef = useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      CategoryServices.getList({ pageSize: rows, pageNumber: currentPage }, (data, pagination) => {
        setList(data);
        if (pagination) {
          setPagination(pagination);
        }
        setLoading(false);
      });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rows]);

  const handlePageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  const handleDelete = async (id) => {
    const { code, message } = await axios.delete(API_PATH.categories.detail.replace(':id', id));
    if (+code === API_CODE.success) {
      toast.success(message);
      fetchData();
    }
  };

  const dataTableFooterTemplate = ({
    first,
    rows,
    totalRecords,
    rowsPerPageOptions,
    onPageChange,
  }) => {
    if (!pagination) return;
    return (
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={onPageChange}
      />
    );
  };

  const actionBodyTemplate = (rowData) => (
    <Flex gap="1rem">
      <Button
        leftIcon={<HiPencil />}
        border="1px solid rgba(12,24,35,0.12)"
        variant="outline-default"
        color="yellow.500"
        _hover={{ bg: 'rgba(255,184,2, 0.06)' }}
        onClick={(e) => {
          e.stopPropagation();
          setInitialValue({ ...rowData });
          onOpen();
        }}
      >
        Edit
      </Button>
      <Button
        leftIcon={<FiTrash />}
        border="1px solid rgba(12,24,35,0.12)"
        variant="outline-primary"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(rowData.categoryId);
        }}
      >
        Delete
      </Button>
    </Flex>
  );

  return (
    <Box p={paddingX} h="100%" bg="#F3F7F9" overflow="overlay" position="relative">
      {loading && <Loading />}

      {isOpen && initialValue && (
        <CategoryModal
          initialRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          initialValue={initialValue}
          callback={fetchData}
        />
      )}

      <Flex justify="space-between" align="center" bg="#fff" p="2rem 3rem">
        <Text textTransform="capitalize" fontSize="2.4rem" fontWeight={600}>
          categories list
        </Text>

        <Button
          as={motion.div}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          size="lg"
          minW="25rem"
          minH="4.2rem"
          onClick={() => {
            setInitialValue({ ...DEFAULT_VALUE });
            onOpen();
          }}
        >
          Add Category
        </Button>
      </Flex>

      <Box>
        <Wrapper>
          <DataTable
            value={list}
            size="large"
            responsiveLayout="scroll"
            footer={() =>
              dataTableFooterTemplate({
                first,
                rows,
                onPageChange: handlePageChange,
                rowsPerPageOptions: [5, 10, 15],
                totalRecords: pagination?.totalRecords,
              })
            }
            selectionMode="single"
          >
            <Column field="categoryName" header="Name" sortable></Column>
            <Column header="Action" body={actionBodyTemplate} style={{ width: '5%' }}></Column>
          </DataTable>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default AdUsersPage;
