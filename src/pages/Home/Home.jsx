import './home.css';
import { Link } from 'react-router-dom';
export function Home() {
    return (
        <>
            <article className='article-1'>
                <Link to="/catalog">
                    <h1 className='article-1-title titles'>Best place to buy and sell used Apple devices</h1>
                </Link>
                <div className="macbooks products">
                    <div>
                        <img src="https://www.crn.com/resources/0275-1520b9e2c8fa-d29b8e38b211-1000/slide1-macbooks.jpeg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Laptops</label>
                    </div>
                </div>
                <div className="imacs products">
                    <div>
                        <img src="https://www.apple.com/newsroom/images/product/imac/standard/apple_new-imac-spring21_hero_04202021.jpg.landing-big_2x.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">iMacs</label>
                    </div>
                </div><div className="iphones products">
                    <div>
                        <img src="https://i.ytimg.com/vi/o6wkuQ_Iruo/maxresdefault.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">iPhones</label>
                    </div>
                </div><div className="watches products">
                    <div>
                        <img src="https://www.apple.com/v/watch/bc/images/meta/gps-lte__b0yvr61u8ws2_og.png?202303280925" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Apple watches</label>
                    </div>
                </div>
            </article>
            <div className='articles-divider'></div>
            <article className='article-1'>
                <h1 className='article-2-title titles'>Featured devices for sale</h1>
                <div className="macbooks products">
                    <div>
                        <img src="https://i.rtings.com/assets/pages/IxCXzynA/apple-laptop-lineup-20220825-3-medium.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Used Laptops</label>
                    </div>
                </div>
                <div className="imacs products">
                    <div>
                        <img src="https://www.apple.com/newsroom/images/product/imac/standard/apple_new-imac-spring21_hero_04202021.jpg.landing-big_2x.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Used iMacs</label>
                    </div>
                </div><div className="iphones products">
                    <div>
                        <img src="https://i.ytimg.com/vi/o6wkuQ_Iruo/maxresdefault.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Used Laptops</label>
                    </div>
                </div><div className="watches products">
                    <div>
                        <img src="https://i.rtings.com/assets/pages/IxCXzynA/apple-laptop-lineup-20220825-3-medium.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Used Laptops</label>
                    </div>
                </div>
            </article>

        </>
    )
}
