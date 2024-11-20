/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import ResponsiveControls from './controllers/ResponsiveControls';
import { generateHeadingCSS } from './utils/headingCSS';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { typography = {}, blockDataId } = attributes;

	// Generate a unique block ID if not already set
	if (!blockDataId) {
		const generatedId = `block-${Math.random().toString(36).substr(2, 9)}`;
		setAttributes({ blockDataId: generatedId });
	}

	// Prepare block properties
	const blockProps = useBlockProps({
		className: `heading-${blockDataId}`,
	});

	// Manage responsive previews
	const { setDeviceType } = useDispatch('core/editor');
	const previewDeviceType = useSelect((select) =>
		select('core/editor').getDeviceType()
	);

	// Generate dynamic CSS
	const css = generateHeadingCSS(blockDataId, typography);

	return (
		<>
			{/* Responsive Controls in Sidebar Header */}
			<InspectorControls>
				<ResponsiveControls
					setDeviceType={setDeviceType}
					previewDeviceType={previewDeviceType}
				/>
			</InspectorControls>

			{/* Include the dynamic styles */}
			{css && typeof css === 'string' && <style>{css}</style>}

			{/* Heading */}
			<RichText
				{...blockProps}
				tagName="h2"
				value={typography.text || ''}
				onChange={(value) =>
					setAttributes({ typography: { ...typography, text: value } })
				}
				placeholder={__('Write heading...', 'alterblocks')}
			/>
		</>
	);
}
