/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
