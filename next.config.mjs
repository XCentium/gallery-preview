/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co', 'images.pexels.com', 'media.istockphoto.com', 'cdn.pixabay.com', 'images.photowall.com'],
        dangerouslyAllowSVG: true,
    },
};
export default nextConfig;