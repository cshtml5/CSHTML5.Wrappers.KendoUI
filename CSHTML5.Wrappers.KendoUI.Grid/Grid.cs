using CSHTML5;
using CSHTML5.Wrappers.KendoUI.Common;
using CSHTML5.Wrappers;
using CSHTML5.Native.Html.Controls;
using kendo_ui_grid.kendo.data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using TypeScriptDefinitionsSupport;
#if SLMIGRATION
using System.Windows.Data;
#else
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Data;
#endif
using CSHTML5.Wrappers.KendoUI.Grid;

namespace kendo_ui_grid.kendo.ui
{
    public partial class Grid : JSComponent, IItemsSourceHolder
    {
        public static Configuration Configuration = new Configuration();

        static JSLibrary _jsLibrary;

        public override JSLibrary JSLibrary { get { return _jsLibrary; } }

        public static readonly DependencyProperty ItemsSourceProperty = DependencyProperty.Register(
            "ItemsSource",
            typeof(IEnumerable),
            typeof(Grid),
            new PropertyMetadata(OnItemsSourceChanged) { CallPropertyChangedWhenLoadedIntoVisualTree = WhenToCallPropertyChangedEnum.Never }
        );
        public IEnumerable ItemsSource
        {
            get { return (IEnumerable)GetValue(ItemsSourceProperty); }
            set { SetValue(ItemsSourceProperty, value); }
        }

        GridItemsSourceBinder dataBinder;
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
                        new Interop.ResourceFile("kendo.common-material", Configuration.LocationOfKendoCommonMaterialCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Grid/styles/kendo.common-material.min.css"
                        new Interop.ResourceFile("kendo.material", Configuration.LocationOfKendoMaterialCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Grid/styles/kendo.material.min.css"
                        new Interop.ResourceFile("kendo.material.mobile", Configuration.LocationOfKendoMaterialMobileCSS), // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Grid/styles/kendo.material.mobile.min.css"
                        new Interop.ResourceFile("kendo.rtl", Configuration.LocationOfKendoRTLCSS) // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Grid/styles/kendo.rtl.min.css"
                    },
                    js: new Interop.ResourceFile[]
                    {
#if SLMIGRATION
                        new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Migration.Wrappers.KendoUI.Grid/scripts/jquery.min.js"),
#else
                        new Interop.ResourceFile("jQuery", "ms-appx:///CSHTML5.Wrappers.KendoUI.Editor/scripts/jquery.min.js"),
#endif
                        new Interop.ResourceFile("kendo", Configuration.LocationOfKendoAllJS) // e.g. "ms-appx:///CSHTML5.Wrappers.KendoUI.Grid/scripts/kendo.all.min.js"
                    }
                );
                base.JSComponent_Loaded(sender, e);
            }
            else
            {
                MessageBox.Show(@"Before you can use the Kendo Grid Control, you must add to your project the corresponding libraries.
To do so, please follow the tutorial at: http://www.cshtml5.com"); //todo: put the address of the tutorial.
                base.AbortLoading();
            }
        }

        partial void Initialize()
        {
            this.Init();
            base.Initialize(initJSInstance: true);
        }

        partial void Initialize(IJSObject element, GridOptions options)
        {
            this.Init();
            base.Initialize();
        }

        protected override void InitializeJSInstance()
        {
            this.UnderlyingJSInstance = Grid.New(new JSObject(this.DomElement));
            this.SetupDataBinding();
        }

        void SetupDataBinding()
        {
            this.dataBinder = new GridItemsSourceBinder(this, this.UpdateCell, this.UpdateHeader);

            // Setup JS event handlers for OneWayToSource/TwoWay data binding:
            var options = this.getOptions();
            options.save = this.OnSave;
            this.setOptions(options);
        }

        void UpdateCell(int rowIndex, int columnIndex, object newValue)
        {
            if (!this.firstDataLoad && this.dataBinder.ItemType != null)
            {
                if (this.pager.totalPages() > 1)
                {
                    int pageSize = (int)this.pager.pageSize();
                    this.pager.page((double)(rowIndex / pageSize + 1));
                    rowIndex %= pageSize;
                }

                var row = this.dataItem("tbody tr:eq( " + rowIndex + ")");
                var prop = this.dataBinder.ItemType.GetProperties()[columnIndex];

                object newCellValue = newValue.ToString();
                try
                {
                    newCellValue = Convert.ChangeType(newValue, prop.PropertyType) ?? newCellValue;
                }
                catch (Exception) { }

                row.set(prop.Name, new JSObject(newCellValue));
            }
        }

        void UpdateHeader(int columnIndex, string newValue)
        {
            var options = this.getOptions();

            for (int i = options.columns.Count; i <= columnIndex; ++i)
                options.columns.Add(new GridColumn());
            options.columns[columnIndex].field = newValue;

            this.setOptions(options);

            this.autoFitColumn(columnIndex);
        }

        void RemoveOldColumns()
        {
            var options = this.getOptions();

            for (int i = 0; i < options.columns.Count; ++i)
            {
                if (options.columns[i].field == null)
                {
                    options.columns.RemoveAt(i);
                    --i;
                }
            }

            this.setOptions(options);
        }

        void OnSave(GridSaveEvent e)
        {
            var rowIndex = JSObject.Helper_ConvertTo<int>(Interop.ExecuteJavaScript(@"
                $0.closest('tr').index()
                ", e.container.UnderlyingJSInstance));
            rowIndex += (int)this.pager.pageSize() * ((int)this.pager.page() - 1);

            var columnIndex = JSObject.Helper_ConvertTo<int>(Interop.ExecuteJavaScript(@"
                $0.index()
                ", e.container.UnderlyingJSInstance));

            var newValue = JSObject.Helper_ConvertTo<string>(Interop.ExecuteJavaScript(@"
                Object.values($0)[0]
                ", e.values.UnderlyingJSInstance));

            var bindingExpr = this.GetBindingExpression(ItemsSourceProperty);
            if (bindingExpr == null || bindingExpr.ParentBinding.Mode != BindingMode.TwoWay ||
                !this.dataBinder.UpdateSource(rowIndex, columnIndex, newValue))
            {
                Interop.ExecuteJavaScript("$0.preventDefault()", e.UnderlyingJSInstance);
            }
        }

        static async void OnItemsSourceChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var @this = d as Grid;
            var oldValue = e.OldValue as IEnumerable;
            var newValue = e.NewValue as IEnumerable;

            if (oldValue != newValue)
            {
                await @this.JSInstanceLoaded;
                
                    @this.setDataSource(new DataSource(new DataSourceOptions()
                    {
                        data = Utils.ToJSObject(e.NewValue)
                    }));
                    @this.dataBinder.UpdateTarget(oldValue, newValue);
                    @this.RemoveOldColumns();

                    @this.firstDataLoad = false;
            }
        }

        protected override void OnJSInstanceUnloaded()
        {
            base.OnJSInstanceUnloaded();
            this.dataBinder.StopListeningToItemsChanges(this.ItemsSource);
        }
    }
}
