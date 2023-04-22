//@filename : utils.ts

/**
 *
 * @param {string} html
 * @returns {string} noMiddlewareHtml
 */

function noMiddleware(html : string) {
    const subString = '<script type="module" src="/@vite/client"></script>';
    return html.replace(subString, "");
}




/**
 * @param {string} path
 * @returns Promise<string>
 */

export async function getHTMLFile(path : string) : Promise<string> {
  const htmlStr = await fetch(path)
  .then((htmlStr) => htmlStr.text());
  return noMiddleware(htmlStr);
}
