/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3000/api/",
        MONGODB_URI:"mongodb+srv://malickelhadji07:Mu79qhcsEpAYzFDR@mydatas.7brt5gl.mongodb.net/myDatas",
        NEXTAUTH_SECRET: "elhadjimalickdiop170503linguere",
        NEXTAUTH_URL: "http://localhost:3000",
        SECRET: "RONDOM_STRING",
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    

};


export default nextConfig;
