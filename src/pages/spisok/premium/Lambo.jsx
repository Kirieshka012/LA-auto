import React from "react"
import "../style.scss"

const PageLamborghini = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/ламба2.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">Премиум <br />Lamborghini Urus</h2>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - наличный расчет; <br />
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена в стуки: 60000р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageLamborghini



