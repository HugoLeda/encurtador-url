import shortid from "shortid"

export class URLController {
  public shorten(req, res) {
    const { originURL } = req.body

    const hash = shortid.generate()
  }
}