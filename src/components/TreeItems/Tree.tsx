import React from "react";
import {TreeNode} from "./TreeNode";
import {DataType} from "../../data/data";
import style from "./Tree.module.css";

type TreePropsType = {
    data: DataType |  {name: string, key: string, type: string, children: {name: string, key: string, type: string, children: ({name: string, key: string, type: string, content: string, children?: undefined} | {name: string, key: string, type: string, children: {}[], content?: undefined})[]}[]}[]
}

export const Tree: React.FC<TreePropsType> = ({data = []}) => {
    return (
        <ul className={style.treeContainer}>
            {data.map(tree => (
                <TreeNode key={tree.key} node={tree}/>
            ))}
        </ul>
    );
}

