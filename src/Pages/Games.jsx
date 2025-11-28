import React from 'react'
import useGames from '../Hooks/useGames'
import GameCard from '../Components/GameCard'
import { motion } from "motion/react"

const Games = () => {
    const {games, loading, error} = useGames()
  return (
    <motion.div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:my-10 m-6 lg:mx-20'>
      <title>Games</title>
      {
            games.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          }
    </motion.div>
  )
}

export default Games
