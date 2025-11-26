import { useParams } from 'react-router'
import useGames from '../Hooks/useGames'
import { Star, Download, Globe} from 'lucide-react';

const GameDetails = () => {
    const {id} = useParams()
    const {games, loading, error} = useGames()
   
    const game = games.find(g => String(g.id) === id)
   
    if (loading) return <div>Game not found</div>;
  
    return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <div className="relative h-96 sm:h-[500px] overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-full object-cover brightness-50"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-40 h-56 sm:w-48 sm:h-64 rounded-xl shadow-2xl border-4 border-gray-800 object-cover"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight drop-shadow-lg">
                {game.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mt-2 font-medium">
                by <span className="text-purple-400">{game.developer}</span>
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-purple-600/80 backdrop-blur rounded-full text-sm font-semibold">
                  {game.category}
                </span>
                <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  {game.ratings} / 5.0
                </span>
              </div>

              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-105"
              >
                <Download className="w-6 h-6" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 -mt-16 relative z-10">
        <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 p-8 sm:p-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-purple-400" />
            About This Game
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
            {game.description}
          </p>

         
          </div>
        </div>
      </div>
    
  );
}

export default GameDetails
