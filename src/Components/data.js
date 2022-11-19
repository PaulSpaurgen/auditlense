import { GoBriefcase } from "react-icons/go";
import { RiFundsBoxFill } from "react-icons/ri";
import { GiPostOffice } from "react-icons/gi";
import { HiReceiptTax } from "react-icons/hi";
// RiFundsBoxFill GiPostOffice HiReceiptTax
let startUpAdvisory = [];
let flashCards = [];
startUpAdvisory = [
  {
    title: (
      <>
        <p>Private Limited Company</p> <p>Registration</p>
      </>
    ),
    priceInit: "17500",
    price: "9999",
    name: " PLCR",
    descreption: (
      <p>
        Get your business incorporated<b> 8 days</b> from now
      </p>
    ),
    icon: GoBriefcase,
    iconColor: "#F6580D",
  },
  {
    title: (
      <>
        <p>One Person Company</p> <p>Registration</p>
      </>
    ),
    priceInit: "  14,500",
    price: "  7777",
    name: "OPC",
    descreption: (
      <p>
        Get your business incorporated<b> 7 days</b> from now
      </p>
    ),
    icon: RiFundsBoxFill,
    iconColor: "#0769F1",
  },
  {
    title: "Partnership Firm",
    priceInit: "  10,999",
    price: "  6666",
    name: "PRF",
    descreption: (
      <p>
        Get your business incorporated<b> 10 days</b> from now
      </p>
    ),
    icon: GiPostOffice,
    iconColor: "#b66ef5",
  },
  {
    title: "Limited Liability Partnership ( LLP ) ",
    priceInit: "  15,500",
    price: "  8888",
    name: "LLP",
    descreption: (
      <p>
        Get your business incorporated<b> 9 days</b> from now
      </p>
    ),
    icon: HiReceiptTax,
    iconColor: "#024f10",
  },

  {
    title: "Proprietorship ",
    priceInit: "  4,500",
    price: "  2499",
    name: "P",
    descreption: (
      <p>
        Get your business incorporated<b> 7 days</b> from now
      </p>
    ),
    icon: GoBriefcase,
    iconColor: "#F6580D",
  },
  {
    title: "Udyam Registration",
    priceInit: "  1500",
    price: "  750",
    name: "UR",
    descreption: (
      <p>
        Get your Certificate<b> in 2hrs </b>
      </p>
    ),
    icon: RiFundsBoxFill,
    iconColor: "#0769F1",
  },
  {
    title: "Professional Tax Registration",
    priceInit: "  13,999",
    price: "  7999",
    name: "PTR",
    descreption: (
      <p>
        Get your business incorporated<b> 7 days</b> from now
      </p>
    ),
    icon: RiFundsBoxFill,
    iconColor: "#b66ef5",
  },
  {
    title: "Public Limited Company",
    priceInit: "  35499",
    price: "  25999",
    name: "PLC",
    descreption: (
      <p>
        Get your business incorporated<b> 12 days</b> from now
      </p>
    ),
    icon: HiReceiptTax,
    iconColor: "#024f10",
  },

  {
    title: "Labour License",
    priceInit: 5499,
    name: "LL",
    price: 3499,
    descreption: (
      <p>
        Get your Certificate in <b>2-5 hours</b>
      </p>
    ),
    iconColor: "#F6580D",
    icon: GoBriefcase,
  },
  {
    title: "Provident Fund Registration",
    priceInit: 5499,
    price: 3499,
    name: "PF",
    descreption: (
      <p>
        Get your Certificate in <b>5 days</b>
      </p>
    ),
    iconColor: "#0769F1",
    icon: RiFundsBoxFill,
  },
  {
    title: "ESI Registration",
    priceInit: 5499,

    name: "ESI",
    price: 3499,
    descreption: (
      <p>
        Get your Certificate in <b>5 days</b>
      </p>
    ),
    iconColor: "#b66ef5",
    icon: GiPostOffice,
  },
  {
    title: "GST Registration",
    priceInit: 3599,
    name: "GST",
    price: 2299,
    descreption: (
      <p>
        Get your Certificate in <b>2-5 hours</b>
      </p>
    ),
    iconColor: "#024f10",
    icon: HiReceiptTax,
  },
];
flashCards = [
  {
    title: (
      <>
        <p>Private Limited Company</p> <p>Registration</p>
      </>
    ),
    priceInit: "17500",
    price: "9999",
    name: " PLCR",
    services: [
      "Name Approval",
      "Filing of Spice Form",
      "Issuance of Certificate of Incorporation PAN, TAN",
      "Issuance of Memorandum of Association(MOA)",
      " Articles of Association(AOA)",
      "Includes Stampduty fees (If Authorized share capital less than 10,00,000/-). Above 10L charges as applicable",
      "Directors Identification Number",
      "2 Free Class-3 Digital Signature certificates",
      "Filing of Form INC-20A Commencement of Business",
      "GST Registration",
      "PF",
      "ESIC Registration",
      "Udyam registration",
      "Labour License (With 1-5 employees)",
      "Professional tax registration",
      "Documentation charges (stamp papers,  Notary etc)",
      "Stationery(Stamp etc)",
      "Share Certificates",
      "Professional Consultation with the Chartered Accountant",
      "Bank account Opening",
    ],
    documentsRequired: [
      "PAN of Directors and Shareholders Passport of Directors and Shareholders(If applicable in case NRI)",
      " Aadhar cards of Directors and Shareholders",
      "Passport photos of Directors",
      " Latest Bank statement",
      " Latest Utility bills( Telephone , electricity bill,property tax receipt)",
      " Proposed company Address proof like Utility bills For OPC",
    ],
  },
  {
    title: (
      <>
        <p>One Person Company</p> <p>Registration</p>
      </>
    ),
    priceInit: "  14,500",
    price: "  7777",
    name: "OPC",
    services: [
      "Name Approval",
      "Filing of Spice Form",
      "Issuance of Certificate of Incorporation PAN, TAN",
      "Issuance of Memorandum of Association(MOA)",
      " Articles of Association(AOA)",
      "Includes Stampduty fees (If Authorized share capital less than 10,00,000/-). Above 10L charges as applicable",
      "Directors Identification Number",
      "2 Free Class-3 Digital Signature certificates",
      "Filing of Form INC-20A Commencement of Business",
      "GST Registration",
      "PF",
      "ESIC Registration",
      "Udyam registration",
      "Labour License (With 1-5 employees)",
      "Professional tax registration",
      "Documentation charges (stamp papers,  Notary etc)",
      "Stationery(Stamp etc)",
      "Share Certificates",
      "Professional Consultation with the Chartered Accountant",
      "Bank account Opening",
    ],
    documentsRequired: [
      "PAN of Directors and Shareholders Passport of Directors and Shareholders(If applicable in case NRI)",
      " Aadhar cards of Directors and Shareholders",
      "Passport photos of Directors",
      " Latest Bank statement",
      " Latest Utility bills( Telephone , electricity bill,property tax receipt)",
      " Proposed company Address proof like Utility bills For OPC",
    ],
  },
  {
    title: "Partnership Firm",
    priceInit: "  10,999",
    price: "  6666",
    name: "PRF",
    services: [
      "Partnership Certificate from the Local Goverment/ registrar of Partnership firms",
      "Partnership Deed along with Rental agreement",
      " PAN and TAN",
      "GST Registration",
      "PF,ESIC Registration",
      "Labour License (With 1-5 employees)",
      "Udyam registration",
      "Professional tax registration",
      "Professional Consultation with the Chartered Accountant",
      "Bank account Opening",
      "First year free Income Tax return",
      "Includes Stampduty fees (If Authorized share capital less than 10,00,000/-). Above 10L charges as applicable",
    ],
    documentsRequired: [
      "Pan Card of All Partners",
      "Aadhar cards of all partners",
      "Passport photos of all partners",
      "Bank statements along with utility bills of All partners",
      "Utility Bills of Place of business as proof",
      "Letter of authorization for appointing managing partner",
    ],
  },
  {
    title: "Limited Liability Partnership ( LLP ) ",
    priceInit: "  15,500",
    price: "  8888",
    name: "LLP",
    services: [
      "LLP Registration",
      "LLP Deed along with Rental agreement",
      "2 Free Class-3 Digital Signature certificates",
      "PAN and TAN",
      "GST Registration",
      "PF,ESIC Registration",
      "Labour License (With 1-5 employees)",
      "Udyam registration",
      "Professional tax registration",
      "Professional Consultation with the Chartered Accountant",
      "Bank account Opening",
      "First year free Income Tax return",
    ],
    documentsRequired: [
      "Pan Card of All Partners",
      "Aadhar cards of all partners",
      "Passport photos of all partners",
      "Bank statements along with utility bills of All partners",
      "Utility Bills of Place of business as proof",
    ],
  },

  {
    title: "Proprietorship ",
    priceInit: "  4,500",
    price: "  2499",
    name: "P",
    services: [
      "GST Registration",
      "Udyam registration",
      "PF,ESIC Registration",
      "Labour License (With 1-5 employees)",
      "Professional tax registration",
      "Professional tax registration",
      "Professional Consultation with the Chartered Accountant",
    ],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "Passport size photo",
    ],
  },
  {
    title: "Udyam Registration",
    priceInit: "  1500",
    price: "  750",
    name: "UR",
    services: ["Udyam Registration Certificate"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "Passport size photo",
      "Partnership deed/ Certificate of incorporation",
      "MOA",
      "AOA in case firm or company",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
  {
    title: "Professional Tax Registration",
    priceInit: "  13,999",
    price: "  7999",
    name: "PTR",
    services: ["No Data found"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "Passport size photo",
      "Partnership deed/ Certificate of incorporation",
      "MOA",
      "AOA in case firm or company",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
  {
    title: "Public Limited Company",
    priceInit: "  35499",
    price: "  25999",
    name: "PLC",
    services: [
      "Name Approval",
      "Filing of Spice Form",
      "Issuance of Certificate of Incorporation PAN, TAN",
      "Issuance of Memorandum of Association(MOA)",
      " Articles of Association(AOA)",
      "Includes Stampduty fees (If Authorized share capital less than 10,00,000/-). Above 10L charges as applicable",
      "Directors Identification Number",
      "2 Free Class-3 Digital Signature certificates",
      "Filing of Form INC-20A Commencement of Business",
      "GST Registration",
      "PF",
      "ESIC Registration",
      "Udyam registration",
      "Labour License (With 1-5 employees)",
      "Professional tax registration",
      "Documentation charges (stamp papers,  Notary etc)",
      "Stationery(Stamp etc)",
      "Share Certificates",
      "Professional Consultation with the Chartered Accountant",
      "Bank account Opening",
    ],
    documentsRequired: [
      "PAN of Directors and Shareholders Passport of Directors and Shareholders(If applicable in case NRI)",
      " Aadhar cards of Directors and Shareholders",
      "Passport photos of Directors",
      " Latest Bank statement",
      " Latest Utility bills( Telephone , electricity bill,property tax receipt)",
      " Proposed company Address proof like Utility bills For OPC",
    ],
  },

  {
    name: "LL",
    title: "Labour License",
    services: ["Rental Agreement", "Certiticate of Labour License"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "passport size photo",
      "Partnership deed/ Certificate of incorporation, MOA,AOA in case firm or company",
      "list of Employees",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
  {
    name: "PF",
    title: "Provident Fund Registration",
    services: ["Certificate of Provident Fund"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "passport size photo",
      "Partnership deed/ Certificate of incorporation, MOA,AOA in case firm or company",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
  {
    name: "GST",
    title: "GST Registration",

    services: ["Rental Agreement", "Certiticate of Labour License"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "passport size photo",
      "Partnership deed/ Certificate of incorporation, MOA,AOA in case firm or company",
      "list of Employees",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
  {
    name: "ESI",
    title: "ESI Registration",
    services: ["Certificate of ESIC"],
    documentsRequired: [
      "Pan card",
      "Aadhar card",
      "Utility Bills of Place of business as proof",
      "Bank statement",
      "passport size photo",
      "Partnership deed/ Certificate of incorporation, MOA,AOA in case firm or company",
      "Proof of Business- Rental agreement or Certificate obtained by local goverment etc",
    ],
  },
];
let exportingData = { startUpAdvisory, flashCards };
export default exportingData;
