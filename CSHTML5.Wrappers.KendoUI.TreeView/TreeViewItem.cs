using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSHTML5.Wrappers.KendoUI.TreeView //Note: used the same namespace as Configuration because the class that sets the TreeViewItems probably also sets the Configuration for the TreeView. We could also have used the namespace "kendo_ui_treeView.kendo.ui.TreeView" to have the same as the TreeView itself (this one cannot be chosen since it is generated from the .ts file).
{
    public class TreeViewItem
    {
        public string text { get; set; }

        private ObservableCollection<TreeViewItem> _items;
        public ObservableCollection<TreeViewItem> items
        {
            get
            {
                if (_items == null)
                {
                    _items = new ObservableCollection<TreeViewItem>();
                }
                return _items;
            }
            set
            {
                _items = value;
            }
        }

        public string image { get; set; }

        public TreeViewItem()
        {
        }

        public TreeViewItem(string initText, string initImage, ObservableCollection<TreeViewItem> initItems)
        {
            text = initText;
            image = initImage;
            items = initItems;
        }
    }
}
