// server/api/hello.get.ts
import os from 'node:os'
import process from 'node:process'

export default defineEventHandler((_event) => {
  const computerName = os.hostname()
  const name = process.env.HOST_NAME || computerName
  return {
    message: `Hi,${name}`,
  }
})
