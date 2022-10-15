import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react';
import { Loading, Search } from '~/components';
import { GENDER_ENUM, UPLOAD_STATUS_ENUM } from '~/constants';
import { UserServices } from '~/services';
import { Wrapper } from './styles';

const paddingX = '3rem';

const AdUsersPage = () => {
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState();
  const [pagination, setPagination] = useState();
  const [list, setList] = useState([]);

  const handlePageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      UserServices.getList(
        (data, pagination) => {
          setList(data);
          if (pagination) {
            setPagination(pagination);
          }
          setLoading(false);
        },
        { _by: 'createdDate', _order: '1', pageSize: rows, pageNumber: currentPage }
      );
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rows]);

  const handleDelete = (id) => console.log({ id });

  const profileBodyTemplate = (rowData) => {
    return (
      <Flex align="center" gap="1rem">
        <Avatar
          src={rowData.avatar}
          name={`${rowData.firstName} ${rowData.lastName}`}
          w="3rem"
          h="3rem"
        />
        <Text>{`${rowData.firstName} ${rowData.lastName || ''}`}</Text>
      </Flex>
    );
  };

  const genderBodyTemplate = (rowData) => {
    return <Text>{GENDER_ENUM[rowData.gender]}</Text>;
  };

  const statusBodyTemplate = (rowData) => {
    return <span>{UPLOAD_STATUS_ENUM[rowData.status]}</span>;
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
    <Button
      onClick={(e) => {
        e.stopPropagation();
        handleDelete(rowData.id);
      }}
      border="1px solid rgba(12,24,35,0.12)"
      variant="outline-primary"
    >
      Disabled
    </Button>
  );

  return (
    <Box p={paddingX} h="100%" bg="#F3F7F9" overflow="overlay">
      <Flex justify="space-between" align="center" bg="#fff" p="2rem 3rem">
        <Text textTransform="capitalize" fontSize="2.4rem" fontWeight={600}>
          user list
        </Text>

        <Search />
      </Flex>

      <Box position="relative">
        {loading && <Loading />}
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
            selection={selectedPost}
            onSelectionChange={(e) => setSelectedPost(e.value)}
          >
            <Column
              header="Profile"
              body={profileBodyTemplate}
              sortField="firstName"
              sortable
              style={{ width: '25%' }}
            ></Column>
            <Column field="email" header="Email" sortable></Column>
            <Column field="gender" header="Gender" body={genderBodyTemplate} sortable></Column>
            <Column field="role" header="Role" sortable></Column>
            <Column header="Status" body={statusBodyTemplate} field="status" sortable></Column>
            <Column header="Action" body={actionBodyTemplate} style={{ width: '5%' }}></Column>
          </DataTable>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default AdUsersPage;
