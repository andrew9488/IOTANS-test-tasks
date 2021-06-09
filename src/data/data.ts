export const data = [
    {
        name: "Root", key: "0", type: "folder", children: [
            {
                name: "Folder_1", key: "0-1", type: "folder", children: [
                    {name: "file_1", key: "0-1-1", type: "file", content: "File is empty"}
                ]
            },
            {
                name: "Folder_2", key: "0-2", type: "folder", children: [
                    {
                        name: "Folder_1", key: "0-2-1", type: "folder", children: [
                            {name: "file_1", key: "0-2-1-1", type: "file", content: "Hello my dear friend."},
                            {name: "file_1", key: "0-2-1-2", type: "file", content: "File is empty"}
                        ]
                    },
                    {
                        name: "Folder_2", key: "0-2-1", type: "folder", children: []
                    }

                ]
            }

        ]
    }
]

export type DataType = typeof data
