﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSHTML5.Wrappers.KendoUI.Common
{
    public interface IItemsSourceHolder
    {
        IEnumerable ItemsSource { get; set; }
    }
}
