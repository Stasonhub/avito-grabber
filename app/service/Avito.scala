package service

import scala.collection.JavaConversions._
import org.jsoup.nodes.Document
import model.{Article, Page}
import org.jsoup.Jsoup

/**
 * Created by tim on 20/02/14.
 */
class Avito {
  val rootUrl = "http://www.avito.ru"
  def getArticles(query: String, pageNumber: Int): Page[Article] = {
    val document = Jsoup.connect(s"$rootUrl/moskva?q=$query&p=$pageNumber").timeout(10000).get
    val e = document.select("div.c-b-0")
    val nextLink = document.select(".next")
    Page(
      e.map(element => {
        val title = element.select(".title a").text()
        val pe = element.select(".about span")
        val price =
          if (pe.length > 0) element.select(".about span").get(0).text.replace("&nbsp;", "")
          else 0.toString
        val ni = "http://grandfalls-windsor.houseme.ca/images/noattachments.jpg"
        val img = element.select("img")
        val imageUrl = if (img.length > 0) element.select("img").get(0).attr("src") else ni
        val url = element.select(".title a").attr("href")
        val isCompany = element.select(".data p").text().toLowerCase.contains("компания")
        val isStore = element.select(".data p").text().toLowerCase.contains("магазин")
        Article(title, price, imageUrl, rootUrl + url, isStore || isCompany)
      }).filter(a => a.price != 0.toString && !a.isCommercial),
      nextLink.length > 0
    )
  }
}
