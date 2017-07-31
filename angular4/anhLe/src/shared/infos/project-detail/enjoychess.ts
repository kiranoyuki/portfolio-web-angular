/**
 * Created by anhle on 7/17/17.
 */
export const EnjoyChess = [
    {
        img: '../assets/images/chess/chess_style1.png',
        title: 'EnjoyChess solutions:'
    }, {
        title: 'Dashboard Service:',
        content : [
            'We created a dashboard for the chess community to see who is online at the moment. People can see which country the player is in, how many game that they win and their rank among the player who join this chess community. A tournament forum is similar to the dashboard structure. The head of a tournament can adjust the maximum number of competitors and the minimum rank level of players who can join.'
        ]
    },
    {
        title : 'Invitation System:',
        content : [
            'Each player can send out multiple new-game invitations to other opponents. The first player to accept the invitation will be playing with the current player. Other invitations will be automatically cancelled. If no one responses to the invitations, it will automatically cancel after 5 minutes.'
        ]
    }, {
        img: '../assets/images/chess/chess_style2.png',
        title: 'Online game streaming:',
        content: [
            'Besides the standard of chess rules, Enjoychess ensures that players are notified with any change to the live game such as opponent resign, or tie request.',
            'Players can see the last move of their opponent on the right side of the game board. If players hover over one piece on the gameboard, they can see the suggestion of valid moves for that specific piece.',
            'Each player will have a margin of time to response to a new move in the game. If the time is passed with no response, or a lost connection is detected, Enjoychess will automatically send a notification to the other player that this is his/her opponent has withdrawn.'
        ]
    }
]