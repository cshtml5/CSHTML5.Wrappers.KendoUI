using CSHTML5;
using CSHTML5.Wrappers.KendoUI.Common;
using CSHTML5.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeScriptDefinitionsSupport;
using Windows.UI.Xaml;
using CSHTML5.Wrappers.KendoUI.Editor;

namespace kendo_ui_editor.kendo.ui
{
    public partial class Editor : JSComponent
    {
        public static Configuration Configuration = new Configuration();

        static JSLibrary _jsLibrary;

        public override JSLibrary JSLibrary { get { return _jsLibrary; } }

        protected override void JSComponent_Loaded(object sender, RoutedEventArgs e)
        {
            if (Configuration.AreSourcesSet)
            {
                _jsLibrary = new JSLibrary(
                    css: new Interop.ResourceFile[]
                    {
                        new Interop.ResourceFile("kendo.common-material", Configuration.LocationOfKendoCommonMaterialCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/styles/kendo.common-material.min.css"
                        new Interop.ResourceFile("kendo.material", Configuration.LocationOfKendoMaterialCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/styles/kendo.material.min.css"
                        new Interop.ResourceFile("kendo.material.mobile", Configuration.LocationOfKendoMaterialMobileCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/styles/kendo.material.mobile.min.css"
                        new Interop.ResourceFile("kendo.rtl", Configuration.LocationOfKendoRTLCSS) // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/styles/kendo.rtl.min.css"
                    },
                    js: new Interop.ResourceFile[]
                    {
                        new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/scripts/jquery.min.js"),
                        new Interop.ResourceFile("kendo", Configuration.LocationOfKendoAllJS) // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/scripts/kendo.all.min.js"
                    }
                );
                base.JSComponent_Loaded(sender, e);
            }
            else
            {
                MessageBox.Show(@"Before you can use the Kendo Editor Control, you must add to your project the corresponding libraries.
To do so, please follow the tutorial at: http://www.cshtml5.com"); //todo: put the address of the tutorial.
                base.AbortLoading();
            }
        }

        partial void Initialize()
        {
            base.Initialize(initJSInstance: true);
        }

        partial void Initialize(IJSObject element, EditorOptions options)
        {
            base.Initialize();
        }

        protected override string InitializeHtml()
        {
            return @"<textarea style='width: 100%; height: 100%;'>";
        }

        protected override void InitializeJSInstance()
        {
            this.UnderlyingJSInstance = Editor.New(new JSObject(this.DomElement));
        }
    }
}
