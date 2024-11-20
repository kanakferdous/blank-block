export const generateMobileCSS = (blockId, typography) => {
    const styles = [];

    // Add mobile-specific styles if defined
	styles.push(`color: ${typography?.mobile?.color || '#377771'}`);
    styles.push(`font-size: ${typography?.mobile?.fontSize || '24px'}`);
	styles.push(`line-height: ${typography?.mobile?.lineHeight || '1.2'}`);
	styles.push(`font-weight: ${typography?.mobile?.fontWeight || '400'}`);
	styles.push(`text-align: ${typography?.mobile?.textAlign || 'center'}`);

    return styles.length
        ? `
        @media (max-width: 768px) {
            .heading-${blockId} {
                ${styles.join('; ')};
            }
        }
        `
        : '';
};
