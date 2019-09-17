import RootRouter from './root'

class PageRouter extends RootRouter {
  constructor() {
    super()

    console.log("sssssssssssssssssssssssssssssssssssssssssss")
    this.router.get("/*", this.routeHome.bind(this))

    return this.router
  }

  routeHome(req, res) {
    res.send("home api")
  }

  static instance() {
    console.log('static')
    return new PageRouter()
  }
} 

module.exports = PageRouter.instance()
// export default PageRouter.instance()