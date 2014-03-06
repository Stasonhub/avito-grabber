package controllers

import play.api.mvc.{Action, Controller}
import service.Avito
import com.codahale.jerkson.Json
import play.api.Logger


object Article extends Controller {
  def list(pageNumber: Int, query:String, priceMin: Double, priceMax: Double) = Action {
    implicit request =>
      val avitoService = new Avito()
      val articlesPage = avitoService.getArticles(query, pageNumber, priceMin, priceMax)
      Ok(Json.generate(articlesPage)).withHeaders(CONTENT_TYPE -> "application/json;charset=utf-8")
  }
}
