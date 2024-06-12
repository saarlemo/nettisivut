/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    assetPrefix: './',
    basePath: '',
    images: { unoptimized: true }
};

export default nextConfig;
