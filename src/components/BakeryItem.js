// TODO: create a component that displays a single bakery item

export default  function BakeryItem(props) {
    const item = props.item;
    const updateCart = props.updateCart;
    const cart = props.cart;
    const handleClick = () => {
        updateCart([...cart, item]);

    }

    return (
        <div>
            <p> {item.name} ${item.price}  
            <button onClick={handleClick}>Add to Cart</button>
            </p>

            <img src = {item.image}></img>
        </div>

    );
}