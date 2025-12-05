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
            title: "Definition",
            content: `The “Device Swap” API is designed to provide real-time insights into whether a SIM card associated with a user’s phone number has been transferred to a different physical device. This API enhances security, fraud detection, and regulatory compliance by offering clear and structured device swap event information.`
        },
        useFor: {
            title: "What can it be used for?",
            content: `A device swap check function that allows users to verify if a device swap has occurred within a given timeframe.<br>
             A retrieve date function that returns the exact timestamp of the last device swap event.<br>
             A subscription-based notification service to notify subscribers when a device swap event is detected.`
        },
        useCases: {
            title: "Use cases",
            content: [
                {
                    title: "Banks and financial",
                    content:`Banks and financial services can detect device swaps to prevent unauthorized transactions, triggering additional authentication when necessary. Online services enhance identity protection by requiring re-authentication upon detecting a device change, ensuring only legitimate users access their accounts.`,
                    image: 'assets/images/device-swap/bank.svg'
                },
                {
                    title: "Telecom providers and businesses",
                    content:`Telecom providers and businesses leverage device swaps to offer targeted promotions, recommend accessories or upgraded service plans, and reinforce customer loyalty through reward programs for continued app usage.`,
                    image: 'assets/images/device-swap/telecom.jpg'
                },
                {
                    title: "Companies",
                    content:`Companies managing corporate mobile plans monitor device usage to ensure employees are using company-provided lines on authorized devices, maintaining security and compliance.`,
                    image: 'assets/images/device-swap/company.jpg'
                },
                {
                    title: "Regulatory Compliance",
                    content:`Ensuring compliance with regulations by tracking and verifying device swap events.`,
                    image: 'assets/images/device-swap/compliance.png'
                },
                {
                    title: "Subscription Services",
                    content:`Offering continuous monitoring and notifications to businesses that require real-time updates on device swap events.`,
                    image: 'assets/images/device-swap/subscription.svg'
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
            content: `The Device Swap API performs real-time checks on the last Device Swap event, providing real-time information about whether the SIM card associated with a user's phone number has been transferred to a different physical device.
<br><br>
Device Swap information can be invaluable for enhancing security, fraud detection, and ensuring compliance with regulatory requirements in various applications, apart from providing useful information of device upgrade trends in user segments.
<br><br>
This API is used by an application to get information about a mobile line's latest Device Swap date. It can be easily integrated and used through this secured API and allows API consumers to get this information in an easy and secured way. The API provides management of 2 endpoints answering 2 distinct questions:
<br>
When did the last Device Swap occur?<br>
Has a Device Swap occurred during the last n hours?`
        },
        term: {
            title: 'Relevant terms and definitions',
            content: `Device Swap: A Device Swap is a process in which the association between a user's mobile phone number (MSISDN) and a device (IMEI) is created for the first time or changes for any reasons.`
        },
        functionality: {
            title: "API Functionality",
            content: `<p>
  The Device Swap API provides a programmable interface for developers and other users (capabilities consumers) to request the last date of a device swap performed on the mobile line, or to check whether a device swap has been performed during a past period.
</p>

<p><strong>The API provides 2 operations:</strong></p>

<ul>
  <li>
    <strong>POST retrieve-date:</strong> Provides the timestamp of the latest device swap, if any, for a given phone number.
    <ul>
      <li>
        If no swap has been performed and the network operator supports unlimited DeviceSwap monitoring timeframe, the API will return the first phone number usage in a device (the timestamp of the first time that the phone number was connected to the network; that is, the first time that the SIM is installed in a device).
      </li>
      <li>
        If the latest device swap date (or the first phone number usage, if no device swap) cannot be communicated due to local regulations (or Network Operator internal privacy policies) preventing the safekeeping of the information for longer than the stated period, a <code>null</code> value will be returned.
      </li>
      <li>
        Optionally, a <code>monitoredPeriod</code> may be provided to indicate the monitored time frame (in days) supported by the Network Operator. In this case, the response must be treated as “there were no device swap events during <code>monitoredPeriod</code>”. Although the parameter is optional, it is recommended to support it in DeviceSwap implementations.
      </li>
    </ul>
  </li>

  <li>
    <strong>POST check:</strong> Checks if a device swap has been performed during a past period (defined in the request with the <code>maxAge</code> attribute) for a given phone number.  
    The API will return a boolean response (true/false), indicating whether the device has been swapped during the specified period.
    <br><br>
    If the phone number has never been installed in a device, or no data is available in the operator’s records (e.g. database error), the API will return a <strong>422 error</strong>.
  </li>
</ul>`
        },
        authorization: {
            title: "Authorization and authentication",
            content: `The "Camara Security and Interoperability Profile" provides details of how an API consumer requests an access token. Please refer to Identity and Consent Management (https://github.com/camaraproject/IdentityAndConsentManagement/) for the released version of the profile.
<br><br>
The specific authorization flows to be used will be agreed upon during the onboarding process, happening between the API consumer and the API provider, taking into account the declared purpose for accessing the API, whilst also being subject to the prevailing legal framework dictated by local legislation.
<br><br>
In cases where personal data is processed by the API and users can exercise their rights through mechanisms such as opt-in and/or opt-out, the use of three-legged access tokens is mandatory. This ensures that the API remains in compliance with privacy regulations, upholding the principles of transparency and user-centric privacy-by-design.`
        },
        indentify: {
            title: "Identifying a device from the access token",
            content: `<p>
  This API requires the API consumer to identify a phone number as the subject of the API.
  There are 2 ways to retrieve it depending on the authorization flow used:
</p>

<ul>
  <li>
    When the API is invoked using a two-legged access token, the phone number will be
    identified from the optional <code>phoneNumber</code> identifier, which therefore MUST
    be provided.
  </li>

  <li>
    When a three-legged access token is used however, this optional
    <code>phoneNumber</code> identifier MUST NOT be provided, as the phone number will be
    uniquely identified from the access token.
  </li>
</ul>

<p>
  This approach simplifies API usage for API consumers using a three-legged access token
  to invoke the API by relying on the information that is associated with the access token
  and was identified during the authentication process.
</p>`
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