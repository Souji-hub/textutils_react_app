import React from 'react'

function Alert(props) {
    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    return (
        //if props.alert is not null then run the adjoining code
       props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{toCapitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
