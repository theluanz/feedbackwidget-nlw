import { Camera, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { Loading } from '../Loading';
import { backgroundPosition } from 'html2canvas/dist/types/css/property-descriptors/background-position';

interface ScreenshotButtonProps {
  onScreenshootTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export const ScreenshotButton = ({ onScreenshootTook, screenshot }: ScreenshotButtonProps) => {
  const [isTakingScreeshot, setIsTakingScreeshot] = useState(false);
  async function handleTakeScreenshot() {
    setIsTakingScreeshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('img/png');

    onScreenshootTook(base64image);
    setIsTakingScreeshot(false);
  }
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
        onClick={() => onScreenshootTook(null)}>
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenshot}>
      {isTakingScreeshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
