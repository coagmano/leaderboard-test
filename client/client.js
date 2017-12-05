import { PlayersList } from '../imports/player-list';

Template.leaderboard.onCreated(function() {
    this.subscribe('players');
})
Template.leaderboard.helpers({
    'players': function(){
        return PlayersList.find({});
    },
    tableSettings : function () {
       return {
           fields: [
             { key: 'name', label: 'Full Name' },

           ]
       };
     }
});