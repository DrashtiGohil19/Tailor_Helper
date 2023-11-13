import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <section className="content">
                <div className="error-page" style={errorPageStyles}>
                    <h2 className="headline text-warning">404</h2>
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may <Link to='/dashboard'>return to dashboard.</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

const errorPageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
};
