import {AboutMe} from "../object-interface/about-interface";

export const aboutMe : AboutMe = {
    introduction: [
        "Hi, I'm Anh Le",
        "I am a thinker and a designer.",
        "My philosophy is to take complex problems and produce simple and effective designs. I am always intrigued to the way things work in order to understand and discover the fundamental basis of the problem. Such a drive constantly convinced me that any complex problem always has a simple solution.",
        "I am always looking for the opportunity to learn and share my knowledge through friends, colleagues, and mentors. I find opportunities to expand my wisdom through feedbacks and critics. Ultimately, my goal is to create things that work for a greater good.",
        "'Leave it better than you found it.' –Robert Baden-Powell"
    ],
    experience: {
        expertise: [
            {
                icon: '../assets/images/about/web.png',
                category: 'Software Engineer',
                description: "I have experience with web and android development using React/Redux, Angular 2,4, Python, Java, Javascript, CSS3, HTML5, Less, and more. I implement responsive websites and scalable apps with semantic, modular and scalable code base."
            },
            {
                icon: '../assets/images/about/ux.png',
                category: 'UI+UX',
                description: "A product is not good if customers cannot use it intuitively. I create products with clean and intuitive interfaces. These interfaces provide users comfort and productivity as they find them efficient, easy to use, and functional on everyday platforms: browsers and mobile devices alike."
            }
            // {
            //     icon: '../assets/images/about/ai.png',
            //     category: 'Problem Solver',
            //     description: "AI is the future and it will have many beneficial uses in society: from technology to economics, health care, law and much more. I have an ambition to be a contributor to the future of AI and its future breakthroughs. I believe the potential of AI will greatly improve the societal life in many aspects."
            // }
        ],
        skills:{
            icons: [
                '../assets/images/about/language.png',
                '../assets/images/about/software.png',
                '../assets/images/about/knowledge.png'
            ],
            languages: [
                'React', 'Python', 'Javascript', 'Angular 2', 'Typescript', 'Java', 'PostgreSQL', 'HTML5', 'CSS3', 'Matlab', 'Lodash.js'

            ],
            software: [
                'Git', 'Docker', 'Bazel', 'Photoshop', 'Illustrator', 'Android Studio', 'Vagrant' 
            ],
            knowledge: [
                'Software Development', 'User Experience', 'Web and Mobile App Development', 'Software Design', 'Data Structure', 'Algorithms'
            ]
        }
    },
    timeline : [
        {
        id: 201, 
        company: 'Vistar Media',
        title: 'Full Stack Software Engineer',
        period: 'November 2017 - Present',
        description: [
            "Develop a high-volume ads delivery software to scale out-of-home advertisersand exchange platform",
            "Implement features including planning and scheduling ads campaign, generatingmetrics tables, and mailing scheduled reports to group users",
            "Lead a team of two to redesign a feature for bulk uploading and validatingads campaign’s assets",
            "Increase bulk venues transaction speed by 75% through refactoring server’s venuesendpoint with Python and PostgreSQL",
            "Increase the application’s load time by 30% through upgrading the existing front endcode from Flux to Redux"
        ]

        },
        {
        id: 202,
        company: 'Oracle Primavera',
        title: 'Software Developer',
        period: 'April - September 2016',
        description: [
            "Designed and developed features for Prime application, including organizingand delivering portfolios and projects through a cloud based platform",
            "Lead front end for a team of four to design and develop a feature to monitorproject progress against original and current baselines",
            "Reduced Scope management page’s latency by 400 ms and Prime application’slatency by 1900 ms by refactoring the old legacy front end",
            "Increased code coverage by 63% with qUnit testing for 15 different pages ofPrime application"
        ]
        },
    {
        id: 203,
        company: 'Univtop',
        title: 'Cofounder - UX Engineer',
        period: 'Jan 2015 - April 2016',
        description: [
            "Analyzed user interface design trends and developed design guidelines for a content-heavy mobile application that allows international students to connect to each other, and exchange information on studying abroad",
            "Developed UI high fidelity prototype for iOS app using Illustrator and followed User-Experience Research Methods to test usability on a group of 28 international students from different backgrounds",
            "Participated and consulted in weekly meetings including business, marketing, and technical design aspects"
        ]
    },
    {
        id: 204,
        company: 'Oracle Primavera',
        title: 'Software Developer',
        period: 'April - September 2015',
        description: [
            "Contributed to the internal libraries by developing panels for project managementpurpose",
            "Improved 18% transaction speed by upgrading Prime’s front end with Javascript,LodashJS and internal libraries",
            "Reduced the team’s total defects below 20 by fixing 37% of team’s bugs within three weeks before the release",
            "Developed and executed qUnit and manual testing for 8 different pages of Prime application"
        ]
        },
    {
        id: 205,
        company: 'Central Washington University',
        title: 'Lab Technician',
        period: 'Jan 2013 - Jun 2013',
        description: [
            "Planned and conducted experiments in hologram to find the relationship between exposure time, disk process time, and lifetime of the hologram disk.",
            "Recorded and reported experiment results to the physics professor weekly."

        ]
    }]
};
