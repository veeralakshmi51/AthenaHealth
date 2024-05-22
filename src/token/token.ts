// import { useState, useEffect } from 'react';
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

// const TokenProvider = () => {
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
//         const intervalId = setInterval(fetchAccessToken, 15 * 60 * 1000);// for every 15 mins

//         return () => clearInterval(intervalId); 
//     }, []);

//     return accessToken;
// };

// export default TokenProvider;

import axios from 'axios';

const clientID = "0oao7z1cuz5hxJndL297";
const clientSecret = "sr-iHJKfHJp8pz079LOjx_mh-EqRAtNHJLyO6L_mfkijG0KQzo9nj2aLEbxMQ4gZ";
const tokenEndpoint = "https://api.preview.platform.athenahealth.com/oauth2/v1/token";
const grantType = "client_credentials";
const scope = "system/AllergyIntolerance.read system/Binary.read system/CarePlan.read system/CareTeam.read system/Condition.read system/Device.read system/DiagnosticReport.read system/DocumentReference.read system/Encounter.read system/Goal.read system/Immunization.read system/Location.read system/Medication.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Patient.read system/Practitioner.read system/PractitionerRole.read system/Procedure.read system/Provenance.read system/ServiceRequest.read";

const getAccessToken = async () => {
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

        const { access_token, expires_in } = response.data;
        const expiryTime = new Date().getTime() + expires_in * 1000;

        localStorage.setItem('accesstoken', access_token);
        localStorage.setItem('tokenExpiryTime', expiryTime.toString());

        return access_token;
    } catch (error) {
        console.error('Error obtaining access token:', error);
        throw error;
    }
};

export const fetchAccessToken = async () => {
    const tokenExpiryTime = parseInt(localStorage.getItem('tokenExpiryTime') || '0', 10);
    const currentTime = new Date().getTime();

    if (currentTime >= tokenExpiryTime) {
        return await getAccessToken();
    } else {
        return localStorage.getItem('accesstoken');
    }
};

