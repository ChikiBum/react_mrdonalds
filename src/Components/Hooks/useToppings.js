import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false
}));

export function useToppings(openItem) {
    const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : [];
    const [toppings, setTopping] = useState(readyTopping);
    
    const checkToppings = index => {
        setTopping(toppings.map((item, i) => {
            const newItem = {...item};
            if (index === i) {
                newItem.checked = !newItem.checked;
            }
            return newItem;
        }));
    }

    return {toppings, checkToppings};
};