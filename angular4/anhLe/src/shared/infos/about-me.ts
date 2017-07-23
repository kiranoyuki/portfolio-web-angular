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
                icon: 'important_devices',
                category: 'Web Development',
                description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
                "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
            },
            {
                icon: 'dashboard',
                category: 'UI+UX',
                description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
                "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
            },
            {
                icon: 'lightbulb_outline',
                category: 'Artificial Intelligent',
                description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
                "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
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
