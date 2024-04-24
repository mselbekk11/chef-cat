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
    <div className={`${space.className} fixed-container`}>
      {isPlaying ? <PlayingMusic /> : <PausingMusic />}
      <button
        onClick={togglePlayPause}
        className='bg-[#FFC638] border-4 border-black w-full py-4 lg:py-6 mt-2 text-xl font-semibold'
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src='/audio.mp3' preload='auto' hidden>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AutoPlayAudio;
