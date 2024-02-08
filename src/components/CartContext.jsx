import {createContext, useState} from "react";

const CartContext = createContext(null)


export const CartProvider = ({children}) => {
    const [count, setCount] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    let amount = 125;

    return (
        <CartContext.Provider value={{count, amount, setCount, isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;