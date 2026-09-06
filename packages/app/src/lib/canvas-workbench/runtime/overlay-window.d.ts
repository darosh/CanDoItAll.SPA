export interface OverlayWindowDotNetRefShim {
  invokeMethodAsync(methodName: string, ...args: unknown[]): Promise<unknown>;
}

export interface OverlayWindowOptions {
  windowId?: string;
  placement?: "top-left" | "top-right";
  containerSelector?: string;
  safeTopSelector?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  allowResize?: boolean;
  state?: {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    isMinimized?: boolean;
  };
}

export function create(
  host: HTMLElement,
  dotNetRef: OverlayWindowDotNetRefShim | null,
  options?: OverlayWindowOptions,
): void;
export function update(host: HTMLElement, options?: OverlayWindowOptions): void;
export function dispose(host: HTMLElement): void;
export function mountLegacy(panel: HTMLElement, ...args: unknown[]): void;
export function resetLegacy(panel: HTMLElement): void;
