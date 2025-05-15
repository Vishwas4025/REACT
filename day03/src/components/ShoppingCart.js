// import { useReducer } from "react"



// const ShoppingCart=()=>{

//     const Products=[
//         {
//             id : 1,
//             name:"Apple",
//             description : "Apples are red in colour",
//             price : 150,
//         },
//         {
//             id : 2,
//             name:"Mango",
//             description : "Mangoes are yellow in colour",
//             price : 250,
//         }
//     ]

//     const cartReducer=(state, action)=>{
//         const id = action.payload;
//         switch(action.type){
//             case 'ADD_PRODUCT':
//                 const product = Products.find((p)=>p.id===id);
//                 const exi = state.cart.find((p)=>p.id===id);
//                 const totalcost=state.totalcost+product.price;
//                 if(!exi){
//                     return {cart:[...state.cart, {...product, count: 1}], totalcost:totalcost }
//                 }
//                 else{
//                     const updProduct = {...exi, count:exi.count+1}
//                     const newCart = state.cart.filter((p)=>p.id!==id);
//                     return {cart : [...newCart, updProduct], totalcost:totalcost }
//                 }
//             case 'REMOVE_PRODUCT':
//                 const prodToRemove = state.cart.find((p)=>p.id===id);
//                 const newCost = state.totalcost - (prodToRemove.count*prodToRemove.price);
//                 const newCart = state.cart.filter((p)=>p.id!==id);
//                 return {cart:[...newCart], totalcost:newCost};
//             default:
//                 return {...state};
//         }
//     }

//     const [state, dispatch] = useReducer(cartReducer, {
//         cart : [],
//         totalcost : 0,
//     })

    

//     const handleAddProduct=(id)=>{
//         dispatch({type:"ADD_PRODUCT", payload: id});
//     }

//     const handleRemoveProduct=(id)=>{
//         dispatch({type:"REMOVE_PRODUCT", payload:id});
//     }


//     return(
//         <div>
//             <div>
//                 {Products.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <h2>{p.name}</h2>
//                             <p>{p.description}</p>
//                             <h3>Price : {p.price}</h3>
//                             <button onClick={()=>handleAddProduct(p.id)}>Add to cart</button>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div>
//                 <h2>CART</h2>
//                 {state.cart.map((p)=>{
//                     return(
//                         <div key={p.id}>
//                             <h3>{p.name}</h3>
//                             <p>count : {p.count}</p>
//                             <button onClick={()=>handleRemoveProduct(p.id)}>remove product</button>
//                         </div>
//                     )
//                 })}
//                 <h3>totalcost : {state.totalcost}</h3>
//             </div>
//         </div>
//     )
// }

// export default ShoppingCart;


import { useReducer } from "react"



const ShoppingCart=()=>{

    const Products=[
        {
            id : 1,
            name:"Apple",
            description : "Apples are red in colour",
            price : 150,
        },
        {
            id : 2,
            name:"Mango",
            description : "Mangoes are yellow in colour",
            price : 250,
        },
        {
            id : 3,
            name:"Cherries",
            description : "cherries are dark red in colour",
            price : 100,
        }
    ]

    const cartReducer=(state, action)=>{
        const product = action.payload;
        switch(action.type){
            case 'ADD_PRODUCT':
                const exi = state.find((p)=>p.id===product.id);
                if(!exi){
                    return [...state, {...product, count: 1} ]
                }
                else{
                    const updProduct = {...exi, count:exi.count+1}
                    const newCart = state.filter((p)=>p.id!==product.id);
                    return [...newCart, updProduct].sort((a,b)=> a.id-b.id);
                }
            case 'REMOVE_PRODUCT':
                const prodToRemove = state.find((p)=>p.id===product.id);
                if(!prodToRemove){
                    return state
                }
                const newCart = state.filter((p)=>p.id!==product.id);
                return [...newCart].sort((a,b)=> a.id-b.id);
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(cartReducer, [])

    

    const handleAddProduct=(product)=>{
        dispatch({type:"ADD_PRODUCT", payload: product});
    }

    const handleRemoveProduct=(product)=>{
        dispatch({type:"REMOVE_PRODUCT", payload: product});
    }

    const handleTotalcost=()=>{
        const totalcost = state.reduce((acc, item)=>{
            return acc+item.price*item.count;
        }, 0);
        return totalcost;
    }


    return(
        <div className="container">
            <div className="products">
                <h2>PRODUCTS</h2>
                {Products.map((p) => {
                    return (
                        <div key={p.id} className="product">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <h3>Price : {p.price}</h3>
                            <button onClick={()=>handleAddProduct(p)}>Add to cart</button>
                        </div>
                    )
                })}
            </div>
            <div className="cart">
                <h2>CART</h2>
                {state.length===0 ? (<p>no items to display</p>) : 
                    (<>
                        {state.map((p)=>{
                            return(
                                <div key={p.id} className="cart-item">
                                    <h3>{p.name}</h3>
                                    <p>count : {p.count}</p>
                                    <button className="remove-button" onClick={()=>handleRemoveProduct(p)}>
                                        remove item                                        </button>
                                </div>
                            )
                        })}
                        <div className="total">Totalcost : {handleTotalcost()}</div>
                    </>)
                }
            </div>
        </div>
    )
}

export default ShoppingCart;