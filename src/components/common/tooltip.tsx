import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

/**
 *
 * @interface
 * @param {React.ReactNode} children - The content that will trigger the tooltip on hover.
 * @param {string} title - The text to display in the tooltip.
 * @param {string} placement - The placement of the tooltip (e.g., 'top', 'bottom', 'left', 'right').
 */
interface ToolTipProps {
    children: React.ReactElement;
    title: string,
    placement?: any;
}

const AppTooltip: React.FC<ToolTipProps> = ({ children, title, placement }) => {

    const tooltip: React.ReactNode = <Tooltip id="tooltip">{title}</Tooltip>;

    return (
        <OverlayTrigger overlay={tooltip} placement={placement || 'auto'}>
            {children}
        </OverlayTrigger>
    )
}

export default AppTooltip;