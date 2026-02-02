import { PROJECTS } from './projects';

export const COMPANY_DATA = {
    "company": {
        "name": {
            "ar": "شركة مروان احمد الكردي وشركاه ذ.م.م",
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd"
        },
        "shortName": {
            "ar": "مروان الكردي",
            "en": "M. Kurdi"
        },
        "domain": "mkurdi.com",
        "established": "45 Years of Experience",
        "logo": {
            "high": "images/logo.png",
            "low": "images/logo.png",
            "favicon": "images/logo.png"
        }
    },
    "contact": {
        "phone": "(06) 581 9489",
        "fax": "0096265819488",
        "email": "info@mkurdi.com",
        "hours": {
            "ar": "السبت - الاثنين: 7:30 صباحاً - 4:30 مساءً\nالثلاثاء - الخميس: 7:30 صباحاً - 4:30 مساءً\nالجمعة: مغلق",
            "en": "Sat - Mon: 7:30 AM - 4:30 PM\nTue - Thu: 7:30 AM - 4:30 PM\nFri: Closed"
        },
        "address": {
            "ar": "عمان - الدوار السابع –ش:عبدالله غوشة-مقابل فندق جنيفا-عمارة رقم 17",
            "en": "Amman - 7th Circle - Abdullah Ghosheh St. - Opposite Geneva Hotel - Building No. 17"
        },
        "mapEmbed": "https://www.google.com/maps/d/embed?mid=1h98aurr-Z8FkQYUnQImuuvd1dZU"
    },
    "social": {
        "facebook": "https://www.facebook.com/mkurdiCom"
    },
    "navigation": {
        "mainMenu": [
            {
                "id": "home",
                "label": { "ar": "الرئيسية", "en": "Home" },
                "url": "/"
            },
            {
                "id": "about",
                "label": { "ar": "نبذة عن الشركة", "en": "About" },
                "url": "/about"
            },
            {
                "id": "services",
                "label": { "ar": "الخدمات", "en": "Services" },
                "url": "/services"
            },
            {
                "id": "projects",
                "label": { "ar": "المشاريع", "en": "Projects" },
                "url": "/projects",
                "submenu": [
                    {
                        "id": "ongoing",
                        "label": { "ar": "مشاريع قيد التنفيذ", "en": "Ongoing Projects" },
                        "url": "/projects?category=ongoing"
                    },
                    {
                        "id": "completed",
                        "label": { "ar": "مشاريع تم الانتهاء منها", "en": "Completed Projects" },
                        "hasCategories": true
                    }
                ]
            },
            {
                "id": "references",
                "label": { "ar": "المراجع", "en": "References" },
                "url": "/references"
            },
            {
                "id": "news",
                "label": { "ar": "الأخبار", "en": "News" },
                "url": "/news"
            },
            {
                "id": "contact",
                "label": { "ar": "اتصل بنا", "en": "Contact" },
                "url": "/contact"
            }
        ],
        "languageSwitcher": {
            "ar": "/",
            "en": "/en"
        }
    },
    "about": {
        "sections": [
            {
                "id": "about_company",
                "title": { "ar": "نبذة عن الشركة", "en": "About the Company" },
                "pageId": 7,
                "icon": "fa-info-circle",
                "content": {
                    "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd. was established in 1981, and we are honored to be one of the leading construction companies in Jordan. Our company operates and provides the best Contracting and Construction practice based on the latest technologies in the construction fields and applying the highest standards for safety and environmental protection. Our philosophy is based on client satisfaction, which is one of the most critical elements to our success. With over 45 years of experience, we continue to shape the skyline of Jordan.",
                    "ar": "تأسست شركة مروان أحمد الكردي وشركاه ذ.م.م في عام 1981، ونحن فخورون بكوننا واحدة من الشركات الرائدة في مجال الإنشاءات في الأردن. تعمل شركتنا وتقدم أفضل ممارسات المقاولات والإنشاءات بناءً على أحدث التقنيات في مجالات البناء وتطبيق أعلى معايير السلامة وحماية البيئة. فلسفتنا قائمة على رضا العملاء، وهو أحد أهم العناصر لنجاحنا."
                },
                "image": "images/legacy_45_years.png"
            },
            {
                "id": "company_history",
                "title": { "ar": "نبذة عن تاريخ الشركة", "en": "Company History" },
                "description": {
                    "ar": "تأسست شركة مروان أحمد الكردي و شركاه ذ.م.م في عام 1981 وتفخر شركتنا بأنها من الشركات الرائدة في مجال المقاولات الإنشائية في الأردن.",
                    "en": "Marwan Ahmad Alkurdi & Part. Co. Ltd. (MK) was originally established in Zarka/Jordan by Engineer Marwan Alkurdi under the name of 'Modern Zarqa Establishment for Construction' in 1981. MK started with private and public buildings construction and general contracting works and has become one of the biggest and leading companies in Jordan. We successfully completed a variety of special construction works such as Dams, Bridges, Highways, Piling Works, and Post-tensioning works. Our success in Jordan was our reference for expanding as an international contractor, initially with Bridge Construction in Saudi Arabia."
                }
            },
            {
                "id": "chairman_word",
                "title": { "ar": "كلمة الرئيس", "en": "Chairman's Word" },
                "pageId": 9,
                "content": {
                    "en": "It is with great honor I welcome you to Marwan Ahmad Alkurdi & Part. Co. Ltd. website. We are proud to be one of the biggest construction companies in Jordan, keeping on developing and extending our markets. Special thanks to my team which consists of a selection of managers, engineers, technicians, and special employees who are trained to assist in the development, management, and execution of works to the highest quality and standards. Our company applies the highest technologies, safety, health, and environmental standards. I hope you enjoy visiting our website.",
                    "ar": "إنه لشرف عظيم أن أرحب بكم في الموقع الإلكتروني لشركة مروان أحمد الكردي وشركاه. نحن فخورون بكوننا واحدة من أكبر شركات الإنشاءات في الأردن، ونواصل تطوير وتوسيع أسواقنا. شكر خاص لفريقي الذي يتكون من نخبة من المديرين والمهندسين والفنيين والموظفين المتخصصين المدربين للمساعدة في تطوير وإدارة وتنفيذ الأعمال بأعلى مستويات الجودة والمعايير."
                }
            },
            {
                "id": "branches",
                "title": { "ar": "الفروع", "en": "Branches" },
                "pageId": 10
            },
            {
                "id": "memberships",
                "title": { "ar": "العضويات والشهادات", "en": "Memberships & Affiliations" },
                "content": {
                    "en": "Marwan Ahmad Alkurdi & Partners is a First Grade Contractor member of the Jordanian Contractors Association. We are also proud members of the Arab Contractors Union, the Islamic Contractors Union, and the International Real Estate Valuation Federation (FIABCI). We are also registered in the Aqaba Special Economic Zone Authority (ASEZA).",
                    "ar": "شركة مروان أحمد الكردي وشركاه عضو في نقابة المقاولين الأردنيين (درجة أولى). نحن أيضًا أعضاء فخورون في اتحاد المقاولين العرب، واتحاد المقاولين الإسلاميين، والاتحاد العالمي للعقارات (FIABCI). كما أننا مسجلون في سلطة منطقة العقبة الاقتصادية الخاصة (ASEZA)."
                },
                "icon": "Award"
            }
        ],
        "certifications": {
            "folder": "كتالوج الشركة/Cerificates",
            "description": "Company certifications and awards"
        }
    },
    "services": {
        "mainServices": [
            {
                "id": "civil_works",
                "title": { "ar": "الأعمال المدنية", "en": "Civil Works" },
                "pageId": 101,
                "icon": "images/s1.png",
                "description": "Comprehensive civil engineering services including Bridges, Dams, Roads, and Infrastructure."
            },
            {
                "id": "specialized",
                "title": { "ar": "الشركة الدولية للحقن", "en": "International Injection Co." },
                "pageId": 15,
                "icon": "images/s1.png",
                "description": "Specialized injection services forsoil stabilization and leak sealing."
            },
            {
                "id": "equipment",
                "title": { "ar": "المعدات الخاصة", "en": "Special Equipment" },
                "pageId": 17,
                "icon": "images/s2.png",
                "description": "State-of-the-art construction equipment and heavy machinery fleet."
            },
            {
                "id": "water_wells",
                "title": { "ar": "حفر الآبار العميقة", "en": "Deep Water Wells" },
                "pageId": 18,
                "icon": "images/s1.png",
                "description": "Drilling and development of production water wells in strategic basins (Disi, Al-Hidan)."
            }
        ]
    },
    "projects": {
        "all": PROJECTS,
        "featuredIds": ["7", "1", "3", "6"], // Disi, Wehda, Aqaba Entrance, Dead Sea Panorama
        "categories": [
            { "id": "1", "name": { "ar": "الجسور", "en": "Bridges" } },
            { "id": "2", "name": { "ar": "السدود", "en": "Dams" } },
            { "id": "3", "name": { "ar": "الطرق", "en": "Roads" } },
            { "id": "4", "name": { "ar": "مسبق الأجهاد", "en": "Prestress" } },
            { "id": "5", "name": { "ar": "الاعمال المدنية", "en": "Civil" } },
            { "id": "6", "name": { "ar": "اعمال الإصلاح والصيانة", "en": "Repair" } },
            { "id": "7", "name": { "ar": "المرافق", "en": "Utilities" } },
            { "id": "9", "name": { "ar": "مشاريع قيد التنفيذ", "en": "Projects in progress" } }
        ]
    },
    "stats": [
        { "label": { "en": "Years Experience", "ar": "سنوات من الخبرة" }, "value": "45+", "icon": "Trophy" },
        { "label": { "en": "Major Projects", "ar": "مشروع ضخم" }, "value": "50+", "icon": "Building" },
        { "label": { "en": "Expert Engineers", "ar": "مهندس خبير" }, "value": "120+", "icon": "Users" },
        { "label": { "en": "ISO Certified", "ar": "شهادة ISO" }, "value": "9001", "icon": "ShieldCheck" }
    ],
    "legacy": {
        "title": { "en": "Engineering the Future of Jordan", "ar": "هندسة مستقبل الأردن" },
        "subtitle": { "en": "Our Legacy", "ar": "إرثنا" },
        "description": {
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd has been a cornerstone of Jordan's infrastructure development for over four decades. From the massive **Dissi Pipeline** to critical **Dam Construction**, we deliver engineering solutions that stand the test of time. Authorized by the highest standards and Royal Patronage.",
            "ar": "تعتبر شركة مروان أحمد الكردي وشركاه حجر الزاوية في تطوير البنية التحتية في الأردن لأكثر من أربعة عقود. من خط ديسي الضخم إلى بناء السدود الحيوية، نقدم حلولاً هندسية تصمد أمام اختبار الزمن. معتمدون بأعلى المعايير والرعاية الملكية."
        },
        "image": "images/legacy_45_years.png"
    }
}