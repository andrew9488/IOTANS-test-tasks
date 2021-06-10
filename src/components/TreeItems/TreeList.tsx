 import React from "react";
import {Tree} from "./Tree";
import {data} from "../../data/data";

export const TreeList: React.FC = ()=>{
    return (
        <div>
            <Tree data={data}/>
        </div>
    )
}