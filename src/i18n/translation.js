import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Alawistars!",
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
      title: "alawistars",
      CompanyName: "Nujoum Al Alawi Computer Systems",
      companyDescription:
        "Nujoum Al Alawi Computer Systems was launched in 1994 to provide For the Saudi society and economy aspiring for growth and leadership At that time, software solutions and electronic systems in addition to For various types of technical services and products Developed that keeps pace with the aspirations of companies and private institutions at that time, and in order to contribute from During its role in facilitating the management function and improving production, Governance and control of work, and was able from the first moment From its launch, gaining the trust of its customers and consolidating its position As a reliable and indispensable technology partner for many Government and private agencies, and continued to provide performance Distinguished and providing advanced technical services and products Through which it was able to enrich the system Management and the world of systems, software and modern technology in the Kingdom, and helped it achieve huge leaps in The size of its outputs, its profit margins, and its level of excellence in Work, management and organization, and tracked in this framework An ever-evolving working methodology based primarily on customer satisfaction and providing perfect and reliable products and services, Nojoom Al Alawi became the number one service provider and seller Expert technology with more than 10,000 companies and institutions Inside and outside the Kingdom",
      footertext:
        "To be a recognized world leader and authority in the industry for Software",
      Email: "Email",
      Fax: "Fax",
      QuickLinks: "Quick Links",
      Our_Location: "Our Location",
      HeadOfficeRiyadh: "Head Office – Riyadh",
      Jeddah_Branch: "Jeddah Branch",
      address_1: "Al-Malaz - Salah eddin Street ",
      address_2: " Western Baghdadia",
      FAQs: "FAQs",
      Privacy_Policy: "Privacy Policy",
      Terms_Conditions: "Terms & Conditions",
      Follow_us: "Follow us",
      time: "8:00 am - 12:30 pm 3:00 pm - 7:30 pm",
      Testimonial: "Testimonial",
      Stories: "Real Stories, Real Results",
      Testimonial_text:
        "Read what our clients have to say about their journey with us. We’re proud to deliver value that speaks for itself.",
 Testimonial_name_1: "Yousef Saeed A. Bawazeer Trading Est.",
  Testimonial_Location_1: "Jeddah, Saudi Arabia",
  Testimonial_text_1: "We appreciate the efforts of Najoom Al-Alawi Computer Systems in maintaining and developing our programs (sales and accounting). Our trust in them is permanent, as they are a key partner in our success. We hope for the continuation of this distinguished performance. Thank you very much.",

  Testimonial_name_2: "Basamat Al-Osra Dental Clinics Complex",
  Testimonial_Location_2: "Najran, Saudi Arabia",
  Testimonial_text_2: "We thank Najoom Al-Alawi and Sinmar program for their excellent cooperation, quick response, and technical support over 4 years, which positively impacted our clinic's operations. We wish you continued progress and prosperity.",

  Testimonial_name_3: "Moussa Taqneya Al-Qata' Al-Jadeedah for Trading", // Updated for "تقنية القطع الجديدة" based on previous analysis
  Testimonial_Location_3: "Jeddah, Saudi Arabia",
  Testimonial_text_3: "We extend thanks to Najoom Al-Alawi and Sinmar Application Systems for their efforts in maintaining and developing the distinguished programs we rely on for inventory, sales, and accounting. We value our partnership and wish you continued excellence.",

  Testimonial_name_4: "Cosmoline Clinic Dr. Hasan AbuHathrah",
  Testimonial_Location_4: "Kingdom of Saudi Arabia",
  Testimonial_text_4: "A certificate of thanks and appreciation to Najoom Al-Alawi and Sinmar program for their continuous support in making our work successful and developing it. We express our sincere gratitude for your valuable efforts and effective contribution.",

  Testimonial_name_5: "Shadow Lighting Trading Est.", // Updated for "خيال الضوء" based on previous analysis
  Testimonial_Location_5: "Jeddah, Saudi Arabia",
  Testimonial_text_5: "We express our pride and gratitude for the numerous achievements and beneficial efforts you have provided. Your expertise and quick response helped us overcome challenges. We extend our highest appreciation and wish you continued success.",
  
  Testimonial_name_6: "Rashed Mohamed Alhamed Company",
  Testimonial_Location_6: "Riyadh, Saudi Arabia",
  Testimonial_text_6: "We thank Najoom Al-Alawi and Sinmar Application Systems for their continuous maintenance and development of our programs (inventory, sales, and accounting). Our trust in you is permanent as a key partner in our success, and we hope for your continued distinguished performance.",

  Testimonial_name_7: "Middle Sea Modern Wire Telecom Co.",
  Testimonial_Location_7: "Jeddah, Saudi Arabia",
  Testimonial_text_7: "A letter of thanks and appreciation to the manager of Najoom Al-Alawi Computer Systems for their continuous efforts in developing Sinmar's accounting systems. We are proud to keep pace with your progress, and we wish you continuous success and prosperity. Our sincere thanks to you.",

  Testimonial_name_8: "Mohamad Khalil Fageeh Speciality Medical Center",
  Testimonial_Location_8: "Kingdom of Saudi Arabia",
  Testimonial_text_8: "We thank Najoom Al-Alawi and Sinmar program for their constructive cooperation in quality control and developing computer usage for clinic operations. We appreciate your professionalism and excellent service, and wish you further progress and prosperity.",

  Testimonial_name_9: "Abdullah Saleh Bin Eid Al Yahiyya Est. For Trading",
  Testimonial_Location_9: "Riyadh, Saudi Arabia",
  Testimonial_text_9: "Thanks and appreciation to Najoom Al-Alawi and Sinmar Application Systems for the maintenance and development of our programs (inventory, sales, accounting). Our trust in you is permanent as a success partner, and we hope for your continued excellence. We extend our sincere thanks and appreciation.",

  Testimonial_name_10: "Tareq & Yasien Co. Limited", // Adding the last one (Tareq & Yasien Co.)
  Testimonial_Location_10: "Makkah Al-Mukarramah, Saudi Arabia",
  Testimonial_text_10: "With all pride and appreciation, TYAMCO extends profound thanks to Najoom Al-Alawi Computer Systems, Sinmar program, for their efforts in developing the program and assisting us in solving problems. We wish you continued success.",


      Partners_Heading: " Meet our  partners",
      Partners_text: "We’ve 10000+ Dedicated Partners",
      Hero_heading:
        "The Smart Solution for Managing Your Business and Tracking Inventory  with Ease",
      Hero_text:
        " Certified by the Saudi Zakat, Tax and Customs Authority for  Electronic Invoicing (Phase I & II)",
      Hero_P:
        " Start your digital transformation today! Prepare your team → Test  the system → Update your data → Review invoices → Stay up-to-date with official updates.",
      Start_btn: "Get Started Now",
      About_Us: " About Us ",
      About_text: "We Help Drive the IT Industry Forward Since 1994",
      Serv_h: " Development of Business Systems ",
      serv_p:
        "Software solutions serving various business sectors and industries.",
      ERP: "(ERP) Systems",
      serv2_p:
        " Comprehensive ERP solutions covering accounting, HR, inventory, sales, and more",
      SERVICES_WE_PROVIDE: "SERVICES WE PROVIDE",
      Cloud_Based_Solutions: "Cloud-Based Solutions",
      Desktop_Applications: "Desktop Applications",
      Inv_acc: "Sinmar For Accounting & Inventory ",
      acc_Inv_Disc:
        "An integrated accounting and inventory system that supports branches, barcodes, and advanced tax reports.",
      Inv: " Sinmar For Inventory ",
      Inv_Disc:
        "An effective tool for managing inventory, tracking products, and linking them to suppliers and invoices.",
      acc: "Sinmar General Accounting ",
      acc_desc:
        "A comprehensive system for managing general accounts, daily entries, and accurate financial reports.",
      Med: " Sinmar For Medical System",
      Med_Disc:
        "An integrated medical solution for managing clinics, appointments, patient records, and medical bills.",

      Furn: "Sinmar For Furnished Flats System",
      Furn_Disc:
        "A dedicated system for managing furnished apartment reservations and rentals with daily reports ",

      Pr: "Sinmar For Property Management",
      Pr_Disc:
        " A professional system for managing properties, rentals, contracts, and landlord and tenant records.",
      Maintenance: " Sinmar For Car Maintenance ",
      Maintenance_Disc:
        "A system for managing car maintenance operations, invoice records, breakdown details and spare parts. ",
      Car_sale: "Sinmar Car Sales.",
      Car_sale_Disc:
        "A specialized program for car showrooms that includes managing offers, sales, customers, and installments.",
      Hr: "  Sinmar for Human Resources",
      Hr_Disc:
        "An integrated personnel affairs system for managing attendance, salaries, vacations, and personal files.",
      Commu: "Sinmar Communications System",
      commu_Disc:
        "A solution for managing telecom companies, customer services, billing, and shipment tracking.",
      serv: "Sinmar Services",
      serv_Disc:
        " A system for managing public service companies, distributing tasks, and providing performance reports.",
      fuel: "Sinmar for gas stations",
      Fule_Disc:
        "Fuel station system for pumping and inventory management, and daily accounting for each pump.",
      Our_Product: "Our Products",
      Our_Product_h: "The Role of Al-Alawi Star for Computer Systems",
      Our_Product_p:
        " Supporting the work and production environment and enhancing the value of  modern technologies, software, and systems that serve companies, institutions, entrepreneurs, and the economy in Saudi Arabia and our customers abroad by providing innovative, high-quality technical solutions at competitive prices.",
      Explore_More: "Our innovative solutions",
      Our_Partners_p:
        "Our clients are our partners in success, thanks to God; Alawi Stars for Computer Systems has more than 10,000 clients so far in all disciplines, and achieved a great success in a short time through the production of the distinct software, these are some of our clients that we had the honor to serve them",
      Our_Partners: " Our Partners  ",
      ReadMore: "Read More",
      SUBSCRIBERS: "SUBSCRIBERS",
      PROJECTS: "PROJECTS",
      AWARDS: "AWARDS",
      Ourproducts: "Products & Solutions",
      Ourproducts_text:
        "Explore smart, scalable solutions to optimize your business performance.",
      Show: "View Details",
      our_mission: "Our Mission",
      our_vision: "Our vision",
      our_values: "Our values",

      mission_text:
        "Supporting the work environment and enhancing the value of modern technologies and systems that serve businesses, institutions, and entrepreneurs. We develop technical solutions according to the highest standards and in a competitive manner that meets customer needs.",

      vision_text:
        "We strive to expand our business locally and globally, becoming the preferred choice for our clients by applying best technical practices and providing reliable and innovative solutions that serve all sectors.",

      value_1_title: "dedication",
      value_1_text:
        "We provide the highest levels of service and commitment to on-time delivery with full support for our clients' needs at all stages.",

      value_2_title: "Privacy",
      value_2_text:
        "We are committed to providing systems and solutions that ensure data confidentiality and give users confidence in achieving the best performance and results.",

      value_3_title: "trust",
      value_3_text:
        "We build long-term relationships based on trust and credibility with our clients and partners to achieve common goals.",

      value_4_title: "Creativity",
      value_4_text:
        "We offer innovative solutions in unconventional ways, which distinguish us in the market and make our services truly valuable.",

      value_5_title: "development",
      value_5_text:
        "We are constantly developing ourselves and supporting our teams to ensure we deliver the latest technologies and solutions in accordance with best practices.",

      value_6_title: "Technical intelligence",
      value_6_text:
        "We combine deep technical knowledge with an understanding of customer needs to provide smart solutions that keep pace with market changes.",

      why_choose_us: "Why Choose Us",
      why_choose_us_desc:
        "We Provide Creative Solutions. Globally engage cross-media leadership skills before cross-media innovation. Develop standardized platforms without robust applications. Conveniently go forward with collaboration and idea-sharing.",
      reason_1_title: "Professional Team Member",
      reason_2_title: "Implements Business  ",
      reason_3_title: "Lifetime Free Services ",
      reason_4_title: "  Affordable Pricing Plans ",
      Call_US: "Call us anytime",
      Started: "Welcome to Sinmar",
      CTA_Text:
        "Integrated software solutions to manage your business efficiently and professionally",
      Tech_Solutions: "Tech Solutions",
      Tech_Text:
        " We enhance our clients' excellence and provide them with lasting operational efficiency by providing the best technical solutions.",
      pc: "computers ",
      Pc_text:
        "We have an exceptional team dedicated to meeting our clients' needs, providing them with the best and most powerful brands of computers, servers, and peripherals, as well as devices with special specifications, enabling them to innovate and achieve.",

      OS: "Operating programs",
      Os_text:
        "We provide our customers with a variety of operating software, including genuine Windows software, Office software, server operating systems, and appropriate peripherals.",
      PS: " Protection systems",
      PS_text:
        "We supply antivirus, anti-hacking, and anti-piracy systems to enhance cybersecurity and protect devices and data.",

      Ha: "Hardware accessories",
      Ha_text:
        "We offer high-quality, long-lasting printers, scanners, POS terminals, and other accessories at an affordable price.",
      LAN: "Local Area Networks (LANs)",
      LAN_text:
        "We build local area networks for homes, offices, and small businesses, and provide equipment, maintenance services, and full technical support.",
      WAN: "Wide Area Networks (WAN)",
      WAN_text:
        "We provide wide area networks with advanced equipment and infrastructure, connecting users across large geographic areas efficiently and cost-effectively.",
      Full_Name: " Full Name",
      Phones: " Phone Numbers",
      Subject: "Subject",
      Message: "Message",
      WhatsApp: " WhatsApp",
      Phone: "Phone",
      working_hours: " working hours",
      Jeddah_working_hours: " 9 AM - 6 PM ",
      Riyadh_working_hours: " 9 AM - 6 PM",
      address_1_contact:
        "Malaz Area – Sitten St. – Alyah Commercial Center -1st Floor – Office 1",
      address_2_contact:
        "Bughdadiah Area, Hail St., Hail Comm. Center, 2nd Floor,Office 21",
      CTA_About: "Why us ? ",
      Sales_Email: " Sales Email",
      Features: "Features",

      Inv_acc_feature_1: "Accounting tree up to 10 sub-levels",
      Inv_acc_feature_2: "Export to Excel, Word, PDF, Txt",
      Inv_acc_feature_3:
        "The ability to save copies of documents within the journal entry",
      Inv_acc_feature_4: "In addition to 99 branches",
      Inv_acc_feature_5:
        "The advantage of multiple and individual cost centers",
      Inv_acc_feature_6: "SQL Server database",
      Inv_acc_feature_7:
        "A bond of receipt or cash disbursement in a sequence independent of the term",
      Inv_acc_feature_8:
        "The possibility of separating the cash and check in the exchange receivable",
      Inv_acc_feature_9: "Auto backup",
      Inv_acc_feature_10: "A multi-year and branch account statement",
      Inv_acc_feature_11: "A multi-year and branched general professor",
      Inv_acc_feature_12: "Independent powers for each user",
      Inv_acc_feature_13: "Fixed assets and calculating depreciation",
      Inv_acc_feature_14: "The possibility of dealing with documentary credits",
      Inv_acc_feature_15: "Diverse detailed reports and custom display options",
      Inv_acc_feature_16: "Revaluation of a fixed asset",

      acc_feature_1: "Accounting tree with up to 10 sub-levels",
      acc_feature_2: "Export to Excel, Word, PDF, Txt",
      acc_feature_3: "Attach scanned documents to journal entries",
      acc_feature_4: "Add up to 99 branches",
      acc_feature_5: "Support for multiple and individual cost centers",
      acc_feature_6: "SQL Server database",
      acc_feature_7:
        "Cash receipt/payment voucher with separate numbering from credit",
      acc_feature_8:
        "Separate handling of cash and checks in receipts/payments",
      acc_feature_9: "Automatic backup",
      acc_feature_10: "Multi-year, multi-branch account statements",
      acc_feature_11: "Multi-year, multi-branch general ledger",
      acc_feature_12: "Independent permissions for each user",
      acc_feature_13: "Fixed assets and depreciation calculation",
      acc_feature_14: "Support for letter of credit transactions",
      acc_feature_15: "Detailed and customizable reports",
      acc_feature_16: "Revaluation of fixed assets",

      Inv_feature_1: "Supports variable VAT",
      Inv_feature_2: "Export to Excel, Word, PDF, Txt",
      Inv_feature_3: "Store item images within the item file",
      Inv_feature_4: "Connect and manage up to 99 branches",
      Inv_feature_5: "Sales invoice with POS features",
      Inv_feature_6: "SQL Server database",
      Inv_feature_7: "Electronic scale integration with items",
      Inv_feature_8: "Automatic backup",
      Inv_feature_9: "Generate and print item barcode",
      Inv_feature_10: "Independent permissions for each user",
      Inv_feature_11: "Purchase expenses calculation within the invoice",
      Inv_feature_12: "Multi-language support",
      Inv_feature_13: "Item alternatives linked to the item file",
      Inv_feature_14: "Automatic inventory vouchers and Excel import",
      Inv_feature_15:
        "Auto-generate suggested orders based on item movement with editing options",
      Inv_feature_16:
        "Deal with suppliers in their original currency with automatic cost calculation",
      Inv_feature_17: "Sales and purchase movement charts",
      Inv_feature_18: "Over 300 detailed reports for full inventory tracking",

      Pr_feature_1: "Pr feature 1",
      Pr_feature_2: "Pr feature 2",
      Pr_feature_3: "Pr feature 3",
      Pr_feature_4: "Pr feature 4",
      Pr_feature_5: "Pr feature 5",
      Pr_feature_6: "Pr feature 6",
      Pr_feature_7: "Pr feature 7",
      Pr_feature_8: "Pr feature 8",
      Pr_feature_9: "Pr feature 9",
      Pr_feature_10: "Pr feature 10",

      Furn_feature_1: "Furn feature 1",
      Furn_feature_2: "Furn feature 2",
      Furn_feature_3: "Furn feature 3",
      Furn_feature_4: "Furn feature 4",
      Furn_feature_5: "Furn feature 5",
      Furn_feature_6: "Furn feature 6",
      Furn_feature_7: "Furn feature 7",
      Furn_feature_8: "Furn feature 8",
      Med_feature_1: "Supports variable VAT",
      Med_feature_2: "User-friendly multi-function patient invoice screen",
      Med_feature_3: "Export to Excel, Word, PDF, Txt",
      Med_feature_4: "Ability to archive images in the patient's file",
      Med_feature_5: "Integration with Waseel and D.H.S companies",
      Med_feature_6: "Automatic claim submission to insurance companies",
      Med_feature_7: "SQL Server database",
      Med_feature_8:
        "Includes a complete electronic medical record for doctors",
      Med_feature_9: "Automatic backup",
      Med_feature_10: "Detailed support for insurance contracts per agreement",
      Med_feature_11: "Independent permissions for each user",
      Med_feature_12: "Integration with pharmacy and general accounting",
      Med_feature_13: "Multi-language support",
      Med_feature_14:
        "Supports radiology and lab departments with result archiving",
      Med_feature_15: "SMS messaging feature",
      Med_feature_16: "Issuing and checking sick leaves",
      Med_feature_17: "Patient appointment scheduling linked to the doctor",
      Med_feature_18: "Dental charting with treated tooth selection",
      Med_feature_19: "Pregnancy and physiotherapy follow-up programs",

      Maintenance_feature_1:
        "Easy screens to prepare the system’s initial data",
      Maintenance_feature_2:
        "Department and engineer info with linking each department to technicians or engineers",
      Maintenance_feature_3:
        "Workshop service info linked to relevant departments",
      Maintenance_feature_4: "Supports variable VAT as per ZATCA guidelines",
      Maintenance_feature_5: "Export to Excel, Word, and PDF",
      Maintenance_feature_6: "Send reminder SMS messages to customers",
      Maintenance_feature_7: "Multiple payment methods: Cash, SPAN, Visa, etc.",
      Maintenance_feature_8:
        "E-invoice creation and integration with accounting system",
      Maintenance_feature_9:
        "Open multiple job cards for one vehicle and track step-by-step",
      Maintenance_feature_10:
        "Easy vehicle data entry and search within the workshop",
      Maintenance_feature_11: "Track vehicle status easily",
      Maintenance_feature_12:
        "Track technician and engineer activity through detailed reports",
      Maintenance_feature_13: "Track spare parts issued to workshop vehicles",
      Maintenance_feature_14: "Monitor workshop stock levels",
      Maintenance_feature_15:
        "Monitor external purchase invoices related to workshop vehicles",
      Maintenance_feature_16:
        "Easily create job orders and capture client requirements",
      Maintenance_feature_17:
        "Issue maintenance invoices based on completed job orders",
      Maintenance_feature_18: "Track customer balances and financial status",
      Maintenance_feature_19:
        "Comprehensive reports on job orders and maintenance invoices",
      Maintenance_feature_20:
        "Helpful screens throughout the system when needed",
      Maintenance_feature_21:
        "Ability to issue repair quotations before starting",
      Maintenance_feature_22: "Issue job order and auto-link to invoice",
      Maintenance_feature_23:
        "Statement with car exit date and time from the workshop",
      Maintenance_feature_24:
        "Receipts and payments for clients and suppliers with SMS on payment",
      Maintenance_feature_25:
        "Settlement vouchers to adjust client balances with discounts",
      Maintenance_feature_26:
        "External purchases/services screen with auto-posting",
      Maintenance_feature_27:
        "Detailed reports on departments, engineers, and job orders",
      Maintenance_feature_28:
        "Profit/loss and maintenance invoice reports for any period",
      Maintenance_feature_29:
        "Detailed reports on spare parts purchases (internal/external) linked to vehicles",
      Maintenance_feature_30:
        "Warranty by specific date or mileage in job order",
      Maintenance_feature_31: "Set job order completion date",
      Maintenance_feature_32:
        "Auto-transfer unfinished job orders to new year after year-end closing",
      Maintenance_feature_33: "Multi-branch linking for stock monitoring",
      Maintenance_feature_34: "Link multiple cars to a single customer",
      Maintenance_feature_35: "Automatic backup to server and external media",

      Car_sale_feature_1: "Comprehensive screen for entering car information",
      Car_sale_feature_2:
        "Sub-screens for models, specifications, and additional features",
      Car_sale_feature_3: "Plate issuance, delivery, and receipt vouchers",
      Car_sale_feature_4:
        "Ability to add, remove, or inventory cars with detailed reports",
      Car_sale_feature_5: "Sales invoices, quotations, and preparation",
      Car_sale_feature_6: "Supports variable VAT as per ZATCA guidelines",
      Car_sale_feature_7:
        "Comprehensive information on sales reps and additional services",
      Car_sale_feature_8:
        "Purchase invoices with automatic calculation of foreign currency and extra costs",
      Car_sale_feature_9:
        "Order memos in local or foreign currency with detailed reports",
      Car_sale_feature_10:
        "Customer and supplier data with full transaction history",
      Car_sale_feature_11: "Receipts, payments, and settlement vouchers",
      Car_sale_feature_12:
        "Account statements for clients and suppliers with financial status overview",
      Car_sale_feature_13: "Sales and purchase graphical reports",
      Car_sale_feature_14: "Dedicated profit and loss reports",
      Car_sale_feature_15: "Over 50 comprehensive and detailed reports",

      Hr_feature_1:
        "Full flexibility in entering employee personal info, qualifications, and experience",
      Hr_feature_2: "Ability to save and archive documents for each employee",
      Hr_feature_3:
        "Option to store employee photos for use in official documents",
      Hr_feature_4: "Full control over defining allowance item labels",
      Hr_feature_5: "Automatic processing of employee advances and deductions",
      Hr_feature_6: "Automated issuance of vacation entitlements settlement",
      Hr_feature_7: "Payroll generation by branch or department classification",
      Hr_feature_8: "Display payroll statements or separate payslips",
      Hr_feature_9:
        "Detailed tracking of employee vacations, tickets, and entitlements",
      Hr_feature_10: "Issuance of overtime orders and payroll integration",
      Hr_feature_11: "Tracking and posting of employee deduction orders",
      Hr_feature_12: "Archiving information for off-service employees",
      Hr_feature_13: "Transfer employees between departments or branches",
      Hr_feature_14:
        "Monitor employee contracts, their terms, start and end dates",
      Hr_feature_15: "Print passport forms through a simplified screen",
      Hr_feature_16: "Over 70 detailed, diverse, and comprehensive reports",
      Hr_feature_17:
        "Reports on official documents expiring within a set period",
      Hr_feature_18: "Track attendance and its effect on payroll",
      Hr_feature_19: "Calculate social insurance for Saudis and expatriates",
      Hr_feature_20:
        "Flexible system for tracking and analyzing employee performance annually and monthly",

      Commu_feature_1: "Connect branches to the main headquarters",
      Commu_feature_2: "Ability to link up to 99 branches together",
      Commu_feature_3: "System supports 3 linking methods for client selection",
      Commu_feature_4:
        "1. Collection Mode – Manually or automatically gather branch data from the main HQ",
      Commu_feature_5:
        "Data collection can follow a sequence set by the client",
      Commu_feature_6: "Collect all branch data: invoices, items, and accounts",
      Commu_feature_7: "Automatic synchronization every hour or as needed",
      Commu_feature_8:
        "Once data is collected, HQ can access it without re-connecting",
      Commu_feature_9:
        "2. Data Sending – Share only inventory balances between branches",
      Commu_feature_10: "View other branches' stock from the items screen",
      Commu_feature_11:
        "3. Direct Mode – Direct connection and real-time access",
      Commu_feature_12:
        "Log into a branch directly to perform settlements or view reports",
      Commu_feature_13:
        "Full flexibility in choosing the connection method suitable for operations",
      Commu_feature_14:
        "Technical support to ensure proper integration between branches",
      Commu_feature_15:
        "High-level encryption and data security during branch communication",

      serv_feature_1:
        "Suitable for all service sales sectors with flexibility and ease",
      serv_feature_2: "Supports variable VAT according to ZATCA regulations",
      serv_feature_3: "Define service pricing by type",
      serv_feature_4: "Easily convert receipts or quotations into invoices",
      serv_feature_5:
        "Track financial transactions with clients and suppliers via comprehensive reports",
      serv_feature_6: "Simple and complete receipt voucher for laundries",
      serv_feature_7: "Profit reports per invoice for any time period",
      serv_feature_8: "Graphical dashboards to support management decisions",
      serv_feature_9: "Comprehensive sales activity reports by desired period",
      serv_feature_10: "Simple vouchers for receipt, payment, and settlement",
      serv_feature_11: "Client statements for any time range",
      serv_feature_12: "Ability to present service quotations and pricing",
      serv_feature_13: "Client info with credit limits",
      serv_feature_14: "Receipts, payments, and settlements for clients",
      serv_feature_15: "Easy-to-use invoice screen",
      serv_feature_16: "Multiple helpful tools within the invoice",
      serv_feature_17: "Detailed and varied invoice reports",
      serv_feature_18: "Client account statements",
      serv_feature_19: "Invoice profit reports",
      serv_feature_20: "Monthly sales graph",

      fuel_feature_1: "Compatible with all large and small fuel stations",
      fuel_feature_2: "Unlimited pumps and tanks can be added",
      fuel_feature_3: "User-friendly interface for invoices and vouchers",
      fuel_feature_4:
        "Track movement of gasoline, diesel, kerosene, and others",
      fuel_feature_5: "Sell various external services like car wash, etc.",
      fuel_feature_6:
        "Create customer and supplier accounts with balance and reports tracking",
      fuel_feature_7:
        "Calculate evaporated fuel quantity upon receiving purchases",
      fuel_feature_8: "Monitor fuel usage with detailed pump reports",
      fuel_feature_9:
        "Track payments to suppliers and credit customers (individuals or companies)",
      fuel_feature_10: "Monitor remaining fuel balances in all tanks",
      fuel_feature_11: "Assign special pricing for credit customers",
      fuel_feature_12:
        "Change prices anytime according to authority requirements",
      fuel_feature_13:
        "Daily sales/purchase reports and easy access to financial data",
      fuel_feature_14:
        "Integration with Sinmar Accounting and auto-posting to journal entries",
      fuel_feature_15:
        "Comprehensive, categorized, and detailed document reports",
      fuel_feature_16: "Remote work monitoring with ease",
      fuel_feature_17: "Remote branch connectivity",
      fuel_feature_18: "Add extra services like car wash, tire repair, etc.",
      fuel_feature_19: "Issue and track customer coupons",

      Digital_Started: "Start Your Digital Journey Today",
      Digital_CTA_Text:
        "Explore our advanced digital systems and contact us to find the perfect fit for your business",

      About_Started: " Who are we and why Sinmar? ",
      About_CTA_Text:
        "Learn about our vision, mission, and how we work to make technology serve your business.",
      Tech_Started: "Innovative Tech Solutions to Grow Your Business",
      Tech_CTA_Text:
        "Take advantage of our smart systems designed for various industries — start evolving today",
        our_clients_title: "Our Valued Partners & Clients",
client_name_1: "Hira Building Stars Establishment",
client_details_1: "Construction & Development",
client_name_2: "Al-Alawi Establishment",
client_details_2: "5 Branches",
client_name_3: "Omar Wali Asaad Establishment",
client_details_3: "General Trade",
client_name_4: "Advanced Science Establishment",
client_details_4: "Educational Solutions",
client_name_5: "Layan Saudi Company",
client_details_5: "Industrial Solutions",
client_name_6: "Al-Hayat Pharmacies Group",
client_details_6: "10 Branches",
client_name_7: "Lamar Medical Complex",
client_details_7: "Healthcare Services",
client_name_8: "Saqoor Al-Saudiah Pharmacy",
client_details_8: "Pharmaceuticals",
client_name_9: "Tarim Makkah Establishment",
client_details_9: "5 Branches",
client_name_10: "Al-Amoudi Al-Qashou Company",
client_details_10: "Contracting",
client_name_11: "Golden Decision for Trading",
client_details_11: "Diverse Trading",
client_name_12: "Memadia for Medicines & Herbs Establishment",
client_details_12: "Medical Supplies",
client_name_13: "Burhan Al-Qana'a Establishment",
client_details_13: "Consulting Services",
client_name_14: "Al-Furaih Property Management",
client_details_14: "5 Branches",
client_name_15: "Medical Breakdown Establishment",
client_details_15: "Medical Services",
client_name_16: "Rafed Mohamed Alhamed Company",
client_details_16: "5 Branches",
client_name_17: "Mohamed Ejaz Al-Qahtani Establishment",
client_details_17: "Real Estate Development",
client_name_18: "Al-Emarat Economic Center Company",
client_details_18: "Economic Consulting",
client_name_19: "Al-Ghad Company",
client_details_19: "5 Branches",
client_name_20: "Dr. Ahmed Basha Complex",
client_details_20: "Dental & Esthetic Services",

copyRights: "Sinmarsoft . All rights reserved.",

    },

  },

  ar: {
    translation: {
      home: "الصفحة الرئيسية ",
      products: "المنتجات",
      services: "الخدمات",
      about: "معلومات عنا",
      news: "الأخبار",
      contact: "اتصل بنا",
      CompanyName: "نجوم العلاوي لنظم الكمبيوتر ",
      companyDescription:
        "انطلقت نجوم العلاوي لنظم الكمبيوتر عام ١٩٩٤ لتوفر للمجتمع والاقتصاد السعودي الطامح للنمو والريادة آنذاك الحلول البرمجية والأنظمة الالكترونية بالإضافة لأنواع متعددة من الخدمات والمنتجات التقنية المتطورة التي تتواكب مع تطلعات الشركات والمؤسسات الخاصة في ذلك الوقت، ولكي تساهم من خلال دورها في تسهيل وظيفة الإدارة وتحسين الإنتاج ، وحوكمة وضبط العمل، واستطاعت منذ اللحظة الأولى من انطلاقها كسب ثقة عملائها وترسيخ مكانتها كشريك تقني موثوق ولا غنى عنه لدى الكثير من الجهات الحكومية والخاصة، واستمرت على تقديم الأداء المتميز وتقديم الخدمات والمنتجات التقنية المتطورة والتي استطاعت من خلالها العمل على إثراء منظومة الإدارة وعالم الأنظمة والبرمجيات والتكنولوجيا الحديثة بالمملكة، وساعدتها في تحقيق قفزات هائلة في حجم مخرجاتها وهوامش أرباحها ومستوى تميزها في العمل والإدارة والتنظيم، وتتبعت في هذا الإطار منهجية عمل دائمة التطور ترتكز في المقام الأول على رضا العملاء وتقديم منتجات وخدمات مثالية وموثوقة، فأصبحت نجوم العلاوى مزود الخدمة الأول وبائع التقنية الخبير لدى ما يزيد عن ١٠ آلاف شركة ومؤسسة داخل وخارج المملكة.",
      title: "نجوم العلاوي",
      footertext:
        "أن نكون شركة رائدة ومعترف بها عالميًا في مجال صناعة البرمجيات",
      Our_Location: "العنوان ",
      working_hours: " اوقات العمل ",
      Jeddah_working_hours: " 9 صباحا - 6 مساء ",
      Riyadh_working_hours: " 9 صباحا - 6 مساء",
      Email: "البريد الالكتروني ",
      Fax: "فاكس",
      WhatsApp: "واتس اب",

      Phone: "الهاتف",
      Digital_Started: "ابدأ رحلتك الرقمية اليوم",
      Digital_CTA_Text:
        "اكتشف أنظمتنا الرقمية المتطورة وتواصل معنا لتحديد الأنسب لنشاطك التجاري",
      Full_Name: "الأسم بالكامل ",
      Phones: " ارقام الهاتف ",
      Subject: "الموضوع",
      Message: "الرسالة",
      QuickLinks: "روابط سريعة",
      HeadOfficeRiyadh: "المركز الرئيسي -الرياض ",
      Jeddah_Branch: "فرع جدة ",
      address_1: "الملز - شارع صلاح الدين ",
      address_2: "البغدادية الغربية",
      address_1_contact:
        "الملز-شارع صلاح الدين – مركز عالية  التجاري – الدور الأول – مكتب 1",
      address_2_contact:
        "البغدادية الغربية - شارع حائل - مركز حائل التجاري - الدور الثاني - مدخل أ - مكتب 21",
      FAQs: "الأسئلة الشائعة ",
      Privacy_Policy: "سياسة الخصوصية",
      Terms_Conditions: "الشروط والأحكام",
      Follow_us: "تابعنا ",
      time: " ص 8:00  - 12:30 م 3:00 م - 7:30 م",
      Testimonial: "ماذا قالوا عنا",

      Stories: "قصص واقعية، نتائج حقيقية",
      Testimonial_text:
        "اقرأ آراء عملائنا حول رحلتهم معنا. نفخر بتقديم قيمة حقيقية.",

         Testimonial_name_1: "مؤسسة يوسف سعيد أبو بكر باوزير التجارية",
  Testimonial_Location_1: "جدة، السعودية",
  Testimonial_text_1: "نقدر جهود نجوم العلاوي لنظم الكمبيوتر في صيانة وتطوير برامجنا (المبيعات والمحاسبة) وثقتنا بهم دائمة، فهم شريك أساسي في نجاحنا. نأمل استمرار هذا الأداء المتميز وشكرًا جزيلاً.",

  Testimonial_name_2: "مجمع بسمات الأسرة الطبي",
  Testimonial_Location_2: "نجران، السعودية",
  Testimonial_text_2: "نشكر نجوم العلاوي وبرنامج سنمار على حسن التعامل وسرعة الاستجابة والدعم الفني طوال 4 سنوات، مما كان له أثر إيجابي في تنظيم عمل المجمع. نتمنى لكم المزيد من التقدم والازدهار.",

  Testimonial_name_3: "مؤسسة تقنية القطع الجديدة للتجارة", // Updated based on previous analysis
  Testimonial_Location_3: "جدة، السعودية",
  Testimonial_text_3: "نقدم الشكر والعرفان لنجوم العلاوي ونظم سنمار التطبيقية، لجهودهم في صيانة وتطوير البرامج المتميزة التي نعتمد عليها في المخزون والمبيعات والمحاسبة. نثمن شراكتنا ونتمنى استمرار تميزكم.",

  Testimonial_name_4: "مجمع عيادات د. حسن أبو حثرة الطبية",
  Testimonial_Location_4: "المملكة العربية السعودية",
  Testimonial_text_4: "شهادة شكر وتقدير لمؤسسة نجوم العلاوي وبرنامج سنمار على دعمهم المستمر في إنجاح وتطوير عملنا. نُعرب عن خالص شكرنا وامتناننا لجهودكم القيمة ومساهمتكم الفعالة.",

  Testimonial_name_5: "مؤسسة خيال الضوء التجارية", // Updated based on previous analysis
  Testimonial_Location_5: "جدة، السعودية",
  Testimonial_text_5: "نُعرب عن فخرنا وامتناننا للإنجازات العديدة والجهود المفيدة التي قدمتموها لنا. خبراتكم واستجابتكم السريعة ساعدتنا على تخطي الصعاب. لكم أسمى آيات الشكر والتقدير، ونتمنى لكم دوام التوفيق.",

  Testimonial_name_6: "شركة راشد محمد المحمد الحمد",
  Testimonial_Location_6: "الرياض، السعودية",
  Testimonial_text_6: "نشكر شركة نجوم العلاوي ونظم سنمار التطبيقية على الصيانة والتطوير المستمر لبرامجنا (المخزون والمبيعات والمحاسبة). ثقتنا بكم شريك دائم في نجاحنا، ونأمل استمرار هذا الأداء المتميز.",

  Testimonial_name_7: "شركة البحر المتوسط للاتصالات السلكية الحديثة",
  Testimonial_Location_7: "جدة، السعودية",
  Testimonial_text_7: "خطاب شكر وتقدير لمدير مؤسسة نجوم العلاوي لنظم الكمبيوتر على جهودهم المستمرة في تطوير أنظمة سنمار المحاسبية. نفخر بمواكبة تقدمكم، ونتمنى لكم دوام النجاح والتوفيق. لكم منا جزيل الشكر.",

  Testimonial_name_8: "مجمع محمد خليل فقيه الطبي التخصصي",
  Testimonial_Location_8: "المملكة العربية السعودية",
  Testimonial_text_8: "نشكر نجوم العلاوي وبرنامج سنمار على التعاون البناء في ضبط الجودة وتطوير استخدام الكمبيوتر لتنظيم العمل بالعيادات. نُقدر احترافيتكم وتعاملكم المتميز، ونتمنى لكم المزيد من التقدير والازدهار.",

  Testimonial_name_9: "مؤسسة عبدالله صالح بن عبد اليحيى للتجارة",
  Testimonial_Location_9: "الرياض، السعودية",
  Testimonial_text_9: "شكر وتقدير لنجوم العلاوي ونظم سنمار التطبيقية على صيانة وتطوير برامجنا (المخزون، المبيعات، المحاسبة). ثقتنا بكم دائمة كشريك نجاح، ونأمل استمرار تميزكم. لكم منا جزيل الشكر والعرفان.",

  Testimonial_name_10: "شركة طارق وياسين المحدودة", // Adding the last one (Tareq & Yasien Co.)
  Testimonial_Location_10: "مكة المكرمة، السعودية",
  Testimonial_text_10: "بكل الاعتزاز والفخر والتقدير، تتقدم تيامكو بخالص الشكر لنجوم العلاوي ونظم سنمار لجهودهم في تطوير البرنامج والمساعدة في حل المشكلات. نتمنى لكم دوام التوفيق.",
      Partners_text: "لدينا أكثر من 10000 شريك",
      Hero_heading: "الحل الذكي لإدارة أعمالك وتتبع المخزون بكل سهولة",
      Hero_text:
        " معتمد من هيئة الزكاة والضريبة والجمارك السعودية للفوترة الإلكترونية (المرحلتين الأولى والثانية)",
      Hero_P:
        " ابدأ التحول الرقمي اليوم! جهّز فريقك ← اختبر النظام ← حدّث بياناتك ← راجع الفواتير ← تابع آخر التحديثات الرسمية.",
      Start_btn: "ابدأ الآن",
      About_Us: "من نحن",
      About_text: "نُساهم في تطوير قطاع تكنولوجيا المعلومات منذ عام 1994.",
      About_p:
        "تم تأسيس نجوم العلاوى لنظم الكمبيوتر في عام 1994 في مدينة الرياض في المملكة العربية السعودية بهدف إنتاج أنظمة تجارية متكاملة ذات قدرات وإمكانيات تضاهى من حيث الأداء الأنظمة الغربية المتطورة وتتميز بالخصوصية من حيث العمل في بيئات ثنائية اللغـة ومن حيث تلبية جميع احتياجات العملاء ولهذا تم تطوير عدة أنظمة تجارية مختلفة تخدم عدة مجالات متنوعة و أصبح لدينا قاعدة كبيرة من العملاء في شتى أنحاء المملكة.",
      Serv_h: " تطوير انظمة الأعمال ",
      serv_p: "حلول برمجية تخدم قطاعات وصناعات الأعمال المختلفة",
      ERP: "أنظمة تخطيط موارد المؤسسة",
      serv2_p:
        " حلول ERP شاملة تغطي المحاسبة، الموارد البشرية، المخزون، المبيعات، وأكثر",
      SERVICES_WE_PROVIDE: "الخدمات التي نقدمها",
      Desktop_Applications: "تطبيقات سطح المكتب",
      Cloud_Based_Solutions: "الانظمة السحابية",
      Inv_acc: "سنمار  للمحاسبة والمخزون ",
      acc_Inv_Disc:
        "نظام متكامل للمحاسبة والمخازن يدعم الفروع، الباركود، والتقارير الضريبية المتقدمة.",
      acc: "سنمار  للمحاسبة العامة",
      acc_desc:
        "نظام شامل لإدارة الحسابات العامة والقيود اليومية والتقارير المالية الدقيقة.",
      Inv: "سنمار للمخزون العام    ",
      Inv_Disc:
        "أداة فعالة لإدارة المخزون، تتبع المنتجات، وربطها مع الموردين والفواتير.",
      Med: " سنمار  للنظام الطبي",
      Med_Disc:
        "حل طبي متكامل لإدارة العيادات والمواعيد وسجلات المرضى والفواتير الطبية.",
      Furn: "سنمار  لنظام الشقق المفروشة",
      Furn_Disc:
        "نظام مخصص لإدارة حجوزات وتأجير الشقق المفروشة مع تقارير يومية وسجل العملاء.",
      Pr: "سنمار  لإدارة الممتلكات",
      Pr_Disc:
        " نظام احترافي لإدارة العقارات والإيجارات والعقود وسجلات الملاك والمستأجرين.",
      Maintenance: " سنمار  لصيانة السيارات",
      Maintenance_Disc:
        "نظام لإدارة عمليات صيانة السيارات، سجل الفواتير، وتفاصيل الأعطال وقطع الغيار.",
      Car_sale: "سنمار لمبيعات السيارات.",
      Car_sale_Disc:
        "برنامج متخصص لمعارض السيارات يشمل إدارة العروض، البيع، العملاء، والأقساط.",
      Hr: "سنمار لشؤون الموظفين",
      Hr_Disc:
        " نظام شؤون موظفين متكامل لإدارة الحضور، الرواتب، والإجازات والملفات الشخصية.",
      Commu: "نظام سنمار للاتصالات ",
      commu_Disc:
        "حل موجه لإدارة شركات الاتصالات وخدمات العملاء والفواتير ومتابعة الشحنات.",
      serv: "سنمار للخدمات ",
      serv_Disc:
        " نظام لإدارة شركات الخدمات العامة وتوزيع المهام وتقديم تقارير الأداء.",
      fuel: "سنمار لمحطات الوقود ",
      Fule_Disc:
        "نظام محطات الوقود لإدارة الضخ والمخزون، والمحاسبة اليومية لكل مضخة.",
      Our_Product: "منتجاتنا",
      Our_Product_h: "دور نجوم العلاوي لأنظمة الكمبيوتر",
      Our_Product_p:
        "دعم بيئة العمل والإنتاج وتعزيز قيمة التقنيات الحديثة والبرمجيات والأنظمة التي تخدم الشركات والمؤسسات ورواد الأعمال والاقتصاد في المملكة العربية السعودية وعملائنا في الخارج من خلال توفير حلول تقنية مبتكرة وعالية الجودة بأسعار تنافسية.",
      Explore_More: "  حلولنا المبتكرة ",
      Our_Partners: "شركاؤنا ",
      Our_Partners_p:
        "عملاؤنا هم شركاؤنا في النجاح بفضل الله؛ حيث تمتلك شركة نجوم العلوي لأنظمة الحاسب الآلي أكثر من 10000 عميل حتى الآن في جميع التخصصات، وحققت نجاحاً باهراً في وقت قصير من خلال إنتاج البرمجيات المتميزة، هؤلاء بعض عملائنا الذين تشرفنا بخدمتهم",
      Partners_Heading: "تعرف على شركائنا",
      ReadMore: "شاهد المزيد",
      SUBSCRIBERS: "المشتركين",
      PROJECTS: "المشاريع",
      AWARDS: "الجوائز",
      Ourproducts: "المنتجات والحلول",
      Ourproducts_text: "اكتشف حلولًا ذكية ومرنة لتحسين أداء أعمالك.",

      Show: "اطّلع على المزيد",
      our_mission: "رسالتنا",
      our_vision: "رؤيتنا",
      our_values: "قيمنا",

      mission_text:
        "دعم بيئة العمل وتعزيز قيمة التقنيات والأنظمة الحديثة التي تخدم الشركات والمؤسسات ورواد الأعمال. نعمل على تطوير الحلول التقنية وفقًا لأعلى المعايير وبأسلوب تنافسي يتناسب مع حاجة العملاء.",

      vision_text:
        "نسعى لتوسيع نطاق عملنا محليًا وعالميًا، لنصبح الخيار الأفضل لعملائنا من خلال تطبيق أفضل الممارسات التقنية وتوفير حلول موثوقة ومبتكرة تخدم جميع القطاعات.",

      value_1_title: "التفاني",
      value_1_text:
        "نقدم أعلى مستويات الخدمة والالتزام بالتسليم في الوقت المحدد مع دعم كامل لاحتياجات عملائنا في جميع المراحل.",

      value_2_title: "الخصوصية",
      value_2_text:
        "نحرص على توفير الأنظمة والحلول التي تضمن سرية البيانات وتمنح المستخدم الثقة في تحقيق أفضل أداء ونتائج.",

      value_3_title: "الثقة",
      value_3_text:
        "نبني علاقات طويلة الأمد مبنية على الثقة والمصداقية مع عملائنا وشركائنا لتحقيق أهداف مشتركة.",

      value_4_title: "الإبداع",
      value_4_text:
        "نقدم حلولاً مبتكرة بطرق غير تقليدية، تميزنا في السوق وتجعل من خدماتنا ذات قيمة حقيقية.",

      value_5_title: "التطوير",
      value_5_text:
        "نطور أنفسنا دائمًا وندعم فرق العمل لضمان تقديم أحدث التقنيات والحلول وفق أفضل الممارسات.",

      value_6_title: "الذكاء التقني",
      value_6_text:
        "نمزج بين المعرفة التقنية العميقة وفهم احتياجات العملاء لنقدم حلولًا ذكية تواكب متغيرات السوق.",

      why_choose_us: "لماذا نحن؟",
      why_choose_us_desc:
        "نقدّم حلولًا إبداعية. نستخدم مهارات القيادة عبر الوسائط قبل تطوير الابتكار. نبني منصات قياسية دون تطبيقات معقدة. نتقدم بسهولة عبر التعاون وتبادل الأفكار",
      reason_1_title: "فريق عمل محترف",
      reason_2_title: "تنفيذ الأعمال باحترافية",
      reason_3_title: "خدمات مجانية مدى الحياة",
      reason_4_title: "خطط أسعار مناسبة",
      Call_US: "اتصل بنا في اي وقت ",
      Started: " مرحبًا بك في نجوم العلاوي ",
      CTA_Text: " حلول برمجية متكاملة لإدارة أعمالك بكفاءة واحترافية",
      Tech_Solutions: "حلولنا التقنية",
      Tech_Text:
        "  نعزز تميز عملائنا ونمنحهم كفاءة تشغيلية دائمة من خلال تقديم أفضل  الحلول التقنية.",
      pc: "أجهزة الكمبيوتر",
      Pc_text:
        "لدينا فريق عمل استثنائي يلبي حاجة عملائنا ويوفر لهم أجهزة الكمبيوتر من سيرفرات أو وحدات طرفية من أفضل وأقوى العلامات التجارية، وكذلك الأجهزة ذات المواصفات الخاصة لنمكنهم من الإبداع والإنجاز.",

      OS: "البرامج التشغيلية",
      Os_text:
        "نوفر حاجة عملائنا من برامج التشغيل المختلفة مثل برامج الويندوز الأصلية، برامج الأوفيس، وأنظمة تشغيل السيرفرات والوحدات الطرفية المناسبة.",
      PS: "أنظمة الحماية",
      PS_text:
        "نقوم بتوريد أنظمة مكافحة الفيروسات، ومكافحة الهكر والاختراق لتعزيز الأمن السيبراني وحماية الأجهزة والبيانات.",

      Ha: "ملحقات الأجهزة",
      Ha_text:
        "نوفر طابعات، ماسحات ضوئية، ونقاط بيع وغيرهم من الملحقات عالية الجودة ذات العمر الطويل والسعر المميز.",
      LAN: "الشبكات المحلية (LAN)",
      LAN_text:
        "نبني شبكات اتصال محلية للمنازل والمكاتب والمنشآت الصغيرة، ونوفر المعدات وخدمات الصيانة والدعم الفني الكامل.",
      WAN: "الشبكات واسعة النطاق (WAN)",
      WAN_text:
        "نوفر الشبكات الواسعة بمعدات وبنية تحتية متقدمة، لربط المستخدمين بمناطق جغرافية كبيرة بفعالية وبتكلفة مناسبة.",
      CTA_About: "   لماذا نحن ؟",
      Features: "المواصفات ",
      Sales_Email: " البريد الإلكتروني للمبيعات",

      Inv_acc_feature_1: "شجرة محاسبية حتى 10 مستويات فرعية",
      Inv_acc_feature_2: "تصدير إلى Excel و Word و PDF و Txt",
      Inv_acc_feature_3: "إمكانية حفظ نسخ من المستندات داخل قيد اليومية",
      Inv_acc_feature_4: "دعم حتى 99 فرعًا",
      Inv_acc_feature_5: "ميزة مراكز التكلفة المتعددة والفردية",
      Inv_acc_feature_6: "قاعدة بيانات SQL Server",
      Inv_acc_feature_7: "سند قبض أو صرف نقدي بتسلسل مستقل عن المدة",
      Inv_acc_feature_8: "إمكانية فصل النقدي عن الشيكات في القبض أو الصرف",
      Inv_acc_feature_9: "نسخ احتياطي تلقائي",
      Inv_acc_feature_10: "كشف حساب متعدد السنوات والفروع",
      Inv_acc_feature_11: "أستاذ عام متعدد السنوات والفروع",
      Inv_acc_feature_12: "صلاحيات مستقلة لكل مستخدم",
      Inv_acc_feature_13: "الأصول الثابتة واحتساب الإهلاك",
      Inv_acc_feature_14: "إمكانية التعامل مع الاعتمادات المستندية",
      Inv_acc_feature_15: "تقارير تفصيلية متنوعة وخيارات عرض مخصصة",

      Inv_feature_1: "يدعم ضريبة القيمة المضافة المتغيرة",
      Inv_feature_2: "التصدير إلى Excel, Word, PDF, Txt",
      Inv_feature_3: "إمكانية حفظ صور للصنف داخل ملف الصنف",
      Inv_feature_4: "تجميع وربط الفروع حتى 99 فرعًا",
      Inv_feature_5: "فاتورة مبيعات بمزايا نقاط البيع",
      Inv_feature_6: "قاعدة بيانات SQL Server",
      Inv_feature_7: "الميزان الإلكتروني وربطه مع الأصناف",
      Inv_feature_8: "النسخ الاحتياطي التلقائي",
      Inv_feature_9: "إنشاء وطباعة الباركود للصنف",
      Inv_feature_10: "صلاحيات مستقلة لكل مستخدم",
      Inv_feature_11: "احتساب مصاريف الشراء داخل فاتورة الشراء",
      Inv_feature_12: "متعدد اللغات",
      Inv_feature_13: "بدائل للأصناف وربطها بملف الأصناف",
      Inv_feature_14: "سندات جرد تلقائي والاستيراد من إكسل",
      Inv_feature_15:
        "إصدار طلبيات مقترحة أتوماتيكيًا حسب حركة الصنف والتعديل عليها",
      Inv_feature_16:
        "التعامل مع الموردين بالعملة الأصلية للمورد واحتساب آلي للتكلفة",
      Inv_feature_17: "رسوم بيانية لحركة المبيعات والمشتريات",
      Inv_feature_18:
        "أكثر من 300 تقرير شامل ولمتابعة جميع حركات المخزون بالتفصيل",

      acc_feature_1: "شجرة محاسبة حتى 10 مستويات فرعية",
      acc_feature_2: "التصدير إلى Excel, Word, PDF, Txt",
      acc_feature_3: "إمكانية حفظ صور من المستندات داخل قيد اليومية",
      acc_feature_4: "إضافة حتى 99 فرعًا",
      acc_feature_5: "ميزة مراكز التكلفة المتعددة والفردية",
      acc_feature_6: "قاعدة بيانات SQL Server",
      acc_feature_7: "سند قبض أو صرف نقدي بتسلسل مستقل عن الآجل",
      acc_feature_8: "إمكانية فصل النقدي والشيك في القبض والصرف",
      acc_feature_9: "النسخ الاحتياطي التلقائي",
      acc_feature_10: "كشف حساب متعدد السنوات والفروع",
      acc_feature_11: "أستاذ عام متعدد السنوات والفروع",
      acc_feature_12: "صلاحيات مستقلة لكل مستخدم",
      acc_feature_13: "الأصول الثابتة واحتساب الإهلاكات",
      acc_feature_14: "إمكانية التعامل مع الاعتمادات المستندية",
      acc_feature_15: "تقارير مفصلة ومتنوعة وخيارات عرضها حسب الطلب",
      acc_feature_16: "إعادة تقييم أصل ثابت",

      Med_feature_1: "يدعم ضريبة القيمة المضافة المتغيرة",
      Med_feature_2: "شاشة سهلة الاستخدام متعددة الوظائف لفاتورة المريض",
      Med_feature_3: "التصدير إلى Excel, Word, PDF, Txt",
      Med_feature_4: "إمكانية حفظ أرشيف صور داخل ملف المريض",
      Med_feature_5: "ربط البرنامج مع شركتي وصيل و D.H.S",
      Med_feature_6: "الرفع الآلي للمطالبات الخاصة بشركات التأمين",
      Med_feature_7: "قاعدة بيانات SQL Server",
      Med_feature_8: "يحتوي على الملف الإلكتروني المتكامل لعمل الطبيب",
      Med_feature_9: "النسخ الاحتياطي التلقائي",
      Med_feature_10: "يدعم عقود شركات التأمين تفصيليًا حسب كل عقد",
      Med_feature_11: "صلاحيات مستقلة لكل مستخدم",
      Med_feature_12: "الربط مع الصيدلية والمحاسبة العامة",
      Med_feature_13: "متعدد اللغات",
      Med_feature_14: "يدعم ميزة قسم الأشعة والمختبر مع حفظ النتائج",
      Med_feature_15: "خاصية إرسال رسائل S.M.S",
      Med_feature_16: "إصدار الإجازات المرضية والاستفسار عنها",
      Med_feature_17: "جدولة مواعيد المرضى وربطها مع الطبيب المعالج",
      Med_feature_18: "رسمة الأسنان وإمكانية اختيار السن المعالج",
      Med_feature_19: "برامج متابعة الحمل والعلاج الطبيعي",

      fuel_feature_1: "يعمل مع جميع محطات البنزين الكبيرة والصغيرة",
      fuel_feature_2: "إمكانية إضافة عدد غير محدود من الطرمبات والخزانات",
      fuel_feature_3: "سهولة في الاستخدام من خلال شاشة الفواتير والسندات",
      fuel_feature_4: "متابعة لحركة البنزين والديزل والكيروسين وغيرها",
      fuel_feature_5: "إمكانية بيع خدمات خارجية متنوعة مثل الغسيل وغيرها",
      fuel_feature_6:
        "إمكانية فتح حساب للعملاء والموردين ومتابعة أرصدتهم وتنوع التقارير عنهم",
      fuel_feature_7:
        "إمكانية حساب الكمية المتطايرة عند إدخال المشتريات من الوقود ومشتقاته",
      fuel_feature_8:
        "إمكانية مراقبة الوقود وصرفه من خلال تقارير شاملة عن الطرمبات",
      fuel_feature_9: "متابعة السداد للموردين والعملاء الآجل أفراد أو شركات",
      fuel_feature_10: "متابعة الأرصدة المتبقية من الوقود في جميع الخزانات",
      fuel_feature_11: "إمكانية تحديد أسعار خاصة للعملاء الآجل",
      fuel_feature_12:
        "إمكانية تغيير الأسعار في أي وقت حسب متطلبات الجهة المعنية",
      fuel_feature_13:
        "تقارير عن المبيعات والمشتريات اليومية وسهولة الوصول للتقارير المالية",
      fuel_feature_14:
        "ربط النظام بنظام سنمار للمحاسبة وترحيل الحركات اليومية إلى قيود آلية",
      fuel_feature_15: "تقارير شاملة ومفصلة ومصنفة لمتابعة جميع المستندات",
      fuel_feature_16: "إمكانية مراقبة العمل عن بُعد دون عناء",
      fuel_feature_17: "إمكانية ربط الفروع عن بُعد",
      fuel_feature_18:
        "إمكانية إضافة الأنشطة الإضافية مثل مغسلة سيارات أو بنشر أو غيره",
      fuel_feature_19: "إمكانية إصدار كوبونات للعملاء ومتابعتها",

      serv_feature_1: "مناسب لجميع قطاعات بيع الخدمات بكل مرونة وسهولة",
      serv_feature_2:
        "يدعم ضريبة القيمة المضافة المتغيرة حسب توجيهات الهيئة العامة للزكاة والدخل",
      serv_feature_3: "تعريف بأسعار الخدمات حسب أنواعها",
      serv_feature_4: "سهولة تحويل سند الاستلام أو عرض الأسعار إلى فاتورة",
      serv_feature_5:
        "متابعة الحركة المالية للعملاء والموردين حسب تقارير شاملة",
      serv_feature_6: "سند استلام مبسط وشامل لحاجة المغاسل",
      serv_feature_7: "تقارير ربحية الفواتير حسب الفترة الزمنية المطلوبة",
      serv_feature_8: "شاشات رسم بياني لتسهيل قرارات الإدارة",
      serv_feature_9:
        "تقارير وافية عن حركة المبيعات حسب الفترة الزمنية المطلوبة",
      serv_feature_10: "سندات قبض وصرف وتسوية مبسطة",
      serv_feature_11: "كشف حساب للعميل خلال أي فترة زمنية مطلوبة",
      serv_feature_12: "إمكانية تقديم عروض أسعار بالخدمات وأسعارها",
      serv_feature_13: "معلومات عن العملاء وحد للمديونية",
      serv_feature_14: "سندات للقبض والصرف والتسوية للعملاء",
      serv_feature_15: "شاشة للفواتير سهلة الاستخدام",
      serv_feature_16: "أدوات مساعدة متعددة داخل الفاتورة",
      serv_feature_17: "تقارير مفصلة ومتعددة للفواتير",
      serv_feature_18: "كشوف حسابات للعملاء",
      serv_feature_19: "تقارير عن أرباح الفواتير",
      serv_feature_20: "رسم بياني للمبيعات الشهرية",

      Maintenance_feature_1: "شاشات سهلة لتجهيز المعلومات الأولية للنظام",
      Maintenance_feature_2:
        "معلومات الأقسام والمهندسين وربط كل قسم بالفني أو المهندس",
      Maintenance_feature_3: "معلومات خدمات الورشة وربطها بالقسم المختص",
      Maintenance_feature_4:
        "يدعم ضريبة القيمة المضافة المتغيرة حسب توجيهات الهيئة العامة للزكاة والدخل",
      Maintenance_feature_5: "خاصية التصدير إلى Excel و Word و PDF",
      Maintenance_feature_6: "إرسال رسائل تذكيرية للعملاء S.M.S",
      Maintenance_feature_7:
        "تعدد طرق الدفع نقدي – سبان – فيزا وغيرها حسب طلب العميل",
      Maintenance_feature_8:
        "إنشاء الفاتورة الإلكترونية بكل سهولة وربطها مع النظام المحاسبي",
      Maintenance_feature_9:
        "إمكانية فتح أكثر من كرت لكل سيارة موجودة بالورشة ومتابعتها خطوة بخطوة",
      Maintenance_feature_10:
        "سهولة إدخال بيانات المركبة والبحث عن معلومات السيارات المدخلة إلى الورشة",
      Maintenance_feature_11: "إمكانية متابعة حالة السيارات بسهولة ويسر",
      Maintenance_feature_12:
        "متابعة نشاط الفنيين والمهندسين في عدة تقارير متنوعة",
      Maintenance_feature_13: "متابعة قطع الغيار المخرجة لسيارات الورشة",
      Maintenance_feature_14: "مراقبة المخزون الخاص بالورشة",
      Maintenance_feature_15:
        "مراقبة فواتير المشتريات الخارجية الخاصة بسيارات الورشة",
      Maintenance_feature_16: "سهولة إنشاء أوامر التشغيل ومعرفة متطلبات العميل",
      Maintenance_feature_17:
        "سهولة إصدار فواتير الصيانة حسب أوامر التشغيل المنتهية",
      Maintenance_feature_18: "متابعة أرصدة العملاء وحالتهم المالية",
      Maintenance_feature_19: "تقارير شاملة عن أوامر التشغيل وفواتير الصيانة",
      Maintenance_feature_20: "شاشات مساعدة عند الحاجة في جميع شاشات النظام",
      Maintenance_feature_21:
        "إمكانية عمل تسعيرات إصلاح قبل البدء بعملية الإصلاح",
      Maintenance_feature_22: "إصدار أمر تشغيل للسيارة وترحيله مباشرة للفاتورة",
      Maintenance_feature_23: "بيان بتاريخ ووقت خروج السيارة من الورشة",
      Maintenance_feature_24:
        "سندات قبض وصرف لتسديد العملاء والموردين مع إمكانية إرسال رسائل نصية عند السداد",
      Maintenance_feature_25:
        "سندات تسوية لضبط أرصدة العملاء عند وجود خصومات إضافية",
      Maintenance_feature_26: "شاشة مشتريات وخدمات خارجية والترحيل التلقائي",
      Maintenance_feature_27:
        "تقارير مفصلة وشاملة للأقسام والمهندسين وأوامر التشغيل تفصيلياً",
      Maintenance_feature_28:
        "تقارير الأرباح والخسائر وفواتير الصيانة لأي فترة مطلوبة",
      Maintenance_feature_29:
        "تقارير مفصلة بمشتريات قطع الغيار الخارجية والداخلية وربطها مع السيارات",
      Maintenance_feature_30:
        "إمكانية عمل ضمان بتاريخ محدد أو عدد كيلومترات في أمر التشغيل",
      Maintenance_feature_31: "إمكانية تحديد تاريخ انتهاء العمل في أمر التشغيل",
      Maintenance_feature_32:
        "نقل أوامر التشغيل غير المنتهية تلقائياً للعام الجديد بعد الإقفال السنوي",
      Maintenance_feature_33: "يمكن ربط عدة فروع لمراقبة المخزون",
      Maintenance_feature_34: "يمكن ربط أكثر من سيارة في عميل واحد",
      Maintenance_feature_35:
        "نسخ احتياطي تلقائي للبيانات في السيرفر والوسائط الخارجية",

      Car_sale_feature_1: "شاشة متكاملة لإدخال معلومات السيارات",
      Car_sale_feature_2:
        "شاشات فرعية خاصة للموديلات والمواصفات والإضافات...الخ.",
      Car_sale_feature_3: "سندات إصدار اللوحات، التسليم والاستلام",
      Car_sale_feature_4:
        "إمكانية عمل إخراج أو إدخال أو جرد للسيارات مع تقارير مفصلة وشاملة",
      Car_sale_feature_5: "فواتير البيع، عروض الأسعار، والتحضير",
      Car_sale_feature_6:
        "يدعم ضريبة القيمة المضافة المتغيرة حسب توجيهات الهيئة العامة للزكاة والدخل",
      Car_sale_feature_7: "معلومات شاملة عن المندوبين والخدمات الأخرى",
      Car_sale_feature_8:
        "فواتير الشراء وإمكانية الاحتساب التلقائي للعملات الأجنبية والمصاريف الإضافية",
      Car_sale_feature_9:
        "مذكرة الطلبيات بالعملة المحلية أو الأجنبية وتقارير مفصلة وشاملة",
      Car_sale_feature_10: "معلومات العملاء والموردين وبيان بجميع حركاتهم",
      Car_sale_feature_11: "سندات القبض والصرف والتسوية",
      Car_sale_feature_12:
        "كشوفات الحسابات للعملاء والموردين وبيان وضعهم المالي",
      Car_sale_feature_13: "رسم بياني للمبيعات والمشتريات",
      Car_sale_feature_14: "تقارير خاصة للأرباح والخسائر",
      Car_sale_feature_15: "أكثر من 50 تقرير مفصل وشامل",

      Hr_feature_1:
        "مرونة كاملة لإدخال معلومات الموظف الشخصية و المؤهلات والخبرات",
      Hr_feature_2: "إمكانية حفظ وأرشفة المستندات الخاصة بكل موظف",
      Hr_feature_3: "إمكانية حفظ صورة الموظف لطباعتها على المستندات الخاصة به",
      Hr_feature_4: "الحرية الكاملة في تعريف مسميات بنود البدلات",
      Hr_feature_5: "معالجة آلية لسلف الموظفين من حيث اقتطاعها",
      Hr_feature_6: "إصدار آلي لتسوية مستحقات إجازات الموظفين",
      Hr_feature_7: "مسير الرواتب حسب التصنيف المطلوب من فرع أو إدارة",
      Hr_feature_8: "عرض مسير للرواتب أو كشوفات منفصلة",
      Hr_feature_9: "متابعة دقيقة لإجازات الموظفين وتذاكرهم ومستحقاتهم",
      Hr_feature_10: "إصدار أمر الأجر الإضافي ومعالجته في مسير الرواتب",
      Hr_feature_11: "متابعة أوامر الخصم التي تتم على الموظفين وترحيلها",
      Hr_feature_12: "حفظ جميع المعلومات الخاصة بالموظفين خارج الخدمة",
      Hr_feature_13: "إمكانية نقل موظف من إدارة إلى أخرى أو فرع إلى آخر",
      Hr_feature_14: "متابعة لعقود العاملين وبنودها وتواريخ بدئها وانتهائها",
      Hr_feature_15: "إمكانية طباعة استمارة الجوازات من خلال شاشة مبسطة",
      Hr_feature_16: "أكثر من 70 تقرير متنوع ومفصل وشامل لكل جزئية في النظام",
      Hr_feature_17:
        "تقارير متنوعة عن الوثائق الرسمية التي ستنتهي خلال فترة معينة",
      Hr_feature_18:
        "متابعة الحضور والانصراف للموظفين والتأثير في مسير الرواتب",
      Hr_feature_19: "احتساب التأمينات الاجتماعية للسعوديين والمقيمين",
      Hr_feature_20: "نظام مرن لتتبع وتحليل الأداء الوظيفي السنوي والشهري",

      Commu_feature_1: "ربط الفروع بالمركز الرئيسي",
      Commu_feature_2: "إمكانية ربط حتى 99 فرع مع بعضهم",
      Commu_feature_3: "يحتوي النظام على 3 طرق للربط يمكن للعميل الاختيار منها",
      Commu_feature_4:
        "أولاً: نظام التجميع - جمع بيانات الفروع يدوياً أو تلقائياً من خلال المركز الرئيسي",
      Commu_feature_5: "إمكانية ترتيب جمع البيانات من الفروع حسب تسلسل العميل",
      Commu_feature_6: "جمع جميع البيانات: فواتير، أصناف، حسابات من كل فرع",
      Commu_feature_7: "مزامنة تلقائية لسحب البيانات كل ساعة أو حسب الحاجة",
      Commu_feature_8:
        "عرض بيانات الفروع دون الحاجة لإعادة الاتصال بعد التجميع",
      Commu_feature_9:
        "ثانياً: نظام الإرسال - إرسال أرصدة المخزون فقط لبقية الفروع",
      Commu_feature_10: "عرض أرصدة الأصناف للفروع الأخرى من خلال شاشة الأصناف",
      Commu_feature_11:
        "ثالثاً: النظام المباشر - الاتصال المباشر والعمل كوحدة فرعية",
      Commu_feature_12:
        "الدخول المباشر إلى الفرع للاطلاع على التقارير أو إجراء تسويات",
      Commu_feature_13:
        "مرونة كاملة في اختيار طريقة الربط التي تناسب طبيعة العمل",
      Commu_feature_14: "دعم فني للتأكد من تكامل الربط بين الفروع",
      Commu_feature_15:
        "أمان عالي وتشفير لحماية البيانات أثناء النقل بين الفروع",

      Tech_Started: "حلول تقنية مبتكرة لنمو أعمالك",
      Tech_CTA_Text:
        "استفد من أنظمتنا الذكية المصممة لتلائم مختلف المجالات وابدأ التطوير الآن",


      Inv_acc_feature_16: "إعادة تقييم الأصل الثابت",
      Sending: "جارٍ الإرسال...",
      Message_Sent_Successfully: "تم إرسال الرسالة بنجاح.",
      Message_Sending_Failed: "حدث خطأ أثناء الإرسال. حاول مرة أخرى.",
      About_Started: " من نحن ولماذا سنمار؟  ",
      About_CTA_Text:
        "تعرف على رؤيتنا ورسالتنا وكيف نعمل لنجعل التقنية في خدمة أعمالك",
        our_clients_title: "شركاؤنا وعملاؤنا الكرام",
client_name_1: "مؤسسة حراء نجوم البناء",
client_details_1: "مقاولات وتطوير",
client_name_2: "مؤسسة العليوي",
client_details_2: "5 فروع",
client_name_3: "مؤسسة عمر ولي أسعد",
client_details_3: "تجارة عامة",
client_name_4: "مؤسسة العلوم المتطورة",
client_details_4: "حلول تعليمية",
client_name_5: "شركة ليان السعودية",
client_details_5: "حلول صناعية",
client_name_6: "مجموعة صيدليات الحياة",
client_details_6: "10 فروع",
client_name_7: "مجمع لمار الطبي",
client_details_7: "خدمات صحية",
client_name_8: "صيدلية صقور السعودية",
client_details_8: "أدوية",
client_name_9: "مؤسسة طارم مكة",
client_details_9: "5 فروع",
client_name_10: "الشركة العمودي للقشوع",
client_details_10: "مقاولات",
client_name_11: "القرار الذهبي للتجارة",
client_details_11: "تجارة متنوعة",
client_name_12: "مؤسسة ميماديا للأدوية والأعشاب",
client_details_12: "مستلزمات طبية",
client_name_13: "مؤسسة برهان القناعة",
client_details_13: "استشارات",
client_name_14: "إدارة أملاك الفريح منصب",
client_details_14: "5 فروع",
client_name_15: "مؤسسة فكة الطبية",
client_details_15: "خدمات طبية",
client_name_16: "شركة رافد محمد المحمد الحمد",
client_details_16: "5 فروع",
client_name_17: "مؤسسة محمد إجاز القحطاني",
client_details_17: "تطوير عقاري",
client_name_18: "شركة مركز الإمارات الاقتصادي",
client_details_18: "استشارات اقتصادية",
client_name_19: "شركة الغد",
client_details_19: "5 فروع",
client_name_20: "مجمع الدكتور أحمد باشا",
client_details_20: "خدمات أسنان وتجميل",

copyRights: "جميع الحقوق محفوظة لشركة سنمار سوفت",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
