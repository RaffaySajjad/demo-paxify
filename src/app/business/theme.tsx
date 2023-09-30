import { colors } from './colors'
import { isMobileDevice } from './responsive'

export const chartTheme = {
  axis: {
    ticks: {
      text: {
        fontFamily: 'Poppins',
        fill: colors.cb5,
        fontSize: isMobileDevice() ? 11 : 12,
      },
    },
  },
}
