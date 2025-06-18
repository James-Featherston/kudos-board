const BASE_URL = "http://localhost:3000"
const basic_get_request = {
    method: 'GET'
}

const getAllBoards = async () => {
    const path = `${BASE_URL}/boards`
    return await fetchData(path, basic_get_request)
}

const getSingleBoard = async (boardId) => {
    const path = `${BASE_URL}/boards/${boardId}`
    return await fetchData(path, basic_get_request)
}

const getCardsWithBoardId = async (boardId) => {
    const path = `${BASE_URL}/boards/${boardId}/cards`
    return await fetchData(path, basic_get_request)
}

const createBoard = async (board) => {
    const path = `${BASE_URL}/boards`
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(board)
    }
    return await fetchData(path, req)
}

const deleteBoard = async (boardId) => {
    const path = `${BASE_URL}/boards/${boardId}`
    const req = {
        method: 'DELETE',
    }
    return await fetchData(path, req)
}

/*

{
  method: 'POST', // or 'PUT' for updating data
  headers: {
    'Content-Type': 'application/json', // Indicate that the request body is JSON
  },
  body: JSON.stringify({ key: 'value' }) // Convert JSON object to a string
})

*/


const fetchData = async (path, request) => {
    let data = null
    try {
        const response = await fetch(path, request)
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        data = await response.json();
    } catch (error) {
        console.error(error)
    }
    return data
}

export {getAllBoards, getSingleBoard, getCardsWithBoardId, createBoard, deleteBoard}