import { PlayersList } from '../imports/player-list';

Template.leaderboard.onCreated(function() {
    this.subscribe('players');
})
Template.leaderboard.helpers({
    players: function(){
        return PlayersList.find({});
    },
    tableSettings : function () {
       return {
           collection: PlayersList.find({}),
           fields: [
            { key: '_id', label: 'Full Name' },
            { key: 'name', label: 'Score' }

           ]
       };
     }
});