
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
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-green-500 mr-2">🎵</span>
          Currently Playing on Spotify
        </h3>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="text-green-500 mr-2">🎵</span>
        Top 5 Recently Played
      </h3>
      <div className="space-y-3">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded flex items-center justify-center text-white">
              {song.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white truncate">{song.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyWidget;
