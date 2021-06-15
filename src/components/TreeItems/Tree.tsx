import React from "react";
import {TreeNode} from "./TreeNode";
import style from "./Tree.module.css";
import {DataType} from "../../data/data";

export type TreePropsType = {
    data: DataType
}

export const Tree: React.FC<TreePropsType> = ({data}) => {
    return (
        <ul className={style.treeContainer}>
            {data.map(tree => (
                <TreeNode key={tree.id} node={tree}/>
            ))}
        </ul>
    );
}

