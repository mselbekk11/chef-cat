import { useRef, useState } from 'react';
import PlayingMusic from './playing';
import PausingMusic from './Pausing';

import { Space_Grotesk } from 'next/font/google';
const space = Space_Grotesk({ subsets: ['latin'] });

const AutoPlayAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .catch((error) => console.error('Error playing audio:', error));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`${space.className} fixed-container-music`}>
      {isPlaying ? <PlayingMusic /> : <PausingMusic />}
      <button
        onClick={togglePlayPause}
        className='bg-[#000] border-4 border-black w-full py-4 lg:py-6 mt-2 text-xl font-semibold text-white'
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src='/audio3.mp4' preload='auto' hidden>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AutoPlayAudio;
