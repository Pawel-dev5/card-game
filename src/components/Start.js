export const Start = ({setGame, game, setStart, setCount}) => {
    console.log(game)
    const newGame = () => {
            setGame(true)
            setStart(false)
            setCount(1)
    }
    const keepGame = () => {
        setGame(false)
        setStart(false)
}
    return (
        <div>
            <button onClick={keepGame}>Keep playing</button>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}