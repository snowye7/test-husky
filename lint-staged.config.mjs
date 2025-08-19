// @ts-check

/**
 * @type {import("lint-staged").Options["config"]}
 */
const options = {
    "*.{js,jsx,ts,tsx,json,css,md}": ["prettier --config .prettierrc.mjs --write", "prettier --config prettier.config.mjs --write"],
}

export default options
