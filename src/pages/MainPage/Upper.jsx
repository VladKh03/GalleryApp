const Header = () => {
    return(
        <header className="hero-section">
            <img data-speed=".6" className="hero" src={require("../../assets/img/hero.png")} alt="Alt" />
            <div className="container">
                <div data-speed=".75" className="main-header">
                    <h1 className="main-title">creative scroll</h1>
                </div>
            </div>
        </header>
    )
}
export default Header