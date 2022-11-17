
export const searchFruit = (fruitName, seasonalFruitApi) => {debugger
    const result = seasonalFruitApi.map(seasonalFruit => {
        return seasonalFruit.fruits.filter(fruit => fruit.name.includes(fruitName))
    })
    return result;
}