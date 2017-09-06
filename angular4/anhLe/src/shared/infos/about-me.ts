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
                description: "I have experience with web and android development using Angular 2, Java, Javascript, JQuery, Nodejs, CSS3, HTML5, Less, Android Studio and more. I implement responsive websites and scalable apps with semantic, modular and scalable code base."
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
                'Java', 'Javascript', 'Angular 2', 'C++', 'HTML5', 'CSS3', 'Less', 'Ionic2', 'Nodejs', 'jQuery', 'Matlab', 'Maple', 'MySQL', 'Lodash.js', 'Handlebar.js'

            ],
            software: [
                'Photoshop', 'Illustrator', 'Android Studio', 'Visual Studio', 'Axure', 'SolidWork', 'AutoCad', 'Jira', 'Git'
            ],
            knowledge: [
                'Software Development', 'User Experience', 'Web and Mobile App Development', 'Software Design', 'Data Structure', 'Algorithms'
            ]
        }
    },
    timeline : [
        {
        id: 201,
        company: 'Oracle Primavera',
        title: 'Software Engineer',
        period: 'April - September 2016',
        description: [
            "Implemented a general-usage Javascript modal box class that handles the creation of new work packages as well as the assignment of start and finish times for each individual projects",
            "Implemented two complete Prime application pages with 4 different grids that auto-broadcast changes to other projects and packages when users modify projects or work packages",
            "Designed and executed manual tests and qUnit tests to cover more than 7 pages of Prime application, increasing the code coverage by 63%"
        ]
        },
    {
        id: 202,
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
        id: 203,
        company: 'Oracle Primavera',
        title: 'Software Engineer',
        period: 'April - September 2015',
        description: [
            "Worked on a feature team in Agile development to complete goals for 2-week sprints in a 6-month product release cycle of Prime application.",
            "Implemented a generic panel to display details of a project management grid for the internal javascript framework that can be used by other developers using Bootstrap, Javascript, jQuery, lodash.js, Sass, and Grunt.",
            "Utilized the internal libraries and APIs to modify and upgrade 4 complete pages of Prime application to the new MVC standard.",
            "Fixed 32% of the team’s bugs within 3 weeks of the bug fixing stage, and decreased the total defects to below 18 before the cycle release."
        ]
        },
    {
        id: 204,
        company: 'Central Washington University',
        title: 'Lab Technician',
        period: 'Jan 2013 - Jun 2013',
        description: [
            "Planned and conducted experiments in hologram to find the relationship between exposure time, disk process time, and lifetime of the hologram disk.",
            "Recorded and reported experiment results to the physics professor weekly."

        ]
    }]
};
