import * as React from 'react';

export const CareerEmailTemplate=({firstName,lastName,email,country,address,city,region,pin})=>{
    return(
        <div>
            <p>
                <span>Registered Email:</span>
                <strong>{email}</strong></p>
            <p>
           <br/>
                <span>FirstName:</span>
                <strong>{firstName}</strong>
            </p>

            <p>
                <span>LastName:</span>
                <strong>{lastName}</strong>
            </p>


            <p>
                <span>Country:</span>
                <strong>{country}</strong>
            </p>

            <p>
                <span>Address:</span>
                <strong>{address}</strong>
            </p>

            <p>
                <span>City:</span>
                <strong>{city}</strong>
            </p>

            <p>
                <span>State:</span>
                <strong>{region}</strong>
            </p>

            <p>
                <span>Pin:</span>
                <strong>{pin}</strong>
            </p>
            
        </div>
    );
}