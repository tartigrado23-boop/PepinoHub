StartupEvents.registry('item', event => {

      event.create('kubejs:create_guide').displayName('Create Guide');
      event.create('kubejs:incomplete_angler_template').displayName('Incomplete Angler Template');
      event.create('kubejs:incomplete_archer_template').displayName('Incomplete Archer Template');
      event.create('kubejs:incomplete_blade_template').displayName('Incomplete Blade Template');
      event.create('kubejs:incomplete_brewer_template').displayName('Incomplete Brewer Template');
      event.create('kubejs:incomplete_burn_template').displayName('Incomplete Burn Template');
      event.create('kubejs:incomplete_danger_template').displayName('Incomplete Danger Template');
      event.create('kubejs:incomplete_flow_template').displayName('Incomplete Flow Template');
      event.create('kubejs:incomplete_explorer_template').displayName('Incomplete Explorer Template');
      event.create('kubejs:incomplete_friend_template').displayName('Incomplete Friend Template');
      event.create('kubejs:incomplete_guster_template').displayName('Incomplete Guster Template');
      event.create('kubejs:incomplete_heart_template').displayName('Incomplete Heart Template');
      event.create('kubejs:incomplete_howl_template').displayName('Incomplete Howl Template');
      event.create('kubejs:incomplete_miner_template').displayName('Incomplete Miner Template');
      event.create('kubejs:incomplete_mourner_template').displayName('Incomplete Mourner Template');
      event.create('kubejs:incomplete_plenty_template').displayName('Incomplete Plenty Template');
      event.create('kubejs:incomplete_prize_template').displayName('Incomplete Prize Template');
      event.create('kubejs:incomplete_shelter_template').displayName('Incomplete Shelter Template');
      event.create('kubejs:incomplete_skull_template').displayName('Incomplete Skull Template');
      event.create('kubejs:incomplete_snort_template').displayName('Incomplete Snort Template');
            event.create('kubejs:incomplete_netherite_plate').displayName('Incomplete Netherite Plate')
      event.create('kubejs:netherite_jetpack_smithing_template')
            .displayName('Netherite Jetpack Smithing Template')
            .maxStackSize(1);
      event.create('black_hole_smithing_template')
            .displayName('Black Hole Smithing Template')
            .maxStackSize(1);
      event.create('kubejs:tangled_nether_vines').displayName('Tangled Nether Vines');
      event.create('kubejs:eclipse_chainsaw', 'sword')
            .maxDamage(0)
            .displayName('Eclipse Chainsaw')
            .tier('diamond')
            .attackDamageBaseline(5.0)
            .speed(1.6)
      event.create('kubejs:chainmail').displayName('Chainmail')
      event.create('kubejs:copper_plate').displayName('Copper Plate')
      event.create('kubejs:iron_plate').displayName('Iron Plate')
      event.create('kubejs:golden_plate').displayName('Golden Plate')
      event.create('kubejs:brass_plate').displayName('Brass Plate')
      event.create('kubejs:netherite_plate').displayName('Netherite Plate')
      event.create('kubejs:reinforced_netherite_plate').displayName('Netherite Reinforced Plate')
            .glow(true)
      event.create('kubejs:incomplete_reinforced_netherite_plate').displayName('Incomplete Netherite Reinforced Plate')

      event.create('kubejs:emerald_grit').displayName('Emerald Grit')
      event.create('kubejs:amethyst_grit').displayName('Amethyst Grit')
      event.create('kubejs:noble_gem_dust').displayName('Noble Gem Dust')
      event.create('kubejs:oceanic_resonance_dust').displayName('Oceanic Resonance Dust')
      event.create('kubejs:energized_glow_dust').displayName('Energized Glow Dust')
      event.create('kubejs:reinforced_diamond').displayName('Reinforced Diamond')
            .glow(true)
      event.create('kubejs:drill_head').displayName('Drill Head')

      event.create('kubejs:brittle_diamond_pickaxe', 'pickaxe').displayName('Brittle Diamond Pickaxe')
            .tier('diamond')   
            .maxDamage(16)
            .tooltip('This tool is extremely brittle.')
            .speed(10.0)
      event.create('kubejs:brittle_diamond_axe', 'axe').displayName('Brittle Diamond Axe')
            .tier('diamond')   
            .maxDamage(16)
            .tooltip('This tool is extremely brittle.')
            .speed(10.0)
      event.create('kubejs:brittle_diamond_sword', 'sword').displayName('Brittle Diamond Sword')
            .tier('diamond')   
            .maxDamage(16)
            .tooltip('This tool is extremely brittle.')
            .speed(10.0)
      event.create('kubejs:brittle_diamond_shovel', 'shovel').displayName('Brittle Diamond Shovel')
            .tier('diamond')   
            .maxDamage(16)
            .tooltip('This tool is extremely brittle.')
            .speed(10.0)
      event.create('kubejs:brittle_diamond_hoe', 'hoe').displayName('Brittle Diamond Hoe')
            .tier('diamond')   
            .maxDamage(16)
            .tooltip('This tool is extremely brittle.')
            .speed(10.0)
});
