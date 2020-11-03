import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false
}));

export function useToppings(openItem) {
    console.log(openItem.toppings.length)
   
        const [toppings, setTopping] = useState(getTopping(openItem.toppings));
    
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