import { PlayersList } from '../imports/player-list';

if (PlayersList.find({}).count() === 0) {
    [
        {
            _id: 'John',
            name: 10
        },
        {
            _id: 'Bill',
            name: 20
        },
        {
            _id: 'Sally',
            name: 30
        }
    ].forEach(val => {
        PlayersList.insert(val);
    });
}