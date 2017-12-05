import { PlayersList } from '../imports/player-list';

if (PlayersList.find({}).count() === 0) {
    [
        {
            name: 'John'
        },
        {
            name: 'Bill'
        },
        {
            name: 'Sally'
        }
    ].forEach(val => {
        PlayersList.insert(val);
    });
}