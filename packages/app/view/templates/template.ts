import { html } from 'hono/html'
import { HtmlEscapedString } from 'hono/utils/html'

export type DefaultProps = {
    title: string
    description: string
    keywords: string[]
    stylesheet: string
    stylesheets?: string[]
    children?: HtmlEscapedString | Promise<HtmlEscapedString>
}

export default (
    props: DefaultProps = {
        title: 'WebApp',
        description: 'Cool app developed with bun',
        keywords: ['community', 'social', 'online', 'engage', 'insiders'],
        stylesheet: `/static/dist/global.css`,
    }
) => {
    const {
        title,
        description,
        keywords,
        stylesheet,
        children = undefined,
    } = props

    return html`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>${title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="${description}" />
                <meta
                    name="keywords"
                    content="${keywords.reduce((p, c) =>
                        p ? `${p},${c}` : p
                    )}"
                />
                <meta name="author" content="jsm" />
                <link rel="manifest" href="/static/site.webmanifest" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="${stylesheet}" />
            </head>
            <body class="bg-gray-100 text-gray-800">
                <main>${children}</main>
            </body>
        </html>
    `
}
