// data.js
import MSI_Creator from "../../assets/MSI_Creator_Z17.webp";
import Gigabyte from "../../assets/Gigabyte_Aero_16.jpeg";
import laptopImage2 from "../../assets/MacBook_Air.webp";
import Microsoft_Surface from "../../assets/Microsoft_Surface.webp";
import Lenovo_ThinkPad from "../../assets/Lenovo_ThinkPad_P16.jpeg";
import Dell_XPS from "../../assets/Dell_XPS.webp";
import Lenovo_Yoga from "../../assets/Lenovo_Yoga_9i.webp";
import Dell_XPS_Desktop from "../../assets/Dell_XPS_Desktop.jpg";
import Acer_Aspire_TC from "../../assets/Acer_Aspire_TC.png";
import Apple_Mac_mini from "../../assets/Apple_Mac_mini.jpg";
import Apple_iMac from "../../assets/Apple_iMac.jpg";
//import tool1 from "../../assets/tool1.jpg";
//import tool2 from "../../assets/tool2.jpg";
//import tool3 from "../../assets/tool3.jpg";
//import tool4 from "../../assets/tool4.jpg";

export const pcs = [
  {
    id: 1,
    name: "Lenovo Yoga 9i",
    price: 1200,
    type: "Laptop",
    image: Lenovo_Yoga,
    description: `
      CPU: 13th Gen Intel Core i7-1360P
      Graphics: Intel Iris Xe
      RAM: 16GB LPDDR5
      Screen: Up to 14-inch 3840 x 2400 400-nit OLED touchscreen with 100% DCI-P3, VESA Certified DisplayHDR True Black 500, Dolby Vision
      Storage: Up to 1TB SSD
    `,
  },
  {
    id: 2,
    name: "HP Pavilion",
    price: 1500,
    type: "Laptop",
    image: Gigabyte,
    description: `
      CPU: Intel Core i5
      Graphics: Intel UHD Graphics
      RAM: 8GB DDR4
      Screen: 15.6-inch Full HD
      Storage: 512GB SSD
    `,
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 2000,
    type: "Laptop",
    image: laptopImage2,
    description: `
      CPU: Apple M3 chip
      RAM: 8GB – 24GB unified memory
      Screen: 13.6-inch Retina display
      Storage: up to 2TB
    `,
  },
  {
    id: 4,
    name: "Dell XPS",
    price: 2500,
    type: "Laptop",
    image: Dell_XPS,
    description: `
      CPU: Intel Core Ultra 7 155H
      RAM: Up to 64GB DDR5
      Screen: Up to 14.5-inch 3.2K OLED touchscreen
      Storage: Up to 4TB
    `,
  },
  {
    id: 5,
    name: "Microsoft Surface Laptop Studio 2",
    price: 1200,
    type: "Laptop",
    image: Microsoft_Surface,
    description: `
      CPU: Intel Core i7
      Graphics: Nvidia GeForce RTX 4060
      RAM: 64GB
      Screen: 14.4-inch PixelSense Flow (2400 x 1600)
      Storage: 1TB
    `,
  },
  {
    id: 6,
    name: "Gigabyte Aero 16",
    price: 1500,
    type: "Laptop",
    image: Gigabyte,
    description: `
      CPU: 13th Gen Intel Core i9
      Graphics: Nvidia GeForce RTX 4070 Laptop GPU 8GB GDDR6
      RAM: Up to 64GB
      Screen: 16-inch, 4K UHD+ 3840x2400, OLED, 16:10
      Storage: Up to 4TB
    `,
  },
  {
    id: 7,
    name: "Lenovo ThinkPad P16 Mobile Workstation",
    price: 2000,
    type: "Laptop",
    image: Lenovo_ThinkPad,
    description: `
      CPU: 12th Gen Intel Core i7 - i9
      Graphics: Nvidia RTX A2000 - A4500
      RAM: 8GB – 32GB
      Screen: Up to 16" WQUXGA (3840 x 2400), OLED, Anti-Reflection/Anti-Smudge, Dolby Vision™, Touch, 100% DCI-P3, 400 nits, 60Hz
      Storage: 256GB - 512GB
    `,
  },

  {
    id: 9,
    name: "MSI Creator Z17",
    price: 1100,
    type: "Laptop",
    image: MSI_Creator,
    description: `
      CPU: Intel Core i9
      Graphics: Nvidia GeForce RTX 3080 Ti
      RAM: 64GB
      Screen: 17.3-inch QHD+
      Storage: 2 x 2TB
    `,
  },
  {
    id: 10,
    name: "Desktop 1",
    price: 1000,
    type: "Desktop",
    image: Dell_XPS_Desktop,
    description: `
      CPU: Intel Core i7
      Graphics: Nvidia GeForce GTX 1660
      RAM: 16GB DDR4
      Storage: 1TB HDD + 256GB SSD
    `,
  },
  {
    id: 11,
    name: "Acer Aspire TC",
    price: 1200,
    type: "Desktop",
    image: Acer_Aspire_TC,
    description: `
     CPU: 13th Gen Intel Core i5
     Graphics: up to Nvidia GeForce GTX 1660 
     SuperRAM: up to 16GB
     Storage: up to 512 GB SSD + 1 TB HDD
    `,
  },
  {
    id: 12,
    name: "Apple Mac mini ",
    price: 1400,
    type: "Desktop",
    image: Apple_Mac_mini,
    description: `
    CPU: Up to 14-core Apple M4 Pro
    Graphics: Up to integrated 16-core GPU
    RAM: Up to 64GB unified memory
    Storage: 256GB – 8TB SSD
    Dimensions (W x D x H): 12.7 x 12.7 x 5.0 cm
    `,
  },
  {
    id: 13,
    name: "Apple iMac 24-inch (M4)",
    price: 1600,
    type: "Desktop",
    image: Apple_iMac,
    description: `
     CPU: Apple M4 chip with up to 10‑core CPU
     Graphics: Up to 10-core integrated GPU
     RAM: up to 32GB unified memory
     Screen: 24-inch 4.5K Retina display with optional Nano-texture finish
     Storage: Up to 2TB
    `,
  },
 {/*{
    id: 14,
    name: "Tool 1",
    price: 100,
    type: "Tools",
    image: tool1,
    description: `
      Type: Screwdriver Set
      Pieces: 50
      Material: Chrome Vanadium Steel
    `,
  },
  {
    id: 15,
    name: "Tool 2",
    price: 150,
    type: "Tools",
    image: tool2,
    description: `
      Type: Drill Machine
      Power: 500W
      Speed: 3000 RPM
    `,
  },
  {
    id: 16,
    name: "Tool 3",
    price: 200,
    type: "Tools",
    image: tool3,
    description: `
      Type: Hammer Set
      Pieces: 10
      Material: High Carbon Steel
    `,
  },
  {
    id: 17,
    name: "Tool 4",
    price: 250,
    type: "Tools",
    image: tool4,
    description: `
      Type: Wrench Set
      Pieces: 20
      Material: Stainless Steel
    `,
  },
  */} 
];