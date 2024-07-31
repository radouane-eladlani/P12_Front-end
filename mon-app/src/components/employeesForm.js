import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/employeesForm.css';
import { addEmployee } from '../redux/reducers/employeesReducer';
import states from '../data/states';

const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const dispatch = useDispatch();

    const handleSave = () => {
        const newEmployee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        };
        dispatch(addEmployee(newEmployee));
    };

    return (
        <>
            <header className="header">
                <div>
                <img src="/hrnet-logo.png" alt="HRnet Logo" className="logo" />
                    <h1>HRnet</h1>
                    <a href="employee-list" className='margin'>View Current Employees</a>
                    </div>
            </header>

            <main className="form-container">
                 <h2 className="form-title">Create Employee</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input
                            type="date"
                            id="date-of-birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <div className="form-group">
                            <label htmlFor="street">Street</label>
                            <input
                                type="text"
                                id="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <select
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="">Select a state</option>
                                {states.map((state) => (
                                    <option key={state.abbreviation} value={state.abbreviation}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="form-group">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                type="number"
                                id="zip-code"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="">Select a department</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Legal">Legal</option>
                        </select>
                    </div>

                    <button type="button" onClick={handleSave}>Save</button>
                </form>
            </main>

            <footer className="footer">
                <p>&copy; 2024 HRnet</p>
            </footer>
        </>
    );
};

export default EmployeeForm;
