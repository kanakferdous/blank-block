export const generateTabletCSS = (blockId, typography) => {
    const styles = [];

    // Add tablet-specific styles if defined
	styles.push(`color: ${typography?.tablet?.color || '#ED6A5E'}`);
    styles.push(`font-size: ${typography?.tablet?.fontSize || '36px'}`);
	styles.push(`line-height: ${typography?.tablet?.lineHeight || '1.5'}`);
	styles.push(`font-weight: ${typography?.tablet?.fontWeight || '500'}`);
	styles.push(`text-align: ${typography?.tablet?.textAlign || 'right'}`);

    return styles.length
        ? `
        @media (max-width: 1024px) {
            .heading-${blockId} {
                ${styles.join('; ')};
            }
        }
        `
        : '';
};
