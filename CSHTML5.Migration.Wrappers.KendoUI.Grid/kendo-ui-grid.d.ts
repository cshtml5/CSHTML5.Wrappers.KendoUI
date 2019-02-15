// Type definitions for kendo-ui.kendo UI Professional v2016.1.314
// Project: http://www.telerik.com/kendo-ui
// Definitions by: Telerik <https://github.com/telerik/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare namespace kendo {
  function culture(): {
    name: string; calendar: {
      AM: string[]; PM: string[]; days: {
        names: string[]; namesAbbr: string[]; namesShort: string[];
        firstDay: number;
      };
      months: {names: string[]; namesAbbr: string[];};
      patterns: {
        D: string; F: string; G: string; M: string; T: string; Y: string;
        d: string;
        g: string;
        m: string;
        s: string;
        t: string;
        u: string;
        y: string;
      };
      twoDigitYearMax: number;
    };
    calendars: {
      standard: {
        AM: string[]; PM: string[]; days: {
          names: string[]; namesAbbr: string[]; namesShort: string[];
          firstDay: number;
        };
        months: {names: string[]; namesAbbr: string[];};
        patterns: {
          D: string; F: string; G: string; M: string; T: string; Y: string;
          d: string;
          g: string;
          m: string;
          s: string;
          t: string;
          u: string;
          y: string;
        };
        twoDigitYearMax: number;
      };
    };
    numberFormat: {
      currency: {
        decimals: number; groupSize: number[]; pattern: string[];
        symbol: string;
      };
      decimals: number;
      groupSize: number[];
      pattern: string[];
      percent: {
        decimals: number; groupSize: number[]; pattern: string[];
        symbol: string;
      };
    };
  };

  var cultures: {
    [culture: string]: {
      name?: string; calendar?: {
        AM: string[]; PM: string[]; days: {
          names: string[]; namesAbbr: string[]; namesShort: string[];
          firstDay: number;
        };
        months: {names: string[]; namesAbbr: string[];};
        patterns: {
          D: string; F: string; G: string; M: string; T: string; Y: string;
          d: string;
          g: string;
          m: string;
          s: string;
          t: string;
          u: string;
          y: string;
        };
        twoDigitYearMax: number;
      };
      calendars?: {
        standard: {
          AM: string[]; PM: string[]; days: {
            names: string[]; namesAbbr: string[]; namesShort: string[];
            firstDay: number;
          };
          months: {names: string[]; namesAbbr: string[];};
          patterns: {
            D: string; F: string; G: string; M: string; T: string; Y: string;
            d: string;
            g: string;
            m: string;
            s: string;
            t: string;
            u: string;
            y: string;
          };
          twoDigitYearMax: number;
        };
      };
      numberFormat?: {
        currency: {
          decimals: number; groupSize: number[]; pattern: string[];
          symbol: string;
        };
        decimals: number;
        groupSize: number[];
        pattern: string[];
        percent: {
          decimals: number; groupSize: number[]; pattern: string[];
          symbol: string;
        };
      };
    }
  };

  function format(format: string, ...values: any[]): string;

  function fx(selector: string): kendo.effects.Element;
  function fx(element: Element): kendo.effects.Element;
  function fx(element: JQuery): kendo.effects.Element;

  function init(selector: string, ...namespaces: any[]): void;
  function init(element: JQuery, ...namespaces: any[]): void;
  function init(element: Element, ...namespaces: any[]): void;

  function observable(data: any): kendo.data.ObservableObject;
  // function observableHierarchy(array: any[]):
  // kendo.data.ObservableArray;

  //function render(template: (data: any) => string, data: any[]): string;
  //function template(template: string, options?: TemplateOptions): (data: any) =>

  function guid(): string;

  function widgetInstance(
      element: JQuery, suite: any): kendo.ui.Widget;
  // function widgetInstance(element: JQuery, suite: typeof kendo.ui):
  // kendo.ui.Widget;
  // function widgetInstance(element: JQuery, suite: typeof
  // kendo.mobile.ui): kendo.ui.Widget;
  // function widgetInstance(element: JQuery, suite: typeof
  // kendo.dataviz.ui): kendo.ui.Widget;

  function antiForgeryTokens(): any;
  function bind(element: string, viewModel: any, namespace?: any): void;
  // function bind(element: string, viewModel:
  // kendo.data.ObservableObject, namespace?: any): void;
  function bind(element: JQuery, viewModel: any, namespace?: any): void;
  // function bind(element: JQuery, viewModel:
  // kendo.data.ObservableObject, namespace?: any): void;
  function bind(element: Element, viewModel: any, namespace?: any): void;
  // function bind(element: Element, viewModel:
  // kendo.data.ObservableObject, namespace?: any): void;
  function observableHierarchy(array: any): void;
  function culture(culture: string): void;
  function destroy(element: string): void;
  function destroy(element: JQuery): void;
  // function destroy(element: Element): void;
  function htmlEncode(value: string): string;
  // function parseDate(value: string, formats?: string, culture?: string):
  // Date;
  function parseDate(value: string, formats?: any, culture?: string): Date;
  function parseFloat(value: string, culture?: string): number;
  function parseInt(value: string, culture?: string): number;
  function parseColor(color: string, noerror: boolean): kendo.Color;
  function proxyModelSetters(): void;
  // function proxyModelSetters(data: kendo.data.Model): void;
  function resize(element: string, force: boolean): void;
  function resize(element: JQuery, force: boolean): void;
  // function resize(element: Element, force: boolean): void;
  function saveAs(options: any): void;
  function stringify(value: any): string;
  function throttle(fn: Function, timeout: number): void;
  function touchScroller(element: string): void;
  function touchScroller(element: JQuery): void;
  // function touchScroller(element: Element): void;
  function toString(value: Date, format: string, culture?: string): string;
  function toString(value: number, format: string, culture?: string): string;
  function unbind(element: string): void;
  function unbind(element: JQuery): void;
  // function unbind(element: Element): void;

  var ns: string;

  var keys: {
    INSERT: number; DELETE: number; BACKSPACE: number; TAB: number;
    ENTER: number;
    ESC: number;
    LEFT: number;
    UP: number;
    RIGHT: number;
    DOWN: number;
    END: number;
    HOME: number;
    SPACEBAR: number;
    PAGEUP: number;
    PAGEDOWN: number;
    F2: number;
    F10: number;
    F12: number;
  };

  var support: {
    touch: boolean; pointers: boolean; scrollbar(): number; hasHW3D: boolean;
    hasNativeScrolling: boolean;
    devicePixelRatio: number;
    placeHolder: boolean;
    zoomLevel: number;
    mobileOS: {
      device: string; tablet: any; browser: string; name: string;
      majorVersion: string;
      minorVersion: string;
      flatVersion: number;
      appMode: boolean;
    };
    browser: {
      msie: boolean; webkit: boolean; safari: boolean; opera: boolean;
      version: string;
    };
  };

  var version: string;

  interface TemplateOptions {
    paramName?: string;
    useWithBlock?: boolean;
  }

  class Class {
    static fn: Class;
    static extend(prototype: Object): Class;
  }

  class Observable extends Class {
    static fn: Observable;
    static extend(prototype: Object): Observable;

    init(...args: any[]): void;
    bind(eventName: string, handler: Function): Observable;
    one(eventName: string, handler: Function): Observable;
    first(eventName: string, handler: Function): Observable;
    trigger(eventName: string, e?: any): boolean;
    unbind(eventName: string, handler?: any): Observable;
  }

  interface ViewOptions {
    tagName?: string;
    wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    //init?: (e: ViewEvent) => void;
    //show?: (e: ViewEvent) => void;
    //hide?: (e: ViewEvent) => void;
  }

  interface ViewEvent {
    sender: View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  class View extends Observable {
    constructor(element: Element, options?: ViewOptions);
    constructor(element: string, options?: ViewOptions);
    element: JQuery;
    content: any;
    tagName: string;
    model: Object;
    init(element: Element, options?: ViewOptions): void;
    init(element: string, options?: ViewOptions): void;
    render(container?: any): JQuery;
    destroy(): void;
  }

  class ViewContainer extends Observable {
    view: View;
  }

  class Layout extends View {
    containers: {[selector: string]: ViewContainer;};
    showIn(selector: string, view: View, transitionClass?: string): void;
  }

  class History extends Observable {
    current: string;
    root: string;
    start(options: Object): void;
    stop(): void;
    change(callback: Function): void;
    navigate(location: string, silent?: boolean): void;
  }

  var history: History;

  interface RouterOptions {
    //init?: (e: RouterEvent) => void;
    pushState?: boolean;
    hashBang?: boolean;
    root?: string;
    ignoreCase?: boolean;
    change?: (e: RouterChangeEvent) => void;
    routeMissing?: (e: RouterRouteMissingEvent) => void;
    same?: (e: RouterEvent) => void;
  }

  interface RouterEvent {
    sender: Router;
    url: string;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  interface RouterChangeEvent extends RouterEvent {
    params: any;
    backButtonPressed: boolean;
  }

  interface RouterRouteMissingEvent extends RouterEvent {
    params: any;
  }

  class Route extends Class {
    route: RegExp;
    callback(url: string): void;
    worksWith(url: string): void;
  }

  class Router extends Observable {
    constructor(options?: RouterOptions);
    routes: Route[];
    init(options?: RouterOptions): void;
    start(): void;
    destroy(): void;
    route(route: string, callback: Function): void;
    navigate(location: string, silent?: boolean): void;
    replace(location: string, silent?: boolean): void;
  }

  // PART 2

  class Color extends Observable {
    options: ColorOptions;



    diff(): number;
    equals(): boolean;
    toHSV(): any;
    toRGB(): any;
    toBytes(): any;
    toHex(): string;
    toCss(): string;
    toCssRgba(): string;
    toDisplay(): string;
  }

  interface ColorOptions {
    name?: string;
  }
  interface ColorEvent {
    sender: Color;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }
}

declare namespace kendo.effects {
  function enable(): void;
  function disable(): void;
  interface Element {
    expand(direction: string): kendo.effects.Expand;
    expandHorizontal(): kendo.effects.Expand;
    expandVertical(): kendo.effects.Expand;
    fade(direction: string): kendo.effects.Fade;
    fadeIn(): kendo.effects.Fade;
    fadeOut(): kendo.effects.Fade;
    flip(axis: string, face: JQuery, back: JQuery): kendo.effects.Flip;
    flipHorizontal(face: JQuery, back: JQuery): kendo.effects.Flip;
    flipVertical(face: JQuery, back: JQuery): kendo.effects.Flip;
    pageturn(axis: string, face: JQuery, back: JQuery):
        kendo.effects.PageTurn;
    pageturnHorizontal(face: JQuery, back: JQuery):
        kendo.effects.PageTurn;
    pageturnVertical(face: JQuery, back: JQuery):
        kendo.effects.PageTurn;
    slideIn(direction: string): kendo.effects.SlideIn;
    slideInDown(): kendo.effects.SlideIn;
    slideInLeft(): kendo.effects.SlideIn;
    slideInRight(): kendo.effects.SlideIn;
    slideInUp(): kendo.effects.SlideIn;
    tile(direction: string, previous: JQuery): kendo.effects.Tile;
    tileDown(previous: JQuery): kendo.effects.Tile;
    tileLeft(previous: JQuery): kendo.effects.Tile;
    tileRight(previous: JQuery): kendo.effects.Tile;
    tileUp(previous: JQuery): kendo.effects.Tile;
    transfer(target: JQuery): kendo.effects.Transfer;
    zoom(direction: string): kendo.effects.Zoom;
    zoomIn(): kendo.effects.Zoom;
    zoomOut(): kendo.effects.Zoom;
  }
  interface Effect {
    play(): JQueryPromise<any>;
    reverse(): JQueryPromise<any>;
    duration(value: number): Effect;
    add(effect: Effect): Effect;
    stop(): Effect;
  }
  interface Expand extends Effect {
    duration(value: number): Expand;
    direction(value: string): Expand;
    stop(): Expand;
    add(effect: Effect): Expand;
  }
  interface Fade extends Effect {
    duration(value: number): Fade;
    direction(value: string): Fade;
    stop(): Fade;
    add(effect: Effect): Fade;
    startValue(value: number): Fade;
    endValue(value: number): Fade;
  }
  interface Flip extends Effect {
    duration(value: number): Flip;
    direction(value: string): Flip;
    stop(): Flip;
    add(effect: Effect): Flip;
  }

  interface PageTurn extends Effect {
    duration(value: number): PageTurn;
    direction(value: string): PageTurn;
    stop(): PageTurn;
    add(effect: Effect): PageTurn;
  }

  interface SlideIn extends Effect {
    duration(value: number): SlideIn;
    direction(value: string): SlideIn;
    stop(): SlideIn;
    add(effect: Effect): SlideIn;
  }

  interface Tile extends Effect {
    duration(value: number): Tile;
    direction(value: string): Tile;
    stop(): Tile;
    add(effect: Effect): Tile;
  }

  interface Transfer extends Effect {
    duration(value: number): Transfer;
    stop(): Transfer;
    add(effect: Effect): Transfer;
  }

  interface Zoom extends Effect {
    duration(value: number): Zoom;
    direction(value: string): Zoom;
    stop(): Zoom;
    add(effect: Effect): Zoom;
    startValue(value: number): Zoom;
    endValue(value: number): Zoom;
  }
}

declare namespace kendo.data {
  class Model extends ObservableObject {
    // static idField: string;
    // static fields: DataSourceSchemaModelFields;

    idField: string;
    _defaultId: any;
    fields: DataSourceSchemaModelFields;
    defaults: {
        //[field: string]: any;
    };
    id: any;
    dirty: boolean;

    static define(options: DataSourceSchemaModelWithFieldsObject): Model;
    static define(options: DataSourceSchemaModelWithFieldsArray): Model;

    // constructor(data?: any);
    init(data?: any): void;
    accept(data?: any): void;
    editable(field: string): boolean;
    isNew(): boolean;
  }

  interface DataSourceTransport {
    create?: kendo.data.DataSourceTransportCreate;
    destroy?: kendo.data.DataSourceTransportDestroy;
    push?: Function;
    read?: kendo.data.DataSourceTransportRead;
    signalr?: kendo.data.DataSourceTransportSignalr;
    update?: kendo.data.DataSourceTransportUpdate;

    parameterMap?
        (data: kendo.data.DataSourceTransportParameterMapData,
         type: string): any;
  }

  interface DataSourceTransportSignalrClient {
    create?: string;
    destroy?: string;
    read?: string;
    update?: string;
  }

  interface DataSourceTransportSignalrServer {
    create?: string;
    destroy?: string;
    read?: string;
    update?: string;
  }

  interface DataSourceTransportSignalr {
    client?: kendo.data.DataSourceTransportSignalrClient;
    hub?: any;
    promise?: any;
    server?: kendo.data.DataSourceTransportSignalrServer;
  }


  interface DataSourceParameterMapDataAggregate {
    field?: string;
    aggregate?: string;
  }

  interface DataSourceParameterMapDataGroup {
    aggregate?: DataSourceParameterMapDataAggregate[];
    field?: string;
    dir?: string;
  }

  interface DataSourceParameterMapDataFilter {
    field?: string;
    filters?: DataSourceParameterMapDataFilter[];
    logic?: string;
    operator?: string;
    value?: any;
  }

  interface DataSourceParameterMapDataSort {
    field?: string;
    dir?: string;
  }

  interface DataSourceTransportParameterMapData {
    aggregate?: DataSourceParameterMapDataAggregate[];
    group?: DataSourceParameterMapDataGroup[];
    filter?: DataSourceParameterMapDataFilter;
    models?: Model[];
    page?: number;
    pageSize?: number;
    skip?: number;
    sort?: DataSourceParameterMapDataSort[];
    take?: number;
  }

  interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
    model?: DataSourceSchemaModel;
  }

  interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
    model?: Model;
  }

  interface DataSourceSchemaModel {
    id?: string;
    fields?: any;
    [index: string]: any;
  }

  interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
    fields?: DataSourceSchemaModelField[];
  }

  interface DataSourceSchemaModelWithFieldsObject extends
      DataSourceSchemaModel {
    fields?: DataSourceSchemaModelFields;
  }

  interface DataSourceSchemaModelFields {
    [index: string]: DataSourceSchemaModelField;
  }

  interface DataSourceSchemaModelField {
    field?: string;
    from?: string;
    defaultValue?: any;
    editable?: boolean;
    nullable?: boolean;
    parse?: Function;
    type?: string;
    validation?: DataSourceSchemaModelFieldValidation;
  }

  interface DataSourceSchemaModelFieldValidation {
    required?: boolean;
    min?: any;
    max?: any;
  }

  class ObservableObject extends kendo.Observable {
    // constructor(value?: any);
    uid: string;
    init(value?: any): void;
    get(name: string): any;
    parent(): ObservableObject;
    set(name: string, value: any): void;
    toJSON(): Object;
  }
  class ObservableArray extends Observable {
    length: number;
    //[index: number]: any;

    // constructor(array: any[]);
    init(array: any[]): void;
    empty(): void;
    //every(
    //    callback:
    //        (item: Object, index: number, source: ObservableArray) => boolean):
    //    boolean;
    //filter(
    //    callback:
    //        (item: Object, index: number, source: ObservableArray) => boolean):
    //    any[];
    //find(
    //    callback:
    //        (item: Object, index: number, source: ObservableArray) => boolean):
    //    any;
    //forEach(
    //    callback:
    //        (item: Object, index: number, source: ObservableArray) => void):
    //    void;
    indexOf(item: any): number;
    join(separator: string): string;
    //map(callback:
    //        (item: Object, index: number, source: ObservableArray) => any):
    //    any[];
    parent(): ObservableObject;
    pop(): ObservableObject;
    push(...items: any[]): number;
    remove(item: Object): void;
    shift(): any;
    slice(begin: number, end?: number): any[];
    //some(
    //    callback:
    //        (item: Object, index: number, source: ObservableArray) => boolean):
    //    boolean;
    splice(start: number): any[];
    splice(start: number, deleteCount: number, ...items: any[]): any[];
    toJSON(): any[];
    unshift(...items: any[]): number;
    wrap(object: Object, parent: Object): any;
    wrapAll(source: Object, target: Object): any;
  }
  class BindingTarget {
    target: any;
    options: any;
    source: any;
  }

  class DataSource extends Observable {
    options: DataSourceOptions;

    static create(options?: DataSourceOptions): DataSource;

    constructor(options?: DataSourceOptions);
    init(options?: DataSourceOptions): void;
    add(model: Object): kendo.data.Model;
    // add(model: kendo.data.Model): kendo.data.Model;
    aggregate(val: any): void;
    aggregate(): any;
    aggregates(): any;
    at(index: number): kendo.data.ObservableObject;
    cancelChanges(model?: kendo.data.Model): void;
    data(): kendo.data.ObservableArray;
    data(value: any): void;
    fetch(callback?: Function): JQueryPromise<any>;
    filter(filters: DataSourceFilterItem|DataSourceFilterItem[]|
           DataSourceFilters): void;
    // filter(filters: DataSourceFilterItem[]): void;
    // filter(filters: DataSourceFilters): void;
    filter(): DataSourceFilters;
    get(id: any): kendo.data.Model;
    getByUid(uid: string): kendo.data.Model;
    group(groups: any): void;
    group(): any;
    hasChanges(): boolean;
    indexOf(value: kendo.data.ObservableObject): number;
    // insert(index: number, model: kendo.data.Model):
    // kendo.data.Model;
    insert(index: number, model: Object): kendo.data.Model;
    online(value: boolean): void;
    online(): boolean;
    offlineData(data: any[]): void;
    offlineData(): any[];
    page(): number;
    page(page: number): void;
    pageSize(): number;
    pageSize(size: number): void;
    pushCreate(model: Object): void;
    // pushCreate(models: any[]): void;
    pushDestroy(model: Object): void;
    // pushDestroy(models: any[]): void;
    pushUpdate(model: Object): void;
    // pushUpdate(models: any[]): void;
    query(options?: any): JQueryPromise<any>;
    read(data?: any): JQueryPromise<any>;
    remove(model: kendo.data.ObservableObject): void;
    sort(sort: DataSourceSortItem|DataSourceSortItem[]): void;
    // sort(sort: DataSourceSortItem[]): void;
    // sort(): DataSourceSortItem[];
    sync(): JQueryPromise<any>;
    total(): number;
    totalPages(): number;
    view(): kendo.data.ObservableArray;
  }

  class Query {
    data: any[];

    static process(
        data: any[],
        options: kendo.data.DataSourceTransportReadOptionsData):
        QueryResult;

    // constructor(data: any[]);
    toArray(): any[];
    range(intex: number, count: number): kendo.data.Query;
    skip(count: number): kendo.data.Query;
    take(count: number): kendo.data.Query;
    select(selector: Function): kendo.data.Query;
    order(selector: string|Function, dir?: string): kendo.data.Query;
    // order(selector: Function, dir?: string): kendo.data.Query;
    filter(filters: DataSourceFilterItem|DataSourceFilterItem[]|
           DataSourceFilters): kendo.data.Query;
    // filter(filters: DataSourceFilterItem[]): kendo.data.Query;
    // filter(filters: DataSourceFilters): kendo.data.Query;
    group(descriptors: DataSourceGroupItem|
          DataSourceGroupItem[]): kendo.data.Query;
    // group(descriptors: DataSourceGroupItem[]): kendo.data.Query;
  }

  interface QueryResult {
    total?: number;
    data?: any[];
  }

  interface DataSourceAggregateItem {
    field?: string;
    aggregate?: string;
  }

  interface DataSourceFilter {}

  interface DataSourceFilterItem extends DataSourceFilter {
    operator?: string;
    field?: string;
    value?: any;
  }

  interface DataSourceFilters extends DataSourceFilter {
    logic?: string;
    filters?: DataSourceFilter[];
  }

  interface DataSourceGroupItemAggregate {
    field?: string;
    aggregate?: string;
  }

  interface DataSourceGroupItem {
    field?: string;
    dir?: string;
    aggregates?: DataSourceGroupItemAggregate[];
  }

  interface DataSourceSchema {
    aggregates?: any;
    data?: any;
    errors?: any;
    groups?: any;
    parse?: Function;
    total?: any;
    type?: string;
    model?: any;
  }

  interface DataSourceSortItem {
    field?: string;
    dir?: string;
  }

  interface DataSourceTransportCreate extends JQueryAjaxSettings {
    cache?: boolean;
    contentType?: string;
    data?: any;
    dataType?: string;
    type?: string;
    url?: any;
  }

  interface DataSourceTransportDestroy extends JQueryAjaxSettings {
    cache?: boolean;
    contentType?: string;
    data?: any;
    dataType?: string;
    type?: string;
    url?: any;
  }

  interface DataSourceTransportRead extends JQueryAjaxSettings {
    cache?: boolean;
    contentType?: string;
    data?: any;
    dataType?: string;
    type?: string;
    url?: any;
  }

  interface DataSourceTransportUpdate extends JQueryAjaxSettings {
    cache?: boolean;
    contentType?: string;
    data?: any;
    dataType?: string;
    type?: string;
    url?: any;
  }

  interface DataSourceTransportWithObjectOperations extends
      kendo.data.DataSourceTransport {
    create?: kendo.data.DataSourceTransportCreate;
    destroy?: kendo.data.DataSourceTransportDestroy;
    read?: kendo.data.DataSourceTransportRead;
    update?: kendo.data.DataSourceTransportUpdate;
  }

  interface DataSourceTransportWithFunctionOperations extends
      kendo.data.DataSourceTransport {
    //create?: (options: kendo.data.DataSourceTransportOptions) => void;
    //destroy?: (options: kendo.data.DataSourceTransportOptions) => void;
    //read?:
    //    (options: kendo.data.DataSourceTransportReadOptions) => void;
    //update?: (options: kendo.data.DataSourceTransportOptions) => void;
  }

  interface DataSourceTransportOptions {
    //success: (data?: any) => void;
    //error: (error?: any) => void;
    data: any;
  }

  interface DataSourceTransportReadOptionsData {
    sort?: DataSourceSortItem[];
    filter?: DataSourceFilters;
    group?: DataSourceGroupItem[];
    take?: number;
    skip?: number;
  }

  interface DataSourceTransportReadOptions extends
      kendo.data.DataSourceTransportOptions {
    data: kendo.data.DataSourceTransportReadOptionsData;
  }

  interface DataSourceTransportBatchOptionsData {
    models: any[];
  }

  interface DataSourceTransportBatchOptions extends
      kendo.data.DataSourceTransportOptions {
    data: kendo.data.DataSourceTransportBatchOptionsData;
  }

  interface DataSourceOptions {
    aggregate?: DataSourceAggregateItem[];
    autoSync?: boolean;
    batch?: boolean;
    data?: any;
    filter?: any;
    group?: DataSourceGroupItem[];
    offlineStorage?: any;
    page?: number;
    pageSize?: number;
    schema?: DataSourceSchema;
    serverAggregates?: boolean;
    serverFiltering?: boolean;
    serverGrouping?: boolean;
    serverPaging?: boolean;
    serverSorting?: boolean;
    sort?: any;
    transport?: kendo.data.DataSourceTransport;
    type?: string;
    change?: (e: DataSourceChangeEvent) => void;
    error?: (e: DataSourceErrorEvent) => void;
    sync?: (e: DataSourceEvent) => void;
    requestStart?: (e: DataSourceRequestStartEvent) => void;
    requestEnd?: (e: DataSourceRequestEndEvent) => void;
  }

  interface DataSourceEvent {
    sender?: DataSource;
  }

  interface DataSourceItemOrGroup {}

  interface DataSourceGroup extends DataSourceItemOrGroup {
    aggregates: any[];
    field: string;
    hasSubgroups: boolean;
    items: DataSourceItemOrGroup[];
    value: any;
  }

  interface DataSourceChangeEvent extends DataSourceEvent {
    field?: string;
    value?: Model;
    action?: string;
    index?: number;
    items?: DataSourceItemOrGroup[];
    node?: any;
  }

  interface DataSourceErrorEvent extends DataSourceEvent {
    xhr: JQueryXHR;
    status: string;
    errorThrown: any;
    errors?: any;
  }

  interface DataSourceRequestStartEvent extends DataSourceEvent {
    type?: string;
    preventDefault(): void;
  }

  interface DataSourceRequestEndEvent extends DataSourceEvent {
    response?: any;
    type?: string;
  }
}

declare namespace kendo.data.transports {}

declare namespace kendo.ui {
  class DatePicker extends kendo.ui.Widget {
    static fn: DatePicker;

    options: DatePickerOptions;


    element: JQuery;
    wrapper: JQuery;

    static extend(proto: Object): DatePicker;

    constructor(element: Element, options?: DatePickerOptions);


    close(): void;
    destroy(): void;
    enable(enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    open(): void;
    setOptions(options: any): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
  }
  interface DatePickerAnimationClose {
    effects?: string;
    duration?: number;
  }

  interface DatePickerAnimationOpen {
    effects?: string;
    duration?: number;
  }

  interface DatePickerAnimation {
    close?: DatePickerAnimationClose;
    open?: DatePickerAnimationOpen;
  }
  interface DatePickerMonth {
    content?: string;
    empty?: string;
  }
  interface DatePickerOptions {
    name?: string;
    animation?: boolean|DatePickerAnimation;
    ARIATemplate?: string;
    culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any|Function;
    footer?: string|Function;
    format?: string;
    max?: Date;
    min?: Date;
    month?: DatePickerMonth;
    parseFormats?: any;
    start?: string;
    value?: Date;
    change?: (e: DatePickerChangeEvent) => void;
    close?: (e: DatePickerCloseEvent) => void;
    open?: (e: DatePickerOpenEvent) => void;
  }
  interface DatePickerEvent {
    sender: DatePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }
  interface DatePickerChangeEvent extends DatePickerEvent {}

  interface DatePickerCloseEvent extends DatePickerEvent {}

  interface DatePickerOpenEvent extends DatePickerEvent {}

  class Grid extends kendo.ui.Widget {
    static fn: Grid;

    options: GridOptions;

    dataSource: kendo.data.DataSource;
    columns: GridColumn[];
    footer: JQuery;
    pager: kendo.ui.Pager;
    table: JQuery;
    tbody: JQuery;
    thead: JQuery;
    content: JQuery;
    lockedHeader: JQuery;
    lockedTable: JQuery;
    lockedContent: JQuery;

    element: JQuery;
    wrapper: JQuery;

    static extend(proto: Object): Grid;

    constructor(element: Element, options?: GridOptions);


    addRow(): void;
    autoFitColumn(column: number): void;
    autoFitColumn(column: string): void;
    autoFitColumn(column: any): void;
    cancelChanges(): void;
    cancelRow(): void;
    cellIndex(cell: string): number;
    cellIndex(cell: Element): number;
    cellIndex(cell: JQuery): number;
    clearSelection(): void;
    closeCell(isCancel?: boolean): void;
    collapseGroup(row: string): void;
    collapseGroup(row: Element): void;
    collapseGroup(row: JQuery): void;
    collapseRow(row: string): void;
    collapseRow(row: Element): void;
    collapseRow(row: JQuery): void;
    current(): JQuery;
    current(cell: JQuery): void;
    dataItem(row: string): kendo.data.ObservableObject;
    dataItem(row: Element): kendo.data.ObservableObject;
    dataItem(row: JQuery): kendo.data.ObservableObject;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expandGroup(row: string): void;
    expandGroup(row: Element): void;
    expandGroup(row: JQuery): void;
    expandRow(row: string): void;
    expandRow(row: Element): void;
    expandRow(row: JQuery): void;
    getOptions(): GridOptions;
    hideColumn(column: number): void;
    hideColumn(column: string): void;
    hideColumn(column: any): void;
    items(): any;
    lockColumn(column: number): void;
    lockColumn(column: string): void;
    refresh(): void;
    removeRow(row: string): void;
    removeRow(row: Element): void;
    removeRow(row: JQuery): void;
    reorderColumn(destIndex: number, column: any): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    saveChanges(): void;
    saveRow(): void;
    select(): JQuery;
    select(rows: string): void;
    select(rows: Element): void;
    select(rows: JQuery): void;
    setDataSource(dataSource: kendo.data.DataSource): void;
    setOptions(options: any): void;
    showColumn(column: number): void;
    showColumn(column: string): void;
    showColumn(column: any): void;
    unlockColumn(column: number): void;
    unlockColumn(column: string): void;
  }

  interface GridAllowCopy {
    delimeter?: string|any;
  }

  interface GridColumnMenuMessages {
    columns?: string;
    filter?: string;
    sortAscending?: string;
    sortDescending?: string;
    settings?: string;
    done?: string;
    lock?: string;
    unlock?: string;
  }

  interface GridColumnMenu {
    columns?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    messages?: GridColumnMenuMessages;
  }

  interface GridColumnCommandItemText {
    edit?: string;
    cancel?: string;
    update?: string;
  }

  interface GridColumnCommandItem {
    name?: string;
    text?: GridColumnCommandItemText;
    className?: string;
    template?: string;
    imageClass?: string;
    click?: Function;
  }

  interface GridColumnFilterableCell {
    dataSource?: any|kendo.data.DataSource;
    dataTextField?: string;
    delay?: number;
    inputWidth?: number;
    suggestionOperator?: string;
    minLength?: number;
    enabled?: boolean;
    operator?: string;
    showOperators?: boolean;
    template?: Function;
  }

  interface GridColumnFilterable {
    cell?: GridColumnFilterableCell;
    multi?: boolean;
    dataSource?: any|any|kendo.data.DataSource;
    checkAll?: boolean;
    itemTemplate?: Function;
    operators?: any;
    search?: boolean;
    ignoreCase?: boolean;
    ui?: string|Function;
  }

  interface GridColumnSortable {
    compare?: Function;
  }

  interface GridColumn {
    aggregates?: any;
    attributes?: any;
    columns?: any;
    command?: GridColumnCommandItem[];
    encoded?: boolean;
    field?: string;
    filterable?: boolean|GridColumnFilterable;
    footerAttributes?: any;
    footerTemplate?: string|Function;
    format?: string;
    groupable?: boolean;
    groupHeaderTemplate?: string|Function;
    groupFooterTemplate?: string|Function;
    headerAttributes?: any;
    headerTemplate?: string|Function;
    hidden?: boolean;
    locked?: boolean;
    lockable?: boolean;
    minScreenWidth?: number;
    sortable?: boolean|GridColumnSortable;
    template?: string|Function;
    title?: string;
    width?: string|number;
    values?: any;
    menu?: boolean;
    type?: any;
  }

  interface GridEditable {
    confirmation?: boolean|string|Function;
    cancelDelete?: string;
    confirmDelete?: string;
    createAt?: string;
    destroy?: boolean;
    mode?: string;
    template?: string|Function;
    update?: boolean;
    window?: any;
  }

  interface GridExcel {
    allPages?: boolean;
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  interface GridFilterableMessages {
    and?: string;
    clear?: string;
    filter?: string;
    info?: string;
    isFalse?: string;
    isTrue?: string;
    or?: string;
    search?: string;
    selectValue?: string;
    cancel?: string;
    selectedItemsFormat?: string;
    operator?: string;
    value?: string;
    checkAll?: string;
  }

  interface GridFilterableOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  interface GridFilterableOperatorsEnums {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
  }

  interface GridFilterableOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  interface GridFilterableOperatorsString {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    isempty?: string;
    isnotempty?: string;
    startswith?: string;
    contains?: string;
    doesnotcontain?: string;
    endswith?: string;
  }

  interface GridFilterableOperators {
    string?: GridFilterableOperatorsString;
    number?: GridFilterableOperatorsNumber;
    date?: GridFilterableOperatorsDate;
    enums?: GridFilterableOperatorsEnums;
  }

  interface GridFilterable {
    extra?: boolean;
    messages?: GridFilterableMessages;
    operators?: GridFilterableOperators;
    mode?: string;
  }

  interface GridGroupableMessages {
    empty?: string;
  }

  interface GridGroupable {
    enabled?: boolean;
    showFooter?: boolean;
    messages?: GridGroupableMessages;
  }

  interface GridMessagesCommands {
    cancel?: string;
    canceledit?: string;
    create?: string;
    destroy?: string;
    edit?: string;
    excel?: string;
    save?: string;
    update?: string;
  }

  interface GridMessages {
    commands?: GridMessagesCommands;
    noRecords?: string;
  }

  interface GridNoRecords {
    template?: string|Function;
  }

  interface GridPageableMessages {
    display?: string;
    empty?: string;
    page?: string;
    of ?: string;
    itemsPerPage?: string;
    first?: string;
    last?: string;
    next?: string;
    previous?: string;
    refresh?: string;
    morePages?: string;
  }

  interface GridPageable {
    pageSize?: number;
    previousNext?: boolean;
    numeric?: boolean;
    buttonCount?: number;
    input?: boolean;
    pageSizes?: boolean|any;
    refresh?: boolean;
    info?: boolean;
    messages?: GridPageableMessages;
  }

  interface GridPdfMargin {
    bottom?: number|string;
    left?: number|string;
    right?: number|string;
    top?: number|string;
  }

  interface GridPdf {
    allPages?: boolean;
    author?: string;
    avoidLinks?: boolean|string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: GridPdfMargin;
    paperSize?: string|any;
    template?: string;
    repeatHeaders?: boolean;
    scale?: number;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  interface GridScrollable {
    virtual?: boolean;
  }

  interface GridSortable {
    allowUnsort?: boolean;
    mode?: string;
  }

  interface GridToolbarItem {
    name?: string;
    template?: string|Function;
    text?: string;
  }

  interface GridOptions {
    name?: string;
    allowCopy?: boolean|GridAllowCopy;
    altRowTemplate?: string|Function;
    autoBind?: boolean;
    columnResizeHandleWidth?: number;
    columns?: GridColumn[];
    columnMenu?: boolean|GridColumnMenu;
    dataSource?: any|kendo.data.DataSource;
    detailTemplate?: string|Function;
    editable?: boolean|GridEditable;
    excel?: GridExcel;
    filterable?: boolean|GridFilterable;
    groupable?: boolean|GridGroupable;
    height?: number|string;
    messages?: GridMessages;
    mobile?: boolean|string;
    navigatable?: boolean;
    noRecords?: boolean|GridNoRecords;
    pageable?: boolean|GridPageable;
    pdf?: GridPdf;
    reorderable?: boolean;
    resizable?: boolean;
    rowTemplate?: string|Function;
    scrollable?: boolean|GridScrollable;
    selectable?: boolean|string;
    sortable?: boolean|GridSortable;
    toolbar?: string|/*((...args:any[]) => string) |*/ GridToolbarItem[];
    cancel?: (e: GridCancelEvent) => void;
    change?: (e: GridChangeEvent) => void;
    columnHide?: (e: GridColumnHideEvent) => void;
    columnMenuInit?: (e: GridColumnMenuInitEvent) => void;
    columnReorder?: (e: GridColumnReorderEvent) => void;
    columnResize?: (e: GridColumnResizeEvent) => void;
    columnShow?: (e: GridColumnShowEvent) => void;
    dataBinding?: (e: GridDataBindingEvent) => void;
    dataBound?: (e: GridDataBoundEvent) => void;
    detailCollapse?: (e: GridDetailCollapseEvent) => void;
    detailExpand?: (e: GridDetailExpandEvent) => void;
    detailInit?: (e: GridDetailInitEvent) => void;
    edit?: (e: GridEditEvent) => void;
    excelExport?: (e: GridExcelExportEvent) => void;
    pdfExport?: (e: GridPdfExportEvent) => void;
    filterMenuInit?: (e: GridFilterMenuInitEvent) => void;
    remove?: (e: GridRemoveEvent) => void;
    save?: (e: GridSaveEvent) => void;
    saveChanges?: (e: GridSaveChangesEvent) => void;
    columnLock?: (e: GridColumnLockEvent) => void;
    columnUnlock?: (e: GridColumnUnlockEvent) => void;
    navigate?: (e: GridNavigateEvent) => void;
  }
  interface GridEvent {
    sender: Grid;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  interface GridCancelEvent extends GridEvent {
    container?: JQuery;
    // model?: kendo.data.Model;
  }

  interface GridChangeEvent extends GridEvent {}

  interface GridColumnHideEvent extends GridEvent {
    column?: any;
  }

  interface GridColumnMenuInitEvent extends GridEvent {
    container?: JQuery;
    field?: string;
  }

  interface GridColumnReorderEvent extends GridEvent {
    column?: any;
    newIndex?: number;
    oldIndex?: number;
  }

  interface GridColumnResizeEvent extends GridEvent {
    column?: any;
    newWidth?: number;
    oldWidth?: number;
  }

  interface GridColumnShowEvent extends GridEvent {
    column?: any;
  }

  interface GridDataBindingEvent extends GridEvent {
    action?: string;
    index?: number;
    items?: any;
  }

  interface GridDataBoundEvent extends GridEvent {}

  interface GridDetailCollapseEvent extends GridEvent {
    detailRow?: JQuery;
    masterRow?: JQuery;
  }

  interface GridDetailExpandEvent extends GridEvent {
    detailRow?: JQuery;
    masterRow?: JQuery;
  }

  interface GridDetailInitEvent extends GridEvent {
    data?: kendo.data.ObservableObject;
    detailCell?: JQuery;
    detailRow?: JQuery;
    masterRow?: JQuery;
  }

  interface GridEditEvent extends GridEvent {
    container?: JQuery;
    // model?: kendo.data.Model;
  }

  interface GridExcelExportEvent extends GridEvent {
    data?: any;
    // workbook?: kendo.ooxml.Workbook;
  }

  interface GridPdfExportEvent extends GridEvent {
    promise?: JQueryPromise<any>;
  }

  interface GridFilterMenuInitEvent extends GridEvent {
    container?: JQuery;
    field?: string;
  }

  interface GridRemoveEvent extends GridEvent {
    // model?: kendo.data.Model;
    row?: JQuery;
  }

  interface GridSaveEvent extends GridEvent {
    // model?: kendo.data.Model;
    container?: JQuery;
    values?: any;
  }

  interface GridSaveChangesEvent extends GridEvent {}

  interface GridColumnLockEvent extends GridEvent {
    column?: any;
  }

  interface GridColumnUnlockEvent extends GridEvent {
    column?: any;
  }

  interface GridNavigateEvent extends GridEvent {
    element?: JQuery;
  }

  class Pager extends kendo.ui.Widget {
    static fn: Pager;

    options: PagerOptions;

    dataSource: kendo.data.DataSource;

    element: JQuery;
    wrapper: JQuery;

    static extend(proto: Object): Pager;

    constructor(element: Element, options?: PagerOptions);


    totalPages(): number;
    pageSize(): number;
    page(): number;
    page(page: number): void;
    refresh(): void;
    destroy(): void;
  }

  interface PagerMessages {
    display?: string;
    empty?: string;
    allPages?: string;
    page?: string;
    of ?: string;
    itemsPerPage?: string;
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
    refresh?: string;
  }

  interface PagerOptions {
    name?: string;
    autoBind?: boolean;
    buttonCount?: number;
    dataSource?: any|kendo.data.DataSource;
    selectTemplate?: string;
    linkTemplate?: string;
    info?: boolean;
    input?: boolean;
    numeric?: boolean;
    pageSizes?: boolean|any;
    previousNext?: boolean;
    refresh?: boolean;
    messages?: PagerMessages;
    change?: (e: PagerChangeEvent) => void;
  }
  interface PagerEvent {
    sender: Pager;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  interface PagerChangeEvent extends PagerEvent {}


  class Widget extends Observable {
    static fn: Widget;

    element: JQuery;
    options: Object;
    events: string[];

    static extend(prototype: Object): Widget;

    // constructor(element: Element, options?: Object);
    constructor(element: JQuery, options?: Object);
    constructor(selector: String, options?: Object);
    // init(element: Element, options?: Object): void;
    init(element: JQuery, options?: Object): void;
    init(selector: String, options?: Object): void;
    destroy(): void;
    setOptions(options: Object): void;
    resize(force?: boolean): void;
  }
}

declare namespace kendo.mobile {}

declare namespace kendo.mobile.ui {}
declare namespace kendo.dataviz.ui {}

declare namespace kendo.dataviz.map.layer {}

declare namespace kendo.drawing.pdf {}

declare namespace kendo.geometry {}
declare namespace kendo.drawing {}
declare namespace kendo.dataviz.map {}
declare namespace kendo.dataviz {}
declare namespace kendo.dataviz.diagram {}
declare namespace kendo.spreadsheet {}
declare namespace kendo.ooxml {}

declare namespace kendo.dataviz.geometry {}
declare namespace kendo.dataviz.drawing {}

declare namespace kendo.pdf {}

interface HTMLElement {
  kendoBindingTarget: kendo.data.BindingTarget;
}

interface JQueryXHR {}

interface JQueryEventObject {}

interface JQueryPromise<T> {}

interface JQueryAjaxSettings {}

class JQuery {
  //     kendoDraggable(): JQuery;
  //     kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;

  //     kendoDropTarget(): JQuery;
  //     kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;

  //     kendoDropTargetArea(): JQuery;
  //     kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions):
  //     JQuery;

  data(key: any): any;

  //     kendoAutoComplete(): JQuery;
  //     kendoAutoComplete(options: kendo.ui.AutoCompleteOptions):
  //     JQuery;
  //     //data(key: "kendoAutoComplete"):
  //     kendo.ui.AutoComplete;

  //     kendoBarcode(): JQuery;
  //     kendoBarcode(options: kendo.dataviz.ui.BarcodeOptions):
  //     JQuery;
  //     //data(key: "kendoBarcode"):
  //     kendo.dataviz.ui.Barcode;

  //     kendoButton(): JQuery;
  //     kendoButton(options: kendo.ui.ButtonOptions): JQuery;
  //     //data(key: "kendoButton"): kendo.ui.Button;

  //     kendoCalendar(): JQuery;
  //     kendoCalendar(options: kendo.ui.CalendarOptions): JQuery;
  //     //data(key: "kendoCalendar"): kendo.ui.Calendar;

  //     kendoChart(): JQuery;
  //     kendoChart(options: kendo.dataviz.ui.ChartOptions): JQuery;
  //     //data(key: "kendoChart"): kendo.dataviz.ui.Chart;

  //     kendoColorPalette(): JQuery;
  //     kendoColorPalette(options: kendo.ui.ColorPaletteOptions):
  //     JQuery;
  //     //data(key: "kendoColorPalette"):
  //     kendo.ui.ColorPalette;

  //     kendoColorPicker(): JQuery;
  //     kendoColorPicker(options: kendo.ui.ColorPickerOptions):
  //     JQuery;
  //     //data(key: "kendoColorPicker"):
  //     kendo.ui.ColorPicker;

  //     kendoComboBox(): JQuery;
  //     kendoComboBox(options: kendo.ui.ComboBoxOptions): JQuery;
  //     //data(key: "kendoComboBox"): kendo.ui.ComboBox;

  //     kendoContextMenu(): JQuery;
  //     kendoContextMenu(options: kendo.ui.ContextMenuOptions):
  //     JQuery;
  //     //data(key: "kendoContextMenu"):
  //     kendo.ui.ContextMenu;

  kendoDatePicker(): JQuery;
  kendoDatePicker(options: kendo.ui.DatePickerOptions): JQuery;
  // data(key: "kendoDatePicker"): kendo.ui.DatePicker;

  //   kendoDateTimePicker(): JQuery;
  //   kendoDateTimePicker(options: kendo.ui.DateTimePickerOptions):
  //   JQuery;
  // data(key: "kendoDateTimePicker"):
  // kendo.ui.DateTimePicker;

  //     kendoDiagram(): JQuery;
  //     kendoDiagram(options: kendo.dataviz.ui.DiagramOptions):
  //     JQuery;
  //     //data(key: "kendoDiagram"):
  //     kendo.dataviz.ui.Diagram;

  //     kendoDropDownList(): JQuery;
  //     kendoDropDownList(options: kendo.ui.DropDownListOptions):
  //     JQuery;
  //     //data(key: "kendoDropDownList"):
  //     kendo.ui.DropDownList;

  //     kendoEditor(): JQuery;
  //     kendoEditor(options: kendo.ui.EditorOptions): JQuery;
  //     //data(key: "kendoEditor"): kendo.ui.Editor;

  //     kendoFilterMenu(): JQuery;
  //     kendoFilterMenu(options: kendo.ui.FilterMenuOptions): JQuery;
  //     //data(key: "kendoFilterMenu"): kendo.ui.FilterMenu;

  //     kendoFlatColorPicker(): JQuery;
  //     kendoFlatColorPicker(options:
  //     kendo.ui.FlatColorPickerOptions): JQuery;
  //     //data(key: "kendoFlatColorPicker"):
  //     kendo.ui.FlatColorPicker;

  //     kendoGantt(): JQuery;
  //     kendoGantt(options: kendo.ui.GanttOptions): JQuery;
  //     //data(key: "kendoGantt"): kendo.ui.Gantt;

  kendoGrid(): JQuery;
  kendoGrid(options: kendo.ui.GridOptions): JQuery;
  // data(key: "kendoGrid"): kendo.ui.Grid;

  //     kendoLinearGauge(): JQuery;
  //     kendoLinearGauge(options:
  //     kendo.dataviz.ui.LinearGaugeOptions): JQuery;
  //     //data(key: "kendoLinearGauge"):
  //     kendo.dataviz.ui.LinearGauge;

  //     kendoListView(): JQuery;
  //     kendoListView(options: kendo.ui.ListViewOptions): JQuery;
  //     //data(key: "kendoListView"): kendo.ui.ListView;

  //     kendoMap(): JQuery;
  //     kendoMap(options: kendo.dataviz.ui.MapOptions): JQuery;
  //     //data(key: "kendoMap"): kendo.dataviz.ui.Map;

  //     kendoMaskedTextBox(): JQuery;
  //     kendoMaskedTextBox(options: kendo.ui.MaskedTextBoxOptions):
  //     JQuery;
  //     //data(key: "kendoMaskedTextBox"):
  //     kendo.ui.MaskedTextBox;

  //     kendoMenu(): JQuery;
  //     kendoMenu(options: kendo.ui.MenuOptions): JQuery;
  //     //data(key: "kendoMenu"): kendo.ui.Menu;

  //     kendoMobileActionSheet(): JQuery;
  //     kendoMobileActionSheet(options:
  //     kendo.mobile.ui.ActionSheetOptions): JQuery;
  //     //data(key: "kendoMobileActionSheet"):
  //     kendo.mobile.ui.ActionSheet;

  //     kendoMobileBackButton(): JQuery;
  //     kendoMobileBackButton(options:
  //     kendo.mobile.ui.BackButtonOptions): JQuery;
  //     //data(key: "kendoMobileBackButton"):
  //     kendo.mobile.ui.BackButton;

  //     kendoMobileButton(): JQuery;
  //     kendoMobileButton(options: kendo.mobile.ui.ButtonOptions):
  //     JQuery;
  //     //data(key: "kendoMobileButton"):
  //     kendo.mobile.ui.Button;

  //     kendoMobileButtonGroup(): JQuery;
  //     kendoMobileButtonGroup(options:
  //     kendo.mobile.ui.ButtonGroupOptions): JQuery;
  //     //data(key: "kendoMobileButtonGroup"):
  //     kendo.mobile.ui.ButtonGroup;

  //     kendoMobileCollapsible(): JQuery;
  //     kendoMobileCollapsible(options:
  //     kendo.mobile.ui.CollapsibleOptions): JQuery;
  //     //data(key: "kendoMobileCollapsible"):
  //     kendo.mobile.ui.Collapsible;

  //     kendoMobileDetailButton(): JQuery;
  //     kendoMobileDetailButton(options:
  //     kendo.mobile.ui.DetailButtonOptions): JQuery;
  //     //data(key: "kendoMobileDetailButton"):
  //     kendo.mobile.ui.DetailButton;

  //     kendoMobileDrawer(): JQuery;
  //     kendoMobileDrawer(options: kendo.mobile.ui.DrawerOptions):
  //     JQuery;
  //     //data(key: "kendoMobileDrawer"):
  //     kendo.mobile.ui.Drawer;

  //     kendoMobileLayout(): JQuery;
  //     kendoMobileLayout(options: kendo.mobile.ui.LayoutOptions):
  //     JQuery;
  //     //data(key: "kendoMobileLayout"):
  //     kendo.mobile.ui.Layout;

  //     kendoMobileListView(): JQuery;
  //     kendoMobileListView(options: kendo.mobile.ui.ListViewOptions):
  //     JQuery;
  //     //data(key: "kendoMobileListView"):
  //     kendo.mobile.ui.ListView;

  //     kendoMobileLoader(): JQuery;
  //     kendoMobileLoader(options: kendo.mobile.ui.LoaderOptions):
  //     JQuery;
  //     //data(key: "kendoMobileLoader"):
  //     kendo.mobile.ui.Loader;

  //     kendoMobileModalView(): JQuery;
  //     kendoMobileModalView(options:
  //     kendo.mobile.ui.ModalViewOptions): JQuery;
  //     //data(key: "kendoMobileModalView"):
  //     kendo.mobile.ui.ModalView;

  //     kendoMobileNavBar(): JQuery;
  //     kendoMobileNavBar(options: kendo.mobile.ui.NavBarOptions):
  //     JQuery;
  //     //data(key: "kendoMobileNavBar"):
  //     kendo.mobile.ui.NavBar;

  //     kendoMobilePane(): JQuery;
  //     kendoMobilePane(options: kendo.mobile.ui.PaneOptions): JQuery;
  //     //data(key: "kendoMobilePane"): kendo.mobile.ui.Pane;

  //     kendoMobilePopOver(): JQuery;
  //     kendoMobilePopOver(options: kendo.mobile.ui.PopOverOptions):
  //     JQuery;
  //     //data(key: "kendoMobilePopOver"):
  //     kendo.mobile.ui.PopOver;

  //     kendoMobileScrollView(): JQuery;
  //     kendoMobileScrollView(options:
  //     kendo.mobile.ui.ScrollViewOptions): JQuery;
  //     //data(key: "kendoMobileScrollView"):
  //     kendo.mobile.ui.ScrollView;

  //     kendoMobileScroller(): JQuery;
  //     kendoMobileScroller(options: kendo.mobile.ui.ScrollerOptions):
  //     JQuery;
  //     //data(key: "kendoMobileScroller"):
  //     kendo.mobile.ui.Scroller;

  //     kendoMobileSplitView(): JQuery;
  //     kendoMobileSplitView(options:
  //     kendo.mobile.ui.SplitViewOptions): JQuery;
  //     //data(key: "kendoMobileSplitView"):
  //     kendo.mobile.ui.SplitView;

  //     kendoMobileSwitch(): JQuery;
  //     kendoMobileSwitch(options: kendo.mobile.ui.SwitchOptions):
  //     JQuery;
  //     //data(key: "kendoMobileSwitch"):
  //     kendo.mobile.ui.Switch;

  //     kendoMobileTabStrip(): JQuery;
  //     kendoMobileTabStrip(options: kendo.mobile.ui.TabStripOptions):
  //     JQuery;
  //     //data(key: "kendoMobileTabStrip"):
  //     kendo.mobile.ui.TabStrip;

  //     kendoMobileView(): JQuery;
  //     kendoMobileView(options: kendo.mobile.ui.ViewOptions): JQuery;
  //     //data(key: "kendoMobileView"): kendo.mobile.ui.View;

  //     kendoMultiSelect(): JQuery;
  //     kendoMultiSelect(options: kendo.ui.MultiSelectOptions):
  //     JQuery;
  //     //data(key: "kendoMultiSelect"):
  //     kendo.ui.MultiSelect;

  //     kendoNotification(): JQuery;
  //     kendoNotification(options: kendo.ui.NotificationOptions):
  //     JQuery;
  //     //data(key: "kendoNotification"):
  //     kendo.ui.Notification;

  //     kendoNumericTextBox(): JQuery;
  //     kendoNumericTextBox(options: kendo.ui.NumericTextBoxOptions):
  //     JQuery;
  //     //data(key: "kendoNumericTextBox"):
  //     kendo.ui.NumericTextBox;

  //     kendoPager(): JQuery;
  //     kendoPager(options: kendo.ui.PagerOptions): JQuery;
  //     //data(key: "kendoPager"): kendo.ui.Pager;

  //     kendoPanelBar(): JQuery;
  //     kendoPanelBar(options: kendo.ui.PanelBarOptions): JQuery;
  //     //data(key: "kendoPanelBar"): kendo.ui.PanelBar;

  //     kendoPivotConfigurator(): JQuery;
  //     kendoPivotConfigurator(options:
  //     kendo.ui.PivotConfiguratorOptions): JQuery;
  //     //data(key: "kendoPivotConfigurator"):
  //     kendo.ui.PivotConfigurator;

  //     kendoPivotGrid(): JQuery;
  //     kendoPivotGrid(options: kendo.ui.PivotGridOptions): JQuery;
  //     //data(key: "kendoPivotGrid"): kendo.ui.PivotGrid;

  //     kendoPopup(): JQuery;
  //     kendoPopup(options: kendo.ui.PopupOptions): JQuery;
  //     //data(key: "kendoPopup"): kendo.ui.Popup;

  //     kendoProgressBar(): JQuery;
  //     kendoProgressBar(options: kendo.ui.ProgressBarOptions):
  //     JQuery;
  //     //data(key: "kendoProgressBar"):
  //     kendo.ui.ProgressBar;

  //     kendoQRCode(): JQuery;
  //     kendoQRCode(options: kendo.dataviz.ui.QRCodeOptions): JQuery;
  //     //data(key: "kendoQRCode"): kendo.dataviz.ui.QRCode;

  //     kendoRadialGauge(): JQuery;
  //     kendoRadialGauge(options:
  //     kendo.dataviz.ui.RadialGaugeOptions): JQuery;
  //     //data(key: "kendoRadialGauge"):
  //     kendo.dataviz.ui.RadialGauge;

  //     kendoRangeSlider(): JQuery;
  //     kendoRangeSlider(options: kendo.ui.RangeSliderOptions):
  //     JQuery;
  //     //data(key: "kendoRangeSlider"):
  //     kendo.ui.RangeSlider;

  //     kendoResponsivePanel(): JQuery;
  //     kendoResponsivePanel(options:
  //     kendo.ui.ResponsivePanelOptions): JQuery;
  //     //data(key: "kendoResponsivePanel"):
  //     kendo.ui.ResponsivePanel;

  //     kendoScheduler(): JQuery;
  //     kendoScheduler(options: kendo.ui.SchedulerOptions): JQuery;
  //     //data(key: "kendoScheduler"): kendo.ui.Scheduler;

  //     kendoSlider(): JQuery;
  //     kendoSlider(options: kendo.ui.SliderOptions): JQuery;
  //     //data(key: "kendoSlider"): kendo.ui.Slider;

  //     kendoSortable(): JQuery;
  //     kendoSortable(options: kendo.ui.SortableOptions): JQuery;
  //     //data(key: "kendoSortable"): kendo.ui.Sortable;

  //     kendoSparkline(): JQuery;
  //     kendoSparkline(options: kendo.dataviz.ui.SparklineOptions):
  //     JQuery;
  //     //data(key: "kendoSparkline"):
  //     kendo.dataviz.ui.Sparkline;

  //     kendoSplitter(): JQuery;
  //     kendoSplitter(options: kendo.ui.SplitterOptions): JQuery;
  //     //data(key: "kendoSplitter"): kendo.ui.Splitter;

  //     kendoSpreadsheet(): JQuery;
  //     kendoSpreadsheet(options: kendo.ui.SpreadsheetOptions):
  //     JQuery;
  //     //data(key: "kendoSpreadsheet"):
  //     kendo.ui.Spreadsheet;

  //     kendoStockChart(): JQuery;
  //     kendoStockChart(options: kendo.dataviz.ui.StockChartOptions):
  //     JQuery;
  //     //data(key: "kendoStockChart"):
  //     kendo.dataviz.ui.StockChart;

  //     kendoTabStrip(): JQuery;
  //     kendoTabStrip(options: kendo.ui.TabStripOptions): JQuery;
  //     //data(key: "kendoTabStrip"): kendo.ui.TabStrip;

  //     kendoTimePicker(): JQuery;
  //     kendoTimePicker(options: kendo.ui.TimePickerOptions): JQuery;
  //     //data(key: "kendoTimePicker"): kendo.ui.TimePicker;

  //     kendoToolBar(): JQuery;
  //     kendoToolBar(options: kendo.ui.ToolBarOptions): JQuery;
  //     //data(key: "kendoToolBar"): kendo.ui.ToolBar;

  //     kendoTooltip(): JQuery;
  //     kendoTooltip(options: kendo.ui.TooltipOptions): JQuery;
  //     //data(key: "kendoTooltip"): kendo.ui.Tooltip;

  //     kendoTouch(): JQuery;
  //     kendoTouch(options: kendo.ui.TouchOptions): JQuery;
  //     //data(key: "kendoTouch"): kendo.ui.Touch;

  //     kendoTreeList(): JQuery;
  //     kendoTreeList(options: kendo.ui.TreeListOptions): JQuery;
  //     //data(key: "kendoTreeList"): kendo.ui.TreeList;

  //     kendoTreeMap(): JQuery;
  //     kendoTreeMap(options: kendo.dataviz.ui.TreeMapOptions):
  //     JQuery;
  //     //data(key: "kendoTreeMap"):
  //     kendo.dataviz.ui.TreeMap;

  //     kendoTreeView(): JQuery;
  //     kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;
  //     //data(key: "kendoTreeView"): kendo.ui.TreeView;

  //     kendoUpload(): JQuery;
  //     kendoUpload(options: kendo.ui.UploadOptions): JQuery;
  //     //data(key: "kendoUpload"): kendo.ui.Upload;

  //     kendoValidator(): JQuery;
  //     kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;
  //     //data(key: "kendoValidator"): kendo.ui.Validator;

  //     kendoWindow(): JQuery;
  //     kendoWindow(options: kendo.ui.WindowOptions): JQuery;
  //     //data(key: "kendoWindow"): kendo.ui.Window;
}
