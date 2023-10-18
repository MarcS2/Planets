import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { galaxiesService } from "../services/GalaxiesService.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxy)
  }
  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies()
      return res.send(galaxies)

    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const createdGalaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(createdGalaxy)
    } catch (error) {
      next(error)
    }
  }
}