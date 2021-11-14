import React from "react";

function RefreshButton(){
    function clickHandler(){
       window.location.reload(false);
    }
    return(
        <div>
        <button onClick={clickHandler}>Pull Up Random People</button>
        </div>
    )
}

export default RefreshButton