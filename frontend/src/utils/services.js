const BASE_URL = "http://localhost:3000"

const getAllBoards = async () => {
    const path = `${BASE_URL}/boards`
    return await fetchData(path)
}

const getSingleBoard = async (boardId) => {
    const path = `${BASE_URL}/boards/${boardId}`
    return await fetchData(path)
}

const getCardsWithBoardId = async (boardId) => {
    const path = `${BASE_URL}/boards/${boardId}/cards`
    return await fetchData(path)
}



const fetchData = async (path) => {
    let data = null
    try {
        const response = await fetch(path)
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        data = await response.json();
    } catch (error) {
        console.error(error)
    }
    return data
}

export {getAllBoards, getSingleBoard, getCardsWithBoardId}