import { GoBriefcase } from "react-icons/go";
import { RiFundsBoxFill } from "react-icons/ri";
import { GiPostOffice } from "react-icons/gi";
import { HiReceiptTax } from "react-icons/hi";
// RiFundsBoxFill GiPostOffice HiReceiptTax
let startUpAdvisory = [];
let flashCards = [];
startUpAdvisory = [
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
    bgColor: "#FFF7F3",
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
    bgColor: "#F3FEFF",
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
    bgColor: "#FFF3FE",
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
    bgColor: "#F3FFF4",
    iconColor: "#024f10",
    icon: HiReceiptTax,
  },
];
flashCards = [
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
export default { startUpAdvisory, flashCards };
