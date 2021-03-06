/**
 * Created by anhle on 7/17/17.
 */
export const Lifekit = [
    {
        title: 'Best community service award - Drexel University 2017.'
    },
    {
        img: '../assets/images/lifekit/lifekit1.png',
        title : 'Lifekit solutions',
        content: ['Mobile App: Provides a user Interface encompassing the overdose detection hardware and aid service.',
        'LifeKit Service: Manages a group of overdose responders and their abilities to respond to overdosers.',
        'Device Integration: Includes all devices used in acquiring information about user’s vitals. It could be native like an accelerometer or worn like a smartwatch.'
        ]
    }, {
        title: 'Mobile App',
        content: ['Collects data from the user and from connected devices and transmits them to the remote data stores. The mobile app is a hybrid app built on Ionic 2 and Angular 2.']
    },
    {
        title: 'Lifekit Service',
        content: ['This is a Nodejs service running on a Linux server that serves as a control unit for the LifeKit apps and users. It provides authentication services, database query and remote storage. As a RESTful service, it would expose endpoints that would make it easy for clients to access its resources.']
    },
    {
        title: 'Device Integration',
        content: ['The app is designed in such a way to allow for multiple different wearables to successful interface with the app.  Unfortunately, devices without a respiratory meter cannot properly diagnose an overdose as heart rate (the most common metric) is among the last to fall.  The respiratory rate is the first metric to fall and is most effective metric to measure.']
    },
    {
        img: '../assets/images/lifekit/lifekit2.png',
        content: ['Since there is currently no respiratory rate meter on market, it seemed prudent to design our own sensors to get the metrics that were needed.  Below the specifications of a sensor that fits the needs of this project:'
        ],
        list: [
            'Sensor readings: heart rate - accelerometer data',
            'Provide bluetooth connectivity',
            '24-hour battery life',
            'Data provided by external device is correct to 80%'
        ]
    }
]