import * as React from 'react';

export const ContactEmailTemplate=({firstName,lastName,email,mobile,jobTitle,company,companyType,interestedIn,location,country,message})=>{
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
                <span>Mobile:</span>
                <strong>{mobile}</strong>
            </p>

            <p>
                <span>JobTitle:</span>
                <strong>{jobTitle}</strong>
            </p>

            <p>
                <span>Company:</span>
                <strong>{company}</strong>
            </p>

            <p>
                <span>CompanyType:</span>
                <strong>{companyType}</strong>
            </p>

            <p>
                <span>Interested In:</span>
                <strong>{interestedIn}</strong>
            </p>

            <p>
                <span>Location:</span>
                <strong>{location}</strong>
            </p>

            <p>
                <span>Country:</span>
                <strong>{country}</strong>
            </p>
            
            <p>
                <span>Message :</span>
                <strong>{message}</strong>
            </p>
            
        </div>
    );
}