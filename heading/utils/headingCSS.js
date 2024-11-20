import { generateDesktopCSS } from './desktopCSS';
import { generateTabletCSS } from './tabletCSS';
import { generateMobileCSS } from './mobileCSS';

export const generateHeadingCSS = (blockId) => {
    const desktopCSS = generateDesktopCSS(blockId);
    const tabletCSS = generateTabletCSS(blockId);
    const mobileCSS = generateMobileCSS(blockId);

	const minifyCSS = (css) => css.replace(/\s+/g, ' ').trim();

    return `
        ${minifyCSS(desktopCSS)}
        ${minifyCSS(tabletCSS)}
        ${minifyCSS(mobileCSS)}
    `.trim();
};
