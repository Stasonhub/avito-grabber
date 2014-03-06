package service

import scala.collection.JavaConversions._
import org.jsoup.nodes.Document
import model.{Article, Page}
import org.jsoup.Jsoup
import play.api.Logger

class Avito {
  val rootUrl = "http://www.avito.ru"

  def getArticles(query: String, pageNumber: Int, priceMin: Double, priceMax: Double, city: String = "moskva"): Page[Article] = {
    require(priceMin <= priceMax)
    val url = s"$rootUrl/$city?q=$query&p=$pageNumber"

    val document = Jsoup.connect(url)
      .userAgent("Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36")
      .timeout(10000).get
    val e = document.select("div.c-b-0")
    val nextLink = document.select(".next")
    Page(
      e.map(element => {
        val title = element.select(".title a").text()
        val pe = element.select(".about span")
        val price = if (pe.length > 0)
          element.select(".about span").get(0).text.replace("&nbsp;", "").filter(c => c != 160.asInstanceOf[Char])
        else
          0.toString
        val ni = "http://grandfalls-windsor.houseme.ca/images/noattachments.jpg"
        val img = element.select("img")
        val imageUrl = if (img.length > 0) element.select("img").get(0).attr("src") else ni
        val url = element.select(".title a").attr("href")
        val isCompany = element.select(".data p").text().toLowerCase.contains("компания")
        val isStore = element.select(".data p").text().toLowerCase.contains("магазин")

        Article(title, price.toDouble, imageUrl, rootUrl + url, isStore || isCompany)
      }).filter(a => a.price != 0.toString && !a.isCommercial && ((priceMax == 0d) || (a.price >= priceMin && a.price <= priceMax))),
      nextLink.length > 0
    )
  }
}
