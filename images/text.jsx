var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* Hello world */}
          <div className="awesome" style={{border: '1px solid red'}}>
            <label htmlFor="name">Enter your name: </label>
            <input type="text" id="name" />
          </div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Vape Store | Ecommerce capable site</title>
          <meta name="description" content="The HTML5 Herald" />
          <meta name="author" content="SitePoint" />
          <link rel="stylesheet" href="style.css" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200;1,300;1,600;1,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div className="header">
            <div className="container">
              <div className="navbar">
                <div className="logo">
                  <img src="./logo.jpg" width="125px" />
                </div>
                <img src="./menu.jpg" className="menu-icon" width="30px" height="30px" onclick="menutoggle()" />
                <nav>
                  <ul>
                    <li><a href="./text.html">Home</a></li>
                    <li><a href="./products.html">Products</a></li>
                    <li><a href="./search.html">Search</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                    <li><a href="./account.html">Account</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <h1>Find yourself a better nicotine alternative</h1>
                <p> How you feel is be the greatest battle. Is there anyway for us to be happy all the time? <br />
                  The answer is no, but these will help generational smokers everywhere stay happy without having the public <br />
                  smell like shit from cigarettes.</p>
                <a href className="btn">Explore Now → </a>
              </div>
              <div className="col-2">
                <img src="./image1.jpg" /> 
              </div>
            </div>
          </div>
          {/*------- featured categories --------------*/}
          <div className="categories">
            <div className="small-container">
              <div className="row">
                <div className="col-3">
                  <img src="./image2.jpg" />
                </div>
                <div className="col-3">
                  <img src="./image3.jpg" />
                </div>
                <div className="col-3">
                  <img src="./image4.jpg" />
                </div>
                <div>
                </div>
              </div>
              {/*------------featured products*/}
              <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <a href="https://motivape.com/">
                </a><div className="row"><a href="https://motivape.com/">
                  </a><div className="col-4"><a href="https://motivape.com/">
                      <img src="./product1.jpg" />
                      <h4>Moti vapes</h4>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                      <p>$50</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://randys.com/product/tango/#select-your-color">
                      <img src="./product2.jpg" /> 
                      <h4>Tango vapes</h4>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                      </div>
                      <p>$25</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://vapordna.com/collections/elite">
                      <img src="./product3.jpg" /> 
                      <h4>eLite vapes</h4>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <p>$30</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.blu.com/en/US">
                      <img src="./product4.jpg" />
                      <h4>Blu Vapes</h4>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                      <p>$40</p>
                    </a>
                  </div>
                </div>
              </div>
              {/*------offer----*/}
              <div className="offer">
                <div className="small-container">
                  <div className="row">
                    <div className="col-2">
                      <img src="./exclusive.jpg" className="offer-img" />
                    </div>
                    <div className="col-2">
                      <p>Exclusive matchings on Vape Store</p>
                      <h1>The cartridge 1</h1>
                      <small> Vapor is an alternative to smoking cigarettes. <br />
                        This exclusive offer on our site will leave you never wanting again. </small> <br />
                      <a href>Buy Now → </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*-testimonial-*/}
              <div className="testimonial">
                <div className="small-container">
                  <div className="row">
                    <div className="col-3">
                      <img src="./productfan.jpg" height="275px" width="70px" />
                      <i className="fa fa-quote-left" />
                      <p>
                        This website changed my life and I couldn't be happier, thanks Vape Smart !
                      </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*-------brands*/}
              <div className="brands">
                <h5 className="brands">Brands available</h5>
                <div className="small-container">
                  <div className="row">
                    <div className="col-5">
                      <img src="./farts2.jpg" />
                    </div>
                    <div className="col-5">
                      <img src="./farts3.jpg" />
                    </div>  <div className="col-5">
                      <img src="./farts4.jpg" />
                    </div>  <div className="col-5">
                      <img src="./farts5.jpg" />
                    </div>  <div className="col-5">
                      <img src="./farts6.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              {/*-------foooter for page*/}
              <div className="footer">
                <div className="container">
                  <div className="row">
                    <div className="footer-col-1">
                      <h3>Download Our App</h3>
                      <p>Go to the Google Play, App Store, or our website for direct download</p>
                      <div className="app-logo">
                        <a href="https://play.google.com/store"> <img src="./play-store.jpg" /> </a>
                        <a href="https://www.apple.com/shop"> <img src="./app-store.jpg" /> </a>
                      </div>
                    </div>
                    <div className="footer-col-2">
                      <img src="./logo.jpg" />
                      <p>We seek to create a better environment for the nicotine community as we safely <br />
                        transition them to better alternatives to cigarettes</p>
                    </div>
                    <div className="footer-col-3">
                      <h3>Other resources</h3>
                      <ul>
                        <li> Coupons </li>
                        <li> Blog Post </li>
                        <li> Return Policy </li>
                        <li> Associated partners </li>
                      </ul>
                    </div>
                    <div className="footer-col-4">
                      <h3>Follow us</h3>
                      <ul>
                        <li> Instagram </li>
                        <li> Twitter </li>
                        <li> Github </li>
                        <li> Youtube </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <p className="Copyright">Copyright 2020 Vape Smart Store</p>
                </div>
              </div>
              {/*-----------js for toggle menu*/}
            </div></div></div>
      );
    }
  });