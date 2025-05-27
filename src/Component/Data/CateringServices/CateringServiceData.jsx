import The_Royal_Events_Co_Catering from "../../../Images/Catering/The_Royal_Events_Co_Catering.avif";
import GBL_Premium_Catering_and_Services from "../../../Images/Catering/GBL_Premium_Catering_and_Services.avif";
import Get_Your_Menu from "../../../Images/Catering/Get_Your_Menu.avif";

const CateringServicesData = [
    {
        CateringId: "1",
        CateringName: "GBL Premium Catering and Services",
        image:GBL_Premium_Catering_and_Services,
        CateringPrice: "3000",
        MaxCapacity: "2000",
        MinCapacity: "100", 
        CateringLoaction: [
            {
                LoactionId: "1",
                Loaction: "KK Nagar",
            },
        ]
    },
    {
        CateringId: "2",
        CateringName: "The Royal Events Co - Catering",
        image:The_Royal_Events_Co_Catering,
        CateringPrice: "1200",
        MaxCapacity: "1000",
        MinCapacity: "100", 
        CateringLoaction: [
            {
                LoactionId: "1",
                Loaction: "Hazratganj",
            },
            {
                LoactionId: "1",
                Loaction: "Lucknow",
            },
        ]
    },
    {
        CateringId: "3",
        CateringName: "Get Your Menu",
        image:Get_Your_Menu,
        CateringPrice: "1800",
        MaxCapacity: "2999",
        MinCapacity: "100", 
        CateringLoaction: [
            {
                LoactionId: "1",
                Loaction: "Delhi NCR",
            },
        ]
    },
];

export default CateringServicesData;
