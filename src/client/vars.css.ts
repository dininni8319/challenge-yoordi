import { createTheme, createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import { rootCertificates } from "tls";

export const global = createGlobalTheme('#root',{
  colors : {
    primary: 'green',
    secondary: 'gray',
  },
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  background: '#F7F8FA',
})

const root = createGlobalTheme('#root',{
})

const colors = createThemeContract({
  primary: null,
  secondary: null,
})

export const light = createTheme(colors, {
  primary: 'red',
  secondary: 'white',
})

export const dark = createTheme(colors, {
  primary: 'brown',
  secondary: 'green',
})

export const vars = {...root, colors}