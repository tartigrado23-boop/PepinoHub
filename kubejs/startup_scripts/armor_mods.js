ItemEvents.modification(event => {

event.modify('minecraft:chainmail_helmet', item => {

        item.setMaxDamage(130)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 2,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:chainmail_chestplate', item => {

        item.setMaxDamage(150)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 3,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('minecraft:chainmail_leggings', item => {

        item.setMaxDamage(140)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 3,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    
    })

event.modify('minecraft:chainmail_boots', item => {

        item.setMaxDamage(120)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
                        

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 2,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('create_sa:copper_helmet', item => {

        item.setMaxDamage(130)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.oxygen_bonus",
                { 
                    amount: 0.5,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:copper_chestplate', item => {

        item.setMaxDamage(150)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
                        

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())


    })

event.modify('create_sa:copper_leggings', item => {

        item.setMaxDamage(140)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:copper_boots', item => {

        item.setMaxDamage(120)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 2,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )
    
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
        
    })


event.modify('minecraft:iron_helmet', item => {

        item.setMaxDamage(250)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 3,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: 0.05,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('minecraft:iron_chestplate', item => {

        item.setMaxDamage(300)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 5,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: 0.05,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('minecraft:iron_leggings', item => {

        item.setMaxDamage(265)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )
            
            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: 0.05,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('minecraft:iron_boots', item => {

        item.setMaxDamage(235)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
                        
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 3,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: 0.05,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

event.modify('minecraft:golden_helmet', item => {

        item.setMaxDamage(180)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.luck",
                { 
                    amount: 1,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:golden_chestplate', item => {

        item.setMaxDamage(220)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 6,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.luck",
                { 
                    amount: 1,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    
    })

event.modify('minecraft:golden_leggings', item => {

        item.setMaxDamage(200)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 5,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.luck",
                { 
                    amount: 1,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:golden_boots', item => {

        item.setMaxDamage(140)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 3,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.movement_speed",
                { 
                    amount: 0.02,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.luck",
                { 
                    amount: 1,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.oxygen_bonus",
                { 
                    amount: 0.02,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.safe_fall_distance",
                { 
                    amount: 0.02,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.step_height",
                { 
                    amount: 0.02,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:brass_helmet', item => {

        item.setMaxDamage(430)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.burning_time",
                { 
                    amount: -0.2,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:brass_chestplate', item => {

        item.setMaxDamage(530)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 6,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.burning_time",
                { 
                    amount: -0.2,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:brass_leggings', item => {

        item.setMaxDamage(500)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 6,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
           )
            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.burning_time",
                { 
                    amount: -0.2,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:brass_boots', item => {

        item.setMaxDamage(360)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 1,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.burning_time",
                { 
                    amount: -0.2,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:diamond_helmet', item => {

        item.setMaxDamage(860)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 5,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 2,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )



        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:diamond_chestplate', item => {

        item.setMaxDamage(1040)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 7,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 2,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:diamond_leggings', item => {

        item.setMaxDamage(990)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 6,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.movement_speed",
                { 
                    amount: 0.01,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:diamond_boots', item => {

        item.setMaxDamage(720)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.step_height",
                { 
                    amount: 0.5,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:netherite_helmet', item => {

        item.setMaxDamage(960)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 6,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 2,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

            .withModifierAdded(
                "generic.burning_time",
                { 
                    amount: -0.5,
                    id: "minecraft:armor.helmet",
                    operation: "add_value"
                }, 
                "head"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:netherite_chestplate', item => {

        item.setMaxDamage(1200)
    
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 8,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 3,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:netherite_leggings', item => {

        item.setMaxDamage(1100)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 7,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 3,
                    id: "minecraft:armor.leggings",
                    operation: "add_value"
                }, 
                "legs"
            )

            .withModifierAdded(
                "generic.movement_speed",
                { 
                    amount: 0.02,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "legs"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('minecraft:netherite_boots', item => {

        item.setMaxDamage(800)

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers

            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 4,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 2,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

            .withModifierAdded(
                "generic.step_height",
                { 
                    amount: 0.5,
                    id: "minecraft:armor.boots",
                    operation: "add_value"
                }, 
                "feet"
            )

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

    })

event.modify('create_sa:netherite_jetpack_chestplate', item => {

        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: 9,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: 4,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )

            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: 0.2,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )
            
            .withModifierAdded(
                "generic.safe_fall_distance",
                { 
                    amount: 9,
                    id: "minecraft:armor.chestplate",
                    operation: "add_value"
                }, 
                "chest"
            )     

        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

    

})