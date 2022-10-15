import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  /* scroll-bar */
  .p-datatable-wrapper {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.06);
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
  }

  /* data table */
  .p-column-header-content {
    font-size: 1.6rem;
  }

  .p-datatable {
    table {
      table-layout: fixed;
    }

    .p-sortable-column.p-highlight,
    .p-datatable-thead > tr > th,
    .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover,
    .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
      background: transparent !important;
      color: rgb(22, 24, 35) !important;
    }

    .p-datatable-tbody {
      background: #fff;
    }

    .p-datatable-tbody > tr.p-highlight {
      background: #f8fafb;
      color: rgba(22, 24, 35, 1);
    }

    .p-datatable-tbody > tr.p-selectable-row:focus {
      outline: none;
    }

    .p-datatable-tbody
      > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {
      background: rgba(0, 0, 0, 0.06);
      color: rgba(22, 24, 35, 1);
    }

    .p-sortable-column:focus {
      box-shadow: none;
    }

    .p-sortable-column.p-highlight .p-sortable-column-icon,
    .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
      color: rgba(22, 24, 35, 1);
    }

    .p-datatable-thead > tr > th {
      padding: 1.5rem 3rem;
    }
    .p-datatable-tbody > tr > td {
      padding: 1.5rem 3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 1.4rem;
    }

    .p-datatable-tbody > tr > td,
    .p-datatable-thead > tr > th {
      border: none;
    }
  }

  /* footer */
  .p-datatable-footer {
    background: #fff;
    border: none;
  }
`;
