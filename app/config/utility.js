
export const searchFruit = (fruitName, seasonalFruitApi) => {debugger
    const result = seasonalFruitApi.seasonalFruit.map(seasonalFruit => {
        return seasonalFruit.fruits.filter(fruit => fruit.name.includes(fruitName))
    })
    return result;
}