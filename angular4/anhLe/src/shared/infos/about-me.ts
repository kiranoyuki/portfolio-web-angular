import {AboutMe} from "../object-interface/about-interface";

export const aboutMe : AboutMe = {
    introduction: [
        "Hi, I'm Anh Le",
        "I am a thinker and a designer.",
        "My Philosophy is to take complex problems and produce simple and effective designs. I am always intrigued to the way things work in order to understand and discover the fundamental basis of the problem. Such a drive that constantly convinced me that any complex problem always has a simple solution.",
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
                description: "A product is not good if customer cannot use it intuitively. I create products with clean and intuitive interfaces. These interfaces provide users comfort and productivity as they find them efficient, easy to use, and functional on everyday platforms: browsers and mobile devices alike."
            },
            {
                icon: '../assets/images/about/ai.png',
                category: 'Artificial Intelligent',
                description: "AI is the future and it will have many beneficial uses in society: from technology to economics, health care, law and much more. I have an ambitious to be a contributor to the future of AI and future breakthroughs. I believe the potential of AI will greatly improve the societal life in many aspects."
            }
        ],
        skills:{
            languages: [
                'Angular', 'Java', 'Javascript', 'C++', 'HTML5', 'Ionic'
            ],
            software: [
                'Photoshop', 'Illustrator', 'Axure', 'SolidWork', 'AutoCad'
            ],
            knowledge: [
                'Software Development', 'User Experience', 'Computer Graphics', 'AI', 'Machine learning'
            ]
        }
    },
    timeline : [
        {
        id: 201,
        company: 'Company one',
        title: 'Web Dev',
        period: 'May 2015 - Sep 2016',
        description: 'Assisted professor with grading homework and project assignments. Held office hours to aid students' +
        ' in their understanding of core HCI concepts and reported to the professor the extent of their understanding'
    },
    {
        id: 202,
        company: 'Company one',
        title: 'Web Dev',
        period: 'May 2015 - Sep 2016',
        description: 'Assisted professor with grading homework and project assignments. Held office hours to aid students' +
        ' in their understanding of core HCI concepts and reported to the professor the extent of their understanding'
    },
    {
        id: 203,
        company: 'Company one',
        title: 'Web Dev',
        period: 'May 2015 - Sep 2016',
        description: 'Assisted professor with grading homework and project assignments. Held office hours to aid students' +
        ' in their understanding of core HCI concepts and reported to the professor the extent of their understanding'
    }]
};
