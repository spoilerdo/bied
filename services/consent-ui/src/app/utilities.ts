/**
 * Converts date to an ends string
 * This can be: Finishes:, finishes: today at {time}, finished 
 *
 * @export
 * @param {Date} date the date
 * @returns formatted string
 */
export function getEndString(date: Date) {
  const endDateString = date.toLocaleDateString('nl')

  // Finishes today
  if (endDateString === new Date().toLocaleDateString('nl'))
    return `Finishes: today at ${date.toLocaleTimeString('nl')}`

  // Already finished
  if (this.research.endDate.getTime() < new Date().getTime())
    return `Finished: ${endDateString}`

  return `Finishes: ${endDateString}`
}

/**
 * Converts date to a start string
 * This can be: Starts:, starts: today at {time}, started
 * 
 * @export
 * @param {Date} date the date
 * @returns formatted string
 */
export function getStartString(date: Date) {
  const startDateString = date.toLocaleDateString('nl')

  // Starts today
  if (startDateString === new Date().toLocaleDateString('nl'))
    return `Starts: today at ${date.toLocaleTimeString('nl')}`

  // Already started
  if (this.research.startDate.getTime() < new Date().getTime())
    return `Started: ${startDateString}`
  else
    return `Starts: ${startDateString}`
}