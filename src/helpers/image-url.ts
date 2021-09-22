export const getRandomImageFromUnplashUrl = (keywordsPrase: string) => {
  const keyWords = keywordsPrase.split(' ').join(',')
  return `https://source.unsplash.com/featured/?${keyWords}/300x300`
}
