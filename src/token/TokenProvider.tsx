// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const clientID = "0oao7z1cuz5hxJndL297";
// const clientSecret = "sr-iHJKfHJp8pz079LOjx_mh-EqRAtNHJLyO6L_mfkijG0KQzo9nj2aLEbxMQ4gZ";
// const tokenEndpoint = "https://api.preview.platform.athenahealth.com/oauth2/v1/token";
// const grantType = "client_credentials";
// const scope = "system/AllergyIntolerance.read system/Binary.read system/CarePlan.read system/CareTeam.read system/Condition.read system/Device.read system/DiagnosticReport.read system/DocumentReference.read system/Encounter.read system/Goal.read system/Immunization.read system/Location.read system/Medication.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Patient.read system/Practitioner.read system/PractitionerRole.read system/Procedure.read system/Provenance.read system/ServiceRequest.read";

// const getAccessToken = async () => {
//     const credentials = `${clientID}:${clientSecret}`;
//     const base64EncodedCredentials = btoa(credentials);

//     const params = new URLSearchParams();
//     params.append('grant_type', grantType);
//     params.append('scope', scope);

//     try {
//         const response = await axios.post(tokenEndpoint, params, {
//             headers: {
//                 'Authorization': `Basic ${base64EncodedCredentials}`,
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         });

//         const { access_token } = response.data;
//         console.log('access',access_token);
//         localStorage.setItem('accesstoken',access_token);
//         return `Bearer ${access_token}`;

//     } catch (error) {
//         console.error('Error obtaining access token:', error);
//         throw error;
//     }
// };

// const TokenProvider: React.FC = () => {
//     const [accessToken, setAccessToken] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchAccessToken = async () => {
//             try {
//                 const token = await getAccessToken();
//                 setAccessToken(token);
//             } catch (error) {
//                 console.error('Failed to fetch access token:', error);
//             }
//         };

//         fetchAccessToken();
//         const intervalId = setInterval(fetchAccessToken, 15 * 60 * 1000);

//         return () => clearInterval(intervalId); 
//     }, []);

//     return (
//         <div>
//             <p>Access Token: {accessToken}</p>
//         </div>
//     );
// };

// export default TokenProvider;

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const TokenContext = createContext(null);

const clientID = "0oao7z1cuz5hxJndL297";
const clientSecret = "sr-iHJKfHJp8pz079LOjx_mh-EqRAtNHJLyO6L_mfkijG0KQzo9nj2aLEbxMQ4gZ";
const tokenEndpoint = "https://api.preview.platform.athenahealth.com/oauth2/v1/token";
const grantType = "client_credentials";
const scope = "system/AllergyIntolerance.read system/Binary.read system/CarePlan.read system/CareTeam.read system/Condition.read system/Device.read system/DiagnosticReport.read system/DocumentReference.read system/Encounter.read system/Goal.read system/Immunization.read system/Location.read system/Medication.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Patient.read system/Practitioner.read system/PractitionerRole.read system/Procedure.read system/Provenance.read system/ServiceRequest.read";

const fetchAccessToken = async () => {
    const credentials = `${clientID}:${clientSecret}`;
    const base64EncodedCredentials = btoa(credentials);

    const params = new URLSearchParams();
    params.append('grant_type', grantType);
    params.append('scope', scope);

    try {
        const response = await axios.post(tokenEndpoint, params, {
            headers: {
                'Authorization': `Basic ${base64EncodedCredentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const { access_token } = response.data;
        localStorage.setItem('accesstoken', access_token);
        return `Bearer ${access_token}`;

    } catch (error) {
        console.error('Error obtaining access token:', error);
        throw error;
    }
};

export const TokenProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const updateToken = async () => {
            try {
                const token = await fetchAccessToken();
                setAccessToken(token);
            } catch (error) {
                console.error('Failed to fetch access token:', error);
            }
        };

        updateToken();
        const intervalId = setInterval(updateToken, 14 * 60 * 1000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <TokenContext.Provider value={accessToken}>
            {children}
        </TokenContext.Provider>
    );
};

export const useToken = () => useContext(TokenContext);
