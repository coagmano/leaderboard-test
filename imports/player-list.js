export const PlayersList = new Mongo.Collection('players');

if (Meteor.isServer){
    Meteor.publish('players', function() {
        return PlayersList.find({});
    });
}
