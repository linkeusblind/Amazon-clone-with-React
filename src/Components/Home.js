import React from 'react'
import "./Home.scss";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
                    alt="" />
            </div>
            <div className="home__row">
                <Product
                    id={123457665736}
                    title='BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox'
                    price={35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
                />
                <Product
                    id={45642565436}
                    title='PICTEK Gaming Mouse Wired '
                    price={15}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={78924797876}
                    title='Apple iPhone XR, 64GB, Black - Fully Unlocked (Renewed)'
                    price={429.99}
                    rating={6}
                    image="https://images-na.ssl-images-amazon.com/images/I/51WMia%2BvWYL._AC_SL1024_.jpg"
                />
                <Product
                    id={1011124343657}
                    title='PlayStation 4 Pro 1TB Console'
                    price={399}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                />
                <Product
                    id={131415678969}
                    title='Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card'
                    price={448}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={16171897896}
                    title='Open Box Like New Sony 85 Bravia 4K HDR Professional Display'
                    price={3723}
                    rating={7}
                    image="https://images-na.ssl-images-amazon.com/images/I/71pjowGAs8L._AC_SL1000_.jpg"

                />
            </div>
        </div>
    )
}

export default Home
