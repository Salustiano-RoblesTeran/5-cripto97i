const url = 'https://api.coincap.io/v2/assets';

let limite = 10;

export const getCoins = async () => {
    const coins = await fetch(`${url}?limit=${limite}`); // Template strings

    const data = await coins.json();

    return data;
}

//----------------

export const getcoinId = async (id) => {
    const coins = await fetch(`${url}/${id}`);
    const data = await coins.json();
    return data;
}