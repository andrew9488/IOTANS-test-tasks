import React from "react";
import {Tree} from "./Tree";
import {dataTree} from "../../data/data";

export const TreeList: React.FC = () => {
    return (
        <div>
            <Tree data={dataTree}/>
        </div>
    )
}