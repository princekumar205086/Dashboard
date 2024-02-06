import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDetails from "./userDetails";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function usersList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [alldata, setAllData] = useState([]);
    const [rows, setRows] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const IsAddFalse = () => setIsAdd(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        searchData(searchQuery);
    }, [searchQuery]);

    const searchData = (searchQuery) => {
        let filteredData = data;
        if (searchQuery) {
            filteredData = data.filter((usr) =>
                usr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                usr.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                usr.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setData(filteredData);
        } else {
            setData(alldata);
        }
    }

    useEffect(() => {
        getData();
    }, [isAdd]);


    const getData = () => {
        axios.get('/api/users')
            .then(response => {
                setData(response.data);
                setAllData(response.data);
                setLoading(true);
            })
            .catch(err => {
                console.log('Error ', err);
            })

    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const dateFormatter = (dateTimeString) => {
        const parsedDate = new Date(dateTimeString);
        return format(parsedDate, "MMMM d, yyyy h:mm a");
    }

    const editRecord = (row) => {
        setRows(row);
        setIsAdd(true);
    }

    const addRecord = (row) => {
        setRows(null);
        setIsAdd(true);
    }

    const deleteRecord = (row) => {
        console.log('row ', row);
        let id = row.id;

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do delte this record?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteRow(id)
                },
                {
                    label: 'No',
                }
            ]
        });

    }

    const deleteRow = (id) => {
        let data = JSON.stringify({
            "id": id
        });

        let config = {
            method: 'delete',
            url: '/api/users',
            data: data
        };

        axios.request(config)
            .then(response => {
                toast.success('Data deleted!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getData();
            })
            .catch(err => {
                console.log('Error ', err);
                toast.error(err, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    return (
        <>
            <ToastContainer />
            {isAdd ? <>
                <UserDetails IsAddFalse={IsAddFalse} rows={rows} />
            </> : <>
                {loading && (
                    <>
                        <h2 className="font-bold mb-4">Users</h2>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search users"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="mb-2 px-2 py-1 border rounded"
                                />
                            </div>
                            <Button variant="outlined" endIcon={<AddCircleIcon />} className="mb-3" onClick={() => addRecord()}>
                                Add
                            </Button>
                        </div>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 500 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                align="right"
                                                style={{ minWidth: 70 }}
                                            >
                                                Id
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ minWidth: 170 }}
                                            >
                                                Name
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ minWidth: 170 }}
                                            >
                                                Email
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ minWidth: 170 }}
                                            >
                                                Type
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ minWidth: 170 }}
                                            >
                                                Created At
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                style={{ minWidth: 170 }}
                                            >
                                                Action
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                        <TableCell key={row.id} align="right">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell key={row.name} align="right">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell key={row.email} align="right">
                                                            {row.email}
                                                        </TableCell>
                                                        <TableCell key={row.type} align="right">
                                                            {row.type}
                                                        </TableCell>
                                                        <TableCell key={row.created_at} align="right">
                                                            {dateFormatter(row.created_at)}
                                                        </TableCell>
                                                        <TableCell key={Math.random()} align="center">
                                                            <div className="flex justify-center">
                                                                <div className="text-green-700 cursor-pointer mr-2" onClick={() => editRecord(row)}>
                                                                    <EditIcon />
                                                                </div>
                                                                <div className="text-orange-700 cursor-pointer" onClick={() => deleteRecord(row)}>
                                                                    <DeleteIcon />
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </>

                )}
            </>}
        </>

    );
}
