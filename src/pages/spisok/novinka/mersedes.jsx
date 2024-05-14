import React from "react"
import "../style.scss"

const  PageMercedes = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/мерс2.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">Новинки <br /> Mercedes G-Class</h2>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - наличный расчет; <br />
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена в сутки: 39000р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageMercedes



