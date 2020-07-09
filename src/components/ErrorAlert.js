import React from 'react'

const ErrorAlert = ({message}) => {
    return ( 
        <p className="alert alert-danger error">
            {message}
        </p>
     );
}
 
export default ErrorAlert;