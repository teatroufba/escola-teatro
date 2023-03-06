/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.prismic.io',
            'images.pexels.com',
            'escola-de-teatro.cdn.prismic.io',
        ],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
