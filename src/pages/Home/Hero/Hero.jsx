import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen hero-home">
                <div className="hero-content text-center flex flex-col md:flex-row">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">Welcome to our university bus service website! Enjoy reliable transportation with our modern buses, convenient routes. Join us for a seamless commuting experience across campus.</p>
                        <button className="btn bg-green-700">Get Started</button>
                    </div>
                    <div>
                        <img src="/src/assets/diu-bus.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;