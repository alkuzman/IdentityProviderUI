const PROXY_CONFIG = [
  {
    context: [
      "/uaa"
    ],
    target: "http://localhost:9999",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
