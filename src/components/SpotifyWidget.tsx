
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
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-gray-600 dark:text-gray-400 mr-2 animate-spin">🎵</span>
          Currently Playing on Spotify
        </h3>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded animate-pulse"></div>
              <div className="flex-1">
                <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800 hover-lift">
      <h3 className="text-xl font-semibold gradient-text mb-4 flex items-center">
        <span className="text-gray-600 dark:text-gray-400 mr-2 animate-bounce">🎵</span>
        Top 5 Recently Played
      </h3>
      <div className="space-y-3">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-xl flex items-center justify-center text-white dark:text-black shadow-lg animate-scale-in">
              {song.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white truncate hover:gradient-text transition-all duration-300">{song.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyWidget;
