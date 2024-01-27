import { Dimensions } from 'react-native'
import { DARK_GREEN_COLOR, GREEN_COLOR } from './styleConstants'
// constants for application

export const PORT = '5000'
export const IP = '192.168.1.68'
export const DOMAIN = `http://${IP}:${PORT}`
export const USER_ID = '64df628be6b9b3d99d542be5'

export const SCREEN_HEIGHT = Dimensions.get('screen').height
export const SCREEN_WIDTH = Dimensions.get('screen').width

export const CIRCLE_COLORS = [
    [GREEN_COLOR, DARK_GREEN_COLOR],
    ['#ff3a3a', '#41e1fd'],
    ['#f5af19', '#f12711'],
    ['#ff512f', '#dd2476'],
    ['#4b6cb7', '#182848'],
    ['#ff416c', '#ff4b2b'],
    ['#c33764', '#1d2671'],
    ['#00c6ff', '#0072ff'],
    ['#f09819', '#edde5d'],
    ['#ff9966', '#ff5e62'],
    ['#fc4a1a', '#f7b733'],
    ['#43c6ac', '#191654'],
    ['#000000', '#434343'],
    ['#a8caba', '#5d4157'],
    ['#20002c', '#cbb4d4'],
    ['#da4453', '#89216b'],
    ['#ff0000', '#ff7f00'],
    ['#ff7f00', '#ffff00'],
    ['#ffff00', '#00ff00'],
    ['#00ff00', '#007fff'],
    ['#007fff', '#0000ff'],
    ['#0000ff', '#8b00ff']
]