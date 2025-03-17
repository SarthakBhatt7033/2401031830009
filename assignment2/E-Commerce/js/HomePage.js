import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="search-bar">
        <div className="search-icon">
          <i className="ti ti-search"></i>
        </div>
        <input
          type="text"
          placeholder="search \ ask me question"
          className="search-input"
        />
        <div className="camera-icon">
          <i className="ti ti-camera"></i>
        </div>
      </div>

      <div className="category-filters">
        <div className="category-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            alt=""
            className="category-icon"
          />
          <span className="category-text">Pairing</span>
        </div>
        <div className="category-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            alt=""
            className="category-icon"
          />
          <span className="category-text">Products</span>
        </div>
        <div className="category-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            alt=""
            className="category-icon"
          />
          <span className="category-text">OutFit</span>
        </div>
        <div className="category-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            alt=""
            className="category-icon"
          />
          <span className="category-text">it suit me</span>
        </div>
      </div>

      <div className="analysis-section">
        <div className="analysis-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0357bf02ace63a260768f0b71eba0c733f84a0ec"
            alt=""
            className="analysis-img"
          />
          <div className="analysis-text">
            <span>Colour</span>
            <br />
            <span>Analysis</span>
          </div>
        </div>
        <div className="analysis-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9b97fc44156c79c14ecbbe2020e794035a63a4"
            alt=""
            className="analysis-img"
          />
          <div className="analysis-text">
            <span>Style</span>
            <br />
            <span>Analysis</span>
          </div>
        </div>
        <div className="analysis-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61847d7c78b61a0c532a110dacef6c274917525d"
            alt=""
            className="analysis-img"
          />
          <div className="analysis-text">
            <span>Body Shape</span>
            <br />
            <span>Analysis</span>
          </div>
        </div>
        <div className="analysis-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c5a333d3d42270a88454f3b4b130f48cead24a"
            alt=""
            className="analysis-img"
          />
        </div>
      </div>

      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-title">New Collection</div>
          <div className="promo-subtitle">Discount 50% for</div>
          <div className="promo-subtitle">Discount 50% for</div>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe8695688b1241fa07914c14524c86dd026a370"
          alt=""
          className="collection-img"
        />
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c97dd45e2f82eef3a17d4813edd8bfca6d4a22"
            alt=""
            className="product-img"
          />
          <div className="wishlist-btn">
            <i className="ti ti-heart"></i>
          </div>
          <div className="product-price">Price :-$800</div>
        </div>
        <div className="product-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/deda682ed11a41cf8d89f28a82f24a41162bd5d2"
            alt=""
            className="product-img"
          />
          <div className="wishlist-btn">
            <i className="ti ti-heart"></i>
          </div>
          <div className="product-price">Price :-$800</div>
        </div>
        <div className="product-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e11c8f4bfe510f4d0749af1d11873ec9b3c4f7"
            alt=""
            className="product-img"
          />
          <div className="wishlist-btn">
            <i className="ti ti-heart"></i>
          </div>
          <div className="product-price">Price :-$800</div>
        </div>
        <div className="product-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb866be215d0b93ef9a0bb372e6ac45f75a4895"
            alt=""
            className="product-img"
          />
          <div className="wishlist-btn">
            <i className="ti ti-heart"></i>
          </div>
          <div className="product-price">Price :-$800</div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c880990e4d5194697f43274f7221c32bd41ca706"
            alt=""
            className="nav-icon"
          />
          <span className="nav-text">Home</span>
        </div>
        <div className="nav-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f27d8aed5122c8797473e1da2184a812d550af8"
            alt=""
            className="nav-icon"
          />
          <span className="nav-text">Ask me</span>
        </div>
        <div className="nav-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            alt=""
            className="nav-icon"
          />
          <span className="nav-text">Wishlist</span>
        </div>
        <div className="nav-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4812d364c856044259b1876971e6efc5e3a243b"
            alt=""
            className="nav-icon"
          />
          <span className="nav-text">Me</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
