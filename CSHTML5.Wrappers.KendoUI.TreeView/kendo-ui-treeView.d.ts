// Type definitions for Kendo UI Professional v2019.1.115
// Project: http://www.telerik.com/kendo-ui
// Definitions by: Telerik <https://github.com/telerik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/*
 * Please, submit Pull Requests in the telerik/kendo-ui-core repo at
 * https://github.com/telerik/kendo-ui-core/tree/master/typescript
 *
 * See contributor instructions at
 * https://github.com/telerik/kendo-ui-core#how-to-contribute
 */

declare namespace kendo {

    function format(format: string, ...values: any[]): string;

    function init(selector: string, ...namespaces: any[]): void;
    function init(element: JQuery, ...namespaces: any[]): void;
    function init(element: Element, ...namespaces: any[]): void;

    function render(template: (data: any) => string, data: any[]): string;
    function template(template: string, options?: TemplateOptions): (data: any) => string;

    function guid(): string;
    
    var ns: string;

    //todo: uncomment the following block when the following issue is fixed: when two projects have typescript definition files, multiple "anonymoustype" classes are generated that conflict with each other (to fix: place them in separate namespaces)
    //var keys: {
    //    INSERT: number;
    //    DELETE: number;
    //    BACKSPACE: number;
    //    TAB: number;
    //    ENTER: number;
    //    ESC: number;
    //    LEFT: number;
    //    UP: number;
    //    RIGHT: number;
    //    DOWN: number;
    //    END: number;
    //    HOME: number;
    //    SPACEBAR: number;
    //    PAGEUP: number;
    //    PAGEDOWN: number;
    //    F2: number;
    //    F10: number;
    //    F12: number;
    //    NUMPAD_PLUS: number;
    //    NUMPAD_MINUS: number;
    //    NUMPAD_DOT: number;
    //};

    //var support: {
    //    touch: boolean;
    //    pointers: boolean;
    //    scrollbar(): number;
    //    hasHW3D: boolean;
    //    hasNativeScrolling: boolean;
    //    devicePixelRatio: number;
    //    placeholder: boolean;
    //    zoomLevel: number;
    //    mobileOS: {
    //        device: string;
    //        tablet: any;
    //        browser: string;
    //        name: string;
    //        majorVersion: string;
    //        minorVersion: string;
    //        flatVersion: number;
    //        appMode: boolean;
    //    };
    //    browser: {
    //        edge: boolean;
    //        msie: boolean;
    //        webkit: boolean;
    //        safari: boolean;
    //        opera: boolean;
    //        mozilla: boolean;
    //        version: string;
    //    };
    //};

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

}

declare namespace kendo.data {

    class BindingTarget {
        target: any;
        options: any;
        source: any;
    }

    class ObservableObject extends Observable{
        constructor(value?: any);
        uid: string;
        init(value?: any): void;
        get(name: string): any;
        parent(): ObservableObject;
        set(name: string, value: any): void;
        toJSON(): Object;
    }

    class Model extends ObservableObject {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        idField: string;
        _defaultId: any;
        fields: DataSourceSchemaModelFields;
        //defaults: {
        //    [field: string]: any;
        //};
        id: any;
        dirty: boolean;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof Model;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof Model;

        constructor(data?: any);
        init(data?: any): void;
        accept(data?: any): void;
        editable(field: string): boolean;
        isNew(): boolean;
    }

    class Node extends Model {
        children: HierarchicalDataSource;

        append(model: any): void;
        level(): number;
        load(id: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
    }

    class HierarchicalDataSource extends DataSource {
        constructor(options?: HierarchicalDataSourceOptions);
        init(options?: HierarchicalDataSourceOptions): void;
    }

    interface HierarchicalDataSourceOptions extends DataSourceOptions {
        schema?: HierarchicalDataSourceSchema;
        data?: any; //CSHTML5 added because "extends" is currently ignored (that's a bug)
    }


    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
    }

    interface DataSourceTransport { }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel;
    }

    interface DataSourceSchemaModel {
        id?: string;
        fields?: any;
        [index: string]: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[];
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
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
        minLength?: any;
        maxLength?: any;
        [rule: string]: any;
    }

    class ObservableArray extends Observable {
        length: number;
        [index: number]: any;

        constructor(array: any[]);
        init(array: any[]): void;
        empty(): void;
        every(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        filter(callback: (item: Object, index: number, source: ObservableArray) => boolean): any[];
        find(callback: (item: Object, index: number, source: ObservableArray) => boolean): any;
        forEach(callback: (item: Object, index: number, source: ObservableArray) => void ): void;
        indexOf(item: any): number;
        join(separator: string): string;
        map(callback: (item: Object, index: number, source: ObservableArray) => any): any[];
        parent(): ObservableObject;
        pop(): ObservableObject;
        push(...items: any[]): number;
        remove(item: Object): void;
        shift(): any;
        slice(begin: number, end?: number): any[];
        some(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        toJSON(): any[];
        unshift(...items: any[]): number;
        wrap(object: Object, parent: Object): any;
        wrapAll(source: Object, target: Object): any;
    }

    class DataSource extends Observable{
        options: DataSourceOptions;

        static create(options?: DataSourceOptions): DataSource;

        constructor(options?: DataSourceOptions);
        init(options?: DataSourceOptions): void;
        add(model: Object): kendo.data.Model;
        add(model: kendo.data.Model): kendo.data.Model;
        aggregate(val: any): void;
        aggregate(): any;
        aggregates(): any;
        at(index: number): kendo.data.ObservableObject;
        cancelChanges(model?: kendo.data.Model): void;
        data(): kendo.data.ObservableArray;
        data(value: any): void;
        fetch(callback?: Function): JQueryPromise<any>;
        filter(filters: DataSourceFilterItem): void;
        filter(filters: DataSourceFilterItem[]): void;
        filter(filters: DataSourceFilters): void;
        filter(): DataSourceFilters;
        get(id: any): kendo.data.Model;
        getByUid(uid: string): kendo.data.Model;
        group(groups: any): void;
        group(): any;
        hasChanges(): boolean;
        indexOf(value: kendo.data.ObservableObject): number;
        insert(index: number, model: kendo.data.Model): kendo.data.Model;
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
        pushCreate(models: any[]): void;
        pushDestroy(model: Object): void;
        pushDestroy(models: any[]): void;
        pushUpdate(model: Object): void;
        pushUpdate(models: any[]): void;
        query(options?: any): JQueryPromise<any>;
        read(data?: any): JQueryPromise<any>;
        remove(model: kendo.data.ObservableObject): void;
        skip(): number;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): JQueryPromise<any>;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    interface DataSourceAggregateItem {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string|Function;
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
    }

    interface DataSourceSortItem {
        field?: string;
        dir?: string;
    }

    interface DataSourceOptions {
        aggregate?: DataSourceAggregateItem[];
        autoSync?: boolean;
        batch?: boolean;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem | DataSourceGroupItem[];
        inPlaceSort?: boolean;
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
        transport?: DataSourceTransport;
        type?: string;
        change? (e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
        push?(e: DataSourcePushEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource;
    }

    interface DataSourceItemOrGroup {
    }

    interface DataSourceChangeEvent extends DataSourceEvent {
        field?: string;
        value?: Model;
        action?: string;
        index?: number;
        items?: DataSourceItemOrGroup[];
        node?: any;
    }

    interface DataSourcePushEvent extends DataSourceEvent {
        items?: DataSourceItemOrGroup[];
        type?: string;

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

declare namespace kendo.ui {
    function progress(container: JQuery, toggle: boolean): void;

    class Widget extends Observable {
        static fn: any;

        element: JQuery;
        options: any;
        events: string[];

        static extend(prototype: Object): Widget;

        constructor(element: Element, options?: Object);
        constructor(element: JQuery, options?: Object);
        constructor(selector: String, options?: Object);
        init(element: Element, options?: Object): void;
        init(element: JQuery, options?: Object): void;
        init(selector: String, options?: Object): void;
        destroy(): void;
        setOptions(options: Object): void;
        resize(force?: boolean): void;
    }
}

declare namespace kendo.ui {

    class TreeView extends kendo.ui.Widget {

        static fn: TreeView;

        options: TreeViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeView;

        constructor(element: Element, options?: TreeViewOptions);


        append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
        append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
        collapse(nodes: JQuery): void;
        collapse(nodes: Element): void;
        collapse(nodes: string): void;
        dataItem(node: JQuery): kendo.data.Node;
        dataItem(node: Element): kendo.data.Node;
        dataItem(node: string): kendo.data.Node;
        destroy(): void;
        detach(node: JQuery): JQuery;
        detach(node: Element): JQuery;
        detach(node: string): JQuery;
        enable(nodes: JQuery, enable?: boolean): void;
        enable(nodes: Element, enable?: boolean): void;
        enable(nodes: string, enable?: boolean): void;
        enable(nodes: boolean, enable?: boolean): void;
        expand(nodes: JQuery): void;
        expand(nodes: Element): void;
        expand(nodes: string): void;
        expandPath(path: any, complete: Function): void;
        expandTo(targetNode: kendo.data.Node): void;
        expandTo(targetNode: any): void;
        findByText(text: string): JQuery;
        findByUid(uid: string): JQuery;
        focus(): void;
        insertAfter(nodeData: any, referenceNode: JQuery): JQuery;
        insertBefore(nodeData: any, referenceNode: JQuery): JQuery;
        items(): any;
        parent(node: JQuery): JQuery;
        parent(node: Element): JQuery;
        parent(node: string): JQuery;
        remove(node: JQuery): void;
        remove(node: Element): void;
        remove(node: string): void;
        select(): JQuery;
        select(node?: JQuery): void;
        select(node?: Element): void;
        select(node?: string): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
        text(node: JQuery): string;
        text(node: Element): string;
        text(node: string): string;
        text(node: JQuery, newText: string): void;
        text(node: Element, newText: string): void;
        text(node: string, newText: string): void;
        toggle(node: JQuery): void;
        toggle(node: Element): void;
        toggle(node: string): void;
        updateIndeterminate(node: JQuery): void;

    }

    interface TreeViewAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimationExpand {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimation {
        collapse?: boolean | TreeViewAnimationCollapse;
        expand?: boolean | TreeViewAnimationExpand;
    }

    interface TreeViewCheckboxes {
        checkChildren?: boolean;
        name?: string;
        template?: string|Function;
    }

    interface TreeViewMessages {
        loading?: string;
        requestFailed?: string;
        retry?: string;
    }

    interface TreeViewOptions {
        name?: string;
        animation?: boolean | TreeViewAnimation;
        autoBind?: boolean;
        autoScroll?: boolean;
        checkboxes?: boolean | TreeViewCheckboxes;
        dataImageUrlField?: string;
        dataSource?: any|any|kendo.data.HierarchicalDataSource;
        dataSpriteCssClassField?: string;
        dataTextField?: string|any;
        dataUrlField?: string;
        dragAndDrop?: boolean;
        loadOnDemand?: boolean;
        messages?: TreeViewMessages;
        template?: string|Function;
        change?(e: TreeViewEvent): void;
        check?(e: TreeViewCheckEvent): void;
        collapse?(e: TreeViewCollapseEvent): void;
        dataBound?(e: TreeViewDataBoundEvent): void;
        drag?(e: TreeViewDragEvent): void;
        dragend?(e: TreeViewDragendEvent): void;
        dragstart?(e: TreeViewDragstartEvent): void;
        drop?(e: TreeViewDropEvent): void;
        expand?(e: TreeViewExpandEvent): void;
        navigate?(e: TreeViewNavigateEvent): void;
        select?(e: TreeViewSelectEvent): void;
    }
    interface TreeViewEvent {
        sender: TreeView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeViewCheckEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewCollapseEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewDataBoundEvent extends TreeViewEvent {
        node?: JQuery;
    }

    interface TreeViewDragEvent extends TreeViewEvent {
        sourceNode?: Element;
        dropTarget?: Element;
        pageX?: number;
        pageY?: number;
        statusClass?: string;
        setStatusClass?: Function;
    }

    interface TreeViewDragendEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        dropPosition?: string;
    }

    interface TreeViewDragstartEvent extends TreeViewEvent {
        sourceNode?: Element;
    }

    interface TreeViewDropEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        valid?: boolean;
        setValid?: Function;
        dropTarget?: Element;
        dropPosition?: string;
    }

    interface TreeViewExpandEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewNavigateEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewSelectEvent extends TreeViewEvent {
        node?: Element;
    }
}

interface HTMLElement {
    kendoBindingTarget: kendo.data.BindingTarget;
}

interface JQueryAjaxSettings {
}

interface JQueryXHR {
}

interface JQueryEventObject {
}

interface JQueryPromise<T> {
}

interface JQuery {

    data(key: any): any;

    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo.ui.TreeView;
}
