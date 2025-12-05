import {Api} from './api.model'

export const NUMBER_VERIFICATION_API: Api={
    id: "number-verification",
    name: "Number Verification",
    status: "Ready",
    description: "Verify phone numbers to enhance user authentication processes",
    icon: "assets/images/icon/api/number-verification.png",
    version: "v0.3.0",
    tryItFreeLink: '#',
    learnMoreLink: '#',
    overview: {
        definition: {
            title: "Definition",
            content: `The “Number Verification” API is a service that enables businesses to seamlessly confirm the ownership of a mobile phone number and retrieve the number directly from the user’s device.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `This API ensures that the phone number provided or obtained matches the one associated with the user’s device, enabling secure and reliable authentication. This API eliminates the need for manual inputs, such as SMS codes, simplifying processes like account creation, login, or transaction validation. It offers a practical solution for industries requiring accurate phone number verification and retrieval, enhancing both user experience, fraud prevention and operational efficiency.`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "App onboarding (banking app, social media, ride share, mobile wallet, …)",
                    content:`One Time Password SMS is widely used to prove that the user is in possession of the mobile device associated with the mobile number used for registration. However it adds friction to the user journey. The application can instead request a seamless authentication of the mobile device via the Number Verification API.`,
                    image: 'assets/images/number-verification/app_onboarding.png'
                },
                {
                    title: "App login",
                    content:`In place of username/password, the application can request seamless authentication of the mobile device.`,
                    image: 'assets/images/number-verification/app_lo_gin.png' //WAF - cloudrity block file name contain login
                },
                {
                    title: "Application password reset",
                    content:`The user journey often relies on One Time Password SMS. As in the app onboarding use case, the application can instead request a seamless authentication of the mobile device via the Number Verification API.`,
                    image: 'assets/images/number-verification/res_et_pass.png'
                }
            ]
            },
        // caseStudies: {
        //     title: "Case studies",
        //     content: [
        //         {
        //             title: "Second-hand fashion with the latest in security",
        //             content: `Vinted is a second-hand fashion e-commerce that allows its users to sell, buy and exchange items that they no longer use in order to give them a second life. Online sales of these products are growing exponentially thanks to the comfort and flexibility offered to users. However, companies are becoming exposed to new risks, including digital fraud and loss of user trust. With the integration of the Number Verification API, Vinted can add an additional layer of security to its registration processes to reduce the risks to its customers. This tool also simplifies the identification process, making the consumer experience more convenient and straightforward.`,
        //             image: "#"
        //         },
        //         {
        //             title: "Drone fleet control",
        //             content: `The delivery of parcels by drone requires reliable location control to ensure the location of the devices in real time with maximum security. 
        //             Ericsson and Vonage are teaming up to offer developers the ability to integrate Open Gateway solutions to enhance their users experience of Open Gateway applications. 
        //             By integrating the  Device Location Verification API, advanced network capabilities can be incorporated to quickly and easily verify a drone's position. 
        //             This makes it possible to develop new applications that provide maximum security  in controlling drone fleets.`,
        //             image: "#"
        //         }]
        //     },
    },
    documentation:{
        introduction: {
            title: 'Introduction',
            content: `The Number Verification API is used by the API consumer to perform real-time checks to verify the phone number of a mobile device being used to access the application. This check can be done either by the API provider, returning "true" or "false", or by the application, by matching the phone number returned by the API Provider with the phone number of the device that is being used.<br>
            <br>
            It uses silent authentication (Network-based authentication or SIM-Based authentication) to verify possession of a phone number in the background without requiring user interaction. There are neither one-time passwords (OTP) received by SMS nor authenticator app downloads, so it is much simpler. It can be used at sign up, login, or transaction time to validate that a user's SIM is not spoofed or cloned.`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `- Network-Based Authentication: Authentication mechanism based on the identification of the mobile phone. A network operator knows to which subscriber a connected mobile phone belongs and what its associated phone number is.<br>
            - SIM-Based Authentication: Authentication mechanism based on the identification of the subscriber's SIM installed in the user's device. This mechanism relies on temporary tokens provided by the operator, as defined by GSMA TS.43 and GSMA ASAC.`
        },
        functionality: {
            title: "API Functionality",
            content: `This API enables an API Consumer to verify or retrieve the phone number of the mobile device being used to access their service.`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `<b>Authentication Request with a temporary token</b> <br>
            If the API Consumer has a TS.43 temporary token created on the mobile device then this API works over all connections e.g. WiFi taking advantage of the SIM-Based authentication. The API Consumer sends the temporary token to their backend which sends a CIBA Authentication Request, as described in the current release CAMARA APIs Access and User Consent Management, with a parameter "login_hint=operatortoken:". How the API Consumers get a TS.43 temporary token and how this token is sent to their backend, is out-of-scope of the API definition.<br>
            <br>
            <b>Authentication Request without a temporary token</b><br>
            If the API Consumer does not have a TS.43 temporary token then the API Consumer must use OpenId Connect Authorization Code Flow as described in the current release of CAMARA APIs Access and User Consent Management. For this method of authentication to work, the device must be connected to the mobile network.`
        },
        indentify: {
            title: "Identifying a device from the access token",
            content: `This specification defines the device object field as  optional in API requests, specifically in cases where the API is  accessed using a 3-legged access token, and the device can be uniquely  identified by the token. This approach simplifies API usage for API  consumers by relying on the device information associated with the  access token used to invoke the API.
            Handling of device information:<br>
            - Optional device object for 3-legged tokens:<br>
                + When using a 3-legged access token, the device associated with the  access token must be considered as the device for the API request. This  means that the device object is not required in the request, and if  included it must identify the same device, therefore it is recommended NOT to include it in these scenarios to simplify the API usage and avoid additional validations.
            Validation mechanism:<br>
                    * The server will extract the device identification from the access token, if available.<br>
                    * If the API request additionally includes a device  object when using a 3-legged access token, the API will validate that  the device identifier provided matches the one associated with the  access token.<br>
                    * If there is a mismatch, the API will respond with a 403 -  INVALID_TOKEN_CONTEXT error, indicating that the device information in  the request does not match the token.<br>
                + Error handling for unidentifiable devices:<br>
                    * If the device object is not included in the request and the device information cannot be derived from the 3-legged access  token, the server will return a 422 UNIDENTIFIABLE_DEVICE error.<br>
            - Restrictions for tokens without an associated authenticated identifier:<br>
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