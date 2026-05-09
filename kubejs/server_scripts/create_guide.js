// KubeJS Script — Open Create Ponder Index when right-clicking the guide
// Place this file in: kubejs/server_scripts/

ItemEvents.rightClicked(event => {
  const { item, player, hand } = event
 
  if (hand !== 'MAIN_HAND') return
  if (item.id !== 'kubejs:create_guide') return
 
  player.runCommandSilent('ponder tags')
})