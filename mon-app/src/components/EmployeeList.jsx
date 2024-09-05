import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import '../css/employeeList.css';


const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    const  [search, setSearch] = useState('');

    const filteredEmployees = employees.filter((employee) => {
        return employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
            employee.startDate.toLowerCase().includes(search.toLowerCase()) ||
            employee.department.toLowerCase().includes(search.toLowerCase()) ||
            employee.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
            employee.street.toLowerCase().includes(search.toLowerCase()) ||
            employee.city.toLowerCase().includes(search.toLowerCase()) ||
            employee.state.toLowerCase().includes(search.toLowerCase()) ||
            employee.zipCode.toLowerCase().includes(search.toLowerCase());
    });
    
    const columns = [
        {
            name: 'First Name',
            selector: (row) => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.lastName,
            sortable: true,
        },
        {
            name: 'Start Date',
            selector: (row) => row.startDate,
            sortable: true,
        },
        {
            name: 'Department',
            selector: (row) => row.department,
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: (row) => row.dateOfBirth,
            sortable: true,
        },
        {
            name: 'Street',
            selector: (row) => row.street,
            sortable: true,
        },
        {
            name: 'City',
            selector: (row) => row.city,
            sortable: true,
        },
        {
            name: 'State',
            selector: (row) => row.state,
            sortable: true,
        },
        {
            name: 'Zip Code',
            selector: (row) => row.zipCode,
            sortable: true,
        },
    ];

    return (
        <div className="employee-list-container">
            <h1>Current Employees</h1>
            <input className="search-input" type="text" placeholder="Search..." 
            value={search} onChange={(e) => setSearch(e.target.value)} />
            <DataTable
                columns={columns}
                data={filteredEmployees}
                highlightOnHover
                defaultSortField="First Name"
                pagination
            />
            <div className="home-link-container">
                <Link to="/" className="home-link">Home</Link>
            </div>
        </div>
    );
};

export default EmployeeList;
