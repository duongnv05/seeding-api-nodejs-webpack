import express from 'express'

const router = express.Router()

export default class RootRouter {
  constructor() {
    this.router = router
  }
}