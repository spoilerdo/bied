/**
 * Converts date to an ends string
 * This can be: Finishes:, finishes: today at {time}, finished 
 *
 * @export
 * @param {Date} date the date
 * @returns formatted string
 */
export function getEndString(date: Date) {
  let endDateString;
  try {
    endDateString = date.toLocaleDateString('nl')
  }catch (err) {
    throw new Error('Please provide a valid date')
  }  
  

  // Finishes today
  if (endDateString === new Date().toLocaleDateString('nl'))
    return `Finishes: today at ${date.toLocaleTimeString('nl')}`

  // Already finished
  if (date.getTime() < new Date().getTime())
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
  let startDateString;
  try {
    startDateString = date.toLocaleDateString('nl')
  } catch(err) {
    throw new Error('Please provide a valid date')
  }
  

  // Starts today
  if (startDateString === new Date().toLocaleDateString('nl'))
    return `Starts: today at ${date.toLocaleTimeString('nl')}`

  // Already started
  if (date.getTime() < new Date().getTime())
    return `Started: ${startDateString}`
  else
    return `Starts: ${startDateString}`
}