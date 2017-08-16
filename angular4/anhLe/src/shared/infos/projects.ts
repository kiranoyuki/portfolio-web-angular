/**
 * Created by anhle on 6/20/17.
 */
import {Project} from '../object-interface/project-interface';
import {Lifekit} from "./project-detail/lifekit";
import {EnjoyChess} from "./project-detail/enjoychess";
import {Xmario} from "./project-detail/xmario";
import {Othello} from "./project-detail/othello";
import {Septa} from "./project-detail/septa";

export const ourProjects: Project[] = [
    {
        id: 1,
        name: 'Lifekit',
        place: 'Philadelphia',
        position: 'Frontend Developer - UX Engineer',
        tags: ['UI+UX', 'Web Dev'],
        description: {
            intro: 'A rapid response system to detect drug overdose cases and notify responder to quickly assist people that need help.',
            problem: 'The United States is in the midst of an opioid epidemic. Many patients and drug users are dying of ' +
            'overdoses in record numbers.  Oftentimes, help is simply not available and/or not on time.',
            achieve: 'Lifekit seeks to be a rapid response system to overdosers - notifying emergency responders to ' +
            'quickly neutralize the effects of the overdose with a drug called Naloxone. With a combination of sensors measuring heart and respiratory rate, the app will automatically determine and alert responders of the overdosers’ whereabouts for assistance.',
            platform: 'Web, Android, IOS',
            tools: ['Angular2', 'Ionic2', 'Javascript', 'Nodejs', 'MySQL', 'Apache Cordova', 'GoogleMapAPI']
        },
        thumbnail: {
            title: 'projectthumbnail',
            url: '../assets/thumbnail/lifekit.png'
        },
        images : [{
            title: 'intro',
            url: '../assets/images/lifekit/lifekit.png'
        }],
        content : Lifekit
    },
    {
        id: 2,
        name: 'EnjoyChess',
        place: 'Philadelphia',
        position: 'UX Engineer - Software Developer',
        tags: ['UI+UX', 'Web Dev'],
        description: {
            intro: 'A webapp for a chess community - provides online matches, custom tournaments, and spectating.',
            problem: 'A mini project to learn and implement a dynamic webapp that has login authentication oAuth, secure online interaction with network sockets, and dynamically updating content.',
            achieve: 'Implemented an online platform that only focus on chess, with a simple and clean interface. People can keep track of their match records, create custom tournaments, or simply invite other for a match.',
            platform: 'Web',
            tools: ['Javascript', 'Nodejs', 'Jquery', 'Bootstrap', 'FacebookAPI', 'mySQL', 'GoogleAPI']
        },

        thumbnail: {
            title: 'projectthumbnail',
                url: '../assets/thumbnail/enjoychess.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/chess/chess_style2.png'
        }],
        content: EnjoyChess
    },
    {
        id: 3,
        name: 'Xmario',
        place: 'Philadelphia',
        position: 'Software Developer',
        tags: ['Others'],
        description: {
            intro: 'An experiment to study and develop the intelligent behavior of mario in the Super Mario game.',
            problem: 'A mini project to explore the possibilities and limits of applying Decision Trees, FSMs, Behavior Trees towards implementing the decision making of AI character in game.',
            achieve: 'Develop a controller for Mario agent that tries to collect as many coins as possible and kill as many enemies as possible while avoiding death.',
            platform: 'Java application',
            tools: ['Java', 'Eclipse']
        },
        thumbnail: {
            title: 'projectthumbnail',
                url: '../assets/thumbnail/xmario.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/xmario/xmario1.png'
        }],
        content : Xmario
    },
    {
        id: 4,
        name: 'Othello',
        place: 'Philadelphia',
        position: 'Software Developer',
        tags: ['Others'],
        description: {
            intro: 'A program that have two AI agents to compete in Othello game',
            problem: 'To learn and experiment with several algorithms in artificial intelligent search such as Minimax, and The Monte Carlo algorithm.',
            achieve: 'Implement Othello agent that can play with each other using different AI search algorithm at different search levels.',
            platform: 'C++ application',
            tools: ['C++', 'Visual Studio']
        },
        thumbnail: {
            title: 'projectthumbnail',
            url: '../assets/thumbnail/othello.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/othello/othello.png'
        }],
        content : Othello
    }, {
        id: 5,
        name: 'SeptaTracker',
        place: 'Philadelphia',
        position: 'Android Developer',
        tags: ['Web Dev'],
        description: {
            intro: 'A mobile app to provide better SEPTA schedules for users to view the status of public transportation',
            problem: 'Many people using the public transportation SEPTA everyday to work. However, it is really inconvenient when the estimation of arrival and departure time are confusing and inaccurate.',
            achieve: 'SEPTA tracker provides a clean interface to view the status of SEPTA vehicles (current location, time to arrive, etc). We use geolocation to determine user location and user custom input to find nearby bus stops and show possible options to reach destination for android users.',
            platform: 'Android',
            tools: ['Android Studio', 'Septa API', 'GoogleMap API', 'mySQL']
        },
        thumbnail: {
            title: 'projectthumbnail',
            url: '../assets/thumbnail/septa.png'
        },
        images : [{
            title: 'projectthumbnail',
            url: '../assets/images/septa/septa1.png'
        }],
        content : Septa
    }

];
