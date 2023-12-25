import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import {useLoaderData} from 'react-router-dom'
// ----------------------------------------------------------------------

export default function UserPage() {
  const {Interns} = useLoaderData();

  console.log(Interns);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    
    if (event.target.checked) {
      const newSelecteds = Interns.map((n) => n.internName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: Interns,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Quản lý sinh viên</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Thêm sinh viên
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}internName
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={Interns.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: ' ' },
                  { id: 'internId', label: 'Mã sinh viên' },
                  { id: 'internName', label: 'Tên sinh viên' },
                  { id: 'classOfIntern', label: 'Lớp' },
                  { id: 'dateOfBirth', label: 'Ngày sinh' },
                  { id: 'phone', label: 'Điện thoại' },
                  { id: 'email', label: 'Email' },
                  { id: 'status', label: 'Trạng thái' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      // key={row.id}
                      // name={row.name}
                      // role={row.role}
                      // status={row.status}
                      // company={row.company}
                      // avatarUrl={row.avatarUrl}
                      // isVerified={row.isVerified}
                      // selected={selected.indexOf(row.name) !== -1}
                      // handleClick={(event) => handleClick(event, row.name)}
                      key={row.internId}
                      internId={row.internId}
                      internName={row.internName}
                      classOfIntern={row.classOfIntern}
                      email={row.email}
                      status={row.status}
                      phone={row.phone}
                      avatarUrl={row.avatarUrl}
                      dateOfBirth={row.dateOfBirth}
                      selected={selected.indexOf(row.internName) !== -1}
                      handleClick={(event) => handleClick(event, row.internName)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, Interns.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={Interns.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  );
}
