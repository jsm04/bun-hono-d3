import { Hono } from 'hono'
import { VIEW_PATH } from './dir'
import { html } from 'hono/html'
import template from './view/templates/template'

export const init_routes = function (app: Hono) {
    app.route('/', HomeRouter)
}

const HomeRouter = new Hono()

HomeRouter.get('/', async function (c) {
    try {
        return c.html(template())
    } catch (error) {
        c.status(500)
        return c.html(
            html` <!DOCTYPE html>
                <h1>Something went wrong</h1>`
        )
    }
})
