ServerEvents.recipes(event => {
    
    event.remove({ output: "minecraft:fermented_spider_eye" }) 
    event.custom({
  "type": "brewinandchewin:fermenting",
  "fermentingtime": 6000,
  "ingredients": [
    {
      "item": "minecraft:spider_eye"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "tag": "c:mushrooms"
    }
  ],
  "result": {
    "count": 1,
    "item": "minecraft:fermented_spider_eye"
  },
  "temperature": 4


//CURRENTLY CREATES GLASS BOTTLES FROM NOTHING, FIX EVENTUALLY
})

    event.custom({
  "type": "brewinandchewin:fermenting",
  "base_fluid": {
    "amount": 1000,
    "ingredient": {
      "id": "minecraft:milk"
    },
    "unit": "millibuckets"
  },
  "fermentingtime": 6000,
  "ingredients": [
    {
      "item": "dungeonsdelight:ancient_egg"
    },
    {
      "item": "dungeonsdelight:ancient_egg"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "dungeonsdelight:slicorice"
    }
  ],
  "result": {
    "count": 4,
    "item": "dungeonsdelight:necronog"
  },
  "temperature": 1
})





})