import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { customers } from '../../utils/sampledata';
import { TablePagination } from '@mui/material';
import { BiTrash } from 'react-icons/bi'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Customers = () => {

  const rows = customers
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    'Profile',
    'Names',
    'Email',
    'Phone',
    'Address',
    'Action'
  ]

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full  flex flex-col mt-24 px-12 items-center justify-start'>
        <span className='font-semibold text-2xl font-poppins my-4 mb-8'>All Customers</span>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Profile</StyledTableCell>
                  <StyledTableCell align="right">Names</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Telephone</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <StyledTableRow key={row.id + Math.random()}>
                    <StyledTableCell component="th" scope="row">
                      <img src={row.profile} className="w-10 h-10 rounded-full object-cover" alt="" />
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.names}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                    <StyledTableCell align="right">{row.address}</StyledTableCell>
                    <StyledTableCell align="right" className='flex items-center justify-center'>
                      <button title="Delete" className='delete p-2 hover:rotate-12 rounded-full bg-red-600 text-white'><BiTrash size={20} /></button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  )
}

export default Customers