/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ['images.prismic.io'],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
