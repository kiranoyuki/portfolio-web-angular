/**
 * Created by anhle on 7/30/17.
 */
export const Xmario = [
    {
        img: '../assets/images/xmario/xmario2.png',
        title : 'Result:',
        content : [
            'The controller does not simply advances and jumps but advances close to the target and decide if executing actions toward the target is possible.',
            'Even though the agent is able to work as expected to bias toward the tasks of collecting coins and killing enemies, there are several problems with implementing the agent with a behavior tree. It prioritizes the given tasks and has trouble executing other low-priority tasks if multiple incidents happen simultaneously such as avoiding pitfall or reducing the speed to avoid being killed by multiple enemies.'
        ]
    }, {
        img: '../assets/images/xmario/xmario3.png',
        title : 'Discussion:',
        content : [
            'Behavior tree is not the best method to use for Mario game. Behavior trees have a logical flow that can be followed and capture the behavior or decision mechanism of a character in a game. An AI agent that is implemented with the behavior tree should expect to know how it should react to the environment based on its behavior tree. The behavior tree is quite easy to visualize and is built based on smaller tree to control the character’s behavior without coding knowledge requirement. However, they require lots of work and planning to set up. It does not allow the AI agent to learn and improve on its action. In case if the planning is missing any edge cases, it would fail to execute the required task.',
            'A Behavior tree is suitable for any AI that is very predictable in order to perform only a set of specific tasks. It becomes much harder to implement a behavior tree for an AI agent that is involved in more random factors and dynamic environments.'
        ]
    }
];