import {AboutMe} from "../object-interface/about-interface";

export const aboutMe : AboutMe = {
    introduction: [
        "Hi, I'm Anh Le",
        "I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with " +
        "beautiful design.",
        "I love learning new and better ways to create seamless user experiences with clean, " +
        "efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to " +
        "work with those who are willing to share their knowledge as much as I want to learn. At the end of the day," +
        " my primary goal is to create something beautiful with people that bring out the best in me."
    ],
    experience: {
        expertise: [
            {
                icon: 'important_devices',
                category: 'Web development',
                description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
                "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
            },
            {
                icon: 'dashboard',
                category: 'UI/UX Design',
                description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam " +
                "eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
            },
            {
                icon: 'lightbulb_outline',
                category: 'Problem Solving',
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
