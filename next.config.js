/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",  // اگر پروژه رو استاتیک می‌خواهید بگیرید، این خط رو فعال کنید
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ["localhost"],  // می‌تونید دامنه‌هایی که اجازه دارید ازش تصاویر رو بگیرید رو اینجا ذکر کنید
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // وقتی روی سرور نیستیم (یعنی استاتیک)
      // از file-loader استفاده می‌کنیم تا تصاویر رو ساده تحویل بدیم
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/images/', // محل ذخیره تصاویر
            },
          },
        ],
      });
    }
    return config;
  },
};

module.exports = nextConfig;
