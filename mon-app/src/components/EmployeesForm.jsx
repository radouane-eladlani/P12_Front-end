import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/employeesForm.css';
import { addEmployee } from '../redux/reducers/employeesReducer';
import states from '../data/states';
import { Link } from 'react-router-dom';
import Modal from 'librairi_modale';
import ReusableSelect from './Selects';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const [errors, setErrors] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    const dispatch = useDispatch();

    const handleSave = (e) => {
        e.preventDefault(); // Empêche l'envoi du formulaire tant qu'il n'est pas validé

        let validationErrors = {};

        if (!firstName) validationErrors.firstName = "First name is required";
        if (!lastName) validationErrors.lastName = "Last name is required";
        if (!dateOfBirth) validationErrors.dateOfBirth = "Date of birth is required";
        if (!startDate) validationErrors.startDate = "Start date is required";
        if (!street) validationErrors.street = "Street is required";
        if (!city) validationErrors.city = "City is required";
        if (!state) validationErrors.state = "State is required";
        if (!zipCode) validationErrors.zipCode = "Zip code is required";
        if (!department) validationErrors.department = "Department is required";

        setErrors(validationErrors);

        // Si des erreurs sont présentes, on empêche l'envoi du formulaire
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

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

        // Envoie des données à Redux
        dispatch(addEmployee(newEmployee));
        setShowConfirmation(true); // Affiche la modale de confirmation
    };


    const handleCloseConfirmation = () => {
        setShowConfirmation(false); // Ferme la modale
    };

    const departmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];
    const stateOptions = states.map((state) => state.name);

    return (
        <>
            <header className="header">
                <div>
                    <div className="flex-header">
                        <img src="/hrnet-logo.png" alt="HRnet Logo" className="logo" />
                        <h1>HRnet</h1>
                        <Link to="/EmployeeList" className="margin">View Current Employees</Link>
                    </div>
                </div>
            </header>

            <main className="form-container">
                <h2 className="form-title">Create Employee</h2>

                <form>
    {/* Formulaire pour créer un employé */}
    <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            dateFormat="MM/dd/yyyy" // Format des dates
            showPopperArrow={false} // éviter d'avoir une flèche dans la pop-up
            showMonthDropdown
            showYearDropdown
            dropdownMode='select'
            decreaseMonth
            increaseMonth
            required
        />
        {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            showPopperArrow={false}
            showMonthDropdown
            showYearDropdown
            dropdownMode='select'
            decreaseMonth
            increaseMonth
            required
        />
        {errors.startDate && <p className="error-message">{errors.startDate}</p>}
    </div>

    <fieldset>
        <legend>Address</legend>

        <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
                type="text"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
            />
            {errors.street && <p className="error-message">{errors.street}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="state">State</label>
            <ReusableSelect
                options={stateOptions}
                id="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
            />
            {errors.state && <p className="error-message">{errors.state}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input
                type="number"
                id="zip-code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
            />
            {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
        </div>
    </fieldset>

    <div className="form-group">
        <label htmlFor="department">Department</label>
        <ReusableSelect
            options={departmentOptions}
            id="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
        />
        {errors.department && <p className="error-message">{errors.department}</p>}
    </div>

    <button type="submit" onClick={handleSave}>Save</button>
    <Modal isOpen={showConfirmation} onClose={handleCloseConfirmation} title="Employee Created">
        <button onClick={handleCloseConfirmation} className="modal-close">x</button>
    </Modal>
</form>

            </main>

            <footer className="footer">
                <p>&copy; 2024 HRnet</p>
            </footer>
        </>
    );
};

export default EmployeeForm;
