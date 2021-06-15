type BranchType = {
    name: string
    id: number
    type: string
    content?: string
    data?: any[]
    parentId: number | null
}

export type DataType = Array<BranchType>

const data: DataType = [
    {name: "Root", id: 1, type: "folder", parentId: null},
    {name: "Folder_1", id: 2, type: "folder", parentId: 1},
    {name: "file_1", id: 3, type: "file", content: "File is empty", parentId: 2},
    {name: "Folder_2", id: 4, type: "folder", parentId: 1},
    {name: "Folder_2.1", id: 5, type: "folder", parentId: 4},
    {name: "file_1", id: 6, type: "file", content: "Hello my dear friend.", parentId: 5},
    {name: "file_2", id: 7, type: "file", content: "File is empty.", parentId: 5},
    {name: "Folder_2.2", id: 8, type: "folder", parentId: 4},
    {name: "Folder_3", id: 9, type: "folder", parentId: 1},
    {name: "file_1", id: 10, type: "file", content: "File is empty.", parentId: 9},
    {name: "Folder_3.1", id: 11, type: "folder", parentId: 9},
    {name: "file_1", id: 12, type: "file", content: "File is empty.", parentId: 11}
]

const parseCategories = (data: DataType) => {
    const dataIdByIndex: { [key: string]: number } = {}
    const roots = []
    let children
    let i
    for (i = 0; i < data.length; i++) {
        dataIdByIndex[data[i].id] = i
        data[i].data = []
    }
    for (i = 0; i < data.length; i++) {
        children = data[i]
        if (children.parentId !== null) {
            data[dataIdByIndex[children.parentId]].data?.push(children);
        } else {
            roots.push(children)
        }
    }
    return roots
}
export const dataTree = parseCategories(data)
