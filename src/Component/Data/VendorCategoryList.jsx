import studiook from "../../Images/Photographers/coverImages/Studio_OK_cover_image.webp";
import PreWedMemories from "../../Images/Photographers/coverImages/PreWed_Memories_cover_Image.webp";
import Vidhi_Films_cover_image from "../../Images/Photographers/coverImages/Vidhi_Films._cover_image.webp";
const VendorCategoryList = [
        {
            vendorMainCategoryId: "001",
            vendorId: "11",
            vendorName: "Studio OK",
            vendorContact: "7666754194",
            StartingPrice: "10000",
            image:studiook,
            vendorServiceLocation: [
                {
                    ServiceLocationId: "1",
                    ServiceLocation: "Ambamata",
                },
                {
                    ServiceLocationId: "2",
                    ServiceLocation: "Udaipur",
                },
            ],
        },
        {
            vendorMainCategoryId: "002",
            vendorId: "11",
            vendorName: "PreWed Memories",
            vendorContact: "7666754194",
            StartingPrice: "20000",
            image:PreWedMemories,
            vendorServiceLocation: [
                {
                    ServiceLocationId: "1",
                    ServiceLocation: "Mayur Vihar",
                },
                {
                    ServiceLocationId: "2",
                    ServiceLocation: "Delhi NCR",
                },
            ],
        },
        {
            vendorMainCategoryId: "003",
            vendorId: "11",
            vendorName: "Vidhi Films",
            vendorContact: "7666754194",
            StartingPrice: "30000",
            image:Vidhi_Films_cover_image,
            vendorServiceLocation: [
                {
                    ServiceLocationId: "1",
                    ServiceLocation: "Jagdish Chowk",
                },
                {
                    ServiceLocationId: "2",
                    ServiceLocation: "Udaipur",
                },
            ],
        },
];

export default VendorCategoryList;