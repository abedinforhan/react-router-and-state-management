import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {

    // const [employees, setEmployees]= useState([])

    const [displayEmployees, setDisplayEmployees]=useState([])

    // input box e change receive korar handler

    const handleSearch= (event)=> {
        const  searchValue=event.target.value.toLowerCase()

        const matchedEmployee=    employees.filter(employee=>employee.name.toLowerCase().includes(searchValue))

        setDisplayEmployees(matchedEmployee)

        console.log(matchedEmployee)


    }

    useEffect(() =>{
         fetch('/employeeData.json')
         .then(res=>res.json())
         .then(data=> {
            //  setEmployees(data)
             setDisplayEmployees(data)
            })
    }, [])




    return (
       <Container className="my-5">
            <Form  style={{width: "40%"} }className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
          <h2>{displayEmployees.length}</h2>
            <Table responsive="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Designatiom</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
        
         {/* ekhane amra map kore data load korbo */}

        {
                 displayEmployees.map(employee =>(
                <tr>
                    <td>{employee?.id}</td>
                    <td>Image</td>
                    <td>{employee?.name}</td>
                    <td>{employee?.designation}</td>
                    <td>
                        <NavLink
                           to={ `/employee/${employee?.id}`  }
                           activeStyle={{
                          fontWeight: "bold",
                          color: "red",
                        }}
                        > 
                             Details
                      </NavLink>
                      
                    </td>
                </tr>
            ))
        }
        </tbody>
      </Table>
       </Container>
    );
};

export default Employee;