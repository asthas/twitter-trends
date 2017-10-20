export const most = (tweets, prop) => {
  const sorted = tweets.slice().sort((a, b) => a[prop] - b[prop])
  return sorted[sorted.length - 1]
}
