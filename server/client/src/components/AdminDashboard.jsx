import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdLibraryAdd, MdLogout } from 'react-icons/md'
import { toast } from 'react-toastify'
import UserModel from './UserModel'
import { useNavigate } from "react-router-dom"

function AdminDashboard() {
    const [users, setUsers] = useState([])
    const [userModel, setUserModel] = useState(false)
    const navigate = useNavigate()
    const allUsersData = () => {
        axios.get("/allusers")
            .then((res) => {
                setUsers(res.data.users)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        allUsersData()
    }, [])

    const handleCheckboxChange = async (email, isChecked) => {
        axios.post("/logout", {
            email: email,
            isLoggedIn: isChecked
        })
            .then((res) => {
                toast.success(res.data.user.isLoggedIn === true ? "User status updated to log in" : "User status updated to log out", {
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                })
                allUsersData()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Admin Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="mr-3">
                                    <button className="btn btn-primary" onClick={() => setUserModel(true)}>
                                        <MdLibraryAdd /> Add User
                                    </button>
                                </li>
                                <li className="mr-3">
                                    <button className="btn btn-primary" onClick={() => handleLogOut()}>
                                        <MdLogout /> Log Out
                                    </button>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">List of All Users</h3>
                                </div>
                                <div className="card-body table-responsive">
                                    <table className="table table-bordered table-hover text-center responsive">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Shop Name</th>
                                                <th>Log In</th>
                                                <th>Log Out</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.map((item, i) => (

                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td className='text-capitalize'>{item.email}</td>
                                                    <td className='text-capitalize'>{item.shopName}</td>
                                                    <td><input type="checkbox" checked={item.isLoggedIn === true ? true : false} onChange={() => handleCheckboxChange(item.email, true)} /></td>
                                                    <td><input type="checkbox" checked={item.isLoggedIn === false ? true : false} onChange={() => handleCheckboxChange(item.email, false)} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {userModel && <UserModel showModel={userModel} closeModal={() => setUserModel(false)} />}
        </div>
    )
}

export default AdminDashboard
