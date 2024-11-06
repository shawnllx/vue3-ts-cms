import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatUTF(
  ustString: string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
) {
  const resultTime = dayjs.utc(ustString).utcOffset(8).format(format)
  return resultTime
}
