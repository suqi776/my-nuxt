// server/api/hello.get.ts
import os from 'node:os' // 或直接 'os'

export default defineEventHandler((_event) => {
  const computerName = os.hostname()

  return {
    message: `Hi,${computerName}`,
  }
})
