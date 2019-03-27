using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using KendoTreeView;
using System.Collections;
using kendo_ui_treeView.kendo.data;
using CSHTML5;
using TypeScriptDefinitionsSupport;
//using kendo_ui_Common;
using CSHTML5.Wrappers.KendoUI.Common;
using CSHTML5.Wrappers.KendoUI.TreeView;
#if SLMIGRATION
using System.Windows;
#else
using Windows.UI.Xaml;
#endif

namespace kendo_ui_treeView.kendo.ui
{
    public partial class TreeView : JSComponent
    {
        bool _isInstanceLoaded = false;
        public static Configuration Configuration = new Configuration();

        static JSLibrary _jsLibrary;
        public override JSLibrary JSLibrary { get { return _jsLibrary; } }

        public static readonly DependencyProperty ItemsSourceProperty = DependencyProperty.Register(
            "ItemsSource",
            typeof(IEnumerable),
            typeof(TreeView),
            new PropertyMetadata(OnItemsSourceChanged) { CallPropertyChangedWhenLoadedIntoVisualTree = WhenToCallPropertyChangedEnum.Never }
        );
        public IEnumerable ItemsSource
        {
            get { return (IEnumerable)GetValue(ItemsSourceProperty); }
            set { SetValue(ItemsSourceProperty, value); }
        }

        bool firstDataLoad;

        void Init()
        {
            this.firstDataLoad = true;
        }

        protected override void JSComponent_Loaded(object sender, RoutedEventArgs e)
        {
            if (Configuration.AreSourcesSet)
            {
            _jsLibrary = new JSLibrary(
                css: new Interop.ResourceFile[]
                {
                    //----------------OLD ONES----------------//
                        new Interop.ResourceFile("kendo.common", Configuration.LocationOfKendoCommonCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.TreeView/styles/kendo.common.min.css"
                        new Interop.ResourceFile("kendo.default", Configuration.LocationOfKendoDefaultCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.TreeView/styles/kendo.default.min.css"
                        new Interop.ResourceFile("kendo.default.mobile", Configuration.LocationOfKendoDefaultMobileCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.TreeView/styles/kendo.default.mobile.min.css"
                },
                js: new Interop.ResourceFile[]
                {
#if SLMIGRATION
                    new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Migration.Wrappers.KendoUI.TreeView/scripts/jquery.min.js"),
#else
                    new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Wrappers.KendoUI.TreeView/scripts/jquery.min.js"),
#endif
                    new Interop.ResourceFile("kendo.all", Configuration.LocationOfKendoAllJS),
                }
            );
            base.JSComponent_Loaded(sender, e);
            }
            else
            {
                this.Html = @"Before you can use the Kendo TreeView Control, you must add to your project the corresponding libraries.
            To do so, please follow the tutorial at: http://www.cshtml5.com";
                MessageBox.Show(@"Before you can use the Kendo TreeView Control, you must add to your project the corresponding libraries.
            To do so, please follow the tutorial at: http://www.cshtml5.com"); //todo: put the address of the tutorial.
                base.AbortLoading();
            }
        }

        partial void Initialize()
        {
            this.Init();
            base.Initialize(initJSInstance: true);
        }

        partial void Initialize(IJSObject element, TreeViewOptions options)
        {
            this.Init();
            base.Initialize();
        }

        protected override void InitializeJSInstance()
        {
            this.UnderlyingJSInstance = TreeView.New(new JSObject(this.DomElement));
            this.SetupDataBinding();
        }

        void SetupDataBinding()
        {
            //kept this one because it might be useful later on (especially since we intend to allow drag and drops, thus modifying the structure of the data).
            //check how the Grid works when implementing, we could probably do the same kind of thing here.
        }

        static async void OnItemsSourceChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var @this = d as TreeView;
            var oldValue = e.OldValue as IEnumerable;
            var newValue = e.NewValue as IEnumerable;

            if (oldValue != newValue)
            {
                if (await @this.JSInstanceLoaded)
                {
                    @this.setDataSource(new HierarchicalDataSource(new HierarchicalDataSourceOptions()
                    {
                       
                        data = Utils.ToJSObject(e.NewValue)
                    }));

                    @this.firstDataLoad = false;
                    @this._isInstanceLoaded = true;

                }
                else
                {
                    if (Configuration.AreSourcesSet)
                    {
                        @this.Html = @"The libraries for the TreeView Control could not be found. Make sure you have added them in your project at the location you specified in the Configuration.";
                        MessageBox.Show(@"The libraries for the TreeView Control could not be found. Make sure you have added them in your project at the location you specified in the Configuration.");
                    }
                }
            }
        }

        protected override void OnJSInstanceUnloaded()
        {
            if (_isInstanceLoaded)
            {
                base.OnJSInstanceUnloaded();
                //todo: stop listening to the changes (once we do listen to them)
            }
        }
    }
}
