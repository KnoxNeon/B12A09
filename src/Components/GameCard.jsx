import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { motion } from "motion/react"

const GameCard = ({game}) => {

    return (
        <motion.Link initial={ { scale:0.5 } } animate={{scale: 1, transition: { duration: 1 }}} to={`/game/${game.id}`} className="card image-full w-96 h-96 shadow-xl rounded-xl overflow-hidden group">

            <figure className="absolute inset-0">
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </figure>

            <div className="card-body relative p-0 justify-end">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="relative z-10 p-6 space-y-3">
                    <h2 className="card-title text-2xl text-white drop-shadow-lg">{game.title}</h2>
                    <div className="flex justify-between items-center text-white">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">{game.category}</span>
                        <span className="flex items-center gap-2 text-lg font-semibold"><FaStar className="text-yellow-400 drop-shadow" /> {game.ratings} </span>
                    </div>
                </div>
            </div>
</motion.Link>
  )
}

export default GameCard
