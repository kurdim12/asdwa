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
        "whatsapp": "", // intl format e.g. 9627XXXXXXXX — button appears once set

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
                        "url": "/projects?category=9"
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
            "title": { "en": "Certifications & Awards", "ar": "الشهادات والجوائز" },
            "images": []
        }
    },
    "services": {
        "mainServices": [
            {
                "id": "civil_works",
                "illustration": "/illustrations/dam.svg",
                "title": { "ar": "الأعمال المدنية", "en": "Civil Works" },
                "pageId": 101,
                "icon": "images/s1.png",
                "description": {
                    "en": "Comprehensive civil engineering services including Bridges, Dams, Roads, and Infrastructure. Our portfolio includes major national projects like Al Wehda Dam and Amman Development Corridor.",
                    "ar": "خدمات هندسية مدنية متكاملة تشمل الجسور والسدود والطرق والبنية التحتية. تشمل محفظتنا مشاريع وطنية كبرى مثل سد الوحدة وممر عمان التنموي."
                },
                "gallery": [
                    "images/projects/AL WHDAHA DAM/1.JPG",
                    "images/projects/AL WHDAHA DAM/2.jpg",
                    "images/projects/AL WHDAHA DAM/3.jpg",
                    "images/projects/AL WHDAHA DAM/4.JPG",
                    "images/projects/AL WHDAHA DAM/5.JPG",
                    "images/projects/AL WHDAHA DAM/6.JPG",
                    "images/projects/AL WHDAHA DAM/7.JPG",
                    "images/projects/AL WHDAHA DAM/8.JPG",
                    "images/projects/AL WHDAHA DAM/DSC05305.JPG",
                    "images/projects/AL WHDAHA DAM/DSC06885.jpg"
                ]
            },
            {
                "id": "specialized",
                "illustration": "/illustrations/piling-rig.svg",
                "title": { "ar": "الحقن الهندسي الدولي", "en": "International Injection Co." },
                "pageId": 15,
                "icon": "images/s1.png",
                "description": {
                    "en": "Specialized injection services for soil stabilization, leak sealing, and structural rehabilitation using advanced grouting techniques.",
                    "ar": "خدمات حقن متخصصة لتثبيت التربة ومعالجة التسربات وإعادة التأهيل الهيكلي باستخدام تقنيات الحقن المتقدمة."
                },
                "gallery": [
                    "images/services/grouting/DSCS_11722.JPG",
                    "images/services/grouting/DSC_0909.JPG",
                    "images/services/grouting/DSC_14180.JPG",
                    "images/services/grouting/DSC_14186.JPG",
                    "images/services/grouting/DSC_15224.JPG",
                    "images/services/grouting/DSC_15277.JPG",
                    "images/services/grouting/DSC_15545.JPG",
                    "images/services/grouting/DSC_16000.JPG",
                    "images/services/grouting/DSC_16072.JPG",
                    "images/services/grouting/DSC_1812.JPG",
                    "images/services/grouting/DSC_1864.JPG",
                    "images/services/grouting/DSC_7170.JPG",
                    "images/services/grouting/IMG_5232.JPG"
                ]
            },
            {
                "id": "equipment",
                "illustration": "/illustrations/crane.svg",
                "title": { "ar": "المعدات الخاصة", "en": "Special Equipment" },
                "pageId": 17,
                "icon": "images/s2.png",
                "description": {
                    "en": "State-of-the-art construction equipment and heavy machinery fleet, maintained to the highest standards for reliable project execution.",
                    "ar": "أسطول متطور من المعدات والآليات الثقيلة الحديثة، يتم صيانته وفق أعلى المعايير لتنفيذ المشاريع بموثوقية."
                },
                "gallery": [
                    "images/services/equipment/DSC00419.JPG",
                    "images/services/equipment/DSC00427.JPG",
                    "images/services/equipment/DSC00917.JPG",
                    "images/services/equipment/DSC00920.JPG",
                    "images/services/equipment/DSC01609_2.JPG",
                    "images/services/equipment/pic_10_DSC01084_3.JPG",
                    "images/services/equipment/pic_11_DSC06185.JPG",
                    "images/services/equipment/pic_12_DSC00708.JPG",
                    "images/services/equipment/pic_15_119_24-Modified.jpg",
                    "images/services/equipment/pic_8_DSC02109.JPG",
                    "images/services/equipment/pic_9_DSC01804.JPG"
                ]
            },
            {
                "id": "water_wells",
                "illustration": "/illustrations/water-well.svg",
                "title": { "ar": "آبار المياه العميقة", "en": "Deep Water Wells" },
                "pageId": 18,
                "icon": "images/s1.png",
                "description": {
                    "en": "Drilling and development of production water wells in strategic basins. Expertise in deep drilling and water infrastructure projects like the Dissi Pipeline.",
                    "ar": "حفر وتطوير آبار إنتاج المياه في الأحواض الاستراتيجية. خبرة في الحفر العميق ومشاريع البنية التحتية للمياه مثل خط الديسي."
                },
                "gallery": [
                    "images/projects/Dissi Pipeline/DSC00000.JPG",
                    "images/projects/Dissi Pipeline/DSC01339.JPG",
                    "images/projects/Dissi Pipeline/New folder/DSC01713.JPG",
                    "images/projects/Dissi Pipeline/New folder/DSC01894.JPG",
                    "images/projects/Dissi Pipeline/New folder/DSC02072.JPG"
                ]
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
        { "label": { "en": "Years in operation", "ar": "عاماً من العمل" }, "value": "45", "icon": "Trophy" },
        { "label": { "en": "Documented projects", "ar": "مشروعاً موثقاً" }, "value": "27", "icon": "Building" },
        { "label": { "en": "Engineering sectors", "ar": "قطاعات هندسية" }, "value": "8", "icon": "Users" },
        { "label": { "en": "ISO certified", "ar": "معتمدون بشهادة ISO" }, "value": "9001", "icon": "ShieldCheck" }
    ],
    "legacy": {
        "title": { "en": "Engineering the Future of Jordan", "ar": "هندسة مستقبل الأردن" },
        "subtitle": { "en": "Our Legacy", "ar": "إرثنا" },
        "description": {
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd has been a cornerstone of Jordan's infrastructure development for over four decades. From the Disi water conveyance to roller-compacted-concrete dams, the work is delivered, documented, and still in service — a first-grade classified contractor with the Jordanian Contractors Association.",
            "ar": "تُعد شركة مروان أحمد الكردي وشركاؤه المحدودة ركناً أساسياً في تطوير البنية التحتية في الأردن لأكثر من أربعة عقود. من مشروع ناقل الديسي إلى سدود الخرسانة المدحولة، أعمالنا منفذة وموثقة وما تزال في الخدمة — مقاول مصنف درجة أولى لدى نقابة مقاولي الإنشاءات الأردنية."
        },
        "image": "images/legacy_45_years.png"
    },
    "hero": {
        "est": { "en": "Est. 1981 • Amman, Jordan", "ar": "تأسست عام 1981 • عمّان، الأردن" },
        "title": { "en": "Building Legacy", "ar": "بناء الإرث" },
        "subtitle": {
            "en": "Bridges, dams, highways and water infrastructure — heavy civil works delivered across Jordan and the region since 1981.",
            "ar": "جسور وسدود وطرق وبنية تحتية مائية — أعمال مدنية ثقيلة منفذة في الأردن والمنطقة منذ عام 1981."
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
            "en": "Heavy civil contractor delivering bridges, dams, roads and water infrastructure across Jordan since 1981.",
            "ar": "مقاول أعمال مدنية ثقيلة ينفذ الجسور والسدود والطرق والبنية التحتية المائية في الأردن منذ عام 1981."
        }
    },
    "news": [
        {
            "id": 1,
            "title": { "en": "Al Wehda Dam: A Strategic Feat", "ar": "سد الوحدة: إنجاز استراتيجي" },
            "date": "2024",
            "category": "Dams",
            "image": "images/projects/AL WHDAHA DAM/1.JPG",
            "summary": {
                "en": "A strategic water infrastructure project on the Yarmouk River, contributing significantly to Jordan's water storage capacity.",
                "ar": "مشروع بنية تحتية مائي استراتيجي على نهر اليرموك، يساهم بشكل كبير في الطاقة التخزينية للمياه في الأردن."
            },
            "fullContent": {
                "en": "The Al Wehda Dam stands as a monumental achievement in Jordan's water infrastructure development. Located on the Yarmouk River, this massive concrete gravity dam is engineered to address the region's critical water needs. \n\nOur team executed complex civil works under challenging geological conditions, employing advanced concrete placement techniques and rigorous quality control measures. The project not only boosts water storage capacity but also supports agricultural irrigation in the Jordan Valley.",
                "ar": "يقف سد الوحدة كإنجاز تاريخي في تطوير البنية التحتية المائية في الأردن. يقع هذا السد الخرساني الضخم على نهر اليرموك، وقد تم تصميمه لتلبية الاحتياجات المائية الحرجة للمنطقة. \n\nنفذ فريقنا أعمالاً مدنية معقدة في ظل ظروف جيولوجية صعبة، مستخدماً تقنيات متقدمة في صب الخرسانة وتدابير صارمة لمراقبة الجودة. لا يقتصر دور المشروع على تعزيز الطاقة التخزينية للمياه فحسب، بل يدعم أيضاً الري الزراعي في وادي الأردن."
            },
            "quote": {
                "en": "Building for the future requires taming nature's most powerful forces.",
                "ar": "البناء للمستقبل يتطلب ترويض أقوى قوى الطبيعة."
            }
        },
        {
            "id": 2,
            "title": { "en": "Aqaba Thermal Power Station Excellence", "ar": "تميز محطة العقبة الحرارية" },
            "date": "2023",
            "category": "Power",
            "image": "images/projects/AQABA THERMAL POWER STATION/1.jpg",
            "summary": {
                "en": "Execution of civil works for a major energy facility, ensuring stable power supply for the southern region.",
                "ar": "تنفيذ الأعمال المدنية لمنشأة طاقة كبرى، مما يضمن إمدادات طاقة مستقرة للمنطقة الجنوبية."
            },
            "fullContent": {
                "en": "Powering the pulse of the south, the Aqaba Thermal Power Station project demanded extreme precision. We delivered comprehensive civil engineering solutions for the turbine halls, cooling systems, and administrative complexes. \n\nThe project highlights our capability to deliver industrial-grade infrastructure that meets international energy standards.",
                "ar": "بمد شريان الطاقة للجنوب، تطلب مشروع محطة العقبة الحرارية دقة متناهية. قدمنا حلولاً هندسية مدنية شاملة لقاعات التوربينات، وأنظمة التبريد، والمجمعات الإدارية. \n\nيبرز المشروع قدرتنا على تنفيذ بنية تحتية صناعية تلبي معايير الطاقة الدولية."
            },
            "quote": {
                "en": "Energy is the backbone of industry, and we build its foundation.",
                "ar": "الطاقة هي العمود الفقري للصناعة، ونحن نبني الأساس."
            }
        },
        {
            "id": 3,
            "title": { "en": "Dead Sea Panorama: Nature & Design", "ar": "بانوراما البحر الميت: الطبيعة والتصميم" },
            "date": "2023",
            "category": "Development",
            "image": "images/projects/Dead Sea Panorama/1.jpg",
            "summary": {
                "en": "Creating a world-class tourist destination with breathtaking views, blending architecture with the natural landscape.",
                "ar": "إنشاء وجهة سياحية عالمية المستوى بإطلالات خلابة، تمزج العمارة بالمناظر الطبيعية."
            },
            "fullContent": {
                "en": "Perched on the edge of the cliffs overlooking the lowest point on Earth, the Dead Sea Panorama Complex is a masterpiece of landscape architecture. \n\nOur construction approach prioritized minimal environmental impact while maximizing the visitor experience. Stone masonry sourced from local quarries ensures the structure harmonizes with its rugged surroundings.",
                "ar": "يقع مجمع بانوراما البحر الميت على حافة المنحدرات المطلة على أخفض نقطة على وجه الأرض، وهو تحفة في هندسة المناظر الطبيعية. \n\nأعطى نهج البناء لدينا الأولوية لتقليل التأثير البيئي مع تعظيم تجربة الزوار. تضمن الأعمال الحجرية المستخرجة من المحاجر المحلية انسجام الهيكل مع محيطه الوعر."
            },
            "quote": {
                "en": "Architecture should whisper to the landscape, not shout at it.",
                "ar": "العمارة يجب أن تهمس للطبيعة، لا أن تصرخ في وجهها."
            }
        },
        {
            "id": 4,
            "title": { "en": "Park Way Project", "ar": "مشروع بارك واي" },
            "date": "2023",
            "category": "Infrastructure",
            "image": "images/projects/Park Way/DSC01096.JPG",
            "summary": {
                "en": "Enhancing urban connectivity through modern road infrastructure design and execution.",
                "ar": "تعزيز الاتصال الحضري من خلال تصميم وتنفيذ بنية تحتية حديثة للطرق."
            },
            "fullContent": {
                "en": "Urban mobility is the key to a thriving city. The Park Way Project involved complex intersection upgrades, meticulous asphalt paving, and modern drainage systems. \n\nBy optimizing traffic flow and safety features, we've created a route that not only connects destinations but elevates the driving experience.",
                "ar": "التنقل الحضري هو مفتاح المدينة المزدهرة. تضمن مشروع بارك واي تحديثات معقدة للتقاطعات، ورصف أسفلتي دقيق، وأنظمة تصريف حديثة. \n\nمن خلال تحسين انسيابية المرور وميزات السلامة، أنشأنا طريقاً لا يربط بين الوجهات فحسب، بل يرتقي بتربة القيادة."
            },
            "quote": {
                "en": "Connecting people, one road at a time.",
                "ar": "نصل الناس ببعضهم، طريقاً تلو الآخر."
            }
        },
        {
            "id": 5,
            "title": { "en": "Quds Swiemeh Road Upgrade", "ar": "تحديث طريق القدس - سويمة" },
            "date": "2023",
            "category": "Roads",
            "image": "images/projects/Quds Swiemeh Road/DSC00508.JPG",
            "summary": {
                "en": "Vital road improvements connecting key regions, improving safety and transport efficiency.",
                "ar": "تحسينات حيوية للطريق تربط بين المناطق الرئيسية، مما يحسن السلامة وكفاءة النقل."
            },
            "fullContent": {
                "en": "The Quds-Swiemeh road is a critical artery facilitating tourism and trade. Our team undertook extensive rehabilitation works, including road widening, slope stabilization, and the installation of safety barriers. \n\nThis project represents our commitment to enhancing the national road network for safer and more efficient travel.",
                "ar": "طريق القدس - سويمة هو شريان حيوي يسهل السياحة والتجارة. قام فريقنا بأعمال إعادة تأهيل واسعة النطاق، بما في ذلك توسيع الطريق، وتثبيت المنحدرات، وتركيب حواجز السلامة. \n\nيمثل هذا المشروع التزامنا بتعزيز شبكة الطرق الوطنية لسفر أكثر أماناً وكفاءة."
            }
        },
        {
            "id": 6,
            "title": { "en": "Major Milestone at Amman Development Corridor", "ar": "إنجاز كبير في ممر عمان التنموي" },
            "date": "2024",
            "category": "Infrastructure",
            "image": "images/projects/Amman Development Corridor/Interhchange 2.jpg",
            "summary": {
                "en": "Marwan Alkurdi & Partners successfully completes a critical phase of the Amman Development Corridor (Ring Road), enhancing traffic flow and connectivity for the capital.",
                "ar": "أنجزت شركة مروان الكردي وشركاؤه بنجاح مرحلة حاسمة من ممر عمان التنموي (الطريق الدائري)، مما يعزز انسيابية المرور والربط في العاصمة."
            },
            "fullContent": {
                "en": "The Amman Development Corridor is one of the most significant infrastructure projects in the capital's history. We successfully delivered Interchange 2, a massive engineering feat involving multi-level bridges and extensive earthworks. \n\nThis corridor will significantly reduce traffic congestion and spur economic development along its route.",
                "ar": "ممر عمان التنموي هو أحد أهم مشاريع البنية التحتية في تاريخ العاصمة. قمنا بتسليم التقاطع 2 بنجاح، وهو إنجاز هندسي ضخم يشتمل على جسور متعددة المستويات وأعمال ترابية واسعة. \n\nسيقلل هذا الممر بشكل كبير من الازدحام المروري وسيحفز التنمية الاقتصادية على طول مساره."
            },
            "quote": {
                "en": "Infrastructure that drives economic growth.",
                "ar": "بنية تحتية تقود النمو الاقتصادي."
            }
        },
        {
            "id": 7,
            "title": { "en": "Dissi Pipeline: Ensuring Water Security", "ar": "خط ناقل الديسي: ضمان الأمن المائي" },
            "date": "2024",
            "category": "Water",
            "image": "images/projects/Dissi Pipeline/DSC01339.JPG",
            "summary": {
                "en": "Our teams continue to maintain the highest standards in the strategic Dissi Water Conveyance project, a lifeline for Jordan's water infrastructure.",
                "ar": "تواصل فرقنا الحفاظ على أعلى المعايير في مشروع جر مياه الديسي الاستراتيجي، الذي يعد شريان الحياة للبنية التحتية المائية في الأردن."
            },
            "fullContent": {
                "en": "Water is Jordan's most precious resource. The Dissi Water Conveyance project is a lifeline, transporting water from the ancient aquifers in the south to the populous north. \n\nOur role involves the installation and maintenance of massive pipeline segments, ensuring leak-free performance and long-term durability against the harsh desert environment.",
                "ar": "الماء هو أثمن موارد الأردن. مشروع جر مياه الديسي هو شريان حياة، ينقل المياه من طبقات المياه الجوفية القديمة في الجنوب إلى الشمال المكتظ بالسكان. \n\nيتضمن دورنا تركيب وصيانة قطاعات خطوط أنابيب ضخمة، مما يضمن أداءً خالياً من التسرب ومتانة طويلة الأمد في مواجهة البيئة الصحراوية القاسية."
            },
            "quote": {
                "en": "Engineering life into the desert.",
                "ar": "هندسة الحياة في قلب الصحراء."
            }
        },
        {
            "id": 8,
            "title": { "en": "Aqaba Entrance Beautification", "ar": "تجميل مدخل العقبة" },
            "date": "2023",
            "category": "Development",
            "image": "images/projects/Aqaba Entrance/DSC03386.jpg",
            "summary": {
                "en": "Transforming the gateway to Jordan's coastal city with integrated infrastructure and aesthetic enhancements.",
                "ar": "تحويل بوابة مدينة الأردن الساحلية من خلال بنية تحتية متكاملة وتحسينات جمالية."
            },
            "fullContent": {
                "en": "First impressions matter. The Aqaba Entrance project was designed to welcome visitors with a blend of modern infrastructure and aesthetic landscaping. \n\nWe integrated functional roadworks with decorative lighting, palm-lined avenues, and water features, creating a grand entry worthy of Jordan's coastal jewel.",
                "ar": "الانطباعات الأولى تهم. تم تصميم مشروع مدخل العقبة للترحيب بالزوار بمزيج من البنية التحتية الحديثة وتنسيق المناظر الطبيعية الجمالي. \n\nقمنا بدمج أعمال الطرق الوظيفية مع الإضاءة الزخرفية، والشوارع المصطفة بأشجار النخيل، والمعالم المائية، لنخلق مدخلاً مهيباً يليق بجوهرة الأردن الساحلية."
            }
        },
        {
            "id": 9,
            "title": { "en": "Fleet Expansion: New Heavy Machinery", "ar": "توسيع الأسطول: آليات ثقيلة جديدة" },
            "date": "2023",
            "category": "Equipment",
            "image": "images/services/equipment/DSC00419.JPG",
            "summary": {
                "en": "We have upgraded our fleet with state-of-the-art heavy machinery to tackle the most demanding terrain and construction challenges.",
                "ar": "قمنا بتحديث أسطولنا بآليات ثقيلة متطورة للتعامل مع أكثر التضاريس وتحديات البناء صعوبة."
            },
            "fullContent": {
                "en": "To stay ahead in the construction industry, you need the best tools. We have recently acquired a new fleet of heavy machinery, including high-capacity excavators, specialized cranes, and articulated dump trucks. \n\nThis investment enhances our operational efficiency, allowing us to deliver projects faster, safer, and with greater precision.",
                "ar": "للبقاء في المقدمة في صناعة البناء، تحتاج إلى أفضل الأدوات. لقد استحوذنا مؤخراً على أسطول جديد من الآليات الثقيلة، بما في ذلك حفارات عالية السعة، ورافعات متخصصة، وشاحنات قلابة مفصلية. \n\nيعزز هذا الاستثمار كفاءتنا التشغيلية، مما يسمح لنا بتسليم المشاريع بشكل أسرع وأكثر أماناً وبدقة أكبر."
            }
        },
        {
            "id": 10,
            "title": { "en": "ISO 9001 Certification Renewal", "ar": "تجديد شهادة الآيزو 9001" },
            "date": "2023",
            "category": "Company",
            "image": "images/certificates/Document_165.jpg",
            "summary": {
                "en": "Reaffirming our commitment to quality, we are proud to announce the renewal of our ISO 9001 certification for another cycle.",
                "ar": "تأكيداً لالتزامنا بالجودة، نفخر بالإعلان عن تجديد شهادة الآيزو 9001 لدورة أخرى."
            },
            "fullContent": {
                "en": "Quality is not an act, it is a habit. Our successful renewal of the ISO 9001 certification is a testament to our enduring commitment to excellence. \n\nThis certification validates our robust quality management systems, ensuring that every project we undertake meets the highest global standards of safety, efficiency, and customer satisfaction.",
                "ar": "الجودة ليست فعلاً، بل هي عادة. إن تجديدنا الناجح لشهادة الآيزو 9001 هو شهادة على التزامنا الدائم بالتميز. \n\nتتحقق هذه الشهادة من أنظمة إدارة الجودة القوية لدينا، مما يضمن أن كل مشروع ننفذه يلبي أعلى المعايير العالمية للسلامة والكفاءة ورضا العملاء."
            }
        },
        {
            "id": 11,
            "title": { "en": "Advanced Grouting Solutions", "ar": "حلول الحقن المتقدمة" },
            "date": "2023",
            "category": "Innovation",
            "image": "images/services/grouting/DSC_0909.JPG",
            "summary": {
                "en": "Deploying the latest soil stabilization and grouting techniques for dam foundations and complex underground structures.",
                "ar": "نشر أحدث تقنيات تثبيت التربة والحقن لأساسات السدود والهياكل تحت الأرض المعقدة."
            },
            "fullContent": {
                "en": "Subsurface challenges require innovative solutions. Our specialized engineering division has deployed advanced grouting techniques to stabilize soil conditions for critical infrastructure. \n\nUsing proprietary high-pressure injection methods, we ensure the solid foundation necessary for dams, bridges, and high-rise structures, mitigating risks before they arise.",
                "ar": "التحديات تحت السطحية تتطلب حلولاً مبتكرة. نشر قسم الهندسة المتخصص لدينا تقنيات حقن متقدمة لتثبيت ظروف التربة للبنية التحتية الحيوية. \n\nباستخدام طرق حقن عالية الضغط مسجلة الملكية، نضمن الأساس المتين اللازم للسدود والجسور والهياكل الشاهقة، مما يخفف المخاطر قبل ظهورها."
            }
        }
    ],
    "homeComponents": {
        "theCore": {
            "label": { "ar": "المعايير العالمية", "en": "Global Standards" },
            "title": { "ar": "الجوهر", "en": "The Core" },
            "description": {
                "ar": "منذ عام 1981 ننفذ الأعمال المدنية الثقيلة — جسوراً وسدوداً وطرقاً وبنية تحتية مائية وأنظمة إنشائية متخصصة — عملاً يوثَّق مشروعاً بعد مشروع.",
                "en": "Since 1981 we have delivered heavy civil works — bridges, dams, highways, water infrastructure and specialized construction systems — documented project by project."
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