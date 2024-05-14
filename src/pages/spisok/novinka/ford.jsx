import React from "react"
import "../style.scss"

const  PageFord = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/форд2.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">Новинки <br /> Ford F-150 Raptor</h2>
                        <h3 className="h3_tovar">Способы оплаты:</h3>
                        <p className="p_name">
                        - наличный расчет; <br />
                        - безналичный расчет;
                        </p>
                    </div>
                    <div className="price">
                        <p>Цена в сутки: 45000р</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageFord 



