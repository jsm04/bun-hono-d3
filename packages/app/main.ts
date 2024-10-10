import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { init_routes } from './routes'
import { ROOT_PATH } from './dir'

function bootstrap() {
    const app = new Hono()
    app.use('/static/*', serveStatic({ root: ROOT_PATH }))
    app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
    // app.use('/site.webmanifest', serveStatic({ path: './site.webmanifest' }))
    init_routes(app)
    return app
}

const app = bootstrap()
export default app
