using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSHTML5.Wrappers.KendoUI.TreeView
{
    public class Configuration
    {
        /// <summary>
        /// Contains the path to the "kendo.all.min.js" file to use for the control.
        /// </summary>
        public string LocationOfKendoAllJS { get; set; }

        /// <summary>
        /// Contains the path to the "kendo.common.min.css" file to use for the control.
        /// </summary>
        public string LocationOfKendoCommonCSS { get; set; }

        /// <summary>
        /// Contains the path to the "kendo.default.min.css" file to use for the control.
        /// </summary>
        public string LocationOfKendoDefaultCSS { get; set; }

        /// <summary>
        /// Contains the path to the "kendo.default.mobile.min.css" file to use for the control.
        /// </summary>
        public string LocationOfKendoDefaultMobileCSS { get; set; }



        internal bool AreSourcesSet
        {
            get
            {
                return (LocationOfKendoAllJS != null && LocationOfKendoCommonCSS != null && LocationOfKendoDefaultCSS != null && LocationOfKendoDefaultMobileCSS != null);
            }
        }
    }
}
