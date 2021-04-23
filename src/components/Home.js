import React from 'react'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://media.gettyimages.com/vectors/shopping-cart-icon-silhouette-2-vector-id898295684?s=612x612" />
            </div>
            <h1>Home Component</h1>
            <div className="Cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/pictures/133188-v4-oppo-f11-mobile-phone-large-1.jpg?tr=q-60" />
                </div>
                <div className="txt-wrapper item">
                    <span>I-Phone</span>
                    <span>Price $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
