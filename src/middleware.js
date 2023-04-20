// Todo : find a way to handle vite middleware in a better way

/**
 *
 * @param {string} html
 * @returns {string} noMiddlewareHtml
 */
export default function noMiddleware(html) {
    if (import.meta.resolve("../node_modules/vite/client")){
        const subString = '<script type="module" src="/@vite/client"></script>';
        return html.replace(subString, "");
    }
    return html;
}
