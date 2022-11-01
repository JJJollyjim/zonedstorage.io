(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[9994],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>l});var A=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,A,a=function(e,n){if(null==e)return{};var t,A,a={},s=Object.keys(e);for(A=0;A<s.length;A++)t=s[A],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(A=0;A<s.length;A++)t=s[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=A.createContext({}),d=function(e){var n=A.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return A.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},g=A.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=d(t),l=a,m=g["".concat(o,".").concat(l)]||g[l]||f[l]||s;return t?A.createElement(m,r(r({ref:n},c),{},{components:t})):A.createElement(m,r({ref:n},c))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=g;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var d=2;d<s;d++)r[d]=t[d];return A.createElement.apply(null,r)}return A.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7993:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var A=t(7294);const a=function(e){let{src:n,title:a}=e;return A.createElement("div",{className:"container text--center"},A.createElement("figure",null,A.createElement("img",{src:t(7356)("./"+n).default,width:"640","max-width":"100%"}),A.createElement("figcaption",null,A.createElement("em",null,a))))}},8090:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var A=t(7462),a=(t(7294),t(3905)),s=t(7993);const r={id:"smr",title:"Shingled Magnetic Recording Hard Disks",sidebar_label:"Shingled Magnetic Recording Hard Disks"},i="Shingled Magnetic Recording Hard Disks",o={unversionedId:"introduction/smr",id:"introduction/smr",title:"Shingled Magnetic Recording Hard Disks",description:"Shingled Magnetic Recording (SMR) is a magnetic storage data recording",source:"@site/docs/introduction/smr.md",sourceDirName:"introduction",slug:"/introduction/smr",permalink:"/docs/introduction/smr",draft:!1,tags:[],version:"current",frontMatter:{id:"smr",title:"Shingled Magnetic Recording Hard Disks",sidebar_label:"Shingled Magnetic Recording Hard Disks"},sidebar:"docs",previous:{title:"Zoned Storage Devices Overview",permalink:"/docs/introduction/zoned-storage"},next:{title:"NVMe Zoned Namespaces (ZNS) Devices",permalink:"/docs/introduction/zns"}},d={},c=[{value:"SMR Overview",id:"smr-overview",level:2},{value:"Fundamental Implications of SMR",id:"fundamental-implications-of-smr",level:2},{value:"Governing Standards",id:"governing-standards",level:2},{value:"SCSI Standard: ZBC",id:"scsi-standard-zbc",level:3},{value:"Acquiring the SCSI ZBC Standard",id:"acquiring-the-scsi-zbc-standard",level:4},{value:"ATA Standard: ZAC",id:"ata-standard-zac",level:3},{value:"Acquiring the ATA ZAC Standard",id:"acquiring-the-ata-zac-standard",level:4},{value:"SMR Interface Implementations",id:"smr-interface-implementations",level:2},{value:"SMR Zone Management",id:"smr-zone-management",level:2},{value:"Zone Types",id:"zone-types",level:3},{value:"Zone Management Commands",id:"zone-management-commands",level:3},{value:"Zone Resources Limits",id:"zone-resources-limits",level:3},{value:"Zone Append",id:"zone-append",level:3}],f={toc:c};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,A.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shingled-magnetic-recording-hard-disks"},"Shingled Magnetic Recording Hard Disks"),(0,a.kt)("p",null,"Shingled Magnetic Recording (SMR) is a magnetic storage data recording\ntechnology that is used in hard disk drives (HDDs). Compared to drives of the\nsame generation that use conventional magnetic recording (CMR) technology,\nShingled Magnetic Recording provides increased areal density. This increased\nareal density results in a higher overall per-drive storage capacity when\ncompared to CMR drives."),(0,a.kt)("h2",{id:"smr-overview"},"SMR Overview"),(0,a.kt)("p",null,"Conventional magnetic recording places gaps between recording tracks on hard\ndisk platters to account for Track mis-registration (TMR) budget. These\nseparators impact areal density, because portions of the platter surface are not\nfully utilized to store user data. Shingled magnetic recording removes the gaps\nbetween tracks by writing the tracks in an overlapping manner, forming a pattern\nsimilar to the shingles on a roof. Physically, this is done by writing the data\nsequentially and then overlapping (or \u201cshingling\u201d) it with another track of\ndata. By repeating this process, more data tracks can be placed on each magnetic\nsurface than can be placed on an equal amount of magnetic surface in a drive\nthat uses conventional magnetic recording technology. The figure below\nillustrates this principle."),(0,a.kt)(s.Z,{src:"intro-smr-tracks.png",title:"SMR hard disks overlapping tracks",mdxType:"Image"}),(0,a.kt)("p",null,"The write head that is designed for SMR drives is wider than is necessary for\nit to write a single track of data. This greater width produces a stronger\nmagnetic field that is suitable for magnetizing films of high coercivity. After\none track has been written, the recording head is advanced by only part of its\nwidth. This means that the next track partially overwrites the previous one,\nleaving only a narrow band of the previous track readable."),(0,a.kt)("p",null,'Overlapping tracks are grouped into bands called "zones". These zones are of\nfixed capacity, which promotes effective data organization and partial update\ncapability. Recording gaps are placed between zones to prevent data from being\noverwritten by the wide write head. These gaps ensure that the wide write head\ndoes not overwrite the first track of a zone when it is writing the last track\nof the preceding zone on the same platter surface.'),(0,a.kt)(s.Z,{src:"intro-smr-zones.png",title:"SMR hard disks track organization",mdxType:"Image"}),(0,a.kt)("h2",{id:"fundamental-implications-of-smr"},"Fundamental Implications of SMR"),(0,a.kt)("p",null,"The shingled format of SMR dictates that all data streams must be organized and\nwritten sequentially to the media. There are different methods of implementing\nSMR (see the ",(0,a.kt)("a",{parentName:"p",href:"docs/introduction/smr#smr-interface-implementations"},"SMR Interface\nImplementations"),' section\nbelow), but the data must be written to the media sequentially regardless of\nwhich method is used. If a particular data sector has to be modified or\nre-written, then the entire band of tracks (the "zone") must be re-written.\nBecause the modified data sector could be under another \u201cshingle\u201d of data,\ndirect modification is not permitted. This is never the case in traditional CMR\ndrives.'),(0,a.kt)("p",null,"To modify a sector in a track (when using SMR), you must rewrite the row of\nshingles above the track containing the target sector. SMR hard disks provide\ntrue random-read capability, allowing rapid data access in the way that you've\ncome to expect from traditional CMR drives. This makes SMR an excellent\ntechnology candidate for both active archive and higher-performance sequential\nworkloads."),(0,a.kt)("h2",{id:"governing-standards"},"Governing Standards"),(0,a.kt)("p",null,"A specification for commands has been defined for SMR hard disks that implement\nthe host-managed and host-aware models. These command interfaces are\nstandards-based and have been developed by the INCITS T10 committee for SCSI\nhard disks and by the INCITS T13 committee for ATA hard disks. No industry\nstandard exists for the drive-Managed model, because it is backwards-compatible\nand transparent to hosts."),(0,a.kt)("h3",{id:"scsi-standard-zbc"},"SCSI Standard: ZBC"),(0,a.kt)("p",null,'"Zoned Block Command (ZBC) revision 05" is the standard that defines zone\nmanagement commands and read/write command behavior for Host-Managed and Host-\nAware SCSI drives. The ZBC specification defines the model and command-set\nextensions for zoned block devices, and have been implemented in conjunction\nwith the applicable clauses of the SPC-5 and SBC-4 specifications.'),(0,a.kt)("h4",{id:"acquiring-the-scsi-zbc-standard"},"Acquiring the SCSI ZBC Standard"),(0,a.kt)("p",null,"The Zoned Block Commands specifications document is published\nas ",(0,a.kt)("a",{href:"https://standards.incits.org/apps/group_public/project/details.php?project_id=525",target:"_blank"},"ANSI INCITS 536-2016: Information technology \u2013 Zoned Block\nCommands (ZBC)")," and can be purchased from the ",(0,a.kt)("a",{href:"http://webstore.ansi.org/",target:"_blank"},"ANSI webstore"),". This document is available at no cost to\nINCITS T10 member companies. Contact INCITS for further information."),(0,a.kt)("h3",{id:"ata-standard-zac"},"ATA Standard: ZAC"),(0,a.kt)("p",null,'The Zoned Device ATA Command Set (ZAC) is the standard that specifies the\ncommand set that host systems use to access storage devices that implement\neither the "Host-Aware Zones" feature set or the "Host-Managed Zones" feature\nset. The INCITS Technical Committee T13 is responsible for all interface\nstandards that relate to the popular AT Attachment (ATA) storage interface,\nwhich is used with many disk drives. The Zoned Device ATA Command Set standard\nis an extension of the ATA implementation standards that are described in "AT\nAttachment - 8 ATA/ATAPI Architecture Model (ATA8-AAM)", and it provides a\ncommon command set for systems manufacturers, system integrators, software\nsuppliers and suppliers of storage devices that provide one of the\nzone-feature sets.'),(0,a.kt)("h4",{id:"acquiring-the-ata-zac-standard"},"Acquiring the ATA ZAC Standard"),(0,a.kt)("p",null,"The Zoned Device ATA Command Set specifications document is published\nas ",(0,a.kt)("a",{href:"https://standards.incits.org/apps/group_public/project/details.php?project_id=403",target:"_blank"},"INCITS 537-2016: Information technology \u2013 Zoned Device ATA\nCommand Set (ZAC)")," and can be purchased from the ",(0,a.kt)("a",{href:"http://webstore.ansi.org/",target:"_blank"},"ANSI webstore"),". This document is available at no cost to\nINCITS T13 member companies. Contact INCITS for further information."),(0,a.kt)("h2",{id:"smr-interface-implementations"},"SMR Interface Implementations"),(0,a.kt)("p",null,"An SMR disk implementation can have three possible interfaces, and their\ndifferences impact hosts and users."),(0,a.kt)("p",null,"The first two interfaces are defined by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-models"},"host-managed and host-aware zone\nmodels"),"."),(0,a.kt)("p",null,"An SMR disk implementation may also choose to hide the SMR sequential write\nconstraint to the host. This is the ",(0,a.kt)("strong",{parentName:"p"},"Drive Managed Model")," defined by the ZBC\nstandard. This model handles the SMR sequential-write constraint internally (in\nthe disk firmware) and provides a backwards-compatible interface to the host.\nDrive-managed disks accommodate both sequential and random writing, and can be\nused as a replacement for CMR drives without any modification to the host\nsoftware."),(0,a.kt)("p",null,"The performance characteristics of drive-managed SMR disks depend on the\ninternal disk firmware implementation, applications used and the workloads\nexecuted. This is similar to the performance of host-aware disks that are\nused by a host as regular drives."),(0,a.kt)("h2",{id:"smr-zone-management"},"SMR Zone Management"),(0,a.kt)("p",null,"The ZAC and ZBC standards describe the set of commands that are necessary for a\nhost application to manage zones of Host-Managed and Host-Aware drives.\nAlthough these two standards describe commands for two separate command\nprotocols (SCSI and ATA), the zone types and zone management commands that they\ndefine are semantically identical, and the behavior of the read and write\ncommands that they define are compatible. The ZBC and ZAC standards each define\nthe same zone models, and those zone models are discussed in the ",(0,a.kt)("a",{parentName:"p",href:"#smr-interface-implementations"},"SMR Interface\nImplementations")," section."),(0,a.kt)("h3",{id:"zone-types"},"Zone Types"),(0,a.kt)("p",null,"The ZAC and ZBC standards allow for two different ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-types"},"zone\ntypes")," to be used with the host-managed and host-\naware models."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Conventional zones")," are optional with the host-managed and host-aware\nSMR disks. If present, they typically occupy a very small percentage of the\noverall capacity of a drive.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sequential-write-required zones")," are mandatory with the host-managed model\nand cannot be found on host-aware disk models. These zones are subject to the\nSMR sequential write constraint and thus can be written only sequentially.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sequential-write-preferred zones")," are mandatory with the host-aware model\nand cannot be found on host-managed drives."))),(0,a.kt)("h3",{id:"zone-management-commands"},"Zone Management Commands"),(0,a.kt)("p",null,"Both the ZAC and the ZBC standards define ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-management-commands"},"five zone management\ncommands")," as extensions of the\ndrive's basic command set (which is similar to the set of commands defined for\nCMR drives)."),(0,a.kt)("h3",{id:"zone-resources-limits"},"Zone Resources Limits"),(0,a.kt)("p",null,"The ZAC and ZBC standards define only one ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-resources-limits"},"zone resources\nlimit"),". A drive can have a limit on the\nnumber of zones that can be in the implicit open or explicit open state (open\nzones)."),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#active-zones-limit"},"active zone resource limit")," is not\ndefined for SMR hard disks by the ZBC and ZAC standards.  The user can assume\nthat SMR hard disks do not have a limit on the number of zones that can be\nactive (that is, on the number of zones on the drive that can be partially\nwritten)."),(0,a.kt)("p",null,"Since host-aware drives are backwards compatible with regular CMR disks, the\nZBC and ZAC standards do not define any limit on the number of open zones for\nthis model. However, the standards define that a drive can advertize and optimal\nmaximum number of open zones. This is a non-restrictive guideline for the host\nrather than an enforced limit. The host software can use this information to\navoid performance degradation due to an excessive number of zone partially\nwritten on the device."),(0,a.kt)("h3",{id:"zone-append"},"Zone Append"),(0,a.kt)("p",null,"The ZAC and ZBC standards do not define a ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/zoned-storage#zone-append"},"zone append\ncommand")," for SMR hard disks. However, this\ncommand semantic can be emulated by host software stacks."))}g.isMDXComponent=!0},5:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},2448:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},8244:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/qemu-151192c8ad3d711f862c27b8b9e5bec4.png"},308:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A="data:image/vnd.microsoft.icon;base64,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WP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU////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"},51:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},1485:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});const A=t.p+"assets/images/zone-state-machine-de3050d6565c6840b72bd055dbe01f3b.svg"},7356:(e,n,t)=>{var A={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":2448,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./qemu.png":8244,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zone-state-machine.svg":1485,"./zs-logo.ico":9972,"./zs-logo.png":51};function a(e){var n=s(e);return t(n)}function s(e){if(!t.o(A,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return A[e]}a.keys=function(){return Object.keys(A)},a.resolve=s,e.exports=a,a.id=7356}}]);