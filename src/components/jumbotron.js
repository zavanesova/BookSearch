import React from "react";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
          {children}
        </div>
    )
}

export default Jumbotron;