import React from 'react'
import '../../style/Feature/Tables.css'
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import SingleRow from './SingleRow';

const Tables = ({value}) => {
  

  const TransactionType=[{
    "heading": "Standard Purchase",
    "text": "Basic transaction for purchasing goods or services.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Purchase with Naqd",
    "text": "Purchases made with Naqd (cash) payment method.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Refund Process",
    "text": "Process for refunding a previously completed transaction.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Authorization Request",
    "text": "Reserving a specific amount from a cardholder's account before completing a purchase.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Extend Authorization",
    "text": "Extending the time period of a previously authorized transaction.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Void Authorization",
    "text": "Canceling an authorization before the transaction is captured.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Reverse Purchase",
    "text": "Reversing a purchase transaction, often used to correct errors.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Refund Reversal",
    "text": "Canceling or reversing a refund transaction.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },]

  const Payment_Network_Compatibility=[ {
    "heading": "Mada Network",
    "text": "Supports Mada, the national payment network in Saudi Arabia.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Visa Card",
    "text": "Supports Visa payment network for transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "MasterCard",
    "text": "Supports MasterCard payment network for transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "American Express",
    "text": "Supports AMEX network for transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Visa Debit",
    "text": "Supports Visa debit cards for transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Maestro Card",
    "text": "Supports Maestro debit card payment network.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "UnionPay",
    "text": "Supports UnionPay network for global transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "JCB Network",
    "text": "Supports JCB payment network, especially in Japan.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Discover Network",
    "text": "Supports Discover card transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "GCCNET",
    "text": "Supports GCCNET, the payment network in Gulf countries.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  }
  ,]

  const SupportedDevices=[{
    "heading": "Personal Android Devices",
    "text": "Rapid SoftPOS can be installed and used on personal Android devices.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Business Android Devices",
    "text": "Rapid SoftPOS supports Android devices for business purposes.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Personal iPhone Devices",
    "text": "Rapid SoftPOS support for personal iPhone devices coming soon.",
    "Rapid SoftPOS": "Soon",
    "Hard POS": "No"
  },
  {
    "heading": "Business iPhone Devices",
    "text": "Rapid SoftPOS support for business iPhone devices coming soon.",
    "Rapid SoftPOS": "Soon",
    "Hard POS": "No"
  },
  {
    "heading": "Self-Service & Table Android Devices",
    "text": "Supports Android-based self-service and table devices.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },]
  const DashboardFeatures=[ {
    "heading": "Team Management",
    "text": "Manage user roles and permissions for your organization.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Role Management",
    "text": "Define and assign roles to different users for access control.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "App Management",
    "text": "Manage applications connected to payment terminals.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Real-time Transaction Monitoring",
    "text": "Monitor transactions in real-time across terminals.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Geolocation and Time Tracking",
    "text": "Track the location and time of each transaction.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Terminal Assignments",
    "text": "Assign payment terminals to different users and locations.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Network Management",
    "text": "Manage payment networks enabled for each terminal.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Transaction Type Management",
    "text": "Control which transaction types are allowed per terminal.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Transaction Speed Details",
    "text": "View details about transaction speeds on each terminal.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Internet Speed Details",
    "text": "Monitor and check internet speeds at terminal locations.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Notification Settings",
    "text": "Configure notifications for different terminal events.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Reconciliation Management",
    "text": "Manage financial reconciliations for your business.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Transaction Export",
    "text": "Export transaction data for external use or backup.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Reconciliation Export",
    "text": "Export reconciliation data for reporting purposes.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Terminal Export",
    "text": "Export terminal data for inventory management or audits.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Sales Reports",
    "text": "Generate sales reports based on transaction data.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  }
  ,]

  const Internet_Connectivity_Options=[ {
    "heading": "WiFi Connectivity",
    "text": "Supports wireless internet connections for transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "EDGE Network",
    "text": "Supports transactions over EDGE network for slower internet connections.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "3G Network",
    "text": "Supports transactions over the 3G mobile network.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "4G Network",
    "text": "Supports faster 4G mobile network connections.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "5G Network",
    "text": "Supports next-generation 5G network for high-speed transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "M2M SIM Connectivity",
    "text": "Supports Machine-to-Machine (M2M) SIM cards for connected devices.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },]
  const Terminal_Assignmentand_Control=[ {
    "heading": "Assign Terminal to User",
    "text": "Assign payment terminals to specific users for controlled access.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Revoke User from Terminal",
    "text": "Revoke terminal access from previously assigned users.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "API-based Control",
    "text": "Manage terminal assignments through an API.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Assign via Email or Mobile",
    "text": "Assign terminals to users using their email or mobile number.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Disconnect Devices",
    "text": "Disconnect devices that are currently connected to terminals.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "View Connected Devices",
    "text": "View details of devices connected to each terminal.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  }]
  const SDK_Integration_Options=[ {
    "heading": "Quick Integration",
    "text": "Free and fast integration with minimal setup.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Integration in Under 30 Minutes",
    "text": "Complete the integration process in less than 30 minutes.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "JWT-based User Verification",
    "text": "Authenticate users using JWT for secure transactions.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Mobile OTP Verification",
    "text": "Authenticate users via a mobile One-Time Password (OTP).",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Email OTP Verification",
    "text": "Authenticate users via an OTP sent to their email.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Sandbox Testing",
    "text": "Test transactions safely in a sandbox environment.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Purchase Integration",
    "text": "Easily integrate purchase functionality.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Refund Integration",
    "text": "Integrate refund functionality into your systems.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Purchase & Refund Reversal Integration",
    "text": "Reversals for purchases and refunds are supported.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Reconciliation Integration",
    "text": "Easily integrate reconciliation functionality.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Transaction & Reconciliation Reports",
    "text": "Generate reports for transactions and reconciliations.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "NFC Receipt Sharing",
    "text": "Share receipts via NFC integration.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Receipt Printing",
    "text": "Supports integration for printing receipts.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "Yes"
  },
  {
    "heading": "Order Integration with Transactions",
    "text": "Link orders to transactions for seamless integration.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  }]
  const Supported_Programming_Languages=[
    {
      "heading": "Java",
      "text": "Supports Java programming for integrations.",
      "Rapid SoftPOS": "Yes",
      "Hard POS": "No"
    },
    {
      "heading": "Kotlin",
      "text": "Supports Kotlin programming for Android app integrations.",
      "Rapid SoftPOS": "Yes",
      "Hard POS": "No"
    },
    {
      "heading": "JavaScript",
      "text": "Supports JavaScript for web and backend integrations.",
      "Rapid SoftPOS": "Yes",
      "Hard POS": "No"
    },
    {
      "heading": "Swift",
      "text": "Supports Swift for iOS app integrations.",
      "Rapid SoftPOS": "Yes",
      "Hard POS": "No"
    },]
  const Supported_Frameworks=[ 
  {
    "heading": "React Native",
    "text": "Integrate Rapid SoftPOS with React Native mobile apps.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Ionic Framework",
    "text": "Supports Ionic framework for hybrid apps.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },
  {
    "heading": "Flutter Framework",
    "text": "Integrate with Flutter for cross-platform app support.",
    "Rapid SoftPOS": "Yes",
    "Hard POS": "No"
  },]
  const data1=[{"Transaction Types":TransactionType} ,{"Payment Network Compatibility":Payment_Network_Compatibility},  {"Supported Devices":SupportedDevices}, {"Dashboard Features":DashboardFeatures}, {"Internet Connectivity Options":Internet_Connectivity_Options}, {"Terminal Assignment and Control":Terminal_Assignmentand_Control},{"SDK Integration Options":SDK_Integration_Options},{"Supported Programming Languages":Supported_Programming_Languages},{"Supported Frameworks":Supported_Frameworks}]
  const data=[
    
         
          {
            "heading": "Backend System API Features",
            "text": "Features",
            "Rapid SoftPOS": "Rapid SoftPOS",
            "Hard POS": "Hard POS"
          },
          {
            "heading": "Free API Integration",
            "text": "No cost for API integration with Rapid SoftPOS.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Terminal Assignment Control",
            "text": "Assign and manage terminals using the API.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Real-time Transaction Filtering",
            "text": "Filter and list transactions in real-time.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Real-time Reconciliation Filtering",
            "text": "Filter and list reconciliations in real-time.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Terminal Management",
            "text": "Manage payment terminals through the backend system.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Trigger Reconciliations",
            "text": "Trigger financial reconciliations through API.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Webhooks for Notifications",
            "text": "Features",
            "Rapid SoftPOS": "Rapid SoftPOS",
            "Hard POS": "Hard POS"
          },
          {
            "heading": "Transaction Success Notification",
            "text": "Receive a webhook notification for each successful transaction.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Transaction Declined Notification",
            "text": "Receive a notification for declined transactions.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Reconciliation Notification",
            "text": "Get notified upon the completion of reconciliations.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Reversal Notification",
            "text": "Receive notifications for transaction reversals.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Terminal Assignment Notification",
            "text": "Get alerts when a terminal is assigned to a user.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Terminal Assignment Revocation",
            "text": "Receive notifications for terminal assignment revocations.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "Device Connection Notification",
            "text": "Receive a notification when a device connects to a terminal.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "API Key Regeneration Alert",
            "text": "Receive alerts when API keys are regenerated.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          },
          {
            "heading": "JWT Key Regeneration Alert",
            "text": "Receive alerts for JWT key regeneration.",
            "Rapid SoftPOS": "Yes",
            "Hard POS": "No"
          }
        
        
    
  ]



  const daa=data1?.filter(e=>Object.hasOwnProperty.call(e, value))[0]
  
  return (
    <div className='tables'>
        <h5> {value}</h5>
        <table>
        {Object.values(daa)[0].map((item, index) => <SingleRow key={index} item={item} />)}
      



             
                {/* <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr> */ }

           
        </table>

    </div>
  )
}

export default Tables