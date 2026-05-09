PlayerEvents.loggedIn(event => {

    if (!event.player.stages.has('starting_items')) {

        event.player.stages.add('starting_items')
        
        event.player.give('kubejs:create_guide')
        
        event.player.give('solcarrot:food_book')
    }
})