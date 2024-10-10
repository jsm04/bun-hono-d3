import { html } from 'hono/html'
import { HtmlEscapedString } from 'hono/utils/html'

export type DefaultProps = {
    title: string
    description: string
    keywords: string[]
    children?: HtmlEscapedString | Promise<HtmlEscapedString>
    defaultStylesheet: string
    stylesheets?: string[]
}

const propsDefaults: DefaultProps = {
    title: 'WebApp',
    description: 'Cool app developed with bun',
    keywords: ['community', 'social', 'online', 'engage', 'insiders'],
    defaultStylesheet: `/static/styles/global.css`,
}

export default ({
    title = propsDefaults.title,
    description = propsDefaults.description,
    keywords = propsDefaults.keywords,
    defaultStylesheet = propsDefaults.defaultStylesheet,
    stylesheets = [],
    children = undefined,
}: DefaultProps) => html`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="${description}" />
            <meta
                name="keywords"
                content="${keywords.reduce((p, c) => (p ? `${p},${c}` : p))}"
            />
            <meta name="author" content="jsm" />
            <link rel="manifest" href="/static/site.webmanifest" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon-16x16.png"
            />
            <link rel="stylesheet" href="${defaultStylesheet}" />
            ${stylesheets &&
            stylesheets.map((s) => html`<link rel="stylesheet" href="${s}" />`)}
            <title>${title}</title>
        </head>

        <body>
            <h1>${title}</h1>
            <main>${children}</main>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto similique quae praesentium nobis, obcaecati sed sunt
                voluptates labore? Cupiditate numquam in recusandae? Voluptatem
                laudantium temporibus nobis quasi excepturi debitis adipisci! A
                necessitatibus repellendus, iste eaque ut possimus alias
                cupiditate aperiam quod in corrupti sunt, ratione voluptatum.
                Explicabo quae repellendus dolor animi quibusdam blanditiis
                accusantium. Vero cum ea omnis id rem. Earum cupiditate quas eum
                repellat aspernatur corporis eaque? Nulla deserunt nobis aut
                facere similique unde sint, tempore eligendi odit ut! Culpa sed
                illo fugiat nobis voluptate. Hic vitae dolores veniam!
            </p>
        </body>
    </html>
`
