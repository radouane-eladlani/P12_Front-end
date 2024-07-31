import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './css/index.css'; 
import reportWebVitals from './reportWebVitals';
import EmployeesForm from './components/employeesForm'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import store from './redux/store'; 
import { Provider } from 'react-redux';

// Création du routeur avec les différentes routes
const router = createBrowserRouter([
    { path: "/", element: <EmployeesForm /> },
]);

function renderApp() {
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
        console.error("Root element not found");
        return; 
    }

    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Provider store={store}> 
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
}

// Appel de la fonction renderApp pour rendre l'application
renderApp();

// Mesure des performances de l'application
reportWebVitals();
