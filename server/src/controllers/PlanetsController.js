import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/galaxies/planets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlanet)
  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body

      const planet = await planetsService.createPlanet(planetData)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}