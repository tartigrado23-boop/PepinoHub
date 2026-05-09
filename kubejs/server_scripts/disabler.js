const HIDDEN_ITEMS = [
  'create_sa:zinc_helmet',
  'create_sa:zinc_chestplate',
  'create_sa:zinc_leggings',
  'create_sa:zinc_boots',
  'create_sa:zinc_pickaxe',
  'create_sa:zinc_axe',
  'create_sa:zinc_sword',
  'create_sa:zinc_shovel',
  'create_sa:zinc_hoe',
]
 
ServerEvents.recipes(event => {
  HIDDEN_ITEMS.forEach(item => event.remove({ output: item }))
})
