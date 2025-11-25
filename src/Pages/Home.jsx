import React from 'react'

import { Link } from 'react-router'
import useGames from '../Hooks/useGames'
import GameCard from '../Components/GameCard'
import Slider from '../Components/Slider'

const Home = () => {
     const {games, loading, error} = useGames()
     const featuredGames = games.filter(game => game.ratings > 4.8)
  return (

    <div>
      <div >
        <Slider/>
        <h1 className='pt-4 lg:mt-20 mb-2 text-3xl lg:text-5xl font-bold text-center'>Popular Games</h1>
      <p className='text-[#627382] text-md lg:text-xl text-center pb-10'>Explore All Trending Games Played By Gamers</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:my-10 m-6 lg:mx-20'>
        {
          featuredGames.map(game =>(
            <GameCard key={game.id} game={game} />
          ))
        }
      </div>
      <div className="flex justify-center pb-10"><Link className='btn btn-ghost  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 ' to='/apps'>See All</Link></div>
      </div>
      
      
    </div>
  )
}

export default Home