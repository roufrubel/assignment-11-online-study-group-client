


const Banner = () => {
    return (
        <>
       <div>
        <div className="carousel">
        <div
        id="slide1"
  className="hero sm:h-[400px] md:min-h-screen lg:min-h-screen relative carousel-item"
  style={{
    backgroundImage: "url(https://i.ibb.co/gb892kF/web-banner02.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl lg:text-5xl font-bold">Jute Home Decor</h1>
      <p className="mb-5">
      Transform your home with elegant jute decor. Discover handcrafted rugs, wall hangings, baskets, and more. Embrace the natural beauty and eco-friendly charm that jute brings to your living space.
      </p>
      <button className="btn btn-outline btn-warning">Explore</button>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-15">
      <a href="#slide3" className="btn btn-circle btn-outline btn-warning">❮</a>
      <a href="#slide2" className="btn btn-circle btn-outline btn-warning">❯</a>
    </div>
    </div>
  </div>
        </div>
        <div
        id="slide2"
  className="hero min-h-screen relative carousel-item"
  style={{
    backgroundImage: "url(https://i.ibb.co/Jcv7Ssr/web-banner03.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl lg:text-5xl font-bold">Elegant Jute Decor</h1>
      <p className="mb-5">
      Buy jute decor to enhance your home s beauty. Discover handcrafted rugs, wall hangings, and baskets that add natural charm and eco-friendly elegance to your living space.
      </p>
      <button className="btn btn-outline btn-warning">Explore</button>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-15">
      <a href="#slide1" className="btn btn-circle btn-outline btn-warning">❮</a>
      <a href="#slide3" className="btn btn-circle btn-outline btn-warning">❯</a>
    </div>
    </div>
  </div>
        </div>
        <div
        id="slide3"
  className="hero min-h-screen relative carousel-item"
  style={{
    backgroundImage: "url(https://i.ibb.co/X57kh17/web-banner04.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl lg:text-5xl font-bold">Explore Jute Decor</h1>
      <p className="mb-5">
      Enhance your home’s beauty with handcrafted jute decor. Discover rugs, wall hangings, and baskets that add natural charm and eco-friendly elegance to your living space.
      </p>
      <button className="btn btn-outline btn-warning">Explore</button>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-15">
      <a href="#slide2" className="btn btn-circle btn-outline btn-warning">❮</a>
      <a href="#slide1" className="btn btn-circle btn-outline btn-warning">❯</a>
    </div>
    </div>
  </div>
        </div>
        </div>
       </div>
        </>
    );
};

export default Banner;