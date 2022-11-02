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
import { requests } from '../../utils/sampledata';
import { TablePagination } from '@mui/material';
import { BiTrash } from 'react-icons/bi'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
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

const Requests = () => {

  const rows = requests
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  useEffect(() => {
    document.title = 'Admin | Requests'
  }, [])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    "Car Name",
    "Customer Name",
    "Status",
    "Price",
    "Start Date",
    "End Date",
    "Actions"
  ]

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full  flex flex-col mt-24 px-12 items-center justify-start'>
        <span className='font-semibold text-2xl font-poppins my-4 mb-8'>All Requests</span>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {
                    columns.map((column, index) => (
                      <StyledTableCell align="" key={index}>{column}</StyledTableCell>
                    ))
                  }

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <StyledTableRow key={row.id + Math.random()}>
                    <StyledTableCell align="">{row.carId}</StyledTableCell>
                    <StyledTableCell align="">{row.customerId}</StyledTableCell>
                    <StyledTableCell align="">{row.status}</StyledTableCell>
                    <StyledTableCell align="">{row.price}</StyledTableCell>
                    <StyledTableCell align="">{row.startDate}</StyledTableCell>
                    <StyledTableCell align="">{row.endDate}</StyledTableCell>
                    <StyledTableCell align="" className='flex items-center justify-center'>
                      <button title="Grant" className='delete p-2 mx-2  hover:rotate-12 rounded-full bg-red-600 text-white'><BiTrash size={20} /></button>
                      <button title="Decline" className='delete p-2 mx-2  hover:rotate-12 rounded-full bg-drive-blue text-white'><BiTrash size={20} /></button>
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

export default Requests