
export const calculateTotal = (amount) => {
    return amount?(amount + 0.2).toFixed(2):0.00;
};