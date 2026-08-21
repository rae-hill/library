export default {
  "*": [
    "fmt .",
  ],
  "*.{ts,tsx,js,jsx,mjs}": [
    "eslint --fix",
  ],
  "*.{ts,tsx}": [
    () => "yarn lint",
    () => "yarn typecheck",
  ],
}
