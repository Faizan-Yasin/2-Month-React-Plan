import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store.js'
import { Bounce, ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../app/store.js'
import "../styles/toast.css";

const AppProvider = ({ children }) => {
    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </PersistGate>
                <ToastContainer
                    className="custom-toast-container"
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
            </Provider>
        </div>
    )
}

export default AppProvider
