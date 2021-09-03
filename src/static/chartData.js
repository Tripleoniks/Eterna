import img1 from  "../images/home-icon.svg";
import img2 from  "../images/check-icon.svg";
import img3 from  "../images/settings-icon.svg";
import pie from "../images/pie-chart.svg";
const chartDatax = [
    {
       overallPercent: '100%',
       title: "ENTITY COMPLIANCE",
       icon: img1,
       chart: pie,
       sTitle: [
           {
             title: "Entities",
             val: "214"
           },
           {
             title: "Full License",
             val: "0"
           },
           {
             title: "Part",
             val: "0"
           },
           {
             title: "None",
             val: "0"
           },
       ],
       keys: [
        {
            name: "Warehouses",
            color: "#FA0000"
        },
        {
            name: "Stations",
            color: "#338B5C"
        },
        {
            name: "Depots",
            color: "#F9C636"
        }
       ]
       
    },
    {
       overallPercent: "38%",
       title: "LICENSE COMPLIACE",
       icon: img2,
       chart: pie,
       sTitle: [
           {
             title: "Total Expected",
             val: "402"
           },
           {
             title: "Valid",
             val: "110"
           },
           {
             title: "Expiring",
             val: "16"
           },
           {
             title: "Expired",
             val: "119"
           },
       ],
       keys: [
           {
               name: "Valid",
               color: "#FA0000"
           },
           {
               name: "Expired",
               color: "#338B5C"
           },
           {
               name: "Expiring",
               color: "#F9C636"
           }
       ]
    },
    {
       overallPercent: "64%",
       title: "PROCESSING STAGE",
       icon: img3,
       chart: pie,
       sTitle: [
           {
             title: "Start Process",
             val: "2"
           },
           {
             title: "Approach",
             val: "17"
           },
           {
             title: "Fulfil",
             val: "57"
           },
           {
             title: "Close",
             val: "3"
           },
       ],
       keys: [
        {
            name: "Approach",
            color: "#FA0000"
        },
        {
            name: "Close",
            color: "#338B5C"
        },
        {
            name: "Fulfil",
            color: "#F9C636"
        }
       ]
    },
    {
       overallPercent: 234,
       title: "STAKEHOLDER COUNT",
       icon: img2,
       chart: pie,
       sTitle: [
           {
             title: "KRI",
             val: "234"
           },
           {
             title: "Knowledge",
             val: "80"
           },
           {
             title: "Intimacy",
             val: "90"
           },
           {
             title: "Report",
             val: "72"
           },
       ],
       keys: [
        {
            name: "Knowledge",
            color: "#FA0000"
        },
        {
            name: "Rapport",
            color: "#338B5C"
        },
        {
            name: "Intimacy",
            color: "#F9C636"
        }
       ]
    }
    
]

export default chartDatax;