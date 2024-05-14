import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";

const PageMenuM = () => {
    return (
        <div className="main">
            <div className="logo_main"> 
                <h3 className="name_logo">LA-auto</h3>
            </div>

            <article>
                <h2>Премиум</h2>
                <div className="spisok_card">
                    <div className="card">
                        <Link to="/RR" className="a_spisok">
                            <img src="../../../images/auto/ролс.png" alt="" className="img_main" />
                            <p className="card_opisanie">Rolls</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/Lambo" className="a_spisok">
                            <img src="../../../images/auto/ламба.png" alt="" className="img_main" />
                            <p className="card_opisanie">Lamborghini</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/porshe" className="a_spisok">
                            <img src="../../../images/auto/порш.png" alt="" className="img_main" />
                            <p className="card_opisanie">Porsche</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/corvet" className="a_spisok">
                            <img src="../../../images/auto/корвет.png" alt="" className="img_main" />
                            <p className="card_opisanie">Chevrolet</p>
                        </Link>
                    </div>
                </div>
            </article>
        
            <article className="posled">
                <h2>Новинки</h2>
                <div className="spisok_card">
                    <div className="card">
                        <Link to="/ford" className="a_spisok">
                            <img src="../../../images/auto/форд.png" alt="" className="img_main" />
                            <p className="card_opisanie">Ford</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/fera" className="a_spisok">
                            <img src="../../../images/auto/фера.png" alt="" className="img_main" />
                            <p className="card_opisanie">Ferrari</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/mersedes" className="a_spisok">
                            <img src="../../../images/auto/мерс.png" alt="" className="img_main" />
                            <p className="card_opisanie">Mercedes-Benz</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/cadilac" className="a_spisok">
                            <img src="../../../images/auto/кадилак.png" alt="" className="img_main" />
                            <p className="card_opisanie">Cadillac</p>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default PageMenuM;


