LootJS.modifiers(event => {
    //event.getLootTable("minecraft:chests/desert_pyramid").firstPool().removeItem("minecraft:bone")
    //event.getLootTable(LootType.CHEST).removeItem("minecraft:bone")
    
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT).removeLoot("minecraft:iron_pickaxe")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_sword")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_axe")

    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_pickaxe")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_sword")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_axe")

    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_pickaxe")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_sword")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_axe")

    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_helmet")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_chestplate")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_leggings")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:iron_boots")

    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_helmet")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_chestplate")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_leggings")
    event.addTableModifier(LootType.CHEST).removeLoot("minecraft:golden_boots")

    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_helmet")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_chestplate")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_leggings")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT, LootType.ARCHAEOLOGY, LootType.BLOCK).removeLoot("minecraft:diamond_boots")

    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT).removeLoot("farmersdelight:diamond_knife")

    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT).removeLoot("minecraft:netherite_ingot")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT).removeLoot("minecraft:ancient_debris")
    event.addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.VAULT).removeLoot("minecraft:netherite_scrap")

   
    event
        .addEntityModifier("crittersandcompanions:jumping_spider")
    
    event
        .addEntityModifier("crittersandcompanions:jumping_spider")
        .matchMainHand(Ingredient.of("#c:tools/knife"))
            .addLoot(
            LootEntry.of("minersdelight:spider_leg")
                .withWeight(1).setCount([0, 1]),
            LootEntry.of("minersdelight:arthropod")
                .withWeight(1).setCount([0, 1])
        );

    event
        .addEntityModifier("crittersandcompanions:dragonfly")
        .matchMainHand(Ingredient.of("#c:tools/knife"))
            .addLoot(
            LootEntry.of("minersdelight:arthropod")
                .withWeight(1).setCount([0, 1])
        );
      
    event
        .addEntityModifier("minecraft:warden")
        .matchMainHand(Ingredient.of("#c:tools/knife"))
            .addLoot(
            LootEntry.of("dungeonsdelight:wardenzola")
                .withWeight(1).setCount(1)
        )
        

    })

MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades(["minecraft:armorer", "minecraft:toolsmith", "minecraft:weaponsmith"], [4,5])

})

    //no idea how to dropped cooked stuff