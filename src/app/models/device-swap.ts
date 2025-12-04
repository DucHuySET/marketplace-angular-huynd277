import {Api} from './api.model'

export const DEVICE_SWAP: Api={
    id: "device-swap",
    name: "Device Swap",
    status: "Ready",
    description: "Detect SIM transferring to enhance user authentication processes",
    icon: "assets/images/icon/api/device-swap.png",
    version: "v0.3.0",
    tryItFreeLink: '#',
    learnMoreLink: '#',
    overview: {
        definition: {
            title: "definition",
            content: `The standardised Device Location Verification API provides the option of  verifying the geographical location of a given SIM-based device and  validating whether it’s within a requested geographical area without  spoofing or GPS theft.
            \n This solution validates the location of a device to enable services or allow transactions by verifying the location.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `The standardised Device Location Verification  API provides the option of verifying the geographical location of a  given SIM-based device and validating whether it is within a requested  geographical area without spoofing or GPS.
            \n This solution validates the location of a device to enable services or allow transactions by verifying the location.`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "Security in location-dependent transactions",
                    content:`This makes it possible to strengthen the security of a transaction, for example, when a customer makes a payment through a  POS terminal, or performs a transaction at an ATM, by validating that  the user's location is the same as that of the POS terminal or ATM. 
                    In  this way, any location-dependent transactions can be verified to reduce  the risks related to account takeover and other types of identity fraud.
                    \n The digitalisation of transactions  is increasing, however, every digital transaction takes place in a real  physical space. 
                    The Device Location Verification API makes it possible  to connect the two worlds, verifying that a user's device is actually  located where the transaction is taking place.`,
                    image: '#'
                },
                {
                    title: "Fraud prevention in gaming, retail and distribution",
                    content:`Often, gaming, retail or goods distribution companies make launches restricted to a specific region or country.  
                    Fraud detection based on false locations or account spoofing allows  companies to maintain control of their services by validating where  their customers and fleets are located thanks to the integration of the Device Location Verification API.`,
                    image: '#'
                }]
            },
        caseStudies: {
            title: "Case studies",
            content: [
                {
                    title: "Smarter banks",
                    content: `Daycoval is one of the most recognised financial institutions in Brazil, with more than USD 13 billion in assets. 
                    Thanks to Open Gateway, it has begun collaborating with Vivo, Telefonica's carrier in Brazil, to explore the benefits that telco APIs can have in bringing a better user experience to its digital services. 
                    One of the  areas for improvement in the banking applications is the process of  signing up for a new product or opening a new account. 
                    Thanks to the integration of Device Location Verification, Daycoval can ask Vivo to  verify the location of its users to automate steps when performing  different banking operations. 
                    This allows for the development of new, smarter and more efficient fintech services, increasing customer satisfaction.`,
                    image: "#"
                },
                {
                    title: "Drone fleet control",
                    content: `The delivery of parcels by drone requires reliable location control to ensure the location of the devices in real time with maximum security. 
                    Ericsson and Vonage are teaming up to offer developers the ability to integrate Open Gateway solutions to enhance their users experience of Open Gateway applications. 
                    By integrating the  Device Location Verification API, advanced network capabilities can be incorporated to quickly and easily verify a drone's position. 
                    This makes it possible to develop new applications that provide maximum security  in controlling drone fleets.`,
                    image: "#"
                }]
            },
    },
    documentation:{
        introduction: {
            title: 'Introduction',
            content: `With this API, API consumers can retrieve the area where a certain user device is localized. The area provided in the response could be described:
            by a circle determined by coordinates (latitude and longitude) and a radius.
            by a simple polygon delimited by segments connecting consecutively  an array of coordinates (points). The last point connects to the first  point to delimit a closed shape bounded with straight sides.
            The retrieved shape depends on the network conditions at the device's location and any of the supported shapes could be received.
            The requester could optionally ask for a freshness of the localization information by providing a maxAge ("I want a location not older than 600 seconds").
            The result accuracy depends on the network's ability and accuracy to locate the device.
            Additionally to location information, the answer will also provide indication about the location time.
            Location retrieval API could be useful in scenarios such as:
            Fraud protection to ensure a given user is located in the region, country or location authorized for financial transactions
            Verify the GPS coordinates reported by the app on a device to  ensure the GPS was not faked e.g. for content delivery with regional  restrictions
            Contextual-based advertising, to trigger advertising after verifying the device is in the area of interest
            Smart Mobility (Vehicle/bikes renting): obtain the location of a vehicle/bike to guarantee they are rented correctly
            Note: Location is in most jurisdictions considered  to be sensitive data and thereby consent by device owner/user must be  verified before providing it to the developer.`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `Device: A device refers to any physical entity that can connect to a network and participate in network communication.
            Area: It specifies the geographical surface where a device may be physically located.
            Max Age: Maximum age of the location information which is accepted for the location retrieval (in seconds).
            Absence of maxAge means that "any age" is acceptable for the client. In other words, this is like maxAge=infinite. The system will return lastLocationTime in the response. If the system is not able to provide location, an  error 404 with code LOCATION_RETRIEVAL.DEVICE_NOT_FOUND is sent back.
            maxAge=0 means that a fresh calculation is requested by the client. If the system is not able to provide the fresh location, an error 422 with code LOCATION_RETRIEVAL.UNABLE_TO_FULFILL_MAX_AGE is  sent back.
            Last Location Time : Last date and time when the device was localized.`
        },
        functionality: {
            title: "API Functionality",
            content: `The API exposes a single endpoint/operation:
            /retrieve : Retrieve where the device is localized. The operation returns:
            a localization defined either as a circle, with the center specified by the latitude and longitude, and a radius for answer accuracy, or as  polygon defined by the array of points delimiting its boundary.
            a timestamp with the location information freshness.`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `The "Camara Security and Interoperability Profile" provides details  on how a client requests an access token. Please refer to Identify and  Consent Management  (https://github.com/camaraproject/IdentityAndConsentManagement/) for the released version of the Profile.
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
        sandboxSwagger: "#"
    },
    sandbox:{
        sandboxUrl: "#"
    },
    term: {
        terms:{
            title: "Terms List",
            content:[
                {
                    title: "Term 1",
                    content: `This is term 1.`
                },
                {
                    title: "Term 2",
                    content: `This is term 2.`
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