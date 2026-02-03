import { PROJECTS } from './projects';

export const COMPANY_DATA = {
    "company": {
        "name": {
            "ar": "شركة مروان أحمد الكردي وشركاؤه المحدودة",
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd"
        },
        "shortName": {
            "ar": "M. Kurdi",
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
            "ar": "السبت – الاثنين: 7:30 صباحاً – 4:30 مساءً\nالثلاثاء – الخميس: 7:30 صباحاً – 4:30 مساءً\nالجمعة: مغلق",
            "en": "Sat - Mon: 7:30 AM - 4:30 PM\nTue - Thu: 7:30 AM - 4:30 PM\nFri: Closed"
        },
        "address": {
            "ar": "عمّان – الدوار السابع – شارع عبد الله غوشة – مقابل فندق جنيف – مبنى رقم 17",
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
                "label": { "ar": "من نحن", "en": "About" },
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
                        "label": { "ar": "المشاريع قيد التنفيذ", "en": "Ongoing Projects" },
                        "url": "/projects?category=ongoing"
                    },
                    {
                        "id": "completed",
                        "label": { "ar": "المشاريع المنجزة", "en": "Completed Projects" },
                        "hasCategories": true
                    }
                ]
            },
            {
                "id": "references",
                "label": { "ar": "المرجعيات", "en": "References" },
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
                "title": { "ar": "عن الشركة", "en": "About the Company" },
                "pageId": 7,
                "icon": "fa-info-circle",
                "content": {
                    "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd. was established in 1981, and we are honored to be one of the leading construction companies in Jordan. Our company operates and provides the best Contracting and Construction practice based on the latest technologies in the construction fields and applying the highest standards for safety and environmental protection. Our philosophy is based on client satisfaction, which is one of the most critical elements to our success. With over 45 years of experience, we continue to shape the skyline of Jordan.",
                    "ar": "تأسست شركة مروان أحمد الكردي وشركاؤه المحدودة عام 1981، ونفخر بكوننا من الشركات الرائدة في مجال الإنشاءات في الأردن. نقدم أفضل ممارسات المقاولات والإنشاء باستخدام أحدث التقنيات، مع الالتزام بأعلى معايير السلامة وحماية البيئة. تقوم فلسفتنا على رضا العميل باعتباره الركيزة الأساسية لنجاحنا. وبخبرة تزيد عن 45 عاماً، نواصل المساهمة في رسم ملامح عمران الأردن."
                },
                "image": "images/legacy_45_years.png"
            },
            {
                "id": "company_history",
                "title": { "ar": "تاريخ الشركة", "en": "Company History" },
                "description": {
                    "ar": "تأسست شركة مروان أحمد الكردي وشركاؤه (MK) في مدينة الزرقاء عام 1981 على يد المهندس مروان الكردي تحت اسم “مؤسسة الزرقاء الحديثة للإنشاءات”. بدأت الشركة بتنفيذ المباني الخاصة والعامة وأعمال المقاولات العامة، ثم تطورت لتصبح واحدة من أكبر شركات المقاولات في الأردن. أنجزت الشركة العديد من المشاريع المتخصصة مثل السدود والجسور والطرق السريعة وأعمال الخوازيق والشد اللاحق، وكان نجاحها المحلي بوابة للتوسع الإقليمي بدءاً من مشاريع الجسور في المملكة العربية السعودية.",
                    "en": "Marwan Ahmad Alkurdi & Part. Co. Ltd. (MK) was originally established in Zarka/Jordan by Engineer Marwan Alkurdi under the name of 'Modern Zarqa Establishment for Construction' in 1981. MK started with private and public buildings construction and general contracting works and has become one of the biggest and leading companies in Jordan. We successfully completed a variety of special construction works such as Dams, Bridges, Highways, Piling Works, and Post-tensioning works. Our success in Jordan was our reference for expanding as an international contractor, initially with Bridge Construction in Saudi Arabia."
                }
            },
            {
                "id": "chairman_word",
                "title": { "ar": "كلمة رئيس مجلس الإدارة", "en": "Chairman's Word" },
                "pageId": 9,
                "content": {
                    "en": "It is with great honor I welcome you to Marwan Ahmad Alkurdi & Part. Co. Ltd. website. We are proud to be one of the biggest construction companies in Jordan, keeping on developing and extending our markets. Special thanks to my team which consists of a selection of managers, engineers, technicians, and special employees who are trained to assist in the development, management, and execution of works to the highest quality and standards. Our company applies the highest technologies, safety, health, and environmental standards. I hope you enjoy visiting our website.",
                    "ar": "يسرني أن أرحب بكم في الموقع الإلكتروني لشركة مروان أحمد الكردي وشركاؤه المحدودة. نفخر بكوننا من أكبر شركات الإنشاءات في الأردن، ونواصل تطوير أعمالنا وتوسيع أسواقنا. أتقدم بالشكر لفريق العمل المتميز من مدراء ومهندسين وفنيين وموظفين مؤهلين يساهمون في تنفيذ المشاريع بأعلى مستويات الجودة. نلتزم بتطبيق أحدث التقنيات وأعلى معايير السلامة والصحة والبيئة. نتمنى لكم تجربة مميزة أثناء تصفح موقعنا."
                }
            },
            {
                "id": "branches",
                "title": { "ar": "الفروع", "en": "Branches" },
                "pageId": 10
            },
            {
                "id": "memberships",
                "title": { "ar": "العضويات والاعتمادات", "en": "Memberships & Affiliations" },
                "content": {
                    "en": "Marwan Ahmad Alkurdi & Partners is a First Grade Contractor member of the Jordanian Contractors Association. We are also proud members of the Arab Contractors Union, the Islamic Contractors Union, and the International Real Estate Valuation Federation (FIABCI). We are also registered in the Aqaba Special Economic Zone Authority (ASEZA).",
                    "ar": "شركة مروان أحمد الكردي وشركاؤه عضو مقاول من الدرجة الأولى في نقابة مقاولي الإنشاءات الأردنية، وعضو في اتحاد المقاولين العرب، واتحاد المقاولين الإسلاميين، والاتحاد الدولي للعقارات (FIABCI). كما أننا مسجلون لدى سلطة منطقة العقبة الاقتصادية الخاصة."
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
                "description": {
                    "en": "Comprehensive civil engineering services including Bridges, Dams, Roads, and Infrastructure.",
                    "ar": "خدمات هندسية مدنية متكاملة تشمل الجسور والسدود والطرق والبنية التحتية."
                }
            },
            {
                "id": "specialized",
                "title": { "ar": "الحقن الهندسي الدولي", "en": "International Injection Co." },
                "pageId": 15,
                "icon": "images/s1.png",
                "description": {
                    "en": "Specialized injection services for soil stabilization and leak sealing.",
                    "ar": "خدمات حقن متخصصة لتثبيت التربة ومعالجة التسربات."
                }
            },
            {
                "id": "equipment",
                "title": { "ar": "المعدات الخاصة", "en": "Special Equipment" },
                "pageId": 17,
                "icon": "images/s2.png",
                "description": {
                    "en": "State-of-the-art construction equipment and heavy machinery fleet.",
                    "ar": "أسطول متطور من المعدات والآليات الثقيلة الحديثة."
                }
            },
            {
                "id": "water_wells",
                "title": { "ar": "آبار المياه العميقة", "en": "Deep Water Wells" },
                "pageId": 18,
                "icon": "images/s1.png",
                "description": {
                    "en": "Drilling and development of production water wells in strategic basins (Disi, Al-Hidan).",
                    "ar": "حفر وتطوير آبار إنتاج المياه في الأحواض الاستراتيجية (الديسي، الحيدان)."
                }
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
            { "id": "4", "name": { "ar": "الشد اللاحق", "en": "Prestress" } },
            { "id": "5", "name": { "ar": "الأعمال المدنية", "en": "Civil" } },
            { "id": "6", "name": { "ar": "الإصلاح والصيانة", "en": "Repair" } },
            { "id": "7", "name": { "ar": "المرافق والخدمات", "en": "Utilities" } },
            { "id": "9", "name": { "ar": "المشاريع قيد التنفيذ", "en": "Projects in progress" } }
        ]
    },
    "stats": [
        { "label": { "en": "Years Experience", "ar": "سنوات الخبرة" }, "value": "45+", "icon": "Trophy" },
        { "label": { "en": "Major Projects", "ar": "المشاريع الكبرى" }, "value": "50+", "icon": "Building" },
        { "label": { "en": "Expert Engineers", "ar": "مهندسون خبراء" }, "value": "120+", "icon": "Users" },
        { "label": { "en": "ISO Certified", "ar": "معتمدون بشهادة ISO" }, "value": "9001", "icon": "ShieldCheck" }
    ],
    "legacy": {
        "title": { "en": "Engineering the Future of Jordan", "ar": "هندسة مستقبل الأردن" },
        "subtitle": { "en": "Our Legacy", "ar": "إرثنا" },
        "description": {
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd has been a cornerstone of Jordan's infrastructure development for over four decades. From the massive **Dissi Pipeline** to critical **Dam Construction**, we deliver engineering solutions that stand the test of time. Authorized by the highest standards and Royal Patronage.",
            "ar": "تُعد شركة مروان أحمد الكردي وشركاؤه المحدودة ركناً أساسياً في تطوير البنية التحتية في الأردن لأكثر من أربعة عقود. من مشروع ناقل الديسي العملاق إلى مشاريع السدود الحيوية، نقدم حلولاً هندسية تصمد أمام اختبار الزمن، وفق أعلى المعايير وباعتماد رسمي ورعاية ملكية."
        },
        "image": "images/legacy_45_years.png"
    },
    "hero": {
        "est": { "en": "Est. 1979 • Amman, Jordan", "ar": "تأسست عام 1979 • عمّان، الأردن" },
        "title": { "en": "Building Legacy", "ar": "بناء الإرث" },
        "subtitle": {
            "en": "Pioneering major infrastructure, dams, and specialized engineering projects across the Kingdom for over 45 years.",
            "ar": "روّاد المشاريع الكبرى للبنية التحتية والسدود والهندسة المتخصصة في مختلف أنحاء المملكة لأكثر من 45 عاماً."
        },
        "cta": {
            "portfolio": { "en": "View Portfolio", "ar": "عرض المشاريع" },
            "contact": { "en": "Contact Us", "ar": "تواصل معنا" }
        }
    },
    "footer": {
        "navigation": { "en": "Navigation", "ar": "التنقل" },
        "services": { "en": "Services", "ar": "الخدمات" },
        "contact": { "en": "Contact", "ar": "التواصل" },
        "rights": { "en": "All Rights Reserved.", "ar": "جميع الحقوق محفوظة" },
        "privacy": { "en": "Privacy Policy", "ar": "سياسة الخصوصية" },
        "terms": { "en": "Terms of Service", "ar": "شروط الاستخدام" },
        "description": {
            "en": "Building the foundation of modern infrastructure with over 45 years of excellence in Dams, Power, and Civil Engineering.",
            "ar": "نبني أسس البنية التحتية الحديثة بخبرة تتجاوز 45 عاماً في مشاريع السدود والطاقة والهندسة المدنية."
        }
    },
    "homeComponents": {
        "theCore": {
            "label": { "ar": "المعايير العالمية", "en": "Global Standards" },
            "title": { "ar": "الجوهر", "en": "The Core" },
            "description": {
                "ar": "في صميم عملياتنا يكمن التزام راسخ بالدقة الهندسية. نحن لا نبني منشآت فحسب، بل نصمم أنظمة متكاملة تُشغّل الدول.",
                "en": "At the heart of our operations lies an unwavering commitment to engineering precision. We don't just build structures; we orchestrate complex systems that power nations."
            }
        },
        "services": {
            "label": { "ar": "خبراتنا", "en": "Our Expertise" },
            "title": { "ar": "خدمات هندسية متخصصة", "en": "Specialized Engineering Services" },
            "link": { "ar": "اعرف المزيد", "en": "Learn More" }
        },
        "portfolio": {
            "filterAll": { "ar": "جميع المشاريع", "en": "All Projects" },
            "title": { "ar": "محفظة أعمالنا", "en": "Our Portfolio" },
            "description": {
                "ar": "مجموعة من المعالم الهندسية التي تُشكل مستقبل الأردن.",
                "en": "A collection of infrastructure landmarks shaping the future of Jordan."
            },
            "viewProject": { "ar": "عرض المشروع", "en": "View Project" }
        }
    }
}