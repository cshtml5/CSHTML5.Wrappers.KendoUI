declare namespace kendo.ui.editor {
    class Toolbar {
        window: kendo.ui.Window;
    }
}

declare namespace kendo.ui  {
    class Editor {

        static fn: Editor;

        options: EditorOptions;

        body: Element;
        toolbar: kendo.ui.editor.Toolbar;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Editor;

        constructor(element: Element, options?: EditorOptions);


        createRange(document?: Document): Range;
        destroy(): void;
        encodedValue(): void;
        exec(name: string, params: any): void;
        focus(): void;
        getRange(): Range;
        getSelection(): Selection;
        paste(html: string, options: any): void;
        selectedHtml(): string;
        refresh(): void;
        saveAsPDF(): JQueryPromise<any>;
        selectRange(range: Range): void;
        setOptions(options: Object): void;
        update(): void;
        state(toolName: string): boolean;
        value(): string;
        value(value: string): void;

    }

    interface EditorDeserialization {
        custom?: Function;
    }

    interface EditorFileBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorFileBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorFileBrowserSchemaModelFields {
        name?: string | EditorFileBrowserSchemaModelFieldsName;
        type?: string | EditorFileBrowserSchemaModelFieldsType;
        size?: string | EditorFileBrowserSchemaModelFieldsSize;
    }

    interface EditorFileBrowserSchemaModel {
        id?: string;
        fields?: EditorFileBrowserSchemaModelFields;
    }

    interface EditorFileBrowserSchema {
    }

    interface EditorFileBrowserTransportCreate {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorFileBrowserTransportDestroy {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorFileBrowserTransportRead {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorFileBrowserTransport {
        read?: string | Function | EditorFileBrowserTransportRead;
        uploadUrl?: string;
        fileUrl?: string | Function;
        destroy?: string | EditorFileBrowserTransportDestroy;
        create?: string | EditorFileBrowserTransportCreate;
    }

    interface EditorFileBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorFileBrowserTransport;
        schema?: EditorFileBrowserSchema;
        messages?: EditorFileBrowserMessages;
    }

    interface EditorImageBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorImageBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorImageBrowserSchemaModelFields {
        name?: string | EditorImageBrowserSchemaModelFieldsName;
        type?: string | EditorImageBrowserSchemaModelFieldsType;
        size?: string | EditorImageBrowserSchemaModelFieldsSize;
    }

    interface EditorImageBrowserSchemaModel {
        id?: string;
        fields?: EditorImageBrowserSchemaModelFields;
    }

    interface EditorImageBrowserSchema {
    }

    interface EditorImageBrowserTransportCreate {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorImageBrowserTransportDestroy {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorImageBrowserTransportRead {
        contentType?: string;
        data?: any | string | Function;
        dataType?: string;
        type?: string;
        url?: string | Function;
    }

    interface EditorImageBrowserTransport {
        read?: string | Function | EditorImageBrowserTransportRead;
        thumbnailUrl?: string | Function;
        uploadUrl?: string;
        imageUrl?: string | Function;
        destroy?: string | EditorImageBrowserTransportDestroy;
        create?: string | EditorImageBrowserTransportCreate;
    }

    interface EditorImageBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorImageBrowserTransport;
        schema?: EditorImageBrowserSchema;
        messages?: EditorImageBrowserMessages;
    }

    interface EditorImmutables {
        deserialization?: Function;
        serialization?: string | Function;
    }

    interface EditorMessages {
        accessibilityTab?: string;
        addColumnLeft?: string;
        addColumnRight?: string;
        addRowAbove?: string;
        addRowBelow?: string;
        alignCenter?: string;
        alignCenterBottom?: string;
        alignCenterMiddle?: string;
        alignCenterTop?: string;
        alignLeft?: string;
        alignLeftBottom?: string;
        alignLeftMiddle?: string;
        alignLeftTop?: string;
        alignRemove?: string;
        alignRight?: string;
        alignRightBottom?: string;
        alignRightMiddle?: string;
        alignRightTop?: string;
        alignment?: string;
        associateCellsWithHeaders?: string;
        backColor?: string;
        background?: string;
        bold?: string;
        border?: string;
        style?: string;
        caption?: string;
        cellMargin?: string;
        cellPadding?: string;
        cellSpacing?: string;
        cellTab?: string;
        cleanFormatting?: string;
        collapseBorders?: string;
        columns?: string;
        createLink?: string;
        createTable?: string;
        createTableHint?: string;
        cssClass?: string;
        deleteColumn?: string;
        deleteRow?: string;
        dialogCancel?: string;
        dialogInsert?: string;
        dialogOk?: string;
        dialogUpdate?: string;
        editAreaTitle?: string;
        fileTitle?: string;
        fileWebAddress?: string;
        fontName?: string;
        fontNameInherit?: string;
        fontSize?: string;
        fontSizeInherit?: string;
        foreColor?: string;
        formatBlock?: string;
        formatting?: string;
        height?: string;
        id?: string;
        imageAltText?: string;
        imageHeight?: string;
        imageWebAddress?: string;
        imageWidth?: string;
        indent?: string;
        insertFile?: string;
        insertHtml?: string;
        insertImage?: string;
        insertOrderedList?: string;
        insertUnorderedList?: string;
        italic?: string;
        overflowAnchor?: string;
        justifyCenter?: string;
        justifyFull?: string;
        justifyLeft?: string;
        justifyRight?: string;
        linkOpenInNewWindow?: string;
        linkText?: string;
        linkToolTip?: string;
        linkWebAddress?: string;
        outdent?: string;
        print?: string;
        rows?: string;
        selectAllCells?: string;
        strikethrough?: string;
        subscript?: string;
        summary?: string;
        superscript?: string;
        tableTab?: string;
        tableWizard?: string;
        underline?: string;
        units?: string;
        unlink?: string;
        viewHtml?: string;
        width?: string;
        wrapText?: string;
    }

    interface EditorPasteCleanup {
        all?: boolean;
        css?: boolean;
        custom?: Function;
        keepNewLines?: boolean;
        msAllFormatting?: boolean;
        msConvertLists?: boolean;
        msTags?: boolean;
        none?: boolean;
        span?: boolean;
    }

    interface EditorPdfMargin {
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
    }

    interface EditorPdf {
        author?: string;
        avoidLinks?: boolean | string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: EditorPdfMargin;
        paperSize?: string | any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface EditorResizable {
        content?: boolean;
        min?: number;
        max?: number;
        toolbar?: boolean;
    }

    interface EditorSerialization {
        custom?: Function;
        entities?: boolean;
        scripts?: boolean;
        semantic?: boolean;
    }

    interface EditorToolItem {
        text?: string;
        value?: string;
        context?: string;
    }

    interface EditorTool {
        name?: string;
        tooltip?: string;
        exec?: Function;
        items?: EditorToolItem[];
        palette?: string | any;
        columns?: number;
        template?: string;
    }

    interface EditorExecParams {
        value?: any;
    }

    interface EditorPasteOptions {
        split?: boolean;
    }

    interface EditorOptions {
        name?: string;
        deserialization?: EditorDeserialization;
        domain?: string;
        encoded?: boolean;
        immutables?: boolean | EditorImmutables;
        messages?: EditorMessages;
        pasteCleanup?: EditorPasteCleanup;
        pdf?: EditorPdf;
        resizable?: boolean | EditorResizable;
        serialization?: EditorSerialization;
        stylesheets?: any;
        tools?: EditorTool[];
        imageBrowser?: EditorImageBrowser;
        fileBrowser?: EditorFileBrowser;
        change?(e: EditorEvent): void;
        execute?(e: EditorExecuteEvent): void;
        keydown?(e: EditorEvent): void;
        keyup?(e: EditorEvent): void;
        paste?(e: EditorPasteEvent): void;
        pdfExport?(e: EditorPdfExportEvent): void;
        select?(e: EditorEvent): void;
    }

    interface EditorEvent {
        sender: Editor;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface EditorExecuteEvent extends EditorEvent {
        name?: string;
        command?: any;
    }

    interface EditorPasteEvent extends EditorEvent {
        html?: any;
    }

    interface EditorPdfExportEvent extends EditorEvent {
        promise?: JQueryPromise<any>;
    }


    class Window {

        static fn: Window;

        options: WindowOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Window;

        constructor(element: Element, options?: WindowOptions);


        center(): kendo.ui.Window;
        close(): kendo.ui.Window;
        content(): string;
        content(content?: string): kendo.ui.Window;
        content(content?: JQuery): kendo.ui.Window;
        destroy(): void;
        isMaximized(): boolean;
        isMinimized(): boolean;
        maximize(): kendo.ui.Window;
        minimize(): kendo.ui.Window;
        open(): kendo.ui.Window;
        pin(): void;
        refresh(options: any): kendo.ui.Window;
        restore(): kendo.ui.Window;
        setOptions(options: any): void;
        title(): string;
        title(text?: string): kendo.ui.Window;
        toFront(): kendo.ui.Window;
        toggleMaximization(): kendo.ui.Window;
        unpin(): void;

    }

    interface WindowAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimation {
        close?: WindowAnimationClose;
        open?: WindowAnimationOpen;
    }

    interface WindowContent {
        template?: string;
    }

    interface WindowPosition {
        top?: number | string;
        left?: number | string;
    }

    interface WindowRefreshOptions {
        url?: string;
        cache?: boolean;
        data?: any;
        type?: string;
        template?: string;
        iframe?: boolean;
    }

    interface WindowOptions {
        name?: string;
        actions?: any;
        animation?: boolean | WindowAnimation;
        appendTo?: any | string;
        autoFocus?: boolean;
        content?: string | WindowContent;
        draggable?: boolean;
        iframe?: boolean;
        height?: number | string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        pinned?: boolean;
        position?: WindowPosition;
        resizable?: boolean;
        scrollable?: boolean;
        title?: string | boolean;
        visible?: boolean;
        width?: number | string;
        activate?(e: WindowEvent): void;
        close?(e: WindowCloseEvent): void;
        deactivate?(e: WindowEvent): void;
        dragend?(e: WindowEvent): void;
        dragstart?(e: WindowEvent): void;
        error?(e: WindowErrorEvent): void;
        maximize?(e: WindowEvent): void;
        minimize?(e: WindowEvent): void;
        open?(e: WindowEvent): void;
        refresh?(e: WindowEvent): void;
        resize?(e: WindowEvent): void;
    }

    interface WindowEvent {
        sender: Window;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface WindowCloseEvent extends WindowEvent {
        userTriggered?: boolean;
    }

    interface WindowErrorEvent extends WindowEvent {
        xhr?: JQueryXHR;
        status?: string;
    }
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

    kendoEditor(): JQuery;
    kendoEditor(options: kendo.ui.EditorOptions): JQuery;
    data(key: "kendoEditor"): kendo.ui.Editor;

    kendoWindow(): JQuery;
    kendoWindow(options: kendo.ui.WindowOptions): JQuery;
    data(key: "kendoWindow"): kendo.ui.Window;
}