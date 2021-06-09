import React from "react";
import style from "./Header.module.css"

export const Header: React.FC = ()=>{
    return(
        <div className={style.header}>
            <h2>Simple Tree</h2>
        </div>
    )
}