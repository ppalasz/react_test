import React from 'react';

function Hour(h)
{
    return(<div>{h}</div>);
}

function Dupa()
{
    return(
        <h1>Dupa {Hour(6)}</h1>
    )
}

export default Dupa