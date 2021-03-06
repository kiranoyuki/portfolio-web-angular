/**
 * Created by anhle on 7/30/17.
 */
export const Othello = [
    {
        title: 'Othello solutions:',
        content : [
            'I implemented a Othello GUI in C++ to allow two AI agent to play against each other at different settings.',
            'Base on research about Othello Gameplay Strategy, I made some improvements to experiment with the Minimax ' +
            'algorithm: The agent has a different utility function to decide which moves it should play. I generated a rank_board function, which has the same size as the board game. Furthermore, I also assigned the rank value to the rank_board as follows:'

        ],
        list: [
            'Corners have the highest score: 5',
            'Edge move has the lowest score : 1',
            'The center has higher score the other positions: 3',
            'The rest has same score: 2',
        ]
    }, {
        content: [
            'The function evaluates which moves to take depending on the rank-board score. This will make sure the function follow these strategy to win:'
        ],
        list: [
            'Corner position is the most important to get more stable moves',
            'Avoid playing in the wall as much as possible',
            'Take the center of the board.'
        ]
    },
    {
        title : 'Discussion:',
        content : [
            'Monte Carlo search (MCS) is shown to exhibit lower regret and bias than Minimax. MCS is also showing 4-16% win against Minimax Search, and 20-27% improvement compare to Minimax when playing against a random agent.'
        ]
    }
]