export const randomIntFromInterval = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createExampleOrder = (index: number, now: boolean, complete: boolean) => {
    return {
        refNumber: 1000 + index,
        date: now ? Date.now() : Date.now() - randomIntFromInterval(1000000, 100000000),
        card: createRandomProducts(),
        complete: false,
    };
};

const createMockCardItem = () => {
    const ranomProd = randomIntFromInterval(0, 5);
    switch (ranomProd) {
        case 0:
            return {
                id: 1,
                name: "Pommes",
                price: 5,
                options: createRandomOptions(),
            };
        case 1:
            return {
                id: 2,
                name: "Chees Burger",
                price: 10,
                options: createRandomOptions(),
            };
        case 2:
            return {
                id: 3,
                name: "Cola",
                price: 3,
                options: [],
            };
        case 3:
            return {
                id: 4,
                name: "Steak",
                price: 15,
                options: createRandomOptions(),
            };
        case 4:
            return {
                id: 5,
                name: "Schnitzel",
                price: 11,
                options: createRandomOptions(),
            };
        case 5:
            return {
                id: 6,
                name: "Wurst",
                price: 8,
                options: createRandomOptions(),
            };
    }
};

const createRandomProducts = () => {
    return Array.from(Array(randomIntFromInterval(1, 4)).keys()).map((item) => createMockCardItem());
};

const createRandomOptions = () => {
    return Array.from(Array(randomIntFromInterval(0, 4)).keys()).map((item) => createMockCardOption());
};

const createMockCardOption = () => {
    const ranomProd = randomIntFromInterval(0, 3);
    switch (ranomProd) {
        case 0:
            return {
                id: 10,
                name: "Ketchup",
                price: 0.5,
            };
        case 1:
            return {
                id: 11,
                name: "Mayo",
                price: 0.3,
            };
        case 2:
            return {
                id: 12,
                name: "Salat mit Dressing",
                price: 13,
            };
        case 3:
            return {
                id: 13,
                name: "Extra Bier",
                price: 5,
            };
    }
};
