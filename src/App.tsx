import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.scss';
import AppRoutes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './redux/actions/theme-actions';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components/common/loader';
import { getMasterEnvironment } from './services/common.service';
import { SetSettings } from './redux/actions/settings-actions';
import { refreshTokenAPI } from './helpers/utils';

function App() {
    const [mounted, setMounted] = useState<boolean>(false);
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme)

    /**
   * On load set app mounted and
   * load theme
   */
    useEffect(() => {
        dispatch(setTheme());
        setMounted(true);

        /**
         * This script sets up an interval to call the refreshTokenAPI() function at regular intervals.
         * The interval duration is determined by the REACT_APP_REFRESH_TOKEN_MINUTE environment variable.
         */
        // Calculate the time interval in milliseconds
        const time = 1000 * 60 * Number(process.env.REACT_APP_REFRESH_TOKEN_MINUTE)
        const interval = setInterval(() => {
            refreshTokenAPI();
        }, time)
        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            getConfigs();
        }
    }, [mounted]);

    /**
     * Retrieves configurations and sets them in 
     * the redux store using dispatch.
     * @returns {void}
     */
    const getConfigs = () => {
        getMasterEnvironment().then((res: any) => {
            const { data } = res;
            if (data && Object.keys(res.data).length) {
                dispatch(SetSettings(res.data))
            }
        }, err => {
            console.log(err)
        });
    }

    return (
        <React.Suspense fallback={
            <Loader isLoading={true} />
        }>
            <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
                <AppRoutes />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={theme.theme}
                />
            </BrowserRouter>
        </React.Suspense>
    );
}

export default App;
