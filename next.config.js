/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYWthc2hzYWNoYW4iLCJhIjoiY2wzeTYycGRsMHFpYjNqcXR2MngzcXF3diJ9.cI0nK85o7kzJa8czziRELA'
  }
}

module.exports = nextConfig
