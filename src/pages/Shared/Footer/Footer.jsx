

const Footer = () => {
    return (
        <div className="w-full bg-base-200">
            <footer className="footer p-10 bg-base-200 text-base-content container mx-auto">
                {/* TODO: Edit footer  */}
                <div>
                <h1 className="normal-case font-bold border rounded p-2 text-lg md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-slate-600 to-blue-600">DIU Transport</h1>
                    <p>Always ready to go</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Book Ticket</a>
                    <a className="link link-hover">Find Bus</a>
                    <a className="link link-hover">Todays Schedule</a>
                    <a className="link link-hover">All Bus</a>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">DIU News</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Social Links</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;