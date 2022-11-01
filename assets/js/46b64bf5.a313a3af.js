(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[4403],{3905:(e,A,n)=>{"use strict";n.d(A,{Zo:()=>d,kt:()=>g});var t=n(7294);function a(e,A,n){return A in e?Object.defineProperty(e,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[A]=n,e}function s(e,A){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?s(Object(n),!0).forEach((function(A){a(e,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(n,A))}))}return e}function i(e,A){if(null==e)return{};var n,t,a=function(e,A){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],A.indexOf(n)>=0||(a[n]=e[n]);return a}(e,A);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=t.createContext({}),c=function(e){var A=t.useContext(r),n=A;return e&&(n="function"==typeof e?e(A):o(o({},A),e)),n},d=function(e){var A=c(e.components);return t.createElement(r.Provider,{value:A},e.children)},l={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},f=t.forwardRef((function(e,A){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(n),g=a,p=f["".concat(r,".").concat(g)]||f[g]||l[g]||s;return n?t.createElement(p,o(o({ref:A},d),{},{components:n})):t.createElement(p,o({ref:A},d))}));function g(e,A){var n=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var r in A)hasOwnProperty.call(A,r)&&(i[r]=A[r]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7993:(e,A,n)=>{"use strict";n.d(A,{Z:()=>a});var t=n(7294);const a=function(e){let{src:A,title:a}=e;return t.createElement("div",{className:"container text--center"},t.createElement("figure",null,t.createElement("img",{src:n(7356)("./"+A).default,width:"640","max-width":"100%"}),t.createElement("figcaption",null,t.createElement("em",null,a))))}},1835:(e,A,n)=>{"use strict";n.r(A),n.d(A,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>f});var t=n(7462),a=n(7294),s=n(3905),o=n(7993);const i=function(e){let{src:A,title:n,url:t}=e;return a.createElement("div",{className:"container text--center"},a.createElement("a",{href:t,target:"_blank"},a.createElement("figure",null,a.createElement("img",{src:A,width:"640","max-width":"100%"}),a.createElement("figcaption",null,a.createElement("em",null,n)))))},r={id:"zns",title:"NVMe Zoned Namespaces (ZNS) Devices",sidebar_label:"NVMe Zoned Namespaces (ZNS) Devices"},c="NVMe Zoned Namespaces (ZNS) Devices",d={unversionedId:"introduction/zns",id:"introduction/zns",title:"NVMe Zoned Namespaces (ZNS) Devices",description:"NVMe Zoned Namespace (ZNS) devices introduce a new division of functionality",source:"@site/docs/introduction/zns.md",sourceDirName:"introduction",slug:"/introduction/zns",permalink:"/docs/introduction/zns",draft:!1,tags:[],version:"current",frontMatter:{id:"zns",title:"NVMe Zoned Namespaces (ZNS) Devices",sidebar_label:"NVMe Zoned Namespaces (ZNS) Devices"},sidebar:"docs",previous:{title:"Shingled Magnetic Recording Hard Disks",permalink:"/docs/introduction/smr"},next:{title:"Linux Zoned Storage Ecosystem",permalink:"/docs/introduction/linux-ecosystem"}},l={},f=[{value:"Overview",id:"overview",level:2},{value:"The ZNS Zoned Storage Model",id:"the-zns-zoned-storage-model",level:2},{value:"Zone types",id:"zone-types",level:3},{value:"Zone Capacity and Zone Size",id:"zone-capacity-and-zone-size",level:3},{value:"Zone Resources Limits",id:"zone-resources-limits",level:3},{value:"Zone Append",id:"zone-append",level:3},{value:"Presentations",id:"presentations",level:2}],g={toc:f};function p(e){let{components:A,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},g,n,{components:A,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nvme-zoned-namespaces-zns-devices"},"NVMe Zoned Namespaces (ZNS) Devices"),(0,s.kt)("p",null,"NVMe Zoned Namespace (ZNS) devices introduce a new division of functionality\nbetween host software and the device controller. A ZNS device exposes its\ncapacity into zones, where each zone can be read in any order but must be\nwritten sequentially."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{href:"https://nvmexpress.org/",target:"_blank_"},"NVM Express (NVMe)\norganization")," released as part of the NVMe 2.0 specifications\nthe ",(0,s.kt)("a",{href:"https://nvmexpress.org/developers/nvme-command-set-specifications/",target:"_blank_"},"NVMe ZNS Command Set specification"),". The latest revision\nof this specification available is 1.1. The NVMe ZNS specification define a\ncommand interface that applies to all NVMe defined command transport. This\ncommand set is independent of the storage media technology used by the device\nand applies equally to flash-based solid state drives (SSDs) or ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/smr"},"SMR hard\ndisks"),"."),(0,s.kt)("p",null,"The most common type of ZNS devices found today are flash-based SSDs. For this\ntype of device, the ZNS interface characteristics allow improving internal data\nplacement and thus leads to higher performance through higher write throughput,\nimproved QoS (lower access latencies) and increased capacity."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"See ",(0,s.kt)("a",{href:"https://www.usenix.org/conference/atc21/presentation/bjorling",target:"_blank_"},"ZNS: Avoiding the Flash-Based Block Interface Tax for\nFlash-Based SSDs")," for a deep dive on ZNS SSDs. The article was published\nat USENIX ATC 2021.")),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The ZNS specifications follows the ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage"},"Zoned Storage Model"),". This\nstandards-based architecture, which takes a unified approach to storage that\nenables both Shingled Magnetic Recording (SMR) in HDDs and ZNS SSDs to share a\nunified software stack."),(0,s.kt)("p",null,"Specifically for ZNS SSDs, the zone abstraction allows the host aligning its\nwrites to the sequential write required properties of flash-based SSDs, and\nthereby optimizes data placement onto the SSD's media. Note that the management\nof media reliability continues to be the sole responsibility of the ZNS SSD and\nshould be managed the same way as conventional SSDs."),(0,s.kt)(o.Z,{src:"intro-zns.png",title:"Conventional SSDs and ZNS SSDs internal data placement",mdxType:"Image"}),(0,s.kt)("h2",{id:"the-zns-zoned-storage-model"},"The ZNS Zoned Storage Model"),(0,s.kt)("p",null,"The ZNS Command Set specification builds upon the ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-models"},"host-managed zoned storage\nmodel")," which was first introduced for SMR\nhard-disks with the SCSI ZBC (Zoned Block Command) standard and the ATA ZAC\n(Zoned ATA Commands) standard. A compatible ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-states-and-state-transitions"},"zone state\nmachine")," was defined, and\na similar set of ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-management-commands"},"zone management\ncommands")," was defined."),(0,s.kt)("p",null,"These similarities simplify the implementation of the host storage stack and\napplications for simultaneously supporting both host-managed SMR hard-disks and\nZNS SSDs."),(0,s.kt)("p",null,"Given that ZNS SSDs typically is implemented using non-volatile memory, the ZNS\nspecification introduces additional functionalities to efficiently enable this\ntype of media."),(0,s.kt)("h3",{id:"zone-types"},"Zone types"),(0,s.kt)("p",null,"ZBC and ZAC SMR hard-disks can optionally expose a number of ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-types"},"conventional\nzones")," which accept random write operations. The\nZNS specification does not define this optional set of random write zones, as\nNVMe supports multiple namespace, and therefore can expose a separate namespace\nthat supports conventional I/O accesses."),(0,s.kt)("p",null,"The ZNS specification mandates that all zones of a zoned namespace must have the\nsequential-write-required type."),(0,s.kt)("h3",{id:"zone-capacity-and-zone-size"},"Zone Capacity and Zone Size"),(0,s.kt)("p",null,"The ZNS specification introduced the concept of a ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-size-and-zone-capacity"},"zone\ncapacity"),". This concept is not\ndefined in the ZBC and ZAC standards."),(0,s.kt)("p",null,"Similar to ZBC and ZAC standards, ZNS defines the zone size as the total\nnumber of logical blocks within a zone. A zone capacity is an additional\nper-zone attribute that indicates the number of usable logical blocks within\neach zone, starting from the first logical block of each zone. A zone capacity\nis always smaller or equal to the zone size."),(0,s.kt)("p",null,"This new attribute was introduced to allow for the zone size to remain a power\nof two number of logical blocks (facilitating logical block to zone number\nconversions) while allowing optimized mapping of a zone storage capacity to the\nunderlying media characteristics. For instance, in the case a flash based\ndevice, a zone capacity can be aligned to the size of flash erase blocks without\nrequiring that the device implements a power-of-two sized erased block."),(0,s.kt)("p",null,"As the logical block addresses between the zone capacity and the end of the\nzone are not mapped to any physical storage blocks, write accesses to\nthese blocks will result in an error. Therefore, reading in this area is handled\nin the same way as when reading unwritted blocks."),(0,s.kt)("p",null,"A zone with a zone capacity smaller than the zone size will be transitioned to a\nfull condition when the number of written blocks equals the zone capacity."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The total namespace capacity reported by a controller is always equal to the\ntotal number of logical blocks defined by the zones. In other words, this\nreported capacity includes unusable logical blocks of zones with a zone capacity\nlower than the zone size. The usable capacity of the namespace is equal to the\nsum of all zones capacities. This usable capacity is always smaller than the\nreported namespace capacity if the namespace contains zones with a zone capacity\nlower than the zone size.")),(0,s.kt)("h3",{id:"zone-resources-limits"},"Zone Resources Limits"),(0,s.kt)("p",null,"The ZNS specification allows a ZNS controller to report a limit on the total\nnumber of zones that can be simultaneously in the implicit open or explicit open\nstate (",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#open-zones-limit"},"open zones limit"),"). This potential\nlimit on the maximum number of open zones is similarly defined in the ZBC, and\nZAC standards."),(0,s.kt)("p",null,"However, unlike the ZBC and ZAC standards, the ZNS specification defines an\nadditional ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#active-zones-limit"},"limit on the number of active\nzones"),", that is, zones that have the\nimplicit open, explicit open or closed state. A ZNS SSD may impose a limit on\nthe maximum number of zones that can be active. This limit is always equal or\nlarger than the limit on the maximum number of open zones."),(0,s.kt)("h3",{id:"zone-append"},"Zone Append"),(0,s.kt)("p",null,"The NVMe specifications allow a device controller to execute commands present\nin the several submission queues available in any order. This has implications\nfor the host IO stack, namely, even if the host submits write commands directed\nat a zone sequentially, the commands may be reordered before they are processed\nand violate the sequential write requirement, resulting in errors. Host software\ncan avoid such error by limiting the number of write commands outstanding per\nzone to one. This can potentially result in poor performance, especially for\nworkloads issuing mostly small write operations."),(0,s.kt)("p",null,"To avoid this problem, the ZNS specification introduced the new ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-append"},(0,s.kt)("em",{parentName:"a"},"Zone\nAppend"))," command. Support for this command is\ndefined as optional in the ZNS specification. However, Linux support for zoned\nblock devices requires that a ZNS device supports the zone append command."),(0,s.kt)("h2",{id:"presentations"},"Presentations"),(0,s.kt)("p",null,"The following OCP 2019 Global Summit presentation covers the motivation for\nZNS SSDs, the journey, and a general overview of the interface."),(0,s.kt)(i,{src:"https://img.youtube.com/vi/9yVWb3rbces/0.jpg",title:"From Open-Channel SSDs to Zoned Namespaces, OCP 2019 Global Summit.",url:"https://www.youtube.com/watch?v=9yVWb3rbces",mdxType:"ImageLink"}),(0,s.kt)("p",null,"The following SNIA SDC presentations illustrate how ZNS SSDs can be used with\nreal-world applications."),(0,s.kt)(i,{src:"https://img.youtube.com/vi/qpbBuyYT6fc/0.jpg",url:"https://www.youtube.com/watch?v=qpbBuyYT6fc",title:"File System Native Support of Zoned Block Devices: Regular vs Append\nWrites, SDC2020",mdxType:"ImageLink"}),(0,s.kt)(i,{src:"https://img.youtube.com/vi/FwMQqIGZFsE/0.jpg",title:"Zoned Block Device Support in Hadoop HDFS, SDC2020",url:"https://www.youtube.com/watch?v=FwMQqIGZFsE",mdxType:"ImageLink"}),(0,s.kt)(i,{src:"https://img.youtube.com/vi/cbX3P56Jp0o/0.jpg",title:"Zoned Namespaces (ZNS) SSDs: Disrupting the Storage Industry, SDC2020",url:"https://www.youtube.com/watch?v=cbX3P56Jp0o",mdxType:"ImageLink"}))}p.isMDXComponent=!0},5:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},2448:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},8244:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/qemu-151192c8ad3d711f862c27b8b9e5bec4.png"},308:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t="data:image/vnd.microsoft.icon;base64,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WP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU///////htqf/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/9Obh///+/v/cp5P/0YBZ/9GAWW/RgFka0YBZ/dGAWf/RgFn/9uvo/+S+sf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgVv/5sO4//Xo5P/x4Nv/8d/a//Tn4//v2tT/9enm//Xp5v/ShWL/0YBZ/9GAWf/RgFn/0YBZ/9eWe//8+fj/26GL/9GAWf/RgFn90YBZGtGAWQDRgFm20YBZ/9GAWf/fr53/+vTy/9SMbP/RgFn/0YBZ/9GAWf/RgFj/0YBY/9GAWP/RgFj/0YBZ/9SLa//UjG3/0YFc/9GAWP/ThmT/9uvo/+3Vzv/RgFn/0YBZ/9GAWf/RgFn/8d7Y/+zSyf/RgFn/0YBZ/9GAWbbRgFkAAAAAANGAWT/RgFn/0YBZ/9GAWf/w29T/8d/Z/9GBW//RgFn/04hm//nx7//69PL/+vTy//r08v/69PL/+vTy//r08v/69PL/+vTy//r08v/8+Pf//////9uijv/RgFn/0YBZ/+S+sf/58u//1Ipp/9GAWf/RgFn/0YBZPwAAAAAAAAAA0YBZANGAWarRgFn/0YBZ/9OJaP/37On/7dTM/9GBW//Rglz/2Z6H/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/04hn/9GAWf/gsqL//Pf2/9uhi//RgFn/0YBZ/9GAWarRgFkAAAAAAAAAAAAAAAAA0YBZEtGAWebRgFn/0YBZ/9aRdP/37er/8d7Y/9SLa//RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgVv/5sO4//z39v/dqZb/0YBZ/9GAWf/RgFnm0YBZEgAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZNdGAWfrRgFn/0YBZ/9SKav/w3db/+vTy/+K5qv/Sgl3/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26SP//Tm4f/47uv/2Z2G/9GAWf/RgFn/0YBZ+tGAWTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZUtGAWfrRgFn/0YBZ/9GAWv/gs6L/+O7r//rz8f/rz8f/3aqY/9WNbf/RgVv/0YFa/9OGYv/aoIr/5sK2//bq5v/89/b/6Mi9/9KFYv/RgFn/0YBZ/9GAWfrRgFlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZNdGAWebRgFn/0YBZ/9GAWf/RgVv/3qya/+3Wzv/47+z//vz8//36+f/9+ff//vz8//v18//x3tj/47ut/9OIZv/RgFn/0YBZ/9GAWf/RgFnm0YBZNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZEtGAWarRgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ThWH/1pJ1/9aUeP/UiWf/0YBY/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZqtGAWRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZANGAWT/RgFm20YBZ/dGAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn90YBZttGAWT/RgFkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGAWQDRgFka0YBZb9GAWa7RgFnf0YBZ/9GAWf/RgFn/0YBZ/9GAWd/RgFmu0YBZb9GAWRrRgFkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8="},51:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},1485:(e,A,n)=>{"use strict";n.r(A),n.d(A,{default:()=>t});const t=n.p+"assets/images/zone-state-machine-de3050d6565c6840b72bd055dbe01f3b.svg"},7356:(e,A,n)=>{var t={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":2448,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./qemu.png":8244,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zone-state-machine.svg":1485,"./zs-logo.ico":9972,"./zs-logo.png":51};function a(e){var A=s(e);return n(A)}function s(e){if(!n.o(t,e)){var A=new Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=s,e.exports=a,a.id=7356}}]);