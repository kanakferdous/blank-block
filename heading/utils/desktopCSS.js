export const generateDesktopCSS = (blockId, typography) => {
    const styles = [];

    // Add general styles
	styles.push(`color: ${typography?.desktop?.color || '#1f1f1f'}`);
    styles.push(`font-size: ${typography?.desktop?.fontSize || '48px'}`);
	styles.push(`line-height: ${typography?.desktop?.lineHeight || '2'}`);
	styles.push(`font-weight: ${typography?.desktop?.fontWeight || '600'}`);
	styles.push(`text-align: ${typography?.desktop?.textAlign || 'left'}`);

    // Return the final minified CSS string
    return `
        .heading-${blockId} {
            ${styles.join('; ')};
        }
    `;
};
