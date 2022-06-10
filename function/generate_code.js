// 產生隨機號碼
function generateCode(codeLength) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789"
  let newCode = ''
  for (let i = 0; i<codeLength; i++) {
    const index = Math.floor(Math.random() * chars.length)
    newCode += chars[index]
  }
  return newCode
}

module.exports = generateCode