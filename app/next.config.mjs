import nextIntl from'next-intl/plugin'

const nextConfig = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }

const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);
