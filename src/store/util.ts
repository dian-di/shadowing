import type { Demo, DemoStyle } from "./types"

export function defaultDemo(): Demo {
  return {
    id: 1,
    count: 1,
    style: defaultStyle() ,
  }
}

function defaultStyle(): DemoStyle {
  return {
    id: 1,
    bg: ''
  }
}