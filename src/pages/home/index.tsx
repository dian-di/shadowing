import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockData } from '../../mock/data'

type Mode = 'phrase' | 'word'
type Theme = 'default' | 'dark' | 'pastel'

export default function ShadowReading() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [activePhrase, setActivePhrase] = useState<number>(-1)
  const [activeWord, setActiveWord] = useState<number>(-1)
  const [mode, setMode] = useState<Mode>('word')
  const [theme, setTheme] = useState<Theme>('pastel')

  useEffect(() => {
    const audio = audioRef.current
    const now = Date.now()
    if (!audio) return

    const onTimeUpdate = () => {
      // const current = audio.currentTime
      const current = +((Date.now() - now) / 1000).toFixed(1)
      
      const phraseIndex = mockData.findIndex((p) => current >= p.start && current <= p.end)
      if (phraseIndex !== activePhrase) {
        setActivePhrase(phraseIndex)
      }

      if (phraseIndex !== -1) {
        const phrase = mockData[phraseIndex]
        const wordIndex = phrase.words.findIndex((w) => current >= w.start && current <= w.end)
        setActiveWord(wordIndex)
      } else {
        setActiveWord(-1)
        clearInterval(interval)
      }
    }

    const interval = setInterval(onTimeUpdate, 300)
    return () => clearInterval(interval)
    // audio.addEventListener('timeupdate', onTimeUpdate)
    // return () => audio.removeEventListener('timeupdate', onTimeUpdate)
  }, [])

  const themeClasses: Record<Theme, string> = {
    default: 'bg-yellow-200 text-black',
    dark: 'bg-blue-900 text-white',
    pastel: 'bg-pink-200 text-pink-900',
  }

  return (
    <div className='space-y-6 p-6'>
      {/* 控制区 */}
      <div className='flex gap-3'>
        <Button variant='outline' onClick={() => setMode(mode === 'phrase' ? 'word' : 'phrase')}>
          切换模式: {mode === 'phrase' ? '逐句' : '逐字'}
        </Button>
        <Button variant='outline' onClick={() => setTheme('default')}>
          Default
        </Button>
        <Button variant='outline' onClick={() => setTheme('dark')}>
          Dark
        </Button>
        <Button variant='outline' onClick={() => setTheme('pastel')}>
          Pastel
        </Button>
      </div>

      {/* 音频播放器 */}
      {/** biome-ignore lint/a11y/useMediaCaption: <> */}
      <audio ref={audioRef} controls src='/sample.mp3' className='w-full' />

      {/* 文本展示 */}
      <div className='flex flex-wrap space-x-2 text-2xl leading-relaxed'>
        {mockData.map((phrase, pi) => (
          <span key={pi} className='mr-3'>
            {mode === 'phrase' ? (
              <span
                className={cn(
                  'rounded px-1 transition-colors',
                  pi === activePhrase && themeClasses[theme],
                )}
              >
                {phrase.text}
              </span>
            ) : (
              phrase.words.map((word, wi) => (
                <span
                  key={wi}
                  className={cn(
                    'mr-1 rounded px-1 transition-colors',
                    pi === activePhrase && wi === activeWord && themeClasses[theme],
                  )}
                >
                  {word.text}
                </span>
              ))
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
