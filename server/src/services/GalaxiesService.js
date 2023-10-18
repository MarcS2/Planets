import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  async createGalaxy(galaxyData) {
    const createdGalaxy = await dbContext.Galaxies.create(galaxyData)
    return createdGalaxy
  }

}

export const galaxiesService = new GalaxiesService()