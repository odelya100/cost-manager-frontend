export function aggregateByCategory(costs) {
    const result = {};

    costs.forEach(cost => {
        const category = cost.category;
        if (!result[category]) {
            result[category] = 0;
        }
        result[category] += cost.sum;
    });

    return result;
}
