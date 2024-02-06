"use client";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as yup from "yup";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const schema = yup.object({
  name: yup.string().required("Please Enter Name!"),
  email: yup.string().email().required("Please Enter Email!"),
}).required();

export default function UserDetails({ IsAddFalse, rows }) {
  const [utype, setUtype] = useState('User');

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (rows) {
      console.log('rows ', rows);
      setUtype(rows.type);
      reset({
        id: rows.id,
        name: rows.name,
        email: rows.email,
      });
    } else {
      setUtype('User');
      reset({
        name: '',
        email: '',
      });
    }
  }, [rows])


  const onSubmit = (data) => {
    Object.assign(data, { type: utype });

    if (rows) {
      axios.put('/api/users', JSON.stringify(data))
        .then(response => {
          toast.success('Data added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          IsAddFalse();
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
    } else {
      axios.post('/api/users', JSON.stringify(data))
        .then(response => {
          toast.success('Data added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          IsAddFalse();
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



  };

  const handleTypeChange = (event) => {
    setUtype(event.target.value);
  };


  return (
    <>
      <div className="flex justify-start">
        <ArrowBackIcon className="mr-2 cursor-pointer" onClick={() => IsAddFalse()} />
        <h2 className="font-bold mb-4">Add User</h2>
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-12 gap-4">
            <div>
              <TextField size="small" fullWidth label="Name" {...register("name")} variant="outlined" />
              <p className="text-orange-600 text-xs ml-1">{errors.name?.message}</p>
            </div>
            <div>
              <TextField size="small" fullWidth label="Email" {...register("email")} variant="outlined" />
              <p className="text-orange-600 text-xs ml-1">{errors.email?.message}</p>
            </div>
            <div>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={utype}
                  label="Type"
                  size="small"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </FormControl>
              <p>{errors.firstName?.message}</p>
            </div>
          </div>
          <div className="justify-end flex mt-2 mr-1">
            <Button variant="outlined" type="submit" className="mb-3">
              Save
            </Button>
          </div>
        </div>
      </form>

    </>
  )
}
