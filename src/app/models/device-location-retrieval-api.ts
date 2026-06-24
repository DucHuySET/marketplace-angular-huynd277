import {Api} from './api.model'

export const DEVICE_LOCATION_RETRIEVAL_API: Api={
    id: "device-location-retrieval",
    name: "Device Location Retrieval",
    status: "Ready",
    description: "Provides the location of a mobile line as detected by the MNO",
    icon: "assets/images/icon/api/device-location.png",
    version: "v0.5.0",
    tryItFreeLink: '#',
    learnMoreLink: '#',
    overview: {
        definition: {
            title: "Definition",
            content: `The CAMARA Device Location Retrieval API enables API consumers to retrieve the geographical area where a mobile device is located, based on information detected by the mobile network operator.
      
The location may be returned as a circle, defined by latitude, longitude and radius, or as a polygon made of multiple coordinates. The returned shape and accuracy depend on network conditions and the mobile network's capability to locate the device.

This API helps applications obtain trusted network-based location information, including the time when the device was last localized.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `The Device Location Retrieval API can be used to obtain the approximate location area of a SIM-based mobile device using mobile network information.

It is useful for services that need network-verified location context, such as fraud prevention, regional content access, contextual services, smart mobility, fleet operations, and location-aware customer experiences.

Because location data is sensitive personal information in many jurisdictions, user consent and applicable privacy requirements must be handled before location information is provided.`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "Fraud protection for digital transactions",
                    content:`Financial services can use network-based location retrieval to help determine whether a user device is located in an expected region, country or service area during a transaction.

                            This can support fraud detection by comparing the device's network-provided location with transaction context, login region, merchant location or risk rules. It helps reduce risks related to account takeover, suspicious access and unauthorized transactions.`,
                    image: 'assets/images/device-location-retrieval/usecase1.jpg'
                },
                {
                    title: "Regional access and content protection",
                    content:`Digital services can use Device Location Retrieval to support regional access control and content delivery rules.

For example, an application may compare GPS coordinates reported by the device with location information retrieved from the mobile network. This helps detect potentially spoofed GPS data and supports services with country, region or licensing restrictions.`,
                    image: 'assets/images/device-location-retrieval/usecase2.jpg'
                }]
            },
        // caseStudies: {
        //     title: "Case studies",
        //     content: [
        //         {
        //             title: "Smarter banks",
        //             content: `Daycoval is one of the most recognised financial institutions in Brazil, with more than USD 13 billion in assets. 
        //             Thanks to Open Gateway, it has begun collaborating with Vivo, Telefonica's carrier in Brazil, to explore the benefits that telco APIs can have in bringing a better user experience to its digital services. 
        //             One of the  areas for improvement in the banking applications is the process of  signing up for a new product or opening a new account. 
        //             Thanks to the integration of Device Location Verification, Daycoval can ask Vivo to  verify the location of its users to automate steps when performing  different banking operations. 
        //             This allows for the development of new, smarter and more efficient fintech services, increasing customer satisfaction.`,
        //             image: "assets/images/device-location/casestudy1.png"
        //         },
        //         {
        //             title: "Drone fleet control",
        //             content: `The delivery of parcels by drone requires reliable location control to ensure the location of the devices in real time with maximum security. 
        //             Ericsson and Vonage are teaming up to offer developers the ability to integrate Open Gateway solutions to enhance their users experience of Open Gateway applications. 
        //             By integrating the  Device Location Verification API, advanced network capabilities can be incorporated to quickly and easily verify a drone's position. 
        //             This makes it possible to develop new applications that provide maximum security  in controlling drone fleets.`,
        //             image: "assets/images/device-location/casestudy2.jpg"
        //         }]
        //     },
    },
    documentation:{
        introduction: {
            title: 'Introduction',
            content: `With this API, API consumers can retrieve the area where a certain user device is localized. The area provided in the response could be described:
      
- by a circle determined by coordinates, latitude and longitude, and a radius.
- by a simple polygon delimited by segments connecting consecutive coordinates. The last point connects to the first point to create a closed shape.

The retrieved shape depends on the network conditions at the device's location and the supported shapes available from the network.

The requester can optionally ask for a freshness requirement by providing maxAge, for example: "I want a location not older than 600 seconds".

The result accuracy depends on the network's ability and accuracy to locate the device. In addition to the location information, the response also provides an indication of the location time.

Location Retrieval can be useful for fraud protection, GPS spoofing detection, regional content control, contextual advertising, smart mobility and fleet-related scenarios.

Note: Location is considered sensitive data in many jurisdictions. Consent by the device owner or user must be verified before providing this information to the developer.`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `Device: A physical entity that can connect to a network and participate in network communication.
<br>
Area: The geographical surface where a device may be physically located.
<br>
Max Age: The maximum age, in seconds, of the location information accepted for location retrieval.
<br>
Absence of maxAge means that any age is acceptable for the client. In this case, the system returns lastLocationTime in the response.
<br>
maxAge=0 means that a fresh location calculation is requested by the client.
<br>
Last Location Time: The last date and time when the device was localized.`
        },
        functionality: {
            title: "API Functionality",
            content: `The API exposes a single endpoint/operation:
            <br>
            /retrieve : Retrieve where the device is localized. The operation returns:
            a localization defined either as a circle, with the center specified by the latitude and longitude, and a radius for answer accuracy, or as  polygon defined by the array of points delimiting its boundary.
            a timestamp with the location information freshness.`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `The "Camara Security and Interoperability Profile" provides details  on how a client requests an access token. Please refer to Identify and  Consent Management for the released version of the Profile.
            Which specific authorization flows are to be used will be determined  during onboarding process, happening between the API Client and the API  Provider, taking into account the declared purpose for accessing the  API, while also being subject to the prevailing legal framework dictated by local legislation.
            It is important to remark that in cases where personal user data is  processed by the API, and users can exercise their rights through  mechanisms such as opt-in and/or opt-out, the use of 3-legged access  tokens becomes mandatory. This measure ensures that the API remains in  strict compliance with user privacy preferences and regulatory  obligations, upholding the principles of transparency and user-centric  data control.`
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
        sandboxSwagger: "/assets/images/device-location-retrieval/openapi.json"
    },
    sandbox:{
        sandboxUrl:"#"
    },
    term: {
        terms:{
            title: "Terms List",
            content:[
                {
                    title: "Term 1",
                    content: `Users must ensure that any data submitted through this API complies with applicable laws and regulations. 
                    Unauthorized or malicious use of the API is strictly prohibited.`
                },
                {
                    title: "Term 2",
                    content: `Access to this API is provided on an "as-is" basis. 
                    The provider is not responsible for any data loss, service disruption, or unintended consequences resulting from its use.`
                }
            ]
        },
        generalTerm:{
            title: "General Terms and Condition",
            content: "By using this API, you also agree with our General Terms and Condition."
        }
    },
    contact: '#'
}