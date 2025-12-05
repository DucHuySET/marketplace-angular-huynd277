import {Api} from './api.model'

export const DEVICE_REACHABILITY_STATUS_API: Api={
    id: "device-reachability-status",
    name: "Device Reachability Status",
    status: "Ready",
    description: "Provide SMS and data connectivity status of an user",
    icon: "assets/images/icon/api/device-reach.png",
    version: "v0.3.0",
    tryItFreeLink: '#',
    learnMoreLink: '#',
    overview: {
        definition: {
            title: "Definition",
            content: `The “Device Reachability Status” API allows API consumers to query the connectivity status of a device on a mobile network. The API reveals whether the device is reachable via SMS, data (mobile internet), or both, enabling better communication or service management decisions based on real-time device availability.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `API consumer is able to verify whether a certain user device is reachable from the network via data- or sms-usage.`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "Emergency Services",
                    content:`An emergency application queries the reachability status of a critical response team member. If the device is reachable via SMS, the system triggers an SMS alert, ensuring that the responder receives the message despite possible data connectivity issues.`,
                    image: 'assets/images/device-rechability-status/emergency.jpg'
                },
                {
                    title: "Customer Support Platforms",
                    content:`A customer support platform checks the reachability of customers through SMS before attempting to send a message or support ticket. If the device is reachable via SMS but not data, they ensure that only SMS-based communication is attempted.`,
                    image: 'assets/images/device-rechability-status/support.svg'
                },
                {
                    title: "IoT Devices",
                    content:`A fleet management system queries the reachability status of IoT devices in vehicles. If a device is reachable via data, the system can proceed with real-time monitoring. If it’s reachable only via SMS, the system may reduce the frequency of data updates or switch to less data-intensive communication methods.`,
                    image: 'assets/images/device-rechability-status/iot.svg'
                }
            ]
            },
        caseStudies: {
            title: "Case studies",
            content: [
                // {
                //     title: "Smarter banks",
                //     content: `Daycoval is one of the most recognised financial institutions in Brazil, with more than USD 13 billion in assets. 
                //     Thanks to Open Gateway, it has begun collaborating with Vivo, Telefonica's carrier in Brazil, to explore the benefits that telco APIs can have in bringing a better user experience to its digital services. 
                //     One of the  areas for improvement in the banking applications is the process of  signing up for a new product or opening a new account. 
                //     Thanks to the integration of Device Location Verification, Daycoval can ask Vivo to  verify the location of its users to automate steps when performing  different banking operations. 
                //     This allows for the development of new, smarter and more efficient fintech services, increasing customer satisfaction.`,
                //     image: "#"
                // },
                // {
                //     title: "Drone fleet control",
                //     content: `The delivery of parcels by drone requires reliable location control to ensure the location of the devices in real time with maximum security. 
                //     Ericsson and Vonage are teaming up to offer developers the ability to integrate Open Gateway solutions to enhance their users experience of Open Gateway applications. 
                //     By integrating the  Device Location Verification API, advanced network capabilities can be incorporated to quickly and easily verify a drone's position. 
                //     This makes it possible to develop new applications that provide maximum security  in controlling drone fleets.`,
                //     image: "#"
                // }
            ]
            },
    },
    documentation:{
        introduction: {
            title: 'Introduction',
            content: `The “Device Reachability Status” API allows API consumers to query the connectivity status of a device on a mobile network. The API reveals whether the device is reachable via SMS, data (mobile internet), or both, enabling better communication or service management decisions based on real-time device availability.`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `- <b>Device:</b> A device refers to any physical entity that can connect to a network and participate in network communication.
<br>
At least one identifier for the device (user equipment) out of four options must be provided: IPv4 address, IPv6 address, Phone number, or Network Access Identifier assigned by the mobile network operator for the device. Where more than one device identifier is provided, only one identifier will be selected by the implementation and this choice indicated to the API consumer in the session creation response.
<br>
Note: Network Access Identifier is defined for future use and will not be supported with this version of the API.
<br>
- <b>Reachable:</b> Indicates, if the device is reachable from the network or not.
<br>
- <b>Connectivity:</b> Indicates the connectivity types (DATA, SMS or both) through which the device is reachable from the network.
<br>
- <b>LastStatusTime:</b> The time when the status was last confirmed to be correct. An older status is more likely to now be incorrect.`
        },
        functionality: {
            title: "API Functionality",
            content: `The API exposes following capabilities:
<br>
<b>Device Reachability situation</b>
<br>
The endpoint POST /retrieve allows to get current connectivity status information synchronously.`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `The "Camara Security and Interoperability Profile" provides details of how an API consumer requests an access token. Please refer to Identity and Consent Management (https://github.com/camaraproject/IdentityAndConsentManagement/) for the released version of the profile.
<br>
The specific authorization flows to be used will be agreed upon during the onboarding process, happening between the API consumer and the API provider, taking into account the declared purpose for accessing the API, whilst also being subject to the prevailing legal framework dictated by local legislation.
<br>
In cases where personal data is processed by the API and users can exercise their rights through mechanisms such as opt-in and/or opt-out, the use of three-legged access tokens is mandatory. This ensures that the API remains in compliance with privacy regulations, upholding the principles of transparency and user-centric privacy-by-design.`
        },
        indentify: {
            title: "Identifying a device from the access token",
            content: `This specification defines the device object field as  optional in API requests, specifically in cases where the API is  accessed using a 3-legged access token, and the device can be uniquely  identified by the token. This approach simplifies API usage for API  consumers by relying on the device information associated with the  access token used to invoke the API.
            Handling of device information:
            Optional device object for 3-legged tokens:
            When using a 3-legged access token, the device associated with the  access token must be considered as the device for the API request. This  means that the device object is not required in the request, and if  included it must identify the same device, therefore it is recommended NOT to include it in these scenarios to simplify the API usage and avoid additional validations.
            Validation mechanism:
            The server will extract the device identification from the access token, if available.
            If the API request additionally includes a device  object when using a 3-legged access token, the API will validate that  the device identifier provided matches the one associated with the  access token.
            If there is a mismatch, the API will respond with a 403 -  INVALID_TOKEN_CONTEXT error, indicating that the device information in  the request does not match the token.
            Error handling for unidentifiable devices:
            If the device object is not included in the request and the device information cannot be derived from the 3-legged access  token, the server will return a 422 UNIDENTIFIABLE_DEVICE error.
            Restrictions for tokens without an associated authenticated identifier:
            For scenarios which do not have a single device identifier  associated to the token during the authentication flow, e.g. 2-legged  access tokens, the device object MUST be provided in the  API request. This ensures that the device identification is explicit and valid for each API call made with these tokens.`
        },
        sandboxSwagger: "#"
    },
    sandbox:{
        sandboxUrl: "#"
    },
    term: {
        terms:{
            title: "Terms List",
            content:[
                // {
                //     title: "Term 1",
                //     content: `This is term 1.`
                // },
                // {
                //     title: "Term 2",
                //     content: `This is term 2.`
                // }
            ]
        },
        generalTerm:{
            title: "General Terms and Condition",
            content: "By using this API, you also agree with our General Terms and Condition."
        }
    },
    contact: '#'
}