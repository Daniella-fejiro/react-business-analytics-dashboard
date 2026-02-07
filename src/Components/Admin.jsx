export default function Admin({productPrice,quantitySold}){
    return(
        <div className="admin box2">
            <h2>👤</h2>
            <h4>Admin Ogundele Oluwaseyi</h4>
            <p>Product price: ${productPrice}</p>
            <p>Quantity Sold: {quantitySold}</p>
        </div>
    )
}