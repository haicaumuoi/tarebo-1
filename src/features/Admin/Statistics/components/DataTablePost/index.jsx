import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { Loading } from '~/components';
import { PostServices } from '~/services';
import DetailModal from './components/Detail';
import { Wrapper } from './styles';
import { actionBodyTemplate, dataTableFooterTemplate, postBodyTemplate } from './templates';

const DataTablePost = ({ paddingX }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [popularPosts, setPopularPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  const [pagination, setPagination] = useState();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const handleActions = () => console.log('click');

  const handlePageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      PostServices.getList(
        (data, pagination) => {
          setPopularPosts(data);
          if (pagination) {
            setPagination(pagination);
          }
          setLoading(false);
        },
        { _by: 'like', _order: '-1', pageSize: rows, pageNumber: currentPage }
      );
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rows]);

  console.log({ selectedPost });

  return (
    <Flex
      direction="column"
      mt="2rem"
      border="1px solid rgba(22,24,35,0.12)"
      borderRadius="8px"
      position="relative"
    >
      {loading && <Loading />}

      {isOpen && (
        <DetailModal
          title={selectedPost.title}
          content={selectedPost.content}
          authorName={selectedPost.authorName}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

      <Text className="text" fontSize="1.8rem" p={`1.5rem ${paddingX}`}>
        Popular posts
      </Text>

      <Wrapper>
        <DataTable
          value={popularPosts}
          responsiveLayout="scroll"
          size="large"
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
          onSelectionChange={(e) => {
            setSelectedPost(e.value);
            onOpen();
          }}
        >
          <Column
            field="title"
            header="Post"
            body={postBodyTemplate}
            sortable
            style={{ width: '40%' }}
          ></Column>
          <Column field="like" header="Like" sortable style={{ width: '10%' }}></Column>
          <Column field="authorName" header="Author" sortable style={{ width: '15%' }}></Column>
          <Column field="categoryName" header="Category" sortable style={{ width: '15%' }}></Column>
          <Column
            header="Action"
            body={(rowData) => actionBodyTemplate(rowData, handleActions)}
            style={{ width: '5%' }}
          ></Column>
        </DataTable>
      </Wrapper>
    </Flex>
  );
};

export default DataTablePost;
