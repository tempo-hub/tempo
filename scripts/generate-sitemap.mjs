import fs from 'fs'
import path from 'path'

const libDataPath = path.resolve('lib/data.ts')
const publicPath = path.resolve('public/sitemap.xml')

const baseUrl = 'https://yatratempotraveller.com'

function generateSitemap() {
    try {
        const data = fs.readFileSync(libDataPath, 'utf8')

        // Simple regex to find all slugs. This assumes slugs are defined like: slug: "example-slug" or slug: 'example-slug'
        const slugRegex = /slug:\s*["']([^"']+)["']/g
        const slugs = []
        let match
        while ((match = slugRegex.exec(data)) !== null) {
            slugs.push(match[1])
        }

        // Filter duplicates and remove redundant entries if any
        const uniqueSlugs = [...new Set(slugs)]

        const staticRoutes = [
            '',
            '/fares',
            '/calculator',
            '/routes'
        ]

        const urls = [
            ...staticRoutes.map(route => `${baseUrl}${route}`),
            ...uniqueSlugs.map(slug => `${baseUrl}/fare/${slug}`)
        ]

        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === baseUrl ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === baseUrl ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

        fs.writeFileSync(publicPath, sitemapContent)
        console.log(`Sitemap generated successfully at ${publicPath}`)
        console.log(`Total URLs: ${urls.length}`)
    } catch (error) {
        console.error('Error generating sitemap:', error)
        process.exit(1)
    }
}

generateSitemap()
