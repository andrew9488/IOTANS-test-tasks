import React, {useState} from "react";
import {Tree} from "./Tree";
import style from "./TreeNode.module.css";
import opFolder from "../../assets/folder-open-regular.svg";
import closeFolder from "../../assets/folder-regular.svg";
import file from "../../assets/file-regular.svg";
import open from "../../assets/plus-square-regular.svg";
import close from "../../assets/minus-square-regular.svg";

type TreeNodePropsType = {
    node: any
}
export const TreeNode: React.FC<TreeNodePropsType> = ({node}) => {

    const [openFolder, setOpenFolder] = useState(false)
    const [showContent, setShowContent] = useState(false)

    const hasFolder = node.children
    const hasContent = node.content

    return (
        <li className={style.nodeBlock}>
            {node.type === "folder" ?
                <>{hasFolder && !openFolder ?
                    <div className={style.root}>
                        <img src={open} className={style.icon} alt="+" onClick={() => setOpenFolder(!openFolder)}/>
                        <img src={closeFolder}  alt="open"/>
                        <span> {node.name} </span>
                    </div>
                    : <div className={style.root}>
                        <img src={close} className={style.icon} alt="-"
                             onClick={() => setOpenFolder(!openFolder)}/>
                        <img src={opFolder}  alt="close"/>
                        <span> {node.name} </span>
                    </div>
                }</>
                :
                <div className={style.root}>
                    <img src={file} className={style.icon} alt="file" onClick={() => setShowContent(!showContent)}/>
                    <span>{node.name}</span>
                </div>
            }
            {hasFolder && openFolder && (
                <ul>
                    <Tree data={node.children}/>
                </ul>
            )}
            {hasContent && showContent && (
                <span>{node.content}</span>
            )}
        </li>
    );
}