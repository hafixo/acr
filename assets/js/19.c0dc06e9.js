(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"azure-container-registry-http-headers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-http-headers"}},[e._v("#")]),e._v(" Azure Container Registry HTTP headers")]),e._v(" "),r("p",[e._v("Azure container registries are compatible with a multitude of services and orchestrators. To help our customers, we'd like to understand which services in Azure, or outside of Azure, are issuing registry requests. To track the source services and agents from which ACR is used, we have started using the "),r("code",[e._v("HttpHeaders")]),e._v(" field in the Docker "),r("code",[e._v("config.json")]),e._v(" file.")]),e._v(" "),r("h2",{attrs:{id:"header-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header-format"}},[e._v("#")]),e._v(" Header format")]),e._v(" "),r("p",[e._v("ACR will parse headers using the following format:")]),e._v(" "),r("div",{staticClass:"language-HTTP line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("X-Meta-Source-Client:")]),e._v(" <cloud>/<service>/<optionalservicename>\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ul",[r("li",[r("code",[e._v("cloud")]),e._v(": Azure, Azure Stack, or other government- or country-specific Azure cloud.")]),e._v(" "),r("li",[r("code",[e._v("service")]),e._v(": The name of the service.")]),e._v(" "),r("li",[r("code",[e._v("optionalservicename")]),e._v(": An optional parameter for services with subservices, or for specifying a SKU. For example, Web Apps corresponds to "),r("code",[e._v("azure/app-service/web-apps")]),e._v(").")])]),e._v(" "),r("h3",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),r("div",{staticClass:"language-JSON line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"HttpHeaders"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"X-Meta-Source-Client"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"azure/aks"')]),e._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"auths"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"myregistry.azurecr.io"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"credsStore"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wincred"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br")])]),r("h2",{attrs:{id:"header-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header-values"}},[e._v("#")]),e._v(" Header values")]),e._v(" "),r("p",[e._v("Partner services and orchestrators are encouraged to use specific header values to help with our telemetry. Users can also modify the value passed to the header if they so desire.")]),e._v(" "),r("p",[e._v("The values we ask ACR partners to use when populating the "),r("code",[e._v("X-Meta-Source-Client")]),e._v(" field are:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Cloud")]),e._v(" "),r("th",[e._v("Header")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Azure Public Cloud")]),e._v(" "),r("td",[r("code",[e._v("azure/")])])]),e._v(" "),r("tr",[r("td",[e._v("Azure Stack")]),e._v(" "),r("td",[r("code",[e._v("azurestack/")])])]),e._v(" "),r("tr",[r("td",[e._v("China (Mooncake)")]),e._v(" "),r("td",[r("code",[e._v("china/")])])]),e._v(" "),r("tr",[r("td",[e._v("Germany")]),e._v(" "),r("td",[r("code",[e._v("germany/")])])]),e._v(" "),r("tr",[r("td",[e._v("US DOD")]),e._v(" "),r("td",[r("code",[e._v("azureusdod/")])])]),e._v(" "),r("tr",[r("td",[e._v("US Gov")]),e._v(" "),r("td",[r("code",[e._v("azureusgov/")])])]),e._v(" "),r("tr",[r("td",[e._v("On Premise")]),e._v(" "),r("td",[e._v("`on-prem/")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Service or Orchestrator name")]),e._v(" "),r("th",[e._v("Header")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("App Service - Logic Apps")]),e._v(" "),r("td",[r("code",[e._v("azure/app-service/logic-apps")])])]),e._v(" "),r("tr",[r("td",[e._v("App Service - Web Apps")]),e._v(" "),r("td",[r("code",[e._v("azure/app-service/web-apps")])])]),e._v(" "),r("tr",[r("td",[e._v("Azure Container Builder")]),e._v(" "),r("td",[r("code",[e._v("azure/acb")])])]),e._v(" "),r("tr",[r("td",[e._v("Azure Container Instance")]),e._v(" "),r("td",[r("code",[e._v("azure/aci")])])]),e._v(" "),r("tr",[r("td",[e._v("Azure Container Service")]),e._v(" "),r("td",[r("code",[e._v("azure/acs")])])]),e._v(" "),r("tr",[r("td",[e._v("Azure Kubernetes Service")]),e._v(" "),r("td",[r("code",[e._v("azure/aks")])])]),e._v(" "),r("tr",[r("td",[e._v("AKS Engine (Kubernetes)")]),e._v(" "),r("td",[r("code",[e._v("azure/aks-engine")])])]),e._v(" "),r("tr",[r("td",[e._v("Cluster API Azure (Kubernetes)")]),e._v(" "),r("td",[r("code",[e._v("azure/capz")])])]),e._v(" "),r("tr",[r("td",[e._v("Batch")]),e._v(" "),r("td",[r("code",[e._v("azure/batch")])])]),e._v(" "),r("tr",[r("td",[e._v("Cloud Console")]),e._v(" "),r("td",[r("code",[e._v("azure/cloud-console")])])]),e._v(" "),r("tr",[r("td",[e._v("Functions")]),e._v(" "),r("td",[r("code",[e._v("azure/functions")])])]),e._v(" "),r("tr",[r("td",[e._v("HDInsight")]),e._v(" "),r("td",[r("code",[e._v("azure/hdinsight")])])]),e._v(" "),r("tr",[r("td",[e._v("Internet of Things - Hub")]),e._v(" "),r("td",[r("code",[e._v("azure/iot/hub")])])]),e._v(" "),r("tr",[r("td",[e._v("Jenkins")]),e._v(" "),r("td",[r("code",[e._v("azure/jenkins")])])]),e._v(" "),r("tr",[r("td",[e._v("Machine Learning")]),e._v(" "),r("td",[r("code",[e._v("azure/ml")])])]),e._v(" "),r("tr",[r("td",[e._v("Service Fabric")]),e._v(" "),r("td",[r("code",[e._v("azure/service-fabric")])])]),e._v(" "),r("tr",[r("td",[e._v("VSTS")]),e._v(" "),r("td",[r("code",[e._v("azure/vsts")])])]),e._v(" "),r("tr",[r("td",[e._v("ACR Tasks")]),e._v(" "),r("td",[r("code",[e._v("azure/acr/tasks")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);