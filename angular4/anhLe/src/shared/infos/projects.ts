/**
 * Created by anhle on 6/20/17.
 */
import {Project} from '../object-interface/project-interface';
import {Lifekit} from "./project-detail/lifekit";
import {EnjoyChess} from "./project-detail/enjoychess";

export const ourProjects: Project[] = [
    {
        id: 1,
        name: 'Lifekit',
        place: 'Philadelphia',
        position: 'Frontend Engineer - UX Engineer',
        tags: ['UI+UX', 'Web Dev'],
        description: {
            intro: 'A rapid response system to detect drug overdose cases and notify responder to quickly assist people that need help.',
            problem: 'The United States is in the midst of an opioid epidemic. Many patients and drug users are dying of ' +
            'overdoses in record numbers.  Oftentimes, help is simply not available and/or not on time.',
            achieve: 'Univtop is a powerful platform and a great tool to utilize for any prospective international student. ' +
            'We connect the community to help new students find the help they need, and prepare them for the education journey with energy and excitement.',
            platform: 'Web, Android, IOS',
            tools: ['Photoshop', 'Illustrator', 'Slack', 'Jira', 'Axure', 'Whiteboard', 'Pen and Paper']
        },
        thumbnail: {
            title: 'projectthumbnail',
            url: '../assets/thumbnail/lifekit.png'
        },
        images : [{
            title: 'intro',
            url: '../assets/images/lg/lifekit-intro.png'
        }],
        content : Lifekit
    },
    {
        id: 2,
        name: 'EnjoyChess',
        place: 'Philadelphia',
        position: 'UX Designer - Software Engineer',
        tags: ['UI+UX', 'Web Dev', 'Artificial Intelligent'],
        description: {
        intro: 'A webapp for people who loves chess to play online match and train chess skills with chess AI engine.',
            problem: 'To learn and experiment with several algorithms in artificial intelligent search such as Minimax, Alpha Beta Prunning, Iterative Deepening, Monte Carlo Search.',
        achieve: 'Create an online platform where people can join as online player to compete with each other, or train skills with different level of AI chess.',
        platform: 'Web',
            tools: ['Javascript', 'HTML5', 'Less', 'Bootstrap', 'Nodejs', 'mySQL']
    },
        thumbnail: {
            title: 'projectthumbnail',
                url: '../assets/thumbnail/enjoychess.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/lg/enjoychess-intro.png'
        }],
        content: EnjoyChess
    },
    {
        id: 3,
            name: 'Lifekit3',
        place: 'Philadelphia',
        position: 'Frontend Engineer - UX Engineer',
        tags: ['UI+UX', 'Artificial Intelligent'],
        description: {
        intro: 'A rapid response system to detect drug overdose cases and notify responder to quickly assist people that need help.',
            problem: 'The United States is in the midst of an opioid epidemic. Many patients and drug users are dying of ' +
        'overdoses in record numbers.  Oftentimes, help is simply not available and/or not on time.',
            achieve: 'Lifekit seeks to be a rapid response system to overdosers -notifying emergency responders to quickly ' +
        'neutralize the effects of the overdose with a drug called Naloxone. ' +
        'With a combination of sensors measuring heart and respiratory rate, the app will automatically determine and alert' +
        ' responders of the overdosers’ whereabouts for assistance.',
        platform: 'Web, Android, IOS',
            tools: ['Angular2', 'Ionic2', 'Javascript', 'Nodejs', 'MySQL', 'Apache Cordova', 'GoogleMapAPI']
    },
        thumbnail: {
            title: 'projectthumbnail',
                url: '../assets/thumbnail/1.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/other/2.png'
        },{
            title: 'projectthumbnail',
            url: '../assets/images/other/1.png'
        }],
            content : ''
    }
];
