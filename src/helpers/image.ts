// Get image
export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href
}