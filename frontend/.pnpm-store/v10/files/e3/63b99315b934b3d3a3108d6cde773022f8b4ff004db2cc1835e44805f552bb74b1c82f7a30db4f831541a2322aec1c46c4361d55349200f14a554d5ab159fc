import * as i0 from '@angular/core';
import { InjectionToken, ModuleWithProviders, OnChanges, OnInit, ElementRef, Renderer2, EventEmitter, Type, SimpleChanges, ViewContainerRef, AfterContentChecked, AfterViewInit, ChangeDetectorRef, NgZone, QueryList, TemplateRef, ComponentRef, Injector, EmbeddedViewRef, DestroyableInjector, OnDestroy, DoCheck, PipeTransform, AfterContentInit, SimpleChange, Provider, IterableDiffers, AfterViewChecked } from '@angular/core';
import * as rxjs from 'rxjs';
import { Observable, Subject, Subscription, ReplaySubject, BehaviorSubject } from 'rxjs';
import * as i4 from '@angular/common';
import { TranslationWidth, DatePipe, Location, NgClass } from '@angular/common';
import * as i2 from '@angular/forms';
import { ControlValueAccessor, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import * as i3 from '@angular/router';
import { Router, Params, QueryParamsHandling, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import * as _nebular_theme from '@nebular/theme';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';
import * as i1 from '@angular/cdk/overlay';
import { ViewportRuler, ScrollStrategyOptions, ScrollDispatcher, BlockScrollStrategy, Overlay, OverlayConfig, OverlayRef, OverlayPositionBuilder, OverlayContainer, FlexibleConnectedPositionStrategy, PositionStrategy, ConnectedPosition, ComponentType, ConnectedOverlayPositionChange, ConnectionPositionPair, ScrollStrategy, GlobalPositionStrategy, CdkScrollable } from '@angular/cdk/overlay';
import * as i2$1 from '@angular/cdk/portal';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal, CdkPortal, Portal } from '@angular/cdk/portal';
import { Platform } from '@angular/cdk/platform';
import { FocusMonitor, FocusTrap, InteractivityChecker, FocusTrapFactory, FocusableOption, FocusKeyManager, Highlightable, ActiveDescendantKeyManager, ListKeyManager } from '@angular/cdk/a11y';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkHeaderCell, CdkFooterCell, CdkCell, DataSource, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet, CdkCellOutlet, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkHeaderRow, CdkFooterRow, CdkRow, CdkTable, RenderRow, RowContext, StickyPositioningListener, CdkTableModule } from '@angular/cdk/table';
import * as _angular_cdk_collections from '@angular/cdk/collections';
import { _ViewRepeater, CollectionViewer, ListRange } from '@angular/cdk/collections';

/**
 * Media breakpoint type
 *
 * Where `name` - breakpoint name alias (e.g. xs, sm, md, etc), and width - min breakpoint width
 */
interface NbMediaBreakpoint {
    name: string;
    width: number;
}
declare const DEFAULT_MEDIA_BREAKPOINTS: {
    name: string;
    width: number;
}[];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
declare class NbMediaBreakpointsService {
    private breakpoints;
    private breakpointsMap;
    constructor(breakpoints: any);
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    getByWidth(width: number): NbMediaBreakpoint;
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    getByName(name: string): NbMediaBreakpoint;
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    getBreakpoints(): NbMediaBreakpoint[];
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    getBreakpointsMap(): {
        [breakpoint: string]: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMediaBreakpointsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbMediaBreakpointsService>;
}

interface NbJSThemeOptions {
    name: string;
    base?: string;
    variables?: NbJSThemeVariable;
}
interface NbJSThemeVariable {
    [key: string]: string | string[] | NbJSThemeVariable;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbThemeOptions {
    name: string;
}
declare const NB_THEME_OPTIONS: InjectionToken<NbThemeOptions>;
declare const NB_MEDIA_BREAKPOINTS: InjectionToken<NbMediaBreakpoint[]>;
declare const NB_BUILT_IN_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
declare const NB_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
declare const NB_WINDOW: InjectionToken<Window>;
declare const NB_DOCUMENT: InjectionToken<Document>;

/**
 * Layout direction.
 * */
declare enum NbLayoutDirection {
    LTR = "ltr",
    RTL = "rtl"
}
/**
 * Layout direction setting injection token.
 * */
declare const NB_LAYOUT_DIRECTION: InjectionToken<NbLayoutDirection>;
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
declare class NbLayoutDirectionService {
    private direction;
    private $directionChange;
    constructor(direction?: NbLayoutDirection);
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    isLtr(): boolean;
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    isRtl(): boolean;
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    getDirection(): NbLayoutDirection;
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    setDirection(direction: NbLayoutDirection): void;
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    onDirectionChange(): Observable<NbLayoutDirection>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutDirectionService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbLayoutDirectionService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare function windowFactory(platformId: Object): Window | undefined;
declare class NbThemeModule {
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions?: NbThemeOptions, nbJSThemes?: NbJSThemeOptions[], nbMediaBreakpoints?: NbMediaBreakpoint[], layoutDirection?: NbLayoutDirection): ModuleWithProviders<NbThemeModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbThemeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbThemeModule, never, [typeof i4.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbThemeModule>;
}

declare const BUILT_IN_THEMES: NbJSThemeOptions[];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
declare class NbJSThemesRegistry {
    private themes;
    constructor(builtInThemes: NbJSThemeOptions[], newThemes?: NbJSThemeOptions[]);
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    register(config: any, themeName: string, baseTheme: string): void;
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    has(themeName: string): boolean;
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    get(themeName: string): NbJSThemeOptions;
    private combineByNames;
    private isObject;
    private mergeDeep;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbJSThemesRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbJSThemesRegistry>;
}

/**
 * Main Nebular service. Includes various helper methods.
 */
declare class NbThemeService {
    protected options: any;
    private breakpointService;
    private jsThemesRegistry;
    currentTheme: string;
    private themeChanges$;
    private appendLayoutClass$;
    private removeLayoutClass$;
    private changeWindowWidth$;
    constructor(options: any, breakpointService: NbMediaBreakpointsService, jsThemesRegistry: NbJSThemesRegistry);
    /**
     * Change current application theme
     * @param {string} name
     */
    changeTheme(name: string): void;
    changeWindowWidth(width: number): void;
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme(): Observable<NbJSThemeOptions>;
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange(): Observable<NbMediaBreakpoint[]>;
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    onThemeChange(): Observable<any>;
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    appendLayoutClass(className: string): void;
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    onAppendLayoutClass(): Observable<any>;
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    removeLayoutClass(className: string): void;
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    onRemoveLayoutClass(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbThemeService>;
}

/**
 * Service to control the global page spinner.
 */
declare class NbSpinnerService {
    private document;
    private loaders;
    private selector;
    constructor(document: any);
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    registerLoader(method: Promise<any>): void;
    /**
     * Clears the list of loader
     */
    clear(): void;
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    load(): void;
    private executeAll;
    private showSpinner;
    private hideSpinner;
    private getSpinnerElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbSpinnerService>;
}

declare class NbColorHelper {
    static shade(color: any, weight: any): string;
    static tint(color: any, weight: any): string;
    static mix(color1: any, color2: any, weight: any): string;
    static hexToRgbA(hex: any, alpha: any): string;
}

/**
 * Scroll position type
 */
interface NbScrollPosition {
    /**
     * x - left
     * @type {number}
     */
    x: number;
    /**
     * y - top
     * @type {number}
     */
    y: number;
}
/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
declare class NbLayoutScrollService {
    private scrollPositionReq$;
    private manualScroll$;
    private scroll$;
    private scrollable$;
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    getPosition(): Observable<NbScrollPosition>;
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    scrollTo(x?: number, y?: number): void;
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    onScroll(): Observable<any>;
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    onManualScroll(): Observable<NbScrollPosition>;
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetPosition(): Subject<any>;
    onScrollableChange(): Observable<boolean>;
    /**
     * @private
     * @param {any} event
     */
    fireScrollChange(event: any): void;
    scrollable(scrollable: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutScrollService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbLayoutScrollService>;
}

/**
 * Layout dimensions type
 */
interface NbLayoutDimensions {
    /**
     * clientWidth
     * @type {number}
     */
    clientWidth: number;
    /**
     * clientHeight
     * @type {number}
     */
    clientHeight: number;
    /**
     * scrollWidth
     * @type {number}
     */
    scrollWidth: number;
    /**
     * scrollHeight
     * @type {number}
     */
    scrollHeight: number;
}
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
declare class NbLayoutRulerService {
    private contentDimensionsReq$;
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    getDimensions(): Observable<NbLayoutDimensions>;
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetDimensions(): Subject<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutRulerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbLayoutRulerService>;
}

type NbComponentStatus = 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control';
type NbComponentOrCustomStatus = NbComponentStatus | string;

declare class NbStatusService {
    readonly coreStatuses: NbComponentStatus[];
    isCoreStatus(status: NbComponentOrCustomStatus): boolean;
    isCustomStatus(status: NbComponentOrCustomStatus): boolean;
    getStatusClass(status: NbComponentOrCustomStatus): string | undefined;
    protected isValidStatusString(status: NbComponentOrCustomStatus): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStatusService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbStatusService>;
}

declare const CORPORATE_THEME: NbJSThemeOptions;

declare const COSMIC_THEME: NbJSThemeOptions;

declare const DEFAULT_THEME: NbJSThemeOptions;

declare const DARK_THEME: NbJSThemeOptions;

type NbComponentSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

type NbComponentShape = 'rectangle' | 'semi-round' | 'round';

/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-basic-background-color:
 * card-header-basic-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 * card-header-control-background-color:
 * card-header-control-text-color:
 */
declare class NbCardHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardHeaderComponent, "nb-card-header", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
declare class NbCardBodyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardBodyComponent, "nb-card-body", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
declare class NbCardFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardFooterComponent, "nb-card-footer", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * Cards of smaller sizes could be combined and put on the same row with a bigger card so they have the same heights.
 * @stacked-example(Card sizes combinations, card/card-sizes-combinations.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-shadow:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */
declare class NbCardComponent {
    protected statusService: NbStatusService;
    /**
     * Card size, available sizes:
     * tiny, small, medium, large, giant
     */
    get size(): '' | NbComponentSize;
    set size(value: '' | NbComponentSize);
    _size: '' | NbComponentSize;
    /**
     * Card status:
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: '' | NbComponentOrCustomStatus;
    /**
     * Card accent (color of the top border):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    accent: '' | NbComponentStatus;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get hasAccent(): "" | NbComponentStatus;
    get primaryAccent(): boolean;
    get infoAccent(): boolean;
    get successAccent(): boolean;
    get warningAccent(): boolean;
    get dangerAccent(): boolean;
    get basicAccent(): boolean;
    get controlAccent(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardComponent, "nb-card", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; }, {}, never, ["nb-card-header", "nb-card-body", "*", "nb-card-footer"], false, never>;
}

/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
declare class NbRevealCardComponent {
    /**
     * Reveal state
     * @type boolean
     */
    revealed: boolean;
    /**
     * Show/hide toggle button to be able to control toggle from your code
     * @type {boolean}
     */
    showToggleButton: boolean;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRevealCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRevealCardComponent, "nb-reveal-card", never, { "revealed": { "alias": "revealed"; "required": false; }; "showToggleButton": { "alias": "showToggleButton"; "required": false; }; }, {}, never, ["nb-card-front", "nb-card-back"], false, never>;
}

/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
declare class NbFlipCardComponent {
    /**
     * Flip state
     * @type boolean
     */
    flipped: boolean;
    /**
     * Show/hide toggle button to be able to control toggle from your code
     * @type {boolean}
     */
    showToggleButton: boolean;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFlipCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFlipCardComponent, "nb-flip-card", never, { "flipped": { "alias": "flipped"; "required": false; }; "showToggleButton": { "alias": "showToggleButton"; "required": false; }; }, {}, never, ["nb-card-front", "nb-card-back"], false, never>;
}

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
declare class NbCardFrontComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardFrontComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardFrontComponent, "nb-card-front", never, {}, {}, never, ["nb-card"], false, never>;
}
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
declare class NbCardBackComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardBackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardBackComponent, "nb-card-back", never, {}, {}, never, ["nb-card"], false, never>;
}

declare class NbSharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSharedModule, never, never, [typeof i4.CommonModule, typeof i2.FormsModule, typeof i3.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSharedModule>;
}

interface NbIconOptions {
    [name: string]: any;
}
interface NbIcon {
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}
declare class NbFontIcon implements NbIcon {
    protected name: any;
    protected content: any;
    protected params: NbFontIconPackParams;
    constructor(name: any, content: any, params?: NbFontIconPackParams);
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}
declare class NbSvgIcon implements NbIcon {
    protected name: any;
    protected content: any;
    protected params: NbIconPackParams;
    constructor(name: any, content: any, params?: NbIconPackParams);
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}

interface NbIcons {
    [key: string]: NbIcon | string;
}
declare enum NbIconPackType {
    SVG = "svg",
    FONT = "font"
}
interface NbIconPackParams {
    packClass?: string;
    [name: string]: any;
}
interface NbFontIconPackParams extends NbIconPackParams {
    iconClassPrefix?: string;
}
interface NbIconPack {
    name: string;
    type: NbIconPackType;
    icons: Map<string, NbIcon | string>;
    params: NbIconPackParams;
}

declare class NbIconDefinition {
    name: string;
    type: string;
    pack: string;
    icon: NbIcon;
}
/**
 * This service allows to register multiple icon packs to use them later within `<nb-icon></nb-icon>` component.
 */
declare class NbIconLibraries {
    protected packs: Map<string, NbIconPack>;
    protected defaultPack: NbIconPack;
    /**
     * Registers new Svg icon pack
     * @param {string} name
     * @param {NbIcon} icons
     * @param {NbIconPackParams} params
     */
    registerSvgPack(name: string, icons: NbIcons, params?: NbIconPackParams): void;
    /**
     * Registers new font pack
     * @param {string} name
     * @param {NbIconPackParams} params
     */
    registerFontPack(name: string, params?: NbFontIconPackParams): void;
    /**
     * Returns pack by name
     * @param {string} name
     */
    getPack(name: string): NbIconPack;
    /**
     * Sets pack as a default
     * @param {string} name
     */
    setDefaultPack(name: string): void;
    /**
     * Returns Svg icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getSvgIcon(name: string, pack?: string): NbIconDefinition | null;
    /**
     * Returns Font icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getFontIcon(name: string, pack?: string): NbIconDefinition;
    /**
     * Returns an icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getIcon(name: string, pack?: string): NbIconDefinition | null;
    protected createSvgIcon(name: string, content: NbIcon | string, params: NbIconPackParams): NbSvgIcon;
    protected createFontIcon(name: string, content: NbIcon | string, params: NbFontIconPackParams): NbFontIcon;
    protected getPackOrThrow(name: string): NbIconPack;
    protected getDefaultPackOrThrow(): NbIconPack;
    protected getIconFromPack(name: string, pack: NbIconPack): NbIcon | string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbIconLibraries, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbIconLibraries>;
}

interface NbIconConfig {
    icon: string;
    pack?: string;
    status?: NbComponentOrCustomStatus;
    options?: {
        [name: string]: any;
    };
}
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
declare class NbIconComponent implements NbIconConfig, OnChanges, OnInit {
    protected sanitizer: DomSanitizer;
    protected iconLibrary: NbIconLibraries;
    protected el: ElementRef;
    protected renderer: Renderer2;
    protected statusService: NbStatusService;
    protected iconDef: any;
    protected prevClasses: any[];
    html: SafeHtml;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    /**
     * Icon name
     * @param {string} status
     */
    icon: string;
    /**
     * Icon pack name
     * @param {string} status
     */
    pack: string;
    /**
     * Additional icon settings
     * @param {[name: string]: any}
     */
    options: {
        [name: string]: any;
    };
    /**
     * Icon status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status?: NbComponentOrCustomStatus;
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    get config(): string | NbIconConfig;
    set config(value: string | NbIconConfig);
    protected _config: string | NbIconConfig;
    constructor(sanitizer: DomSanitizer, iconLibrary: NbIconLibraries, el: ElementRef, renderer: Renderer2, statusService: NbStatusService);
    ngOnInit(): void;
    ngOnChanges(): void;
    renderIcon(name: string, pack?: string, options?: {
        [name: string]: any;
    }): _nebular_theme.NbIconDefinition;
    protected clearIcon(): void;
    protected assignClasses(classes: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbIconComponent, "nb-icon", never, { "icon": { "alias": "icon"; "required": false; }; "pack": { "alias": "pack"; "required": false; }; "options": { "alias": "options"; "required": false; }; "status": { "alias": "status"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbIconModule {
    private iconsLibrary;
    private essentialsPackName;
    constructor(iconsLibrary: NbIconLibraries);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbIconModule, [typeof NbIconComponent], [typeof i4.CommonModule], [typeof NbIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbIconModule>;
}

declare class NbCardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCardModule, [typeof NbCardComponent, typeof NbCardBodyComponent, typeof NbCardFooterComponent, typeof NbCardHeaderComponent, typeof NbRevealCardComponent, typeof NbFlipCardComponent, typeof NbCardFrontComponent, typeof NbCardBackComponent], [typeof NbSharedModule, typeof NbIconModule], [typeof NbCardComponent, typeof NbCardBodyComponent, typeof NbCardFooterComponent, typeof NbCardHeaderComponent, typeof NbRevealCardComponent, typeof NbFlipCardComponent, typeof NbCardFrontComponent, typeof NbCardBackComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCardModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbCalendarDay {
    name: string;
    isHoliday: boolean;
}
type NbCalendarViewModeValues = 'year' | 'month' | 'date';
declare enum NbCalendarViewMode {
    YEAR = "year",
    MONTH = "month",
    DATE = "date"
}
type NbCalendarSizeValues = 'medium' | 'large';
declare enum NbCalendarSize {
    MEDIUM = "medium",
    LARGE = "large"
}
interface NbCalendarCell<D, T> {
    date: D;
    select: EventEmitter<D>;
    selectedValue?: T;
    visibleDate?: D;
    min?: D;
    max?: D;
    filter?: (D: any) => boolean;
    size?: NbCalendarSize;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
type NbNullableInput = string | null | undefined;
type NbBooleanInput = boolean | NbNullableInput;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Calendar component provides a capability to choose a date.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Showcase, calendar/calendar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to select ranges you can use `NbCalendarRangeComponent`.
 *
 * ```html
 * <nb-calendar-range [(range)]="range"></nb-calendar-range>
 * <nb-calendar-range [range]="range" (rangeChange)="handleRangeChange($event)"></nb-calendar-range>
 * ```
 *
 * In order to use it, you have to import `NbCalendarRangeModule`.
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * The calendar component is supplied with a calendar navigation that contains navigate buttons.
 * If you do not want to use it you can hide calendar navigation using `showNavigation` property.
 * @stacked-example(Without navigation, calendar/calendar-without-navigation.component)
 *
 * As you can see in the basic usage example calendar contains previous and next month days
 * which can be disabled using `boundingMonth` property.
 * @stacked-example(Bounding months, calendar/calendar-bounding-month.component)
 *
 * You can define starting view of the calendar by setting `startView` property.
 * Available values: year, month and date.
 * @stacked-example(Start view, calendar/calendar-start-view.component)
 *
 * You can use a larger version of the calendar by defining size property.
 * Available values: medium(which is default) and large.
 * @stacked-example(Size, calendar/calendar-size.component)
 *
 * Calendar supports min and max dates which disables values out of min-max range.
 * @stacked-example(Borders, calendar/calendar-min-max.component)
 *
 * Also, you can define custom filter property that should be predicate which receives
 * date and returns false if this date has to be disabled. In this example, we provide the filter
 * which disables weekdays.
 * @stacked-example(Filter, calendar/calendar-filter.component)
 *
 * Week numbers column could be enabled via `showWeekNumber` binding:
 * @stacked-example(Week number, calendar/calendar-week-number.component)
 *
 * If you need create custom cells you can easily provide custom components for
 * calendar. For examples if you want to show any average price under each date you can
 * just provide custom `dayCellComponent`. Custom cells for month and year can be provided
 * the same way, check API reference.
 * @stacked-example(Custom day cell, calendar/calendar-custom-day-cell-showcase.component)
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
declare class NbCalendarComponent<D> {
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for calendar.
     * */
    startView: NbCalendarViewMode;
    static ngAcceptInputType_startView: NbCalendarViewModeValues;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, D>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, D>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, D>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    visibleDate: D;
    /**
     * Determines should we show calendars navigation or not.
     * */
    showNavigation: boolean;
    /**
     * Date which will be rendered as selected.
     * */
    date: D;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    firstDayOfWeek: number | undefined;
    /**
     * Emits date when selected.
     * */
    dateChange: EventEmitter<D>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarComponent<any>, "nb-calendar", never, { "boundingMonth": { "alias": "boundingMonth"; "required": false; }; "startView": { "alias": "startView"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "dayCellComponent": { "alias": "dayCellComponent"; "required": false; }; "monthCellComponent": { "alias": "monthCellComponent"; "required": false; }; "yearCellComponent": { "alias": "yearCellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "showNavigation": { "alias": "showNavigation"; "required": false; }; "date": { "alias": "date"; "required": false; }; "showWeekNumber": { "alias": "showWeekNumber"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; }, { "dateChange": "dateChange"; }, never, never, false, never>;
}

declare const enum NbDayPeriod {
    AM = "AM",// before midday, 0 - 11 in 24-hour format.
    PM = "PM"
}
declare abstract class NbDateService<D> {
    readonly DAYS_IN_WEEK: number;
    /**
     * Number of hours in AM/PM day periods.
     **/
    readonly HOURS_IN_DAY_PERIOD = 12;
    protected locale: string;
    setLocale(locale: any): void;
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetween(date: D, start: D, end: D): boolean;
    /**
     * Checks is two dates have the same day.
     * */
    isSameDaySafe(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same month.
     * */
    isSameMonthSafe(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same year.
     * */
    isSameYearSafe(date1: D, date2: D): boolean;
    /**
     * Returns date with selected hour
     * */
    abstract setHours(date: D, hour: number): D;
    /**
     * Returns date with selected minute
     * */
    abstract setMinutes(date: D, minute: number): D;
    /**
     * Returns date with selected second
     * */
    abstract setSeconds(date: D, second: number): D;
    /**
     * Returns date with selected milliseconds
     * */
    abstract setMilliseconds(date: D, second: number): D;
    /**
     * Returns true if date string is valid date string according to the provided format.
     * */
    abstract isValidDateString(date: string, format: string): boolean;
    /**
     * Returns true if time string is valid time string according to the provided format.
     * */
    abstract isValidTimeString(date: string, format: string): boolean;
    /**
     * Returns today date.
     * */
    abstract today(): D;
    /**
     * Gets the time format based on locale
     * */
    abstract getLocaleTimeFormat(): string;
    /**
     * Gets the date of the month component of the given date.
     */
    abstract getDate(date: D): number;
    /**
     * Gets the hour component of the given date.
     */
    abstract getHours(date: D): number;
    /**
     * Gets the minute component of the given date.
     */
    abstract getMinutes(date: D): number;
    /**
     * Gets the second component of the given date.
     */
    abstract getSeconds(date: D): number;
    /**
     * Gets the second component of the given date.
     */
    abstract getMilliseconds(date: D): number;
    /**
     * Gets the month component of the given date.
     * */
    abstract getMonth(date: D): number;
    /**
     * Gets the year component of the given date.
     * */
    abstract getYear(date: D): number;
    /**
     * Returns day of the week of the given date.
     */
    abstract getDayOfWeek(date: D): number;
    /**
     * Returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    abstract getFirstDayOfWeek(): number;
    /**
     * Returns localized month name by date and style.
     * */
    abstract getMonthName(date: D, style?: TranslationWidth): string;
    /**
     * Returns localized month name by month index and style.
     * */
    abstract getMonthNameByIndex(month: number, style?: TranslationWidth): string;
    /**
     * Returns localized days names.
     * */
    abstract getDayOfWeekNames(style?: TranslationWidth): string[];
    /**
     * Parses the date string according to the passed format.
     * */
    abstract parse(date: string, format: string): D;
    /**
     * Transforms the date to the string according to the passed format.
     * */
    abstract format(date: D, format: string): string;
    /**
     * Creates new date from year, month and date.
     * */
    abstract createDate(year: number, month: number, date: number): D;
    /**
     * Checks is two dates have the same year.
     * */
    abstract isSameYear(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same month.
     * */
    abstract isSameMonth(date1: D, date2: D): boolean;
    /**
     * Checks is two dates have the same day.
     * */
    abstract isSameDay(date1: D, date2: D): boolean;
    /**
     * Compares two dates.
     * Returns 0 if dates are the same.
     * Returns 1 if the first date is greater than the second.
     * Returns -1 if the second date is greater than the first.
     * */
    abstract compareDates(date1: D, date2: D): number;
    /**
     * Clones passed date.
     * */
    abstract clone(date: D): D;
    /**
     * Creates the same date but with day equals to 1.
     * */
    abstract getMonthStart(date: D): D;
    /**
     * Creates the same date but with day equals to the last day in this month.
     * */
    abstract getMonthEnd(date: D): D;
    /**
     * Creates the same date but with month equals to 0 and day equals to 1.
     * */
    abstract getYearStart(date: D): D;
    /**
     * Creates the same date but with month equals to 11 and day equals to 31.
     * */
    abstract getYearEnd(date: D): D;
    /**
     * Returns number of days in the date.
     * */
    abstract getNumberOfDaysInMonth(date: D): number;
    /**
     * Returns date with added number of days.
     * */
    abstract addDay(date: D, days: number): D;
    /**
     * Returns date with added number of months.
     * */
    abstract addMonth(date: D, months: number): D;
    /**
     * Returns date with added number of hours.
     * */
    abstract addHours(date: D, hour: number): D;
    /**
    * Returns date with added number of minutes.
    * */
    abstract addMinutes(date: D, minute: number): D;
    /**
     * Returns date with added number of years.
     * */
    abstract addYear(date: D, years: number): D;
    abstract getId(): string;
    abstract getWeekNumber(date: D): number;
    abstract getDateFormat(): string;
    abstract getTwelveHoursFormat(): string;
    /**
     * Returns date with added number of years.
     * */
    abstract valueOf(date: D): number;
    isSameHourAndMinute(date1: D, date2: D): boolean;
    isSameHour(date1: D, date2: D): boolean;
    isSameMinute(date1: D, date2: D): boolean;
    getTwentyFourHoursFormat(): string;
    getTwentyFourHoursFormatWithSeconds(): string;
    getTwelveHoursFormatWithSeconds(): string;
    getDayPeriod(date: D): NbDayPeriod;
}

declare class NbCalendarYearModelService<D> {
    protected dateService: NbDateService<D>;
    protected yearsInView: number;
    protected yearsInRow: number;
    constructor(dateService: NbDateService<D>);
    getYearsInView(): number;
    getYearsInRow(): number;
    getViewYears(viewYear: D): D[][];
    protected copyWithYear(year: number, date: D): D;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarYearModelService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbCalendarYearModelService<any>>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
declare class NbBaseCalendarComponent<D, T> implements OnInit {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines active view for calendar.
     * */
    activeViewMode: NbCalendarViewMode;
    static ngAcceptInputType_activeViewMode: NbCalendarViewModeValues;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    visibleDate: D;
    /**
     * Determines whether we should show calendar navigation or not.
     * */
    showNavigation: boolean;
    /**
     * Value which will be rendered as selected.
     * */
    date: T;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    firstDayOfWeek: number | undefined;
    /**
     * Emits date when selected.
     * */
    dateChange: EventEmitter<T>;
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    ngOnInit(): void;
    get large(): boolean;
    ViewMode: typeof NbCalendarViewMode;
    setViewMode(viewMode: NbCalendarViewMode): void;
    setVisibleDate(visibleDate: D): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
    prevYears(): void;
    nextYears(): void;
    navigatePrev(): void;
    navigateNext(): void;
    onChangeViewMode(): void;
    private changeVisibleMonth;
    private changeVisibleYear;
    private changeVisibleYears;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBaseCalendarComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbBaseCalendarComponent<any, any>, "nb-base-calendar", never, { "boundingMonth": { "alias": "boundingMonth"; "required": false; }; "activeViewMode": { "alias": "startView"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "dayCellComponent": { "alias": "dayCellComponent"; "required": false; }; "monthCellComponent": { "alias": "monthCellComponent"; "required": false; }; "yearCellComponent": { "alias": "yearCellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "showNavigation": { "alias": "showNavigation"; "required": false; }; "date": { "alias": "date"; "required": false; }; "showWeekNumber": { "alias": "showWeekNumber"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; }, { "dateChange": "dateChange"; }, never, never, false, never>;
}

declare class NbCalendarViewModeComponent<D> {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    date: D;
    viewMode: NbCalendarViewMode;
    static ngAcceptInputType_viewMode: NbCalendarViewModeValues;
    changeMode: EventEmitter<void>;
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    getText(): string;
    getIcon(): string;
    protected getFirstYear(): string;
    protected getLastYear(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarViewModeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarViewModeComponent<any>, "nb-calendar-view-mode", never, { "date": { "alias": "date"; "required": false; }; "viewMode": { "alias": "viewMode"; "required": false; }; }, { "changeMode": "changeMode"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarPageableNavigationComponent<D> {
    private directionService;
    next: EventEmitter<void>;
    prev: EventEmitter<void>;
    constructor(directionService: NbLayoutDirectionService);
    get isLtr(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarPageableNavigationComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarPageableNavigationComponent<any>, "nb-calendar-pageable-navigation", never, {}, { "next": "next"; "prev": "prev"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarDaysNamesComponent<D> implements OnInit, OnChanges {
    private dateService;
    days: NbCalendarDay[];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    get isLarge(): boolean;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    firstDayOfWeek: number | undefined;
    constructor(dateService: NbDateService<D>);
    ngOnInit(): void;
    ngOnChanges({ firstDayOfWeek }: SimpleChanges): void;
    private createDaysNames;
    private shiftStartOfWeek;
    private markIfHoliday;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarDaysNamesComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarDaysNamesComponent<any>, "nb-calendar-days-names", never, { "size": { "alias": "size"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarYearPickerComponent<D> implements OnChanges {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    date: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, D>>);
    cellComponent: Type<NbCalendarCell<D, D>>;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    year: D;
    yearChange: EventEmitter<D>;
    get large(): boolean;
    years: D[][];
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    ngOnChanges(): void;
    onSelect(year: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarYearPickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarYearPickerComponent<any>, "nb-calendar-year-picker", never, { "date": { "alias": "date"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "_cellComponent": { "alias": "cellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "year": { "alias": "year"; "required": false; }; }, { "yearChange": "yearChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare const MONTHS_IN_VIEW = 12;
declare const MONTHS_IN_COLUMN = 4;
declare class NbCalendarMonthPickerComponent<D, T> implements OnChanges {
    protected dateService: NbDateService<D>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Visible month
     **/
    month: D;
    /**
     * Selected date
     **/
    date: D;
    monthChange: EventEmitter<D>;
    months: D[][];
    constructor(dateService: NbDateService<D>);
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, T>>);
    cellComponent: Type<NbCalendarCell<any, any>>;
    get large(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    initMonths(): void;
    onSelect(month: D): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarMonthPickerComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarMonthPickerComponent<any, any>, "nb-calendar-month-picker", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "size": { "alias": "size"; "required": false; }; "month": { "alias": "month"; "required": false; }; "date": { "alias": "date"; "required": false; }; "_cellComponent": { "alias": "cellComponent"; "required": false; }; }, { "monthChange": "monthChange"; }, never, never, false, never>;
}

declare class NbCalendarMonthModelService<D> {
    protected dateService: NbDateService<D>;
    constructor(dateService: NbDateService<D>);
    createDaysGrid(activeMonth: D, boundingMonth?: boolean, firstDayOfWeek?: number): D[][];
    private createDates;
    private withBoundingMonths;
    private addPrevBoundingMonth;
    private addNextBoundingMonth;
    private createPrevBoundingDays;
    private createNextBoundingDays;
    private getStartOfWeekDayDiff;
    private getWeekStartDiff;
    private isShouldAddPrevBoundingMonth;
    private isShouldAddNextBoundingMonth;
    private createDateRangeForMonth;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarMonthModelService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbCalendarMonthModelService<any>>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Provides capability pick days.
 * */
declare class NbCalendarDayPickerComponent<D, T> implements OnChanges {
    private monthModel;
    /**
     * Describes which month picker have to render.
     * */
    visibleDate: D;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonths: boolean;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set setCellComponent(cellComponent: Type<NbCalendarCell<D, T>>);
    cellComponent: Type<NbCalendarCell<any, any>>;
    /**
     * Size of the component.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Already selected date.
     * */
    date: T;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    firstDayOfWeek: number | undefined;
    /**
     * Fires newly selected date.
     * */
    dateChange: EventEmitter<D>;
    get large(): boolean;
    /**
     * Day picker model.
     * Provides all days in current month and if boundingMonth is true some days
     * from previous and next one.
     * */
    weeks: D[][];
    constructor(monthModel: NbCalendarMonthModelService<D>);
    ngOnChanges({ visibleDate, boundingMonths, firstDayOfWeek }: SimpleChanges): void;
    onSelect(day: D): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarDayPickerComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarDayPickerComponent<any, any>, "nb-calendar-day-picker", never, { "visibleDate": { "alias": "visibleDate"; "required": false; }; "boundingMonths": { "alias": "boundingMonths"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "setCellComponent": { "alias": "cellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "date": { "alias": "date"; "required": false; }; "showWeekNumber": { "alias": "showWeekNumber"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; }, { "dateChange": "dateChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarDayCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: D;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get today(): boolean;
    get boundingMonth(): boolean;
    get selected(): boolean;
    get empty(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    dayCellClass: boolean;
    get day(): number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private dontFitFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarDayCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarDayCellComponent<any>, "nb-calendar-day-cell", never, { "date": { "alias": "date"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

declare class NbCalendarActionsComponent {
    set applyButtonText(value: string);
    get applyText(): string;
    protected _applyButtonText: string;
    set currentTimeButtonText(value: string);
    get currentTimeText(): string;
    _currentTimeButtonText: string;
    showCurrentTimeButton: boolean;
    setCurrentTime: EventEmitter<void>;
    saveValue: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarActionsComponent, "nb-calendar-actions", never, { "applyButtonText": { "alias": "applyButtonText"; "required": false; }; "currentTimeButtonText": { "alias": "currentTimeButtonText"; "required": false; }; "showCurrentTimeButton": { "alias": "showCurrentTimeButton"; "required": false; }; }, { "setCurrentTime": "setCurrentTime"; "saveValue": "saveValue"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarMonthCellComponent<D> implements NbCalendarCell<D, D> {
    private dateService;
    date: D;
    selectedValue: D;
    min: D;
    max: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    monthCellClass: boolean;
    get month(): string;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected monthStart(): D;
    protected monthEnd(): D;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarMonthCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarMonthCellComponent<any>, "nb-calendar-month-cell", never, { "date": { "alias": "date"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarYearCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    yearCellClass: boolean;
    get year(): number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private yearStart;
    private yearEnd;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarYearCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarYearCellComponent<any>, "nb-calendar-year-cell", never, { "date": { "alias": "date"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarPickerRowComponent<D, T> implements OnChanges {
    row: D[];
    selectedValue: T;
    visibleDate: D;
    component: Type<NbCalendarCell<D, T>>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    containerRef: ViewContainerRef;
    ngOnChanges(): void;
    private patchWithContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarPickerRowComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarPickerRowComponent<any, any>, "nb-calendar-picker-row", never, { "row": { "alias": "row"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "component": { "alias": "component"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarPickerComponent<D, T> {
    data: D[][];
    visibleDate: D;
    selectedValue: T;
    cellComponent: Type<NbCalendarCell<D, T>>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    get isLarge(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarPickerComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarPickerComponent<any, any>, "nb-calendar-picker", never, { "data": { "alias": "data"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "cellComponent": { "alias": "cellComponent"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

declare class NbCalendarWeekNumberComponent<D> implements OnChanges {
    private dateService;
    weekNumbers: number[];
    weeks: D[][];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    get isLarge(): boolean;
    constructor(dateService: NbDateService<D>);
    ngOnChanges(changes: SimpleChanges): void;
    getWeeks(): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarWeekNumberComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarWeekNumberComponent<any>, "nb-calendar-week-numbers", never, { "weeks": { "alias": "weeks"; "required": false; }; "size": { "alias": "size"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; }, {}, never, never, false, never>;
}

type NbButtonAppearance = 'filled' | 'outline' | 'ghost' | 'hero';
type NbButtonProperties = Pick<NbButton, 'appearance' | 'size' | 'shape' | 'status' | 'disabled'> & Object;
declare abstract class NbButton implements AfterContentChecked, AfterViewInit {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    /**
     * Button size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Button status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Button shapes: `rectangle`, `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Button appearance: `filled`, `outline`, `ghost`, `hero`
     */
    appearance: NbButtonAppearance;
    /**
     * Sets `filled` appearance
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Sets `outline` appearance
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Sets `ghost` appearance
     */
    get ghost(): boolean;
    set ghost(value: boolean);
    static ngAcceptInputType_ghost: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    private _fullWidth;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Disables the button
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Tabindex of the button.
     */
    tabIndex: number;
    get tabbable(): string;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    iconLeft: boolean;
    iconRight: boolean;
    get additionalClasses(): string[];
    icons: QueryList<ElementRef>;
    protected constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, zone: NgZone, statusService: NbStatusService);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    /**
     * @docs-private
     **/
    updateProperties(config: Partial<NbButtonProperties>): void;
    get iconElement(): Element;
    protected get nodes(): Node[];
    protected isIconExist(node: Node): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbButton, never, never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "filled": { "alias": "filled"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "ghost": { "alias": "ghost"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; }, {}, ["icons"], never, true, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `basic`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Hero, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * Icon can be placed inside of a button as a child element:
 * @stacked-example(Icon Button, button/button-icon.component.html)
 *
 * @additional-example(Interactive example, button/button-interactive.component)
 *
 * @styles
 *
 * button-cursor:
 * button-outline-width:
 * button-outline-color:
 * button-text-font-family:
 * button-text-font-weight:
 * button-disabled-cursor:
 * button-tiny-text-font-size:
 * button-tiny-text-line-height:
 * button-tiny-icon-size:
 * button-tiny-icon-vertical-margin:
 * button-tiny-icon-offset:
 * button-small-text-font-size:
 * button-small-text-line-height:
 * button-small-icon-size:
 * button-small-icon-vertical-margin:
 * button-small-icon-offset:
 * button-medium-text-font-size:
 * button-medium-text-line-height:
 * button-medium-icon-size:
 * button-medium-icon-vertical-margin:
 * button-medium-icon-offset:
 * button-large-text-font-size:
 * button-large-text-line-height:
 * button-large-icon-size:
 * button-large-icon-vertical-margin:
 * button-large-icon-offset:
 * button-giant-text-font-size:
 * button-giant-text-line-height:
 * button-giant-icon-size:
 * button-giant-icon-vertical-margin:
 * button-giant-icon-offset:
 * button-rectangle-border-radius:
 * button-semi-round-border-radius:
 * button-round-border-radius:
 * button-filled-border-style:
 * button-filled-border-width:
 * button-filled-text-transform:
 * button-filled-tiny-padding:
 * button-filled-small-padding:
 * button-filled-medium-padding:
 * button-filled-large-padding:
 * button-filled-giant-padding:
 * button-filled-basic-background-color:
 * button-filled-basic-border-color:
 * button-filled-basic-text-color:
 * button-filled-basic-focus-background-color:
 * button-filled-basic-focus-border-color:
 * button-filled-basic-hover-background-color:
 * button-filled-basic-hover-border-color:
 * button-filled-basic-active-background-color:
 * button-filled-basic-active-border-color:
 * button-filled-basic-disabled-background-color:
 * button-filled-basic-disabled-border-color:
 * button-filled-basic-disabled-text-color:
 * button-filled-primary-background-color:
 * button-filled-primary-border-color:
 * button-filled-primary-text-color:
 * button-filled-primary-focus-background-color:
 * button-filled-primary-focus-border-color:
 * button-filled-primary-hover-background-color:
 * button-filled-primary-hover-border-color:
 * button-filled-primary-active-background-color:
 * button-filled-primary-active-border-color:
 * button-filled-primary-disabled-background-color:
 * button-filled-primary-disabled-border-color:
 * button-filled-primary-disabled-text-color:
 * button-filled-success-background-color:
 * button-filled-success-border-color:
 * button-filled-success-text-color:
 * button-filled-success-focus-background-color:
 * button-filled-success-focus-border-color:
 * button-filled-success-hover-background-color:
 * button-filled-success-hover-border-color:
 * button-filled-success-active-background-color:
 * button-filled-success-active-border-color:
 * button-filled-success-disabled-background-color:
 * button-filled-success-disabled-border-color:
 * button-filled-success-disabled-text-color:
 * button-filled-info-background-color:
 * button-filled-info-border-color:
 * button-filled-info-text-color:
 * button-filled-info-focus-background-color:
 * button-filled-info-focus-border-color:
 * button-filled-info-hover-background-color:
 * button-filled-info-hover-border-color:
 * button-filled-info-active-background-color:
 * button-filled-info-active-border-color:
 * button-filled-info-disabled-background-color:
 * button-filled-info-disabled-border-color:
 * button-filled-info-disabled-text-color:
 * button-filled-warning-background-color:
 * button-filled-warning-border-color:
 * button-filled-warning-text-color:
 * button-filled-warning-focus-background-color:
 * button-filled-warning-focus-border-color:
 * button-filled-warning-hover-background-color:
 * button-filled-warning-hover-border-color:
 * button-filled-warning-active-background-color:
 * button-filled-warning-active-border-color:
 * button-filled-warning-disabled-background-color:
 * button-filled-warning-disabled-border-color:
 * button-filled-warning-disabled-text-color:
 * button-filled-danger-background-color:
 * button-filled-danger-border-color:
 * button-filled-danger-text-color:
 * button-filled-danger-focus-background-color:
 * button-filled-danger-focus-border-color:
 * button-filled-danger-hover-background-color:
 * button-filled-danger-hover-border-color:
 * button-filled-danger-active-background-color:
 * button-filled-danger-active-border-color:
 * button-filled-danger-disabled-background-color:
 * button-filled-danger-disabled-border-color:
 * button-filled-danger-disabled-text-color:
 * button-filled-control-background-color:
 * button-filled-control-border-color:
 * button-filled-control-text-color:
 * button-filled-control-focus-background-color:
 * button-filled-control-focus-border-color:
 * button-filled-control-hover-background-color:
 * button-filled-control-hover-border-color:
 * button-filled-control-active-background-color:
 * button-filled-control-active-border-color:
 * button-filled-control-disabled-background-color:
 * button-filled-control-disabled-border-color:
 * button-filled-control-disabled-text-color:
 * button-outline-border-style:
 * button-outline-border-width:
 * button-outline-text-transform:
 * button-outline-focus-inset-shadow-length:
 * button-outline-tiny-padding:
 * button-outline-small-padding:
 * button-outline-medium-padding:
 * button-outline-large-padding:
 * button-outline-giant-padding:
 * button-outline-basic-background-color:
 * button-outline-basic-border-color:
 * button-outline-basic-text-color:
 * button-outline-basic-focus-background-color:
 * button-outline-basic-focus-border-color:
 * button-outline-basic-focus-text-color:
 * button-outline-basic-hover-background-color:
 * button-outline-basic-hover-border-color:
 * button-outline-basic-hover-text-color:
 * button-outline-basic-active-background-color:
 * button-outline-basic-active-border-color:
 * button-outline-basic-active-text-color:
 * button-outline-basic-disabled-background-color:
 * button-outline-basic-disabled-border-color:
 * button-outline-basic-disabled-text-color:
 * button-outline-primary-background-color:
 * button-outline-primary-border-color:
 * button-outline-primary-text-color:
 * button-outline-primary-focus-background-color:
 * button-outline-primary-focus-border-color:
 * button-outline-primary-focus-text-color:
 * button-outline-primary-hover-background-color:
 * button-outline-primary-hover-border-color:
 * button-outline-primary-hover-text-color:
 * button-outline-primary-active-background-color:
 * button-outline-primary-active-border-color:
 * button-outline-primary-active-text-color:
 * button-outline-primary-disabled-background-color:
 * button-outline-primary-disabled-border-color:
 * button-outline-primary-disabled-text-color:
 * button-outline-success-background-color:
 * button-outline-success-border-color:
 * button-outline-success-text-color:
 * button-outline-success-focus-background-color:
 * button-outline-success-focus-border-color:
 * button-outline-success-focus-text-color:
 * button-outline-success-hover-background-color:
 * button-outline-success-hover-border-color:
 * button-outline-success-hover-text-color:
 * button-outline-success-active-background-color:
 * button-outline-success-active-border-color:
 * button-outline-success-active-text-color:
 * button-outline-success-disabled-background-color:
 * button-outline-success-disabled-border-color:
 * button-outline-success-disabled-text-color:
 * button-outline-info-background-color:
 * button-outline-info-border-color:
 * button-outline-info-text-color:
 * button-outline-info-focus-background-color:
 * button-outline-info-focus-border-color:
 * button-outline-info-focus-text-color:
 * button-outline-info-hover-background-color:
 * button-outline-info-hover-border-color:
 * button-outline-info-hover-text-color:
 * button-outline-info-active-background-color:
 * button-outline-info-active-border-color:
 * button-outline-info-active-text-color:
 * button-outline-info-disabled-background-color:
 * button-outline-info-disabled-border-color:
 * button-outline-info-disabled-text-color:
 * button-outline-warning-background-color:
 * button-outline-warning-border-color:
 * button-outline-warning-text-color:
 * button-outline-warning-focus-background-color:
 * button-outline-warning-focus-border-color:
 * button-outline-warning-focus-text-color:
 * button-outline-warning-hover-background-color:
 * button-outline-warning-hover-border-color:
 * button-outline-warning-hover-text-color:
 * button-outline-warning-active-background-color:
 * button-outline-warning-active-border-color:
 * button-outline-warning-active-text-color:
 * button-outline-warning-disabled-background-color:
 * button-outline-warning-disabled-border-color:
 * button-outline-warning-disabled-text-color:
 * button-outline-danger-background-color:
 * button-outline-danger-border-color:
 * button-outline-danger-text-color:
 * button-outline-danger-focus-background-color:
 * button-outline-danger-focus-border-color:
 * button-outline-danger-focus-text-color:
 * button-outline-danger-hover-background-color:
 * button-outline-danger-hover-border-color:
 * button-outline-danger-hover-text-color:
 * button-outline-danger-active-background-color:
 * button-outline-danger-active-border-color:
 * button-outline-danger-active-text-color:
 * button-outline-danger-disabled-background-color:
 * button-outline-danger-disabled-border-color:
 * button-outline-danger-disabled-text-color:
 * button-outline-control-background-color:
 * button-outline-control-border-color:
 * button-outline-control-text-color:
 * button-outline-control-focus-background-color:
 * button-outline-control-focus-border-color:
 * button-outline-control-focus-text-color:
 * button-outline-control-hover-background-color:
 * button-outline-control-hover-border-color:
 * button-outline-control-hover-text-color:
 * button-outline-control-active-background-color:
 * button-outline-control-active-border-color:
 * button-outline-control-active-text-color:
 * button-outline-control-disabled-background-color:
 * button-outline-control-disabled-border-color:
 * button-outline-control-disabled-text-color:
 * button-ghost-background-color:
 * button-ghost-border-color:
 * button-ghost-border-style:
 * button-ghost-border-width:
 * button-ghost-text-transform:
 * button-ghost-focus-inset-shadow-length:
 * button-ghost-tiny-padding:
 * button-ghost-small-padding:
 * button-ghost-medium-padding:
 * button-ghost-large-padding:
 * button-ghost-giant-padding:
 * button-ghost-basic-text-color:
 * button-ghost-basic-focus-background-color:
 * button-ghost-basic-focus-border-color:
 * button-ghost-basic-focus-text-color:
 * button-ghost-basic-hover-background-color:
 * button-ghost-basic-hover-border-color:
 * button-ghost-basic-hover-text-color:
 * button-ghost-basic-active-background-color:
 * button-ghost-basic-active-border-color:
 * button-ghost-basic-active-text-color:
 * button-ghost-basic-disabled-background-color:
 * button-ghost-basic-disabled-border-color:
 * button-ghost-basic-disabled-text-color:
 * button-ghost-primary-text-color:
 * button-ghost-primary-focus-background-color:
 * button-ghost-primary-focus-border-color:
 * button-ghost-primary-focus-text-color:
 * button-ghost-primary-hover-background-color:
 * button-ghost-primary-hover-border-color:
 * button-ghost-primary-hover-text-color:
 * button-ghost-primary-active-background-color:
 * button-ghost-primary-active-border-color:
 * button-ghost-primary-active-text-color:
 * button-ghost-primary-disabled-background-color:
 * button-ghost-primary-disabled-border-color:
 * button-ghost-primary-disabled-text-color:
 * button-ghost-success-text-color:
 * button-ghost-success-focus-background-color:
 * button-ghost-success-focus-border-color:
 * button-ghost-success-focus-text-color:
 * button-ghost-success-hover-background-color:
 * button-ghost-success-hover-border-color:
 * button-ghost-success-hover-text-color:
 * button-ghost-success-active-background-color:
 * button-ghost-success-active-border-color:
 * button-ghost-success-active-text-color:
 * button-ghost-success-disabled-background-color:
 * button-ghost-success-disabled-border-color:
 * button-ghost-success-disabled-text-color:
 * button-ghost-info-text-color:
 * button-ghost-info-focus-background-color:
 * button-ghost-info-focus-border-color:
 * button-ghost-info-focus-text-color:
 * button-ghost-info-hover-background-color:
 * button-ghost-info-hover-border-color:
 * button-ghost-info-hover-text-color:
 * button-ghost-info-active-background-color:
 * button-ghost-info-active-border-color:
 * button-ghost-info-active-text-color:
 * button-ghost-info-disabled-background-color:
 * button-ghost-info-disabled-border-color:
 * button-ghost-info-disabled-text-color:
 * button-ghost-warning-text-color:
 * button-ghost-warning-focus-background-color:
 * button-ghost-warning-focus-border-color:
 * button-ghost-warning-focus-text-color:
 * button-ghost-warning-hover-background-color:
 * button-ghost-warning-hover-border-color:
 * button-ghost-warning-hover-text-color:
 * button-ghost-warning-active-background-color:
 * button-ghost-warning-active-border-color:
 * button-ghost-warning-active-text-color:
 * button-ghost-warning-disabled-background-color:
 * button-ghost-warning-disabled-border-color:
 * button-ghost-warning-disabled-text-color:
 * button-ghost-danger-text-color:
 * button-ghost-danger-focus-background-color:
 * button-ghost-danger-focus-border-color:
 * button-ghost-danger-focus-text-color:
 * button-ghost-danger-hover-background-color:
 * button-ghost-danger-hover-border-color:
 * button-ghost-danger-hover-text-color:
 * button-ghost-danger-active-background-color:
 * button-ghost-danger-active-border-color:
 * button-ghost-danger-active-text-color:
 * button-ghost-danger-disabled-background-color:
 * button-ghost-danger-disabled-border-color:
 * button-ghost-danger-disabled-text-color:
 * button-ghost-control-text-color:
 * button-ghost-control-focus-background-color:
 * button-ghost-control-focus-border-color:
 * button-ghost-control-focus-text-color:
 * button-ghost-control-hover-background-color:
 * button-ghost-control-hover-border-color:
 * button-ghost-control-hover-text-color:
 * button-ghost-control-active-background-color:
 * button-ghost-control-active-border-color:
 * button-ghost-control-active-text-color:
 * button-ghost-control-disabled-background-color:
 * button-ghost-control-disabled-border-color:
 * button-ghost-control-disabled-text-color:
 * button-hero-border-color:
 * button-hero-border-style:
 * button-hero-border-width:
 * button-hero-text-transform:
 * button-hero-tiny-padding:
 * button-hero-small-padding:
 * button-hero-medium-padding:
 * button-hero-large-padding:
 * button-hero-giant-padding:
 * button-hero-shadow:
 * button-hero-text-shadow:
 * button-hero-bevel-size:
 * button-hero-glow-size:
 * button-hero-outline-color:
 * button-hero-outline-width:
 * button-hero-basic-text-color:
 * button-hero-basic-bevel-color:
 * button-hero-basic-glow-color:
 * button-hero-basic-left-background-color:
 * button-hero-basic-right-background-color:
 * button-hero-basic-focus-left-background-color:
 * button-hero-basic-focus-right-background-color:
 * button-hero-basic-hover-left-background-color:
 * button-hero-basic-hover-right-background-color:
 * button-hero-basic-active-left-background-color:
 * button-hero-basic-active-right-background-color:
 * button-hero-basic-disabled-background-color:
 * button-hero-basic-disabled-text-color:
 * button-hero-primary-text-color:
 * button-hero-primary-bevel-color:
 * button-hero-primary-glow-color:
 * button-hero-primary-left-background-color:
 * button-hero-primary-right-background-color:
 * button-hero-primary-focus-left-background-color:
 * button-hero-primary-focus-right-background-color:
 * button-hero-primary-hover-left-background-color:
 * button-hero-primary-hover-right-background-color:
 * button-hero-primary-active-left-background-color:
 * button-hero-primary-active-right-background-color:
 * button-hero-primary-disabled-background-color:
 * button-hero-primary-disabled-text-color:
 * button-hero-success-text-color:
 * button-hero-success-bevel-color:
 * button-hero-success-glow-color:
 * button-hero-success-left-background-color:
 * button-hero-success-right-background-color:
 * button-hero-success-focus-left-background-color:
 * button-hero-success-focus-right-background-color:
 * button-hero-success-hover-left-background-color:
 * button-hero-success-hover-right-background-color:
 * button-hero-success-active-left-background-color:
 * button-hero-success-active-right-background-color:
 * button-hero-success-disabled-background-color:
 * button-hero-success-disabled-text-color:
 * button-hero-info-text-color:
 * button-hero-info-bevel-color:
 * button-hero-info-glow-color:
 * button-hero-info-left-background-color:
 * button-hero-info-right-background-color:
 * button-hero-info-focus-left-background-color:
 * button-hero-info-focus-right-background-color:
 * button-hero-info-hover-left-background-color:
 * button-hero-info-hover-right-background-color:
 * button-hero-info-active-left-background-color:
 * button-hero-info-active-right-background-color:
 * button-hero-info-disabled-background-color:
 * button-hero-info-disabled-text-color:
 * button-hero-warning-text-color:
 * button-hero-warning-bevel-color:
 * button-hero-warning-glow-color:
 * button-hero-warning-left-background-color:
 * button-hero-warning-right-background-color:
 * button-hero-warning-focus-left-background-color:
 * button-hero-warning-focus-right-background-color:
 * button-hero-warning-hover-left-background-color:
 * button-hero-warning-hover-right-background-color:
 * button-hero-warning-active-left-background-color:
 * button-hero-warning-active-right-background-color:
 * button-hero-warning-disabled-background-color:
 * button-hero-warning-disabled-text-color:
 * button-hero-danger-text-color:
 * button-hero-danger-bevel-color:
 * button-hero-danger-glow-color:
 * button-hero-danger-left-background-color:
 * button-hero-danger-right-background-color:
 * button-hero-danger-focus-left-background-color:
 * button-hero-danger-focus-right-background-color:
 * button-hero-danger-hover-left-background-color:
 * button-hero-danger-hover-right-background-color:
 * button-hero-danger-active-left-background-color:
 * button-hero-danger-active-right-background-color:
 * button-hero-danger-disabled-background-color:
 * button-hero-danger-disabled-text-color:
 * button-hero-control-text-color:
 * button-hero-control-bevel-color:
 * button-hero-control-glow-color:
 * button-hero-control-left-background-color:
 * button-hero-control-right-background-color:
 * button-hero-control-focus-left-background-color:
 * button-hero-control-focus-right-background-color:
 * button-hero-control-hover-left-background-color:
 * button-hero-control-hover-right-background-color:
 * button-hero-control-active-left-background-color:
 * button-hero-control-active-right-background-color:
 * button-hero-control-disabled-background-color:
 * button-hero-control-disabled-text-color:
 */
declare class NbButtonComponent extends NbButton implements AfterViewInit {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    /**
     * Sets `hero` appearance
     */
    get hero(): boolean;
    set hero(value: boolean);
    static ngAcceptInputType_hero: NbBooleanInput;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    onClick(event: any): void;
    constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, zone: NgZone, statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbButtonComponent, "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", never, { "hero": { "alias": "hero"; "required": false; }; }, {}, never, ["*"], false, never>;
}

declare class NbButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbButtonModule, [typeof NbButtonComponent], [typeof NbSharedModule], [typeof NbButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbButtonModule>;
}

/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarViewModeComponent`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
declare class NbCalendarKitModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarKitModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCalendarKitModule, [typeof NbCalendarViewModeComponent, typeof NbCalendarPageableNavigationComponent, typeof NbCalendarDaysNamesComponent, typeof NbCalendarYearPickerComponent, typeof NbCalendarMonthPickerComponent, typeof NbCalendarDayPickerComponent, typeof NbCalendarDayCellComponent, typeof NbCalendarActionsComponent, typeof NbCalendarMonthCellComponent, typeof NbCalendarYearCellComponent, typeof NbCalendarPickerRowComponent, typeof NbCalendarPickerComponent, typeof NbCalendarWeekNumberComponent], [typeof NbSharedModule, typeof NbButtonModule, typeof NbIconModule], [typeof NbCalendarViewModeComponent, typeof NbCalendarPageableNavigationComponent, typeof NbCalendarDaysNamesComponent, typeof NbCalendarYearPickerComponent, typeof NbCalendarMonthPickerComponent, typeof NbCalendarDayPickerComponent, typeof NbCalendarDayCellComponent, typeof NbCalendarActionsComponent, typeof NbCalendarMonthCellComponent, typeof NbCalendarYearCellComponent, typeof NbCalendarPickerRowComponent, typeof NbCalendarPickerComponent, typeof NbCalendarWeekNumberComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCalendarKitModule>;
}

declare class NbBaseCalendarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBaseCalendarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbBaseCalendarModule, [typeof NbBaseCalendarComponent], [typeof NbCalendarKitModule, typeof NbSharedModule, typeof NbCardModule], [typeof NbBaseCalendarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbBaseCalendarModule>;
}

declare class NbCalendarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCalendarModule, [typeof NbCalendarComponent], [typeof NbBaseCalendarModule], [typeof NbCalendarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCalendarModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbCalendarRange<D> {
    start: D;
    end?: D;
}
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
declare class NbCalendarRangeComponent<D> {
    protected dateService: NbDateService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for the calendar.
     * */
    startView: NbCalendarViewMode;
    static ngAcceptInputType_startView: NbCalendarViewModeValues;
    /**
     * A minimum available date for selection.
     * */
    min: D;
    /**
     * A maximum available date for selection.
     * */
    max: D;
    /**
     * A predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    dayCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _monthCellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    monthCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _yearCellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    yearCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    visibleDate: D;
    /**
     * Determines should we show calendars navigation or not.
     * */
    showNavigation: boolean;
    /**
     * Range which will be rendered as selected.
     * */
    range: NbCalendarRange<D>;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    firstDayOfWeek: number | undefined;
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    rangeChange: EventEmitter<NbCalendarRange<D>>;
    constructor(dateService: NbDateService<D>);
    onChange(date: D): void;
    private initDateIfNull;
    private handleSelected;
    private selectionStarted;
    private selectStart;
    private selectEnd;
    private selectRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeComponent<any>, "nb-calendar-range", never, { "boundingMonth": { "alias": "boundingMonth"; "required": false; }; "startView": { "alias": "startView"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "_cellComponent": { "alias": "dayCellComponent"; "required": false; }; "_monthCellComponent": { "alias": "monthCellComponent"; "required": false; }; "monthCellComponent": { "alias": "monthCellComponent"; "required": false; }; "_yearCellComponent": { "alias": "yearCellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "showNavigation": { "alias": "showNavigation"; "required": false; }; "range": { "alias": "range"; "required": false; }; "showWeekNumber": { "alias": "showWeekNumber"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; }, { "rangeChange": "rangeChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare abstract class NbBaseCalendarRangeCell<D> {
    abstract selectedValue: NbCalendarRange<D>;
    get hasRange(): boolean;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarRangeDayCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: NbCalendarRange<D>;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get inRange(): boolean;
    get start(): boolean;
    get end(): boolean;
    rangeCellClass: boolean;
    dayCellClass: boolean;
    get today(): boolean;
    get boundingMonth(): boolean;
    get selected(): boolean;
    get empty(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    get day(): number;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected dontFitFilter(): boolean;
    protected isInRange(date: D, { start, end }: NbCalendarRange<D>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeDayCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeDayCellComponent<any>, "nb-calendar-range-day-cell", never, { "date": { "alias": "date"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarRangeYearCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: NbCalendarRange<D>;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get inRange(): boolean;
    get rangeStart(): boolean;
    get rangeEnd(): boolean;
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    yearCellClass: boolean;
    rangeCellClass: boolean;
    get year(): number;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected yearStart(): D;
    protected yearEnd(): D;
    protected isInRange(date: D, { start, end }: NbCalendarRange<D>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeYearCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeYearCellComponent<any>, "nb-calendar-range-year-cell", never, { "date": { "alias": "date"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbCalendarRangeMonthCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    get month(): string;
    date: D;
    visibleDate: D;
    selectedValue: NbCalendarRange<D>;
    min: D;
    max: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    monthCellClass: boolean;
    rangeCellClass: boolean;
    get selected(): boolean;
    get inRange(): boolean;
    get rangeStart(): boolean;
    get rangeEnd(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    onClick(): void;
    constructor(dateService: NbDateService<D>);
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected monthStart(): D;
    protected monthEnd(): D;
    protected isInRage(date: D, range: NbCalendarRange<D>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeMonthCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeMonthCellComponent<any>, "nb-calendar-range-month-cell", never, { "date": { "alias": "date"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

declare class NbCalendarRangeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCalendarRangeModule, [typeof NbCalendarRangeComponent, typeof NbCalendarRangeDayCellComponent, typeof NbCalendarRangeYearCellComponent, typeof NbCalendarRangeMonthCellComponent], [typeof NbBaseCalendarModule], [typeof NbCalendarRangeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCalendarRangeModule>;
}

declare class NbPlatform extends Platform {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPlatform, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbPlatform>;
}

declare class NbViewportRulerAdapter extends ViewportRuler {
    protected ruler: NbLayoutRulerService;
    protected scroll: NbLayoutScrollService;
    constructor(platform: NbPlatform, ngZone: NgZone, ruler: NbLayoutRulerService, scroll: NbLayoutScrollService, document: any);
    getViewportSize(): Readonly<{
        width: number;
        height: number;
    }>;
    getViewportScrollPosition(): {
        left: number;
        top: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NbViewportRulerAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbViewportRulerAdapter>;
}

/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
declare class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    protected scrollService: NbLayoutScrollService;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, scrollService: NbLayoutScrollService);
    enable(): void;
    disable(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBlockScrollStrategyAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbBlockScrollStrategyAdapter>;
}
declare class NbScrollStrategyOptions extends ScrollStrategyOptions {
    protected scrollService: NbLayoutScrollService;
    protected scrollDispatcher: ScrollDispatcher;
    protected viewportRuler: NbViewportRulerAdapter;
    protected ngZone: NgZone;
    protected document: any;
    constructor(scrollService: NbLayoutScrollService, scrollDispatcher: ScrollDispatcher, viewportRuler: NbViewportRulerAdapter, ngZone: NgZone, document: any);
    block: () => NbBlockScrollStrategyAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbScrollStrategyOptions, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbScrollStrategyOptions>;
}
type NbScrollStrategies = keyof Pick<NbScrollStrategyOptions, 'noop' | 'close' | 'block' | 'reposition'>;

declare class NbPortalDirective extends CdkPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPortalDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPortalDirective, "[nbPortal]", never, {}, {}, never, never, false, never>;
}
declare class NbPortalOutletDirective extends CdkPortalOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPortalOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPortalOutletDirective, "[nbPortalOutlet]", never, {}, {}, never, never, false, never>;
}
declare class NbComponentPortal<T = any> extends ComponentPortal<T> {
}
declare class NbOverlay extends Overlay {
    scrollStrategies: NbScrollStrategyOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlay, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlay>;
}
declare class NbOverlayPositionBuilder extends OverlayPositionBuilder {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayPositionBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayPositionBuilder>;
}
declare class NbTemplatePortal<T = any> extends TemplatePortal<T> {
    constructor(template: TemplateRef<T>, viewContainerRef?: ViewContainerRef, context?: T);
}
declare class NbOverlayContainer extends OverlayContainer {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayContainer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayContainer>;
}
declare class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
type NbPortal<T = any> = Portal<T>;
type NbOverlayRef = OverlayRef;
type NbComponentType<T = any> = ComponentType<T>;
type NbPositionStrategy = PositionStrategy;
type NbConnectedPosition = ConnectedPosition;
type NbConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
type NbConnectionPositionPair = ConnectionPositionPair;
type NbOverlayConfig = OverlayConfig;
type NbScrollStrategy = ScrollStrategy;
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
declare class NbCdkMappingModule {
    static forRoot(): ModuleWithProviders<NbCdkMappingModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCdkMappingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCdkMappingModule, [typeof NbPortalDirective, typeof NbPortalOutletDirective], [typeof i1.OverlayModule, typeof i2$1.PortalModule], [typeof i1.OverlayModule, typeof i2$1.PortalModule, typeof NbPortalDirective, typeof NbPortalOutletDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCdkMappingModule>;
}

/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
declare class NbOverlayContainerAdapter extends NbOverlayContainer {
    protected container: HTMLElement;
    setContainer(container: HTMLElement): void;
    clearContainer(): void;
    protected _createContainer(): void;
    protected checkContainer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayContainerAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayContainerAdapter>;
}

declare enum NbGlobalLogicalPosition {
    TOP_START = "top-start",
    TOP_END = "top-end",
    BOTTOM_START = "bottom-start",
    BOTTOM_END = "bottom-end"
}
declare enum NbGlobalPhysicalPosition {
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left"
}
type NbGlobalPosition = NbGlobalPhysicalPosition | NbGlobalLogicalPosition;
declare class NbPositionHelper {
    protected layoutDirection: NbLayoutDirectionService;
    constructor(layoutDirection: NbLayoutDirectionService);
    toLogicalPosition(position: NbGlobalPosition): NbGlobalLogicalPosition;
    toPhysicalPosition(position: NbGlobalPosition): NbGlobalPhysicalPosition;
    isTopPosition(position: NbGlobalPosition): boolean;
    isRightPosition(position: NbGlobalPosition): boolean;
    protected toLogicalPositionWhenLtr(position: NbGlobalPhysicalPosition): NbGlobalLogicalPosition;
    protected toLogicalPositionWhenRtl(position: NbGlobalPhysicalPosition): NbGlobalLogicalPosition;
    protected toPhysicalPositionWhenLtr(position: NbGlobalLogicalPosition): NbGlobalPhysicalPosition;
    protected toPhysicalPositionWhenRtl(position: NbGlobalLogicalPosition): NbGlobalPhysicalPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbPositionHelper>;
}

type NbAdjustmentValues = 'noop' | 'clockwise' | 'counterclockwise' | 'vertical' | 'horizontal';
declare enum NbAdjustment {
    NOOP = "noop",
    CLOCKWISE = "clockwise",
    COUNTERCLOCKWISE = "counterclockwise",
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
type NbPositionValues = 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end' | 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' | 'end-top' | 'end-bottom' | 'start-top' | 'start-bottom';
declare enum NbPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    START = "start",
    END = "end",
    TOP_END = "top-end",
    TOP_START = "top-start",
    BOTTOM_END = "bottom-end",
    BOTTOM_START = "bottom-start",
    END_TOP = "end-top",
    END_BOTTOM = "end-bottom",
    START_TOP = "start-top",
    START_BOTTOM = "start-bottom"
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
declare class NbAdjustableConnectedPositionStrategy extends NbFlexibleConnectedPositionStrategy implements NbPositionStrategy {
    protected _position: NbPosition;
    protected _offset: number;
    protected _adjustment: NbAdjustment;
    protected _direction: NbLayoutDirection | undefined;
    protected appliedPositions: {
        key: NbPosition;
        connectedPosition: NbConnectedPosition;
    }[];
    readonly positionChange: Observable<NbPosition>;
    attach(overlayRef: NbOverlayRef): void;
    direction(direction: NbLayoutDirection): this;
    apply(): void;
    position(position: NbPosition): this;
    adjustment(adjustment: NbAdjustment): this;
    offset(offset: number): this;
    protected applyPositions(): void;
    protected createPositions(): NbPosition[];
    protected mapToLogicalPosition(position: NbPosition): NbPosition;
    protected persistChosenPositions(positions: NbPosition[]): void;
    protected reorderPreferredPositions(positions: NbPosition[]): NbPosition[];
}
declare class NbGlobalPositionStrategy extends GlobalPositionStrategy {
    position(position: NbGlobalLogicalPosition): this;
}
declare class NbPositionBuilderService {
    protected document: any;
    protected viewportRuler: NbViewportRulerAdapter;
    protected platform: NbPlatform;
    protected positionBuilder: NbOverlayPositionBuilder;
    protected overlayContainer: NbOverlayContainerAdapter;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, platform: NbPlatform, positionBuilder: NbOverlayPositionBuilder, overlayContainer: NbOverlayContainerAdapter);
    global(): NbGlobalPositionStrategy;
    connectedTo(elementRef: ElementRef): NbAdjustableConnectedPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbPositionBuilderService>;
}

type NbTriggerValues = 'noop' | 'click' | 'hover' | 'hint' | 'focus';
declare enum NbTrigger {
    NOOP = "noop",
    CLICK = "click",
    HOVER = "hover",
    HINT = "hint",
    FOCUS = "focus"
}
/**
 * Provides entity with two event stream: show and hide.
 * Each stream provides different events depends on implementation.
 * We have three main trigger strategies: click, hint and hover.
 * */
interface NbTriggerStrategy {
    show$: Observable<never | Event>;
    hide$: Observable<never | Event>;
    destroy(): any;
}
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
declare abstract class NbTriggerStrategyBase implements NbTriggerStrategy {
    protected document: Document;
    protected host: HTMLElement;
    protected container: () => ComponentRef<any>;
    destroy(): void;
    protected destroyed$: Subject<void>;
    protected isNotOnHostOrContainer(element: Element): boolean;
    protected isOnHostOrContainer(element: Element): boolean;
    protected isOnHost(element: Element): boolean;
    protected isOnContainer(element: Element): boolean;
    abstract show$: Observable<Event>;
    abstract hide$: Observable<Event>;
    constructor(document: Document, host: HTMLElement, container: () => ComponentRef<any>);
}
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
declare class NbClickTriggerStrategy extends NbTriggerStrategyBase {
    protected click$: Observable<[boolean, Event]>;
    readonly show$: Observable<Event>;
    readonly hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
declare class NbHoverTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
declare class NbHintTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
declare class NbFocusTriggerStrategy extends NbTriggerStrategyBase {
    protected focusOut$: Observable<Event>;
    protected clickIn$: Observable<Event>;
    protected clickOut$: Observable<Event>;
    protected tabKeyPress$: Observable<Event>;
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates empty show and hide event streams.
 * */
declare class NbNoopTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
declare class NbTriggerStrategyBuilderService {
    protected _document: any;
    protected _host: HTMLElement;
    protected _container: () => ComponentRef<any>;
    protected _trigger: NbTrigger;
    constructor(_document: any);
    trigger(trigger: NbTrigger): this;
    host(host: HTMLElement): this;
    container(container: () => ComponentRef<any>): this;
    build(): NbTriggerStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTriggerStrategyBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTriggerStrategyBuilderService>;
}

type NbOverlayContent = Type<any> | TemplateRef<any> | string;
declare function patch<T>(container: ComponentRef<T>, containerContext: Object): ComponentRef<T>;
declare function createContainer<T>(ref: NbOverlayRef, container: NbComponentType<T>, context: Object): ComponentRef<T>;
declare class NbOverlayService {
    protected overlay: NbOverlay;
    protected layoutDirection: NbLayoutDirectionService;
    constructor(overlay: NbOverlay, layoutDirection: NbLayoutDirectionService);
    get scrollStrategies(): NbScrollStrategyOptions;
    create(config?: NbOverlayConfig): NbOverlayRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayService>;
}

declare class NbCalendarTimeModelService<D> {
    protected dateService: NbDateService<D>;
    readonly MINUTES_AND_SECONDS = 60;
    constructor(dateService: NbDateService<D>);
    getHoursRange(step?: number): D[];
    getResetTime(): D;
    paddToTwoSymbols(n: number): string;
    buildDateFormat(twelveHoursFormat: boolean, withSeconds?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarTimeModelService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbCalendarTimeModelService<any>>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare const NB_TIME_PICKER_CONFIG: InjectionToken<unknown>;
interface NbTimepickerLocalizationConfig {
    hoursText: string;
    minutesText: string;
    secondsText: string;
    ampmText: string;
}
declare const NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG: NbTimepickerLocalizationConfig;
interface NbTimePickerConfig {
    twelveHoursFormat?: boolean;
    format?: string;
    localization?: NbTimepickerLocalizationConfig;
}
interface NbSelectedTimeModel {
    value: string;
}
interface NbSelectedTimePayload<D> {
    time: D;
    save?: boolean;
}

interface NbTimePartOption {
    value: number;
    text: string;
}
/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
declare class NbTimePickerComponent<D> implements OnChanges {
    protected config: NbTimePickerConfig;
    protected platformService: NbPlatform;
    cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    protected dateService: NbDateService<D>;
    protected blur$: Subject<void>;
    fullTimeOptions: D[];
    hoursColumnOptions: NbTimePartOption[];
    minutesColumnOptions: NbTimePartOption[];
    secondsColumnOptions: NbTimePartOption[];
    readonly dayPeriodColumnOptions: NbDayPeriod[];
    hostRef: ElementRef;
    isAM: boolean;
    timepickerFormatChange$: Subject<void>;
    /**
     * Emits when timepicker looses focus.
     */
    get blur(): Observable<void>;
    /**
     * Defines time format string.
     * */
    get timeFormat(): string;
    set timeFormat(timeFormat: string);
    protected _timeFormat: string;
    computedTimeFormat: string;
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat(): boolean;
    set twelveHoursFormat(value: boolean);
    protected _twelveHoursFormat: boolean;
    static ngAcceptInputType_twelveHoursFormat: NbBooleanInput;
    /**
     * Defines should show am/pm label if twelveHoursFormat enabled.
     * */
    get showAmPmLabel(): boolean;
    set showAmPmLabel(value: boolean);
    protected _showAmPmLabel: boolean;
    static ngAcceptInputType_showAmPmLabel: NbBooleanInput;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds(): boolean;
    set withSeconds(value: boolean);
    protected _withSeconds: boolean;
    static ngAcceptInputType_withSeconds: NbBooleanInput;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn(): boolean;
    set singleColumn(value: boolean);
    _singleColumn: boolean;
    static ngAcceptInputType_singleColumn: NbBooleanInput;
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step: number);
    get step(): number;
    protected _step: number;
    /**
     * Date which will be rendered as selected.
     * */
    set date(date: D);
    get date(): D;
    _date: D;
    /**
     * In timepicker value should be always true
     * In calendar-with-time.component  should set to false
     * @docs-private
     */
    showFooter: boolean;
    applyButtonText: string;
    hoursText: string;
    minutesText: string;
    secondsText: string;
    ampmText: string;
    currentTimeButtonText: string;
    /**
     * Emits date when selected.
     * */
    onSelectTime: EventEmitter<NbSelectedTimePayload<D>>;
    portal: NbPortalDirective;
    constructor(config: NbTimePickerConfig, platformService: NbPlatform, locale: string, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>, dateService: NbDateService<D>);
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn }: SimpleChanges): void;
    setHost(hostRef: ElementRef): void;
    attach(hostRef: ElementRef): void;
    setCurrentTime(): void;
    setHour(value: number): void;
    setMinute(value: number): void;
    setSecond(value: number): void;
    selectFullTime(value: D): void;
    changeDayPeriod(dayPeriodToSet: NbDayPeriod): void;
    updateValue(date: D): void;
    saveValue(): void;
    trackByTimeValues(index: any, item: NbTimePartOption): number;
    trackBySingleColumnValue(index: any, item: D): number;
    trackByDayPeriod(index: any, item: NbDayPeriod): string;
    showSeconds(): boolean;
    isSelectedHour(val: number): boolean;
    isSelectedMinute(val: number): boolean;
    isSelectedSecond(val: number): boolean;
    isSelectedDayPeriod(dayPeriod: NbDayPeriod): boolean;
    getFullTimeString(item: D): string;
    isSelectedFullTimeValue(value: D): boolean;
    protected buildColumnOptions(): void;
    /**
     * @docs-private
     */
    isFirefox(): boolean;
    protected generateHours(): NbTimePartOption[];
    protected generateMinutesOrSeconds(): NbTimePartOption[];
    protected setupTimeFormat(): string;
    /**
     * @docs-private
     */
    buildTimeFormat(): string;
    protected initFromConfig(config: NbTimePickerConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTimePickerComponent<any>, "nb-timepicker", ["nbTimepicker"], { "timeFormat": { "alias": "timeFormat"; "required": false; }; "twelveHoursFormat": { "alias": "twelveHoursFormat"; "required": false; }; "showAmPmLabel": { "alias": "showAmPmLabel"; "required": false; }; "withSeconds": { "alias": "withSeconds"; "required": false; }; "singleColumn": { "alias": "singleColumn"; "required": false; }; "step": { "alias": "step"; "required": false; }; "date": { "alias": "date"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; "applyButtonText": { "alias": "applyButtonText"; "required": false; }; "hoursText": { "alias": "hoursText"; "required": false; }; "minutesText": { "alias": "minutesText"; "required": false; }; "secondsText": { "alias": "secondsText"; "required": false; }; "ampmText": { "alias": "ampmText"; "required": false; }; "currentTimeButtonText": { "alias": "currentTimeButtonText"; "required": false; }; }, { "onSelectTime": "onSelectTime"; }, never, never, false, never>;
}

declare class NbCalendarWithTimeComponent<D> extends NbCalendarComponent<D> implements OnInit, AfterViewInit {
    protected dateService: NbDateService<D>;
    cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    /**
     * Defines selected date.
     * */
    visibleDate: D;
    /**
     * Defines 12 hours format like '07:00 PM'.
     * */
    twelveHoursFormat: boolean;
    /**
     * Defines should show am/pm label if twelveHoursFormat enabled.
     * */
    showAmPmLabel: boolean;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true.
     * */
    withSeconds: boolean;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    singleColumn: boolean;
    /**
     * Defines minutes step when we use fill time format.
     * If set to 20, it will be: '12:00, 12:20: 12:40, 13:00...'
     * */
    step: number;
    /**
     * Defines time format.
     * */
    timeFormat: string;
    /**
     * Defines text over the timepicker.
     * */
    title: string;
    applyButtonText: string;
    currentTimeButtonText: string;
    showCurrentTimeButton: boolean;
    portalOutlet: NbPortalOutletDirective;
    timepicker: NbTimePickerComponent<D>;
    constructor(dateService: NbDateService<D>, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onDateValueChange(date: D): void;
    onTimeChange(selectedTime: NbSelectedTimePayload<D>): void;
    saveValue(): void;
    saveCurrentTime(): void;
    showSeconds(): boolean;
    isLarge(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarWithTimeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarWithTimeComponent<any>, "nb-calendar-with-time", never, { "visibleDate": { "alias": "visibleDate"; "required": false; }; "twelveHoursFormat": { "alias": "twelveHoursFormat"; "required": false; }; "showAmPmLabel": { "alias": "showAmPmLabel"; "required": false; }; "withSeconds": { "alias": "withSeconds"; "required": false; }; "singleColumn": { "alias": "singleColumn"; "required": false; }; "step": { "alias": "step"; "required": false; }; "timeFormat": { "alias": "timeFormat"; "required": false; }; "title": { "alias": "title"; "required": false; }; "applyButtonText": { "alias": "applyButtonText"; "required": false; }; "currentTimeButtonText": { "alias": "currentTimeButtonText"; "required": false; }; "showCurrentTimeButton": { "alias": "showCurrentTimeButton"; "required": false; }; }, {}, never, never, false, never>;
}

interface NbRenderableContainer {
    /**
     * A renderContent method renders content with provided context.
     * Naturally, this job has to be done by ngOnChanges lifecycle hook, but
     * ngOnChanges hook will be triggered only if we update content or context properties
     * through template property binding syntax. But in our case we're updating these properties programmatically.
     * */
    renderContent(): any;
}
declare class NbPositionedContainerComponent {
    position: NbPosition;
    get top(): boolean;
    get topStart(): boolean;
    get topEnd(): boolean;
    get right(): boolean;
    get endTop(): boolean;
    get endBottom(): boolean;
    get bottom(): boolean;
    get bottomStart(): boolean;
    get bottomEnd(): boolean;
    get left(): boolean;
    get startTop(): boolean;
    get startBottom(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionedContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbPositionedContainerComponent, "ng-component", never, { "position": { "alias": "position"; "required": false; }; }, {}, never, never, false, never>;
}
declare class NbOverlayContainerComponent {
    protected vcr: ViewContainerRef;
    protected injector: Injector;
    private changeDetectorRef;
    portalOutlet: NbPortalOutletDirective;
    isAttached: boolean;
    content: string;
    constructor(vcr: ViewContainerRef, injector: Injector, changeDetectorRef: ChangeDetectorRef);
    get isStringContent(): boolean;
    attachComponentPortal<T>(portal: NbComponentPortal<T>, context?: Object): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    attachStringContent(content: string): void;
    detach(): void;
    protected createChildInjector(): DestroyableInjector;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOverlayContainerComponent, "nb-overlay-container", never, {}, {}, never, never, false, never>;
}

declare class NbDatepickerContainerComponent extends NbPositionedContainerComponent {
    overlayContainer: NbOverlayContainerComponent;
    attach<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDatepickerContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDatepickerContainerComponent, "nb-datepicker-container", never, {}, {}, never, never, false, never>;
}

/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
declare abstract class NbDatepickerAdapter<D> {
    /**
     * Picker component class.
     * */
    abstract picker: Type<any>;
    /**
     * Parse date string according to the format.
     * */
    abstract parse(value: string, format: string): D;
    /**
     * Format date according to the format.
     * */
    abstract format(value: D, format: string): string;
    /**
     * Validates date string according to the passed format.
     * */
    abstract isValid(value: string, format: string): boolean;
}
/**
 * Validators config that will be used by form control to perform proper validation.
 * */
interface NbPickerValidatorConfig<D> {
    /**
     * Minimum date available in picker.
     * */
    min: D;
    /**
     * Maximum date available in picker.
     * */
    max: D;
    /**
     * Predicate that determines is value available for picking.
     * */
    filter: (D: any) => boolean;
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
declare abstract class NbDatepicker<T, D = T> {
    /**
     * HTML input element date format.
     * */
    abstract format: string;
    abstract get value(): T;
    abstract set value(value: T);
    abstract get valueChange(): Observable<T>;
    abstract get init(): Observable<void>;
    /**
     * Attaches datepicker to the native input element.
     * */
    abstract attach(hostRef: ElementRef): any;
    /**
     * Returns validator configuration based on the input properties.
     * */
    abstract getValidatorConfig(): NbPickerValidatorConfig<D>;
    abstract show(): any;
    abstract hide(): any;
    abstract shouldHide(): boolean;
    abstract get isShown(): boolean;
    abstract get blur(): Observable<void>;
    abstract get formatChanged$(): Observable<void>;
}
declare const NB_DATE_ADAPTER: InjectionToken<NbDatepickerAdapter<any>>;
declare const NB_DATE_SERVICE_OPTIONS: InjectionToken<unknown>;
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule,
 *   ],
 * })
 *
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * Also `NbDatepickerDirective` may be filtered using `filter` predicate
 * that receives date object and has to return a boolean value.
 *
 * @stacked-example(Filter, datepicker/datepicker-filter.component)
 *
 * If you need to pick a time along with the date, you can use nb-date-timepicker
 *
 * ```html
 * <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker">
 * <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
 * ```
 * @stacked-example(Date timepicker, datepicker/date-timepicker-showcase.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 *
 * @stacked-example(Date timepicker single column, datepicker/date-timepicker-single-column.component)

 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 * <span id="formatting-issue"></span>
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * ### NbDateFnsDateModule
 *
 * Format is required when using `NbDateFnsDateModule`. You can set it via `format` input on datepicker component:
 * ```html
 * <nb-datepicker format="dd.MM.yyyy"></nb-datepicker>
 * ```
 * Also format can be set globally with `NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' })` and
 * `NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' })` methods.
 *
 * Please note to use some of the formatting tokens you also need to pass
 * `{ useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }` to date-fns parse and format functions.
 * You can configure options passed this functions by setting `formatOptions` and
 * `parseOptions` of options object passed to `NbDateFnsDateModule.forRoot` and `NbDateFnsDateModule.forChild` methods.
 * ```ts
 * NbDateFnsDateModule.forRoot({
 *   parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 *   formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 * })
 * ```
 * Further info on `date-fns` formatting tokens could be found at
 * [date-fns docs](https://date-fns.org/v2.0.0-alpha.27/docs/Unicode-Tokens).
 *
 * You can also use `parseOptions` and `formatOptions` to provide locale.
 * ```ts
 * import { eo } from 'date-fns/locale';
 *
 * @NgModule({
 *   imports: [
 *     NbDateFnsDateModule.forRoot({
 *       parseOptions: { locale: eo },
 *       formatOptions: { locale: eo },
 *     }),
 *   ],
 * })
 * ```
 *
 * @styles
 *
 * datepicker-background-color:
 * datepicker-border-color:
 * datepicker-border-style:
 * datepicker-border-width:
 * datepicker-border-radius:
 * datepicker-shadow:
 * */
declare class NbDatepickerDirective<D> implements OnDestroy, ControlValueAccessor, Validator {
    protected document: any;
    protected datepickerAdapters: NbDatepickerAdapter<D>[];
    protected hostRef: ElementRef;
    protected dateService: NbDateService<D>;
    protected changeDetector: ChangeDetectorRef;
    /**
     * Provides datepicker component.
     * */
    set setPicker(picker: NbDatepicker<D>);
    protected pickerInputsChangedSubscription: Subscription | undefined;
    /**
     * Datepicker adapter.
     * */
    protected datepickerAdapter: NbDatepickerAdapter<D>;
    /**
     * Datepicker instance.
     * */
    protected picker: NbDatepicker<D>;
    protected destroy$: Subject<void>;
    protected isDatepickerReady: boolean;
    protected queue: D | undefined;
    protected onChange: (D: any) => void;
    protected onTouched: () => void;
    /**
     * Form control validators will be called in validators context, so, we need to bind them.
     * */
    protected validator: ValidatorFn;
    constructor(document: any, datepickerAdapters: NbDatepickerAdapter<D>[], hostRef: ElementRef, dateService: NbDateService<D>, changeDetector: ChangeDetectorRef);
    /**
     * Returns html input element.
     * */
    get input(): HTMLInputElement;
    /**
     * Returns host input value.
     * */
    get inputValue(): string;
    ngOnDestroy(): void;
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value: D): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    /**
     * Form control validation based on picker validator config.
     * */
    validate(): ValidationErrors | null;
    /**
     * Hides picker, focuses the input
     */
    protected hidePicker(): void;
    /**
     * Validates that we can parse value correctly.
     * */
    protected parseValidator(): ValidationErrors | null;
    /**
     * Validates passed value is greater than min.
     * */
    protected minValidator(): ValidationErrors | null;
    /**
     * Validates passed value is smaller than max.
     * */
    protected maxValidator(): ValidationErrors | null;
    /**
     * Validates passed value satisfy the filter.
     * */
    protected filterValidator(): ValidationErrors | null;
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    protected chooseDatepickerAdapter(): void;
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    protected setupPicker(): void;
    protected writePicker(value: D): void;
    protected writeInput(value: D): void;
    /**
     * Validates if no datepicker adapter provided.
     * */
    protected noDatepickerAdapterProvided(): boolean;
    protected subscribeOnInputChange(): void;
    /**
     * Parses input value and write if it isn't null.
     * */
    protected handleInputChange(value: string): void;
    protected parseInputValue(value: any): D | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDatepickerDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbDatepickerDirective<any>, "input[nbDatepicker]", never, { "setPicker": { "alias": "nbDatepicker"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
declare abstract class NbBasePicker<D, T, P> extends NbDatepicker<T, D> {
    protected overlay: NbOverlayService;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected dateService: NbDateService<D>;
    protected dateServiceOptions: any;
    /**
     * Datepicker date format. Can be used only with date adapters (moment, date-fns) since native date
     * object doesn't support formatting.
     * */
    abstract format: string;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    abstract boundingMonth: boolean;
    /**
     * Defines starting view for calendar.
     * */
    abstract startView: NbCalendarViewMode;
    /**
     * Minimum available date for selection.
     * */
    abstract min: D;
    /**
     * Maximum available date for selection.
     * */
    abstract max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    abstract filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    abstract size: NbCalendarSize;
    /**
     * Depending on this date a particular month is selected in the calendar
     */
    abstract visibleDate: D;
    /**
     * Hide picker when a date or a range is selected, `true` by default
     * @type {boolean}
     */
    abstract hideOnSelect: boolean;
    /**
     * Determines should we show calendar navigation or not.
     * @type {boolean}
     */
    abstract showNavigation: boolean;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    abstract weekNumberSymbol: string;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    abstract showWeekNumber: boolean;
    /**
     * Sets first day of the week, it can be 1 if week starts from monday and 0 if from sunday and so on.
     * `undefined` means that default locale setting will be used.
     * */
    abstract firstDayOfWeek: number | undefined;
    readonly formatChanged$: Subject<void>;
    /**
     * Calendar component class that has to be instantiated inside overlay.
     * */
    protected abstract pickerClass: Type<P>;
    /**
     * Overlay reference object.
     * */
    protected ref: NbOverlayRef;
    /**
     * Datepicker container that contains instantiated picker.
     * */
    protected container: ComponentRef<NbDatepickerContainerComponent>;
    /**
     * Positioning strategy used by overlay.
     * */
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Trigger strategy used by overlay
     * */
    protected triggerStrategy: NbTriggerStrategy;
    /**
     * HTML input reference to which datepicker connected.
     * */
    protected hostRef: ElementRef;
    protected init$: ReplaySubject<void>;
    /**
     * Stream of picker changes. Required to be the subject because picker hides and shows and picker
     * change stream becomes recreated.
     * */
    protected onChange$: Subject<T>;
    /**
     * Reference to the picker instance itself.
     * */
    protected pickerRef: ComponentRef<any>;
    protected overlayOffset: number;
    protected adjustment: NbAdjustment;
    protected destroy$: Subject<void>;
    /**
     * Queue contains the last value that was applied to the picker when it was hidden.
     * This value will be passed to the picker as soon as it shown.
     * */
    protected queue: T | undefined;
    protected blur$: Subject<void>;
    protected constructor(overlay: NbOverlayService, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, dateService: NbDateService<D>, dateServiceOptions: any);
    /**
     * Returns picker instance.
     * */
    get picker(): any;
    /**
     * Stream of picker value changes.
     * */
    get valueChange(): Observable<T>;
    get isShown(): boolean;
    get init(): Observable<void>;
    /**
     * Emits when datepicker looses focus.
     */
    get blur(): Observable<void>;
    protected abstract get pickerValueChange(): Observable<T>;
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    attach(hostRef: ElementRef): void;
    getValidatorConfig(): NbPickerValidatorConfig<D>;
    show(): void;
    shouldHide(): boolean;
    hide(): void;
    protected abstract writeQueue(): any;
    protected createOverlay(): void;
    protected openDatepicker(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected subscribeOnPositionChange(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected instantiatePicker(): void;
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    protected subscribeOnValueChange(): void;
    protected patchWithInputs(): void;
    protected checkFormat(): void;
}
declare class NbBasePickerComponent<D, T, P> extends NbBasePicker<D, T, P> implements OnInit, OnChanges, OnDestroy {
    /**
     * Datepicker date format. Can be used only with date adapters (moment, date-fns) since native date
     * object doesn't support formatting.
     * */
    format: string;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for calendar.
     * */
    startView: NbCalendarViewMode;
    static ngAcceptInputType_startView: NbCalendarViewModeValues;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Depending on this date a particular month is selected in the calendar
     */
    visibleDate: D;
    /**
     * Hide picker when a date or a range is selected, `true` by default
     * @type {boolean}
     */
    hideOnSelect: boolean;
    /**
     * Determines should we show calendars navigation or not.
     * @type {boolean}
     */
    showNavigation: boolean;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    firstDayOfWeek: number | undefined;
    /**
     * Determines picker overlay offset (in pixels).
     * */
    overlayOffset: number;
    adjustment: NbAdjustment;
    static ngAcceptInputType_adjustment: NbAdjustmentValues;
    constructor(document: any, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, dateService: NbDateService<D>, dateServiceOptions: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    protected pickerClass: Type<P>;
    protected get pickerValueChange(): Observable<T>;
    get value(): T;
    set value(value: T);
    protected writeQueue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBasePickerComponent<any, any, any>, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbBasePickerComponent<any, any, any>, "ng-component", never, { "format": { "alias": "format"; "required": false; }; "boundingMonth": { "alias": "boundingMonth"; "required": false; }; "startView": { "alias": "startView"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "dayCellComponent": { "alias": "dayCellComponent"; "required": false; }; "monthCellComponent": { "alias": "monthCellComponent"; "required": false; }; "yearCellComponent": { "alias": "yearCellComponent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "visibleDate": { "alias": "visibleDate"; "required": false; }; "hideOnSelect": { "alias": "hideOnSelect"; "required": false; }; "showNavigation": { "alias": "showNavigation"; "required": false; }; "weekNumberSymbol": { "alias": "weekNumberSymbol"; "required": false; }; "showWeekNumber": { "alias": "showWeekNumber"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; "overlayOffset": { "alias": "overlayOffset"; "required": false; }; "adjustment": { "alias": "adjustment"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
declare class NbDatepickerComponent<D> extends NbBasePickerComponent<D, D, NbCalendarComponent<D>> {
    protected pickerClass: Type<NbCalendarComponent<D>>;
    /**
     * Date which will be rendered as selected.
     * */
    set date(date: D);
    /**
     * Emits date when selected.
     * */
    get dateChange(): EventEmitter<D>;
    get value(): D;
    set value(date: D);
    protected get pickerValueChange(): Observable<D>;
    protected writeQueue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDatepickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDatepickerComponent<any>, "nb-datepicker", never, { "date": { "alias": "date"; "required": false; }; }, { "dateChange": "dateChange"; }, never, never, false, never>;
}
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
declare class NbRangepickerComponent<D> extends NbBasePickerComponent<D, NbCalendarRange<D>, NbCalendarRangeComponent<D>> {
    protected pickerClass: Type<NbCalendarRangeComponent<D>>;
    /**
     * Range which will be rendered as selected.
     * */
    set range(range: NbCalendarRange<D>);
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    get rangeChange(): EventEmitter<NbCalendarRange<D>>;
    get value(): NbCalendarRange<D>;
    set value(range: NbCalendarRange<D>);
    protected get pickerValueChange(): Observable<NbCalendarRange<D>>;
    shouldHide(): boolean;
    protected writeQueue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRangepickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRangepickerComponent<any>, "nb-rangepicker", never, { "range": { "alias": "range"; "required": false; }; }, { "rangeChange": "rangeChange"; }, never, never, false, never>;
}

/**
 * The DateTimePicker component itself.
 * Provides a proxy to `NbCalendarWithTimeComponent` options as well as custom picker options.
 */
declare class NbDateTimePickerComponent<D> extends NbBasePickerComponent<D, D, NbCalendarWithTimeComponent<D>> implements OnInit {
    protected calendarWithTimeModelService: NbCalendarTimeModelService<D>;
    protected pickerClass: Type<NbCalendarWithTimeComponent<D>>;
    get value(): any;
    set value(date: any);
    /**
     * Defines minutes step when we use fill time format.
     * If set to 20, it will be: '12:00, 12:20: 12:40, 13:00...'
     * */
    step: number;
    title: string;
    applyButtonText: string;
    currentTimeButtonText: string;
    showCurrentTimeButton: boolean;
    /**
     * Defines 12 hours format like '07:00 PM'.
     * */
    get twelveHoursFormat(): boolean;
    set twelveHoursFormat(value: boolean);
    _twelveHoursFormat: boolean;
    static ngAcceptInputType_twelveHoursFormat: NbBooleanInput;
    /**
     * Defines should show am/pm label if twelveHoursFormat enabled.
     * */
    get showAmPmLabel(): boolean;
    set showAmPmLabel(value: boolean);
    protected _showAmPmLabel: boolean;
    static ngAcceptInputType_showAmPmLabel: NbBooleanInput;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true.
     * */
    get withSeconds(): boolean;
    set withSeconds(value: boolean);
    _withSeconds: boolean;
    static ngAcceptInputType_withSeconds: NbBooleanInput;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn(): boolean;
    set singleColumn(value: boolean);
    _singleColumn: boolean;
    static ngAcceptInputType_singleColumn: NbBooleanInput;
    /**
     * Emits date with time when selected.
     * */
    get dateTimeChange(): EventEmitter<D>;
    constructor(document: any, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, dateService: NbDateService<D>, dateServiceOptions: any, calendarWithTimeModelService: NbCalendarTimeModelService<D>);
    ngOnInit(): void;
    protected patchWithInputs(): void;
    protected get pickerValueChange(): Observable<any>;
    protected writeQueue(): void;
    protected buildTimeFormat(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDateTimePickerComponent<any>, [null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDateTimePickerComponent<any>, "nb-date-timepicker", never, { "step": { "alias": "step"; "required": false; }; "title": { "alias": "title"; "required": false; }; "applyButtonText": { "alias": "applyButtonText"; "required": false; }; "currentTimeButtonText": { "alias": "currentTimeButtonText"; "required": false; }; "showCurrentTimeButton": { "alias": "showCurrentTimeButton"; "required": false; }; "twelveHoursFormat": { "alias": "twelveHoursFormat"; "required": false; }; "showAmPmLabel": { "alias": "showAmPmLabel"; "required": false; }; "withSeconds": { "alias": "withSeconds"; "required": false; }; "singleColumn": { "alias": "singleColumn"; "required": false; }; }, { "dateTimeChange": "dateTimeChange"; }, never, never, false, never>;
}

/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
declare class NbNativeDateService extends NbDateService<Date> {
    protected datePipe: DatePipe;
    constructor(locale: string);
    setLocale(locale: string): void;
    setHours(date: Date, hour: number): Date;
    setMinutes(date: Date, minute: number): Date;
    setSeconds(date: Date, second: number): Date;
    setMilliseconds(date: Date, second: number): Date;
    isValidDateString(date: string, format: string): boolean;
    isValidTimeString(date: string, format: string): boolean;
    today(): Date;
    getLocaleTimeFormat(): string;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getYear(date: Date): number;
    getDayOfWeek(date: Date): number;
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek(): number;
    getMonthName(date: Date, style?: TranslationWidth): string;
    getMonthNameByIndex(index: number, style?: TranslationWidth): string;
    getDayOfWeekNames(): string[];
    format(date: Date, format: string): string;
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date: string, format: string): Date;
    addDay(date: Date, num: number): Date;
    addMonth(date: Date, num: number): Date;
    addMinutes(date: Date, minute: number): Date;
    addHours(date: Date, hour: number): Date;
    getHours(date: Date): number;
    getMinutes(date: Date): number;
    getSeconds(date: Date): number;
    getMilliseconds(date: Date): number;
    addYear(date: Date, num: number): Date;
    clone(date: Date): Date;
    compareDates(date1: Date, date2: Date): number;
    createDate(year: number, month: number, date: number): Date;
    getMonthEnd(date: Date): Date;
    getMonthStart(date: Date): Date;
    getNumberOfDaysInMonth(date: Date): number;
    getYearEnd(date: Date): Date;
    getYearStart(date: Date): Date;
    valueOf(date: Date): number;
    isSameDay(date1: Date, date2: Date): boolean;
    isSameMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    getId(): string;
    getWeekNumber(date: Date): number;
    getDateFormat(): string;
    getTwelveHoursFormat(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbNativeDateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbNativeDateService>;
}

/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
declare class NbRestoreScrollTopHelper {
    private router;
    constructor(router: Router);
    shouldRestore(): Observable<boolean>;
    private pageChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRestoreScrollTopHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbRestoreScrollTopHelper>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Layout container component.
 * When using with Nebular Theme System it is required that all child components should be placed inside.
 *
 * Basic example of two column layout with header:
 *
 * @stacked-example(Showcase, layout/layout-showcase.component)
 *
 * Can contain the following components inside:
 *
 * ```html
 * <nb-layout>
 *  <nb-layout-header></nb-layout-header>
 *  <nb-layout-footer></nb-layout-footer>
 *  <nb-layout-column></nb-layout-column>
 *  <nb-sidebar></nb-sidebar>
 * </nb-layout>
 * ```
 * ### Installation
 *
 * Import `NbLayoutModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbLayoutModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * ### Usage
 * By default the layout fills up the whole view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The child components are projected into a flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are under the `ThemeService` section.
 *
 * The layout component is also responsible for changing application themes.
 * It listens to the `themeChange` event and change a theme CSS class appended to body.
 * Based on the class appended, specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * A simple layout with footer:
 *
 * @stacked-example(Layout With Footer, layout/layout-w-footer.component)
 *
 * It is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```html
 * <nb-layout center>
 *   <nb-layout-header>Awesome Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-background-color:
 * layout-text-color:
 * layout-text-font-family:
 * layout-text-font-size:
 * layout-text-font-weight:
 * layout-text-line-height:
 * layout-min-height:
 * layout-content-width:
 * layout-window-mode-min-width:
 * layout-window-mode-background-color:
 * layout-window-mode-padding-top:
 * layout-window-shadow:
 * layout-padding:
 * layout-medium-padding:
 * layout-small-padding:
 * layout-scrollbar-background-color:
 * layout-scrollbar-color:
 * layout-scrollbar-width:
 */
declare class NbLayoutComponent implements AfterViewInit, OnDestroy {
    protected themeService: NbThemeService;
    protected spinnerService: NbSpinnerService;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    protected window: any;
    protected document: any;
    protected platformId: Object;
    protected layoutDirectionService: NbLayoutDirectionService;
    protected scrollService: NbLayoutScrollService;
    protected rulerService: NbLayoutRulerService;
    protected scrollTop: NbRestoreScrollTopHelper;
    protected overlayContainer: NbOverlayContainerAdapter;
    protected scrollBlockClass: string;
    protected isScrollBlocked: boolean;
    protected scrollableContainerOverflowOldValue: string;
    protected layoutPaddingOldValue: {
        left: string;
        right: string;
    };
    centerValue: boolean;
    restoreScrollTopValue: boolean;
    windowModeValue: boolean;
    withScrollValue: boolean;
    withSubheader: boolean;
    /**
     * Defines whether the layout columns will be centered after some width
     * @param {boolean} val
     */
    set center(val: boolean);
    static ngAcceptInputType_center: NbBooleanInput;
    /**
     * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
     * becomes centered by width with a margin from the top of the screen, like a floating window.
     * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
     * window. (TODO: check this)
     * @param {boolean} val
     */
    set windowMode(val: boolean);
    static ngAcceptInputType_windowMode: NbBooleanInput;
    /**
     * Defines whether to move the scrollbars to layout or leave it at the body level.
     * Automatically set to true when `windowMode` is enabled.
     * @param {boolean} val
     */
    set withScroll(val: boolean);
    static ngAcceptInputType_withScroll: NbBooleanInput;
    /**
     * Restores scroll to the top of the page after navigation
     * @param {boolean} val
     */
    set restoreScrollTop(val: boolean);
    static ngAcceptInputType_restoreScrollTop: NbBooleanInput;
    veryTopRef: ViewContainerRef;
    scrollableContainerRef: ElementRef<HTMLElement>;
    layoutContainerRef: ElementRef<HTMLElement>;
    protected afterViewInit$: BehaviorSubject<any>;
    private destroy$;
    constructor(themeService: NbThemeService, spinnerService: NbSpinnerService, elementRef: ElementRef, renderer: Renderer2, window: any, document: any, platformId: Object, layoutDirectionService: NbLayoutDirectionService, scrollService: NbLayoutScrollService, rulerService: NbLayoutRulerService, scrollTop: NbRestoreScrollTopHelper, overlayContainer: NbOverlayContainerAdapter);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onScroll($event: any): void;
    onResize(event: any): void;
    /**
     * Returns scroll and client height/width
     *
     * Depending on the current scroll mode (`withScroll=true`) returns sizes from the body element
     * or from the `.scrollable-container`
     * @returns {NbLayoutDimensions}
     */
    getDimensions(): NbLayoutDimensions;
    /**
     * Returns scroll position of current scroll container.
     *
     * If `withScroll` = true, returns scroll position of the `.scrollable-container` element,
     * otherwise - of the scrollable element of the window (which may be different depending of a browser)
     *
     * @returns {NbScrollPosition}
     */
    getScrollPosition(): NbScrollPosition;
    protected registerAsOverlayContainer(): void;
    protected unregisterAsOverlayContainer(): void;
    private scroll;
    protected blockScroll(): void;
    private enableScroll;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutComponent, "nb-layout", never, { "center": { "alias": "center"; "required": false; }; "windowMode": { "alias": "windowMode"; "required": false; }; "withScroll": { "alias": "withScroll"; "required": false; }; "restoreScrollTop": { "alias": "restoreScrollTop"; "required": false; }; }, {}, never, ["nb-layout-header:not([subheader])", "nb-sidebar", "nb-layout-header[subheader]", "nb-layout-column", "nb-layout-footer"], false, never>;
}
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 *
 * @stacked-example(Column Left, layout/layout-column-left.component)
 */
declare class NbLayoutColumnComponent {
    leftValue: boolean;
    startValue: boolean;
    /**
     * Move the column to the very left position in the layout.
     * @param {boolean} val
     */
    set left(val: boolean);
    static ngAcceptInputType_left: NbBooleanInput;
    /**
     * Make column first in the layout.
     * @param {boolean} val
     */
    set start(val: boolean);
    static ngAcceptInputType_start: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutColumnComponent, "nb-layout-column", never, { "left": { "alias": "left"; "required": false; }; "start": { "alias": "start"; "required": false; }; }, {}, never, ["*"], false, never>;
}
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page). Here's an example:
 *
 * @stacked-example(Fixed Header, layout/layout-fixed-header.component)
 *
 * In a pair with sidebar it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * Same way you can put both `fixed` and `clipped` headers adding creating a sub-header for your app:
 *
 * @stacked-example(Subheader, layout/layout-subheader.component)
 *
 * @styles
 *
 * header-background-color:
 * header-text-color:
 * header-text-font-family:
 * header-text-font-size:
 * header-text-font-weight:
 * header-text-line-height:
 * header-height:
 * header-padding:
 * header-shadow:
 */
declare class NbLayoutHeaderComponent {
    private layout;
    fixedValue: boolean;
    subheaderValue: boolean;
    constructor(layout: NbLayoutComponent);
    /**
     * Makes the header sticky to the top of the nb-layout.
     * @param {boolean} val
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    /**
     * Places header on a side of the sidebar, and not above.
     * Disables fixed mode for this header and remove a shadow from the sidebar.
     * @param {boolean} val
     */
    set subheader(val: boolean);
    static ngAcceptInputType_subheader: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutHeaderComponent, "nb-layout-header", never, { "fixed": { "alias": "fixed"; "required": false; }; "subheader": { "alias": "subheader"; "required": false; }; }, {}, never, ["*"], false, never>;
}
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-background-color:
 * footer-text-color:
 * footer-text-font-family:
 * footer-text-font-size:
 * footer-text-font-weight:
 * footer-text-line-height:
 * footer-text-highlight-color:
 * footer-height:
 * footer-padding:
 * footer-divider-color:
 * footer-divider-style:
 * footer-divider-width:
 * footer-shadow:
 */
declare class NbLayoutFooterComponent {
    fixedValue: boolean;
    /**
     * Makes the footer sticky to the bottom of the window.
     * @param {boolean} val
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutFooterComponent, "nb-layout-footer", never, { "fixed": { "alias": "fixed"; "required": false; }; }, {}, never, ["*"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare abstract class NbBaseLayoutDirectionDirective implements OnInit, OnDestroy {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    protected directionToShow: NbLayoutDirection;
    protected destroy$: Subject<void>;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService, directionToShow: NbLayoutDirection);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected updateView<T>(shouldShow: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBaseLayoutDirectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbBaseLayoutDirectionDirective, never, never, {}, {}, never, never, true, never>;
}
/**
 * Apply `nbLtr` directive to the element you need to show only when layout direction is `LTR`.
 *
 * ```html
 * <div *nbLtr>This text is visible only when layout direction is LTR</div>
 * ```
 */
declare class NbLtrDirective extends NbBaseLayoutDirectionDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLtrDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbLtrDirective, "[nbLtr]", never, {}, {}, never, never, false, never>;
}
/**
 * Apply `nbRtl` directive to the element you need to show only when layout direction is `RTL`.
 *
 * ```html
 * <div *nbRtl>This text is visible only when layout direction is RTL</div>
 * ```
 */
declare class NbRtlDirective extends NbBaseLayoutDirectionDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRtlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbRtlDirective, "[nbRtl]", never, {}, {}, never, never, false, never>;
}

declare class NbLayoutModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbLayoutModule, [typeof NbLayoutComponent, typeof NbLayoutColumnComponent, typeof NbLayoutFooterComponent, typeof NbLayoutHeaderComponent, typeof NbLtrDirective, typeof NbRtlDirective], [typeof NbSharedModule], [typeof NbLayoutComponent, typeof NbLayoutColumnComponent, typeof NbLayoutFooterComponent, typeof NbLayoutHeaderComponent, typeof NbLtrDirective, typeof NbRtlDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbLayoutModule>;
}

type NbBadgePhysicalPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'center right' | 'center left';
type NbBadgeLogicalPosition = 'top start' | 'top end' | 'bottom start' | 'bottom end' | 'center start' | 'center end';
type NbBadgePosition = NbBadgePhysicalPosition | NbBadgeLogicalPosition;
interface NbBadge {
    text?: string;
    position?: NbBadgePosition;
    status?: NbComponentOrCustomStatus;
    dotMode?: boolean;
}
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-basic-background-color:
 * badge-basic-text-color:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 * badge-control-background-color:
 * badge-control-text-color:
 */
declare class NbBadgeComponent implements NbBadge {
    protected statusService: NbStatusService;
    /**
     * Text to display
     * @type string
     */
    text: string;
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    get position(): NbBadgePosition;
    set position(value: NbBadgePosition);
    protected _defaultPosition: NbBadgePosition;
    protected _position: NbBadgePosition;
    /**
     * Shows badge as a dot. No text is shown.
     * @type boolean
     */
    get dotMode(): boolean;
    set dotMode(value: boolean);
    protected _dotMode: boolean;
    /**
     * Badge status (adds specific styles):
     * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
     */
    status: NbComponentOrCustomStatus;
    get additionalClasses(): string[];
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get top(): boolean;
    get right(): boolean;
    get bottom(): boolean;
    get left(): boolean;
    get start(): boolean;
    get end(): boolean;
    get center(): boolean;
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbBadgeComponent, "nb-badge", never, { "text": { "alias": "text"; "required": false; }; "position": { "alias": "position"; "required": false; }; "dotMode": { "alias": "dotMode"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}

interface NbMenuBag {
    tag: string;
    item: NbMenuItem;
}
type NbMenuBadgeConfig = Omit<NbBadge, 'position'>;
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
declare class NbMenuItem {
    /**
     * Item Title
     * @type {string}
     */
    title: string;
    /**
     * Item relative link (for routerLink)
     * @type {string}
     */
    link?: string;
    /**
     * Item URL (absolute)
     * @type {string}
     */
    url?: string;
    /**
     * Icon class name or icon config object
     * @type {string | NbIconConfig}
     */
    icon?: string | NbIconConfig;
    /**
     * Expanded by default
     * @type {boolean}
     */
    expanded?: boolean;
    /**
     * Badge component
     * @type {boolean}
     */
    badge?: NbMenuBadgeConfig;
    /**
     * Children items
     * @type {List<NbMenuItem>}
     */
    children?: NbMenuItem[];
    /**
     * HTML Link target
     * @type {string}
     */
    target?: string;
    /**
     * Hidden Item
     * @type {boolean}
     */
    hidden?: boolean;
    /**
     * Item is selected when partly or fully equal to the current url
     * @type {string}
     */
    pathMatch?: 'full' | 'prefix';
    /**
     * Where this is a home item
     * @type {boolean}
     */
    home?: boolean;
    /**
     * Whether the item is just a group (non-clickable)
     * @type {boolean}
     */
    group?: boolean;
    /** Whether the item skipLocationChange is true or false
     *@type {boolean}
     */
    skipLocationChange?: boolean;
    /** Map of query parameters
     *@type {Params}
     */
    queryParams?: Params;
    queryParamsHandling?: QueryParamsHandling;
    parent?: NbMenuItem;
    selected?: boolean;
    data?: any;
    fragment?: string;
    preserveFragment?: boolean;
    /** The name of a role in the ARIA specification
     * @type {string}
     */
    ariaRole?: string;
    /**
     * @returns item parents in top-down order
     */
    static getParents(item: NbMenuItem): NbMenuItem[];
    static isParent(item: NbMenuItem, possibleChild: NbMenuItem): boolean;
}
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
declare class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items: NbMenuItem[], tag?: string): void;
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    collapseAll(tag?: string): void;
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag?: string): void;
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag?: string): Observable<NbMenuBag>;
    onItemClick(): Observable<NbMenuBag>;
    onItemSelect(): Observable<NbMenuBag>;
    onItemHover(): Observable<NbMenuBag>;
    onSubmenuToggle(): Observable<NbMenuBag>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbMenuService>;
}
declare class NbMenuInternalService {
    private location;
    constructor(location: Location);
    prepareItems(items: NbMenuItem[]): void;
    selectFromUrl(items: NbMenuItem[], tag: string, collapseOther?: boolean): void;
    selectItem(item: NbMenuItem, items: NbMenuItem[], collapseOther: boolean, tag: string): void;
    collapseAll(items: NbMenuItem[], tag: string, except?: NbMenuItem): void;
    onAddItem(): Observable<{
        tag: string;
        items: NbMenuItem[];
    }>;
    onNavigateHome(): Observable<{
        tag: string;
    }>;
    onCollapseAll(): Observable<{
        tag: string;
    }>;
    onGetSelectedItem(): Observable<{
        tag: string;
        listener: BehaviorSubject<NbMenuBag>;
    }>;
    itemHover(item: NbMenuItem, tag?: string): void;
    submenuToggle(item: NbMenuItem, tag?: string): void;
    itemSelect(item: NbMenuItem, tag?: string): void;
    itemClick(item: NbMenuItem, tag?: string): void;
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    private resetSelection;
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    private collapseItems;
    private applyDefaults;
    private setParent;
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    private findItemByUrl;
    private isSelectedInUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuInternalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbMenuInternalService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare enum NbToggleStates {
    Expanded = "expanded",
    Collapsed = "collapsed"
}
declare class NbMenuItemComponent implements DoCheck, AfterViewInit, OnDestroy {
    protected menuService: NbMenuService;
    protected directionService: NbLayoutDirectionService;
    menuItem: NbMenuItem;
    badge: NbMenuBadgeConfig;
    hoverItem: EventEmitter<any>;
    toggleSubMenu: EventEmitter<any>;
    selectItem: EventEmitter<any>;
    itemClick: EventEmitter<any>;
    protected destroy$: Subject<void>;
    toggleState: NbToggleStates;
    constructor(menuService: NbMenuService, directionService: NbLayoutDirectionService);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onHoverItem(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
    getExpandStateIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbMenuItemComponent, "[nbMenuItem]", never, { "menuItem": { "alias": "menuItem"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; }, { "hoverItem": "hoverItem"; "toggleSubMenu": "toggleSubMenu"; "selectItem": "selectItem"; "itemClick": "itemClick"; }, never, never, false, never>;
}
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 * Menu badge
 * @stacked-example(Menu item badge, menu/menu-badge.component)
 *
 * @styles
 *
 * menu-background-color:
 * menu-text-color:
 * menu-text-font-family:
 * menu-text-font-size:
 * menu-text-font-weight:
 * menu-text-line-height:
 * menu-group-text-color:
 * menu-item-border-radius:
 * menu-item-padding:
 * menu-item-hover-background-color:
 * menu-item-hover-cursor:
 * menu-item-hover-text-color:
 * menu-item-icon-hover-color:
 * menu-item-active-background-color:
 * menu-item-active-text-color:
 * menu-item-icon-active-color:
 * menu-item-icon-color:
 * menu-item-icon-margin:
 * menu-item-icon-width:
 * menu-item-divider-color:
 * menu-item-divider-style:
 * menu-item-divider-width:
 * menu-submenu-background-color:
 * menu-submenu-text-color:
 * menu-submenu-margin:
 * menu-submenu-padding:
 * menu-submenu-item-border-color:
 * menu-submenu-item-border-style:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-hover-background-color:
 * menu-submenu-item-hover-border-color:
 * menu-submenu-item-hover-text-color:
 * menu-submenu-item-icon-hover-color:
 * menu-submenu-item-active-background-color:
 * menu-submenu-item-active-border-color:
 * menu-submenu-item-active-text-color:
 * menu-submenu-item-icon-active-color:
 * menu-submenu-item-active-hover-background-color:
 * menu-submenu-item-active-hover-border-color:
 * menu-submenu-item-active-hover-text-color:
 * menu-submenu-item-icon-active-hover-color:
 */
declare class NbMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    protected window: any;
    protected platformId: any;
    protected menuInternalService: NbMenuInternalService;
    protected router: Router;
    /**
     * Tags a menu with some ID, can be later used in the menu service
     * to determine which menu triggered the action, if multiple menus exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * List of menu items.
     * @type List<NbMenuItem> | List<any> | any
     */
    items: NbMenuItem[];
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    get autoCollapse(): boolean;
    set autoCollapse(value: boolean);
    protected _autoCollapse: boolean;
    static ngAcceptInputType_autoCollapse: NbBooleanInput;
    protected destroy$: Subject<void>;
    constructor(window: any, platformId: any, menuInternalService: NbMenuInternalService, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onAddItem(data: {
        tag: string;
        items: NbMenuItem[];
    }): void;
    onHoverItem(item: NbMenuItem): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
    ngOnDestroy(): void;
    protected navigateHome(): void;
    protected collapseAll(): void;
    protected getHomeItem(items: NbMenuItem[]): NbMenuItem;
    protected compareTag(tag: string): boolean;
    protected getSelectedItem(items: NbMenuItem[]): NbMenuItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbMenuComponent, "nb-menu", never, { "tag": { "alias": "tag"; "required": false; }; "items": { "alias": "items"; "required": false; }; "autoCollapse": { "alias": "autoCollapse"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbBadgeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBadgeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbBadgeModule, [typeof NbBadgeComponent], never, [typeof NbBadgeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbBadgeModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbMenuModule {
    static forRoot(): ModuleWithProviders<NbMenuModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbMenuModule, [typeof NbMenuComponent, typeof NbMenuItemComponent], [typeof NbSharedModule, typeof NbIconModule, typeof NbBadgeModule], [typeof NbMenuComponent, typeof NbMenuItemComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbMenuModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbRouteTab {
    route?: RouterLink['routerLink'] | undefined;
    title?: string | undefined;
    icon?: string | NbIconConfig | undefined;
    disabled?: boolean | undefined;
    responsive?: boolean | undefined;
    queryParams?: RouterLink['queryParams'] | undefined;
    queryParamsHandling?: RouterLink['queryParamsHandling'] | undefined;
    fragment?: RouterLink['fragment'] | undefined;
    preserveFragment?: RouterLink['preserveFragment'] | undefined;
    skipLocationChange?: RouterLink['skipLocationChange'] | undefined;
    replaceUrl?: RouterLink['replaceUrl'] | undefined;
    state?: RouterLink['state'] | undefined;
    activeLinkOptions?: RouterLinkActive['routerLinkActiveOptions'] | undefined;
}
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'home',
 *    responsive: true, // hide title before `$tabset-tab-text-hide-breakpoint` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabset-background-color:
 * route-tabset-border-radius:
 * route-tabset-shadow:
 * route-tabset-tab-background-color:
 * route-tabset-tab-padding:
 * route-tabset-tab-text-color:
 * route-tabset-tab-text-font-family:
 * route-tabset-tab-text-font-size:
 * route-tabset-tab-text-font-weight:
 * route-tabset-tab-text-line-height:
 * route-tabset-tab-text-transform:
 * route-tabset-tab-underline-width:
 * route-tabset-tab-underline-color:
 * route-tabset-tab-active-background-color:
 * route-tabset-tab-active-text-color:
 * route-tabset-tab-active-underline-color:
 * route-tabset-tab-focus-background-color:
 * route-tabset-tab-focus-text-color:
 * route-tabset-tab-focus-underline-color:
 * route-tabset-tab-hover-background-color:
 * route-tabset-tab-hover-text-color:
 * route-tabset-tab-hover-underline-color:
 * route-tabset-tab-disabled-background-color:
 * route-tabset-tab-disabled-text-color:
 * route-tabset-tab-disabled-underline-color:
 * route-tabset-divider-color:
 * route-tabset-divider-style:
 * route-tabset-divider-width:
 * route-tabset-scrollbar-color:
 * route-tabset-scrollbar-background-color:
 * route-tabset-scrollbar-width:
 */
declare class NbRouteTabsetComponent {
    fullWidthValue: boolean;
    /**
     * Tabs configuration
     */
    tabs: NbRouteTab[];
    /**
     * Options passed to `routerLinkActiveOptions` directive which set on tab links.
     * `{ exact: true }` by default.
     */
    activeLinkOptions: RouterLinkActive['routerLinkActiveOptions'];
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val: boolean);
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Emits when tab is selected
     * @type {EventEmitter<NbRouteTab>}
     */
    changeTab: EventEmitter<NbRouteTab>;
    selectTab(tab: NbRouteTab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRouteTabsetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRouteTabsetComponent, "nb-route-tabset", never, { "tabs": { "alias": "tabs"; "required": false; }; "activeLinkOptions": { "alias": "activeLinkOptions"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, { "changeTab": "changeTab"; }, never, never, false, never>;
}

declare class NbMergeConfigsPipe implements PipeTransform {
    transform<Config>(...configs: Config[]): Config;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMergeConfigsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NbMergeConfigsPipe, "nbMergeConfigs", false>;
}

declare class NbRouteTabsetModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRouteTabsetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbRouteTabsetModule, [typeof NbRouteTabsetComponent, typeof NbMergeConfigsPipe], [typeof NbSharedModule, typeof NbIconModule], [typeof NbRouteTabsetComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbRouteTabsetModule>;
}

/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
declare class NbSidebarService {
    private toggle$;
    private expand$;
    private collapse$;
    private compact$;
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle(): Observable<{
        compact: boolean;
        tag: string;
    }>;
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand(): Observable<{
        tag: string;
    }>;
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse(): Observable<{
        tag: string;
    }>;
    /**
     * Subscribe to compact evens
     * @returns Observable<{ tag: string }>
     */
    onCompact(): Observable<{
        tag: string;
    }>;
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact?: boolean, tag?: string): void;
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag?: string): void;
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag?: string): void;
    /**
     * Makes sidebar compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    compact(tag?: string): void;
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar state you need
     */
    getSidebarState(tag?: string): Observable<NbSidebarState>;
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar responsive state you need
     */
    getSidebarResponsiveState(tag?: string): Observable<NbSidebarResponsiveState>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbSidebarService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type NbSidebarState = 'expanded' | 'collapsed' | 'compacted';
type NbSidebarResponsiveState = 'mobile' | 'tablet' | 'pc';
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
declare class NbSidebarHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarHeaderComponent, "nb-sidebar-header", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
declare class NbSidebarFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarFooterComponent, "nb-sidebar-footer", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Layout sidebar component.
 *
 * @stacked-example(Showcase, sidebar/sidebar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSidebarModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbSidebarModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start/end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Compacted sidebar example:
 * @stacked-example(Compacted Sidebar, sidebar/sidebar-compacted.component)
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * In a pair with header it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * @additional-example(Right Sidebar, sidebar/sidebar-right.component)
 * @additional-example(Fixed Sidebar, sidebar/sidebar-fixed.component)
 *
 * @styles
 *
 * sidebar-background-color:
 * sidebar-text-color:
 * sidebar-text-font-family:
 * sidebar-text-font-size:
 * sidebar-text-font-weight:
 * sidebar-text-line-height:
 * sidebar-height:
 * sidebar-width:
 * sidebar-width-compact:
 * sidebar-padding:
 * sidebar-header-height:
 * sidebar-footer-height:
 * sidebar-shadow:
 * sidebar-menu-item-highlight-color:
 * sidebar-scrollbar-background-color:
 * sidebar-scrollbar-color:
 * sidebar-scrollbar-width:
 */
declare class NbSidebarComponent implements OnInit, OnDestroy {
    private sidebarService;
    private themeService;
    private element;
    private cd;
    protected readonly responsiveValueChange$: Subject<boolean>;
    protected responsiveState: NbSidebarResponsiveState;
    protected destroy$: Subject<void>;
    containerFixedValue: boolean;
    fixedValue: boolean;
    rightValue: boolean;
    leftValue: boolean;
    startValue: boolean;
    endValue: boolean;
    get expanded(): boolean;
    get collapsed(): boolean;
    get compacted(): boolean;
    /**
     * Places sidebar on the right side
     * @type {boolean}
     */
    set right(val: boolean);
    static ngAcceptInputType_right: NbBooleanInput;
    /**
     * Places sidebar on the left side
     * @type {boolean}
     */
    set left(val: boolean);
    static ngAcceptInputType_left: NbBooleanInput;
    /**
     * Places sidebar on the start edge of layout
     * @type {boolean}
     */
    set start(val: boolean);
    static ngAcceptInputType_start: NbBooleanInput;
    /**
     * Places sidebar on the end edge of layout
     * @type {boolean}
     */
    set end(val: boolean);
    static ngAcceptInputType_end: NbBooleanInput;
    /**
     * Makes sidebar fixed (shown above the layout content)
     * @type {boolean}
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    /**
     * Makes sidebar container fixed
     * @type {boolean}
     */
    set containerFixed(val: boolean);
    static ngAcceptInputType_containerFixed: NbBooleanInput;
    /**
     * Initial sidebar state, `expanded`|`collapsed`|`compacted`
     * @type {string}
     */
    get state(): NbSidebarState;
    set state(value: NbSidebarState);
    protected _state: NbSidebarState;
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    get responsive(): boolean;
    set responsive(value: boolean);
    protected _responsive: boolean;
    static ngAcceptInputType_responsive: NbBooleanInput;
    /**
     * Tags a sidebar with some ID, can be later used in the sidebar service
     * to determine which sidebar triggered the action, if multiple sidebars exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Controls on which screen sizes sidebar should be switched to compacted state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
     *
     * @type string[]
     */
    compactedBreakpoints: string[];
    /**
     * Controls on which screen sizes sidebar should be switched to collapsed state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is']`.
     *
     * @type string[]
     */
    collapsedBreakpoints: string[];
    /**
     * Emits whenever sidebar state change.
     */
    readonly stateChange: EventEmitter<NbSidebarState>;
    /**
     * Emits whenever sidebar responsive state change.
     */
    readonly responsiveStateChange: EventEmitter<NbSidebarResponsiveState>;
    constructor(sidebarService: NbSidebarService, themeService: NbThemeService, element: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    /**
     * Collapses the sidebar
     */
    collapse(): void;
    /**
     * Expands the sidebar
     */
    expand(): void;
    /**
     * Compacts the sidebar (minimizes)
     */
    compact(): void;
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * Toggle sidebar state
     *
     * ```ts
     * this.sidebar.toggle(true);
     * ```
     */
    toggle(compact?: boolean): void;
    protected subscribeToMediaQueryChange(): void;
    protected getMenuLink(element: HTMLElement): HTMLElement | undefined;
    protected updateState(state: NbSidebarState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarComponent, "nb-sidebar", never, { "right": { "alias": "right"; "required": false; }; "left": { "alias": "left"; "required": false; }; "start": { "alias": "start"; "required": false; }; "end": { "alias": "end"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "containerFixed": { "alias": "containerFixed"; "required": false; }; "state": { "alias": "state"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "tag": { "alias": "tag"; "required": false; }; "compactedBreakpoints": { "alias": "compactedBreakpoints"; "required": false; }; "collapsedBreakpoints": { "alias": "collapsedBreakpoints"; "required": false; }; }, { "stateChange": "stateChange"; "responsiveStateChange": "responsiveStateChange"; }, never, ["nb-sidebar-header", "*", "nb-sidebar-footer"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbSidebarModule {
    static forRoot(): ModuleWithProviders<NbSidebarModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSidebarModule, [typeof NbSidebarComponent, typeof NbSidebarFooterComponent, typeof NbSidebarHeaderComponent], [typeof NbSharedModule], [typeof NbSidebarComponent, typeof NbSidebarFooterComponent, typeof NbSidebarHeaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSidebarModule>;
}

/**
 * Directive to wrap tab lazy content.
 * */
declare class NbTabContentDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabContentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTabContentDirective, "[nbTabContent]", never, {}, {}, never, never, false, never>;
}

declare class NbTabTitleDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTabTitleDirective, "[nbTabTitle]", never, {}, {}, never, never, false, never>;
}

/**
 * Specific tab container.
 *
 * ```ts
 * <nb-tab tabTitle="Users"
 *   badgeText="99+"
 *   badgeStatus="danger">
 *   <p>List of <strong>users</strong>.</p>
 * </nb-tab>
 * ```
 */
declare class NbTabComponent {
    tabContentDirective: NbTabContentDirective;
    tabTitleDirective: NbTabTitleDirective;
    /**
     * Tab title
     * @type {string}
     */
    tabTitle: string;
    /**
     * Tab id
     * @type {string}
     */
    tabId: string;
    /**
     * Use badge dot mode
     * @type {boolean}
     */
    get badgeDot(): boolean;
    set badgeDot(val: boolean);
    protected _badgeDot: boolean;
    static ngAcceptInputType_badgeDot: NbBooleanInput;
    /**
     * Tab icon name or icon config object
     * @type {string | NbIconConfig}
     */
    tabIcon: string | NbIconConfig;
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled(): boolean;
    set disabled(val: boolean);
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Show only icons when width is smaller than `tabs-icon-only-max-width`
     * @type {boolean}
     */
    set responsive(val: boolean);
    get responsive(): boolean;
    static ngAcceptInputType_responsive: NbBooleanInput;
    /**
     * Makes this tab a link that initiates navigation to a route
     * @type string
     */
    route: string;
    activeValue: boolean;
    responsiveValue: boolean;
    disabledValue: boolean;
    /**
     * Specifies active tab
     * @returns {boolean}
     */
    get active(): boolean;
    set active(val: boolean);
    static ngAcceptInputType_active: NbBooleanInput;
    /**
     * Lazy load content before tab selection
     * @docs-private
     * @deprecated This setting never worked. Wrap content into a `nbTabContent` to make it lazy.
     * @breaking-change Remove 12.0.0
     */
    set lazyLoad(val: boolean);
    static ngAcceptInputType_lazyLoad: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    /**
     * @deprecated
     * @breaking-change Remove 12.0.0
     * @docs-private
     */
    init: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTabComponent, "nb-tab", never, { "tabTitle": { "alias": "tabTitle"; "required": false; }; "tabId": { "alias": "tabId"; "required": false; }; "badgeDot": { "alias": "badgeDot"; "required": false; }; "tabIcon": { "alias": "tabIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "route": { "alias": "route"; "required": false; }; "active": { "alias": "active"; "required": false; }; "lazyLoad": { "alias": "lazyLoad"; "required": false; }; "badgeText": { "alias": "badgeText"; "required": false; }; "badgeStatus": { "alias": "badgeStatus"; "required": false; }; "badgePosition": { "alias": "badgePosition"; "required": false; }; }, {}, ["tabContentDirective", "tabTitleDirective"], ["*"], false, never>;
}
/**
 *
 * Dynamic tabset component.
 * @stacked-example(Showcase, tabset/tabset-showcase.component)
 *
 * Basic tabset example
 *
 * ```html
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 * ```
 *
 * ### Installation
 *
 * Import `NbTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * It is also possible to set a badge to a particular tab:
 * @stacked-example(Tab With Badge, tabset/tabset-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, tabset/tabset-width.component)
 *
 * `tabIcon` should be used to add an icon to the tab. Icon can also be combined with title.
 * `responsive` tab property if set allows you to hide the title on smaller screens
 * (`$tabset-tab-text-hide-breakpoint` variable) for better responsive behaviour.
 * You can open the following example and make
 * your screen smaller - titles will be hidden in the last tabset in the list:
 * @stacked-example(Icon, tabset/tabset-icon.component)
 *
 * It is also possible to disable a tab using `disabled` property:
 * @stacked-example(Disabled Tab, tabset/tabset-disabled.component)
 *
 * By default, the tab contents instantiated straightaway. To make tab contents load lazy,
 * declare the body of a tab in a template with `nbTabContent` directive.
 * ```html
 * <nb-tabset>
 *   <nb-tab>
 *     <some-component *nbTabContent>Lazy content</some-component>
 *   </nb-tab>
 *   <nb-tab>
 *     <ng-template nbTabContent>
 *       Lazy content with template syntax
 *     </ng-template>
 *   </nb-tab>
 * </nb-tabset>
 * ```
 *
 * You can provide a template as a tab title via `<ng-template nbTabTitle>`:
 * @stacked-example(Tab title template, tabset/tabset-template-title.component)
 *
 * @styles
 *
 * tabset-background-color:
 * tabset-border-radius:
 * tabset-shadow:
 * tabset-tab-background-color:
 * tabset-tab-padding:
 * tabset-tab-text-color:
 * tabset-tab-text-font-family:
 * tabset-tab-text-font-size:
 * tabset-tab-text-font-weight:
 * tabset-tab-text-line-height:
 * tabset-tab-text-transform:
 * tabset-tab-underline-width:
 * tabset-tab-underline-color:
 * tabset-tab-active-background-color:
 * tabset-tab-active-text-color:
 * tabset-tab-active-underline-color:
 * tabset-tab-focus-background-color:
 * tabset-tab-focus-text-color:
 * tabset-tab-focus-underline-color:
 * tabset-tab-hover-background-color:
 * tabset-tab-hover-text-color:
 * tabset-tab-hover-underline-color:
 * tabset-tab-disabled-background-color:
 * tabset-tab-disabled-text-color:
 * tabset-tab-disabled-underline-color:
 * tabset-divider-color:
 * tabset-divider-style:
 * tabset-divider-width:
 * tabset-content-background-color:
 * tabset-content-padding:
 * tabset-content-text-color:
 * tabset-content-text-font-family:
 * tabset-content-text-font-size:
 * tabset-content-text-font-weight:
 * tabset-content-text-line-height:
 * tabset-scrollbar-color:
 * tabset-scrollbar-background-color:
 * tabset-scrollbar-width:
 */
declare class NbTabsetComponent implements AfterContentInit, OnDestroy {
    private route;
    private changeDetectorRef;
    tabs: QueryList<NbTabComponent>;
    fullWidthValue: boolean;
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val: boolean);
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * If specified - tabset listens to this parameter and selects corresponding tab.
     * @type {string}
     */
    routeParam: string;
    /**
     * Emits when tab is selected
     * @type EventEmitter<any>
     */
    changeTab: EventEmitter<any>;
    private destroy$;
    constructor(route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    selectTab(selectedTab: NbTabComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabsetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTabsetComponent, "nb-tabset", never, { "fullWidth": { "alias": "fullWidth"; "required": false; }; "routeParam": { "alias": "routeParam"; "required": false; }; }, { "changeTab": "changeTab"; }, ["tabs"], ["nb-tab"], false, never>;
}

declare class NbTabsetModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabsetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTabsetModule, [typeof NbTabsetComponent, typeof NbTabComponent, typeof NbTabContentDirective, typeof NbTabTitleDirective], [typeof NbSharedModule, typeof NbBadgeModule, typeof NbIconModule], [typeof NbTabsetComponent, typeof NbTabComponent, typeof NbTabContentDirective, typeof NbTabTitleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTabsetModule>;
}

/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 * Component shape could be controlled with `shape` input.
 * @stacked-example(Shapes, user/user-shape.component)
 *
 * @styles
 *
 * user-picture-box-background-color:
 * user-picture-box-border-color:
 * user-picture-box-border-width:
 * user-initials-text-color:
 * user-initials-text-font-family:
 * user-initials-text-font-weight:
 * user-name-text-color:
 * user-name-text-font-family:
 * user-name-text-font-weight:
 * user-title-text-color:
 * user-title-text-font-family:
 * user-title-text-font-weight:
 * user-rectangle-border-radius:
 * user-semi-round-border-radius:
 * user-round-border-radius:
 * user-tiny-height:
 * user-tiny-width:
 * user-tiny-initials-text-font-size:
 * user-tiny-initials-text-line-height:
 * user-tiny-name-text-font-size:
 * user-tiny-name-text-line-height:
 * user-tiny-title-text-font-size:
 * user-tiny-title-text-line-height:
 * user-small-height:
 * user-small-width:
 * user-small-initials-text-font-size:
 * user-small-initials-text-line-height:
 * user-small-name-text-font-size:
 * user-small-name-text-line-height:
 * user-small-title-text-font-size:
 * user-small-title-text-line-height:
 * user-medium-height:
 * user-medium-width:
 * user-medium-initials-text-font-size:
 * user-medium-initials-text-line-height:
 * user-medium-name-text-font-size:
 * user-medium-name-text-line-height:
 * user-medium-title-text-font-size:
 * user-medium-title-text-line-height:
 * user-large-height:
 * user-large-width:
 * user-large-initials-text-font-size:
 * user-large-initials-text-line-height:
 * user-large-name-text-font-size:
 * user-large-name-text-line-height:
 * user-large-title-text-font-size:
 * user-large-title-text-line-height:
 * user-giant-height:
 * user-giant-width:
 * user-giant-initials-text-font-size:
 * user-giant-initials-text-line-height:
 * user-giant-name-text-font-size:
 * user-giant-name-text-line-height:
 * user-giant-title-text-font-size:
 * user-giant-title-text-line-height:
 */
declare class NbUserComponent {
    private domSanitizer;
    imageBackgroundStyle: SafeStyle;
    /**
     * Specifies a name to be shown on the right of a user picture
     * @type string
     */
    name: string;
    /**
     * Specifies a title to be shown under the **name**
     * @type string
     */
    title: string;
    /**
     * Absolute path to a user picture or base64 image.
     * User name initials will be shown if no picture specified (JD for John Doe).
     * @type string
     */
    set picture(value: string);
    /**
     * Color of the area shown when no picture specified
     * @type string
     */
    color: string;
    /**
     * Size of the component.
     * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
     */
    size: NbComponentSize;
    /**
     * Shape of the picture box.
     * Possible values: `rectangle`, `semi-round`, `round`.
     */
    shape: NbComponentShape;
    /**
     * Whether to show a user name or not
     */
    get showName(): boolean;
    set showName(val: boolean);
    private _showName;
    static ngAcceptInputType_showName: NbBooleanInput;
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    get showTitle(): boolean;
    set showTitle(val: boolean);
    private _showTitle;
    static ngAcceptInputType_showTitle: NbBooleanInput;
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    get showInitials(): boolean;
    set showInitials(val: boolean);
    private _showInitials;
    static ngAcceptInputType_showInitials: NbBooleanInput;
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    get onlyPicture(): boolean;
    set onlyPicture(val: boolean);
    static ngAcceptInputType_onlyPicture: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get rectangle(): boolean;
    get semiRound(): boolean;
    get round(): boolean;
    constructor(domSanitizer: DomSanitizer);
    getInitials(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbUserComponent, "nb-user", never, { "name": { "alias": "name"; "required": false; }; "title": { "alias": "title"; "required": false; }; "picture": { "alias": "picture"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "showName": { "alias": "showName"; "required": false; }; "showTitle": { "alias": "showTitle"; "required": false; }; "showInitials": { "alias": "showInitials"; "required": false; }; "onlyPicture": { "alias": "onlyPicture"; "required": false; }; "badgeText": { "alias": "badgeText"; "required": false; }; "badgeStatus": { "alias": "badgeStatus"; "required": false; }; "badgePosition": { "alias": "badgePosition"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbUserModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbUserModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbUserModule, [typeof NbUserComponent], [typeof NbSharedModule, typeof NbBadgeModule], [typeof NbUserComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbUserModule>;
}

/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
declare class NbActionComponent {
    /**
     * Router link to use
     * @type string
     */
    link: string;
    /**
     * Regular HREF link
     * @type: string
     */
    href: string;
    /**
     * Optional title for mouseover
     * @type string
     */
    title: string;
    /**
     * Icon name or config object
     * @type {string | NbIconConfig}
     */
    icon: string | NbIconConfig;
    /**
     * Visually disables the item
     * @type boolean
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Use badge dot mode
     * @type boolean
     */
    get badgeDot(): boolean;
    set badgeDot(value: boolean);
    protected _badgeDot: boolean;
    static ngAcceptInputType_badgeDot: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbActionComponent, "nb-action", never, { "link": { "alias": "link"; "required": false; }; "href": { "alias": "href"; "required": false; }; "title": { "alias": "title"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "badgeDot": { "alias": "badgeDot"; "required": false; }; "badgeText": { "alias": "badgeText"; "required": false; }; "badgeStatus": { "alias": "badgeStatus"; "required": false; }; "badgePosition": { "alias": "badgePosition"; "required": false; }; }, {}, never, ["*"], false, never>;
}
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * Action dot mode
 * @stacked-example(Action badge in dot mode, action/action-dot-mode.component)
 *
 * @styles
 *
 * actions-background-color:
 * actions-divider-color:
 * actions-divider-style:
 * actions-divider-width:
 * actions-icon-color:
 * actions-text-color:
 * actions-text-font-family:
 * actions-text-font-weight:
 * actions-text-line-height:
 * actions-disabled-icon-color:
 * actions-disabled-text-color:
 * actions-tiny-height:
 * actions-tiny-icon-height:
 * actions-tiny-padding:
 * actions-tiny-text-font-size:
 * actions-small-height:
 * actions-small-icon-height:
 * actions-small-padding:
 * actions-small-text-font-size:
 * actions-medium-height:
 * actions-medium-icon-height:
 * actions-medium-padding:
 * actions-medium-text-font-size:
 * actions-large-height:
 * actions-large-icon-height:
 * actions-large-padding:
 * actions-large-text-font-size:
 * actions-giant-height:
 * actions-giant-icon-height:
 * actions-giant-padding:
 * actions-giant-text-font-size:
 */
declare class NbActionsComponent {
    /**
     * Size of the component: 'tiny', 'small' (default), 'medium', 'large', 'giant'
     */
    get size(): NbComponentSize;
    set size(value: NbComponentSize);
    protected _size: NbComponentSize;
    /**
     * Component will fill full width of the container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbActionsComponent, "nb-actions", never, { "size": { "alias": "size"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, {}, never, ["nb-action"], false, never>;
}

declare class NbActionsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbActionsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbActionsModule, [typeof NbActionComponent, typeof NbActionsComponent], [typeof NbSharedModule, typeof NbBadgeModule, typeof NbIconModule], [typeof NbActionComponent, typeof NbActionsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbActionsModule>;
}

/**
 * Search component service, connects your code to a page-level search component.
 */
declare class NbSearchService {
    private searchSubmittings$;
    private searchActivations$;
    private searchDeactivations$;
    private searchInput$;
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType: string, tag?: string): void;
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType: string, tag?: string): void;
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term: string, tag?: string): void;
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    searchInput(term: string, tag?: string): void;
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit(): Observable<{
        term: string;
        tag?: string;
    }>;
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchInput(): Observable<{
        term: string;
        tag?: string;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbSearchService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
declare class NbSearchFieldComponent implements OnChanges, AfterViewInit {
    static readonly TYPE_MODAL_ZOOMIN = "modal-zoomin";
    static readonly TYPE_ROTATE_LAYOUT = "rotate-layout";
    static readonly TYPE_MODAL_MOVE = "modal-move";
    static readonly TYPE_CURTAIN = "curtain";
    static readonly TYPE_COLUMN_CURTAIN = "column-curtain";
    static readonly TYPE_MODAL_DROP = "modal-drop";
    static readonly TYPE_MODAL_HALF = "modal-half";
    type: string;
    placeholder: string;
    hint: string;
    show: boolean;
    close: EventEmitter<any>;
    search: EventEmitter<any>;
    searchInput: EventEmitter<any>;
    inputElement: ElementRef<HTMLInputElement>;
    get showClass(): boolean;
    get modalZoomin(): boolean;
    get rotateLayout(): boolean;
    get modalMove(): boolean;
    get curtain(): boolean;
    get columnCurtain(): boolean;
    get modalDrop(): boolean;
    get modalHalf(): boolean;
    ngOnChanges({ show }: SimpleChanges): void;
    ngAfterViewInit(): void;
    emitClose(): void;
    submitSearch(term: any): void;
    emitSearchInput(term: string): void;
    focusInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSearchFieldComponent, "nb-search-field", never, { "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "show": { "alias": "show"; "required": false; }; }, { "close": "close"; "search": "search"; "searchInput": "searchInput"; }, never, never, false, never>;
}
type NbSearchType = 'modal-zoomin' | 'rotate-layout' | 'modal-move' | 'curtain' | 'column-curtain' | 'modal-drop' | 'modal-half';
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-background-color:
 * search-divider-color:
 * search-divider-style:
 * search-divider-width:
 * search-extra-background-color:
 * search-text-color:
 * search-text-font-family:
 * search-text-font-size:
 * search-text-font-weight:
 * search-text-line-height:
 * search-placeholder-text-color:
 * search-info-text-color:
 * search-info-text-font-family:
 * search-info-text-font-size:
 * search-info-text-font-weight:
 * search-info-text-line-height:
 */
declare class NbSearchComponent implements OnInit, OnDestroy {
    private searchService;
    private themeService;
    private router;
    private overlayService;
    private changeDetector;
    private destroy$;
    private overlayRef;
    showSearchField: boolean;
    /**
     * Tags a search with some ID, can be later used in the search service
     * to determine which search component triggered the action, if multiple searches exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Search input placeholder
     * @type {string}
     */
    placeholder: string;
    /**
     * Hint showing under the input field to improve user experience
     *
     * @type {string}
     */
    hint: string;
    /**
     * Search design type, available types are
     * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
     * @type {string}
     */
    type: NbSearchType;
    searchFieldPortal: NbPortalDirective;
    searchButton: ElementRef<HTMLElement>;
    constructor(searchService: NbSearchService, themeService: NbThemeService, router: Router, overlayService: NbOverlayService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openSearch(): void;
    hideSearch(): void;
    search(term: any): void;
    emitInput(term: string): void;
    emitActivate(): void;
    emitDeactivate(): void;
    private removeLayoutClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSearchComponent, "nb-search", never, { "tag": { "alias": "tag"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbCdkAdapterModule {
    static forRoot(): ModuleWithProviders<NbCdkAdapterModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCdkAdapterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCdkAdapterModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCdkAdapterModule>;
}

declare class NbOverlayModule {
    static forRoot(): ModuleWithProviders<NbOverlayModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbOverlayModule, [typeof NbPositionedContainerComponent, typeof NbOverlayContainerComponent], [typeof NbCdkMappingModule, typeof NbSharedModule], [typeof NbCdkMappingModule, typeof NbCdkAdapterModule, typeof NbOverlayContainerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbOverlayModule>;
}

declare class NbSearchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSearchModule, [typeof NbSearchComponent, typeof NbSearchFieldComponent], [typeof NbSharedModule, typeof NbOverlayModule, typeof NbIconModule, typeof NbButtonModule], [typeof NbSearchComponent, typeof NbSearchFieldComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSearchModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Checkbox is available in multiple colors using `status` property:
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * Indeterminate state is also supported:
 * @stacked-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * Checkbox can be disabled via `disabled` attribute.
 * @stacked-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-text-space:
 * checkbox-padding:
 * checkbox-focus-inset-shadow-length:
 * checkbox-basic-text-color:
 * checkbox-basic-background-color:
 * checkbox-basic-border-color:
 * checkbox-basic-checked-background-color:
 * checkbox-basic-checked-border-color:
 * checkbox-basic-checked-checkmark-color:
 * checkbox-basic-indeterminate-background-color:
 * checkbox-basic-indeterminate-border-color:
 * checkbox-basic-indeterminate-checkmark-color:
 * checkbox-basic-focus-background-color:
 * checkbox-basic-focus-border-color:
 * checkbox-basic-focus-checked-background-color:
 * checkbox-basic-focus-checked-border-color:
 * checkbox-basic-hover-background-color:
 * checkbox-basic-hover-border-color:
 * checkbox-basic-hover-checked-background-color:
 * checkbox-basic-hover-checked-border-color:
 * checkbox-basic-active-background-color:
 * checkbox-basic-active-border-color:
 * checkbox-basic-active-checked-background-color:
 * checkbox-basic-active-checked-border-color:
 * checkbox-basic-disabled-background-color:
 * checkbox-basic-disabled-border-color:
 * checkbox-basic-disabled-checkmark-color:
 * checkbox-basic-disabled-text-color:
 * checkbox-basic-disabled-checked-background-color:
 * checkbox-primary-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-background-color:
 * checkbox-primary-focus-border-color:
 * checkbox-primary-focus-checked-background-color:
 * checkbox-primary-focus-checked-border-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-hover-checked-background-color:
 * checkbox-primary-hover-checked-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-primary-active-checked-background-color:
 * checkbox-primary-active-checked-border-color:
 * checkbox-primary-disabled-background-color:
 * checkbox-primary-disabled-border-color:
 * checkbox-primary-disabled-checkmark-color:
 * checkbox-primary-disabled-text-color:
 * checkbox-primary-disabled-checked-background-color:
 * checkbox-success-text-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-background-color:
 * checkbox-success-focus-border-color:
 * checkbox-success-focus-checked-background-color:
 * checkbox-success-focus-checked-border-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-hover-checked-background-color:
 * checkbox-success-hover-checked-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-success-active-checked-background-color:
 * checkbox-success-active-checked-border-color:
 * checkbox-success-disabled-background-color:
 * checkbox-success-disabled-border-color:
 * checkbox-success-disabled-checkmark-color:
 * checkbox-success-disabled-text-color:
 * checkbox-success-disabled-checked-background-color:
 * checkbox-info-text-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-background-color:
 * checkbox-info-focus-border-color:
 * checkbox-info-focus-checked-background-color:
 * checkbox-info-focus-checked-border-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-hover-checked-background-color:
 * checkbox-info-hover-checked-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 * checkbox-info-active-checked-background-color:
 * checkbox-info-active-checked-border-color:
 * checkbox-info-disabled-background-color:
 * checkbox-info-disabled-border-color:
 * checkbox-info-disabled-checkmark-color:
 * checkbox-info-disabled-text-color:
 * checkbox-info-disabled-checked-background-color:
 * checkbox-warning-text-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-background-color:
 * checkbox-warning-focus-border-color:
 * checkbox-warning-focus-checked-background-color:
 * checkbox-warning-focus-checked-border-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-hover-checked-background-color:
 * checkbox-warning-hover-checked-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-warning-active-checked-background-color:
 * checkbox-warning-active-checked-border-color:
 * checkbox-warning-disabled-background-color:
 * checkbox-warning-disabled-border-color:
 * checkbox-warning-disabled-checkmark-color:
 * checkbox-warning-disabled-text-color:
 * checkbox-warning-disabled-checked-background-color:
 * checkbox-danger-text-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-background-color:
 * checkbox-danger-focus-border-color:
 * checkbox-danger-focus-checked-background-color:
 * checkbox-danger-focus-checked-border-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-hover-checked-background-color:
 * checkbox-danger-hover-checked-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-danger-active-checked-background-color:
 * checkbox-danger-active-checked-border-color:
 * checkbox-danger-disabled-background-color:
 * checkbox-danger-disabled-border-color:
 * checkbox-danger-disabled-checkmark-color:
 * checkbox-danger-disabled-text-color:
 * checkbox-danger-disabled-checked-background-color:
 * checkbox-control-text-color:
 * checkbox-control-background-color:
 * checkbox-control-border-color:
 * checkbox-control-checked-background-color:
 * checkbox-control-checked-border-color:
 * checkbox-control-checked-checkmark-color:
 * checkbox-control-indeterminate-background-color:
 * checkbox-control-indeterminate-border-color:
 * checkbox-control-indeterminate-checkmark-color:
 * checkbox-control-focus-background-color:
 * checkbox-control-focus-border-color:
 * checkbox-control-focus-checked-background-color:
 * checkbox-control-focus-checked-border-color:
 * checkbox-control-hover-background-color:
 * checkbox-control-hover-border-color:
 * checkbox-control-hover-checked-background-color:
 * checkbox-control-hover-checked-border-color:
 * checkbox-control-active-background-color:
 * checkbox-control-active-border-color:
 * checkbox-control-active-checked-background-color:
 * checkbox-control-active-checked-border-color:
 * checkbox-control-disabled-background-color:
 * checkbox-control-disabled-border-color:
 * checkbox-control-disabled-checkmark-color:
 * checkbox-control-disabled-text-color:
 * checkbox-control-disabled-checked-background-color:
 */
declare class NbCheckboxComponent implements AfterViewInit, ControlValueAccessor {
    private changeDetector;
    private renderer;
    private hostElement;
    private zone;
    private statusService;
    onChange: any;
    onTouched: any;
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    static ngAcceptInputType_checked: NbBooleanInput;
    /**
     * Controls input disabled state
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Checkbox status.
     * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Controls checkbox indeterminate state
     */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    private _indeterminate;
    static ngAcceptInputType_indeterminate: NbBooleanInput;
    /**
     * Output when checked state is changed by a user
     * @type EventEmitter<boolean>
     */
    checkedChange: EventEmitter<boolean>;
    get primary(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get info(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(changeDetector: ChangeDetectorRef, renderer: Renderer2, hostElement: ElementRef<HTMLElement>, zone: NgZone, statusService: NbStatusService);
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    setTouched(): void;
    updateValueAndIndeterminate(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCheckboxComponent, "nb-checkbox", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "status": { "alias": "status"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
}

declare class NbCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCheckboxModule, [typeof NbCheckboxComponent], [typeof NbSharedModule, typeof NbIconModule], [typeof NbCheckboxComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCheckboxModule>;
}

interface NbDynamicOverlayController {
    show(): any;
    hide(): any;
    toggle(): any;
    rebuild(): any;
}
declare class NbDynamicOverlay {
    protected overlay: NbOverlayService;
    protected zone: NgZone;
    protected overlayContainer: NbOverlayContainer;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<NbRenderableContainer>;
    protected componentType: Type<NbRenderableContainer>;
    protected context: Object;
    protected content: NbOverlayContent;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayConfig: NbOverlayConfig;
    protected lastAppliedPosition: NbPosition;
    protected disabled: boolean;
    protected positionStrategyChange$: Subject<void>;
    protected isShown$: BehaviorSubject<boolean>;
    protected destroy$: Subject<void>;
    protected overlayDestroy$: Subject<i1.OverlayRef>;
    get isAttached(): boolean;
    get isShown(): Observable<boolean>;
    constructor(overlay: NbOverlayService, zone: NgZone, overlayContainer: NbOverlayContainer);
    create(componentType: Type<NbRenderableContainer>, content: NbOverlayContent, context: Object, positionStrategy: NbAdjustableConnectedPositionStrategy, overlayConfig?: NbOverlayConfig, disabled?: boolean): this;
    setContent(content: NbOverlayContent): void;
    setContext(context: Object): void;
    setContentAndContext(content: NbOverlayContent, context: Object): void;
    setComponent(componentType: Type<NbRenderableContainer>): void;
    setPositionStrategy(positionStrategy: NbAdjustableConnectedPositionStrategy): void;
    setOverlayConfig(overlayConfig: NbOverlayConfig): void;
    setDisabled(disabled: boolean): void;
    show(): any;
    hide(): void;
    toggle(): void;
    dispose(): void;
    getContainer(): ComponentRef<NbRenderableContainer>;
    protected createOverlay(): void;
    protected renderContainer(): void;
    protected updateContext(): void;
    protected createContainerContext(): Object;
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    protected updatePositionWhenStable(overlay: NbOverlayRef): void;
    protected updatePosition(): void;
    protected hasOverlayInContainer(): boolean;
    protected disposeOverlayRef(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDynamicOverlay, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDynamicOverlay>;
}

declare class NbDynamicOverlayChange extends SimpleChange {
    constructor(previousValue: any, currentValue: any, firstChange?: boolean);
    isChanged(): boolean;
}
declare class NbDynamicOverlayHandler {
    private positionBuilder;
    private triggerStrategyBuilder;
    private dynamicOverlayService;
    private directionService;
    protected _componentType: Type<NbRenderableContainer>;
    protected _host: ElementRef;
    protected _context: Object;
    protected _content: NbOverlayContent;
    protected _trigger: NbTrigger;
    protected _disabled: boolean;
    protected _position: NbPosition;
    protected _adjustment: NbAdjustment;
    protected _offset: number;
    protected _overlayConfig: NbOverlayConfig;
    protected dynamicOverlay: NbDynamicOverlay;
    protected triggerStrategy: NbTriggerStrategy;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected changes: {
        [key: string]: NbDynamicOverlayChange;
    };
    protected destroy$: Subject<void>;
    constructor(positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, dynamicOverlayService: NbDynamicOverlay, directionService: NbLayoutDirectionService);
    host(host: ElementRef): this;
    trigger(trigger: NbTrigger): this;
    disabled(disabled: boolean): this;
    position(position: NbPosition): this;
    adjustment(adjustment: NbAdjustment): this;
    componentType(componentType: Type<NbRenderableContainer>): this;
    content(content: NbOverlayContent): this;
    context(context: {}): this;
    offset(offset: number): this;
    overlayConfig(overlayConfig: NbOverlayConfig): this;
    build(): NbDynamicOverlay;
    rebuild(): NbDynamicOverlay;
    connect(): void;
    disconnect(): void;
    destroy(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected subscribeOnTriggers(dynamicOverlay: NbDynamicOverlay): void;
    protected subscribeOnDirectionChange(): void;
    protected isContainerRerenderRequired(): boolean;
    protected isPositionStrategyUpdateRequired(): boolean;
    protected isTriggerStrategyUpdateRequired(): boolean;
    protected isComponentTypeUpdateRequired(): boolean;
    private isOverlayConfigUpdateRequired;
    protected isComponentTypeUpdated(): boolean;
    protected isContentUpdated(): boolean;
    protected isContextUpdated(): boolean;
    protected isAdjustmentUpdated(): boolean;
    protected isPositionUpdated(): boolean;
    protected isHostUpdated(): boolean;
    protected isTriggerUpdated(): boolean;
    protected isOffsetUpdated(): boolean;
    protected isOverlayConfigUpdated(): boolean;
    protected isDisabledUpdated(): boolean;
    protected clearChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDynamicOverlayHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDynamicOverlayHandler>;
}

/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
declare class NbPopoverComponent extends NbPositionedContainerComponent implements NbRenderableContainer {
    overlayContainer: NbOverlayContainerComponent;
    content: any;
    context: Object;
    renderContent(): void;
    protected detachContent(): void;
    protected attachContent(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    protected attachString(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbPopoverComponent, "nb-popover", never, { "content": { "alias": "content"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you want to disable this behaviour set it `noop`.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" nbPopoverAdjustment="noop"></button>
 * ```
 *
 * Popover has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, popover/popover-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, popover/popover-noop.component)
 *
 * Below are examples for manual popover settings control, both via template binding and code.
 * @stacked-example(Popover Settings, popover/popover-dynamic.component)
 *
 * Please note, while manipulating Popover setting via code, you need to call `rebuild()` method to apply the settings
 * changed.
 * @stacked-example(Popover Settings Code, popover/popover-dynamic-code.component)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
declare class NbPopoverDirective implements NbDynamicOverlayController, OnChanges, AfterViewInit, OnDestroy, OnInit {
    protected hostRef: ElementRef;
    protected dynamicOverlayHandler: NbDynamicOverlayHandler;
    protected popoverComponent: typeof NbPopoverComponent;
    protected dynamicOverlay: NbDynamicOverlay;
    protected destroy$: Subject<void>;
    /**
     * Popover content which will be rendered in NbArrowedOverlayContainerComponent.
     * Available content: template ref, component and any primitive.
     * */
    content: NbOverlayContent;
    /**
     * Container content context. Will be applied to the rendered component.
     * */
    context: Object;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     * */
    position: NbPosition;
    static ngAcceptInputType_position: NbPositionValues;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatically adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     * */
    get adjustment(): NbAdjustment;
    set adjustment(value: NbAdjustment);
    protected _adjustment: NbAdjustment;
    static ngAcceptInputType_adjustment: NbAdjustmentValues;
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    static ngAcceptInputType_trigger: NbTriggerValues;
    /**
     * Sets popover offset
     * */
    offset: number;
    /** Disables the display of the tooltip. */
    disabled: boolean;
    get popoverClass(): string;
    set popoverClass(value: string);
    _popoverClass: string;
    nbPopoverShowStateChange: EventEmitter<{
        isShown: boolean;
    }>;
    protected overlayConfig: NbOverlayConfig;
    get isShown(): boolean;
    constructor(hostRef: ElementRef, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPopoverDirective, "[nbPopover]", ["nbPopover"], { "content": { "alias": "nbPopover"; "required": false; }; "context": { "alias": "nbPopoverContext"; "required": false; }; "position": { "alias": "nbPopoverPlacement"; "required": false; }; "adjustment": { "alias": "nbPopoverAdjustment"; "required": false; }; "trigger": { "alias": "nbPopoverTrigger"; "required": false; }; "offset": { "alias": "nbPopoverOffset"; "required": false; }; "disabled": { "alias": "nbTooltipDisabled"; "required": false; }; "popoverClass": { "alias": "nbPopoverClass"; "required": false; }; }, { "nbPopoverShowStateChange": "nbPopoverShowStateChange"; }, never, never, false, never>;
}

declare class NbPopoverModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPopoverModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbPopoverModule, [typeof NbPopoverDirective, typeof NbPopoverComponent], [typeof NbOverlayModule], [typeof NbPopoverDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbPopoverModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbContextMenuContext {
    items: NbMenuItem[];
    tag: string;
    position: NbPosition;
}
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * Also make sure `NbMenuModule` is imported to your `app.module`.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * Context menu has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, context-menu/context-menu-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, context-menu/context-menu-noop.component)
 *
 * @stacked-example(Manual Control, context-menu/context-menu-right-click.component)
 * */
declare class NbContextMenuDirective implements NbDynamicOverlayController, OnChanges, AfterViewInit, OnDestroy, OnInit {
    private hostRef;
    private menuService;
    private dynamicOverlayHandler;
    contextMenuHost: boolean;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    get position(): NbPosition;
    set position(value: NbPosition);
    _position: NbPosition;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     * */
    adjustment: NbAdjustment;
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    get tag(): string;
    set tag(value: string);
    _tag: string;
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    get items(): NbMenuItem[];
    set items(items: NbMenuItem[]);
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    static ngAcceptInputType_trigger: NbTriggerValues;
    get contextMenuClass(): string;
    set contextMenuClass(value: string);
    _contextMenuClass: string;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<any>;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayConfig: NbOverlayConfig;
    protected overlayContext: NbContextMenuContext;
    protected destroy$: Subject<void>;
    private _items;
    private dynamicOverlay;
    constructor(hostRef: ElementRef, menuService: NbMenuService, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
    private validateItems;
    private subscribeOnItemClick;
    protected updateOverlayContext(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbContextMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbContextMenuDirective, "[nbContextMenu]", never, { "position": { "alias": "nbContextMenuPlacement"; "required": false; }; "adjustment": { "alias": "nbContextMenuAdjustment"; "required": false; }; "tag": { "alias": "nbContextMenuTag"; "required": false; }; "items": { "alias": "nbContextMenu"; "required": false; }; "trigger": { "alias": "nbContextMenuTrigger"; "required": false; }; "contextMenuClass": { "alias": "nbContextMenuClass"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
declare class NbContextMenuComponent extends NbPositionedContainerComponent implements NbRenderableContainer {
    items: NbMenuItem[];
    tag: string;
    context: {
        items: NbMenuItem[];
        tag?: string;
    };
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbContextMenuComponent, "nb-context-menu", never, { "items": { "alias": "items"; "required": false; }; "tag": { "alias": "tag"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbContextMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbContextMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbContextMenuModule, [typeof NbContextMenuDirective, typeof NbContextMenuComponent], [typeof i4.CommonModule, typeof NbOverlayModule, typeof NbMenuModule], [typeof NbContextMenuDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbContextMenuModule>;
}

/**
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-animation-duration:
 * progress-bar-border-radius:
 * progress-bar-text-font-family:
 * progress-bar-tiny-height:
 * progress-bar-tiny-text-font-size:
 * progress-bar-tiny-text-font-weight:
 * progress-bar-tiny-text-line-height:
 * progress-bar-small-height:
 * progress-bar-small-text-font-size:
 * progress-bar-small-text-font-weight:
 * progress-bar-small-text-line-height:
 * progress-bar-medium-height:
 * progress-bar-medium-text-font-size:
 * progress-bar-medium-text-font-weight:
 * progress-bar-medium-text-line-height:
 * progress-bar-large-height:
 * progress-bar-large-text-font-size:
 * progress-bar-large-text-font-weight:
 * progress-bar-large-text-line-height:
 * progress-bar-giant-height:
 * progress-bar-giant-text-font-size:
 * progress-bar-giant-text-font-weight:
 * progress-bar-giant-text-line-height:
 * progress-bar-basic-background-color:
 * progress-bar-basic-filled-background-color:
 * progress-bar-basic-text-color:
 * progress-bar-primary-background-color:
 * progress-bar-primary-filled-background-color:
 * progress-bar-primary-text-color:
 * progress-bar-success-background-color:
 * progress-bar-success-filled-background-color:
 * progress-bar-success-text-color:
 * progress-bar-info-background-color:
 * progress-bar-info-filled-background-color:
 * progress-bar-info-text-color:
 * progress-bar-warning-background-color:
 * progress-bar-warning-filled-background-color:
 * progress-bar-warning-text-color:
 * progress-bar-danger-background-color:
 * progress-bar-danger-filled-background-color:
 * progress-bar-danger-text-color:
 * progress-bar-control-background-color:
 * progress-bar-control-filled-background-color:
 * progress-bar-control-text-color:
 */
declare class NbProgressBarComponent {
    protected statusService: NbStatusService;
    /**
     * Progress bar value in percent (0 - 100)
     */
    value: number;
    /**
     * Progress bar background (`basic` (default), `primary`, `info`, `success`, `warning`, `danger`, `control`)
     */
    status: NbComponentOrCustomStatus;
    /**
     * Progress bar size (`tiny`, `small`, `medium` (default), `large`, `giant`)
     */
    size: NbComponentSize;
    /**
     * Displays value inside progress bar
     */
    displayValue: boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbProgressBarComponent, "nb-progress-bar", never, { "value": { "alias": "value"; "required": false; }; "status": { "alias": "status"; "required": false; }; "size": { "alias": "size"; "required": false; }; "displayValue": { "alias": "displayValue"; "required": false; }; }, {}, never, ["*"], false, never>;
}

declare class NbProgressBarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbProgressBarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbProgressBarModule, [typeof NbProgressBarComponent], [typeof NbSharedModule], [typeof NbProgressBarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbProgressBarModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbAlertModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Alert status, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Alert accent, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-border-radius:
 * alert-bottom-margin:
 * alert-padding:
 * alert-scrollbar-color:
 * alert-scrollbar-background-color:
 * alert-scrollbar-width:
 * alert-shadow:
 * alert-text-font-family:
 * alert-text-font-size:
 * alert-text-font-weight:
 * alert-text-line-height:
 * alert-closable-start-padding:
 * alert-tiny-height:
 * alert-small-height:
 * alert-medium-height:
 * alert-medium-padding:
 * alert-large-height:
 * alert-giant-height:
 * alert-basic-background-color:
 * alert-basic-text-color:
 * alert-primary-background-color:
 * alert-primary-text-color:
 * alert-success-background-color:
 * alert-success-text-color:
 * alert-info-background-color:
 * alert-info-text-color:
 * alert-warning-background-color:
 * alert-warning-text-color:
 * alert-danger-background-color:
 * alert-danger-text-color:
 * alert-control-background-color:
 * alert-control-text-color:
 * alert-accent-basic-color:
 * alert-accent-primary-color:
 * alert-accent-info-color:
 * alert-accent-success-color:
 * alert-accent-warning-color:
 * alert-accent-danger-color:
 * alert-accent-control-color:
 * alert-outline-width:
 * alert-outline-basic-color:
 * alert-outline-primary-color:
 * alert-outline-info-color:
 * alert-outline-success-color:
 * alert-outline-warning-color:
 * alert-outline-danger-color:
 * alert-outline-control-color:
 */
declare class NbAlertComponent {
    protected statusService: NbStatusService;
    /**
     * Alert size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     * Unset by default.
     */
    size: '' | NbComponentSize;
    /**
     * Alert status (adds specific styles):
     * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Alert accent (color of the top border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    accent: '' | NbComponentStatus;
    /**
     * Alert outline (color of the border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    outline: '' | NbComponentStatus;
    /**
     * Shows `close` icon
     */
    get closable(): boolean;
    set closable(value: boolean);
    protected _closable: boolean;
    static ngAcceptInputType_closable: NbBooleanInput;
    /**
     * Emits when chip is removed
     * @type EventEmitter<any>
     */
    close: EventEmitter<any>;
    constructor(statusService: NbStatusService);
    /**
     * Emits the removed chip event
     */
    onClose(): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get primaryAccent(): boolean;
    get successAccent(): boolean;
    get infoAccent(): boolean;
    get warningAccent(): boolean;
    get dangerAccent(): boolean;
    get basicAccent(): boolean;
    get controlAccent(): boolean;
    get primaryOutline(): boolean;
    get successOutline(): boolean;
    get infoOutline(): boolean;
    get warningOutline(): boolean;
    get dangerOutline(): boolean;
    get basicOutline(): boolean;
    get controlOutline(): boolean;
    get additionalClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAlertComponent, "nb-alert", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; }, { "close": "close"; }, never, ["*"], false, never>;
}

declare class NbAlertModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAlertModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbAlertModule, [typeof NbAlertComponent], [typeof NbSharedModule], [typeof NbAlertComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbAlertModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Chat form component.
 *
 * Show a message form with a send message button.
 *
 * ```ts
 * <nb-chat-form showButton="true" buttonIcon="nb-send">
 * </nb-chat-form>
 * ```
 *
 * When `[dropFiles]="true"` handles files drag&drop with a file preview.
 *
 * Drag & drop available for files and images:
 * @stacked-example(Drag & Drop Chat, chat/chat-drop.component)
 *
 * New message could be tracked outside by using `(send)` output.
 *
 * ```ts
 * <nb-chat-form (send)="onNewMessage($event)">
 * </nb-chat-form>
 *
 * // ...
 *
 * onNewMessage({ message: string, files: any[] }) {
 *   this.service.sendToServer(message, files);
 * }
 * ```
 */
declare class NbChatFormComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    status: NbComponentOrCustomStatus;
    inputFocus: boolean;
    inputHover: boolean;
    droppedFiles: any[];
    imgDropTypes: string[];
    /**
     * Predefined message text
     * @type {string}
     */
    message: string;
    /**
     * Message placeholder text
     * @type {string}
     */
    messagePlaceholder: string;
    /**
     * Send button title
     * @type {string}
     */
    buttonTitle: string;
    /**
     * Send button icon, shown if `buttonTitle` is empty
     * @type {string}
     */
    buttonIcon: string;
    /**
     * Show send button
     * @type {boolean}
     */
    showButton: boolean;
    /**
     * Show send button
     * @type {boolean}
     */
    dropFiles: boolean;
    /**
     * File drop placeholder text
     * @type {string}
     */
    dropFilePlaceholder: string;
    /**
     *
     * @type {EventEmitter<{ message: string, files: File[] }>}
     */
    send: EventEmitter<{
        message: string;
        files: File[];
    }>;
    /**
     * Emits when message input value has been changed
     * @type {EventEmitter<string>}
     */
    onInputChange: EventEmitter<string>;
    fileOver: boolean;
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    onDrop(event: any): void;
    removeFile(file: any): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    sendMessage(): void;
    setStatus(status: NbComponentOrCustomStatus): void;
    getInputStatus(): NbComponentOrCustomStatus;
    getButtonStatus(): NbComponentOrCustomStatus;
    protected getHighlightStatus(): NbComponentOrCustomStatus;
    onModelChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatFormComponent, "nb-chat-form", never, { "message": { "alias": "message"; "required": false; }; "messagePlaceholder": { "alias": "messagePlaceholder"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "buttonIcon": { "alias": "buttonIcon"; "required": false; }; "showButton": { "alias": "showButton"; "required": false; }; "dropFiles": { "alias": "dropFiles"; "required": false; }; "dropFilePlaceholder": { "alias": "dropFilePlaceholder"; "required": false; }; }, { "send": "send"; "onInputChange": "onInputChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbChatMessageFileIconPreview {
    url: string;
    icon: string;
}
interface NbChatMessageFileImagePreview {
    url: string;
    type: string;
}
type NbChatMessageFile = NbChatMessageFileIconPreview | NbChatMessageFileImagePreview;
/**
 * Chat message component.
 */
declare class NbChatMessageFileComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    readyFiles: any[];
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Message file path
     * @type {Date}
     */
    set files(files: NbChatMessageFile[]);
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    isImage(file: NbChatMessageFile): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageFileComponent, "nb-chat-message-file", never, { "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "files": { "alias": "files"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * `[nbCustomMessage]` directive should be used as a structural directive or should be applied to the `ng-template`:
 *
 * ```html
 * <div *nbCustomMessage="'my-custom-type'; let data">
 *   <!-- custom message -->
 * </div>
 * ```
 * or
 * ```html
 * <ng-template nbCustomMessage='my-custom-type' let-data>
 *   <!-- custom message -->
 * </ng-template>
 * ```
 */
declare class NbChatCustomMessageDirective implements OnInit, OnDestroy {
    templateRef: TemplateRef<any>;
    protected customMessageService: NbChatCustomMessageService;
    /**
     * Defines a message type which should rendered with the custom message template.
     * @type {string}
     */
    get nbCustomMessage(): string;
    set nbCustomMessage(value: string);
    protected _type: string;
    get type(): string;
    /**
     * Disables generic message styles, such as round corners, text color, background, etc.,
     * so a custom message could be styled from the ground up.
     *
     * @type {boolean}
     */
    set nbCustomMessageNoStyles(value: boolean);
    get nbCustomMessageNoStyles(): boolean;
    protected _noStyles: boolean;
    static ngAcceptInputType_noStyles: NbBooleanInput;
    get noStyles(): boolean;
    constructor(templateRef: TemplateRef<any>, customMessageService: NbChatCustomMessageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatCustomMessageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbChatCustomMessageDirective, "[nbCustomMessage]", never, { "nbCustomMessage": { "alias": "nbCustomMessage"; "required": false; }; "nbCustomMessageNoStyles": { "alias": "nbCustomMessageNoStyles"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
declare class NbChatCustomMessageService {
    protected readonly customMessages: Map<string, NbChatCustomMessageDirective>;
    register(type: string, instance: NbChatCustomMessageDirective): void;
    unregister(type: string): boolean;
    getInstance(type: string): NbChatCustomMessageDirective | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatCustomMessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbChatCustomMessageService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
declare class NbChatMessageComponent {
    protected domSanitizer: DomSanitizer;
    protected customMessageService: NbChatCustomMessageService;
    protected readonly builtInMessageTypes: string[];
    avatarStyle: SafeStyle;
    get _addReplyClass(): boolean;
    get _addNotReplyClass(): boolean;
    get _addNoSpaceClass(): boolean;
    get flyInOut(): boolean;
    get notReply(): boolean;
    /**
     * Determines if a message is a reply
     */
    get reply(): boolean;
    set reply(value: boolean);
    protected _reply: boolean;
    static ngAcceptInputType_reply: NbBooleanInput;
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Array of files `{ url: 'file url', icon: 'file icon class' }`
     */
    files: NbChatMessageFile[];
    /**
     * Quoted message text
     * @type {string}
     */
    quote: string;
    /**
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    /**
     * Message send avatar
     * @type {string}
     */
    set avatar(value: string);
    /**
     * Message type, available options `text|file|map|quote`
     * @type {string}
     */
    type: string;
    /**
     * Data which will be set as custom message template context
     * @type {any}
     */
    customMessageData: any;
    constructor(domSanitizer: DomSanitizer, customMessageService: NbChatCustomMessageService);
    getInitials(): string;
    _isBuiltInMessageType(): boolean;
    _getTemplate(): TemplateRef<any>;
    _getTemplateContext(): {
        $implicit: any;
        isReply: boolean;
    };
    _areDefaultStylesEnabled(): boolean;
    protected getCustomMessage(type: string): NbChatCustomMessageDirective;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageComponent, "nb-chat-message", never, { "reply": { "alias": "reply"; "required": false; }; "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "files": { "alias": "files"; "required": false; }; "quote": { "alias": "quote"; "required": false; }; "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "type": { "alias": "type"; "required": false; }; "customMessageData": { "alias": "customMessageData"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbChatTitleDirective {
    templateRef: TemplateRef<any>;
    context: Object;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbChatTitleDirective, "[nbChatTitle]", never, { "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * You could provide a title template via the `nbChatTitle` directive. It overrides `title` input.
 * @stacked-example(Custom template as a title, chat/chat-template-title.component)
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * # Custom message types
 *
 * Besides built-in message types, you could provide custom ones with their own template to render.
 * As an example, let's add the `link` message type.
 * <br>
 * First, you need to provide a template for the `link` message type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 * </nb-chat>
 * ```
 * Then, add the `nb-chat-message` component with the `link` type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 *   <nb-chat-message type="link"></nb-chat-message>
 * </nb-chat>
 * ```
 *
 * <div class="note note-warning">
 *   <div class="note-title">Important!</div>
 *   <div class="note-body">
 *     Custom chat messages must be defined before the `nb-chat-message`.
 *   </div>
 * </div>
 *
 * Custom message templates could have arbitrary data associated with them. Let's extract hardcoded link
 * href and text. To pass some data to the custom message template, use the `customMessageData` input
 * of the `nb-chat-message` component:
 * ```html
 * ...
 * <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 * </nb-chat-message>
 * ...
 * ```
 * When `customMessageData` is set, this object would become a template context and you'll be able
 * to reference it via `let varName` syntax:
 * ```html
 * <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 * ```
 *
 * That's it, full example will look like this:
 * ```html
 * <nb-chat title="Nebular Conversational UI">
 *   <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 *   <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 *   </nb-chat-message>
 * </nb-chat>
 * ```
 *
 * If you want to style your custom template from the ground up you could turn off generic message styling
 * (such as round borders, color, background, etc.) via the `noStyles` input:
 * ```html
 *   <div *nbCustomMessage="'my-custom-type'; noStyles: true">...</div>
 * ```
 * When you decide to use your own styles, the `isReply` property of the custom message template context
 * would come in handy. This property allows you to determine whether the message is a reply or not.
 * For example, to change link text color (as replies have a different background):
 * ```html
 * <a *nbCustomMessage="'link'; let data; let isReply=isReply"
 *    [href]="data.href"
 *    [class.link-control]="!isReply">
 *   {{ data.label }}
 * </a>
 * ```
 *
 * Below, you could find a more complex example with multiple custom message types:
 * @stacked-example(Custom message, chat/chat-custom-message.component)
 *
 * @styles
 *
 * chat-background-color:
 * chat-border:
 * chat-border-radius:
 * chat-shadow:
 * chat-padding:
 * chat-scrollbar-color:
 * chat-scrollbar-background-color:
 * chat-scrollbar-width:
 * chat-text-color:
 * chat-text-font-family:
 * chat-text-font-size:
 * chat-text-font-weight:
 * chat-text-line-height:
 * chat-header-text-font-family:
 * chat-header-text-font-size:
 * chat-header-text-font-weight:
 * chat-header-text-line-height:
 * chat-tiny-height:
 * chat-small-height:
 * chat-medium-height:
 * chat-large-height:
 * chat-giant-height:
 * chat-basic-background-color:
 * chat-basic-text-color:
 * chat-primary-background-color:
 * chat-primary-text-color:
 * chat-success-background-color:
 * chat-success-text-color:
 * chat-info-background-color:
 * chat-info-text-color:
 * chat-warning-background-color:
 * chat-warning-text-color:
 * chat-danger-background-color:
 * chat-danger-text-color:
 * chat-control-background-color:
 * chat-control-text-color:
 * chat-divider-color:
 * chat-divider-style:
 * chat-divider-width:
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
declare class NbChatComponent implements OnChanges, AfterContentInit, AfterViewInit {
    protected statusService: NbStatusService;
    title: string;
    /**
     * Chat size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Chat status color (adds specific styles):
     * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    noMessagesPlaceholder: string;
    /**
     * Scroll chat to the bottom of the list when a new message arrives
     */
    get scrollBottom(): boolean;
    set scrollBottom(value: boolean);
    protected _scrollBottom: boolean;
    static ngAcceptInputType_scrollBottom: NbBooleanInput;
    scrollable: ElementRef;
    messages: QueryList<NbChatMessageComponent>;
    chatForm: NbChatFormComponent;
    titleTemplate: NbChatTitleDirective;
    constructor(statusService: NbStatusService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    updateView(): void;
    scrollListBottom(): void;
    protected updateFormStatus(): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatComponent, "nb-chat", never, { "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "noMessagesPlaceholder": { "alias": "noMessagesPlaceholder"; "required": false; }; "scrollBottom": { "alias": "scrollBottom"; "required": false; }; }, {}, ["chatForm", "titleTemplate", "messages"], ["nb-chat-message", "nb-chat-form"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
declare class NbChatOptions {
    messageGoogleMapKey?: string;
}

/**
 * Chat message component.
 */
declare class NbChatMessageMapComponent {
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    get file(): {
        url: string;
        type: string;
        icon: string;
    };
    mapKey: string;
    constructor(options: NbChatOptions);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageMapComponent, "nb-chat-message-map", never, { "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * Chat message component.
 */
declare class NbChatMessageQuoteComponent {
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
      * Message send date format, default 'shortTime'
      * @type {string}
      */
    dateFormat: string;
    /**
     * Quoted message
     * @type {Date}
     */
    quote: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageQuoteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageQuoteComponent, "nb-chat-message-quote", never, { "message": { "alias": "message"; "required": false; }; "sender": { "alias": "sender"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; "quote": { "alias": "quote"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * Chat message component.
 */
declare class NbChatMessageTextComponent {
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageTextComponent, "nb-chat-message-text", never, { "sender": { "alias": "sender"; "required": false; }; "message": { "alias": "message"; "required": false; }; "date": { "alias": "date"; "required": false; }; "dateFormat": { "alias": "dateFormat"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbChatAvatarComponent {
    initials: string;
    avatarStyle: SafeStyle;
    readonly avatarClass = true;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatAvatarComponent, "nb-chat-avatar", never, { "initials": { "alias": "initials"; "required": false; }; "avatarStyle": { "alias": "avatarStyle"; "required": false; }; }, {}, never, never, false, never>;
}

declare abstract class NbFormFieldControl {
    status$: Observable<NbComponentOrCustomStatus>;
    size$: Observable<NbComponentSize>;
    focused$: Observable<boolean>;
    disabled$: Observable<boolean>;
    fullWidth$: Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldControl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFormFieldControl>;
}
declare class NbFormFieldControlConfig {
    supportsPrefix: boolean;
    supportsSuffix: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldControlConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFormFieldControlConfig>;
}
interface NbFormControlState {
    status: NbComponentOrCustomStatus;
    size: NbComponentSize;
    fullWidth: boolean;
    focused: boolean;
    disabled: boolean;
}

declare class NbFocusMonitor extends FocusMonitor {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFocusMonitor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFocusMonitor>;
}
declare class NbA11yModule {
    static forRoot(): ModuleWithProviders<NbA11yModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbA11yModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbA11yModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbA11yModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * Use `<nb-form-field>` to add custom content to the input field.
 * First import `NbFormFieldModule`. Then put the input field and custom content into
 * `<nb-form-field>` and add `nbPrefix` or `nbSuffix` directive to the custom content.
 * `nbPrefix` puts content before input and `nbSuffix` after.
 *
 * @stacked-example(Input with icon, form-field/form-field-input.component)
 * @stacked-example(Input with button, form-field/form-field-password.component)
 *
 * @styles
 *
 * input-border-style:
 * input-border-width:
 * input-outline-color:
 * input-outline-width:
 * input-placeholder-text-font-family:
 * input-text-font-family:
 * input-basic-text-color:
 * input-basic-placeholder-text-color:
 * input-basic-background-color:
 * input-basic-border-color:
 * input-basic-focus-background-color:
 * input-basic-focus-border-color:
 * input-basic-hover-background-color:
 * input-basic-hover-border-color:
 * input-basic-disabled-background-color:
 * input-basic-disabled-border-color:
 * input-basic-disabled-text-color:
 * input-basic-disabled-placeholder-text-color:
 * input-primary-text-color:
 * input-primary-placeholder-text-color:
 * input-primary-background-color:
 * input-primary-border-color:
 * input-primary-focus-background-color:
 * input-primary-focus-border-color:
 * input-primary-hover-background-color:
 * input-primary-hover-border-color:
 * input-primary-disabled-background-color:
 * input-primary-disabled-border-color:
 * input-primary-disabled-text-color:
 * input-primary-disabled-placeholder-text-color:
 * input-success-text-color:
 * input-success-placeholder-text-color:
 * input-success-background-color:
 * input-success-border-color:
 * input-success-focus-background-color:
 * input-success-focus-border-color:
 * input-success-hover-background-color:
 * input-success-hover-border-color:
 * input-success-disabled-background-color:
 * input-success-disabled-border-color:
 * input-success-disabled-text-color:
 * input-success-disabled-placeholder-text-color:
 * input-info-text-color:
 * input-info-placeholder-text-color:
 * input-info-background-color:
 * input-info-border-color:
 * input-info-focus-background-color:
 * input-info-focus-border-color:
 * input-info-hover-background-color:
 * input-info-hover-border-color:
 * input-info-disabled-background-color:
 * input-info-disabled-border-color:
 * input-info-disabled-text-color:
 * input-info-disabled-placeholder-text-color:
 * input-warning-text-color:
 * input-warning-placeholder-text-color:
 * input-warning-background-color:
 * input-warning-border-color:
 * input-warning-focus-background-color:
 * input-warning-focus-border-color:
 * input-warning-hover-background-color:
 * input-warning-hover-border-color:
 * input-warning-disabled-background-color:
 * input-warning-disabled-border-color:
 * input-warning-disabled-text-color:
 * input-warning-disabled-placeholder-text-color:
 * input-danger-text-color:
 * input-danger-placeholder-text-color:
 * input-danger-background-color:
 * input-danger-border-color:
 * input-danger-focus-background-color:
 * input-danger-focus-border-color:
 * input-danger-hover-background-color:
 * input-danger-hover-border-color:
 * input-danger-disabled-background-color:
 * input-danger-disabled-border-color:
 * input-danger-disabled-text-color:
 * input-danger-disabled-placeholder-text-color:
 * input-control-text-color:
 * input-control-placeholder-text-color:
 * input-control-background-color:
 * input-control-border-color:
 * input-control-focus-background-color:
 * input-control-focus-border-color:
 * input-control-hover-background-color:
 * input-control-hover-border-color:
 * input-control-disabled-background-color:
 * input-control-disabled-border-color:
 * input-control-disabled-text-color:
 * input-control-disabled-placeholder-text-color:
 * input-rectangle-border-radius:
 * input-semi-round-border-radius:
 * input-round-border-radius:
 * input-tiny-text-font-size:
 * input-tiny-text-font-weight:
 * input-tiny-text-line-height:
 * input-tiny-placeholder-text-font-size:
 * input-tiny-placeholder-text-font-weight:
 * input-tiny-placeholder-text-line-height:
 * input-tiny-padding:
 * input-tiny-max-width:
 * input-small-text-font-size:
 * input-small-text-font-weight:
 * input-small-text-line-height:
 * input-small-placeholder-text-font-size:
 * input-small-placeholder-text-font-weight:
 * input-small-placeholder-text-line-height:
 * input-small-padding:
 * input-small-max-width:
 * input-medium-text-font-size:
 * input-medium-text-font-weight:
 * input-medium-text-line-height:
 * input-medium-placeholder-text-font-size:
 * input-medium-placeholder-text-font-weight:
 * input-medium-placeholder-text-line-height:
 * input-medium-padding:
 * input-medium-max-width:
 * input-large-text-font-size:
 * input-large-text-font-weight:
 * input-large-text-line-height:
 * input-large-placeholder-text-font-size:
 * input-large-placeholder-text-font-weight:
 * input-large-placeholder-text-line-height:
 * input-large-padding:
 * input-large-max-width:
 * input-giant-text-font-size:
 * input-giant-text-font-weight:
 * input-giant-text-line-height:
 * input-giant-placeholder-text-font-size:
 * input-giant-placeholder-text-font-weight:
 * input-giant-placeholder-text-line-height:
 * input-giant-padding:
 * input-giant-max-width:
 */
declare class NbInputDirective implements DoCheck, OnChanges, OnInit, AfterViewInit, OnDestroy, NbFormFieldControl {
    protected elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected destroy$: Subject<void>;
    /**
     * Field size modifications. Possible values: `small`, `medium` (default), `large`.
     */
    fieldSize: NbComponentSize;
    /**
     * Field status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Field shapes modifications. Possible values: `rectangle` (default), `round`, `semi-round`.
     */
    shape: NbComponentShape;
    /**
     * If set element will fill container. `false` by default.
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    private _fullWidth;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    get additionalClasses(): string[];
    constructor(elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    ngDoCheck(): void;
    ngOnChanges({ status, fieldSize, fullWidth }: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get rectangle(): boolean;
    get semiRound(): boolean;
    get round(): boolean;
    status$: BehaviorSubject<string>;
    size$: BehaviorSubject<NbComponentSize>;
    focused$: BehaviorSubject<boolean>;
    disabled$: BehaviorSubject<boolean>;
    fullWidth$: BehaviorSubject<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbInputDirective, "input[nbInput],textarea[nbInput]", never, { "fieldSize": { "alias": "fieldSize"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbInputModule, [typeof NbInputDirective], [typeof NbSharedModule], [typeof NbInputDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbInputModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbChatModule {
    static forRoot(options?: NbChatOptions): ModuleWithProviders<NbChatModule>;
    static forChild(options?: NbChatOptions): ModuleWithProviders<NbChatModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbChatModule, [typeof NbChatComponent, typeof NbChatMessageComponent, typeof NbChatFormComponent, typeof NbChatMessageTextComponent, typeof NbChatMessageFileComponent, typeof NbChatMessageQuoteComponent, typeof NbChatMessageMapComponent, typeof NbChatAvatarComponent, typeof NbChatCustomMessageDirective, typeof NbChatTitleDirective], [typeof NbSharedModule, typeof NbIconModule, typeof NbInputModule, typeof NbButtonModule], [typeof NbChatComponent, typeof NbChatMessageComponent, typeof NbChatFormComponent, typeof NbChatMessageTextComponent, typeof NbChatMessageFileComponent, typeof NbChatMessageQuoteComponent, typeof NbChatMessageMapComponent, typeof NbChatAvatarComponent, typeof NbChatCustomMessageDirective, typeof NbChatTitleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbChatModule>;
}

/**
 * Styled spinner component
 *
 * @styles
 *
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-basic-background-color:
 * spinner-basic-circle-filled-color:
 * spinner-basic-circle-empty-color:
 * spinner-primary-background-color:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-background-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-background-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-background-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-background-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-control-background-color:
 * spinner-control-circle-filled-color:
 * spinner-control-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
declare class NbSpinnerComponent {
    protected statusService: NbStatusService;
    /**
     * Loading text that is shown near the icon
     * @type string
     */
    message: string;
    /**
     * Spinner size, available sizes:
     * tiny, small, medium, large, giant
     * @param {string} value
     */
    size: NbComponentSize;
    /**
     * Spinner status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSpinnerComponent, "nb-spinner", never, { "message": { "alias": "message"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
declare class NbSpinnerDirective {
    private directiveView;
    private renderer;
    private directiveElement;
    spinner: ComponentRef<NbSpinnerComponent>;
    /**
     * Spinner message shown next to the icon
     * @type {string}
     */
    spinnerMessage: string;
    /**
     * Spinner status color
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
     */
    spinnerStatus: NbComponentOrCustomStatus;
    /**
     * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    spinnerSize: NbComponentSize;
    /**
     * Directive value - show or hide spinner
     * @param {boolean} val
     */
    set nbSpinner(val: boolean);
    isSpinnerExist: boolean;
    constructor(directiveView: ViewContainerRef, renderer: Renderer2, directiveElement: ElementRef);
    hide(): void;
    show(): void;
    setInstanceInputs(instance: NbSpinnerComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbSpinnerDirective, "[nbSpinner]", never, { "spinnerMessage": { "alias": "nbSpinnerMessage"; "required": false; }; "spinnerStatus": { "alias": "nbSpinnerStatus"; "required": false; }; "spinnerSize": { "alias": "nbSpinnerSize"; "required": false; }; "nbSpinner": { "alias": "nbSpinner"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbSpinnerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSpinnerModule, [typeof NbSpinnerComponent, typeof NbSpinnerDirective], [typeof NbSharedModule], [typeof NbSpinnerComponent, typeof NbSpinnerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSpinnerModule>;
}

declare const NB_STEPPER: InjectionToken<unknown>;

/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
declare class NbStepComponent {
    protected stepper: NbStepperComponent;
    /**
     * Step content
     *
     * @type {TemplateRef}
     */
    content: TemplateRef<any>;
    /**
     * Top level abstract control of the step
     */
    stepControl?: {
        valid: boolean | null;
        reset: () => void;
    };
    /**
     * Step label
     *
     * @type {string|TemplateRef<any>}
     */
    label: string | TemplateRef<any>;
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    get hidden(): boolean;
    set hidden(value: boolean);
    protected _hidden: boolean;
    static ngAcceptInputType_hidden: NbBooleanInput;
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    get isLabelTemplate(): boolean;
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    get completed(): boolean;
    set completed(value: boolean);
    protected _completed: boolean;
    static ngAcceptInputType_completed: NbBooleanInput;
    protected get isCompleted(): boolean;
    interacted: boolean;
    constructor(stepper: any);
    /**
     * Mark step as selected
     * */
    select(): void;
    /**
     * Reset step and stepControl state
     * */
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbStepComponent, "nb-step", never, { "stepControl": { "alias": "stepControl"; "required": false; }; "label": { "alias": "label"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "completed": { "alias": "completed"; "required": false; }; }, {}, never, ["*"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type NbStepperOrientation = 'vertical' | 'horizontal';
interface NbStepChangeEvent {
    index: number;
    step: NbStepComponent;
    previouslySelectedIndex: number;
    previouslySelectedStep: NbStepComponent;
}
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   </nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   </nb-step>
 * </nb-stepper>
 * ```
 *
 * When linear mode enabled user can't move forward unless current step is complete.
 * @stacked-example(Linear, stepper/stepper-linear.component)
 *
 * Specify `[stepControl]="form"` and stepper allow go to the next step only if form is valid.
 * You can disable it via `linear` mode setting.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   </nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * `disableStepNavigation` disables navigation by clicking on steps, so user can navigate only using
 * 'nbStepperPrevious' and 'nbStepperNext' buttons.
 * @stacked-example(Disabled steps navigation, stepper/stepper-disabled-step-nav.component)
 *
 * Use `stepChange` output to listening to step change event. This event emits `NbStepChangeEvent` object.
 * @stacked-example(Step change event, stepper/stepper-step-change-event.component)
 *
 * @styles
 *
 * stepper-step-text-color:
 * stepper-step-text-font-family:
 * stepper-step-text-font-size:
 * stepper-step-text-font-weight:
 * stepper-step-text-line-height:
 * stepper-step-active-text-color:
 * stepper-step-completed-text-color:
 * stepper-step-index-border-color:
 * stepper-step-index-border-style:
 * stepper-step-index-border-width:
 * stepper-step-index-border-radius:
 * stepper-step-index-width:
 * stepper-step-index-active-border-color:
 * stepper-step-index-completed-background-color:
 * stepper-step-index-completed-border-color:
 * stepper-step-index-completed-text-color:
 * stepper-connector-background-color:
 * stepper-connector-completed-background-color:
 * stepper-horizontal-connector-margin:
 * stepper-vertical-connector-margin:
 * stepper-step-content-padding:
 */
declare class NbStepperComponent {
    /**
     * Selected step index
     */
    get selectedIndex(): number;
    set selectedIndex(index: number);
    protected _selectedIndex: number;
    /**
     * Disables navigation by clicking on steps. False by default
     * @param {boolean} value
     */
    set disableStepNavigation(value: boolean);
    get disableStepNavigation(): boolean;
    protected _disableStepNavigation: boolean;
    static ngAcceptInputType_disableStepNavigation: NbBooleanInput;
    /**
     * Selected step component
     */
    get selected(): NbStepComponent;
    set selected(step: NbStepComponent);
    /**
     * Stepper orientation - `horizontal`|`vertical`
     */
    orientation: NbStepperOrientation;
    /**
     * Allow moving forward only if the current step is complete
     * @default true
     */
    set linear(value: boolean);
    get linear(): boolean;
    protected _linear: boolean;
    static ngAcceptInputType_linear: NbBooleanInput;
    /**
     * Emits when step changed
     * @type {EventEmitter<NbStepChangeEvent>}
     */
    stepChange: EventEmitter<NbStepChangeEvent>;
    get vertical(): boolean;
    get horizontal(): boolean;
    steps: QueryList<NbStepComponent>;
    /**
     * Navigate to next step
     * */
    next(): void;
    /**
     * Navigate to previous step
     * */
    previous(): void;
    /**
     * Select step if navigation is not disabled
     * @param { NbStepComponent } step
     */
    changeStep(step: NbStepComponent): void;
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset(): void;
    isStepSelected(step: NbStepComponent): boolean;
    getStepTemplate(step: NbStepComponent): TemplateRef<any> | null;
    protected isStepValid(index: number): boolean;
    protected canBeSelected(indexToCheck: number): boolean;
    protected markCurrentStepInteracted(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbStepperComponent, "nb-stepper", never, { "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "disableStepNavigation": { "alias": "disableStepNavigation"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "linear": { "alias": "linear"; "required": false; }; }, { "stepChange": "stepChange"; }, ["steps"], ["nb-step"], false, never>;
}

declare class NbStepperNextDirective {
    protected stepper: NbStepperComponent;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperNextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbStepperNextDirective, "button[nbStepperNext]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
declare class NbStepperPreviousDirective {
    protected stepper: NbStepperComponent;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperPreviousDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbStepperPreviousDirective, "button[nbStepperPrevious]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbStepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbStepperModule, [typeof NbStepperComponent, typeof NbStepComponent, typeof NbStepperNextDirective, typeof NbStepperPreviousDirective], [typeof NbSharedModule, typeof NbIconModule], [typeof NbStepperComponent, typeof NbStepComponent, typeof NbStepperNextDirective, typeof NbStepperPreviousDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbStepperModule>;
}

/**
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode accordion can have multiple items expanded:
 * @stacked-example(Multiple expanded items, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several methods, for example it is possible to trigger item click/toggle:
 * @stacked-example(Expand API, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-border-radius:
 * accordion-padding:
 * accordion-shadow:
 * accordion-header-text-color:
 * accordion-header-text-font-family:
 * accordion-header-text-font-size:
 * accordion-header-text-font-weight:
 * accordion-header-text-line-height:
 * accordion-header-disabled-text-color:
 * accordion-header-border-color:
 * accordion-header-border-style:
 * accordion-header-border-width:
 * accordion-item-background-color:
 * accordion-item-text-color:
 * accordion-item-text-font-family:
 * accordion-item-text-font-size:
 * accordion-item-text-font-weight:
 * accordion-item-text-line-height:
 */
declare class NbAccordionComponent {
    openCloseItems: Subject<boolean>;
    /**
     *  Allow multiple items to be expanded at the same time.
     * @type {boolean}
     */
    get multi(): boolean;
    set multi(val: boolean);
    static ngAcceptInputType_multi: NbBooleanInput;
    private multiValue;
    /**
     * Opens all enabled accordion items.
     */
    openAll(): void;
    /**
     * Closes all enabled accordion items.
     */
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionComponent, "nb-accordion", never, { "multi": { "alias": "multi"; "required": false; }; }, {}, never, ["nb-accordion-item"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Component intended to be used within `<nb-accordion>` component
 */
declare class NbAccordionItemComponent implements OnInit, OnChanges, OnDestroy {
    private accordion;
    private cd;
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    get collapsed(): boolean;
    set collapsed(val: boolean);
    static ngAcceptInputType_collapsed: NbBooleanInput;
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    get expanded(): boolean;
    set expanded(val: boolean);
    static ngAcceptInputType_expanded: NbBooleanInput;
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled(): boolean;
    set disabled(val: boolean);
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     */
    collapsedChange: EventEmitter<boolean>;
    accordionItemInvalidate: Subject<boolean>;
    private collapsedValue;
    private disabledValue;
    private destroy$;
    constructor(accordion: NbAccordionComponent, cd: ChangeDetectorRef);
    /**
     * Open/close the item
     */
    toggle(): void;
    /**
     * Open the item.
     */
    open(): void;
    /**
     * Collapse the item.
     */
    close(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private invalidate;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionItemComponent, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionItemComponent, "nb-accordion-item", never, { "collapsed": { "alias": "collapsed"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "collapsedChange": "collapsedChange"; }, never, ["nb-accordion-item-header", "nb-accordion-item-body"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
declare class NbAccordionItemBodyComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    private destroy$;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    get state(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionItemBodyComponent, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionItemBodyComponent, "nb-accordion-item-body", never, {}, {}, never, ["*"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
declare class NbAccordionItemHeaderComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    get isCollapsed(): boolean;
    get expanded(): boolean;
    get tabbable(): string;
    get disabled(): boolean;
    toggle(): void;
    get state(): string;
    private destroy$;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionItemHeaderComponent, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionItemHeaderComponent, "nb-accordion-item-header", never, {}, {}, never, ["nb-accordion-item-title", "nb-accordion-item-description", "*"], false, never>;
}

declare class NbAccordionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbAccordionModule, [typeof NbAccordionComponent, typeof NbAccordionItemComponent, typeof NbAccordionItemHeaderComponent, typeof NbAccordionItemBodyComponent], [typeof i4.CommonModule, typeof NbIconModule], [typeof NbAccordionComponent, typeof NbAccordionItemComponent, typeof NbAccordionItemHeaderComponent, typeof NbAccordionItemBodyComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbAccordionModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type NbButtonToggleAppearance = Exclude<NbButtonAppearance, 'hero'>;
interface NbButtonToggleChange {
    source: NbButtonToggleDirective;
    pressed: boolean;
}
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
declare class NbButtonToggleDirective extends NbButton {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected buttonGroup?: any;
    protected readonly _pressedChange$: Subject<NbButtonToggleChange>;
    get pressedChange$(): Observable<NbButtonToggleChange>;
    appearance: NbButtonToggleAppearance;
    /**
     * A value associated with the button.
     */
    value: any;
    /**
     * Controls button pressed state
     **/
    get pressed(): boolean;
    set pressed(value: boolean);
    protected _pressed: boolean;
    static ngAcceptInputType_pressed: NbBooleanInput;
    /**
     * Emits whenever button pressed state change
     **/
    readonly pressedChange: EventEmitter<boolean>;
    get basic(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    onClick(): void;
    constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, zone: NgZone, statusService: NbStatusService, buttonGroup?: any);
    /**
     * @docs-private
     */
    _updatePressed(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonToggleDirective, [null, null, null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbButtonToggleDirective, "button[nbButtonToggle]", ["nbButtonToggle"], { "appearance": { "alias": "appearance"; "required": false; }; "value": { "alias": "value"; "required": false; }; "pressed": { "alias": "pressed"; "required": false; }; }, { "pressedChange": "pressedChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * `<nb-button-group>` visually groups buttons together and allow to control buttons properties and the state as a
 * group.
 * @stacked-example(Button Group Showcase, button-group/button-group-showcase.component)
 *
 * ### Installation
 *
 * Import `NbButtonGroupModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonGroupModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * You can use `<nb-button-group>` to group a series of `[nbButton]` or `[nbButtonToggle]` components.
 * @stacked-example(Button and Button Toggle Groups, button-group/button-and-button-toggle-groups.component)
 *
 * For a group of multiple `[nbButtonToggle]` you also can control multi-selection behavior. By default, the group
 * component allows only one pressed button toggle at a time (similar to the radio group). To be able to keep multiple
 * toggles pressed, you need to add `multiple` attributes to the `<nb-button-toggle>`.
 * @stacked-example(Button Group Multiple, button-group/button-group-multiple.component)
 *
 * To know which buttons are currently pressed listen to `(valueChange)` on the `nb-button-group`. Event
 * contains an array of values of currently pressed button toggles. You can assign a value to the
 * `[nbButtonToggle]` via the `value` input.
 * @stacked-example(Button Group Value Change, button-group/button-group-value-change.component)
 *
 * To disable a group of buttons, add a `disabled` attribute to the `<nb-button-group>`.
 * @stacked-example(Button Group Disabled, button-group/button-group-disabled.component)
 *
 * The group component controls all visual attributes of buttons such as `appearance`, `status`, `size`, `shape`.
 * You can change it via the appropriate attributes.
 *
 * Button group appearances:
 * @stacked-example(Button Group Appearances, button-group/button-group-appearances.component)
 *
 * Button group statuses:
 * @stacked-example(Button Group Statuses, button-group/button-group-statuses.component)
 *
 * Button group sizes:
 * @stacked-example(Button Group Sizes, button-group/button-group-sizes.component)
 *
 * Buttons group shapes:
 * @additional-example(Button Group Shapes, button-group/button-group-shapes.component)
 *
 * @styles
 *
 * button-group-filled-button-basic-text-color:
 * button-group-filled-button-primary-text-color:
 * button-group-filled-button-success-text-color:
 * button-group-filled-button-info-text-color:
 * button-group-filled-button-warning-text-color:
 * button-group-filled-button-danger-text-color:
 * button-group-filled-button-control-text-color:
 * button-group-filled-basic-divider-color:
 * button-group-filled-primary-divider-color:
 * button-group-filled-success-divider-color:
 * button-group-filled-info-divider-color:
 * button-group-filled-warning-divider-color:
 * button-group-filled-danger-divider-color:
 * button-group-filled-control-divider-color:
 * button-group-ghost-divider-color:
 **/
declare class NbButtonGroupComponent implements OnChanges, AfterContentInit {
    protected cd: ChangeDetectorRef;
    protected statusService: NbStatusService;
    protected lastEmittedValue: any[];
    protected readonly destroy$: Subject<void>;
    protected readonly buttonsChange$: Subject<NbButton[]>;
    readonly buttons: QueryList<NbButton>;
    /**
     * Button group size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Button group status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Button group shapes: `rectangle`, `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Button group appearance: `filled`, `outline`, `ghost`
     */
    appearance: NbButtonToggleAppearance;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Allows to keep multiple button toggles pressed. Off by default.
     */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Sets `filled` appearance
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Sets `outline` appearance
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Sets `ghost` appearance
     */
    get ghost(): boolean;
    set ghost(value: boolean);
    static ngAcceptInputType_ghost: NbBooleanInput;
    /**
     * Emits when `nbButtonToggle` pressed state change. `$event` contains an array of the currently pressed button
     * toggles.
     */
    valueChange: EventEmitter<any[]>;
    role: string;
    get additionalClasses(): string[];
    constructor(cd: ChangeDetectorRef, statusService: NbStatusService);
    ngOnChanges({ size, status, shape, multiple, filled, outline, ghost, disabled }: SimpleChanges): void;
    ngAfterContentInit(): void;
    protected listenButtonPressedState(buttons: NbButton[]): void;
    protected syncButtonsProperties(buttons: NbButton[]): void;
    protected emitCurrentValue(toggleButtons: NbButtonToggleDirective[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbButtonGroupComponent, "nb-button-group", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "filled": { "alias": "filled"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "ghost": { "alias": "ghost"; "required": false; }; }, { "valueChange": "valueChange"; }, ["buttons"], ["*"], false, never>;
}

declare class NbButtonGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbButtonGroupModule, [typeof NbButtonGroupComponent, typeof NbButtonToggleDirective], never, [typeof NbButtonGroupComponent, typeof NbButtonToggleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbButtonGroupModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare const NB_BUTTON_GROUP: InjectionToken<NbButtonGroupComponent>;

/**
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-divider-color:
 * list-item-divider-style:
 * list-item-divider-width:
 * list-item-padding:
 * list-item-text-color:
 * list-item-font-family:
 * list-item-font-size:
 * list-item-font-weight:
 * list-item-line-height:
 */
declare class NbListComponent {
    /**
     * Role attribute value
     *
     * @type {string}
     */
    role: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbListComponent, "nb-list", never, { "role": { "alias": "role"; "required": false; }; }, {}, never, ["nb-list-item"], false, never>;
}
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */
declare class NbListItemComponent {
    /**
     * Role attribute value
     *
     * @type {string}
     */
    role: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbListItemComponent, "nb-list-item", never, { "role": { "alias": "role"; "required": false; }; }, {}, never, ["*"], false, never>;
}

/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
declare class NbListPageTrackerDirective implements AfterViewInit, OnDestroy {
    private destroy$;
    private observer;
    private currentPage;
    /**
     * Items per page.
     */
    pageSize: number;
    /**
     * Page to start counting with.
     */
    startPage: number;
    /**
     * Emits when another page become visible.
     */
    pageChange: EventEmitter<number>;
    listItems: QueryList<ElementRef>;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private observeItems;
    private checkForPageChange;
    private findMostVisiblePage;
    private elementIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbListPageTrackerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbListPageTrackerDirective, "[nbListPageTracker]", never, { "pageSize": { "alias": "pageSize"; "required": false; }; "startPage": { "alias": "startPage"; "required": false; }; }, { "pageChange": "pageChange"; }, ["listItems"], never, false, never>;
}

declare class NbScrollableContainerDimensions {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
}
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to a given threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
declare class NbInfiniteListDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private scrollService;
    private dimensionsService;
    private destroy$;
    private lastScrollPosition;
    windowScroll: boolean;
    private get elementScroll();
    private elementScroll$;
    private windowScroll$;
    private bottomThreshold$;
    private topThreshold$;
    private throttleTime$;
    /**
     * Threshold after which event load more event will be emited.
     * In pixels.
     */
    threshold: number;
    /**
     * Prevent subsequent bottom/topThreshold emissions for specified duration after emitting once.
     * In milliseconds.
     */
    set throttleTime(value: number);
    get throttleTime(): number;
    /**
     * By default component observes list scroll position.
     * If set to `true`, component will observe position of page scroll instead.
     */
    set listenWindowScroll(value: any);
    static ngAcceptInputType_listenWindowScroll: NbBooleanInput;
    /**
     * Emits when distance between list bottom and current scroll position is less than threshold.
     */
    bottomThreshold: EventEmitter<any>;
    /**
     * Emits when distance between list top and current scroll position is less than threshold.
     */
    topThreshold: EventEmitter<any>;
    onElementScroll(): void;
    listItems: QueryList<NbListItemComponent>;
    constructor(elementRef: ElementRef, scrollService: NbLayoutScrollService, dimensionsService: NbLayoutRulerService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkPosition({ scrollHeight, scrollTop, clientHeight }: NbScrollableContainerDimensions): void;
    private getContainerDimensions;
    private inSyncWithDom;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbInfiniteListDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbInfiniteListDirective, "[nbInfiniteList]", never, { "threshold": { "alias": "threshold"; "required": false; }; "throttleTime": { "alias": "throttleTime"; "required": false; }; "listenWindowScroll": { "alias": "listenWindowScroll"; "required": false; }; }, { "bottomThreshold": "bottomThreshold"; "topThreshold": "topThreshold"; }, ["listItems"], never, false, never>;
}

declare class NbListModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbListModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbListModule, [typeof NbListComponent, typeof NbListItemComponent, typeof NbListPageTrackerDirective, typeof NbInfiniteListDirective], never, [typeof NbListComponent, typeof NbListItemComponent, typeof NbListPageTrackerDirective, typeof NbInfiniteListDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbListModule>;
}

/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
declare class NbFocusTrap extends FocusTrap {
    protected element: HTMLElement;
    protected checker: InteractivityChecker;
    protected ngZone: NgZone;
    protected document: Document;
    protected previouslyFocusedElement: HTMLElement;
    constructor(element: HTMLElement, checker: InteractivityChecker, ngZone: NgZone, document: Document, deferAnchors: any);
    restoreFocus(): void;
    blurPreviouslyFocusedElement(): void;
    protected savePreviouslyFocusedElement(): void;
}
declare class NbFocusTrapFactoryService extends FocusTrapFactory {
    protected checker: InteractivityChecker;
    protected ngZone: NgZone;
    private document;
    constructor(checker: InteractivityChecker, ngZone: NgZone, document: any);
    create(element: HTMLElement, deferCaptureElements?: boolean): NbFocusTrap;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFocusTrapFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFocusTrapFactoryService>;
}

type NbFocusableOption = FocusableOption;
declare class NbFocusKeyManager<T> extends FocusKeyManager<T> {
}
declare class NbFocusKeyManagerFactoryService<T extends NbFocusableOption> {
    create(items: QueryList<T> | T[]): NbFocusKeyManager<T>;
}

declare class NbScrollDispatcherAdapter extends ScrollDispatcher {
    protected scrollService: NbLayoutScrollService;
    constructor(ngZone: NgZone, platform: NbPlatform, scrollService: NbLayoutScrollService, document: any);
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbScrollDispatcherAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbScrollDispatcherAdapter>;
}

declare class NbDirectionality extends Directionality {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDirectionality, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDirectionality>;
}

declare class NbBidiModule extends BidiModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBidiModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbBidiModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbBidiModule>;
}

/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
declare class NbCellDefDirective extends CdkCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellDefDirective, "[nbCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
declare class NbHeaderCellDefDirective extends CdkHeaderCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderCellDefDirective, "[nbHeaderCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
declare class NbFooterCellDefDirective extends CdkFooterCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterCellDefDirective, "[nbFooterCellDef]", never, {}, {}, never, never, false, never>;
}
declare const NB_SORT_HEADER_COLUMN_DEF: InjectionToken<unknown>;
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
declare class NbColumnDefDirective extends CdkColumnDef {
    private _hasStickyCellChanged;
    /** Unique name for this column. */
    get name(): string;
    set name(value: string);
    /** Whether this column should be sticky positioned at the start of the row */
    get sticky(): boolean;
    set sticky(value: boolean);
    private _stickyCell;
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd(): boolean;
    set stickyEnd(value: boolean);
    /** Whether the sticky state has changed. */
    hasStickyChanged(): boolean;
    /** Resets the sticky changed state. */
    resetStickyChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbColumnDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbColumnDefDirective, "[nbColumnDef]", never, { "name": { "alias": "nbColumnDef"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "stickyEnd": { "alias": "stickyEnd"; "required": false; }; }, {}, never, never, false, never>;
}
/** Header cell template container that adds the right classes and role. */
declare class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderCellDirective, "nb-header-cell, th[nbHeaderCell]", never, {}, {}, never, never, false, never>;
}
/** Footer cell template container that adds the right classes and role. */
declare class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterCellDirective, "nb-footer-cell, td[nbFooterCell]", never, {}, {}, never, never, false, never>;
}
/** Cell template container that adds the right classes and role. */
declare class NbCellDirective extends CdkCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellDirective, "nb-cell, td[nbCell]", never, {}, {}, never, never, false, never>;
}

declare abstract class NbDataSource<T> extends DataSource<T> {
}

declare class NbDataRowOutletDirective extends DataRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDataRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbDataRowOutletDirective, "[nbRowOutlet]", never, {}, {}, never, never, false, never>;
}
declare class NbHeaderRowOutletDirective extends HeaderRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderRowOutletDirective, "[nbHeaderRowOutlet]", never, {}, {}, never, never, false, never>;
}
declare class NbFooterRowOutletDirective extends FooterRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterRowOutletDirective, "[nbFooterRowOutlet]", never, {}, {}, never, never, false, never>;
}
declare class NbNoDataRowOutletDirective extends NoDataRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbNoDataRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbNoDataRowOutletDirective, "[nbNoDataRowOutlet]", never, {}, {}, never, never, false, never>;
}
declare class NbCellOutletDirective extends CdkCellOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellOutletDirective, "[nbCellOutlet]", never, {}, {}, never, never, false, never>;
}
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
declare class NbHeaderRowDefDirective extends CdkHeaderRowDef {
    private _hasStickyRowChanged;
    columns: Iterable<string>;
    get sticky(): boolean;
    set sticky(value: boolean);
    private _stickyRow;
    hasStickyChanged(): boolean;
    /** Resets the sticky changed state. */
    resetStickyChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderRowDefDirective, "[nbHeaderRowDef]", never, { "columns": { "alias": "nbHeaderRowDef"; "required": false; }; "sticky": { "alias": "nbHeaderRowDefSticky"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
declare class NbFooterRowDefDirective extends CdkFooterRowDef {
    private _hasStickyRowChanged;
    columns: Iterable<string>;
    get sticky(): boolean;
    set sticky(value: boolean);
    private _stickyRow;
    /** Whether the sticky state has changed. */
    hasStickyChanged(): boolean;
    /** Resets the sticky changed state. */
    resetStickyChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterRowDefDirective, "[nbFooterRowDef]", never, { "columns": { "alias": "nbFooterRowDef"; "required": false; }; "sticky": { "alias": "nbFooterRowDefSticky"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
declare class NbRowDefDirective<T> extends CdkRowDef<T> {
    columns: Iterable<string>;
    when: (index: number, rowData: T) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRowDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbRowDefDirective<any>, "[nbRowDef]", never, { "columns": { "alias": "nbRowDefColumns"; "required": false; }; "when": { "alias": "nbRowDefWhen"; "required": false; }; }, {}, never, never, false, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
declare class NbHeaderRowComponent extends CdkHeaderRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbHeaderRowComponent, "nb-header-row, tr[nbHeaderRow]", never, {}, {}, never, never, false, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
declare class NbFooterRowComponent extends CdkFooterRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFooterRowComponent, "nb-footer-row, tr[nbFooterRow]", never, {}, {}, never, never, false, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
declare class NbRowComponent extends CdkRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRowComponent, "nb-row, tr[nbRow]", never, {}, {}, never, never, false, never>;
}

declare const NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbNoDataRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>\n";
declare const NB_VIEW_REPEATER_STRATEGY: i0.InjectionToken<_ViewRepeater<unknown, unknown, _angular_cdk_collections._ViewRepeaterItemContext<unknown>>>;
declare const NB_TABLE_PROVIDERS: Provider[];
declare class NbTable<T> extends CdkTable<T> {
    protected readonly _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>;
    protected readonly _stickyPositioningListener: StickyPositioningListener;
    constructor(differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: StickyPositioningListener);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTable<any>, [null, null, null, { attribute: "role"; }, null, null, null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTable<any>, "nb-table-not-implemented", never, {}, {}, never, never, false, never>;
}
declare class NbTableModule extends CdkTableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTableModule, [typeof NbTable, typeof NbHeaderCellDefDirective, typeof NbHeaderRowDefDirective, typeof NbColumnDefDirective, typeof NbCellDefDirective, typeof NbRowDefDirective, typeof NbFooterCellDefDirective, typeof NbFooterRowDefDirective, typeof NbDataRowOutletDirective, typeof NbHeaderRowOutletDirective, typeof NbFooterRowOutletDirective, typeof NbNoDataRowOutletDirective, typeof NbCellOutletDirective, typeof NbHeaderCellDirective, typeof NbCellDirective, typeof NbFooterCellDirective, typeof NbHeaderRowComponent, typeof NbRowComponent, typeof NbFooterRowComponent], [typeof NbBidiModule], [typeof NbTable, typeof NbHeaderCellDefDirective, typeof NbHeaderRowDefDirective, typeof NbColumnDefDirective, typeof NbCellDefDirective, typeof NbRowDefDirective, typeof NbFooterCellDefDirective, typeof NbFooterRowDefDirective, typeof NbDataRowOutletDirective, typeof NbHeaderRowOutletDirective, typeof NbFooterRowOutletDirective, typeof NbNoDataRowOutletDirective, typeof NbCellOutletDirective, typeof NbHeaderCellDirective, typeof NbCellDirective, typeof NbFooterCellDirective, typeof NbHeaderRowComponent, typeof NbRowComponent, typeof NbFooterRowComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTableModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare const NB_DIALOG_CONFIG: InjectionToken<NbDialogConfig<any>>;
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
declare class NbDialogConfig<D = any> {
    /**
     * If true than overlay will render backdrop under a dialog.
     * */
    hasBackdrop: boolean;
    /**
     * Class that'll be assigned to the backdrop element.
     * */
    backdropClass: string;
    /**
     * Class that'll be assigned to the dialog overlay.
     * */
    dialogClass: string;
    /**
     * If true then mouse clicks by backdrop will close a dialog.
     * */
    closeOnBackdropClick: boolean;
    /**
     * If true then escape press will close a dialog.
     * */
    closeOnEsc: boolean;
    /**
     * Disables scroll on content under dialog if true and does nothing otherwise.
     * */
    hasScroll: boolean;
    /**
     * Focuses dialog automatically after open if true.
     * */
    autoFocus: boolean;
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    viewContainerRef: ViewContainerRef;
    context: D;
    constructor(config: Partial<NbDialogConfig>);
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The `NbDialogRef` helps to manipulate dialog after it was created.
 * The dialog can be dismissed by using `close` method of the dialogRef.
 * You can access rendered component as `content` property of the dialogRef.
 * `onBackdropClick` streams click events on the backdrop of the dialog.
 * */
declare class NbDialogRef<T> {
    protected overlayRef: NbOverlayRef;
    componentRef: ComponentRef<T>;
    /**
     * Stream of backdrop click events.
     * */
    readonly onBackdropClick: Observable<MouseEvent>;
    protected onClose$: Subject<any>;
    readonly onClose: Observable<any>;
    constructor(overlayRef: NbOverlayRef);
    /**
     * Hides dialog.
     * */
    close(res?: any): void;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
declare class NbDialogContainerComponent implements OnInit, OnDestroy {
    protected config: NbDialogConfig;
    protected elementRef: ElementRef;
    protected focusTrapFactory: NbFocusTrapFactoryService;
    portalOutlet: NbPortalOutletDirective;
    protected focusTrap: NbFocusTrap;
    constructor(config: NbDialogConfig, elementRef: ElementRef, focusTrapFactory: NbFocusTrapFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    attachComponentPortal<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDialogContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDialogContainerComponent, "nb-dialog-container", never, {}, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The `NbDialogService` helps to open dialogs.
 *
 * @stacked-example(Showcase, dialog/dialog-showcase.component)
 *
 * A new dialog is opened by calling the `open` method with a component to be loaded and an optional configuration.
 * `open` method will return `NbDialogRef` that can be used for the further manipulations.
 *
 * ### Installation
 *
 * Import `NbDialogModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install it with `NbDialogModule.forChild()`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * ```ts
 * const dialogRef = this.dialogService.open(MyDialogComponent, { ... });
 * ```
 *
 * `NbDialogRef` gives capability access reference to the rendered dialog component,
 * destroy dialog and some other options described below.
 *
 * Also, you can inject `NbDialogRef` in dialog component.
 *
 * ```ts
 * this.dialogService.open(MyDialogComponent, { ... });
 *
 * // my-dialog.component.ts
 * constructor(protected dialogRef: NbDialogRef) {
 * }
 *
 * close() {
 *   this.dialogRef.close();
 * }
 * ```
 *
 * Instead of component you can create dialog from TemplateRef:
 *
 * @stacked-example(Template ref, dialog/dialog-template.component)
 *
 * The dialog may return result through `NbDialogRef`. Calling component can receive this result with `onClose`
 * stream of `NbDialogRef`.
 *
 * @stacked-example(Result, dialog/dialog-result.component)
 *
 * ### Configuration
 *
 * As we mentioned above, `open` method of the `NbDialogService` may receive optional configuration options.
 * Also, you can provide global dialogs configuration through `NbDialogModule.forRoot({ ... })`.
 *
 * This config may contain the following:
 *
 * `context` - both, template and component may receive data through `config.context` property.
 * For components, this data will be assigned through inputs.
 * For templates, you can access it inside template as $implicit.
 *
 * ```ts
 * this.dialogService.open(template, { context: 'pass data in template' });
 * ```
 *
 * ```html
 * <ng-template let-some-additional-data>
 *   {{ some-additional-data }}
 * <ng-template/>
 * ```
 *
 * `hasBackdrop` - determines is service have to render backdrop under the dialog.
 * Default is true.
 * @stacked-example(Backdrop, dialog/dialog-has-backdrop.component)
 *
 * `closeOnBackdropClick` - close dialog on backdrop click if true.
 * Default is true.
 * @stacked-example(Backdrop click, dialog/dialog-backdrop-click.component)
 *
 * `closeOnEsc` - close dialog on escape button on the keyboard.
 * Default is true.
 * @stacked-example(Escape hit, dialog/dialog-esc.component)
 *
 * `hasScroll` - Disables scroll on content under dialog if true and does nothing otherwise.
 * Default is false.
 * Please, open dialogs in the separate window and try to scroll.
 * @stacked-example(Scroll, dialog/dialog-scroll.component)
 *
 * `autoFocus` - Focuses dialog automatically after open if true. It's useful to prevent misclicks on
 * trigger elements and opening multiple dialogs.
 * Default is true.
 *
 * As you can see, if you open dialog with auto focus dialog will focus first focusable element
 * or just blur previously focused automatically.
 * Otherwise, without auto focus, the focus will stay on the previously focused element.
 * Please, open dialogs in the separate window and try to click on the button without focus
 * and then hit space any times. Multiple same dialogs will be opened.
 * @stacked-example(Auto focus, dialog/dialog-auto-focus.component)
 * */
declare class NbDialogService {
    protected document: any;
    protected globalConfig: any;
    protected positionBuilder: NbPositionBuilderService;
    protected overlay: NbOverlayService;
    protected injector: Injector;
    constructor(document: any, globalConfig: any, positionBuilder: NbPositionBuilderService, overlay: NbOverlayService, injector: Injector);
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    open<T>(content: Type<T> | TemplateRef<T>, userConfig?: Partial<NbDialogConfig<Partial<T> | string>>): NbDialogRef<T>;
    protected createOverlay(config: NbDialogConfig): NbOverlayRef;
    protected createPositionStrategy(): NbGlobalPositionStrategy;
    protected createScrollStrategy(hasScroll: boolean): NbScrollStrategy;
    protected createContainer(config: NbDialogConfig, overlayRef: NbOverlayRef): NbDialogContainerComponent;
    protected createContent<T>(config: NbDialogConfig, content: Type<T> | TemplateRef<T>, container: NbDialogContainerComponent, dialogRef: NbDialogRef<T>): void;
    protected createTemplatePortal<T>(config: NbDialogConfig, content: TemplateRef<T>, dialogRef: NbDialogRef<T>): NbTemplatePortal;
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    protected createComponentPortal<T>(config: NbDialogConfig, content: Type<T>, dialogRef: NbDialogRef<T>): NbComponentPortal;
    protected createInjector(config: NbDialogConfig): Injector;
    protected registerCloseListeners<T>(config: NbDialogConfig, overlayRef: NbOverlayRef, dialogRef: NbDialogRef<T>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDialogService>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbDialogModule {
    static forRoot(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static forChild(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbDialogModule, [typeof NbDialogContainerComponent], [typeof NbSharedModule, typeof NbOverlayModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbDialogModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type IconToClassMap = {
    [status in NbComponentStatus]: string;
};
declare const NB_TOASTR_CONFIG: InjectionToken<NbToastrConfig>;
type NbDuplicateToastBehaviour = 'previous' | 'all';
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
declare class NbToastrConfig {
    /**
     * Determines where on the screen toast have to be rendered.
     * */
    position: NbGlobalPosition;
    /**
     * Status chooses color scheme for the toast.
     * */
    status: NbComponentOrCustomStatus;
    /**
     * Duration is timeout between toast appears and disappears.
     * */
    duration: number;
    /**
     * Destroy by click means you can hide the toast by clicking it.
     * */
    destroyByClick: boolean;
    /**
     * If preventDuplicates is true then the toast with the same title, message and status will not be rendered.
     * Find duplicates behaviour determined by `preventDuplicates`.
     * The default `previous` duplicate behaviour is used.
     * */
    preventDuplicates: boolean;
    /**
     * Determines the how to treat duplicates.
     * */
    duplicatesBehaviour: NbDuplicateToastBehaviour;
    limit?: number;
    /**
     * Class to be applied to the toast.
     */
    toastClass: string;
    /**
     * Determines render icon or not.
     * */
    hasIcon: boolean;
    /**
     * Icon name or icon config object that can be provided to render custom icon.
     * */
    icon: string | NbIconConfig;
    /**
     * Toast status icon-class mapping.
     * */
    protected icons: IconToClassMap;
    constructor(config: Partial<NbToastrConfig>);
    protected patchIcon(config: Partial<NbToastrConfig>): void;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbToast {
    title: string;
    message: string;
    config: NbToastrConfig;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
declare class NbToastComponent implements OnInit, OnDestroy {
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    protected statusService: NbStatusService;
    toast: NbToast;
    destroy: EventEmitter<void>;
    toastClick: EventEmitter<void>;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get primary(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get destroyByClick(): boolean;
    get hasIcon(): boolean;
    get customIcon(): boolean;
    get icon(): string | NbIconConfig;
    get additionalClasses(): string[];
    onClick(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef, statusService: NbStatusService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbToastComponent, "nb-toast", never, { "toast": { "alias": "toast"; "required": false; }; }, { "destroy": "destroy"; "toastClick": "toastClick"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbToastrContainerComponent implements OnInit, OnDestroy {
    protected layoutDirection: NbLayoutDirectionService;
    protected positionHelper: NbPositionHelper;
    protected destroy$: Subject<void>;
    content: NbToast[];
    context: Object;
    position: NbGlobalPosition;
    toasts: QueryList<NbToastComponent>;
    fadeIn: any;
    constructor(layoutDirection: NbLayoutDirectionService, positionHelper: NbPositionHelper);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected onDirectionChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbToastrContainerComponent, "nb-toastr-container", never, { "content": { "alias": "content"; "required": false; }; "context": { "alias": "context"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbToastrModule {
    static forRoot(toastrConfig?: Partial<NbToastrConfig>): ModuleWithProviders<NbToastrModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbToastrModule, [typeof NbToastrContainerComponent, typeof NbToastComponent], [typeof NbSharedModule, typeof NbOverlayModule, typeof NbIconModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbToastrModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

declare class NbToastRef {
    private toastContainer;
    private toast;
    toastInstance: NbToastComponent;
    constructor(toastContainer: NbToastContainer, toast: NbToast);
    close(): void;
    onClose(): Observable<void>;
    onClick(): Observable<void>;
}
declare class NbToastContainer {
    protected position: NbGlobalPosition;
    protected containerRef: ComponentRef<NbToastrContainerComponent>;
    protected positionHelper: NbPositionHelper;
    protected toasts: NbToast[];
    protected prevToast: NbToast;
    get nativeElement(): any;
    constructor(position: NbGlobalPosition, containerRef: ComponentRef<NbToastrContainerComponent>, positionHelper: NbPositionHelper);
    attach(toast: NbToast): NbToastRef;
    destroy(toast: NbToast): void;
    protected isDuplicate(toast: NbToast): boolean;
    protected isDuplicatePrevious(toast: NbToast): boolean;
    protected isDuplicateAmongAll(toast: NbToast): boolean;
    protected toastDuplicateCompareFunc: (t1: NbToast, t2: NbToast) => boolean;
    protected removeToastIfLimitReached(toast: NbToast): void;
    protected attachToast(toast: NbToast): NbToastComponent;
    protected attachToTop(toast: NbToast): NbToastComponent;
    protected attachToBottom(toast: NbToast): NbToastComponent;
    protected setDestroyTimeout(toast: NbToast): void;
    protected subscribeOnClick(toastComponent: NbToastComponent, toast: NbToast): void;
    protected updateContainer(): void;
}
interface NbToastrOverlayWithContainer {
    overlayRef: NbOverlayRef;
    toastrContainer: NbToastContainer;
}
declare class NbToastrContainerRegistry {
    protected overlay: NbOverlayService;
    protected positionBuilder: NbPositionBuilderService;
    protected positionHelper: NbPositionHelper;
    protected document: any;
    protected overlays: Map<NbGlobalPosition, NbToastrOverlayWithContainer>;
    constructor(overlay: NbOverlayService, positionBuilder: NbPositionBuilderService, positionHelper: NbPositionHelper, document: any);
    get(position: NbGlobalPosition): NbToastContainer;
    protected instantiateContainer(position: NbGlobalLogicalPosition): void;
    protected createContainer(position: NbGlobalLogicalPosition): NbToastrOverlayWithContainer;
    protected addClassToOverlayHost(overlayRef: NbOverlayRef): void;
    protected existsInDom(toastContainer: NbToastContainer): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrContainerRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbToastrContainerRegistry>;
}
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `basic`.
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title, message and status.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `duplicatesBehaviour` - determines how to treat the toasts duplication.
 * Compare with the previous message `previous`
 * or with all visible messages `all`.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-prevent-duplicates-behaviour.component)
 *
 * `limit` - the number of visible toasts in the toast container. The number of toasts is unlimited by default.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-limit.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
declare class NbToastrService {
    protected globalConfig: NbToastrConfig;
    protected containerRegistry: NbToastrContainerRegistry;
    constructor(globalConfig: NbToastrConfig, containerRegistry: NbToastrContainerRegistry);
    /**
     * Shows toast with message, title and user config.
     * */
    show(message: any, title?: any, userConfig?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows control toast with message, title and user config.
     * */
    control(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbToastrService>;
}

/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
declare class NbTooltipComponent implements NbRenderableContainer {
    protected statusService: NbStatusService;
    content: string;
    /**
     * Popover position relatively host element.
     * */
    position: NbPosition;
    get binding(): string;
    get show(): boolean;
    context: {
        icon?: string | NbIconConfig;
        status?: NbComponentOrCustomStatus;
    };
    get statusClass(): string;
    constructor(statusService: NbStatusService);
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTooltipComponent, "nb-tooltip", never, { "content": { "alias": "content"; "required": false; }; "position": { "alias": "position"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` property:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 * Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 */
declare class NbTooltipDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    protected hostRef: ElementRef;
    protected dynamicOverlayHandler: NbDynamicOverlayHandler;
    protected destroy$: Subject<void>;
    protected tooltipComponent: typeof NbTooltipComponent;
    protected dynamicOverlay: NbDynamicOverlay;
    context: Object;
    /**
     * Tooltip message
     */
    content: string;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     */
    position: NbPosition;
    static ngAcceptInputType_position: NbPositionValues;
    /**
     * Container position will change automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatic adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     */
    get adjustment(): NbAdjustment;
    set adjustment(value: NbAdjustment);
    protected _adjustment: NbAdjustment;
    static ngAcceptInputType_adjustment: NbAdjustmentValues;
    get tooltipClass(): string;
    set tooltipClass(value: string);
    _tooltipClass: string;
    /**
     * Accepts icon name or icon config object
     * @param {string | NbIconConfig} icon name or config object
     */
    set icon(icon: string | NbIconConfig);
    /**
     *
     * @param {string} status
     */
    set status(status: NbComponentOrCustomStatus);
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    /**
     * Determines tooltip overlay offset (in pixels).
     **/
    offset: number;
    /** Disables the display of the tooltip. */
    disabled: boolean;
    nbTooltipShowStateChange: EventEmitter<{
        isShown: boolean;
    }>;
    protected overlayConfig: NbOverlayConfig;
    get isShown(): boolean;
    constructor(hostRef: ElementRef, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTooltipDirective, "[nbTooltip]", ["nbTooltip"], { "content": { "alias": "nbTooltip"; "required": false; }; "position": { "alias": "nbTooltipPlacement"; "required": false; }; "adjustment": { "alias": "nbTooltipAdjustment"; "required": false; }; "tooltipClass": { "alias": "nbTooltipClass"; "required": false; }; "icon": { "alias": "nbTooltipIcon"; "required": false; }; "status": { "alias": "nbTooltipStatus"; "required": false; }; "trigger": { "alias": "nbTooltipTrigger"; "required": false; }; "offset": { "alias": "nbTooltipOffset"; "required": false; }; "disabled": { "alias": "nbTooltipDisabled"; "required": false; }; }, { "nbTooltipShowStateChange": "nbTooltipShowStateChange"; }, never, never, false, never>;
}

declare class NbTooltipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTooltipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTooltipModule, [typeof NbTooltipComponent, typeof NbTooltipDirective], [typeof NbSharedModule, typeof NbOverlayModule, typeof NbIconModule], [typeof NbTooltipDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTooltipModule>;
}

type NbHighlightableOption = Highlightable;
declare class NbActiveDescendantKeyManager<T> extends ActiveDescendantKeyManager<T> {
}
declare class NbActiveDescendantKeyManagerFactoryService<T extends NbHighlightableOption> {
    create(items: QueryList<T> | T[]): NbActiveDescendantKeyManager<T>;
}

/**
 * NbOptionComponent
 *
 * @styles
 *
 * option-background-color:
 * option-text-color:
 * option-text-font-family:
 * option-hover-background-color:
 * option-hover-text-color:
 * option-active-background-color:
 * option-active-text-color:
 * option-focus-background-color:
 * option-focus-text-color:
 * option-selected-background-color:
 * option-selected-text-color:
 * option-selected-hover-background-color:
 * option-selected-hover-text-color:
 * option-selected-active-background-color:
 * option-selected-active-text-color:
 * option-selected-focus-background-color:
 * option-selected-focus-text-color:
 * option-disabled-background-color:
 * option-disabled-text-color:
 * option-tiny-text-font-size:
 * option-tiny-text-font-weight:
 * option-tiny-text-line-height:
 * option-tiny-padding:
 * option-small-text-font-size:
 * option-small-text-font-weight:
 * option-small-text-line-height:
 * option-small-padding:
 * option-medium-text-font-size:
 * option-medium-text-font-weight:
 * option-medium-text-line-height:
 * option-medium-padding:
 * option-large-text-font-size:
 * option-large-text-font-weight:
 * option-large-text-line-height:
 * option-large-padding:
 * option-giant-text-font-size:
 * option-giant-text-font-weight:
 * option-giant-text-line-height:
 * option-giant-padding:
 **/
declare class NbOptionComponent<T = any> implements OnDestroy, AfterViewInit, NbFocusableOption, NbHighlightableOption {
    protected elementRef: ElementRef;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected renderer: Renderer2;
    protected disabledByGroup: boolean;
    /**
     * Option value that will be fired on selection.
     * */
    value: T;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Fires value when option selection change.
     * */
    selectionChange: EventEmitter<NbOptionComponent<T>>;
    /**
     * Fires when option clicked
     */
    protected click$: Subject<NbOptionComponent<T>>;
    get click(): Observable<NbOptionComponent<T>>;
    selected: boolean;
    protected parent: NbSelectComponent;
    protected alive: boolean;
    /**
     * Component scoped id for aria attributes.
     * */
    id: string;
    constructor(parent: any, elementRef: ElementRef, cd: ChangeDetectorRef, zone: NgZone, renderer: Renderer2);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /**
     * Determines should we render checkbox.
     * */
    get withCheckbox(): boolean;
    get content(): any;
    get hidden(): any;
    get multiple(): boolean;
    get selectedClass(): boolean;
    get disabledAttribute(): '' | null;
    get tabindex(): string;
    get activeClass(): boolean;
    protected _active: boolean;
    onClick(event: any): void;
    select(): void;
    deselect(): void;
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled: boolean): void;
    protected setSelection(selected: boolean): void;
    focus(): void;
    getLabel(): string;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOptionComponent<any>, [{ optional: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOptionComponent<any>, "nb-option", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, ["*"], false, never>;
}

type NbSelectCompareFunction<T = any> = (v1: any, v2: any) => boolean;
type NbSelectAppearance = 'outline' | 'filled' | 'hero';
declare class NbSelectLabelComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectLabelComponent, "nb-select-label", never, {}, {}, never, ["*"], false, never>;
}
declare function nbSelectFormFieldControlConfigFactory(): NbFormFieldControlConfig;
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean the selection. Both `null` and `undefined` values will also clean the selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status is `basic`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are five select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `filled`:
 *
 * @stacked-example(Filled select, select/select-filled.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 * By default, the component selects options whose values are strictly equal (`===`) with the select value.
 * To change such behavior, pass a custom comparator function to the `compareWith` attribute.
 *
 * @stacked-example(Select custom comparator, select/select-compare-with.component)
 *
 * You can add an additional icon to the select via the `nb-form-field` component:
 * @stacked-example(Select with icon, select/select-icon.component)
 *
 * @additional-example(Interactive, select/select-interactive.component)
 *
 * @styles
 *
 * select-cursor:
 * select-disabled-cursor:
 * select-min-width:
 * select-outline-width:
 * select-outline-color:
 * select-icon-offset:
 * select-text-font-family:
 * select-placeholder-text-font-family:
 * select-tiny-text-font-size:
 * select-tiny-text-font-weight:
 * select-tiny-text-line-height:
 * select-tiny-placeholder-text-font-size:
 * select-tiny-placeholder-text-font-weight:
 * select-tiny-max-width:
 * select-small-text-font-size:
 * select-small-text-font-weight:
 * select-small-text-line-height:
 * select-small-placeholder-text-font-size:
 * select-small-placeholder-text-font-weight:
 * select-small-max-width:
 * select-medium-text-font-size:
 * select-medium-text-font-weight:
 * select-medium-text-line-height:
 * select-medium-placeholder-text-font-size:
 * select-medium-placeholder-text-font-weight:
 * select-medium-max-width:
 * select-large-text-font-size:
 * select-large-text-font-weight:
 * select-large-text-line-height:
 * select-large-placeholder-text-font-size:
 * select-large-placeholder-text-font-weight:
 * select-large-max-width:
 * select-giant-text-font-size:
 * select-giant-text-font-weight:
 * select-giant-text-line-height:
 * select-giant-placeholder-text-font-size:
 * select-giant-placeholder-text-font-weight:
 * select-giant-max-width:
 * select-rectangle-border-radius:
 * select-semi-round-border-radius:
 * select-round-border-radius:
 * select-outline-border-style:
 * select-outline-border-width:
 * select-outline-tiny-padding:
 * select-outline-small-padding:
 * select-outline-medium-padding:
 * select-outline-large-padding:
 * select-outline-giant-padding:
 * select-outline-basic-icon-color:
 * select-outline-basic-text-color:
 * select-outline-basic-placeholder-text-color:
 * select-outline-basic-background-color:
 * select-outline-basic-border-color:
 * select-outline-basic-focus-background-color:
 * select-outline-basic-focus-border-color:
 * select-outline-basic-hover-background-color:
 * select-outline-basic-hover-border-color:
 * select-outline-basic-disabled-background-color:
 * select-outline-basic-disabled-border-color:
 * select-outline-basic-disabled-icon-color:
 * select-outline-basic-disabled-text-color:
 * select-outline-primary-icon-color:
 * select-outline-primary-text-color:
 * select-outline-primary-placeholder-text-color:
 * select-outline-primary-background-color:
 * select-outline-primary-border-color:
 * select-outline-primary-focus-background-color:
 * select-outline-primary-focus-border-color:
 * select-outline-primary-hover-background-color:
 * select-outline-primary-hover-border-color:
 * select-outline-primary-disabled-background-color:
 * select-outline-primary-disabled-border-color:
 * select-outline-primary-disabled-icon-color:
 * select-outline-primary-disabled-text-color:
 * select-outline-success-icon-color:
 * select-outline-success-text-color:
 * select-outline-success-placeholder-text-color:
 * select-outline-success-background-color:
 * select-outline-success-border-color:
 * select-outline-success-focus-background-color:
 * select-outline-success-focus-border-color:
 * select-outline-success-hover-background-color:
 * select-outline-success-hover-border-color:
 * select-outline-success-disabled-background-color:
 * select-outline-success-disabled-border-color:
 * select-outline-success-disabled-icon-color:
 * select-outline-success-disabled-text-color:
 * select-outline-info-icon-color:
 * select-outline-info-text-color:
 * select-outline-info-placeholder-text-color:
 * select-outline-info-background-color:
 * select-outline-info-border-color:
 * select-outline-info-focus-background-color:
 * select-outline-info-focus-border-color:
 * select-outline-info-hover-background-color:
 * select-outline-info-hover-border-color:
 * select-outline-info-disabled-background-color:
 * select-outline-info-disabled-border-color:
 * select-outline-info-disabled-icon-color:
 * select-outline-info-disabled-text-color:
 * select-outline-warning-icon-color:
 * select-outline-warning-text-color:
 * select-outline-warning-placeholder-text-color:
 * select-outline-warning-background-color:
 * select-outline-warning-border-color:
 * select-outline-warning-focus-background-color:
 * select-outline-warning-focus-border-color:
 * select-outline-warning-hover-background-color:
 * select-outline-warning-hover-border-color:
 * select-outline-warning-disabled-background-color:
 * select-outline-warning-disabled-border-color:
 * select-outline-warning-disabled-icon-color:
 * select-outline-warning-disabled-text-color:
 * select-outline-danger-icon-color:
 * select-outline-danger-text-color:
 * select-outline-danger-placeholder-text-color:
 * select-outline-danger-background-color:
 * select-outline-danger-border-color:
 * select-outline-danger-focus-background-color:
 * select-outline-danger-focus-border-color:
 * select-outline-danger-hover-background-color:
 * select-outline-danger-hover-border-color:
 * select-outline-danger-disabled-background-color:
 * select-outline-danger-disabled-border-color:
 * select-outline-danger-disabled-icon-color:
 * select-outline-danger-disabled-text-color:
 * select-outline-control-icon-color:
 * select-outline-control-text-color:
 * select-outline-control-placeholder-text-color:
 * select-outline-control-background-color:
 * select-outline-control-border-color:
 * select-outline-control-focus-background-color:
 * select-outline-control-focus-border-color:
 * select-outline-control-hover-background-color:
 * select-outline-control-hover-border-color:
 * select-outline-control-disabled-background-color:
 * select-outline-control-disabled-border-color:
 * select-outline-control-disabled-icon-color:
 * select-outline-control-disabled-text-color:
 * select-outline-adjacent-border-style:
 * select-outline-adjacent-border-width:
 * select-outline-basic-open-border-color:
 * select-outline-basic-adjacent-border-color:
 * select-outline-primary-open-border-color:
 * select-outline-primary-adjacent-border-color:
 * select-outline-success-open-border-color:
 * select-outline-success-adjacent-border-color:
 * select-outline-info-open-border-color:
 * select-outline-info-adjacent-border-color:
 * select-outline-warning-open-border-color:
 * select-outline-warning-adjacent-border-color:
 * select-outline-danger-open-border-color:
 * select-outline-danger-adjacent-border-color:
 * select-outline-control-open-border-color:
 * select-outline-control-adjacent-border-color:
 * select-filled-border-style:
 * select-filled-border-width:
 * select-filled-tiny-padding:
 * select-filled-small-padding:
 * select-filled-medium-padding:
 * select-filled-large-padding:
 * select-filled-giant-padding:
 * select-filled-basic-background-color:
 * select-filled-basic-border-color:
 * select-filled-basic-icon-color:
 * select-filled-basic-text-color:
 * select-filled-basic-placeholder-text-color:
 * select-filled-basic-focus-background-color:
 * select-filled-basic-focus-border-color:
 * select-filled-basic-hover-background-color:
 * select-filled-basic-hover-border-color:
 * select-filled-basic-disabled-background-color:
 * select-filled-basic-disabled-border-color:
 * select-filled-basic-disabled-icon-color:
 * select-filled-basic-disabled-text-color:
 * select-filled-primary-background-color:
 * select-filled-primary-border-color:
 * select-filled-primary-icon-color:
 * select-filled-primary-text-color:
 * select-filled-primary-placeholder-text-color:
 * select-filled-primary-focus-background-color:
 * select-filled-primary-focus-border-color:
 * select-filled-primary-hover-background-color:
 * select-filled-primary-hover-border-color:
 * select-filled-primary-disabled-background-color:
 * select-filled-primary-disabled-border-color:
 * select-filled-primary-disabled-icon-color:
 * select-filled-primary-disabled-text-color:
 * select-filled-success-background-color:
 * select-filled-success-border-color:
 * select-filled-success-icon-color:
 * select-filled-success-text-color:
 * select-filled-success-placeholder-text-color:
 * select-filled-success-focus-background-color:
 * select-filled-success-focus-border-color:
 * select-filled-success-hover-background-color:
 * select-filled-success-hover-border-color:
 * select-filled-success-disabled-background-color:
 * select-filled-success-disabled-border-color:
 * select-filled-success-disabled-icon-color:
 * select-filled-success-disabled-text-color:
 * select-filled-info-background-color:
 * select-filled-info-border-color:
 * select-filled-info-icon-color:
 * select-filled-info-text-color:
 * select-filled-info-placeholder-text-color:
 * select-filled-info-focus-background-color:
 * select-filled-info-focus-border-color:
 * select-filled-info-hover-background-color:
 * select-filled-info-hover-border-color:
 * select-filled-info-disabled-background-color:
 * select-filled-info-disabled-border-color:
 * select-filled-info-disabled-icon-color:
 * select-filled-info-disabled-text-color:
 * select-filled-warning-background-color:
 * select-filled-warning-border-color:
 * select-filled-warning-icon-color:
 * select-filled-warning-text-color:
 * select-filled-warning-placeholder-text-color:
 * select-filled-warning-focus-background-color:
 * select-filled-warning-focus-border-color:
 * select-filled-warning-hover-background-color:
 * select-filled-warning-hover-border-color:
 * select-filled-warning-disabled-background-color:
 * select-filled-warning-disabled-border-color:
 * select-filled-warning-disabled-icon-color:
 * select-filled-warning-disabled-text-color:
 * select-filled-danger-background-color:
 * select-filled-danger-border-color:
 * select-filled-danger-icon-color:
 * select-filled-danger-text-color:
 * select-filled-danger-placeholder-text-color:
 * select-filled-danger-focus-background-color:
 * select-filled-danger-focus-border-color:
 * select-filled-danger-hover-background-color:
 * select-filled-danger-hover-border-color:
 * select-filled-danger-disabled-background-color:
 * select-filled-danger-disabled-border-color:
 * select-filled-danger-disabled-icon-color:
 * select-filled-danger-disabled-text-color:
 * select-filled-control-background-color:
 * select-filled-control-border-color:
 * select-filled-control-icon-color:
 * select-filled-control-text-color:
 * select-filled-control-placeholder-text-color:
 * select-filled-control-focus-background-color:
 * select-filled-control-focus-border-color:
 * select-filled-control-hover-background-color:
 * select-filled-control-hover-border-color:
 * select-filled-control-disabled-background-color:
 * select-filled-control-disabled-border-color:
 * select-filled-control-disabled-icon-color:
 * select-filled-control-disabled-text-color:
 * select-hero-tiny-padding:
 * select-hero-small-padding:
 * select-hero-medium-padding:
 * select-hero-large-padding:
 * select-hero-giant-padding:
 * select-hero-basic-left-background-color:
 * select-hero-basic-right-background-color:
 * select-hero-basic-icon-color:
 * select-hero-basic-text-color:
 * select-hero-basic-placeholder-text-color:
 * select-hero-basic-focus-left-background-color:
 * select-hero-basic-focus-right-background-color:
 * select-hero-basic-hover-left-background-color:
 * select-hero-basic-hover-right-background-color:
 * select-hero-basic-disabled-background-color:
 * select-hero-basic-disabled-icon-color:
 * select-hero-basic-disabled-text-color:
 * select-hero-primary-left-background-color:
 * select-hero-primary-right-background-color:
 * select-hero-primary-icon-color:
 * select-hero-primary-text-color:
 * select-hero-primary-placeholder-text-color:
 * select-hero-primary-focus-left-background-color:
 * select-hero-primary-focus-right-background-color:
 * select-hero-primary-hover-left-background-color:
 * select-hero-primary-hover-right-background-color:
 * select-hero-primary-disabled-background-color:
 * select-hero-primary-disabled-icon-color:
 * select-hero-primary-disabled-text-color:
 * select-hero-success-left-background-color:
 * select-hero-success-right-background-color:
 * select-hero-success-icon-color:
 * select-hero-success-text-color:
 * select-hero-success-placeholder-text-color:
 * select-hero-success-focus-left-background-color:
 * select-hero-success-focus-right-background-color:
 * select-hero-success-hover-left-background-color:
 * select-hero-success-hover-right-background-color:
 * select-hero-success-disabled-background-color:
 * select-hero-success-disabled-icon-color:
 * select-hero-success-disabled-text-color:
 * select-hero-info-left-background-color:
 * select-hero-info-right-background-color:
 * select-hero-info-icon-color:
 * select-hero-info-text-color:
 * select-hero-info-placeholder-text-color:
 * select-hero-info-focus-left-background-color:
 * select-hero-info-focus-right-background-color:
 * select-hero-info-hover-left-background-color:
 * select-hero-info-hover-right-background-color:
 * select-hero-info-disabled-background-color:
 * select-hero-info-disabled-icon-color:
 * select-hero-info-disabled-text-color:
 * select-hero-warning-left-background-color:
 * select-hero-warning-right-background-color:
 * select-hero-warning-icon-color:
 * select-hero-warning-text-color:
 * select-hero-warning-placeholder-text-color:
 * select-hero-warning-focus-left-background-color:
 * select-hero-warning-focus-right-background-color:
 * select-hero-warning-hover-left-background-color:
 * select-hero-warning-hover-right-background-color:
 * select-hero-warning-disabled-background-color:
 * select-hero-warning-disabled-icon-color:
 * select-hero-warning-disabled-text-color:
 * select-hero-danger-left-background-color:
 * select-hero-danger-right-background-color:
 * select-hero-danger-icon-color:
 * select-hero-danger-text-color:
 * select-hero-danger-placeholder-text-color:
 * select-hero-danger-focus-left-background-color:
 * select-hero-danger-focus-right-background-color:
 * select-hero-danger-hover-left-background-color:
 * select-hero-danger-hover-right-background-color:
 * select-hero-danger-disabled-background-color:
 * select-hero-danger-disabled-icon-color:
 * select-hero-danger-disabled-text-color:
 * select-hero-control-left-background-color:
 * select-hero-control-right-background-color:
 * select-hero-control-icon-color:
 * select-hero-control-text-color:
 * select-hero-control-placeholder-text-color:
 * select-hero-control-focus-left-background-color:
 * select-hero-control-focus-right-background-color:
 * select-hero-control-hover-left-background-color:
 * select-hero-control-hover-right-background-color:
 * select-hero-control-disabled-background-color:
 * select-hero-control-disabled-icon-color:
 * select-hero-control-disabled-text-color:
 * */
declare class NbSelectComponent implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor, NbFormFieldControl {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cd: ChangeDetectorRef;
    protected focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    /**
     * Select size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Select status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Select shapes: `rectangle` (default), `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Select appearances: `outline` (default), `filled`, `hero`
     */
    appearance: NbSelectAppearance;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth(): number;
    set optionsWidth(value: number);
    protected _optionsWidth: number | undefined;
    /**
     * Adds `outline` styles
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Adds `filled` styles
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Adds `hero` styles
     */
    get hero(): boolean;
    set hero(value: boolean);
    static ngAcceptInputType_hero: NbBooleanInput;
    /**
     * Disables the select
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith(): NbSelectCompareFunction;
    set compareWith(fn: NbSelectCompareFunction);
    protected _compareWith: NbSelectCompareFunction;
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value: any);
    get selected(): any;
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Determines options overlay offset (in pixels).
     **/
    optionsOverlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    get additionalClasses(): string[];
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<any>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement>;
    /**
     * Determines is select opened.
     * */
    get isOpen(): boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent[];
    positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    protected destroy$: Subject<void>;
    protected keyManager: NbFocusKeyManager<NbOptionComponent>;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: any;
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    status$: BehaviorSubject<string>;
    size$: BehaviorSubject<NbComponentSize>;
    focused$: BehaviorSubject<boolean>;
    disabled$: BehaviorSubject<boolean>;
    fullWidth$: BehaviorSubject<boolean>;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cd: ChangeDetectorRef, focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    /**
     * Determines is select hidden.
     * */
    get isHidden(): boolean;
    /**
     * Returns width of the select button.
     * */
    get hostWidth(): number;
    get selectButtonClasses(): string[];
    /**
     * Content rendered in the label.
     * */
    get selectionView(): any;
    ngOnChanges({ disabled, status, size, fullWidth }: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleOptionClick(option: NbOptionComponent): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent): void;
    protected attachToOverlay(): void;
    protected setActiveOption(): void;
    protected createOverlay(): void;
    protected createKeyManager(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnOverlayKeys(): void;
    protected subscribeOnButtonFocus(): void;
    protected getContainer(): ComponentRef<any>;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: any): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: any): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: any): void;
    protected shouldShow(): boolean;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    protected canSelectValue(): boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectComponent, "nb-select", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "optionsListClass": { "alias": "optionsListClass"; "required": false; }; "optionsPanelClass": { "alias": "optionsPanelClass"; "required": false; }; "optionsWidth": { "alias": "optionsWidth"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "filled": { "alias": "filled"; "required": false; }; "hero": { "alias": "hero"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "optionsOverlayOffset": { "alias": "optionsOverlayOffset"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; }, { "selectedChange": "selectedChange"; }, ["customLabel", "options"], ["nb-select-label", "nb-option, nb-option-group"], false, never>;
}

/**
 * The `NbOptionListComponent` is container component for `NbOptionGroupComponent` and`NbOptionComponent` list.
 *
 * @styles
 *
 * option-list-max-height:
 * option-list-shadow:
 * option-list-background-color:
 * option-list-border-style:
 * option-list-border-width:
 * option-list-border-color:
 * option-list-border-radius:
 * option-list-adjacent-border-color:
 * option-list-adjacent-border-style:
 * option-list-adjacent-border-width:
 * */
declare class NbOptionListComponent<T> {
    size: NbComponentSize;
    position: NbPosition;
    get positionTop(): boolean;
    get positionBottom(): boolean;
    get sizeTiny(): boolean;
    get sizeSmall(): boolean;
    get sizeMedium(): boolean;
    get sizeLarge(): boolean;
    get sizeGiant(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOptionListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOptionListComponent<any>, "nb-option-list", never, { "size": { "alias": "size"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], false, never>;
}

/**
 * NbOptionGroupComponent
 *
 * @styles
 *
 * option-group-text-color:
 * option-group-tiny-start-padding:
 * option-group-small-start-padding:
 * option-group-medium-start-padding:
 * option-group-large-start-padding:
 * option-group-giant-start-padding:
 **/
declare class NbOptionGroupComponent implements AfterContentInit, OnDestroy {
    protected destroy$: Subject<void>;
    title: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    get disabledAttribute(): '' | null;
    options: QueryList<NbOptionComponent<any>>;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    protected updateOptionsDisabledState(): void;
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    protected asyncUpdateOptionsDisabledState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOptionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOptionGroupComponent, "nb-option-group", never, { "title": { "alias": "title"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, ["options"], ["nb-option, ng-container"], false, never>;
}

declare class NbOptionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOptionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbOptionModule, [typeof NbOptionListComponent, typeof NbOptionComponent, typeof NbOptionGroupComponent], [typeof i4.CommonModule, typeof NbCheckboxModule], [typeof NbOptionListComponent, typeof NbOptionComponent, typeof NbOptionGroupComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbOptionModule>;
}

declare class NbSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSelectModule, [typeof NbSelectComponent, typeof NbSelectLabelComponent], [typeof NbSharedModule, typeof NbOverlayModule, typeof NbButtonModule, typeof NbInputModule, typeof NbCardModule, typeof NbIconModule, typeof NbOptionModule], [typeof NbSelectComponent, typeof NbSelectLabelComponent, typeof NbOptionModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSelectModule>;
}

/**
 * Experimental component with autocomplete possibility.
 * Could be changed without any prior notice.
 * Use at your own risk.
 *
 * Style variables is fully inherited.
 * Component's public API (`@Input()` and `@Output()`) works in a same way as NbSelectComponent.
 */
declare class NbSelectWithAutocompleteComponent implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor, NbFormFieldControl {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cd: ChangeDetectorRef;
    protected focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected activeDescendantKeyManagerFactoryService: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent>;
    /**
     * Select size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Select status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Select shapes: `rectangle` (default), `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Select appearances: `outline` (default), `filled`, `hero`
     */
    appearance: NbSelectAppearance;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth(): number;
    set optionsWidth(value: number);
    protected _optionsWidth: number | undefined;
    /**
     * Adds `outline` styles
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Adds `filled` styles
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Adds `hero` styles
     */
    get hero(): boolean;
    set hero(value: boolean);
    static ngAcceptInputType_hero: NbBooleanInput;
    /**
     * Disables the select
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith(): NbSelectCompareFunction;
    set compareWith(fn: NbSelectCompareFunction);
    protected _compareWith: NbSelectCompareFunction;
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value: any);
    get selected(): any;
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Determines options overlay offset (in pixels).
     **/
    optionsOverlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    /**
     * Experimental input.
     * Could be changed without any prior notice.
     * Use at your own risk.
     *
     * It replaces the button with input when the select is opened.
     * That replacement provides a very basic API to implement options filtering functionality.
     * Filtering itself isn't implemented inside select.
     * So it should be implemented by the user.
     */
    set withOptionsAutocomplete(value: boolean);
    get withOptionsAutocomplete(): boolean;
    protected _withOptionsAutocomplete: boolean;
    get additionalClasses(): string[];
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<any>;
    selectOpen: EventEmitter<void>;
    selectClose: EventEmitter<void>;
    optionsAutocompleteInputChange: EventEmitter<string>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement> | undefined;
    optionsAutocompleteInput: ElementRef<HTMLInputElement> | undefined;
    /**
     * Determines is select opened.
     * */
    get isOpen(): boolean;
    get isOptionsAutocompleteAllowed(): boolean;
    get isOptionsAutocompleteInputShown(): boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent[];
    positionStrategy$: BehaviorSubject<NbAdjustableConnectedPositionStrategy | undefined>;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    protected destroy$: Subject<void>;
    protected currentKeyManager: ListKeyManager<NbOptionComponent>;
    protected focusKeyManager: NbFocusKeyManager<NbOptionComponent>;
    protected activeDescendantKeyManager: NbActiveDescendantKeyManager<NbOptionComponent>;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: any;
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    status$: BehaviorSubject<string>;
    size$: BehaviorSubject<NbComponentSize>;
    focused$: BehaviorSubject<boolean>;
    disabled$: BehaviorSubject<boolean>;
    fullWidth$: BehaviorSubject<boolean>;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cd: ChangeDetectorRef, focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService, activeDescendantKeyManagerFactoryService: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent>);
    /**
     * Determines is select hidden.
     * */
    get isHidden(): boolean;
    /**
     * Returns width of the select button.
     * */
    get hostWidth(): number;
    lastShownButtonWidth: number | undefined;
    get selectButtonClasses(): string[];
    /**
     * Content rendered in the label.
     * */
    get selectionView(): any;
    ngOnChanges({ disabled, status, size, fullWidth }: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onAutocompleteInputChange(event: Event): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleOptionClick(option: NbOptionComponent): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent): void;
    protected attachToOverlay(): void;
    protected setActiveOption(): void;
    protected createOverlay(): void;
    protected createKeyManager(): void;
    protected updateCurrentKeyManager(): void;
    protected resetAutocompleteInput(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected updatePositionStrategy(): void;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnOverlayKeys(): void;
    protected subscribeOnOptionsAutocompleteChange(): void;
    protected subscribeOnButtonFocus(): void;
    protected getContainer(): ComponentRef<any>;
    protected focusButton(): void;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: any): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: any): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: any): void;
    protected shouldShow(): boolean;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    protected canSelectValue(): boolean;
    protected isOptionHidden(option: NbOptionComponent): boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectWithAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectWithAutocompleteComponent, "nb-select-with-autocomplete", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "optionsListClass": { "alias": "optionsListClass"; "required": false; }; "optionsPanelClass": { "alias": "optionsPanelClass"; "required": false; }; "optionsWidth": { "alias": "optionsWidth"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "filled": { "alias": "filled"; "required": false; }; "hero": { "alias": "hero"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "optionsOverlayOffset": { "alias": "optionsOverlayOffset"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; "withOptionsAutocomplete": { "alias": "withOptionsAutocomplete"; "required": false; }; }, { "selectedChange": "selectedChange"; "selectOpen": "selectOpen"; "selectClose": "selectClose"; "optionsAutocompleteInputChange": "optionsAutocompleteInputChange"; }, ["customLabel", "options"], ["nb-select-label", "nb-option, nb-option-group"], false, never>;
}

declare class NbPrefixDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPrefixDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPrefixDirective, "[nbPrefix]", never, {}, {}, never, never, false, never>;
}

declare class NbSuffixDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSuffixDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbSuffixDirective, "[nbSuffix]", never, {}, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type NbFormControlAddon = 'prefix' | 'suffix';
declare class NbFormFieldComponent implements AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy {
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    protected readonly destroy$: Subject<void>;
    protected formControlState$: ReplaySubject<NbFormControlState>;
    prefixClasses$: Observable<string[]>;
    suffixClasses$: Observable<string[]>;
    prefix: QueryList<NbPrefixDirective>;
    suffix: QueryList<NbSuffixDirective>;
    formControl: NbFormFieldControl;
    formControlConfig: NbFormFieldControlConfig;
    formFieldClasses: any;
    constructor(cd: ChangeDetectorRef, zone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    shouldShowPrefix(): boolean;
    shouldShowSuffix(): boolean;
    protected subscribeToFormControlStateChange(): void;
    protected subscribeToAddonChange(): void;
    protected getAddonClasses(addon: NbFormControlAddon, state: NbFormControlState): string[];
    protected getFormControlConfig(): NbFormFieldControlConfig;
    protected isStatesEqual(oldState: NbFormControlState, state: NbFormControlState): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFormFieldComponent, "nb-form-field", never, {}, {}, ["formControl", "formControlConfig", "prefix", "suffix"], ["[nbPrefix]", "*", "[nbSuffix]"], false, never>;
}

declare class NbFormFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbFormFieldModule, [typeof NbFormFieldComponent, typeof NbPrefixDirective, typeof NbSuffixDirective], [typeof i4.CommonModule], [typeof NbFormFieldComponent, typeof NbPrefixDirective, typeof NbSuffixDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbFormFieldModule>;
}

declare class NbSelectWithAutocompleteModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectWithAutocompleteModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbSelectWithAutocompleteModule, [typeof NbSelectWithAutocompleteComponent], [typeof NbSharedModule, typeof NbOverlayModule, typeof NbButtonModule, typeof NbInputModule, typeof NbCardModule, typeof NbIconModule, typeof NbOptionModule, typeof NbFormFieldModule, typeof NbSelectModule], [typeof NbSelectWithAutocompleteComponent, typeof NbOptionModule, typeof NbSelectModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbSelectWithAutocompleteModule>;
}

declare const NB_SELECT_INJECTION_TOKEN: InjectionToken<unknown>;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
declare class NbAutocompleteComponent<T> implements AfterContentInit, OnDestroy {
    protected cd: ChangeDetectorRef;
    protected destroy$: Subject<void>;
    /**
     * HTML input reference to which autocomplete connected.
     * */
    hostRef: ElementRef;
    /**
     * Component scoped id for aria attributes.
     * */
    id: string;
    /**
     * @docs-private
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction.
     */
    _overlayPosition: NbPosition;
    get overlayPosition(): NbPosition;
    set overlayPosition(value: NbPosition);
    /**
     * Returns width of the input.
     * */
    get hostWidth(): number;
    /**
     * Function passed as input to process each string option value before render.
     * */
    handleDisplayFn: (value: any) => string;
    /**
     * Autocomplete size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Flag passed as input to always make first option active.
     * */
    activeFirst: boolean;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth(): number;
    set optionsWidth(value: number);
    protected _optionsWidth: number | undefined;
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<T>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * */
    options: QueryList<NbOptionComponent<T>>;
    /**
     * NbOptionList with options content.
     * */
    portal: NbPortalDirective;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef: ElementRef): void;
    /**
     * Propagate selected value.
     * */
    emitSelected(selected: T): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAutocompleteComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAutocompleteComponent<any>, "nb-autocomplete", never, { "handleDisplayFn": { "alias": "handleDisplayFn"; "required": false; }; "size": { "alias": "size"; "required": false; }; "activeFirst": { "alias": "activeFirst"; "required": false; }; "optionsListClass": { "alias": "optionsListClass"; "required": false; }; "optionsPanelClass": { "alias": "optionsPanelClass"; "required": false; }; "optionsWidth": { "alias": "optionsWidth"; "required": false; }; }, { "selectedChange": "selectedChange"; }, ["options"], ["nb-option, nb-option-group"], false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * The `NbAutocompleteDirective` provides a capability to expand input with
 * `NbAutocompleteComponent` overlay containing options to select and fill input with.
 *
 * @stacked-example(Showcase, autocomplete/autocomplete-showcase.component)
 *
 * ### Installation
 *
 * Import `NbAutocompleteModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAutocompleteModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * You can bind control with form controls or ngModel.
 *
 * @stacked-example(Autocomplete form binding, autocomplete/autocomplete-form.component)
 *
 * Options in the autocomplete may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, autocomplete/autocomplete-group.component)
 *
 * Autocomplete may change selected option value via provided function.
 *
 * @stacked-example(Custom display, autocomplete/autocomplete-custom-display.component)
 *
 * Also, autocomplete may make first option in option list active automatically.
 *
 * @stacked-example(Active first, autocomplete/autocomplete-active-first.component)
 *
 * */
declare class NbAutocompleteDirective<T> implements OnDestroy, AfterViewInit, ControlValueAccessor {
    protected hostRef: ElementRef;
    protected overlay: NbOverlayService;
    protected cd: ChangeDetectorRef;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected positionBuilder: NbPositionBuilderService;
    protected activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent<T>>;
    protected renderer: Renderer2;
    /**
     * NbAutocompleteComponent instance passed via input.
     * */
    protected _autocomplete: NbAutocompleteComponent<T>;
    /**
     * Trigger strategy used by overlay.
     * @docs-private
     * */
    protected triggerStrategy: NbTriggerStrategy;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayRef: NbOverlayRef;
    protected keyManager: NbActiveDescendantKeyManager<NbOptionComponent<T>>;
    protected destroy$: Subject<void>;
    protected _onChange: (value: T) => void;
    protected _onTouched: () => void;
    /**
     * Determines is autocomplete overlay opened.
     * */
    get isOpen(): boolean;
    /**
     * Determines is autocomplete overlay closed.
     * */
    get isClosed(): boolean;
    /**
     * Provides autocomplete component.
     * */
    get autocomplete(): NbAutocompleteComponent<T>;
    set autocomplete(autocomplete: NbAutocompleteComponent<T>);
    /**
     * Determines options overlay offset (in pixels).
     **/
    overlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    customOverlayHost: ElementRef;
    get top(): boolean;
    get bottom(): boolean;
    role: string;
    ariaAutocomplete: string;
    hasPopup: string;
    get ariaExpanded(): string;
    get ariaOwns(): string;
    get ariaActiveDescendant(): string;
    constructor(hostRef: ElementRef, overlay: NbOverlayService, cd: ChangeDetectorRef, triggerStrategyBuilder: NbTriggerStrategyBuilderService, positionBuilder: NbPositionBuilderService, activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbOptionComponent<T>>, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    handleInput(): void;
    handleKeydown(): void;
    handleBlur(): void;
    show(): void;
    hide(): void;
    writeValue(value: T): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnPositionChange(): void;
    protected getActiveItem(): NbOptionComponent<T>;
    protected setupAutocomplete(): void;
    protected getDisplayValue(value: string): string;
    protected getContainer(): ComponentRef<any>;
    protected handleInputValueUpdate(value: T, focusInput?: boolean): void;
    protected subscribeOnTriggers(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected createKeyManager(): void;
    protected setHostInputValue(value: any): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected subscribeOnOverlayKeys(): void;
    protected setActiveItem(): void;
    protected attachToOverlay(): void;
    protected createOverlay(): void;
    protected initOverlay(): void;
    protected checkOverlayVisibility(): void;
    protected createScrollStrategy(): NbScrollStrategy;
    protected shouldShow(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAutocompleteDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbAutocompleteDirective<any>, "input[nbAutocomplete]", never, { "autocomplete": { "alias": "nbAutocomplete"; "required": false; }; "overlayOffset": { "alias": "overlayOffset"; "required": false; }; "scrollStrategy": { "alias": "scrollStrategy"; "required": false; }; "customOverlayHost": { "alias": "customOverlayHost"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbAutocompleteModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAutocompleteModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbAutocompleteModule, [typeof NbAutocompleteComponent, typeof NbAutocompleteDirective], [typeof i4.CommonModule, typeof i2.FormsModule, typeof NbOverlayModule, typeof NbCardModule, typeof NbOptionModule], [typeof NbAutocompleteComponent, typeof NbAutocompleteDirective, typeof NbOptionModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbAutocompleteModule>;
}

declare enum NbWindowState {
    MINIMIZED = "minimized",
    MAXIMIZED = "maximized",
    FULL_SCREEN = "full-screen"
}
interface NbWindowStateChange {
    oldState: NbWindowState;
    newState: NbWindowState;
}
interface NbWindowControlButtonsConfig {
    minimize: boolean;
    maximize: boolean;
    fullScreen: boolean;
    close: boolean;
}
declare const NB_WINDOW_DEFAULT_BUTTONS_CONFIG: NbWindowControlButtonsConfig;
/**
 * Window configuration options.
 */
declare class NbWindowConfig {
    /**
     * Window title.
     */
    title: string;
    /**
     * Window title as template. Use it instead of `title` property.
     */
    titleTemplate?: TemplateRef<any>;
    /**
     * Title as template may receive data through `config.titleTemplateContext` property.
     * Window title as Template. You can access context inside template as $implicit.
     */
    titleTemplateContext?: Object;
    /**
     * Initial window state. Full screen by default.
     */
    initialState: NbWindowState;
    /**
     * If true than backdrop will be rendered behind window.
     * By default set to true.
     */
    hasBackdrop: boolean;
    /**
     * If set to true mouse clicks on backdrop will close a window.
     * Default is true.
     */
    closeOnBackdropClick: boolean;
    /**
     * If true then escape press will close a window.
     * Default is true.
     */
    closeOnEsc: boolean;
    /**
     * Class to be applied to the window.
     */
    windowClass: string;
    /**
     * Both, template and component may receive data through `config.context` property.
     * For components, this data will be set as component properties.
     * For templates, you can access it inside template as $implicit.
     */
    context?: Object;
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the window. This does not affect where the window
     * content will be rendered.
     */
    viewContainerRef: ViewContainerRef;
    /**
     * Windows control buttons can be hidden by setting according property to false.
     */
    buttons: Partial<NbWindowControlButtonsConfig>;
    constructor(...configs: Partial<NbWindowConfig>[]);
    protected applyDefaultButtonConfig(): void;
}
declare const NB_WINDOW_CONTENT: InjectionToken<TemplateRef<any> | NbComponentType>;
declare const NB_WINDOW_CONFIG: InjectionToken<NbWindowConfig>;
declare const NB_WINDOW_CONTEXT: InjectionToken<Object>;

declare class NbWindowsContainerComponent {
    viewContainerRef: ViewContainerRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowsContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbWindowsContainerComponent, "nb-windows-container", never, {}, {}, never, never, false, never>;
}

/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 * Property `contentInstance` contains the instance of the component opened in the window.
 */
declare class NbWindowRef<T = any, R = any> {
    config: NbWindowConfig;
    componentRef: ComponentRef<NbWindowComponent>;
    componentInstance: T;
    protected prevStateValue: NbWindowState;
    protected stateValue: NbWindowState;
    /**
     * Current window state.
     */
    get state(): NbWindowState;
    set state(newState: NbWindowState);
    protected stateChange$: ReplaySubject<NbWindowStateChange>;
    /**
     * Emits when window state change.
     */
    get stateChange(): Observable<NbWindowStateChange>;
    protected _closed: boolean;
    protected closed$: Subject<R>;
    /**
     * Emits when window was closed.
     */
    get onClose(): Observable<R>;
    constructor(config: NbWindowConfig);
    /**
     * Minimize window.
     */
    minimize(): void;
    /**
     * Maximize window.
     */
    maximize(): void;
    /**
     * Set window on top.
     */
    fullScreen(): void;
    toPreviousState(): void;
    /**
     * Closes window.
     * */
    close(res?: R): void;
}

declare class NbWindowComponent implements OnInit, AfterViewChecked, OnDestroy {
    content: TemplateRef<any> | NbComponentType;
    context: Object;
    windowRef: NbWindowRef;
    config: NbWindowConfig;
    protected focusTrapFactory: NbFocusTrapFactoryService;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    get isFullScreen(): boolean;
    get maximized(): boolean;
    get minimized(): boolean;
    get showMinimize(): boolean;
    get showMaximize(): boolean;
    get showFullScreen(): boolean;
    get showClose(): boolean;
    overlayContainer: NbOverlayContainerComponent;
    protected focusTrap: NbFocusTrap;
    constructor(content: TemplateRef<any> | NbComponentType, context: Object, windowRef: NbWindowRef, config: NbWindowConfig, focusTrapFactory: NbFocusTrapFactoryService, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    minimize(): void;
    maximize(): void;
    fullScreen(): void;
    maximizeOrFullScreen(): void;
    close(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbWindowComponent, "nb-window", never, {}, {}, never, never, false, never>;
}

declare class NbWindowModule {
    static forRoot(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<NbWindowModule>;
    static forChild(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<NbWindowModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbWindowModule, [typeof NbWindowsContainerComponent, typeof NbWindowComponent], [typeof i4.CommonModule, typeof NbOverlayModule, typeof NbCardModule, typeof NbIconModule, typeof NbButtonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbWindowModule>;
}

/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * You could pass the optional window return value to the `NbWindowRef.close` method.
 * The passed value would be emitted to the `NbWindowRef.onClose` listeners.
 *
 * @stacked-example(Result, window/window-result.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 *
 * You can configure which buttons are available in a window via the `buttons` property of the window config.
 * @stacked-example(Control buttons, window/window-controls.component)
 *
 */
declare class NbWindowService {
    protected overlayService: NbOverlayService;
    protected overlayPositionBuilder: NbOverlayPositionBuilder;
    protected blockScrollStrategy: NbBlockScrollStrategyAdapter;
    protected readonly defaultWindowsConfig: NbWindowConfig;
    protected document: Document;
    protected overlayRef: NbOverlayRef;
    protected windowsContainerViewRef: ViewContainerRef;
    protected openWindows: NbWindowRef[];
    constructor(overlayService: NbOverlayService, overlayPositionBuilder: NbOverlayPositionBuilder, blockScrollStrategy: NbBlockScrollStrategyAdapter, defaultWindowsConfig: NbWindowConfig, document: any);
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    open(windowContent: TemplateRef<any> | NbComponentType, windowConfig?: Partial<NbWindowConfig>): NbWindowRef;
    protected shouldCreateWindowsContainer(): boolean;
    protected createWindowsContainer(): void;
    protected appendWindow(content: TemplateRef<any> | NbComponentType, config: NbWindowConfig, windowRef: NbWindowRef): ComponentRef<NbWindowComponent>;
    protected subscribeToEvents(windowRef: NbWindowRef): void;
    protected checkAndUpdateOverlay(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbWindowService>;
}

declare class NbTimePickerCellComponent implements AfterViewInit, OnDestroy {
    protected ngZone: NgZone;
    protected platformService: NbPlatform;
    protected selectedChange$: Subject<boolean>;
    protected unselected$: rxjs.Observable<boolean>;
    protected destroy$: Subject<void>;
    _selected: boolean;
    set selected(selected: boolean);
    get selected(): boolean;
    value: string;
    select: EventEmitter<NbSelectedTimeModel>;
    valueContainerElement: ElementRef;
    constructor(ngZone: NgZone, platformService: NbPlatform);
    onClick(): void;
    ngAfterViewInit(): void;
    protected scrollToElement(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTimePickerCellComponent, "nb-timepicker-cell", never, { "selected": { "alias": "selected"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
}

/**
 * The `NbTimePickerDirective` is form control that gives you ability to select a time. The timepicker
 * is shown when input receives a `focus` event.
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Showcase, timepicker/timepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTimepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbTimepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule,
 *   ],
 * })
 * export class PageModule { }
 *
 * ```
 * <div id="native-parse-issue" class="note note-warning">
 * <div class="note-title">Note</div>
 * <div class="note-body">
 * Timepicker uses native Date object by default, which doesn't support parsing by custom format.
 * According to the ECMAScript specification, the only supported format is a format described by ISO 8061 standard.
 * This standard requires date part to be included in the date string,
 * meaning you have to type a date+time in the input.
 * We highly recommend you to use NbDateFnsDateModule or NbMomentDateModule to be able to support time only strings in
 * the timepicker inputs. These modules use date-fns and moment date libraries, which provide capabilities
 * to parse time only strings.
 * See "Formatting Issue" at
 * <a href="https://akveo.github.io/nebular/docs/components/datepicker/overview#formatting-issue">Date picker docs</a>
 * for installation instructions.
 * </div>
 * </div>
 * <hr>
 *
 * ### Usage
 *
 * To show seconds column along with hours and minutes use `withSeconds` input
 *
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker withSeconds></nb-timepicker>
 * ```
 * @stacked-example(Time picker with seconds, timepicker/timepicker-with-seconds.component)
 *
 * To force timepicker work in 12 hours format, use `twelveHoursFormat` input.
 * By default, timepicker choose 12 or 24 formats based on application locale standards
 *
 * ```html
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Twelve hours format showcase, timepicker/timepicker-twelve-hours-format.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 * You can control options minutes offset via `step` input, e.g.: 11:00, 11:20, 11:40...'
 *
 * @stacked-example(Single column, timepicker/timepicker-single-column.component)
 *
 * Timepicker support forms and reactive forms API so you can provide value using `formControl` and `ngModel` directives
 * @stacked-example(Form control, timepicker/timepicker-form-control.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [formControl]="formControl"></nb-timepicker>
 *
 * @stacked-example(NgModel, timepicker/timepicker-ng-model.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [ngModel]="date"></nb-timepicker>
 *
 * You can provide localized versions of the timepicker text via the `localization` property of the config
 * object passed to the `forRoot` or `forChild` methods of the `NbTimepickerModule`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot({
 *       localization: {
 *         hoursText: 'Hr',
 *         minutesText: 'Min',
 *         secondsText: 'Sec',
 *         ampmText: 'Am/Pm',
 *       }
 *     }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * @styles
 *
 * timepicker-cell-text-color:
 * timepicker-cell-hover-background-color:
 * timepicker-cell-hover-text-color:
 * timepicker-cell-focus-background-color:
 * timepicker-cell-focus-text-color:
 * timepicker-cell-active-background-color:
 * timepicker-cell-active-text-color:
 * timepicker-cell-text-font-size:
 * timepicker-cell-text-font-family:
 * timepicker-cell-text-line-height:
 * timepicker-cell-text-font-weight:
 * timepicker-cell-height:
 * timepicker-header-cell-text-color:
 * timepicker-header-cell-text-font-size:
 * timepicker-header-cell-text-font-family:
 * timepicker-header-cell-height:
 * timepicker-header-cell-text-line-height:
 * timepicker-header-cell-text-font-weight:
 * timepicker-border-color:
 * timepicker-border-style:
 * timepicker-border-width:
 * timepicker-scrollbar-color:
 * timepicker-scrollbar-background-color:
 * timepicker-scrollbar-width:
 * timepicker-single-column-width:
 * timepicker-multiple-column-width:
 * timepicker-title-height:
 * timepicker-title-padding:
 * timepicker-container-width:
 * timepicker-container-height:
 * */
declare class NbTimePickerDirective<D> implements AfterViewInit, ControlValueAccessor {
    protected document: any;
    protected positionBuilder: NbPositionBuilderService;
    protected hostRef: ElementRef;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected overlay: NbOverlayService;
    protected cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    protected dateService: NbDateService<D>;
    protected renderer: Renderer2;
    protected placeholder: string;
    /**
     * Provides timepicker component.
     * */
    get timepicker(): NbTimePickerComponent<D>;
    set timepicker(timePicker: NbTimePickerComponent<D>);
    protected _timePickerComponent: NbTimePickerComponent<D>;
    protected pickerInputsChangedSubscription: Subscription | undefined;
    /**
     * Time picker overlay offset.
     * */
    overlayOffset: number;
    /**
     * String representation of latest selected date.
     * Updated when value is updated programmatically (writeValue), via timepicker (subscribeOnApplyClick)
     * or via input field (handleInputChange)
     * @docs-private
     */
    protected lastInputValue: string;
    /**
     * Positioning strategy used by overlay.
     * @docs-private
     * */
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayRef: NbOverlayRef;
    protected destroy$: Subject<void>;
    protected onChange: (value: D) => void;
    protected onTouched: () => void;
    /**
     * Trigger strategy used by overlay.
     * @docs-private
     * */
    protected triggerStrategy: NbTriggerStrategy;
    /**
     * Returns html input element.
     * @docs-private
     * */
    get input(): HTMLInputElement;
    /**
     * Determines is timepicker overlay opened.
     * @docs-private
     * */
    get isOpen(): boolean;
    /**
     * Determines is timepicker overlay closed.
     * @docs-private
     * */
    get isClosed(): boolean;
    constructor(document: any, positionBuilder: NbPositionBuilderService, hostRef: ElementRef, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>, dateService: NbDateService<D>, renderer: Renderer2, placeholder: string);
    /**
     * Returns host input value.
     * @docs-private
     * */
    get inputValue(): string;
    set inputValue(value: string);
    ngAfterViewInit(): void;
    show(): void;
    hide(): void;
    /**
     * Attaches picker to the timepicker portal.
     * @docs-private
     * */
    protected attachToOverlay(): void;
    setupTimepicker(): void;
    protected initOverlay(): void;
    protected subscribeOnApplyClick(): void;
    protected createOverlay(): void;
    protected subscribeOnTriggers(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected getContainer(): ComponentRef<any>;
    protected createScrollStrategy(): NbScrollStrategy;
    protected subscribeOnInputChange(): void;
    protected subscribeToBlur(): void;
    /**
     * Parses input value and write if it isn't null.
     * @docs-private
     * */
    protected handleInputChange(value: string): void;
    protected updateValue(value: D): void;
    writeValue(value: D): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    protected parseNativeDateString(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerDirective<any>, [null, null, null, null, null, null, null, null, null, { attribute: "placeholder"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTimePickerDirective<any>, "input[nbTimepicker]", never, { "timepicker": { "alias": "nbTimepicker"; "required": false; }; "overlayOffset": { "alias": "overlayOffset"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbTimepickerModule {
    static forRoot(config?: NbTimePickerConfig): ModuleWithProviders<NbTimepickerModule>;
    static forChild(config?: NbTimePickerConfig): ModuleWithProviders<NbTimepickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimepickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTimepickerModule, [typeof NbTimePickerComponent, typeof NbTimePickerCellComponent, typeof NbTimePickerDirective], [typeof i4.CommonModule, typeof NbOverlayModule, typeof NbListModule, typeof NbCardModule, typeof NbCalendarKitModule], [typeof NbTimePickerComponent, typeof NbTimePickerCellComponent, typeof NbTimePickerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTimepickerModule>;
}

declare class NbDatepickerModule {
    static forRoot(): ModuleWithProviders<NbDatepickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDatepickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbDatepickerModule, [typeof NbDatepickerDirective, typeof NbDatepickerContainerComponent, typeof NbCalendarWithTimeComponent, typeof NbDateTimePickerComponent, typeof NbDatepickerComponent, typeof NbRangepickerComponent, typeof NbBasePickerComponent], [typeof NbOverlayModule, typeof NbCalendarModule, typeof NbCalendarRangeModule, typeof NbCardModule, typeof NbBaseCalendarModule, typeof NbTimepickerModule, typeof NbCalendarKitModule], [typeof NbDatepickerDirective, typeof NbDatepickerComponent, typeof NbRangepickerComponent, typeof NbDateTimePickerComponent, typeof NbCalendarWithTimeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbDatepickerModule>;
}

declare class NbDateAdapterService<D> extends NbDatepickerAdapter<D> {
    protected dateService: NbDateService<D>;
    picker: Type<NbDatepickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(date: string, format: any): D;
    format(date: D, format: string): string;
    isValid(date: string, format: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDateAdapterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDateAdapterService<any>>;
}
declare class NbRangeAdapterService<D> extends NbDatepickerAdapter<NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    picker: Type<NbRangepickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(range: string, format: any): NbCalendarRange<D>;
    format(range: NbCalendarRange<D>, format: string): string;
    isValid(range: string, format: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRangeAdapterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbRangeAdapterService<any>>;
}
declare class NbDateTimeAdapterService<D> extends NbDatepickerAdapter<D> {
    protected dateService: NbDateService<D>;
    picker: Type<NbDateTimePickerComponent<D>>;
    constructor(dateService: NbDateService<D>);
    parse(date: string, format: string): D;
    format(date: any, format: string): string;
    isValid(date: string, format: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDateTimeAdapterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDateTimeAdapterService<any>>;
}

/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-width:
 * radio-height:
 * radio-border-style:
 * radio-border-width:
 * radio-text-font-family:
 * radio-text-font-size:
 * radio-text-font-weight:
 * radio-text-line-height:
 * radio-outline-color:
 * radio-outline-width:
 * radio-basic-text-color:
 * radio-basic-border-color:
 * radio-basic-background-color:
 * radio-basic-checked-background-color:
 * radio-basic-checked-border-color:
 * radio-basic-inner-circle-color:
 * radio-basic-focus-border-color:
 * radio-basic-focus-inner-circle-color:
 * radio-basic-hover-background-color:
 * radio-basic-hover-border-color:
 * radio-basic-hover-inner-circle-color:
 * radio-basic-hover-checked-background-color:
 * radio-basic-active-border-color:
 * radio-basic-active-inner-circle-color:
 * radio-basic-disabled-background-color:
 * radio-basic-disabled-border-color:
 * radio-basic-disabled-text-color:
 * radio-basic-disabled-checked-background-color:
 * radio-basic-disabled-checked-border-color:
 * radio-basic-disabled-checked-inner-circle-color:
 * radio-primary-text-color:
 * radio-primary-border-color:
 * radio-primary-background-color:
 * radio-primary-checked-background-color:
 * radio-primary-checked-border-color:
 * radio-primary-inner-circle-color:
 * radio-primary-focus-border-color:
 * radio-primary-focus-inner-circle-color:
 * radio-primary-hover-background-color:
 * radio-primary-hover-border-color:
 * radio-primary-hover-inner-circle-color:
 * radio-primary-hover-checked-background-color:
 * radio-primary-active-border-color:
 * radio-primary-active-inner-circle-color:
 * radio-primary-disabled-background-color:
 * radio-primary-disabled-border-color:
 * radio-primary-disabled-text-color:
 * radio-primary-disabled-checked-background-color:
 * radio-primary-disabled-checked-border-color:
 * radio-primary-disabled-checked-inner-circle-color:
 * radio-success-text-color:
 * radio-success-border-color:
 * radio-success-background-color:
 * radio-success-checked-background-color:
 * radio-success-checked-border-color:
 * radio-success-inner-circle-color:
 * radio-success-focus-border-color:
 * radio-success-focus-inner-circle-color:
 * radio-success-hover-background-color:
 * radio-success-hover-border-color:
 * radio-success-hover-inner-circle-color:
 * radio-success-hover-checked-background-color:
 * radio-success-active-border-color:
 * radio-success-active-inner-circle-color:
 * radio-success-disabled-background-color:
 * radio-success-disabled-border-color:
 * radio-success-disabled-text-color:
 * radio-success-disabled-checked-background-color:
 * radio-success-disabled-checked-border-color:
 * radio-success-disabled-checked-inner-circle-color:
 * radio-info-text-color:
 * radio-info-border-color:
 * radio-info-background-color:
 * radio-info-checked-background-color:
 * radio-info-checked-border-color:
 * radio-info-inner-circle-color:
 * radio-info-focus-border-color:
 * radio-info-focus-inner-circle-color:
 * radio-info-hover-background-color:
 * radio-info-hover-border-color:
 * radio-info-hover-inner-circle-color:
 * radio-info-hover-checked-background-color:
 * radio-info-active-border-color:
 * radio-info-active-inner-circle-color:
 * radio-info-disabled-background-color:
 * radio-info-disabled-border-color:
 * radio-info-disabled-text-color:
 * radio-info-disabled-checked-background-color:
 * radio-info-disabled-checked-border-color:
 * radio-info-disabled-checked-inner-circle-color:
 * radio-warning-text-color:
 * radio-warning-border-color:
 * radio-warning-background-color:
 * radio-warning-checked-background-color:
 * radio-warning-checked-border-color:
 * radio-warning-inner-circle-color:
 * radio-warning-focus-border-color:
 * radio-warning-focus-inner-circle-color:
 * radio-warning-hover-background-color:
 * radio-warning-hover-border-color:
 * radio-warning-hover-inner-circle-color:
 * radio-warning-hover-checked-background-color:
 * radio-warning-active-border-color:
 * radio-warning-active-inner-circle-color:
 * radio-warning-disabled-background-color:
 * radio-warning-disabled-border-color:
 * radio-warning-disabled-text-color:
 * radio-warning-disabled-checked-background-color:
 * radio-warning-disabled-checked-border-color:
 * radio-warning-disabled-checked-inner-circle-color:
 * radio-danger-text-color:
 * radio-danger-border-color:
 * radio-danger-background-color:
 * radio-danger-checked-background-color:
 * radio-danger-checked-border-color:
 * radio-danger-inner-circle-color:
 * radio-danger-focus-border-color:
 * radio-danger-focus-inner-circle-color:
 * radio-danger-hover-background-color:
 * radio-danger-hover-border-color:
 * radio-danger-hover-inner-circle-color:
 * radio-danger-hover-checked-background-color:
 * radio-danger-active-border-color:
 * radio-danger-active-inner-circle-color:
 * radio-danger-disabled-background-color:
 * radio-danger-disabled-border-color:
 * radio-danger-disabled-text-color:
 * radio-danger-disabled-checked-background-color:
 * radio-danger-disabled-checked-border-color:
 * radio-danger-disabled-checked-inner-circle-color:
 * radio-control-text-color:
 * radio-control-background-color:
 * radio-control-border-color:
 * radio-control-checked-background-color:
 * radio-control-checked-border-color:
 * radio-control-inner-circle-color:
 * radio-control-focus-border-color:
 * radio-control-focus-inner-circle-color:
 * radio-control-hover-background-color:
 * radio-control-hover-border-color:
 * radio-control-hover-inner-circle-color:
 * radio-control-hover-checked-background-color:
 * radio-control-active-border-color:
 * radio-control-active-inner-circle-color:
 * radio-control-disabled-background-color:
 * radio-control-disabled-border-color:
 * radio-control-disabled-text-color:
 * radio-control-disabled-checked-background-color:
 * radio-control-disabled-checked-border-color:
 * radio-control-disabled-checked-inner-circle-color:
 * */
declare class NbRadioComponent {
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected statusService: NbStatusService;
    get name(): string;
    set name(value: string);
    private _name;
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    static ngAcceptInputType_checked: NbBooleanInput;
    get value(): any;
    set value(value: any);
    private _value;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    status: NbComponentOrCustomStatus;
    valueChange: EventEmitter<any>;
    blur: EventEmitter<void>;
    input: ElementRef<HTMLInputElement>;
    constructor(cd: ChangeDetectorRef, renderer: Renderer2, statusService: NbStatusService);
    get isPrimary(): boolean;
    get isSuccess(): boolean;
    get isWarning(): boolean;
    get isDanger(): boolean;
    get isInfo(): boolean;
    get isBasic(): boolean;
    get isControl(): boolean;
    get additionalClasses(): string[];
    onChange(event: Event): void;
    onClick(event: Event): void;
    _markForCheck(): void;
    _setName(name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRadioComponent, "nb-radio", never, { "name": { "alias": "name"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, { "valueChange": "valueChange"; "blur": "blur"; }, never, ["*"], false, never>;
}

/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * Radio group supports `ngModel` and reactive forms:
 * @stacked-example(Radio Group with forms, radio/radio-form.component)
 *
 * */
declare class NbRadioGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
    protected hostElement: ElementRef<HTMLElement>;
    protected platformId: any;
    protected document: any;
    protected destroy$: Subject<void>;
    protected onChange: (value: any) => void;
    protected onTouched: () => void;
    get value(): any;
    set value(value: any);
    protected _value: any;
    get name(): string;
    set name(name: string);
    protected _name: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status(): NbComponentOrCustomStatus;
    set status(value: NbComponentOrCustomStatus);
    protected _status: NbComponentOrCustomStatus;
    radios: QueryList<NbRadioComponent>;
    valueChange: EventEmitter<any>;
    constructor(hostElement: ElementRef<HTMLElement>, platformId: any, document: any);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    protected updateAndSubscribeToRadios(): void;
    protected updateNames(): void;
    protected updateValues(): void;
    protected updateDisabled(): void;
    protected subscribeOnRadiosValueChange(): void;
    protected propagateValue(value: any): void;
    protected subscribeOnRadiosBlur(): void;
    protected updateStatus(): void;
    protected updateAndMarkForCheckRadios(updateFn: (NbRadioComponent: any) => void): void;
    protected updateValueFromCheckedOption(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRadioGroupComponent, "nb-radio-group", never, { "value": { "alias": "value"; "required": false; }; "name": { "alias": "name"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, { "valueChange": "valueChange"; }, ["radios"], ["nb-radio"], false, never>;
}

declare class NbRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRadioModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbRadioModule, [typeof NbRadioComponent, typeof NbRadioGroupComponent], never, [typeof NbRadioComponent, typeof NbRadioGroupComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbRadioModule>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

type NbTagAppearance = 'filled' | 'outline';
interface NbTagSelectionChange {
    tag: NbTagComponent;
    selected: boolean;
}
/**
 *
 * To show a cross on a tag and enable `remove` event add the `removable` attribute.
 * @stacked-example(Removable tags, tag/tag-removable.component)
 *
 * You can change appearance via `appearance` input:
 * @stacked-example(Tag Appearance, tag/tag-appearance.component)
 *
 * You can change status via `status` input:
 * @stacked-example(Tag Status, tag/tag-status.component)
 *
 * @styles
 *
 * tag-text-font-family:
 * tag-text-transform:
 * tag-border-width:
 * tag-border-style:
 * tag-border-radius:
 * tag-tiny-text-font-size:
 * tag-tiny-text-font-weight:
 * tag-tiny-text-line-height:
 * tag-tiny-padding:
 * tag-tiny-close-offset:
 * tag-small-text-font-size:
 * tag-small-text-font-weight:
 * tag-small-text-line-height:
 * tag-small-padding:
 * tag-small-close-offset:
 * tag-medium-text-font-size:
 * tag-medium-text-font-weight:
 * tag-medium-text-line-height:
 * tag-medium-padding:
 * tag-medium-close-offset:
 * tag-large-text-font-size:
 * tag-large-text-font-weight:
 * tag-large-text-line-height:
 * tag-large-padding:
 * tag-large-close-offset:
 * tag-giant-text-font-size:
 * tag-giant-text-font-weight:
 * tag-giant-text-line-height:
 * tag-giant-padding:
 * tag-giant-close-offset:
 * tag-filled-basic-background-color:
 * tag-filled-basic-border-color:
 * tag-filled-basic-text-color:
 * tag-filled-basic-active-background-color:
 * tag-filled-basic-active-border-color:
 * tag-filled-basic-hover-background-color:
 * tag-filled-basic-hover-border-color:
 * tag-filled-basic-selected-background-color:
 * tag-filled-basic-selected-border-color:
 * tag-filled-primary-background-color:
 * tag-filled-primary-border-color:
 * tag-filled-primary-text-color:
 * tag-filled-primary-active-background-color:
 * tag-filled-primary-active-border-color:
 * tag-filled-primary-hover-background-color:
 * tag-filled-primary-hover-border-color:
 * tag-filled-primary-selected-background-color:
 * tag-filled-primary-selected-border-color:
 * tag-filled-success-background-color:
 * tag-filled-success-border-color:
 * tag-filled-success-text-color:
 * tag-filled-success-active-background-color:
 * tag-filled-success-active-border-color:
 * tag-filled-success-hover-background-color:
 * tag-filled-success-hover-border-color:
 * tag-filled-success-selected-background-color:
 * tag-filled-success-selected-border-color:
 * tag-filled-info-background-color:
 * tag-filled-info-border-color:
 * tag-filled-info-text-color:
 * tag-filled-info-active-background-color:
 * tag-filled-info-active-border-color:
 * tag-filled-info-hover-background-color:
 * tag-filled-info-hover-border-color:
 * tag-filled-info-selected-background-color:
 * tag-filled-info-selected-border-color:
 * tag-filled-warning-background-color:
 * tag-filled-warning-border-color:
 * tag-filled-warning-text-color:
 * tag-filled-warning-active-background-color:
 * tag-filled-warning-active-border-color:
 * tag-filled-warning-hover-background-color:
 * tag-filled-warning-hover-border-color:
 * tag-filled-warning-selected-background-color:
 * tag-filled-warning-selected-border-color:
 * tag-filled-danger-background-color:
 * tag-filled-danger-border-color:
 * tag-filled-danger-text-color:
 * tag-filled-danger-active-background-color:
 * tag-filled-danger-active-border-color:
 * tag-filled-danger-hover-background-color:
 * tag-filled-danger-hover-border-color:
 * tag-filled-danger-selected-background-color:
 * tag-filled-danger-selected-border-color:
 * tag-filled-control-background-color:
 * tag-filled-control-border-color:
 * tag-filled-control-text-color:
 * tag-filled-control-active-background-color:
 * tag-filled-control-active-border-color:
 * tag-filled-control-hover-background-color:
 * tag-filled-control-hover-border-color:
 * tag-filled-control-selected-background-color:
 * tag-filled-control-selected-border-color:
 * tag-outline-basic-background-color:
 * tag-outline-basic-border-color:
 * tag-outline-basic-text-color:
 * tag-outline-basic-active-background-color:
 * tag-outline-basic-active-border-color:
 * tag-outline-basic-active-text-color:
 * tag-outline-basic-hover-background-color:
 * tag-outline-basic-hover-border-color:
 * tag-outline-basic-hover-text-color:
 * tag-outline-basic-selected-background-color:
 * tag-outline-basic-selected-border-color:
 * tag-outline-basic-selected-text-color:
 * tag-outline-primary-background-color:
 * tag-outline-primary-border-color:
 * tag-outline-primary-text-color:
 * tag-outline-primary-active-background-color:
 * tag-outline-primary-active-border-color:
 * tag-outline-primary-active-text-color:
 * tag-outline-primary-hover-background-color:
 * tag-outline-primary-hover-border-color:
 * tag-outline-primary-hover-text-color:
 * tag-outline-primary-selected-background-color:
 * tag-outline-primary-selected-border-color:
 * tag-outline-primary-selected-text-color:
 * tag-outline-success-background-color:
 * tag-outline-success-border-color:
 * tag-outline-success-text-color:
 * tag-outline-success-active-background-color:
 * tag-outline-success-active-border-color:
 * tag-outline-success-active-text-color:
 * tag-outline-success-hover-background-color:
 * tag-outline-success-hover-border-color:
 * tag-outline-success-hover-text-color:
 * tag-outline-success-selected-background-color:
 * tag-outline-success-selected-border-color:
 * tag-outline-success-selected-text-color:
 * tag-outline-info-background-color:
 * tag-outline-info-border-color:
 * tag-outline-info-text-color:
 * tag-outline-info-active-background-color:
 * tag-outline-info-active-border-color:
 * tag-outline-info-active-text-color:
 * tag-outline-info-hover-background-color:
 * tag-outline-info-hover-border-color:
 * tag-outline-info-hover-text-color:
 * tag-outline-info-selected-background-color:
 * tag-outline-info-selected-border-color:
 * tag-outline-info-selected-text-color:
 * tag-outline-warning-background-color:
 * tag-outline-warning-border-color:
 * tag-outline-warning-text-color:
 * tag-outline-warning-active-background-color:
 * tag-outline-warning-active-border-color:
 * tag-outline-warning-active-text-color:
 * tag-outline-warning-hover-background-color:
 * tag-outline-warning-hover-border-color:
 * tag-outline-warning-hover-text-color:
 * tag-outline-warning-selected-background-color:
 * tag-outline-warning-selected-border-color:
 * tag-outline-warning-selected-text-color:
 * tag-outline-danger-background-color:
 * tag-outline-danger-border-color:
 * tag-outline-danger-text-color:
 * tag-outline-danger-active-background-color:
 * tag-outline-danger-active-border-color:
 * tag-outline-danger-active-text-color:
 * tag-outline-danger-hover-background-color:
 * tag-outline-danger-hover-border-color:
 * tag-outline-danger-hover-text-color:
 * tag-outline-danger-selected-background-color:
 * tag-outline-danger-selected-border-color:
 * tag-outline-danger-selected-text-color:
 * tag-outline-control-background-color:
 * tag-outline-control-border-color:
 * tag-outline-control-text-color:
 * tag-outline-control-active-background-color:
 * tag-outline-control-active-border-color:
 * tag-outline-control-active-text-color:
 * tag-outline-control-hover-background-color:
 * tag-outline-control-hover-border-color:
 * tag-outline-control-hover-text-color:
 * tag-outline-control-selected-background-color:
 * tag-outline-control-selected-border-color:
 * tag-outline-control-selected-text-color:
 */
declare class NbTagComponent implements AfterViewInit, OnDestroy, NbHighlightableOption {
    _hostElement: ElementRef;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    private _destroy$;
    get destroy$(): Observable<NbTagComponent>;
    /**
     * Tag text.
     */
    text: string;
    get selected(): boolean;
    set selected(value: boolean);
    protected _selected: boolean;
    static ngAcceptInputType_selected: NbBooleanInput;
    /**
     * Controls whether the user can remove a tag or not.
     */
    get removable(): boolean;
    set removable(value: boolean);
    protected _removable: boolean;
    static ngAcceptInputType_removable: NbBooleanInput;
    /**
     * Tag appearance: `filled`, `outline`.
     */
    appearance: NbTagAppearance;
    /**
     * Tag status: `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Tag size: `tiny`, `small`, `medium`, `large`, `giant`.
     */
    size: NbComponentSize;
    role: string;
    /**
     * Emits when the user removes the tag
     * (whether by clicking on the remove button or by pressing `delete` or `backspace` key).
     */
    readonly remove: EventEmitter<NbTagComponent>;
    readonly selectedChange: EventEmitter<NbTagSelectionChange>;
    _isActive: boolean;
    _id: string;
    get filled(): boolean;
    set filled(value: boolean);
    get outline(): boolean;
    set outline(value: boolean);
    get basic(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get control(): boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get additionalClasses(): string[];
    _remove(): void;
    constructor(_hostElement: ElementRef, cd: ChangeDetectorRef, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _toggleSelection(): void;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTagComponent, "nb-tag", ["nbTag"], { "text": { "alias": "text"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "status": { "alias": "status"; "required": false; }; "size": { "alias": "size"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, { "remove": "remove"; "selectedChange": "selectedChange"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NbTagInputAddEvent {
    input: ElementRef<HTMLInputElement>;
    value: string;
}
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 */
declare class NbTagInputDirective extends NbInputDirective implements AfterViewInit {
    _hostElement: ElementRef<HTMLInputElement>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected readonly keyDown$: Subject<KeyboardEvent>;
    get _value(): string;
    /**
     * Controls which keys should trigger tag add event.
     */
    separatorKeys: number[];
    /**
     * Emits when a tag need to be added.
     */
    tagAdd: EventEmitter<NbTagInputAddEvent>;
    readonly nbTagInputClass = true;
    _onKeydown(event: KeyboardEvent): void;
    constructor(_hostElement: ElementRef<HTMLInputElement>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    ngAfterViewInit(): void;
    protected isSeparatorKey(keyCode: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTagInputDirective, "input[nbTagInput]", ["nbTagInput"], { "separatorKeys": { "alias": "separatorKeys"; "required": false; }; }, { "tagAdd": "tagAdd"; }, never, never, false, never>;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 *
 * `nb-tag-list` component displays a list of `nb-tag` components.
 *
 * @stacked-example(Tag List Showcase, tag/tag-showcase.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 * tag-list-with-input-rectangle-border-radius:
 * tag-list-with-input-semi-round-border-radius:
 * tag-list-with-input-round-border-radius:
 */
declare class NbTagListComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected focusMonitor: NbFocusMonitor;
    protected activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbTagComponent>;
    protected directionService: NbLayoutDirectionService;
    protected statusService: NbStatusService;
    protected readonly destroy$: Subject<void>;
    protected readonly keyDown$: Subject<KeyboardEvent>;
    protected readonly tagClick$: Subject<NbTagComponent>;
    protected focused: boolean;
    protected keyManager: NbActiveDescendantKeyManager<NbTagComponent>;
    tags: QueryList<NbTagComponent>;
    tagInput: NbTagInputDirective;
    autocompleteDirective: NbAutocompleteDirective<any>;
    /**
     * Controls tags offset.
     */
    size: NbComponentSize;
    tabIndex: number;
    role: string;
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    activeTagId: string | null;
    /**
     * Emits when tag need to be removed (whether because of click on the remove button
     * or when `delete` or `backspace` key pressed).
     */
    readonly tagRemove: EventEmitter<NbTagComponent>;
    get _hasInput(): boolean;
    get _isFocused(): boolean;
    get _isFullWidth(): boolean;
    get _inputClasses(): string[];
    _onKeydown(event: KeyboardEvent): void;
    _onClick({ target }: MouseEvent): void;
    constructor(hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, renderer: Renderer2, zone: NgZone, focusMonitor: NbFocusMonitor, activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbTagComponent>, directionService: NbLayoutDirectionService, statusService: NbStatusService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected initKeyManager(): void;
    protected listenToLayoutDirectionChange(): void;
    protected listenListKeyDown(): void;
    protected listenInputKeyDown(): void;
    protected listenTagClick(): void;
    protected listenTagRemove(): void;
    protected listenTagDestroy(): void;
    protected listenNoTags(): void;
    protected listenActiveTagChange(): void;
    protected onFocusChange(isFocused: boolean): void;
    protected isBackspaceOrDelete(keyCode: number): boolean;
    protected setAutocompleteCustomHost(): void;
    protected toggleTag(tagToToggle: NbTagComponent): void;
    protected focusInput(): void;
    protected focusInputIfActive(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTagListComponent, "nb-tag-list", ["nbTagList"], { "size": { "alias": "size"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "role": { "alias": "role"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; }, { "tagRemove": "tagRemove"; }, ["tagInput", "autocompleteDirective", "tags"], ["nb-tag, input[nbTagInput]"], false, never>;
}

declare class NbTagModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTagModule, [typeof NbTagComponent, typeof NbTagListComponent, typeof NbTagInputDirective], [typeof i4.CommonModule, typeof NbIconModule], [typeof NbTagComponent, typeof NbTagListComponent, typeof NbTagInputDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTagModule>;
}

interface NbCollectionViewer extends CollectionViewer {
    viewChange: Observable<ListRange>;
}

/** Column definition associated with a `NbSortHeaderDirective`. */
interface NbSortHeaderColumnDef {
    name: string;
}
interface NbSortRequest {
    column: string;
    direction: NbSortDirection;
}
interface NbSortable {
    sort(sortRequest: NbSortRequest): any;
}
type NbSortDirectionValues = 'asc' | 'desc' | '';
declare enum NbSortDirection {
    ASCENDING = "asc",
    DESCENDING = "desc",
    NONE = ""
}
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
declare class NbSortDirective {
    sortable: NbSortable;
    static ngAcceptInputType_sortable: NbSortable | NbNullableInput;
    sort: EventEmitter<NbSortRequest>;
    emitSort(sortRequest: NbSortRequest): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSortDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbSortDirective, "[nbSort]", never, { "sortable": { "alias": "nbSort"; "required": false; }; }, { "sort": "sort"; }, never, never, false, never>;
}
interface NbSortHeaderIconDirectiveContext {
    $implicit: NbSortDirection;
    isAscending: boolean;
    isDescending: boolean;
    isNone: boolean;
}
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
declare class NbSortHeaderIconDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSortHeaderIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbSortHeaderIconDirective, "[nbSortHeaderIcon]", never, {}, {}, never, never, false, never>;
}
declare class NbSortIconComponent {
    direction: NbSortDirection;
    isAscending(): boolean;
    isDescending(): boolean;
    isDirectionSet(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSortIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSortIconComponent, "nb-sort-icon", never, { "direction": { "alias": "direction"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
declare class NbSortHeaderComponent {
    private sort;
    private columnDef;
    sortIcon: TemplateRef<NbSortHeaderIconDirectiveContext>;
    /**
     * Current sort direction. Possible values: `asc`, `desc`, ``(none)
     * @type {NbSortDirection}
     */
    direction: NbSortDirection;
    static ngAcceptInputType_direction: NbSortDirectionValues;
    private disabledValue;
    /**
     * Disable sort header
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    sortIfEnabled(): void;
    constructor(sort: NbSortDirective, columnDef: NbSortHeaderColumnDef);
    isAscending(): boolean;
    isDescending(): boolean;
    sortData(): void;
    getIconContext(): NbSortHeaderIconDirectiveContext;
    getDisabledAttributeValue(): '' | null;
    private createSortRequest;
    private getNextDirection;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSortHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSortHeaderComponent, "[nbSortHeader]", never, { "direction": { "alias": "nbSortHeader"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, ["sortIcon"], ["*"], false, never>;
}

declare const NB_DEFAULT_ROW_LEVEL: number;
type NbDataGetter<N, T> = (N: any) => T;
type NbChildrenGetter<N, T> = (N: any) => (T[] | undefined);
type NbExpandedGetter<N> = (N: any) => boolean;
interface NbGetters<N, T> {
    dataGetter?: NbDataGetter<N, T>;
    childrenGetter?: NbChildrenGetter<N, T>;
    expandedGetter?: NbExpandedGetter<N>;
}
/**
 * Implicit context of cells and rows
 */
declare class NbTreeGridPresentationNode<T> {
    /**
     * Data object associated with row
     */
    readonly data: T;
    children: NbTreeGridPresentationNode<T>[] | undefined;
    /**
     * Row expand state
     */
    expanded: boolean;
    readonly level: number;
    constructor(
    /**
     * Data object associated with row
     */
    data: T, children: NbTreeGridPresentationNode<T>[] | undefined, 
    /**
     * Row expand state
     */
    expanded: boolean, level: number);
    /**
     * True if row has child rows
     */
    hasChildren(): boolean;
}

declare class NbTreeGridDataService<T> {
    private defaultGetters;
    toPresentationNodes<N>(nodes: N[], customGetters?: NbGetters<N, T>, level?: number): NbTreeGridPresentationNode<T>[];
    private mapNodes;
    flattenExpanded(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    copy(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridDataService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridDataService<any>>;
}

/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
declare class NbTreeGridFilterService<T> {
    filter(query: string, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected filterPredicate(data: T, searchQuery: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFilterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridFilterService<any>>;
}

/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
declare class NbTreeGridSortService<T> {
    sort(request: NbSortRequest, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected comparator(request: NbSortRequest, na: NbTreeGridPresentationNode<T>, nb: NbTreeGridPresentationNode<T>): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridSortService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridSortService<any>>;
}

interface NbToggleOptions {
    deep?: boolean;
}
declare class NbTreeGridService<T> {
    expand(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    collapse(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    toggle(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    private find;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridService<any>>;
}

interface NbFilterable {
    filter(filterRequest: string): any;
}
declare class NbTreeGridDataSource<T> extends NbDataSource<NbTreeGridPresentationNode<T>> implements NbSortable, NbFilterable {
    private sortService;
    private filterService;
    private treeGridService;
    private treeGridDataService;
    /** Stream that emits when a new data array is set on the data source. */
    private data;
    /** Stream emitting render data to the table (depends on ordered data changes). */
    private readonly renderData;
    private readonly filterRequest;
    private readonly sortRequest;
    constructor(sortService: NbTreeGridSortService<T>, filterService: NbTreeGridFilterService<T>, treeGridService: NbTreeGridService<T>, treeGridDataService: NbTreeGridDataService<T>);
    setData<N>(data: N[], customGetters?: NbGetters<N, T>): void;
    connect(collectionViewer: NbCollectionViewer): Observable<NbTreeGridPresentationNode<T>[] | ReadonlyArray<NbTreeGridPresentationNode<T>>>;
    disconnect(collectionViewer: NbCollectionViewer): void;
    expand(row: T): void;
    collapse(row: T): void;
    toggle(row: T, options?: NbToggleOptions): void;
    toggleByIndex(dataIndex: number, options?: NbToggleOptions): void;
    getLevel(rowIndex: number): number;
    sort(sortRequest: NbSortRequest): void;
    filter(searchQuery: string): void;
    protected updateChangeSubscription(): void;
    private filterData;
    private sortData;
}
declare class NbTreeGridDataSourceBuilder<T> {
    private filterService;
    private sortService;
    private treeGridService;
    private treeGridDataService;
    constructor(filterService: NbTreeGridFilterService<T>, sortService: NbTreeGridSortService<T>, treeGridService: NbTreeGridService<T>, treeGridDataService: NbTreeGridDataService<T>);
    create<N>(data: N[], customGetters?: NbGetters<N, T>): NbTreeGridDataSource<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridDataSourceBuilder<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridDataSourceBuilder<any>>;
}

declare const NB_ROW_DOUBLE_CLICK_DELAY: number;
/**
 * Cells container. Adds the right class and role.
 */
declare class NbTreeGridRowComponent extends NbRowComponent implements OnDestroy {
    elementRef: ElementRef<HTMLElement>;
    private readonly doubleClick$;
    private readonly tree;
    /**
     * Time to wait for second click to expand row deeply.
     * 200ms by default.
     */
    doubleClickDelay: number;
    /**
     * Toggle row on click. Enabled by default.
     */
    clickToToggle: boolean;
    toggleIfEnabledNode(): void;
    toggleIfEnabledNodeDeep(): void;
    constructor(tree: any, elementRef: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridRowComponent, "tr[nbTreeGridRow]", never, { "doubleClickDelay": { "alias": "doubleClickDelay"; "required": false; }; "clickToToggle": { "alias": "clickToToggle"; "required": false; }; }, {}, never, never, false, never>;
}
declare class NbTreeGridHeaderRowComponent extends NbHeaderRowComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridHeaderRowComponent, "tr[nbTreeGridHeaderRow]", never, {}, {}, never, never, false, never>;
}
declare class NbTreeGridFooterRowComponent extends NbFooterRowComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridFooterRowComponent, "tr[nbTreeGridFooterRow]", never, {}, {}, never, never, false, never>;
}

/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
declare class NbTreeGridColumnDefDirective extends NbColumnDefDirective implements OnChanges {
    /**
     * Column name
     */
    get name(): string;
    set name(value: string);
    private hideOnValue;
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    get hideOn(): number | null;
    set hideOn(value: number | null);
    private showOnValue;
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    get showOn(): number | null;
    set showOn(value: number | null);
    ngOnChanges(): void;
    shouldHide(width: number): boolean;
    shouldShow(width: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridColumnDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridColumnDefDirective, "[nbTreeGridColumnDef]", never, { "name": { "alias": "nbTreeGridColumnDef"; "required": false; }; "hideOn": { "alias": "hideOn"; "required": false; }; "showOn": { "alias": "showOn"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbColumnsService {
    private differs;
    private allColumns;
    private visibleColumns;
    private changesDiffer;
    private columnHide$;
    private columnShow$;
    constructor(differs: IterableDiffers);
    setColumns(columns: Iterable<string>): void;
    getVisibleColumns(): string[];
    hideColumn(column: string): void;
    showColumn(column: string): void;
    onColumnsChange(): Observable<void>;
    private findInsertIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbColumnsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbColumnsService>;
}

declare class NbTreeGridCellDirective extends NbCellDirective implements OnInit, OnDestroy {
    private platformId;
    private window;
    private sanitizer;
    private directionService;
    private columnService;
    private cd;
    private destroy$;
    private readonly tree;
    private readonly columnDef;
    private initialLeftPadding;
    private initialRightPadding;
    private latestWidth;
    elementRef: ElementRef<HTMLElement>;
    get columnWidth(): string;
    get leftPadding(): string | SafeStyle | null;
    get rightPadding(): string | SafeStyle | null;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef<HTMLElement>, tree: any, platformId: any, window: any, sanitizer: DomSanitizer, directionService: NbLayoutDirectionService, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleRow(): void;
    private get initialStartPadding();
    private getStartPadding;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridCellDirective, "td[nbTreeGridCell]", never, {}, {}, never, never, false, never>;
}
declare class NbTreeGridHeaderCellDirective extends NbHeaderCellDirective implements OnInit, OnDestroy {
    private columnService;
    private cd;
    private destroy$;
    private latestWidth;
    private readonly tree;
    get columnWidth(): string;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef<HTMLElement>, tree: any, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderCellDirective, "th[nbTreeGridHeaderCell]", never, {}, {}, never, never, false, never>;
}
declare class NbTreeGridFooterCellDirective extends NbFooterCellDirective implements OnInit, OnDestroy {
    private columnService;
    private cd;
    private destroy$;
    private latestWidth;
    private readonly tree;
    get columnWidth(): string;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef, tree: any, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterCellDirective, "td[nbTreeGridFooterCell]", never, {}, {}, never, never, false, never>;
}

/**
 * Tree grid component that can be used to display nested rows of data.
 * Supports filtering and sorting.
 * @stacked-example(Showcase, tree-grid/tree-grid-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTreeGridModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTreeGridModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * As the most basic usage you need to define [nbTreeGridRowDef](docs/components/treegrid/api#nbtreegridrowdefdirective)
 * where you should pass columns to display in rows and
 * [nbTreeGridColumnDef](docs/components/treegrid/api#nbtreegridcolumndefdirective) - component containing cell
 * definitions for each column passed to row definition.
 * @stacked-example(Basic, tree-grid/tree-grid-basic.component)
 *
 * `NbTreeGridComponent`'s source input and `NbTreeGridDataSourceBuilder.create` expecting data to be an array of
 * objects with `data`, `children` and `expanded` properties. If your data doesn't match this interface, you can pass
 * getter functions for each property as arguments to `NbTreeGridDataSourceBuilder.create` method.
 * @stacked-example(Custom node structure, tree-grid/tree-grid-custom-node-structure.component)
 *
 * To use sorting you can add `nbSort` directive to table and subscribe to `sort` method. When user click on header,
 * sort event will be emitted. Event object contain clicked column name and desired sort direction.
 * @stacked-example(Sortable, tree-grid/tree-grid-sortable.component)
 *
 * You can use `Data Source Builder` to create `NbTreeGridDataSource` which would have toggle, sort and
 * filter methods. Then you can call this methods to change sort or toggle rows programmatically. Also `nbSort` and
 * `nbFilterInput` directives both support `NbTreeGridDataSource`, so you can pass it directly as an input and
 * directives will trigger sort, toggle themselves.
 * @stacked-example(Data Source Builder, tree-grid/tree-grid-showcase.component)
 *
 * You can create responsive grid by setting `hideOn` and `showOn` inputs of
 * [nbTreeGridColumnDef](docs/components/tree-grid/api#nbtreegridcolumndefdirective) directive.
 * When viewport reaches specified width grid hides or shows columns.
 * @stacked-example(Responsive columns, tree-grid/tree-grid-responsive.component)
 *
 * To customize sort or row toggle icons you can use `nbSortHeaderIcon` and `nbTreeGridRowToggle` directives
 * respectively. `nbSortHeaderIcon` is a structural directive and it's implicit context set to current direction.
 * Also context has three properties: `isAscending`, `isDescending` and `isNone`.
 * @stacked-example(Custom icons, tree-grid/tree-grid-custom-icons.component)
 *
 * By default, row to toggle happens when user clicks anywhere in the row. Also double click expands row deeply.
 * To disable this you can set `[clickToToggle]="false"` input of `nbTreeGridRow`.
 * @stacked-example(Disable click toggle, tree-grid/tree-grid-disable-click-toggle.component)
 *
 * @styles
 *
 * tree-grid-cell-border-width:
 * tree-grid-cell-border-style:
 * tree-grid-cell-border-color:
 * tree-grid-row-min-height:
 * tree-grid-cell-padding:
 * tree-grid-header-background-color:
 * tree-grid-header-text-color:
 * tree-grid-header-text-font-family:
 * tree-grid-header-text-font-size:
 * tree-grid-header-text-font-weight:
 * tree-grid-header-text-line-height:
 * tree-grid-footer-background-color:
 * tree-grid-footer-text-color:
 * tree-grid-footer-text-font-family:
 * tree-grid-footer-text-font-size:
 * tree-grid-footer-text-font-weight:
 * tree-grid-footer-text-line-height:
 * tree-grid-row-background-color:
 * tree-grid-row-even-background-color:
 * tree-grid-row-hover-background-color:
 * tree-grid-row-text-color:
 * tree-grid-row-text-font-family:
 * tree-grid-row-text-font-size:
 * tree-grid-row-text-font-weight:
 * tree-grid-row-text-line-height:
 * tree-grid-sort-header-button-background-color:
 * tree-grid-sort-header-button-border:
 * tree-grid-sort-header-button-padding:
 */
declare class NbTreeGridComponent<T> extends NbTable<NbTreeGridPresentationNode<T>> implements AfterViewInit, OnDestroy {
    private dataSourceBuilder;
    private window;
    protected readonly _viewRepeater: any;
    protected readonly _stickyPositioningListener: any;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<T>, differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, window: any, _viewRepeater: any, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: any);
    private destroy$;
    private _source;
    private platform;
    /**
     * The table's data
     * @param data
     * @type {<T>[] | NbTreeGridDataSource}
     */
    set source(data: T[] | NbTreeGridDataSource<T>);
    levelPadding: string;
    /**
     * Make all columns equal width. False by default.
     */
    set equalColumnsWidth(value: boolean);
    get equalColumnsWidth(): boolean;
    private equalColumnsWidthValue;
    static ngAcceptInputType_equalColumnsWidth: NbBooleanInput;
    readonly treeClass = true;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggleRow(row: NbTreeGridRowComponent, options?: NbToggleOptions): void;
    toggleCellRow(cell: NbTreeGridCellDirective): void;
    getColumnWidth(): string;
    getCellLevel(cell: NbTreeGridCellDirective, columnName: string): number;
    private getRowContext;
    private getCellContext;
    private getContextByCellEl;
    private getContextByRowEl;
    private getColumns;
    private getColumnsCount;
    private isFirstColumn;
    private checkDefsCount;
    private updateVisibleColumns;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridComponent<any>, [null, null, null, null, { attribute: "role"; }, null, null, null, null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridComponent<any>, "table[nbTreeGrid]", never, { "source": { "alias": "nbTreeGrid"; "required": false; }; "levelPadding": { "alias": "levelPadding"; "required": false; }; "equalColumnsWidth": { "alias": "equalColumnsWidth"; "required": false; }; }, {}, never, never, false, never>;
}

interface NbTreeGridResponsiveRowDef {
    hideColumn(column: string): any;
    showColumn(column: string): any;
}
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
declare class NbTreeGridRowDefDirective<T> extends NbRowDefDirective<T> implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridRowDefDirective<any>, "[nbTreeGridRowDef]", never, { "columns": { "alias": "nbTreeGridRowDefColumns"; "required": false; }; }, {}, never, never, false, never>;
}
declare class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderRowDefDirective, "[nbTreeGridHeaderRowDef]", never, { "columns": { "alias": "nbTreeGridHeaderRowDef"; "required": false; }; }, {}, never, never, false, never>;
}
declare class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterRowDefDirective, "[nbTreeGridFooterRowDef]", never, { "columns": { "alias": "nbTreeGridFooterRowDef"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
declare class NbTreeGridCellDefDirective extends NbCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridCellDefDirective, "[nbTreeGridCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
declare class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderCellDefDirective, "[nbTreeGridHeaderCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
declare class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterCellDefDirective, "[nbTreeGridFooterCellDef]", never, {}, {}, never, never, false, never>;
}

declare class NbFilterDirective {
    filterable: NbFilterable;
    filter(filterRequest: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFilterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFilterDirective, "[nbFilter]", never, { "filterable": { "alias": "nbFilter"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
declare class NbFilterInputDirective extends NbFilterDirective implements OnInit, OnDestroy {
    private search$;
    private destroy$;
    filterable: NbFilterable;
    /**
     * Debounce time before triggering filter method. Set in milliseconds.
     * Default 200.
     */
    debounceTime: number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    filter(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFilterInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFilterInputDirective, "[nbFilterInput]", never, { "filterable": { "alias": "nbFilterInput"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
declare class NbTreeGridRowToggleDirective {
    private cell;
    toggleRow($event: any): void;
    constructor(cell: NbTreeGridCellDirective);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridRowToggleDirective, "[nbTreeGridRowToggle]", never, {}, {}, never, never, false, never>;
}

/**
 * NbTreeGridRowToggleComponent
 */
declare class NbTreeGridRowToggleComponent {
    private cell;
    private expandedValue;
    set expanded(value: boolean);
    get expanded(): boolean;
    toggleRow($event: any): void;
    constructor(cell: NbTreeGridCellDirective);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridRowToggleComponent, "nb-tree-grid-row-toggle", never, { "expanded": { "alias": "expanded"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NbTreeGridModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTreeGridModule, [typeof NbTreeGridComponent, typeof NbTreeGridRowDefDirective, typeof NbTreeGridRowComponent, typeof NbTreeGridCellDefDirective, typeof NbTreeGridCellDirective, typeof NbTreeGridHeaderRowDefDirective, typeof NbTreeGridHeaderRowComponent, typeof NbTreeGridHeaderCellDefDirective, typeof NbTreeGridHeaderCellDirective, typeof NbTreeGridFooterRowDefDirective, typeof NbTreeGridFooterRowComponent, typeof NbTreeGridFooterCellDefDirective, typeof NbTreeGridFooterCellDirective, typeof NbTreeGridColumnDefDirective, typeof NbSortDirective, typeof NbSortHeaderComponent, typeof NbSortIconComponent, typeof NbFilterDirective, typeof NbFilterInputDirective, typeof NbTreeGridRowToggleDirective, typeof NbTreeGridRowToggleComponent, typeof NbSortHeaderIconDirective], [typeof i4.CommonModule, typeof NbTableModule, typeof NbIconModule], [typeof NbTableModule, typeof NbTreeGridComponent, typeof NbTreeGridRowDefDirective, typeof NbTreeGridRowComponent, typeof NbTreeGridCellDefDirective, typeof NbTreeGridCellDirective, typeof NbTreeGridHeaderRowDefDirective, typeof NbTreeGridHeaderRowComponent, typeof NbTreeGridHeaderCellDefDirective, typeof NbTreeGridHeaderCellDirective, typeof NbTreeGridFooterRowDefDirective, typeof NbTreeGridFooterRowComponent, typeof NbTreeGridFooterCellDefDirective, typeof NbTreeGridFooterCellDirective, typeof NbTreeGridColumnDefDirective, typeof NbSortDirective, typeof NbSortHeaderComponent, typeof NbSortIconComponent, typeof NbFilterDirective, typeof NbFilterInputDirective, typeof NbTreeGridRowToggleDirective, typeof NbTreeGridRowToggleComponent, typeof NbSortHeaderIconDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTreeGridModule>;
}

declare const NB_TREE_GRID: InjectionToken<unknown>;

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`
 *
 * @stacked-example(Toggle status, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-icon-size:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-cursor:
 * toggle-basic-text-color:
 * toggle-basic-background-color:
 * toggle-basic-border-color:
 * toggle-basic-checked-background-color:
 * toggle-basic-checked-border-color:
 * toggle-basic-checked-switcher-background-color:
 * toggle-basic-checked-switcher-checkmark-color:
 * toggle-basic-focus-background-color:
 * toggle-basic-focus-border-color:
 * toggle-basic-focus-checked-background-color:
 * toggle-basic-focus-checked-border-color:
 * toggle-basic-hover-background-color:
 * toggle-basic-hover-border-color:
 * toggle-basic-hover-checked-background-color:
 * toggle-basic-hover-checked-border-color:
 * toggle-basic-active-background-color:
 * toggle-basic-active-border-color:
 * toggle-basic-active-checked-background-color:
 * toggle-basic-active-checked-border-color:
 * toggle-basic-disabled-background-color:
 * toggle-basic-disabled-border-color:
 * toggle-basic-disabled-switcher-background-color:
 * toggle-basic-disabled-checked-switcher-checkmark-color:
 * toggle-basic-disabled-text-color:
 * toggle-primary-text-color:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-background-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-background-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-focus-checked-background-color:
 * toggle-primary-focus-checked-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-hover-checked-background-color:
 * toggle-primary-hover-checked-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-primary-active-checked-background-color:
 * toggle-primary-active-checked-border-color:
 * toggle-primary-disabled-background-color:
 * toggle-primary-disabled-border-color:
 * toggle-primary-disabled-switcher-background-color:
 * toggle-primary-disabled-checked-switcher-checkmark-color:
 * toggle-primary-disabled-text-color:
 * toggle-success-text-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-background-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-background-color:
 * toggle-success-focus-border-color:
 * toggle-success-focus-checked-background-color:
 * toggle-success-focus-checked-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-hover-checked-background-color:
 * toggle-success-hover-checked-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-success-active-checked-background-color:
 * toggle-success-active-checked-border-color:
 * toggle-success-disabled-background-color:
 * toggle-success-disabled-border-color:
 * toggle-success-disabled-switcher-background-color:
 * toggle-success-disabled-checked-switcher-checkmark-color:
 * toggle-success-disabled-text-color:
 * toggle-info-text-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-background-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-background-color:
 * toggle-info-focus-border-color:
 * toggle-info-focus-checked-background-color:
 * toggle-info-focus-checked-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-hover-checked-background-color:
 * toggle-info-hover-checked-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-info-active-checked-background-color:
 * toggle-info-active-checked-border-color:
 * toggle-info-disabled-background-color:
 * toggle-info-disabled-border-color:
 * toggle-info-disabled-switcher-background-color:
 * toggle-info-disabled-checked-switcher-checkmark-color:
 * toggle-info-disabled-text-color:
 * toggle-warning-text-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-background-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-background-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-focus-checked-background-color:
 * toggle-warning-focus-checked-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-hover-checked-background-color:
 * toggle-warning-hover-checked-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-warning-active-checked-background-color:
 * toggle-warning-active-checked-border-color:
 * toggle-warning-disabled-background-color:
 * toggle-warning-disabled-border-color:
 * toggle-warning-disabled-switcher-background-color:
 * toggle-warning-disabled-checked-switcher-checkmark-color:
 * toggle-warning-disabled-text-color:
 * toggle-danger-text-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-background-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-background-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-focus-checked-background-color:
 * toggle-danger-focus-checked-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-hover-checked-background-color:
 * toggle-danger-hover-checked-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 * toggle-danger-active-checked-background-color:
 * toggle-danger-active-checked-border-color:
 * toggle-danger-disabled-background-color:
 * toggle-danger-disabled-border-color:
 * toggle-danger-disabled-switcher-background-color:
 * toggle-danger-disabled-checked-switcher-checkmark-color:
 * toggle-danger-disabled-text-color:
 * toggle-control-text-color:
 * toggle-control-background-color:
 * toggle-control-border-color:
 * toggle-control-checked-background-color:
 * toggle-control-checked-border-color:
 * toggle-control-checked-switcher-background-color:
 * toggle-control-checked-switcher-checkmark-color:
 * toggle-control-focus-background-color:
 * toggle-control-focus-border-color:
 * toggle-control-focus-checked-background-color:
 * toggle-control-focus-checked-border-color:
 * toggle-control-hover-background-color:
 * toggle-control-hover-border-color:
 * toggle-control-hover-checked-background-color:
 * toggle-control-hover-checked-border-color:
 * toggle-control-active-background-color:
 * toggle-control-active-border-color:
 * toggle-control-active-checked-background-color:
 * toggle-control-active-checked-border-color:
 * toggle-control-disabled-background-color:
 * toggle-control-disabled-border-color:
 * toggle-control-disabled-switcher-background-color:
 * toggle-control-disabled-checked-switcher-checkmark-color:
 * toggle-control-disabled-text-color:
 */
declare class NbToggleComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    private changeDetector;
    private layoutDirection;
    private renderer;
    private hostElement;
    private zone;
    protected statusService: NbStatusService;
    onChange: any;
    onTouched: any;
    private destroy$;
    /**
     * Toggle checked
     * @type {boolean}
     */
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    static ngAcceptInputType_checked: NbBooleanInput;
    /**
     * Controls input disabled state
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Toggle status.
     * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Toggle label position.
     * Possible values are: `left`, `right`, `start`, `end` (default)
     */
    labelPosition: 'left' | 'right' | 'start' | 'end';
    /**
     * Output when checked state is changed by a user
     * @type EventEmitter<boolean>
     */
    checkedChange: EventEmitter<boolean>;
    get primary(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get info(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    get labelLeft(): boolean;
    get labelRight(): boolean;
    get labelStart(): boolean;
    get labelEnd(): boolean;
    constructor(changeDetector: ChangeDetectorRef, layoutDirection: NbLayoutDirectionService, renderer: Renderer2, hostElement: ElementRef<HTMLElement>, zone: NgZone, statusService: NbStatusService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkState(): string;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    updateValue(event: Event): void;
    onInputClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbToggleComponent, "nb-toggle", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "status": { "alias": "status"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
}

declare class NbToggleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToggleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbToggleModule, [typeof NbToggleComponent], [typeof i4.CommonModule, typeof NbIconModule], [typeof NbToggleComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbToggleModule>;
}

export { BUILT_IN_THEMES, CORPORATE_THEME, COSMIC_THEME, DARK_THEME, DEFAULT_MEDIA_BREAKPOINTS, DEFAULT_THEME, MONTHS_IN_COLUMN, MONTHS_IN_VIEW, NB_BUILT_IN_JS_THEMES, NB_BUTTON_GROUP, NB_DATE_ADAPTER, NB_DATE_SERVICE_OPTIONS, NB_DEFAULT_ROW_LEVEL, NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, NB_DIALOG_CONFIG, NB_DOCUMENT, NB_JS_THEMES, NB_LAYOUT_DIRECTION, NB_MEDIA_BREAKPOINTS, NB_ROW_DOUBLE_CLICK_DELAY, NB_SELECT_INJECTION_TOKEN, NB_SORT_HEADER_COLUMN_DEF, NB_STEPPER, NB_TABLE_PROVIDERS, NB_TABLE_TEMPLATE, NB_THEME_OPTIONS, NB_TIME_PICKER_CONFIG, NB_TOASTR_CONFIG, NB_TREE_GRID, NB_VIEW_REPEATER_STRATEGY, NB_WINDOW, NB_WINDOW_CONFIG, NB_WINDOW_CONTENT, NB_WINDOW_CONTEXT, NB_WINDOW_DEFAULT_BUTTONS_CONFIG, NbA11yModule, NbAccordionComponent, NbAccordionItemBodyComponent, NbAccordionItemComponent, NbAccordionItemHeaderComponent, NbAccordionModule, NbActionComponent, NbActionsComponent, NbActionsModule, NbAdjustableConnectedPositionStrategy, NbAdjustment, NbAlertComponent, NbAlertModule, NbAutocompleteComponent, NbAutocompleteDirective, NbAutocompleteModule, NbBadgeComponent, NbBadgeModule, NbBaseCalendarComponent, NbBaseCalendarModule, NbBaseCalendarRangeCell, NbBasePicker, NbBasePickerComponent, NbBidiModule, NbBlockScrollStrategyAdapter, NbButton, NbButtonComponent, NbButtonGroupComponent, NbButtonGroupModule, NbButtonModule, NbButtonToggleDirective, NbCalendarActionsComponent, NbCalendarComponent, NbCalendarDayCellComponent, NbCalendarDayPickerComponent, NbCalendarDaysNamesComponent, NbCalendarKitModule, NbCalendarModule, NbCalendarMonthCellComponent, NbCalendarMonthModelService, NbCalendarMonthPickerComponent, NbCalendarPageableNavigationComponent, NbCalendarPickerComponent, NbCalendarPickerRowComponent, NbCalendarRangeComponent, NbCalendarRangeDayCellComponent, NbCalendarRangeModule, NbCalendarRangeMonthCellComponent, NbCalendarRangeYearCellComponent, NbCalendarSize, NbCalendarTimeModelService, NbCalendarViewMode, NbCalendarViewModeComponent, NbCalendarWeekNumberComponent, NbCalendarWithTimeComponent, NbCalendarYearCellComponent, NbCalendarYearModelService, NbCalendarYearPickerComponent, NbCardBackComponent, NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardFrontComponent, NbCardHeaderComponent, NbCardModule, NbCdkAdapterModule, NbCdkMappingModule, NbCellDefDirective, NbCellDirective, NbCellOutletDirective, NbChatAvatarComponent, NbChatComponent, NbChatCustomMessageDirective, NbChatCustomMessageService, NbChatFormComponent, NbChatMessageComponent, NbChatMessageFileComponent, NbChatMessageMapComponent, NbChatMessageQuoteComponent, NbChatMessageTextComponent, NbChatModule, NbChatOptions, NbChatTitleDirective, NbCheckboxComponent, NbCheckboxModule, NbClickTriggerStrategy, NbColorHelper, NbColumnDefDirective, NbColumnsService, NbComponentPortal, NbContextMenuComponent, NbContextMenuDirective, NbContextMenuModule, NbDataRowOutletDirective, NbDataSource, NbDateAdapterService, NbDateService, NbDateTimeAdapterService, NbDateTimePickerComponent, NbDatepicker, NbDatepickerAdapter, NbDatepickerComponent, NbDatepickerContainerComponent, NbDatepickerDirective, NbDatepickerModule, NbDayPeriod, NbDialogConfig, NbDialogContainerComponent, NbDialogModule, NbDialogRef, NbDialogService, NbDirectionality, NbDynamicOverlay, NbDynamicOverlayChange, NbDynamicOverlayHandler, NbFilterDirective, NbFilterInputDirective, NbFlexibleConnectedPositionStrategy, NbFlipCardComponent, NbFocusKeyManager, NbFocusKeyManagerFactoryService, NbFocusMonitor, NbFocusTrap, NbFocusTrapFactoryService, NbFocusTriggerStrategy, NbFontIcon, NbFooterCellDefDirective, NbFooterCellDirective, NbFooterRowComponent, NbFooterRowDefDirective, NbFooterRowOutletDirective, NbFormFieldComponent, NbFormFieldControl, NbFormFieldControlConfig, NbFormFieldModule, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPositionStrategy, NbHeaderCellDefDirective, NbHeaderCellDirective, NbHeaderRowComponent, NbHeaderRowDefDirective, NbHeaderRowOutletDirective, NbHintTriggerStrategy, NbHoverTriggerStrategy, NbIconComponent, NbIconDefinition, NbIconLibraries, NbIconModule, NbIconPackType, NbInfiniteListDirective, NbInputDirective, NbInputModule, NbJSThemesRegistry, NbLayoutColumnComponent, NbLayoutComponent, NbLayoutDirection, NbLayoutDirectionService, NbLayoutFooterComponent, NbLayoutHeaderComponent, NbLayoutModule, NbLayoutRulerService, NbLayoutScrollService, NbListComponent, NbListItemComponent, NbListModule, NbListPageTrackerDirective, NbLtrDirective, NbMediaBreakpointsService, NbMenuComponent, NbMenuItem, NbMenuItemComponent, NbMenuModule, NbMenuService, NbNativeDateService, NbNoDataRowOutletDirective, NbNoopTriggerStrategy, NbOptionComponent, NbOptionGroupComponent, NbOptionListComponent, NbOptionModule, NbOverlay, NbOverlayContainer, NbOverlayContainerAdapter, NbOverlayContainerComponent, NbOverlayModule, NbOverlayPositionBuilder, NbOverlayService, NbPlatform, NbPopoverComponent, NbPopoverDirective, NbPopoverModule, NbPortalDirective, NbPortalOutletDirective, NbPosition, NbPositionBuilderService, NbPositionHelper, NbPositionedContainerComponent, NbPrefixDirective, NbProgressBarComponent, NbProgressBarModule, NbRadioComponent, NbRadioGroupComponent, NbRadioModule, NbRangeAdapterService, NbRangepickerComponent, NbRestoreScrollTopHelper, NbRevealCardComponent, NbRouteTabsetComponent, NbRouteTabsetModule, NbRowComponent, NbRowDefDirective, NbRtlDirective, NbScrollDispatcherAdapter, NbScrollStrategyOptions, NbScrollableContainerDimensions, NbSearchComponent, NbSearchFieldComponent, NbSearchModule, NbSearchService, NbSelectComponent, NbSelectLabelComponent, NbSelectModule, NbSelectWithAutocompleteComponent, NbSelectWithAutocompleteModule, NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, NbSidebarModule, NbSidebarService, NbSortDirection, NbSortDirective, NbSortHeaderComponent, NbSortHeaderIconDirective, NbSortIconComponent, NbSpinnerComponent, NbSpinnerDirective, NbSpinnerModule, NbSpinnerService, NbStatusService, NbStepComponent, NbStepperComponent, NbStepperModule, NbStepperNextDirective, NbStepperPreviousDirective, NbSuffixDirective, NbSvgIcon, NbTabComponent, NbTabContentDirective, NbTabTitleDirective, NbTable, NbTableModule, NbTabsetComponent, NbTabsetModule, NbTagComponent, NbTagInputDirective, NbTagListComponent, NbTagModule, NbTemplatePortal, NbThemeModule, NbThemeService, NbTimePickerCellComponent, NbTimePickerComponent, NbTimePickerDirective, NbTimepickerModule, NbToast, NbToastComponent, NbToastContainer, NbToastRef, NbToastrConfig, NbToastrContainerComponent, NbToastrContainerRegistry, NbToastrModule, NbToastrService, NbToggleComponent, NbToggleModule, NbToggleStates, NbTooltipComponent, NbTooltipDirective, NbTooltipModule, NbTreeGridCellDefDirective, NbTreeGridCellDirective, NbTreeGridColumnDefDirective, NbTreeGridComponent, NbTreeGridDataService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridFilterService, NbTreeGridFooterCellDefDirective, NbTreeGridFooterCellDirective, NbTreeGridFooterRowComponent, NbTreeGridFooterRowDefDirective, NbTreeGridHeaderCellDefDirective, NbTreeGridHeaderCellDirective, NbTreeGridHeaderRowComponent, NbTreeGridHeaderRowDefDirective, NbTreeGridModule, NbTreeGridPresentationNode, NbTreeGridRowComponent, NbTreeGridRowDefDirective, NbTreeGridRowToggleComponent, NbTreeGridRowToggleDirective, NbTreeGridService, NbTreeGridSortService, NbTrigger, NbTriggerStrategyBase, NbTriggerStrategyBuilderService, NbUserComponent, NbUserModule, NbViewportRulerAdapter, NbWindowComponent, NbWindowConfig, NbWindowModule, NbWindowRef, NbWindowService, NbWindowState, NbWindowsContainerComponent, createContainer, nbSelectFormFieldControlConfigFactory, patch, windowFactory };
export type { NbAdjustmentValues, NbBadge, NbBadgeLogicalPosition, NbBadgePhysicalPosition, NbBadgePosition, NbButtonAppearance, NbButtonProperties, NbButtonToggleAppearance, NbButtonToggleChange, NbCalendarCell, NbCalendarDay, NbCalendarRange, NbCalendarSizeValues, NbCalendarViewModeValues, NbChatMessageFile, NbChatMessageFileIconPreview, NbChatMessageFileImagePreview, NbChildrenGetter, NbComponentOrCustomStatus, NbComponentShape, NbComponentSize, NbComponentStatus, NbComponentType, NbConnectedOverlayPositionChange, NbConnectedPosition, NbConnectionPositionPair, NbContextMenuContext, NbDataGetter, NbDuplicateToastBehaviour, NbDynamicOverlayController, NbExpandedGetter, NbFilterable, NbFocusableOption, NbFontIconPackParams, NbFormControlAddon, NbFormControlState, NbGetters, NbGlobalPosition, NbIcon, NbIconConfig, NbIconOptions, NbIconPack, NbIconPackParams, NbIcons, NbJSThemeOptions, NbJSThemeVariable, NbLayoutDimensions, NbMediaBreakpoint, NbMenuBag, NbOverlayConfig, NbOverlayContent, NbOverlayRef, NbPickerValidatorConfig, NbPortal, NbPositionStrategy, NbPositionValues, NbRenderableContainer, NbRouteTab, NbScrollPosition, NbScrollStrategies, NbScrollStrategy, NbSearchType, NbSelectAppearance, NbSelectCompareFunction, NbSelectedTimeModel, NbSelectedTimePayload, NbSidebarResponsiveState, NbSidebarState, NbSortDirectionValues, NbSortHeaderIconDirectiveContext, NbSortRequest, NbSortable, NbStepChangeEvent, NbStepperOrientation, NbTagAppearance, NbTagInputAddEvent, NbTagSelectionChange, NbThemeOptions, NbTimePickerConfig, NbTimepickerLocalizationConfig, NbToggleOptions, NbTreeGridResponsiveRowDef, NbTriggerStrategy, NbTriggerValues, NbWindowControlButtonsConfig, NbWindowStateChange };
