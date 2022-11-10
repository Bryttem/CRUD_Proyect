import { Game } from "./interface";

const validationGame = (data: Game) => {
    if (!data.name) throw new GameException("Game name is missing")
    if (!data.name) throw new GameException("Game description is missing")
}

export default {
    validationGame
}