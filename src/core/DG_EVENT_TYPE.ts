export interface DrawGridEvents {
    /**
     * Indicates when the cell was clicked.
     */
    CLICK_CELL: 'click_cell';
    /**
     * Indicates when the cell was double-clicked.
     */
    DBLCLICK_CELL: 'dblclick_cell';
    /**
     * Indicates when the cell was double-taped.
     */
    DBLTAP_CELL: 'dbltap_cell';
    /**
     * Indicates when pointing device button is pressed in a cell.
     */
    MOUSEDOWN_CELL: 'mousedown_cell';
    /**
     * Indicates when pointing device button is released in a cell.
     */
    MOUSEUP_CELL: 'mouseup_cell';
    /**
     * Indicates the cell selection state has changed.
     */
    SELECTED_CELL: 'selected_cell';
    MOUSE_SELECTED_START: 'mouse_selected_start'
    MOUSE_SELECTED_END: 'mouse_selected_end'

    /**
     * Indicates key-downed.
     */
    KEYDOWN: 'keydown';
    MOUSEMOVE_CELL: 'mousemove_cell';
    MOUSEENTER_CELL: 'mouseenter_cell';
    MOUSELEAVE_CELL: 'mouseleave_cell';
    MOUSEOVER_CELL: 'mouseover_cell';
    MOUSEOUT_CELL: 'mouseout_cell';
    /**
     * Indicates when the user attempts to open a context menu in the cell.
     */
    CONTEXTMENU_CELL: 'contextmenu_cell';
    INPUT_CELL: 'input_cell';
    PASTE_CELL: 'paste_cell';
    DELETE_CELL: 'delete_cell';
    EDITABLEINPUT_CELL: 'editableinput_cell';
    MODIFY_STATUS_EDITABLEINPUT_CELL: 'modify_status_editableinput_cell';
    /**
     * Indicates when the column width has changed.
     */
    RESIZE_COLUMN: 'resize_column';
    /**
     * Indicates when scrolled.
     */
    SCROLL: 'scroll';
    FOCUS_GRID: 'focus_grid';
    BLUR_GRID: 'blur_grid';

    CAN_DRAG_SELECTION: 'can_drag_selection'
    DRAG_SELECTION: 'drag_selection'
    CLICK_UNDERLAY: 'click_underlay'
    DBLCLICK_UNDERLAY: 'dblclick_underlay'
    DBLTAP_UNDERLAY: 'dbltap_underlay'
    COPY: 'copydata'
    CUT: 'cutdata'
    PASTE: 'pastedata'
}

/**
 * DrawGrid event types
 */
export const DG_EVENT_TYPE: DrawGridEvents = {
	CLICK_CELL: 'click_cell',
	DBLCLICK_CELL: 'dblclick_cell',
	DBLTAP_CELL: 'dbltap_cell',
	MOUSEDOWN_CELL: 'mousedown_cell',
	MOUSEUP_CELL: 'mouseup_cell',
	SELECTED_CELL: 'selected_cell',
    MOUSE_SELECTED_START: 'mouse_selected_start',
    MOUSE_SELECTED_END: 'mouse_selected_end',
	KEYDOWN: 'keydown',
	MOUSEMOVE_CELL: 'mousemove_cell',
	MOUSEENTER_CELL: 'mouseenter_cell',
	MOUSELEAVE_CELL: 'mouseleave_cell',
	MOUSEOVER_CELL: 'mouseover_cell',
	MOUSEOUT_CELL: 'mouseout_cell',
	CONTEXTMENU_CELL: 'contextmenu_cell',
	INPUT_CELL: 'input_cell',
	PASTE_CELL: 'paste_cell',
	DELETE_CELL: 'delete_cell',
	EDITABLEINPUT_CELL: 'editableinput_cell',
	MODIFY_STATUS_EDITABLEINPUT_CELL: 'modify_status_editableinput_cell',
	RESIZE_COLUMN: 'resize_column',
	SCROLL: 'scroll',
	FOCUS_GRID: 'focus_grid',
	BLUR_GRID: 'blur_grid',

    CAN_DRAG_SELECTION: 'can_drag_selection',
    DRAG_SELECTION: 'drag_selection',
    CLICK_UNDERLAY: 'click_underlay',
    DBLCLICK_UNDERLAY: 'dblclick_underlay',
    DBLTAP_UNDERLAY: 'dbltap_underlay',
    COPY: 'copydata',
    CUT: 'cutdata',
    PASTE: 'pastedata',
} as DrawGridEvents
