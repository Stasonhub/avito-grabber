package controllers
import play.api.mvc._
import play.api.Routes

object Application extends Controller {


  def index = Action {
    implicit request =>
      Ok(views.html.index())
  }

  def jsRoutes = Action {
    implicit request =>
      Ok(
        Routes.javascriptRouter("jsRoutes")(
          controllers.routes.javascript.Article.list
        )
      ).as("text/javascript")
  }

}