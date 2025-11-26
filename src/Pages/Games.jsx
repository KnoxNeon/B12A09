import React from 'react'
import useGames from '../Hooks/useGames'
import GameCard from '../Components/GameCard'

const Games = () => {
    const {games, loading, error} = useGames()
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:my-10 m-6 lg:mx-20'>
      {
            games.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          }
    </div>
  )
}

export default Games
