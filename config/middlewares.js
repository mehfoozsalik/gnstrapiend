module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: { enabled: true, origin: "*", headers: "*" },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],
          "connect-src": ["'self'", "https://res.cloudinary.com"],
        },
      },
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
