/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: "export",
    images: {
        remotePatterns: [
            {
                //loader: "custom",
                //loaderFile: "./my/image/loader.js",
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
};

export default nextConfig;
