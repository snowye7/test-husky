// @ts-check

/**
 * @type {import("lint-staged").Options["config"]}
 */
const options = {
    "*.{js,jsx,ts,tsx,json,css,md}": ["prettier --write"],
    "*.{js,jsx,ts,tsx}": ["eslint --fix"],
}

export default options
