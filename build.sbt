import sbt._
import Keys._
import play.Project._

name := "avito-grabber"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  "org.jsoup" % "jsoup" % "1.7.3",
  "com.cloudphysics" % "jerkson_2.10" % "0.6.3"
)     

play.Project.playScalaSettings
