import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Alawistars for Information Systems!",
      home: "Home",
      products: "Products",
      path_products: "products",
      all_products: "All Products",
      services: "Services",
      path_services: "services",
      about: "About Us",
      path_about: "about",
      news: "News",
      path_news: "news",
      contact: "Contact Us",
      path_contact: "contact",
      blog: "Blog",
      path_blog: "blog",
      blog_subtitle: "Latest articles and stories from our team.",
      blog_loading: "Loading blog posts...",
      blog_no_posts: "No posts available.",
      blog_search_label: "Search the blog",
      blog_search_placeholder: "Search blog...",
      blog_categories_label: "Categories",
      blog_recent_posts: "Recent Posts",
      home_blog_section_title: "Latest Blogs",
      home_blog_section_subtitle: "Keep up with our most recent news, insights, and product updates.",
      view_all_blog_posts: "View all blog posts",
      blog_categories: ["Software Development", "Digital Marketing", "Artificial Intelligence", "ERP Systems", "Project Management"],
      call_us: "Call Us",
      blog_pagination_previous: "Previous",
      blog_pagination_next: "Next",
      read_more: "Read more",
      post_not_found: "Post not found",
      admin_login: "Admin Login",
      admin_username: "Username",
      admin_password: "Password",
      admin_login_btn: "Login",
      admin_login_error: "Invalid username or password.",
      admin_login_success: "Authenticated successfully.",
      admin_panel: "Blog Admin Panel",
      admin_add_post: "Add New Post",
      admin_form_category_label: "Category",
      admin_form_category_placeholder: "Select category",
      admin_form_category_add_placeholder: "Add new category",
      admin_form_category_add_button: "Add",
      admin_category_all: "All Categories",
      cta_heading: "Need help? We’re here for you.",
      cta_subheading: "Reach out to our support team for any questions or technical assistance.",
      cta_help_title: "Need help? We are here for you.",
      cta_help_subtitle: "Contact our support team for inquiries or technical assistance.",
      cta_help_phone: "+966 50 619 4863",
      cta_help_button: "Contact us",
      admin_logout_btn: "Logout",
      admin_edit_post: "Edit Post",
      admin_title_en: "Title (EN)",
      admin_title_ar: "Title (AR)",
      admin_slug: "Slug",
      admin_slug_hint: "Optional, auto-generated from title",
      admin_date: "Date",
      admin_excerpt_en: "Excerpt (EN)",
      admin_excerpt_ar: "Excerpt (AR)",
      admin_image: "Upload Image",
      admin_content_en: "Content (EN)",
      admin_content_ar: "Content (AR)",
      admin_content_hint: "Write your content here...",
      admin_update: "Update",
      admin_create: "Create",
      admin_reset: "Reset",
      admin_posts_list: "Posts List",
      admin_table_title: "Title",
      admin_table_date: "Date",
      admin_table_slug: "Slug",
      admin_table_category: "Category",
      admin_table_actions: "Actions",
      admin_no_posts: "No posts yet.",
      admin_edit_btn: "Edit",
      admin_delete_btn: "Delete",
      admin_delete_confirm: "Delete this post?",
      admin_delete_success: "Post deleted.",
      admin_create_success: "Post created.",
      admin_update_success: "Post updated.",
      admin_error_required: "English title and content are required.",
      admin_error_save: "Failed to save post.",
      Privacy_Policy: "Privacy Policy",
      path_PrivacyPolicy: "PrivacyPolicy",
      Terms_Conditions: "Terms & Conditions",
      path_TermsAndConditions: "TermsAndConditions",
      FAQs: "FAQs",
      path_FAQ: "FAQ",
      path_AllClients: "AllClients",
      title: "Alawistars for Information Systems",
      meta_default_title: "Alawistars for Information Systems",
      meta_default_description:
        "Advanced software and tech solutions since 1994.",
      meta_home_title: "Home |Alawistars",
      meta_home_description:
        "Welcome to Alawistars– your source for comprehensive and innovative tech solutions.",

      meta_products_title: "Products | Alawistars",
      meta_products_description:
        "Explore our premium collection of software products and technical systems.",

      meta_services_title: "Services | Alawistars",
      meta_services_description:
        "We provide integrated technology services to support your company’s goals.",

      meta_about_title: "About Us | Alawistars",
      meta_about_description:
        "Learn about our journey and expertise in software and systems.",

      meta_news_title: "News | Alawistars",
      meta_news_description:
        "Follow the latest company updates and technology news.",

      meta_contact_title: "Contact Us | Alawistars",
      meta_contact_description: "Reach out to us for inquiries or technical support.",
      meta_blog_title: "Blog | Alawistars",
      meta_blog_description: "Read our latest articles and updates.",
       
      CompanyName: "Alawistars for Information Systems",
      companyDescriptionPart1:
        "Alawistars for Information Systems was launched in 1994 to provide the Saudi society and economy aspiring for growth and leadership with software solutions, electronic systems, and a wide range of modern technical services and products.",
      companyDescriptionPart2:
        "From the first day, we built trust with our customers as a reliable technology partner for government and private institutions, delivering advanced systems that improve management, productivity, and business governance across more than 10,000 companies inside and outside the Kingdom.",
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
      Testimonial_name_1: "Blue Mark.",
      Testimonial_Location_1: "Jeddah, Saudi Arabia",
      Testimonial_text_1:
        "We appreciate the efforts of Alawistars for Information Systems for the maintenance and development of our programs. Our trust in them is continuous, as they are a key partner in our success. We hope for the continuation of this excellent performance. Thank you very much.",

      Testimonial_name_2: "Alpha Meem Store.",
      Testimonial_Location_2: "Riyadh, Saudi Arabia",
      Testimonial_text_2:
        "We thank Alawistars for Information Systems and the Sinmar system for their professionalism, quick response, and technical support over the past 4 years, which positively impacted the organization of our center. We wish you continued progress and prosperity.",

      Testimonial_name_3: "Spert Medical.",
      Testimonial_Location_3: "Jeddah, Saudi Arabia",
      Testimonial_text_3:
        "We extend our thanks and gratitude to Alawistars for Information Systems and Sinmar Systems for their efforts in maintaining and developing the excellent programs we rely on for inventory, sales, and accounting. We value our partnership and wish you continued excellence.",

      Testimonial_name_4: "Adam Medical Co.",
      Testimonial_Location_4: "Saudi Arabia",
      Testimonial_text_4:
        "A certificate of appreciation to Alawistars for Information Systems and the Sinmar system for their continuous support in the success and development of our operations. We sincerely thank you for your valuable efforts and effective contributions.",

      Testimonial_name_5: "Medical Cities.",
      Testimonial_Location_5: "Jeddah, Saudi Arabia",
      Testimonial_text_5:
        "We proudly express our gratitude for the many achievements and valuable efforts you have provided. Your expertise and quick response have helped us overcome challenges. You have our utmost thanks and appreciation, and we wish you continued success.",

      Testimonial_name_6: "Rashed Mohammed Al-Hamad Co.",
      Testimonial_Location_6: "Riyadh, Saudi Arabia",
      Testimonial_text_6:
        "We thank Alawistars for Information Systems and Sinmar Systems for the ongoing maintenance and development of our programs (inventory, sales, and accounting). Our trust in you is a lasting partnership for success, and we hope this excellent performance continues.",

      Testimonial_name_7: "Ahmed Ibrahim Al-Matroody Trading Co.",
      Testimonial_Location_7: "Jeddah, Saudi Arabia",
      Testimonial_text_7:
        "A letter of thanks and appreciation to the Director of Alawistars for Information Systems for their continuous efforts in developing the Sinmar accounting systems. We are proud to keep up with your progress and wish you lasting success. Our deepest thanks to you.",

      Testimonial_name_8: "Tabarak & Raya Company.",
      Testimonial_Location_8: "Saudi Arabia",
      Testimonial_text_8:
        "We thank the Alawistars for Information Systems team and Sinmar Systems for the fruitful collaboration in developing our commercial systems and improving work efficiency. We highly value your professionalism and commitment, and look forward to more shared success.",

      Testimonial_name_9: "AL-JASSER ",
      Testimonial_Location_9: "Riyadh, Saudi Arabia",
      Testimonial_text_9:
        "Thanks and appreciation to Alawistars for Information Systems and Sinmar Systems for maintaining and developing our programs (inventory, sales, accounting). Our trust in you is continuous as a success partner, and we hope your excellence continues. Sincere thanks and gratitude.",

      Testimonial_name_10: "Parts & More ",
      Testimonial_Location_10: "Riyadh, Saudi Arabia",
      Testimonial_text_10:
        "With pride, appreciation, and gratitude, Parts & More  extends sincere thanks to Alawistars for Information Systems and Sinmar Systems for their efforts in program development and problem solving. We wish you continued success.",

      Testimonial_name_11: "Masarat Al-Jeel Trading Co.",
      Testimonial_Location_11: "Riyadh, Saudi Arabia",
      Testimonial_text_11:
        "Thanks and appreciation to Alawistars for Information Systems and Sinmar Systems for maintaining and developing our programs (inventory, sales, accounting). Our trust in you is continuous as a success partner, and we hope your excellence continues. Sincere thanks and gratitude.",

      Testimonial_name_12: "Nasser Sulaiman Sattam Al-Juhani Trading Est.",
      Testimonial_Location_12: "Riyadh, Saudi Arabia",
      Testimonial_text_12:
        "Thanks and appreciation to Alawistars for Information Systems and the Sinmar system for maintaining and developing our programs. Our trust in you is continuous as a success partner, and we hope your excellence continues. Many thanks to you.",
      Partners_Heading: "Meet our  partners",
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
        "Our clients are our partners in success,  Alawistars for Information Systems has more than 10,000 clients so far in all disciplines, and achieved a great success in a short time through the production of the distinct software, these are some of our clients that we had the honor to serve them",
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
      reason_1_desc: "A skilled team that delivers technical solutions with care, reliability, and deep business understanding.",
      reason_2_title: "Implements Business  ",
      reason_2_desc: "We turn business requirements into efficient systems that help your operations move faster and smarter.",
      reason_3_title: "Lifetime Free Services ",
      reason_3_desc: "Ongoing support and updates to help your systems stay stable without surprise fees.",
      reason_4_title: "  Affordable Pricing Plans ",
      reason_4_desc: "Flexible pricing that makes advanced technical solutions affordable for growing organizations.",
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
      Full_Name: " Name of the establishment or company",
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

      Pr_feature_1: "Accounting tree up to 10 sub-levels",
      Pr_feature_2: "Export to Excel, Word, PDF, Txt",
      Pr_feature_3: "Ability to save document images inside journal entries",
      Pr_feature_4: "Add up to 99 branches",
      Pr_feature_5: "Multi and single cost center support",
      Pr_feature_6: "SQL Server database",
      Pr_feature_7:
        "Cash receipt or payment vouchers with independent sequence",
      Pr_feature_8: "Separation of cash and cheque in receipts and payments",
      Pr_feature_9: "Automatic backup",
      Pr_feature_10: "Multi-year, multi-branch account statements",
      Pr_feature_11: "Multi-year, multi-branch general ledger",
      Pr_feature_12: "Independent permissions for each user",
      Pr_feature_13: "Fixed assets and depreciation calculation",
      Pr_feature_14: "Support for handling L/Cs (Letters of Credit)",
      Pr_feature_15: "Detailed and customizable reports",
      Pr_feature_16: "Fixed asset revaluation",

      Furn_feature_1: "Accounting tree up to 10 sub-levels",
      Furn_feature_2: "Export to Excel, Word, PDF, Txt",
      Furn_feature_3: "Ability to save document images inside journal entries",
      Furn_feature_4: "Add up to 99 branches",
      Furn_feature_5: "Multi and single cost center support",
      Furn_feature_6: "SQL Server database",
      Furn_feature_7:
        "Cash receipt or payment vouchers with independent sequence",
      Furn_feature_8: "Separation of cash and cheque in receipts and payments",

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

      client_name_1: "Al-Markaz Al-Iqtisadi Contracting Co.",
      client_details_1: "General Contracting",

      client_name_2: "Spark Media Advertising Est.",
      client_details_2: "Advertising",

      client_name_3: "Al-Ehata Financial Company",
      client_details_3: "Financial Trading",

      client_name_4: "Al-Ma'moura Int’l Aviation Services Est.",
      client_details_4: "Hajj & Umrah",

      client_name_5: "Tamas Saudi Contracting Co.",
      client_details_5: "General Contracting",

      client_name_6: "Nasser Hamad Al-Houti Est. - 3 Branches",
      client_details_6: "Ceramic & Marble",

      client_name_7: "Naqd Investment Company",
      client_details_7: "Financial Trading",

      client_name_8: "Aalam Al-Ajwaa Aviation Services",
      client_details_8: "Flight Booking & Travel",

      client_name_9: "Hiraa Building Materials Est.",
      client_details_9: "Building Materials",

      client_name_10: "Sulaiman Al-Rais Sons Trading Co.",
      client_details_10: "Iron Sales",

      client_name_11: "Jordan Technical Agency",
      client_details_11: "Radiator Manufacturing",

      client_name_12: "Al-Forat Al-Awsat Trading",
      client_details_12: "Electrical Appliances",

      client_name_13: "Al-Shatta Hotel Group",
      client_details_13: "Hotel Services",

      client_name_14: "Prince Mutaib Property Management",
      client_details_14: "Commercial Center Leasing",

      client_name_15: "Fifth Corner Est.",
      client_details_15: "Hajj & Umrah",

      client_name_16: "Al-Forat Al-Awsat Trading",
      client_details_16: "Electrical Appliances",

      client_name_17: "Al-Amoudi Aluminum Co.",
      client_details_17: "Aluminum & Accessories",

      client_name_18: "Talae Mekka Est. - 5 Branches",
      client_details_18: "Aluminum & Accessories",

      client_name_19: "Al-Wajih Sports Company",
      client_details_19: "Electrical Appliances",

      client_name_20: "Al-Futouh Company - 4 Branches",
      client_details_20: "Aluminum & Accessories",

      client_name_21: "Al-Manea Clothing Est. - Najran (6 Branches)",
      client_details_21: "Clothing Sales",

      client_name_22: "Bajaafar Electronics Est. - 2 Branches",
      client_details_22: "Electrical Appliances",

      client_name_23: "Al-Awael Est. - 5 Branches",
      client_details_23: "Aluminum & Accessories",

      client_name_24: "Tihama Oasis Supermarket",
      client_details_24: "Supermarket",

      client_name_25: "Saad Omar Al-Waal Trading Est.",
      client_details_25: "Home & Restaurant Supplies",

      client_name_26: "Al-Hafiti Est. - 5 Branches",
      client_details_26: "Aluminum & Accessories",

      client_name_27: "Al-Manea Clothing Est. - Najran (6 Branches)",
      client_details_27: "Clothing Sales",

      client_name_28: "Eshraqet Al-Ibtisama Pharmacy",
      client_details_28: "Pharmacy",

      client_name_29: "Al-Shakerin Dental Clinics - 4 Branches",
      client_details_29: "Clinics",

      client_name_30: "Enaya & Nadhara Medical Complex",
      client_details_30: "Clinics",

      client_name_31: "Protein House Est.",
      client_details_31: "Protein & Vitamins",

      client_name_32: "Dimas Medical Complex",
      client_details_32: "Clinics",

      client_name_33: "Dr. Ahmed Abanmi Medical Complex",
      client_details_33: "Clinics",

      client_name_34: "Lamar Medical Complex",
      client_details_34: "Clinics",

      client_name_35: "Al-Wasj Medical Center",
      client_details_35: "Clinics",

      client_name_36: "Safwa Saudi Pharmacy",
      client_details_36: "Pharmacy",

      client_name_37: "Khalid Medical Est. - 2 Branches",
      client_details_37: "Medical Devices & Supplies",

      client_name_38: "Al-Hayat Pharmacy Group - 10 Branches",
      client_details_38: "Pharmacy",

      client_name_39: "Sadk Specialized Clinics Complex",
      client_details_39: "Clinics",

      client_name_40: "Dr. Hassan Al-Bar Specialized Hospital & Clinics",
      client_details_40: "Clinics",

      client_name_41: "Abdullah Salem Al-Qathmi Stores - 3 Branches",
      client_details_41: "Truck Spare Parts",

      client_name_42: "Rashed Mohammed Al-Hamad Co. - 6 Branches",
      client_details_42: "Car Spare Parts",

      client_name_43: "Al-Alwan Est. - 5 Branches",
      client_details_43: "Car Spare Parts",

      client_name_44: "Ali Hassan Al-Sayed Stores - 5 Branches",
      client_details_44: "Car Spare Parts",

      client_name_45: "Al-Olola Trading Est.",
      client_details_45: "Truck Spare Parts",

      client_name_46: "Al-Eid Stores - 3 Branches",
      client_details_46: "Truck Spare Parts",

      client_name_47: "Saleh Mohammed Al-Muhaileb Est. - 12 Branches",
      client_details_47: "Car Spare Parts",

      client_name_48: "Abdullah Al-Saadi & Sons Co. - 6 Branches",
      client_details_48: "Truck Spare Parts",

      client_name_49: "Al-Madawalat Auto Parts Co. - 3 Branches",
      client_details_49: "Car Spare Parts",

      client_name_50: "Al-Taqwa Auto Parts Est. - 3 Branches",
      client_details_50: "Car Spare Parts",

      client_name_51: "Mohammed Nahar Al-Qahtani Est. - 25 Branches",
      client_details_51: "Car Spare Parts",

      client_name_52: "Al-Madawalat Auto Parts Co. - 3 Branches",
      client_details_52: "Car Spare Parts",

      client_name_53: "Khalid Ayad Al-Harbi Est. - 3 Branches",
      client_details_53: "Truck Spare Parts",

      client_name_54: "Al-Kathiri Automotive Co.",
      client_details_54: "Car Sales",

      client_name_55: "Al-Mughlooth Stores - 3 Branches",
      client_details_55: "Car Spare Parts",

      copyRights: "Sinmarsoft . All rights reserved.",
      MANAGER_TITLE: "Manager's Message",
      MANAGER_DATE: "📅 May 23, 2021",
      MANAGER_PARAGRAPH:
        "There is no doubt that information technology is the language of this era, and the need to develop and implement it in our business community is extremely urgent—especially with the comprehensive economic renaissance currently taking place in the Kingdom across all sectors.",
      MANAGER_PARAGRAPH_2:
        "Therefore, our goal is to help elevate this sector to be among the ranks of advanced nations and to support the business sector in relying on technology in all its activities.",
      MANAGER_PARAGRAPH_3:
        "Out of love for our country and our community, we established this entity to contribute—if even a little—to the development of our beloved Kingdom, hand in hand with the building of this generous nation. May Allah protect it from all harm.",
      TECHNICAL_MANAGER_TITLE: "Message from the Technical Manager",
      TECHNICAL_MANAGER_DATE: " 📅 May 20, 2021",
      TECHNICAL_MANAGER_PARAGRAPH:
        "Anyone observing the current state of investment in information technology can see that this sector is one of the most fertile after the oil sector, and it is heavily relied upon—after God—for facilitating and simplifying operations.",
      TECHNICAL_MANAGER_PARAGRAPH_2:
        "The technology sector in general is rapidly evolving to keep up with business development and acceleration, making it a promising field for investment.",
      TECHNICAL_MANAGER_PARAGRAPH_3:
        "This has driven us to invest in it with dedication and focus, recognizing the importance of technology, and striving to advance our technical systems until they stand, God willing, among the leading exporters of technology.",
      notFound_message: " Sorry, the page you are looking for does not exist.",
      notFound_backToHome: "  Back to Home",
      faq: {
        title: "Frequently Asked Questions",

        q1: "What is Sinmar Soft ERP and when is it suitable for my company?",
        a1: "It’s a comprehensive enterprise management system designed to automate daily operations like accounting, sales, purchasing, inventory, and HR. Ideal for small and medium businesses seeking full control over their resources.",

        q2: "Is there a free trial available?",
        a2: "Yes, you can request a free demo account to explore the system’s features and ensure it fits your business needs before subscribing.",

        q3: "How do I integrate the system with ZATCA (Zakat, Tax and Customs Authority)?",
        a3: "The system is fully compliant with ZATCA requirements and supports direct integration for electronic invoicing under Phase 2 (Integration Phase).",

        q4: "Does the system support electronic invoicing?",
        a4: "Absolutely! Sinmar Soft ERP supports automatic generation and submission of e-invoices in full compliance with ZATCA regulations.",

        q5: "What is the difference between the cloud and on-premise versions?",
        a5: "The cloud version is hosted online with automatic updates, while the on-premise version is installed on your own servers, offering full control over your data.",

        q6: "Can the system be customized to fit my business type?",
        a6: "Yes, it can be fully tailored for various industries such as retail, manufacturing, or professional services.",

        q7: "How can I migrate data from a previous financial year?",
        a7: "You can easily import historical data using the system’s migration tools or with assistance from our support team.",

        q8: "What kind of post-purchase support do you provide?",
        a8: "We offer continuous technical support, staff training, and regular system updates to ensure smooth operation.",

        q9: "Can Sinmar Soft ERP integrate with other systems like POS or banks?",
        a9: "Yes, it integrates with multiple third-party platforms via API connections including POS systems, banks, and e-commerce solutions.",

        q10: "How does the system handle zakat and tax calculations?",
        a10: "It automatically calculates zakat and VAT according to local regulations and provides ready reports for ZATCA submission.",

        q11: "Is the system compliant with ZATCA Phase 2 (Integration)?",
        a11: "Yes, Sinmar Soft ERP is ZATCA-certified and fully compliant with integration and API requirements.",

        q12: "Can I access the system from a mobile device?",
        a12: "Yes, the system is fully responsive and accessible from any device via browser or mobile app.",
      },

      privacy: {
        title: "Privacy Policy - Sinmar Soft ERP",

        section1_title: "Information Collected by Sinmar Soft ERP",
        section1_p1:
          "Sinmar Soft ERP collects essential information when you register or use the system to improve service quality and enhance user experience.",
        section1_p2:
          "This may include your name, email address, phone number, and activity data within the system such as invoices, reports, and user permissions.",
        section1_p3:
          "The system does not collect any financial or sensitive information without the user’s consent, and all sensitive data is securely encrypted.",
        section1_p4:
          "Cookies are used to improve performance and provide a smoother experience.",

        section2_title: "How Information is Used",
        section2_p1:
          "The information collected is used to improve the system and deliver features tailored to your business needs.",
        section2_li1: "Personalize your ERP system experience.",
        section2_li2:
          "Improve technical support and respond to user inquiries.",
        section2_li3: "Analyze system performance and develop future features.",
        section2_li4: "Communicate updates and special ERP offers.",
        section2_p2:
          "Email notifications are sent only to users who have opted in to receive them.",

        section3_title: "Data Protection",
        section3_p1:
          "Sinmar Soft is committed to applying the highest security standards for storing and processing data, using SSL protocols and data encryption.",

        section4_title: "Use of Cookies",
        section4_p1:
          "Sinmar Soft ERP uses cookies to store user preferences and improve browsing speed and functionality.",
        section4_p2:
          "You can disable cookies from your browser settings, but this may affect certain system features.",
        section4_p3:
          "Cookies are not used for marketing purposes or shared with any third parties.",

        section5_title: "Information Disclosure to Third Parties",
        section5_p1:
          "Sinmar Soft does not share personal information with third parties unless required by law or with the user's explicit consent.",
      },
      terms_title: "Terms and Conditions",

      section1_title: "Third-Party Service Providers",
      section1_p1:
        "Sinmar Soft ERP may collaborate with third-party service providers to enhance service quality and system performance analysis. These providers are only permitted to use the collected data within the scope of their assigned tasks and are not allowed to share or use it for any other purposes.",

      section2_title: "Cookies",
      section2_p1:
        "Sinmar Soft ERP uses cookies to improve the user experience and personalize system services based on user preferences. You can disable cookies in your browser settings, but this may affect certain features or reduce system functionality.",

      section3_title: "Data and Information",
      section3_p1:
        "Data collected by Sinmar Soft ERP is used solely to improve performance, provide technical support, and develop system features. Data is not shared with third parties unless required to deliver services or comply with legal obligations.",

      section4_title: "Intellectual Property Rights",
      section4_p1:
        "All intellectual property rights, designs, and content related to Sinmar Soft ERP are fully reserved. Reuse, reproduction, or redistribution of any part of the system without prior written permission is strictly prohibited.",

      section5_title: "Updates to Terms and Conditions",
      section5_p1:
        "Sinmar Soft ERP reserves the right to modify these terms and conditions at any time. Users will be notified of updates, and continued use of the system implies acceptance of the new terms.",

      // Blog Page Translations
      blog_title: "Blog",
      blog_breadcrumb_home: "Home",
      blog_breadcrumb_blog: "Blog",
      blog_page_title: "Blog",
      blog_page_subtitle: "Latest articles and stories from our team",
      blog_search_placeholder: "Search the blog...",
      blog_categories_title: "Categories",
      blog_recent_posts_title: "Recent Posts",
      blog_cta_title: "Contact Us",
      blog_read_more: "Read More",
      blog_no_posts: "No posts available.",
      blog_date_badge: "Date",
      blog_search_results: "Search Results",
      blog_results_found: "result",
      blog_results_not_found: "No articles found matching your search.",
      blog_published_date: "Published on",
      blog_by_author: "By",

      // Admin Blog Dashboard
      admin_dashboard_title: "Blog Admin Dashboard",
      admin_total_posts: "Total Posts",
      admin_published_posts: "Published Posts",
      admin_add_new_post: "Add New Post",
      admin_posts_list_title: "Posts List",
      admin_search_posts: "Search articles...",
      admin_table_title_col: "Title",
      admin_table_date_col: "Date",
      admin_table_slug_col: "Slug",
      admin_table_actions_col: "Actions",
      admin_edit_btn: "Edit",
      admin_delete_btn: "Delete",
      admin_delete_confirm_msg: "Are you sure you want to delete this post?",
      admin_search_results_count: "result",
      admin_no_posts_msg: "No posts yet.",
      admin_prev_pagination: "Previous",
      admin_next_pagination: "Next",
      admin_page_indicator: "Page",
      admin_of_pages: "of",

      // Admin Form
      admin_form_title: "Add New Post",
      admin_form_title_edit: "Edit Post",
      admin_form_title_en_label: "Title (EN)",
      admin_form_title_ar_label: "Title (AR)",
      admin_form_slug_label: "Slug",
      admin_form_slug_hint: "It will be auto-generated from the title if left empty",
      admin_form_date_label: "Date",
      admin_form_excerpt_en_label: "Excerpt (EN)",
      admin_form_excerpt_ar_label: "Excerpt (AR)",
      admin_form_image_label: "Upload Image",
      admin_form_image_drag_hint: "Drag and drop the image here or click to select",
      admin_form_content_en_label: "Content (EN)",
      admin_form_content_ar_label: "Content (AR)",
      admin_form_submit_create: "Create Post",
      admin_form_submit_update: "Update Post",
      admin_form_reset_btn: "Reset",

      // Admin Alerts
      admin_alert_success: "Success",
      admin_alert_error: "Error",
      admin_alert_create_success: "Post created successfully.",
      admin_alert_update_success: "Post updated successfully.",
      admin_alert_delete_success: "Post deleted successfully.",
      admin_alert_required_fields: "English title and content are required.",
      admin_alert_save_error: "Failed to save post. Please try again.",

      // Admin Toolbar
      admin_toolbar_bold: "Bold",
      admin_toolbar_italic: "Italic",
      admin_toolbar_underline: "Underline",
      admin_toolbar_list: "List",
      admin_toolbar_link: "Link",

      // Admin Pagination
      admin_pagination_previous: "Previous",
      admin_pagination_next: "Next",

      // Stats Bar
      admin_stats_total: "Total Posts",
      admin_stats_published: "Published Posts",
    },
  },

  ar: {
    translation: {
      home: "الصفحة الرئيسية ",
      products: "المنتجات",
      path_products: "products",
      all_products: "كل المنتجات",
      services: "الخدمات",
      path_services: "services",
      about: "معلومات عنا",
      path_about: "about",
      news: "الأخبار",
      path_news: "news",
      contact: "اتصل بنا",
      path_contact: "contact",
      blog: "المدونة",
      path_blog: "blog",
      blog_subtitle: "أحدث المقالات والقصص من فريقنا.",
      blog_loading: "جارٍ تحميل المقالات...",
      blog_no_posts: "لا توجد مقالات متاحة.",
      blog_search_label: "ابحث في المدونة",
      blog_search_placeholder: "ابحث في المدونة...",
      blog_categories_label: "التصنيفات",
      blog_recent_posts: "أحدث المقالات",
      home_blog_section_title: "أحدث المدونات",
      home_blog_section_subtitle: "تابع آخر الأخبار والرؤى والتحديثات من فريقنا.",
      view_all_blog_posts: "عرض جميع المقالات",
      blog_categories: ["تطوير البرمجيات", "التسويق الرقمي", "الذكاء الاصطناعي", "أنظمة ERP", "إدارة المشاريع"],
      call_us: "اتصل بنا",
      blog_pagination_previous: "السابق",
      blog_pagination_next: "التالي",
      read_more: "اقرأ المزيد",
      post_not_found: "المقال غير موجود",
      admin_login: "تسجيل دخول المسؤول",
      admin_username: "اسم المستخدم",
      admin_password: "كلمة المرور",
      admin_login_btn: "دخول",
      admin_login_error: "اسم المستخدم أو كلمة المرور غير صحيحة.",
      admin_login_success: "تم المصادقة بنجاح.",
      admin_panel: "لوحة تحكم المدونة",
      admin_add_post: "إضافة منشور جديد",
      admin_form_category_label: "التصنيف",
      admin_form_category_placeholder: "اختر التصنيف",
      admin_form_category_add_placeholder: "أضف تصنيف جديد",
      admin_form_category_add_button: "أضف",
      admin_category_all: "كل التصنيفات",
      cta_heading: "هل تحتاج مساعدة؟ نحن هنا من أجلك.",
      cta_subheading: "تواصل مع فريق الدعم لأي استفسارات أو مساعدة تقنية.",
      cta_help_title: "هل تحتاج مساعدة؟ نحن هنا من أجلك.",
      cta_help_subtitle: "تواصل مع فريق الدعم لأي استفسارات أو مساعدة تقنية.",
      cta_help_phone: "+966 50 619 4863",
      cta_help_button: "اتصل بنا",
      admin_logout_btn: "تسجيل الخروج",
      admin_edit_post: "تعديل المنشور",
      admin_table_category: "التصنيف",
      admin_title_en: "العنوان (EN)",
      admin_title_ar: "العنوان (AR)",
      admin_slug: "الرابط",
      admin_slug_hint: "اختياري، يتم إنشاؤه تلقائياً من العنوان",
      admin_date: "التاريخ",
      admin_excerpt_en: "الملخص (EN)",
      admin_excerpt_ar: "الملخص (AR)",
      admin_image: "رفع الصورة",
      admin_content_en: "المحتوى (EN)",
      admin_content_ar: "المحتوى (AR)",
      admin_content_hint: "اكتب المحتوى هنا...",
      admin_update: "تحديث",
      admin_create: "إنشاء",
      admin_reset: "إعادة تعيين",
      admin_posts_list: "قائمة المنشورات",
      admin_table_title: "العنوان",
      admin_table_date: "التاريخ",
      admin_table_slug: "الرابط",
      admin_table_actions: "الإجراءات",
      admin_no_posts: "لا توجد منشورات حتى الآن.",
      admin_edit_btn: "تعديل",
      admin_delete_btn: "حذف",
      admin_delete_confirm: "حذف هذا المنشور؟",
      admin_delete_success: "تم حذف المنشور.",
      admin_create_success: "تم إنشاء المنشور.",
      admin_update_success: "تم تحديث المنشور.",
      admin_error_required: "العنوان والمحتوى باللغة الإنجليزية مطلوبان.",
      admin_error_save: "فشل حفظ المنشور.",
      Privacy_Policy: "سياسة الخصوصية",
      Terms_Conditions: "الشروط والأحكام",
      FAQ: "الأسئلة الشائعة",
      path_PrivacyPolicy: "PrivacyPolicy",
      path_TermsAndConditions: "TermsAndConditions",
      path_FAQ: "FAQ",
      path_AllClients: "AllClients",
      CompanyName: " شركة نجوم العلاوى لنظم الكمبيوتر",
      companyDescriptionPart1:
        "انطلقت نجوم العلاوي لنظم الكمبيوتر عام ١٩٩٤ لتوفر للمجتمع والاقتصاد السعودي الطامح للنمو والريادة آنذاك الحلول البرمجية والأنظمة الالكترونية بالإضافة لأنواع متعددة من الخدمات والمنتجات التقنية المتطورة التي تتواكب مع تطلعات الشركات والمؤسسات الخاصة في ذلك الوقت.",
      companyDescriptionPart2:
        "منذ اللحظة الأولى من انطلاقها، نجحت في كسب ثقة عملائها وترسيخ مكانتها كشريك تقني موثوق لدى الجهات الحكومية والخاصة، واستمرت في تقديم أداء متميز وخدمات متطورة تساهم في تحسين الإدارة والإنتاج وتحقيق قفزات كبيرة في المخرجات وهوامش الأرباح.",
      title: "نجوم العلاوي",
      meta_default_title: "نجوم العلاوي لنظم الكمبيوتر",
      meta_default_description:
        "الحلول التقنية والبرمجيات المتطورة منذ عام 1994.",

      meta_home_title: "الرئيسية | نجوم العلاوي",
      meta_home_description:
        "مرحبًا بكم في نجوم العلاوي، نقدم حلولًا تقنية شاملة ومبتكرة.",

      meta_products_title: "المنتجات | نجوم العلاوي",
      meta_products_description:
        "استعرض مجموعتنا المميزة من المنتجات البرمجية والأنظمة التقنية.",

      meta_services_title: "الخدمات | نجوم العلاوي",
      meta_services_description:
        "نوفر خدمات تقنية متكاملة لدعم احتياجات شركتك وتحقيق أهدافك.",

      meta_about_title: "من نحن | نجوم العلاوي",
      meta_about_description:
        "تعرّف على تاريخنا وخبراتنا في عالم الأنظمة والبرمجيات.",

      meta_news_title: "الأخبار | نجوم العلاوي",
      meta_news_description: "تابع آخر أخبار الشركة والتحديثات التقنية.",

      meta_contact_title: "اتصل بنا | نجوم العلاوي",
      meta_contact_description: "تواصل معنا لأي استفسار أو دعم تقني.",
      meta_blog_title: "المدونة | نجوم العلاوي",
      meta_blog_description: "اقرأ أحدث المقالات والتحديثات.",

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
      Full_Name: "  اسم المنشأة او الشركة  ",
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
      Testimonial_name_1: "شركة علامة الزرقاء للتجارة",
      Testimonial_Location_1: "جدة، السعودية",
      Testimonial_text_1:
        "نقدر جهود نجوم العلاوي لنظم الكمبيوتر في صيانة وتطوير برامجنا  وثقتنا بهم دائمة، فهم شريك أساسي في نجاحنا. نأمل استمرار هذا الأداء المتميز وشكرًا جزيلاً.",
      Testimonial_name_2: "شركة الفا ميم للتجارة",
      Testimonial_Location_2: "الرياض ، السعودية",
      Testimonial_text_2:
        "نشكر نجوم العلاوي وبرنامج سنمار على حسن التعامل وسرعة الاستجابة والدعم الفني طوال 4 سنوات، مما كان له أثر إيجابي في تنظيم عمل المجمع. نتمنى لكم المزيد من التقدم والازدهار.",
      Testimonial_name_3: " شركة سبرت الطبية   ", // Updated based on previous analysis
      Testimonial_Location_3: "جدة، السعودية",
      Testimonial_text_3:
        "نقدم الشكر والعرفان شركة نجوم العلاوى لنظم الكمبيوتر ، لجهودهم في صيانة وتطوير البرامج المتميزة التي نعتمد عليها في المخزون والمبيعات والمحاسبة. نثمن شراكتنا ونتمنى استمرار تميزكم.",
      Testimonial_name_4: "شركة صحة آدم الطبية",
      Testimonial_Location_4: "المملكة العربية السعودية",
      Testimonial_text_4:
        "شهادة شكر وتقدير لشركة  نجوم العلاوي وبرنامج سنمار على دعمهم المستمر في إنجاح وتطوير عملنا. نُعرب عن خالص شكرنا وامتناننا لجهودكم القيمة ومساهمتكم الفعالة.",

      Testimonial_name_5: "شركة مدن الطب الطبية", // Updated based on previous analysis
      Testimonial_Location_5: "جدة، السعودية",
      Testimonial_text_5:
        "نُعرب عن فخرنا وامتناننا للإنجازات العديدة والجهود المفيدة التي قدمتموها لنا. خبراتكم واستجابتكم السريعة ساعدتنا على تخطي الصعاب. لكم أسمى آيات الشكر والتقدير، ونتمنى لكم دوام التوفيق.",

      Testimonial_name_6: "شركة راشد محمد  الحمد",
      Testimonial_Location_6: "الرياض، السعودية",
      Testimonial_text_6:
        "نشكر شركة نجوم العلاوي ونظم سنمار التطبيقية على الصيانة والتطوير المستمر لبرامجنا (المخزون والمبيعات والمحاسبة). ثقتنا بكم شريك دائم في نجاحنا، ونأمل استمرار هذا الأداء المتميز.",

      Testimonial_name_7: " شركة المطرودي للتجارة  ",
      Testimonial_Location_7: "جدة، السعودية",
      Testimonial_text_7:
        "خطاب شكر وتقدير لمدير شركة  نجوم العلاوي لنظم الكمبيوتر على جهودهم المستمرة في تطوير أنظمة سنمار المحاسبية. نفخر بمواكبة تقدمكم، ونتمنى لكم دوام النجاح والتوفيق. لكم منا جزيل الشكر.",

      Testimonial_name_8: "  شركة تبارك و راية التجارية   ",
      Testimonial_Location_8: "المملكة العربية السعودية",
      Testimonial_text_8:
        "نشكر فريق نجوم العلاوي وشركة سنمار على التعاون المثمر في تطوير أنظمتنا التجارية وتحسين كفاءة العمل. نُثمّن احترافيتكم العالية والتزامكم، ونتطلع إلى المزيد من النجاحات المشتركة",

      Testimonial_name_9: " مؤسسة جاسر فهد الجاسر التجارية",
      Testimonial_Location_9: "الرياض، السعودية",
      Testimonial_text_9:
        "شكر وتقدير لنجوم العلاوي و التطبيقية على صيانة وتطوير برامجنا (المخزون، المبيعات، المحاسبة). ثقتنا بكم دائمة كشريك نجاح، ونأمل استمرار تميزكم. لكم منا جزيل الشكر والعرفان.",

      Testimonial_name_10: "   مؤسسة قطع واكثر للتجارة ", // Adding the last one (Tareq & Yasien Co.)
      Testimonial_Location_10: " الرياض ، السعودية",
      Testimonial_text_10:
        "بكل الاعتزاز والفخر والتقدير، تتقدم  قطع واكثر بخالص الشكر لنجوم العلاوي  لجهودهم في تطوير البرنامج والمساعدة في حل المشكلات. نتمنى لكم دوام التوفيق.",

      Testimonial_name_11: " شركة مسارات الجيل للتجارة  ",
      Testimonial_Location_11: "الرياض، السعودية",
      Testimonial_text_11:
        "شكر وتقدير لنجوم العلاوي والتطبيقية على صيانة وتطوير برامجنا (المخزون، المبيعات، المحاسبة). ثقتنا بكم دائمة كشريك نجاح، ونأمل استمرار تميزكم. لكم منا جزيل الشكر والعرفان.",

      Testimonial_name_12: " مؤسسة ناصر سليمان سطام الجهني التجارية ",
      Testimonial_Location_12: "الرياض، السعودية",
      Testimonial_text_12:
        "شكر وتقدير لنجوم العلاوي ونظام سنمار  على صيانة وتطوير برامجنا . ثقتنا بكم دائمة كشريك نجاح، ونأمل استمرار تميزكم. لكم منا جزيل الشكر .",

      Partners_text: "شركاؤنا هم سر نجاحنا واستمراريتنا",
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
      Our_Product_h: "دور نجوم العلاوى لنظم الكمبيوتر",
      Our_Product_p:
        "دعم بيئة العمل والإنتاج وتعزيز قيمة التقنيات الحديثة والبرمجيات والأنظمة التي تخدم الشركات والمؤسسات ورواد الأعمال والاقتصاد في المملكة العربية السعودية وعملائنا في الخارج من خلال توفير حلول تقنية مبتكرة وعالية الجودة بأسعار تنافسية.",
      Explore_More: "  حلولنا المبتكرة ",
      Our_Partners: "شركاؤنا ",
      Our_Partners_p:
        "عملاؤنا هم شركاؤنا في النجاح حيث تمتلك  شركة نجوم العلاوى لنظم الكمبيوتر أكثر من 10000 عميل حتى الآن في جميع التخصصات، وحققت نجاحاً باهراً في وقت قصير من خلال إنتاج البرمجيات المتميزة، هؤلاء بعض عملائنا الذين تشرفنا بخدمتهم",
      Partners_Heading: "تعرف على شركاؤنا ",
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
        "نبني علاقات طويلة الأمد مبنية على الثقة والمصداقية مع عملائنا و شركاؤنا  لتحقيق أهداف مشتركة.",
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
      reason_1_desc: "فريق ذو خبرة يقدم حلولاً تقنية موثوقة مع فهم واضح لاحتياجات عملك.",
      reason_2_title: "تنفيذ الأعمال باحترافية",
      reason_2_desc: "نحوّل متطلبات الأعمال إلى أنظمة فعالة تساعد عملياتك على التحرك بسرعة أكبر.",
      reason_3_title: "خدمات مجانية مدى الحياة",
      reason_3_desc: "دعم مستمر وتحديثات دون رسوم مفاجئة للحفاظ على استقرار النظام.",
      reason_4_title: "خطط أسعار مناسبة",
      reason_4_desc: "أسعار مرنة تجعل الحلول التقنية المتقدمة في متناول المؤسسات النامية.",
      Call_US: "اتصل بنا في اي وقت ",
      Started: " مرحبًا بك في نجوم العلاوي ",
      CTA_Text: " حلول برمجية متكاملة لإدارة أعمالك بكفاءة واحترافية",
      Tech_Solutions: "حلولنا التقنية",
      Tech_Text:
        " نعزز تميز عملائنا ونمنحهم كفاءة تشغيلية دائمة من خلال تقديم أفضل  الحلول التقنية.",
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
      Pr_feature_1: "شجرة محاسبة حتى 10 مستويات فرعية",
      Pr_feature_2: "التصدير إلى Excel, Word, PDF, Txt",
      Pr_feature_3: "إمكانية حفظ صور من المستندات داخل قيد اليومية",
      Pr_feature_4: "إضافة حتى 99 فرع",
      Pr_feature_5: "ميزة مراكز التكلفة المتعددة والفردية",
      Pr_feature_6: "قاعدة بيانات SQL Server",
      Pr_feature_7: "سند قبض أو صرف نقدي بتسلسل مستقل عن الآجل",
      Pr_feature_8: "إمكانية فصل النقدي والشيك في القبض والصرف",
      Pr_feature_9: "النسخ الاحتياطي التلقائي",
      Pr_feature_10: "كشف حساب متعدد السنوات والفروع",
      Pr_feature_11: "أستاذ عام متعدد السنوات والفروع",
      Pr_feature_12: "صلاحيات مستقلة لكل مستخدم",
      Pr_feature_13: "الأصول الثابتة واحتساب الإهلاكات",
      Pr_feature_14: "إمكانية التعامل مع الاعتمادات المستندية",
      Pr_feature_15: "تقارير مفصلة ومتنوعة وخيارات عرضها حسب الطلب",
      Pr_feature_16: "إعادة تقييم أصل ثابت",

      Furn_feature_1: "شجرة محاسبة حتى 10 مستويات فرعية",
      Furn_feature_2: "التصدير إلى Excel, Word, PDF, Txt",
      Furn_feature_3: "إمكانية حفظ صور من المستندات داخل قيد اليومية",
      Furn_feature_4: "إضافة حتى 99 فرع",
      Furn_feature_5: "ميزة مراكز التكلفة المتعددة والفردية",
      Furn_feature_6: "قاعدة بيانات SQL Server",
      Furn_feature_7: "سند قبض أو صرف نقدي بتسلسل مستقل عن الآجل",
      Furn_feature_8: "إمكانية فصل النقدي والشيك في القبض والصرف",

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

      our_clients_title: "  بعض من شركاؤنا وعملاؤنا الكرام",

      client_name_1: "شركة المركز الاقتصادي للمقاولات",
      client_details_1: "   مقاولات عامة     ",
      client_name_2: "  مؤسسة سبارك ميديا للدعاية والاعلان ",
      client_details_2: "دعاية واعلان ",
      client_name_3: "   شركة الاحاطة المالية",
      client_details_3: "  تداول اوراق مالية ",
      client_name_4: "       مؤسسة المعمورة الدولية لخدمات الطيران ",
      client_details_4: "  حج وعمرة ",
      client_name_5: "    شركة تماس السعودية للمقاولات",
      client_details_5: "  مقاولات عامة ",
      client_name_6: "   مؤسسة ناصر حمد الحوطي - 3 فروع ",
      client_details_6: "سيراميك ورخام ",
      client_name_7: " شركة النقد الاستثمارية",
      client_details_7: "تداول اوراق مالية  ",
      client_name_8: "  عالم الاجواء لخدمات الطيران",
      client_details_8: "حجوزات طيران ورحلات",
      client_name_9: "    مؤسسة حراء لمواد البناء   ",
      client_details_9: " مواد بناء  ",
      client_name_10: "  شركة ابناء سليمان الريس للتجارة ",
      client_details_10: "بيع حديد",
      client_name_11: " الوكالة الفنية الاردنية",
      client_details_11: "تصنيع رديترات ",
      client_name_12: "   الفرات الاوسط للتجارة   ",
      client_details_12: "  اجهزة كهربائية",
      client_name_13: "  مجموعة الشطة الفندقية",
      client_details_13: "خدمات فندقية",
      client_name_14: "إدارة أملاك الأمير  متعب ",
      client_details_14: " تأجير مراكز تجارية",
      client_name_15: "  مؤسسة الركن الخامس",
      client_details_15: " حج وعمرة",
      client_name_16: "الفرات الاوسط للتجارة",
      client_details_16: "اجهزة كهربائية ",
      client_name_17: " شركة العمودي للالمنيوم   ",
      client_details_17: "    المنيوم واكسسوار ",
      client_name_18: "   مؤسسة طلائع مكة - 5 فروع ",
      client_details_18: "  المنيوم واكسسوار ",
      client_name_19: " شركة الوجية للرياضة ",
      client_details_19: "     اجهزة كهربائية     ",
      client_name_20: "    شركة الفتوح - 4 فروع ",
      client_details_20: "  المنيوم واكسسوار ",

      client_name_21: "   مؤسسة المانع التجارية للملابس نجران - 6 فروع ",
      client_details_21: "   بيع ملابس  ",

      client_name_22: "  مؤسسة باجعفر للإلكترونيات فرعين",
      client_details_22: "    اجهزة كهربائية ",

      client_name_23: "  مؤسسة الاوائل - 5 فروع",
      client_details_23: "   المنيوم واكسسوار ",

      client_name_24: "   سوبرماركت واحة تهامة ",
      client_details_24: "    سوبرماركت ",

      client_name_25: "        مؤسسة سعد عمر الوعل للتجارة",
      client_details_25: "   ادوات منزلية وتجهيزات مطاعم ",

      client_name_26: "        مؤسسة الحفيتي - 5 فروع",
      client_details_26: "              المنيوم واكسسوار ",

      client_name_27: "     مؤسسة المانع التجارية للملابس نجران - 6 فروع",
      client_details_27: "               بيع ملابس ",

      client_name_28: "          صيدلية اشراقة الابتسامة ",
      client_details_28: "    صيدلية ",

      client_name_29: "   عيادات الشاكرين للأسنان - 4 فروع",
      client_details_29: "    عيادات ",

      client_name_30: "    مجمع عيادات عناية ونضارة الطبية",
      client_details_30: "    عيادات ",

      client_name_31: "   مؤسسة بيت البروتين",
      client_details_31: "    بروتين وفيتامين ",

      client_name_32: "  مجمع ديماس الطبي ",
      client_details_32: "    عيادات  ",

      client_name_33: "          مجمع الدكتور احمد ابانمي الطبي ",
      client_details_33: "    عيادات  ",

      client_name_34: "             مجمع لمار الطبي         ",
      client_details_34: "    عيادات  ",

      client_name_35: "             مستوصف الوسج الطبي      ",
      client_details_35: "    عيادات  ",

      client_name_36: "     صيدلية صفوة السعودية ",
      client_details_36: "    صيدلية  ",

      client_name_37: "        مؤسسة خالد الطبية - فرعين",
      client_details_37: "     اداوت واجهزة طبية  ",

      client_name_38: "    مجموعة صيدلية الحياة - 10 فروع ",
      client_details_38: "     صيدلية     ",

      client_name_39: "       مجمع عيادات سدك التخصصية ",
      client_details_39: "     عيادات     ",

      client_name_40: "     مستشفى وعيادات الدكتور حسن البار التخصصية",
      client_details_40: "     عيادات     ",

      client_name_41: "    محلات عبد الله سالم القثمي - 3 فروع ",
      client_details_41: "     قطع غيار شاحنات     ",

      client_name_42: "    شركة راشد محمد الحمد - 6 فروع",
      client_details_42: "        قطع غيار سيارات ",

      client_name_43: "        مؤسسة العلوان - 5 فروع",
      client_details_43: "        قطع غيار سيارات ",

      client_name_44: "   محلات علي حسن السيد - 5 فروع",
      client_details_44: "        قطع غيار سيارات ",

      client_name_45: "      مؤسسة العلولا التجاريه",
      client_details_45: "          قطع غيار شاحنات ",

      client_name_46: "      محلات العيد - 3 فروع ",
      client_details_46: "          قطع غيار شاحنات ",

      client_name_47: "        مؤسسة صالح محمد عبد الرحمن المهيلب - 12 فرع",
      client_details_47: "     قطع غيار سيارات",

      client_name_48: "           شركة عبد الله السعدي واولاده - 6 فروع",
      client_details_48: "     قطع غيار شاحنات",

      client_name_49: "    شركة المداولات لقطع غيار السيارات - 3 فروع ",
      client_details_49: "  قطع غيار سيارات",

      client_name_50: "    مؤسسة التقوى لقطع غيار السيارات - 3 فروع      ",
      client_details_50: "  قطع غيار سيارات",

      client_name_51: "    مؤسسة محمد نهار القحطاني 25 فرع     ",
      client_details_51: "  قطع غيار سيارات",

      client_name_52: "    شركة المداولات لقطع غيار السيارات - 3 فروع    ",
      client_details_52: "  قطع غيار سيارات",

      client_name_53: "   مؤسسة خالد عياد الحربي - 3 فروع   ",
      client_details_53: "  قطع غيار قطع غيار شاحنات",

      client_name_54: "  شركة الكثيري للسيارات",
      client_details_54: "  مبيعات سيارات    ",

      client_name_55: " محلات المغلوث - 3 فروع",
      client_details_55: "    قطع غيار سيارات ",

      copyRights: "جميع الحقوق محفوظة لشركة سنمار سوفت",
      MANAGER_TITLE: "كلمة المدير العام",
      MANAGER_DATE: "📅 23 مايو 2021",
      MANAGER_PARAGRAPH:
        "إنه مما لا شك فيه أن تقنية المعلومات هي لغة هذا العصر، وأن الحاجة إلى تطويرها وتفعيلها في مجتمع أعمالنا لهي حاجة ماسة جداً، لاسيما مع ما تشهده المملكة اليوم من نهضة اقتصادية شاملة في جميع القطاعات.",
      MANAGER_PARAGRAPH_2:
        "ولذلك، فهدفنا هو المساهمة في النهوض بهذا القطاع للارتقاء به إلى مصاف الدول المتقدمة، ومساعدة قطاع الأعمال للاعتماد على التقنية في جميع نشاطاته.",
      MANAGER_PARAGRAPH_3:
        "وإنه لمن منطلق حبنا لوطننا ومجتمعنا، فلقد أسسنا هذا الكيان للمساهمة ولو بشيء يسير في نهضة مملكتنا الحبيبة، يداً بيد مع بناء هذا الوطن المعطاء. حفظه الله من كل سوء.",
      TECHNICAL_MANAGER_TITLE: " كلمة المدير الفني",
      TECHNICAL_MANAGER_DATE: " 📅 20 مايو 2021",
      TECHNICAL_MANAGER_PARAGRAPH:
        "إن الناظر اليوم لواقع الاستثمار في تقنية المعلومات ليبصر أن هذا القطاع هو من أخصب قطاعات الاستثمار بعد قطاع النفط وعليه الاعتماد بعد الله في تيسير وتسهيل الأعمال.",
      TECHNICAL_MANAGER_PARAGRAPH_2:
        "كما أن قطاع التكنولوجيا بشكل عام هو قطاع متطور بشكل سريع لمواكبة التطور في الأعمال وتسريعها وهو مجال خصب للاستثمار.",
      TECHNICAL_MANAGER_PARAGRAPH_3:
        "مما حد بنا للاستثمار فيه جاعلين نصب أعيننا أهمية التقنية فبدأنا على الحرص والتفاني للارتقاء بمنظومة التقنية لتقف بسواعد رجالها في مطاف مصدري التقنية بمشيئة الله تعالى.",

      notFound_message: "عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة.",
      notFound_backToHome: "العودة إلى الصفحة الرئيسية",
      faq: {
        title: "الأسئلة الشائعة",

        q1: "ما هو نظام Sinmar Soft ERP ومتى يكون مناسبًا لشركتي؟",
        a1: "هو نظام متكامل لإدارة موارد المؤسسات مصمم لتبسيط العمليات اليومية مثل المحاسبة، المبيعات، المشتريات، المخزون، والموارد البشرية. يناسب الشركات الصغيرة والمتوسطة التي تبحث عن أتمتة شاملة وتحكم كامل في مواردها.",

        q2: "هل يوجد حساب تجريبي مجاني للنظام؟",
        a2: "نعم، يمكنك طلب تجربة مجانية تمكنك من استكشاف ميزات النظام واختبار توافقه مع احتياجات شركتك قبل الاشتراك.",

        q3: "ما هي خطوات ربط النظام بهيئة الزكاة والضريبة والجمارك (ZATCA)؟",
        a3: "النظام متوافق بالكامل مع متطلبات هيئة الزكاة والضريبة والجمارك في المملكة العربية السعودية، ويمكن ربطه إلكترونيًا لإصدار الفواتير الإلكترونية وفق المرحلة الثانية (تكامل).",

        q4: "هل يدعم النظام الفواتير الإلكترونية؟",
        a4: "بالتأكيد، نظام Sinmar Soft ERP يدعم إنشاء وإرسال الفواتير الإلكترونية تلقائيًا وفق لوائح هيئة الزكاة والضريبة.",

        q5: "ما الفرق بين النسخة السحابية والنسخة المحلية من النظام؟",
        a5: "النسخة السحابية تُدار عبر الإنترنت وتُحدث تلقائيًا، بينما النسخة المحلية تُثبت على خوادمك الداخلية وتمنحك تحكمًا أكبر في البيانات.",

        q6: "هل يمكن تخصيص النظام ليتناسب مع نشاط شركتي؟",
        a6: "نعم، يمكن تخصيص النظام بشكل كامل حسب نوع النشاط التجاري مثل البيع بالتجزئة، التصنيع، أو الخدمات المهنية.",

        q7: "كيف يتم ترحيل بيانات السنة المالية السابقة إلى النظام؟",
        a7: "يمكنك استيراد البيانات السابقة بسهولة عبر أدوات الترحيل التي يوفرها النظام أو من خلال فريق الدعم الفني لدينا.",

        q8: "ما هي الخدمات والدعم التي تقدمها الشركة بعد الشراء؟",
        a8: "نوفر دعمًا فنيًا متواصلًا، تدريبًا للموظفين، وتحديثات دورية للنظام لضمان أفضل أداء.",

        q9: "هل يمكن للنظام التكامل مع أنظمة أخرى مثل نقاط البيع أو البنوك؟",
        a9: "نعم، النظام يدعم التكامل مع أنظمة خارجية عبر واجهات API بما في ذلك نقاط البيع والبنوك وأنظمة التجارة الإلكترونية.",

        q10: "كيف يتم احتساب الزكاة والضرائب داخل النظام؟",
        a10: "يحسب النظام الزكاة وضريبة القيمة المضافة تلقائيًا وفق الإعدادات المحلية المحددة، ويتيح تقارير جاهزة للتقديم إلى هيئة الزكاة.",

        q11: "هل يتوافق النظام مع متطلبات المرحلة الثانية من الفوترة الإلكترونية (التكاملية)؟",
        a11: "نعم، النظام معتمد من هيئة الزكاة والضريبة والجمارك ويدعم التكامل عبر واجهات برمجية (API) مع منصة الهيئة.",

        q12: "هل يمكن استخدام النظام من الهاتف المحمول؟",
        a12: "نعم، النظام يوفر واجهة متجاوبة بالكامل ويمكن الوصول إليه من أي جهاز عبر المتصفح أو تطبيق الجوال.",
      },
      privacy: {
        title: "سياسة الخصوصية - سينمار سوفت ERP",

        section1_title: "المعلومات التي يجمعها نظام سينمار سوفت ERP",
        section1_p1:
          "يقوم نظام سينمار سوفت بجمع بعض المعلومات الأساسية عند استخدامك للنظام أو التسجيل فيه، بهدف تحسين جودة الخدمة وتقديم تجربة مخصصة.",
        section1_p2:
          "قد تشمل هذه المعلومات الاسم، البريد الإلكتروني، رقم الهاتف، وبيانات النشاط داخل النظام مثل الفواتير والتقارير وصلاحيات المستخدم.",
        section1_p3:
          "لا يقوم النظام بجمع أي بيانات مالية أو حساسة إلا بعد موافقة المستخدم، ويتم تشفير جميع البيانات الحساسة بشكل آمن.",
        section1_p4:
          "يستخدم النظام ملفات تعريف الارتباط (Cookies) لتحسين الأداء وتجربة المستخدم.",

        section2_title: "كيفية استخدام المعلومات",
        section2_p1:
          "تُستخدم المعلومات التي يتم جمعها لتحسين جودة النظام وتقديم ميزات تتناسب مع احتياجات المنشأة.",
        section2_li1: "تخصيص تجربة المستخدم داخل نظام ERP.",
        section2_li2: "تحسين الدعم الفني والاستجابة للاستفسارات.",
        section2_li3: "تحليل أداء النظام وتطوير الميزات المستقبلية.",
        section2_li4: "التواصل بشأن التحديثات أو العروض الخاصة بخدمات ERP.",
        section2_p2:
          "يتم إرسال الإشعارات أو الرسائل البريدية فقط للمستخدمين الذين اختاروا تلقيها.",

        section3_title: "حماية بياناتك",
        section3_p1:
          "تلتزم سينمار سوفت بتطبيق أعلى معايير الأمان في تخزين ومعالجة البيانات، باستخدام بروتوكولات SSL وتشفير البيانات الحساسة.",

        section4_title: "استخدام ملفات تعريف الارتباط (Cookies)",
        section4_p1:
          "يستخدم نظام سينمار سوفت ملفات تعريف الارتباط لتخزين تفضيلات المستخدم وتحسين سرعة التصفح.",
        section4_p2:
          "يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح، لكن قد يؤثر ذلك على بعض وظائف النظام.",
        section4_p3:
          "لا تُستخدم ملفات تعريف الارتباط لأغراض تسويقية أو لمشاركة المعلومات مع أطراف خارجية.",

        section5_title: "مشاركة المعلومات مع الأطراف الثالثة",
        section5_p1:
          "لا تشارك سينمار سوفت أي بيانات شخصية مع أطراف خارجية إلا في حال وجود إلزام قانوني أو بعد موافقة المستخدم الصريحة.",
      },

      terms_title: "الشروط والأحكام",

      section1_title: "مقدمو الخدمات من الأطراف الثالثة",
      section1_p1:
        "قد يتعاون نظام سينمار سوفت ERP مع مزودي خدمات من الأطراف الثالثة بهدف تحسين جودة الخدمات وتحليل أداء النظام. يُسمح لهؤلاء المزودين باستخدام البيانات فقط ضمن نطاق تقديم الخدمة ودون أي حق في مشاركتها أو استخدامها لأغراض أخرى.",

      section2_title: "ملفات تعريف الارتباط (الكوكيز)",
      section2_p1:
        "يستخدم نظام سينمار سوفت ERP ملفات تعريف الارتباط لتحسين تجربة المستخدم وتخصيص الخدمات وفقاً لتفضيلات المستخدم. يمكنك تعطيل الكوكيز من إعدادات المتصفح، ولكن قد يؤدي ذلك إلى تعطيل بعض الميزات أو التأثير على أداء النظام.",

      section3_title: "البيانات والمعلومات",
      section3_p1:
        "يتم استخدام البيانات التي يجمعها نظام سينمار سوفت ERP فقط لتحسين الأداء وتقديم الدعم الفني وتطوير الخدمات. لا تتم مشاركة البيانات مع أي طرف ثالث إلا إذا كان ذلك ضرورياً لتقديم الخدمة أو مطلوباً بموجب القانون.",

      section4_title: "حقوق الملكية الفكرية",
      section4_p1:
        "جميع حقوق الملكية الفكرية والتصميمات والمحتوى التابع لنظام سينمار سوفت ERP محفوظة بالكامل. لا يُسمح بإعادة استخدام أو نسخ أي جزء من النظام دون إذن خطي مسبق من الشركة المالكة.",

      section5_title: "تحديثات الشروط والأحكام",
      section5_p1:
        "يحتفظ نظام سينمار سوفت ERP بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إعلام المستخدمين بالتغييرات، ويُعتبر استمرار استخدام النظام بعد التعديل موافقة على الشروط الجديدة.",

      // Blog Page Translations
      blog_title: "المدونة",
      blog_breadcrumb_home: "الرئيسية",
      blog_breadcrumb_blog: "المدونة",
      blog_page_title: "المدونة",
      blog_page_subtitle: "أحدث المقالات والقصص من فريقنا",
      blog_search_placeholder: "ابحث في المدونة...",
      blog_categories_title: "التصنيفات",
      blog_recent_posts_title: "أحدث المقالات",
      blog_cta_title: "تواصل معنا",
      blog_read_more: "اقرأ المزيد",
      blog_no_posts: "لا توجد منشورات متاحة.",
      blog_date_badge: "التاريخ",
      blog_search_results: "نتائج البحث",
      blog_results_found: "نتيجة",
      blog_results_not_found: "لم نجد أي مقالات مطابقة للبحث.",
      blog_published_date: "منشور في",
      blog_by_author: "بقلم",

      // Admin Blog Dashboard
      admin_dashboard_title: "لوحة تحكم المدونة",
      admin_total_posts: "إجمالي المنشورات",
      admin_published_posts: "منشورات منشورة",
      admin_add_new_post: "إضافة منشور",
      admin_posts_list_title: "قائمة المنشورات",
      admin_search_posts: "ابحث في المقالات...",
      admin_table_title_col: "العنوان",
      admin_table_date_col: "التاريخ",
      admin_table_slug_col: "الرابط",
      admin_table_actions_col: "الإجراءات",
      admin_edit_btn: "تعديل",
      admin_delete_btn: "حذف",
      admin_delete_confirm_msg: "هل أنت متأكد من حذف هذا المنشور؟",
      admin_search_results_count: "نتيجة",
      admin_no_posts_msg: "لا توجد منشورات حتى الآن.",
      admin_prev_pagination: "السابق",
      admin_next_pagination: "التالي",
      admin_page_indicator: "صفحة",
      admin_of_pages: "من",

      // Admin Form
      admin_form_title: "إضافة منشور جديد",
      admin_form_title_edit: "تعديل المنشور",
      admin_form_title_en_label: "العنوان (EN)",
      admin_form_title_ar_label: "العنوان (AR)",
      admin_form_slug_label: "الرابط",
      admin_form_slug_hint: "سيتم إنشاؤه تلقائياً من العنوان إذا ترك فارغاً",
      admin_form_date_label: "التاريخ",
      admin_form_excerpt_en_label: "الملخص (EN)",
      admin_form_excerpt_ar_label: "الملخص (AR)",
      admin_form_image_label: "رفع الصورة",
      admin_form_image_drag_hint: "اسحب وأفلت الصورة هنا أو انقر للاختيار",
      admin_form_content_en_label: "المحتوى (EN)",
      admin_form_content_ar_label: "المحتوى (AR)",
      admin_form_submit_create: "إنشاء المنشور",
      admin_form_submit_update: "تحديث المنشور",
      admin_form_reset_btn: "إعادة تعيين",

      // Admin Alerts
      admin_alert_success: "تم بنجاح",
      admin_alert_error: "خطأ",
      admin_alert_create_success: "تم إنشاء المنشور بنجاح.",
      admin_alert_update_success: "تم تحديث المنشور بنجاح.",
      admin_alert_delete_success: "تم حذف المنشور بنجاح.",
      admin_alert_required_fields: "العنوان والمحتوى باللغة الإنجليزية مطلوبان.",
      admin_alert_save_error: "فشل حفظ المنشور. حاول مرة أخرى.",

      // Admin Toolbar
      admin_toolbar_bold: "غامق",
      admin_toolbar_italic: "مائل",
      admin_toolbar_underline: "تسطير",
      admin_toolbar_list: "قائمة",
      admin_toolbar_link: "رابط",

      // Admin Pagination
      admin_pagination_previous: "السابق",
      admin_pagination_next: "التالي",

      // Stats Bar
      admin_stats_total: "إجمالي المنشورات",
      admin_stats_published: "منشورات منشورة",
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
