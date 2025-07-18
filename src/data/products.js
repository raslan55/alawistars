const products = [
  {
    id: 1,
    title: "Inv_acc",
    image: "/Productes/accounting_inventory.webp",
    slug: "accounting-inventory",
    description: "acc_Inv_Disc",
    features: [...Array(16)].map((_, i) => `Inv_acc_feature_${i + 1}`),
  },
  {
    id: 2,
    title: "acc",
    image: "/Productes/general_accounting.webp",
    slug: "general-accounting",
    description: "acc_desc",
    features: [...Array(16)].map((_, i) => `acc_feature_${i + 1}`),
  },
  {
    id: 3,
    title: "Inv",
    image: "/Productes/inventory_system.webp",
    slug: "inventory-system",
    description: "Inv_Disc",
    features: [...Array(18)].map((_, i) => `Inv_feature_${i + 1}`),
  },
  {
    id: 4,
    title: "Pr",
    image: "/Productes/real_estate_management.webp",
    slug: "real-estate-management",
    description: "Pr_Disc",
    features: [...Array(16)].map((_, i) => `Pr_feature_${i + 1}`),
  },
  {
    id: 5,
    title: "Furn",
    image: "/Productes/furnished_apartments.webp",
    slug: "furnished-apartments",
    description: "Furn_Disc",
    features: [...Array(8)].map((_, i) => `Furn_feature_${i + 1}`),
  },
  {
    id: 6,
    title: "Med",
    image: "/Productes/medical_system.webp",
    slug: "medical-system",
    description: "Med_Disc",
    features: [...Array(16)].map((_, i) => `Med_feature_${i + 1}`),
  },
  {
    id: 7,
    title: "Maintenance",
    image: "/Productes/car_maintenance.webp",
    slug: "car-maintenance",
    description: "Maintenance_Disc",
    features: [...Array(35)].map((_, i) => `Maintenance_feature_${i + 1}`),
  },
  
  {
    id: 8,
    title: "Car_sale",
    image: "/Productes/car_sales.webp",
    slug: "car-sales",
    description: "Car_sale_Disc",
    features: [...Array(16)].map((_, i) => `Car_sale_feature_${i + 1}`),
  },
  {
    id: 9,
    title: "Hr",
    image: "/Productes/hr.png",
    slug: "hr-system",
    description: "Hr_Disc",
    features: [...Array(16)].map((_, i) => `Hr_feature_${i + 1}`),
  },
  {
    id: 10,
    title: "Commu",
    image: "/Productes/telecom.webp",
    slug: "telecom-system",
    description: "commu_Disc",
    features: [...Array(15)].map((_, i) => `Commu_feature_${i + 1}`),
  },
  {
    id: 11,
    title: "serv",
    image: "/Productes/services.webp",
    slug: "services-system",
    description: "serv_Disc",
    features: [...Array(16)].map((_, i) => `serv_feature_${i + 1}`),
  },
  {
    id: 12,
    title: "fuel",
    image: "/Productes/Oil_Station.webp",
    slug: "fuel-station",
    description: "Fule_Disc",
    features: [...Array(16)].map((_, i) => `fuel_feature_${i + 1}`),
  },
];

export default products;
