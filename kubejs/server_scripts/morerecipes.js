MoreJS.registerPotionBrewing(event => {
    event.addCustomBrewing(
        "minecraft:emerald", 
        "minecraft:nether_star",
        "minecraft:diamond")
}),

MoreJS.registerPotionBrewing(event => {
    event.addPotionBrewing(
        "minecraft:apple",
        "minecraft:water",
        "minecraft:strong_regeneration"
    )
}),


MoreJS.registerPotionBrewing(event => {
    event.addCustomBrewing(
        "minecraft:emerald", 
        "minecraft:glass_bottle",
        "minecraft:ominous_bottle")

    })

ServerEvents.recipes(event => {
    event.remove({ output: "create:mechanical_drill" })
    event.remove({ output: "create:mechanical_saw" })
    event.remove({ output: "create:mechanical_harvester" })
    event.remove({ output: "create:brass_ingot" })
    event.remove({ output: "create_sa:small_fueling_tank" })    
    event.remove({ output: "create_sa:small_filling_tank" }) 
    event.remove({ output: "create_sa:medium_fueling_tank" })    
    event.remove({ output: "create_sa:medium_filling_tank" }) 
    event.remove({ output: "create_sa:large_fueling_tank" })    
    event.remove({ output: "create_sa:large_filling_tank" }) 
    event.remove({ id: "create_mechanical_extruder:crafting/mechanical_extruder" })
    event.remove({ output: "create_sa:netherite_jetpack_chestplate" })
    event.remove({ output: "simulated:red_portable_engine" })
    event.remove({ output: "create:steam_engine" })
    event.remove({ output: "create:rotation_speed_controller" })
    event.remove({ id: "minecraft:netherite_ingot" })
    event.remove({ output: "minecraft:iron_helmet" })
    event.remove({ output: "minecraft:iron_chestplate" })
    event.remove({ output: "minecraft:iron_leggings" })
    event.remove({ output: "minecraft:iron_boots" })
    event.remove({ output: "createdeco:iron_bars_overlay" })
    event.remove({ output: "createdeco:copper_bars_overlay" })
    event.remove({ output: "createdeco:brass_bars_overlay" })
    event.remove({ output: "minecraft:golden_helmet" })
    event.remove({ output: "minecraft:golden_chestplate" })
    event.remove({ output: "minecraft:golden_leggings" })
    event.remove({ output: "minecraft:golden_boots" })
    event.remove({ output: "create_sa:brass_helmet" })
    event.remove({ output: "create_sa:brass_chestplate" })
    event.remove({ output: "create_sa:brass_leggings" })
    event.remove({ output: "create_sa:brass_boots" })
    event.remove({ output: "create:copper_backtank" })
    event.remove({ output: "create_sa:copper_exoskeleton_chestplate" })
    event.remove({ output: "create_sa:copper_jetpack_chestplate" })
    event.remove({ output: "create_sa:andesite_jetpack_chestplate" })
    event.remove({ output: "create_sa:brass_exoskeleton_chestplate" })
    event.remove({ output: "sophisticatedbackpacks:netherite_backpack" })
    event.remove({ output: "create_sa:brass_jetpack_chestplate" })
    event.remove({ output: "minecraft:diamond_pickaxe" })
    event.remove({ output: "minecraft:diamond_axe" })
    event.remove({ output: "minecraft:diamond_shovel" })
    event.remove({ output: "minecraft:diamond_sword" })
    event.remove({ output: "minecraft:diamond_hoe" })
    event.remove({ output: "minecraft:diamond_helmet" })
    event.remove({ output: "minecraft:diamond_chestplate" })
    event.remove({ output: "minecraft:diamond_leggings" })
    event.remove({ output: "minecraft:diamond_boots" })
    event.remove({ output: "minecraft:netherite_helmet" })
    event.remove({ output: "minecraft:netherite_chestplate" })
    event.remove({ output: "minecraft:netherite_leggings" })
    event.remove({ output: "minecraft:netherite_boots" })
    event.remove({ output: "minecraft:netherite_pickaxe" })
    event.remove({ output: "minecraft:netherite_axe" })
    event.remove({ output: "minecraft:netherite_shovel" })
    event.remove({ output: "minecraft:netherite_sword" })
    event.remove({ output: "minecraft:netherite_hoe" })
    event.remove({ output: "minecraft:iron_pickaxe" })
    event.remove({ output: "minecraft:iron_axe" })
    event.remove({ output: "minecraft:iron_shovel" })
    event.remove({ output: "minecraft:iron_sword" })
    event.remove({ output: "minecraft:iron_hoe" })
    event.remove({ output: "minecraft:golden_pickaxe" })
    event.remove({ output: "minecraft:golden_axe" })
    event.remove({ output: "minecraft:golden_shovel" })
    event.remove({ output: "minecraft:golden_sword" })
    event.remove({ output: "minecraft:golden_hoe" })
    event.remove({ output: "create_sa:brass_pickaxe" })
    event.remove({ output: "create_sa:brass_axe" })
    event.remove({ output: "create_sa:brass_shovel" })
    event.remove({ output: "create_sa:brass_sword" })
    event.remove({ output: "create_sa:brass_hoe" })
    event.remove({ output: "create:mechanical_crafter" })
    event.remove({ output: "create:mechanical_arm" })
    event.remove({ output: "create_sa:brass_drill_head" })
    event.remove({ output: "create_sa:portable_drill" })
    event.remove({ output: "minecraft:crafter" })
    event.remove({ output: "create_sa:flamethrower" })
    event.remove({ output: "sophisticatedbackpacks:feeding_upgrade" })
    event.remove({ id: "create:crafting/appliances/netherite_backtank" })
    event.remove({ output: "dungeonsdelight:iron_cleaver" })
    event.remove({ output: "dungeonsdelight:golden_cleaver" })
    event.remove({ output: "dungeonsdelight:diamond_cleaver" })
    event.remove({ output: "dungeonsdelight:netherite_cleaver" })
    event.remove({ output: "farmersdelight:iron_knife" })
    event.remove({ output: "farmersdelight:golden_knife" })
    event.remove({ output: "farmersdelight:diamond_knife" })
    event.remove({ output: "farmersdelight:netherite_knife" })
    event.remove({ output: "companions:netherite_dagger" })
    event.remove({ output: "create_sa:steam_engine" })
    event.remove({ output: "knightlib:empty_grail" })

    event.shaped("knightlib:empty_grail", [
        "C C",
        " C ",
        " C "
    ], {
        
        C: "minecraft:copper_ingot"

    })

    event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('create_sa:steam_engine', 0.85),
      CreateItem.of('create_sa:heat_engine', 0.05),
      CreateItem.of('create_sa:hydraulic_engine', 0.05)
    ],
    'create:brass_sheet',
    [
      event.recipes.create.deploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:cogwheel']),
      event.recipes.create.deploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:large_cogwheel']),
      event.recipes.create.deploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create_sa:heat_engine']),
      event.recipes.create.deploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create_sa:hydraulic_engine']),
      event.recipes.create.deploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:propeller']),
    ]
  )
  .transitionalItem('create_sa:incomplete_steam_engine')
  .loops(3);

    event.shaped("minecraft:iron_horse_armor", [
        "P P",
        "PPP",
        "P P"
    ], {
        
        P: "kubejs:iron_plate"

    })

    event.shaped("companions:netherite_dagger", [
        " N ",
        " S ",
        "   "
    ], {
        
        N: "kubejs:netherite_plate",
        S: "minecraft:copper_ingot"
    })


    event.shaped("farmersdelight:iron_knife", [
        " I ",
        " S ",
        "   "
    ], {
        
        I: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("farmersdelight:golden_knife", [
        " G ",
        " S ",
        "   "
    ], {
        
        G: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("farmersdelight:diamond_knife", [
        " D ",
        " S ",
        "   "
    ], {
        
        D: "kubejs:reinforced_diamond",
        S: "minecraft:stick"
    })

    event.smithing(
        'farmersdelight:netherite_knife',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'farmersdelight:diamond_knife',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )


    event.shaped("dungeonsdelight:iron_cleaver", [
        "II ",
        "IS ",
        "   "
    ], {
        
        I: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("dungeonsdelight:golden_cleaver", [
        "GG ",
        "GS ",
        "   "
    ], {
        
        G: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("dungeonsdelight:diamond_cleaver", [
        "DD ",
        "DS ",
        "   "
    ], {
        
        D: "kubejs:reinforced_diamond",
        S: "minecraft:stick"
    })

    event.smithing(
        'dungeonsdelight:netherite_cleaver',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'dungeonsdelight:diamond_cleaver',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'create:netherite_backtank',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'create:copper_backtank',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )



    event.shaped("sophisticatedbackpacks:feeding_upgrade", [
        " B ",
        "EUE",
        "ACM"
    ], {
        
        B: "supplementaries:lunch_basket",
        E: "minecraft:ender_pearl",
        U: "sophisticatedbackpacks:upgrade_base",
        A: "minecraft:golden_apple",
        M: "minecraft:glistering_melon_slice",
        C: "minecraft:golden_carrot"

    })

    event.recipes.create.mechanical_crafting('create_sa:flamethrower', [
        " T   ",
        "AYESS",
        "AAS  "
        
    ], {
        T: "create:fluid_tank",
        A: "create:andesite_alloy",
        Y: "create_sa:hydraulic_engine",
        E: "create_sa:heat_engine",
        S: "create:sturdy_sheet"

    })

    event.shaped("minecraft:crafter", [
        "IBI",
        "ICI",
        "RDR"
    ], {
        
        B: "create:crafting_blueprint",
        I: "minecraft:iron_ingot",
        C: "minecraft:crafting_table",
        R: "minecraft:redstone",
        D: "minecraft:dropper"

    })


    event.recipes.create.mechanical_crafting('create_sa:portable_drill', [
        " BIB ",
        "HBSCD",
        " BUB "
        
    ], {
        I: "create_sa:small_filling_tank",
        U: "create_sa:small_fueling_tank",
        S: "create_sa:steam_engine",
        H: "simulated:iron_handle",
        B: "create:brass_ingot",
        D: "create_sa:brass_drill_head",
        C: "create:cogwheel"


    })

    event.shaped("create_sa:brass_drill_head", [
        "BB ",
        "BPD",
        "BB "
    ], {
        
        B: "create:brass_ingot",
        P: "create:precision_mechanism",
        D: "kubejs:drill_head"

    })

    event.shaped("create:mechanical_arm", [
        "WBH",
        "B  ",
        "PC "
    ], {
        
        W: "create:cogwheel",
        B: "create:brass_sheet",
        H: "create:brass_hand",
        P: "create:precision_mechanism",
        C: "create:brass_casing"

    })

    event.recipes.create.mechanical_crafting('create_sa:brass_jetpack_chestplate', [
        "CBCBC",
        "PBSBP",
        " BAB "
        
    ], {
        B: "kubejs:brass_plate",
        P: "aeronautics:smart_propeller",
        A: "create:andesite_alloy",
        C: "create:cogwheel",
        S: "create_sa:steam_engine"
    })

    event.shaped("create_sa:copper_jetpack_chestplate", [
        "SCS",
        "THT",
        "PAP"
    ], {
        S: "kubejs:copper_plate",
        C: "create:cogwheel",
        H: "create_sa:hydraulic_engine",
        T: "create:fluid_tank",
        A: "create:andesite_alloy",
        P: "create:propeller"

    })

    event.shaped("create_sa:andesite_jetpack_chestplate", [
        "SBS",
        "FHF",
        "PAP"
    ], {
        S: "createdeco:andesite_sheet",
        B: "create:belt_connector",
        H: "create_sa:heat_engine",
        F: "minecraft:blast_furnace",
        A: "create:zinc_ingot",
        P: "aeronautics:andesite_propeller"

    })
    
    event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('simulated:engine_assembly', 100)
    ],
    'kubejs:iron_plate',
    [
      event.recipes.create.deploying('simulated:incomplete_engine_assembly', ['simulated:incomplete_engine_assembly', 'create:cogwheel']),
      event.recipes.create.deploying('simulated:incomplete_engine_assembly', ['simulated:incomplete_engine_assembly', 'create:large_cogwheel']),
      event.recipes.create.deploying('simulated:incomplete_engine_assembly', ['simulated:incomplete_engine_assembly', 'minecraft:iron_nugget']),
    ]
  )
  .transitionalItem('simulated:incomplete_engine_assembly')
  .loops(3);

    event.shaped("minecraft:iron_pickaxe", [
        "RRR",
        " S ",
        " S "
    ], {
        R: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:iron_axe", [
        "RR ",
        "RS ",
        " S "
    ], {
        R: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:iron_hoe", [
        "RR ",
        " S ",
        " S "
    ], {
        R: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:iron_shovel", [
        " R ",
        " S ",
        " S "
    ], {
        R: "create:iron_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:iron_sword", [
        " R ",
        " R ",
        " S "
    ], {
        R: "create:iron_sheet",
        S: "minecraft:stick"
    })
    
    event.shaped("minecraft:golden_pickaxe", [
        "RRR",
        " S ",
        " S "
    ], {
        R: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:golden_axe", [
        "RR ",
        "RS ",
        " S "
    ], {
        R: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:golden_hoe", [
        "RR ",
        " S ",
        " S "
    ], {
        R: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:golden_shovel", [
        " R ",
        " S ",
        " S "
    ], {
        R: "create:golden_sheet",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:golden_sword", [
        " R ",
        " R ",
        " S "
    ], {
        R: "create:golden_sheet",
        S: "minecraft:stick"
    })
    
    // brass tools

    event.shaped("create_sa:brass_pickaxe", [
        "RRR",
        " S ",
        " S "
    ], {
        R: "kubejs:brass_plate",
        S: "minecraft:stick"
    })

    event.shaped("create_sa:brass_axe", [
        "RR ",
        "RS ",
        " S "
    ], {
        R: "kubejs:brass_plate",
        S: "minecraft:stick"
    })

    event.shaped("create_sa:brass_hoe", [
        "RR ",
        " S ",
        " S "
    ], {
        R: "kubejs:brass_plate",
        S: "minecraft:stick"
    })

    event.shaped("create_sa:brass_shovel", [
        " R ",
        " S ",
        " S "
    ], {
        R: "kubejs:brass_plate",
        S: "minecraft:stick"
    })

    event.shaped("create_sa:brass_sword", [
        " R ",
        " R ",
        " S "
    ], {
        R: "kubejs:brass_plate",
        S: "minecraft:stick"
    })
    


    event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:reinforced_netherite_plate', 100)
    ],
    'kubejs:netherite_plate',
    [
      event.recipes.create.deploying('kubejs:incomplete_reinforced_netherite_plate', ['kubejs:incomplete_reinforced_netherite_plate', 'create_enchantment_industry:experience_cake']),
      event.recipes.create.pressing('kubejs:incomplete_reinforced_netherite_plate', 'kubejs:incomplete_reinforced_netherite_plate'),
      event.recipes.create.deploying('kubejs:incomplete_reinforced_netherite_plate', ['kubejs:incomplete_reinforced_netherite_plate', 'kubejs:reinforced_diamond']),
      event.recipes.create.pressing('kubejs:incomplete_reinforced_netherite_plate', 'kubejs:incomplete_reinforced_netherite_plate'),
      event.recipes.create.deploying('kubejs:incomplete_reinforced_netherite_plate', ['kubejs:incomplete_reinforced_netherite_plate', 'kubejs:netherite_plate']),
      event.recipes.create.pressing('kubejs:incomplete_reinforced_netherite_plate', 'kubejs:incomplete_reinforced_netherite_plate')
    ]
  )
  .transitionalItem('kubejs:incomplete_reinforced_netherite_plate')
  .loops(4);

    event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:netherite_plate', 90),
      CreateItem.of('minecraft:netherite_scrap', 10)
    ],
    'minecraft:netherite_ingot',
    [
      event.recipes.create.filling('kubejs:incomplete_netherite_plate', ['kubejs:incomplete_netherite_plate', Fluid.lava(1000)]),
      event.recipes.create.pressing('kubejs:incomplete_netherite_plate', 'kubejs:incomplete_netherite_plate'),
      event.recipes.create.filling('kubejs:incomplete_netherite_plate', ['kubejs:incomplete_netherite_plate', Fluid.water(250)]),
      event.recipes.create.pressing('kubejs:incomplete_netherite_plate', 'kubejs:incomplete_netherite_plate')
    ]
  )
  .transitionalItem('kubejs:incomplete_netherite_plate')
  .loops(16);

    event.smithing(
        'minecraft:netherite_pickaxe',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_pickaxe',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_axe',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_axe',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_shovel',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_shovel',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_hoe',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_hoe',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_sword',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_sword',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_helmet',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_helmet',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_chestplate',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_chestplate',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_leggings',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_leggings',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.smithing(
        'minecraft:netherite_boots',  // output
        'minecraft:netherite_upgrade_smithing_template'  ,
        'minecraft:diamond_boots',                  // base item
        "kubejs:reinforced_netherite_plate"                // addition material
    )

    event.shaped("minecraft:diamond_helmet", [
        "RRR",
        "R R",
        "   "
    ], {
        R: "kubejs:reinforced_diamond"
    })

    event.shaped("minecraft:diamond_chestplate", [
        "R R",
        "RRR",
        "RRR"
    ], {
        R: "kubejs:reinforced_diamond"
    })

    event.shaped("minecraft:diamond_leggings", [
        "RRR",
        "R R",
        "R R"
    ], {
        R: "kubejs:reinforced_diamond"
    })

    event.shaped("minecraft:diamond_boots", [
        "R R",
        "R R",
        "   "
    ], {
        R: "kubejs:reinforced_diamond"
    })

    event.shaped("kubejs:brittle_diamond_pickaxe", [
        "RRR",
        " S ",
        " S "
    ], {
        R: "minecraft:diamond",
        S: "minecraft:stick"
    })

    event.shaped("kubejs:brittle_diamond_axe", [
        "RR ",
        "RS ",
        " S "
    ], {
        R: "minecraft:diamond",
        S: "minecraft:stick"
    })

    event.shaped("kubejs:brittle_diamond_hoe", [
        "RR ",
        " S ",
        " S "
    ], {
        R: "minecraft:diamond",
        S: "minecraft:stick"
    })

    event.shaped("kubejs:brittle_diamond_shovel", [
        " R ",
        " S ",
        " S "
    ], {
        R: "minecraft:diamond",
        S: "minecraft:stick"
    })

    event.shaped("kubejs:brittle_diamond_sword", [
        " R ",
        " R ",
        " S "
    ], {
        R: "minecraft:diamond",
        S: "minecraft:stick"
    })

    event.shaped("minecraft:diamond_pickaxe", [
        "RRR",
        " S ",
        " S "
    ], {
        R: "kubejs:reinforced_diamond",
        S: "create_sa:zinc_handle"
    })

    event.shaped("minecraft:diamond_axe", [
        "RR ",
        "RS ",
        " S "
    ], {
        R: "kubejs:reinforced_diamond",
        S: "create_sa:zinc_handle"
    })

    event.shaped("minecraft:diamond_hoe", [
        "RR ",
        " S ",
        " S "
    ], {
        R: "kubejs:reinforced_diamond",
        S: "create_sa:zinc_handle"
    })

    event.shaped("minecraft:diamond_shovel", [
        " R ",
        " S ",
        " S "
    ], {
        R: "kubejs:reinforced_diamond",
        S: "create_sa:zinc_handle"
    })

    event.shaped("minecraft:diamond_sword", [
        " R ",
        " R ",
        " S "
    ], {
        R: "kubejs:reinforced_diamond",
        S: "create_sa:zinc_handle"
    })

    event.recipes.create.mixing(
        ['kubejs:energized_glow_dust'],
        ['minecraft:glowstone_dust',
        '4x minecraft:redstone'
        ]
        )
    
    event.recipes.create.mixing(
        ['kubejs:noble_gem_dust'],
        ['2x kubejs:emerald_grit',
        'createaddition:diamond_grit'
        ]
        )

    event.recipes.create.mixing(
        ['kubejs:oceanic_resonance_dust'],
        ['4x kubejs:amethyst_grit',
        'minecraft:prismarine_crystals'
        ]
        )

    event.recipes.create.milling(
        [CreateItem.of('minecraft:glowstone_dust', 0.1),
         CreateItem.of('minecraft:quartz', 0.5)],
            'minecraft:prismarine_crystals')

    event.shapeless("kubejs:create_guide", [
        'minecraft:book',
        'create:andesite_alloy'
    ])

    event.shapeless(
        Item.of('kubejs:chainmail', 4), // arg 1: output
        [
    '6x createaddition:iron_wire'
        ])

    event.recipes.create.mixing(
        ['kubejs:reinforced_diamond'],
        ['2x kubejs:noble_gem_dust',
        '2x kubejs:oceanic_resonance_dust',
        '4x kubejs:energized_glow_dust',
        'create_aquatic_ambitions:calcium_rich_powder'
        ]
        )
        .superheated()

    event.recipes.create.mechanical_crafting('kubejs:black_hole_smithing_template', [
        " GGG ",
        "GGSGG",
        "GUHCG",
        "GGSGG",
        " GGG "
        
    ], {
        G: "minecraft:gold_block",
        H: "minecraft:heavy_core",
        U: "minecraft:netherite_upgrade_smithing_template",
        C: "sophisticatedbackpacks:advanced_compacting_upgrade",
        S: "minecraft:shulker_shell"
    })

    event.recipes.create.mechanical_crafting('create_sa:brass_exoskeleton_chestplate', [
        "PPFPP",
        "APSPA",
        "BPAPB"
        
    ], {
        A: "create:andesite_alloy",
        P: "kubejs:brass_plate",
        S: "create_sa:steam_engine",
        B: "create:brass_block",
        F: "create:flywheel"
    })


    event.shaped("create_sa:copper_exoskeleton_chestplate", [
        "PCP",
        "THT",
        "PAP"
    ], {
        C: "create:cogwheel",
        P: "kubejs:copper_plate",
        T: "create:fluid_tank",
        H: "create_sa:hydraulic_engine",
        A: "create:andesite_alloy"
    })

    event.shaped("create_dragons_plus:fragile_fluid_tank", [
        "   ",
        "GTG",
        "   "
    ], {
        T: "create:fluid_tank",
        G: "minecraft:gold_ingot"
    })


    event.shaped("create:copper_backtank", [
        "ASA",
        "PTP",
        " P "
    ], {
        A: "create:andesite_alloy",
        S: "create:shaft",
        P: "kubejs:copper_plate",
        T: "create:fluid_tank"
    })

    event.smithing(
        'create_sa:brass_helmet',  // output
        'plushie_buddies:fabric',
        'minecraft:chainmail_helmet',             // base item
        'kubejs:brass_plate' //template               // addition material
    )

    event.smithing(
        'create_sa:brass_chestplate',  // output
        'plushie_buddies:fabric'  ,
        'minecraft:chainmail_chestplate',                  // base item
        "kubejs:brass_plate"                // addition material
    )

    event.smithing(
        'create_sa:brass_leggings',  // output
        'plushie_buddies:fabric' ,
        'minecraft:chainmail_leggings',                  // base item
        'kubejs:brass_plate' //template            // addition material
    )

    event.smithing(
        'create_sa:brass_boots',  // output
        'plushie_buddies:fabric',
        'minecraft:chainmail_boots',             // base item
        'kubejs:brass_plate' //template               // addition material
    )

    event.smithing(
        'minecraft:golden_helmet',  // output
        'plushie_buddies:fabric' , //template
        'minecraft:chainmail_helmet',                  // base item
        'kubejs:golden_plate'                // addition material
    )

    event.smithing(
        'minecraft:golden_chestplate',  // output
        'plushie_buddies:fabric'  ,
        'minecraft:chainmail_chestplate',                  // base item
        "kubejs:golden_plate"                // addition material
    )

    event.smithing(
        'minecraft:golden_leggings',  // output
        'plushie_buddies:fabric' ,
        'minecraft:chainmail_leggings',                  // base item
        'kubejs:golden_plate' //template            // addition material
    )

    event.smithing(
        'minecraft:golden_boots',  // output
        'plushie_buddies:fabric' , //template
        'minecraft:chainmail_boots',                  // base item
        'kubejs:golden_plate'
    )

    event.shaped("kubejs:copper_plate", [
        "SSS",
        "SSS",
        "   "
    ], {
        S: "create:copper_sheet"
    })

    event.shaped("kubejs:iron_plate", [
        "SSS",
        "SSS",
        "   "
    ], {
        S: "create:iron_sheet"
    })

    event.shaped("kubejs:golden_plate", [
        "SSS",
        "III",
        "SSS"
    ], {
        S: "create:golden_sheet",
        I: "create:iron_sheet"
    })

    event.shaped("kubejs:brass_plate", [
        "SSS",
        "SSS",
        "SSS"
    ], {
        S: "create:brass_sheet"
    })

    event.shaped("16x createdeco:iron_bars_overlay", [
        "BBB",
        "BBB",
        "   "
    ], {
        B: "minecraft:iron_bars"
    })

    event.shaped("2x kubejs:chainmail", [
        "C C",
        " C ",
        "C C"
    ], {
        C: "minecraft:chain"
    })



    event.recipes.create.milling([
        CreateItem.of('createaddition:diamond_grit', 0.75)],
        'minecraft:diamond')

    event.recipes.create.milling([
        CreateItem.of('kubejs:emerald_grit', 0.75)],
        'minecraft:emerald')
        
    event.recipes.create.milling([
        CreateItem.of('kubejs:amethyst_grit', 0.75)],
        'minecraft:amethyst_shard')

    event.smithing(
        'minecraft:iron_helmet',  // output
        'plushie_buddies:fabric',
        'minecraft:chainmail_helmet',             // base item
        'kubejs:iron_plate' //template               // addition material
    )

    event.smithing(
        'minecraft:iron_chestplate',  // output
        'plushie_buddies:fabric'  ,
        'minecraft:chainmail_chestplate',                  // base item
        "kubejs:iron_plate"                // addition material
    )

    event.smithing(
        'minecraft:iron_leggings',  // output
        'plushie_buddies:fabric' ,
        'minecraft:chainmail_leggings',                  // base item
        'kubejs:iron_plate' //template            // addition material
    )

    event.smithing(
        'minecraft:iron_boots',  // output
        'plushie_buddies:fabric' , //template
        'minecraft:chainmail_boots',                  // base item
        'kubejs:iron_plate'                // addition material
    )

    event.shapeless("kubejs:tangled_nether_vines", [
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:twisting_vines',
        'minecraft:weeping_vines'
    ])

    event.shaped("minecraft:chainmail_helmet", [
        "CCC",
        "C C",
        "   "
    ], {
        C: "kubejs:chainmail"
    })

    event.shaped("minecraft:chainmail_chestplate", [
        "C C",
        "CCC",
        "CCC"
    ], {
        C: "kubejs:chainmail"
    })

    event.shaped("minecraft:chainmail_leggings", [
        "CCC",
        "C C",
        "C C"
    ], {
        C: "kubejs:chainmail"
    })

    event.shaped("minecraft:chainmail_boots", [
        "C C",
        "C C",
        "   "
    ], {
        C: "kubejs:chainmail"
    })

// copper backpack recipe

    event.recipes.create.mixing(
        ['minecraft:netherite_ingot'],
        ['minecraft:netherite_scrap',
        'minecraft:gold_ingot',
        'minecraft:netherite_scrap',
        'minecraft:gold_ingot',
        'minecraft:gold_ingot',
        'minecraft:gold_ingot']
        )
        .superheated()


    event.shaped("artifacts:bunny_hoppers", [
        "F F",
        "HLH",
        "R R"
    ], {
        H: "minecraft:rabbit_hide",
        L: "minecraft:leather_boots",
        R: "minecraft:rabbit_foot",
        F: "minecraft:feather"

    })

    event.shaped("create:rotation_speed_controller", [
        " T ",
        "CPL",
        "BBB"
    ], {
        P: "create:precision_mechanism",
        T: "create:electron_tube",
        B: "create:brass_casing",
        C: "create:cogwheel",
        L: "create:large_cogwheel"
    })

    event.shaped("create:steam_engine", [
        "GCG",
        "AEA",
        " P "
    ], {
        A: "create:andesite_alloy",
        C: "create:cogwheel",
        G: "create:golden_sheet",
        E: "create_sa:hydraulic_engine",
        P: "create:fluid_pipe"
    })    

    event.shaped("simulated:red_portable_engine", [
        "ICI",
        "ASA",
        " B "
    ], {
        A: "simulated:engine_assembly",
        B: "minecraft:blast_furnace",
        S: "create_sa:heat_engine",
        I: "create:iron_sheet",
        C: "create:cogwheel"
    })

    event.smithing(
        'create_sa:netherite_jetpack_chestplate',  // output
        'kubejs:netherite_jetpack_smithing_template', //template
        'minecraft:netherite_chestplate',                  // base item
        'create:netherite_backtank'                 // addition material
    )

    event.smithing(
        'sophisticatedbackpacks:netherite_backpack',  // output
        'kubejs:black_hole_smithing_template',
        'sophisticatedbackpacks:diamond_backpack',
        'kubejs:reinforced_netherite_plate'
    )

    event.recipes.create.mechanical_crafting('kubejs:netherite_jetpack_smithing_template', [
        "IENEI",
        "WPBPW",
        "RCGAR",
        "SV LS"
        
    ], {
        A: "create_sa:andesite_jetpack_chestplate",
        B: "create_sa:brass_jetpack_chestplate",
        C: "create_sa:copper_jetpack_chestplate",
        N: "minecraft:netherite_upgrade_smithing_template",
        E: "create:steam_engine",
        G: "simulated:gyroscopic_mechanism",
        S: "aeronautics:smart_propeller",
        P: "simulated:red_portable_engine",
        W: "create:cogwheel",
        L: "create_sa:large_fueling_tank",
        V: "create_sa:large_filling_tank",
        I: "kubejs:netherite_plate",
        R: "create:rotation_speed_controller"

    })

     

    event.shaped("create_sa:small_filling_tank", [
        " F ",
        "FTF",
        " F "
    ], {
        F: "create:fluid_tank",
        T: "sophisticatedbackpacks:tank_upgrade"
    })
    
    event.shaped("create_sa:small_fueling_tank", [
        "SFS",
        "FTF",
        "SFS"
    ], {
        F: "railways:fuel_tank",
        T: "sophisticatedbackpacks:tank_upgrade",
        S: "create:sturdy_sheet"
    })

    event.shaped("create_sa:medium_filling_tank", [
        " F ",
        "FTF",
        "CFC"
    ], {
        F: "create_dragons_plus:fragile_fluid_tank",
        T: "create_sa:small_filling_tank",
        C: "minecraft:ender_chest"

    })
    
    event.shaped("create_sa:medium_fueling_tank", [
        "SFS",
        "FTF",
        "CFC"
    ], {
        F: "create_dragons_plus:fragile_fluid_tank",
        T: "create_sa:small_fueling_tank",
        S: "create:sturdy_sheet",
        C: "minecraft:ender_chest"
    })

    event.shaped("create_sa:large_filling_tank", [
        "FEF",
        "FTF",
        "FFF"
    ], {
        F: "create_dragons_plus:levitite_fragile_fluid_tank",
        T: "create_sa:medium_filling_tank",
        E: "sophisticatedbackpacks:xp_pump_upgrade"
    })
    
    event.shaped("create_sa:large_fueling_tank", [
        "FEF",
        "FTF",
        "FFF"
    ], {
        F: "create_dragons_plus:levitite_fragile_fluid_tank",
        T: "create_sa:medium_fueling_tank",
        E: "sophisticatedbackpacks:xp_pump_upgrade"
    })


    event.shaped("kubejs:drill_head", [
        " D ",
        " S ",
        "SCS"
    ], {
        D: "createaddition:diamond_grit",
        S: "create:iron_sheet",
        C: "create:shaft"
    })
    
    event.shaped("create:mechanical_drill", [
        " D ",
        "ICI",
        "ALA"
    ], {
        D: "kubejs:drill_head",
        I: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    event.shaped("create:mechanical_saw", [
        "ISI",
        "SCS",
        "ALA"
    ], {
        I: "create:iron_sheet",
        S: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    // Mechanical Harvester - With Andesite Casings on Bottom
    event.shaped("create:mechanical_harvester", [
        "III",
        "YCY",
        "ALA"
    ], {
        Y: "create:andesite_alloy",
        I: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    event.shaped("create_mechanical_extruder:mechanical_extruder", [
        "IPI",
        "LCL",
        "ILI"
    ], {
        P: "minecraft:piston",
        I: "create:iron_sheet",
        L: "minecraft:glass",
        C: "create:andesite_casing"

    })

    event.shaped("4x create:mechanical_crafter", [
        " E ",
        "GCG",
        " B "
    ], {
        C: "minecraft:crafter",
        G: "create:cogwheel",
        E: "create:electron_tube",
        B: "create:brass_casing"

    })

    event.remove({ output: "create:brass_ingot" })
    event.recipes.create.mixing("create:brass_ingot", [
        "minecraft:copper_ingot",
        "minecraft:copper_ingot",
        "create:zinc_ingot"
    ]).heated().superheated()
})