import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Demo, DemoStyle } from './types'
import { defaultDemo } from './util'

interface DemoState {
  demo: Demo
  reset: () => void
  updateStyle: (style: Partial<DemoStyle>) => void
  update: (demo: Partial<Demo>) => void
  increment: () => void
}

export const useDemoStore = create<DemoState>()(
  devtools((set) => ({
    demo: defaultDemo(),
    increment: () => {
      set(
        (state) => ({
          demo: {
            ...state.demo,
            count: state.demo.count + 1,
          },
        }),
        false,
        'increment',
      )
    },
    update: (demo: Partial<Demo>) =>
      set((state) => ({
        demo: { ...state.demo, ...demo },
      })),
    updateStyle: (demoStyle: Partial<DemoStyle>) =>
      set((state) => ({
        demo: {
          ...state.demo,
          style: {
            ...state.demo.style,
            ...demoStyle,
          },
        },
      })),
    reset: () =>
      set(() => ({
        demo: defaultDemo(),
      })),
  })),
)
