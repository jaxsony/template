import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="position-fixed bottom-0 w-100 bg-body border-top mt-auto p-3 d-flex flex-wrap gap-1 shadow">
            <span className="me-auto">{currentYear} &copy; Shubham Inc. All rights reserved.<br /></span>
            <small className="text-secondary">Shubham</small>
        </footer>
    )
}
