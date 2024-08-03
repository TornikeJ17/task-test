import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { offers } from "./components/offers/offers";
import earthSvg from "./components/images/earth.svg";

const App = () => {
    const renderHeaderBlock = () => {
        return (
            <div className="FirstBlock">
                <div className="InformationBlock">
                    <div className="Title">
                        Discover the vast expanses of <span>space</span>
                    </div>
                    <div className="subTitle">
                        Where the possibilities are <span>endless!</span>
                    </div>
                    <button className="infoBtn"> Learn more</button>
                </div>
                <div className="SecondBlock">
                    <img src={earthSvg} alt="earthSvg" />
                </div>
            </div>
        );
    };
    const renderOffers = () => {
        return (
            <>
                <div className="Offers">Offers</div>
                <div className="CardContainer">
                    {offers.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="Card"
                        >
                            <div className="CardTitle">{item.title}</div>
                            <div className="CardSubTitle">{item.subTitle}</div>
                            <Button title={"Learn more"} />
                        </div>
                    ))}
                </div>
            </>
        );
    };
    return (
        <div className="Container">
            <Navbar />
            {renderHeaderBlock()}
            {renderOffers()}
            <About />
            <Footer />
        </div>
    );
};

export default App;
