import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = ({ isLoading }: any) => {
    return (
        <div
            className={`align-items-center bg-black bg-opacity-50 d-flex h-100 justify-content-center position-fixed start-0 top-0 w-100 ${isLoading === true ? 'd-block' : 'd-none'}`}>
            <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
