export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = (item) => {return item.toLocaleString('ru-RU', 
{style: 'currency', currency: 'UAH', currencyDisplay: 'code'})};