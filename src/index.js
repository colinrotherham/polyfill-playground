/**
 * Hair cut appointment
 */
export async function appointment (hair = '') {
  await availability()

  return hair
    .trimStart()
    .trimEnd()
}

/**
 * Hair cut wait time
 */
export async function availability (waitTime = Math.random() * 1000) {
  return new Promise((resolve) => setTimeout(resolve, waitTime))
}

/**
 * Hair cuts
 */
export const trims = await Promise.all([
  'too long ',
  ' too short',
  '  well overdue '
].map(appointment))

// Log completed trims
console.log(trims)
