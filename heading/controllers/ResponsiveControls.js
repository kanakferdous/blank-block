/**
 * Responsive Controls Component
 *
 * Handles the responsive tabs and device preview logic for blocks.
 *
 * @see https://developer.wordpress.org/block-editor/
 */
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { useEffect } from 'react';

/**
 * Responsive Controls
 *
 * @param {Object} props
 * @param {Function} props.setDeviceType Function to update the device type in the editor.
 * @param {string} props.previewDeviceType Current device type selected in the editor.
 */
const ResponsiveControls = ({ setDeviceType, previewDeviceType }) => {
	// Dynamically resize the editor canvas based on the selected device
	useEffect(() => {
		const editorCanvas = document.querySelector('.block-editor-writing-flow');
		if (editorCanvas) {
			switch (previewDeviceType) {
				case 'Tablet':
					editorCanvas.style.width = '768px';
					editorCanvas.style.backgroundColor = 'lightblue'; // For testing Tablet
					break;
				case 'Mobile':
					editorCanvas.style.width = '375px';
					editorCanvas.style.backgroundColor = 'lightgreen'; // For testing Mobile
					break;
				default:
					editorCanvas.style.width = '100%';
					editorCanvas.style.backgroundColor = ''; // Reset for Desktop
			}
		}
	}, [previewDeviceType]);

	return (
		<div className="components-panel__header responsive-tabs-header">
			<TabPanel
				className="responsive-tabs"
				activeClass="is-active"
				tabs={[
					{
						name: 'Desktop',
						title: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"></path></svg>),
						className: 'desktop-tab',
					},
					{
						name: 'Tablet',
						title: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"></path></svg>),
						className: 'tablet-tab',
					},
					{
						name: 'Mobile',
						title: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"></path></svg>),
						className: 'mobile-tab',
					},
				]}
				onSelect={(device) => setDeviceType(device)}
			>
				{() => null}
			</TabPanel>
		</div>
	);
};

export default ResponsiveControls;
