export interface Genre {
  id: number
  title: string
  image: string
}

export interface Film {
  id: number
  image: string
  title: string
  rating?: number
  description: string
  video: string
  genre: number[]
  popular?: boolean
}

