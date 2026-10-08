import path from 'node:path'
import url from 'url'

export default {
    path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
    title: 'Dokumentasi API PPDB Lite', 
    version: '1.0.0',
    tagIndex: 2,
    ignore: ['/swagger', '/docs'],
    snakeCase: true,
    preferredPutPatch: 'PUT',
    common: {
        parameters: {},
        headers: {},
    },
}
