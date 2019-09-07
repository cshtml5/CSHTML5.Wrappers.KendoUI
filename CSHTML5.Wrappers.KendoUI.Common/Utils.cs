using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeScriptDefinitionsSupport;

namespace CSHTML5.Wrappers.KendoUI.Common
{
    public static class Utils
    {
        public static JSObject ToJSObject(object o)
        {
            string serialized = JsonConvert.SerializeObject(o);
            object json = Interop.ExecuteJavaScript("JSON.parse($0)", serialized);
            return new JSObject(json);
        }

        public static JSObject CSharpEnumerableToJSObject(IEnumerable cSharpEnumerable, List<string> columnsPropertyPaths)
        {
            var jsArray = Interop.ExecuteJavaScript("[]");

            // Traverse the enumerable:
            foreach (var cSharpItem in (IEnumerable)cSharpEnumerable)
            {
                var jsItem = CSharpObjectJSObject(cSharpItem, columnsPropertyPaths);
                Interop.ExecuteJavaScript("$0.push($1)", jsArray, jsItem);
            }

            return new JSObject(jsArray);
        }

        public static object CSharpObjectJSObject(object cSharpObject, List<string> columnsPropertyPaths)
        {
            var jsObject = Interop.ExecuteJavaScript("new Object()");

            foreach (string columnPropertyPath in columnsPropertyPaths)
            {
                // Read the property value:
                object propertyValue = GetNestedPropertyValue(cSharpObject, columnPropertyPath);

                // Get the property name:
                string propertyName;
                if (columnPropertyPath.LastIndexOf(".") > -1)
                    propertyName = columnPropertyPath.Substring(columnPropertyPath.LastIndexOf(".") + 1);
                else
                    propertyName = columnPropertyPath;

                if (propertyValue != null)
                {
                    string propertyValueString = propertyValue.ToString();
                    Interop.ExecuteJavaScript(@"$0[$1] = $2;", jsObject, propertyName, propertyValueString);
                }
            }

            return jsObject;
        }

        public static object GetNestedPropertyValue(object obj, string path)
        {
            return GetNestedPropertyValue(obj, path.Split('.'));
        }

        static object GetNestedPropertyValue(object obj, string[] path)
        {
            object value = null;

            var prop = obj.GetType().GetProperty(path[0]);
            if (prop != null)
            {
                value = prop.GetValue(obj);
                if (path.Length > 1)
                    value = GetNestedPropertyValue(value, path.Skip(1).ToArray());
            }

            return value;
        }

        public static IEnumerable<Type> GetItemTypes(this IEnumerable e)
        {
            return e.GetType()
                    .GetInterfaces()
                    .Where(t => t.IsGenericType
                        && t.GetGenericTypeDefinition() == typeof(IEnumerable<>))
                    .Select(t => t.GetGenericArguments()[0]);
        }

        public static Type GetItemType(this IEnumerable enumerable)
        {
            Type itemType = null;
            var genericEnumerable = enumerable.Cast<object>();

            if (genericEnumerable.Count() > 0)
                itemType = genericEnumerable.First().GetType();
            else
            {
                var itemTypes = enumerable.GetItemTypes();
                if (itemTypes.Count() == 1)
                    itemType = itemTypes.First();
            }

            return itemType;
        }
    }
}
