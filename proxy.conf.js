const PROXY_CONFIG = [
  {
    context: [
      "/auth"
    ],
    target: "http://localhost:9999",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
