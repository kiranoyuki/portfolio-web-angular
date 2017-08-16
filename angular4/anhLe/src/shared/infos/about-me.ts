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
                'Java', 'Javascript', 'Angular 2', 'C++', 'HTML5', 'CSS3', 'Less', 'Ionic2', 'Nodejs', 'Jquery', 'Matlab', 'Maple', 'MySQL'

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
        period: 'April - September 2015, 2016',
        description: [
            "Modified and upgraded team’s web pages from an existing infrastructure to a new model-view-controller architecture to enhance the code efficiency, usability and maintainability using JQuery, Javascript, RequireJS, and Grunt for front end development.",
            "Worked closely with a team of 10 members to plan, design and develop the software’s solutions in 3-month Agile development cycles.",
            "Designed and executed manual tests and QUnit tests to ensure the app’s quality and high percentage of code coverage."
        ]
        },
    {
        id: 202,
        company: 'Univtop',
        title: 'Cofounder - UX Engineer',
        period: 'Jan 2015 - April 2016',
        description: [
            "Analyzed user interaction design trends and developed design guidelines for a heavy-content mobile application: allowing international students to connect, find, and exchange information about studying abroad.",
            "Developed user interface prototyping for iOS using Illustrator and Axure RP and improved the user experience and usability by analyzing the user’s feedback.",
            "Organized and participated in business and marketing meetings."
        ]
    },
    {
        id: 203,
        company: 'Central Washington University',
        title: 'Lab Technician',
        period: 'Jan 2013 - Jun 2013',
        description: [
            "Planned and conducted experiments in hologram to find the relationship between exposure time, disk process time, and lifetime of the hologram disk.",
            "Recorded and reported experiment results to the physics professor weekly."

        ]
    }]
};
