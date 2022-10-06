/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = module.exports = {
    images: {
        domains: ['images.prismic.io', 'images.pexels.com','escola-de-teatro.cdn.prismic.io'],
    },
    compiler: {
        styledComponents: true
    }
}