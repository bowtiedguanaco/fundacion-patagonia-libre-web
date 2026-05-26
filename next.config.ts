import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES === 'true' ? '/fundacion-patagonia-libre-web' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/fundacion-patagonia-libre-web/' : '',
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
