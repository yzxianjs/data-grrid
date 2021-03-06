import type { ColumnMenuItemOptions } from '../define'
import { CanToggle, DrawColumnCallback, MultilineText, Toggled, TransformRecord } from '../grid-engine'

export interface BaseColumnOption {
  // 用Promise的callback淡入淡出显示
  fadeinWhenCallbackInPromise?: boolean | null;
  transformRecord?: TransformRecord
  transformCopy?: TransformRecord
  hidden?: boolean | ((record: any) => boolean)
}

export interface NumberColumnOption extends BaseColumnOption {
  format?: Intl.NumberFormat;
}

export interface ButtonColumnOption extends BaseColumnOption {
  caption?: string;
}

export interface MenuColumnOption extends BaseColumnOption {
  options?: ColumnMenuItemOptions;
}

export interface IconColumnOption extends BaseColumnOption {
  tagName?: string;
  className?: string;
  content?: string;
  name?: string;
  iconWidth?: number;
}

export interface PercentCompleteBarColumnOption extends BaseColumnOption {
  min?: number;
  max?: number;
  formatter?: (value: string) => string;
}

export interface BranchGraphColumnOption extends BaseColumnOption {
  start?: 'top' | 'bottom';
  cache?: boolean;
}

export type SimpleBranchGraphCommand =
  | {
  command: 'branch';
  branch:
    | string
    | {
    from: string;
    to: string;
  };
}
  | {
  command: 'commit';
  branch: string;
}
  | {
  command: 'merge';
  branch: {
    from: string;
    to: string;
  };
}
  | {
  command: 'tag';
  branch: string;
  tag: string;
};
export type BranchGraphCommand =
  | SimpleBranchGraphCommand
  | undefined
  | null
  | SimpleBranchGraphCommand[];

export type ColumnTypeOption =
  | 'DEFAULT'
  | 'default'
  | 'NUMBER'
  | 'number'
  | 'CHECK'
  | 'check'
  | 'BUTTON'
  | 'button'
  | 'IMAGE'
  | 'image'
  | 'MULTILINETEXT'
  | 'multilinetext';

export type HeaderTypeOption =
  | 'DEFAULT'
  | 'default'
  | 'SORT'
  | 'sort'
  | 'CHECK'
  | 'check';

class CellStyle {
}

export interface TreeColumnOption<T> extends BaseColumnOption {
  draw?: DrawColumnCallback
  canToggle?: CanToggle
  toggled?: Toggled
  cellStyle?: CellStyle
  multilineText?: MultilineText
}
