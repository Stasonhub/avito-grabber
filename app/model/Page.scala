package model

case class Page[T](articles: Seq[T], hasNextPage: Boolean)
