/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://saarlemo.fi',
    generateRobotsTxt: true, // (optional)
    exclude: '/projekteja',
    outDir: 'out',
    // ...other options
}
