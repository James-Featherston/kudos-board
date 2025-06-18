const BASE_URL = "https://kudos-board-backend-ta4c.onrender.com"
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

const createCard = async (card) => {
    const path = `${BASE_URL}/cards`
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    }
    return await fetchData(path, req)
}

const deleteCard = async (cardId) => {
    const path = `${BASE_URL}/cards/${cardId}`
    const req = {
        method: 'DELETE',
    }
    return await fetchData(path, req)
}

const updateCard = async (cardId, upVotes) => {
    const path = `${BASE_URL}/cards/${cardId}`
    const req = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({upVotes : upVotes})
    }
    return await fetchData(path, req)

}


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

export {getAllBoards, getSingleBoard, getCardsWithBoardId, createBoard, deleteBoard, createCard, deleteCard, updateCard}