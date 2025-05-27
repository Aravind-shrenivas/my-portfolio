
import React, { useState, useEffect } from 'react';

interface Song {
  title: string;
  artist: string;
  album: string;
  image: string;
}

const SpotifyWidget = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock Spotify API response
    const mockSongs: Song[] = [
      { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", image: "🎵" },
      { title: "Hotel California", artist: "Eagles", album: "Hotel California", image: "🎸" },
      { title: "Imagine", artist: "John Lennon", album: "Imagine", image: "🎹" },
      { title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", image: "🥁" },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: "Appetite for Destruction", image: "🎤" }
    ];

    // Simulate API call delay
    setTimeout(() => {
      setSongs(mockSongs);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-green-200/50 dark:border-green-700/50">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-green-500 mr-2 animate-pulse">🎵</span>
          Currently Playing on Spotify
        </h3>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded animate-pulse"></div>
              <div className="flex-1">
                <div className="h-4 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-cyan-300 to-purple-300 dark:from-cyan-600 dark:to-purple-600 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-green-200/50 dark:border-green-700/50 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-4 flex items-center">
        <span className="text-green-500 mr-2 animate-bounce">🎵</span>
        Top 5 Recently Played
      </h3>
      <div className="space-y-3">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-cyan-50 dark:hover:from-green-900/20 dark:hover:to-cyan-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-pulse">
              {song.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white truncate hover:text-transparent hover:bg-gradient-to-r hover:from-green-600 hover:to-cyan-600 hover:bg-clip-text transition-all duration-300">{song.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyWidget;
