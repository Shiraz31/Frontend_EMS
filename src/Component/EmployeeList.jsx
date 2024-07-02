import React, { useState, useEffect } from "react";
import getUrl from "./EmployeeService";
import axios from "axios";


 
const EmployeeListComponent = () => 
    {
        
    const[employees,setEmployees]=useState([])

    useEffect(()=>{
        getUrl()
        .then((response)=>{
            setEmployees(response.data);
           
        }).catch(error=>{
            console.error(error);

    })



    

    })

    const handleDelete =(employees)=>{
        console.log("hiii")
        axios.delete('http://localhost:8080/emp/'+ employees.empId  )
        .then(()=>{
            getUrl
            console.log('delete')
        })
        .catch(()=>{})
    }
        
        return (
        <div>
            <div className="container">
                <h1 className="d-flex mb-5 mt-5 justify-content-center">List of All Employees</h1>
                <div className=""><button className="btn btn-success mb-5 ">Add New Employee</button></div>
                <table className="container table-bordered text-center" >
                    <thead>
                        <tr>
                            <th scope = "col">SR Number</th>
                            <th scope = "col">Name</th>
                            <th scope = "col">Address</th>
                            <th scope = "col">Salary</th>
                            <th scope = "col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {

                        employees.map((employee,index)=>
                            
                            <tr>
                            <td>{index+1}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empAddress}</td>
                                <td>{employee.empSalary}</td>
                                <td><button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={()=>{handleDelete}} >Delete</button></td>
                            </tr>
                        )




                        
                            
                    }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
    export default EmployeeListComponent;