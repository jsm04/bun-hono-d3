import { Hono } from 'hono'
import { VIEW_PATH } from './dir'
import { html } from 'hono/html'
import main_template, { DefaultProps } from './view/templates/main_template'

export const init_routes = function (app: Hono) {
    app.route('/', HomeRouter)
}

const HomeRouter = new Hono()

HomeRouter.get('/', async function (c) {
    const template = VIEW_PATH + 'template.html'
    try {
        const defaultHeaders = {
            'Content-Type': 'text/html; charset=UTF-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
        }

        for (const [key, value] of Object.entries(defaultHeaders)) {
            c.header(key, value)
        }

        return c.html(main_template({} as DefaultProps))
    } catch (error) {
        c.status(500)
        return c.html(
            html` <!DOCTYPE html>
                <h1>Something went wrong</h1>`
        )
    }
})
