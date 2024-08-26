import createNextIntlPlugin from 'next-intl/plugin';
import TerserPlugin from 'terser-webpack-plugin';

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    swcMinify: false, // Disable SWC minification
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.minimize = false; // Disable all minification
        }
        return config;
    },
};


export default withNextIntl(nextConfig);
