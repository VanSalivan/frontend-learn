import React from "react";

import "./spiner.scss";

// Визуальное отображения спиннер для загрузок
const Spiner = () => {
    return (
        <div className="spinner-wrap">
            <div className="spinner-body">
                <div></div>
                <div></div>
                <div><div></div></div>
                <div><div></div></div>
            </div>
        </div>
    );
};

export default Spiner;