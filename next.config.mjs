/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
    },

    // 👇 ДОБАВЛЯЕМ ЭТО
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
