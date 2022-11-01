(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[2738],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),f=d(n),p=o,m=f["".concat(r,".").concat(p)]||f[p]||c[p]||i;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var A={};for(var r in t)hasOwnProperty.call(t,r)&&(A[r]=t[r]);A.originalType=e,A.mdxType="string"==typeof e?e:o,s[1]=A;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7993:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);const o=function(e){let{src:t,title:o}=e;return a.createElement("div",{className:"container text--center"},a.createElement("figure",null,a.createElement("img",{src:n(7356)("./"+t).default,width:"640","max-width":"100%"}),a.createElement("figcaption",null,a.createElement("em",null,o))))}},2502:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>A,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(7462),o=(n(7294),n(3905)),i=n(7993);const s={id:"zoned-storage",title:"Zoned Storage Devices Overview",sidebar_label:"Zoned Storage Devices Overview"},A="Zoned Storage Devices",r={unversionedId:"introduction/zoned-storage",id:"introduction/zoned-storage",title:"Zoned Storage Devices Overview",description:"Zoned storage is a class of storage devices that have an address space that is",source:"@site/docs/introduction/zoned-storage.md",sourceDirName:"introduction",slug:"/introduction/zoned-storage",permalink:"/docs/introduction/zoned-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"zoned-storage",title:"Zoned Storage Devices Overview",sidebar_label:"Zoned Storage Devices Overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/introduction"},next:{title:"Shingled Magnetic Recording Hard Disks",permalink:"/docs/introduction/smr"}},d={},l=[{value:"Principle of Operation",id:"principle-of-operation",level:2},{value:"Zone Size and Zone Capacity",id:"zone-size-and-zone-capacity",level:2},{value:"Zone Models",id:"zone-models",level:2},{value:"Host-Managed Model",id:"host-managed-model",level:3},{value:"Host-Aware Model",id:"host-aware-model",level:3},{value:"Zone Types",id:"zone-types",level:2},{value:"Zone Management Commands",id:"zone-management-commands",level:2},{value:"Zone States and State Transitions",id:"zone-states-and-state-transitions",level:2},{value:"Zone Resources Limits",id:"zone-resources-limits",level:2},{value:"Open Zones Limit",id:"open-zones-limit",level:3},{value:"Active Zones Limit",id:"active-zones-limit",level:3},{value:"Zone Append",id:"zone-append",level:2}],c={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zoned-storage-devices"},"Zoned Storage Devices"),(0,o.kt)("p",null,"Zoned storage is a class of storage devices that have an address space that is\ndivided into zones that have write constraints that are different from regular\nstorage devices."),(0,o.kt)("h2",{id:"principle-of-operation"},"Principle of Operation"),(0,o.kt)("p",null,"Zones in zoned storage devices must be written sequentially. This is called the\n",(0,o.kt)("strong",{parentName:"p"},"sequential write constraint"),". Each zone in the device address space has a\nwrite pointer that keeps track of the position of the next write. Data in a\nzone cannot be directly overwritten: before being overwritten, the zone must\nfirst be erased using a special command (zone reset). The figure below\nillustrates this principle."),(0,o.kt)(i.Z,{src:"intro-zoned-storage.png",title:"Zoned Storage Devices Principle",mdxType:"Image"}),(0,o.kt)("p",null,"Zoned storage devices can be implemented using different command protocols for\nvarious recording and media technologies. The most common form of zoned storage\ntoday uses the SCSI Zoned Block Commands (ZBC) and Zoned ATA Commands (ZAC)\ninterfaces with ",(0,o.kt)("a",{parentName:"p",href:"./smr"},"Shingled Magnetic Recording (SMR)")," hard-disks. ZBC and\nZAC enable a zoned block storage model; SMR technology enables continued areal\ndensity growth that makes it possible to meet expanding data needs, and SMR\ntechnology requires the zoned block access model."),(0,o.kt)("p",null,"Solid State Drive (SSD) storage devices can also implement a zoned interface in\norder to reduce write amplification, to reduce the device's DRAM needs, and to\nimprove the quality of service at scale. The ",(0,o.kt)("a",{parentName:"p",href:"./zns"},"NVMe Zoned NameSpace (ZNS)"),"\nis a specification of the NVMe standard committee that adds a zoned storage\ninterface to the NVMe interface standard."),(0,o.kt)("h2",{id:"zone-size-and-zone-capacity"},"Zone Size and Zone Capacity"),(0,o.kt)("p",null,"The size of a zone of a zoned storage device is the total number of logical\nblocks within the zone. The size of each zone is fixed at manufacturing time\nand cannot be changed by the user."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is one exception to this rule: The ZBC-2 standard extends the ZBC command\nset with the FORMAT WITH PRESET command which allows a user to reformat a zoned\nSMR hard-disk with a different zone size. This operation is however destructive\nand thus cannot be used on a live system.")),(0,o.kt)("p",null,"Some zoned storage devices also define a capacity attribute for each zone. A\nzone capacity indicates the number of usable logical blocks within the zone,\nstarting from the first logical block of the zone. A zone capacity is always\nsmaller or equal to the zone size. This concept is illustrated in the figure\nbelow."),(0,o.kt)(i.Z,{src:"intro-zonesize-vs-capacity.png",title:"Zone Size and Zone Capacity",mdxType:"Image"}),(0,o.kt)("p",null,"The use of zone capacities different from the zone size allows for the zone size\nto remain constant for all zones while allowing an optimized mapping of a zone\nstorage capacity to the underlying media characteristics. For instance, in the\ncase a flash based device, a zone capacity can be aligned to the size of flash\nerase blocks without imposing host requirements on the device erase block size."),(0,o.kt)("h2",{id:"zone-models"},"Zone Models"),(0,o.kt)("p",null,'The zone interface of zoned storage devices can take different forms. These\nforms are referred to as "models", and their differences impacts hosts and\nusers. It is important to understand these differences, as not all\nimplementation options are appropriate for a particular storage application.\nThe two models that are in use today are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Host-Managed")," This model accommodates only sequential write workloads to\ndeliver both predictable performance and full control over the device zones\nat the host level. Modifications to host software are required to use host\nmanaged devices.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Host-Aware")," This model offers backwards compatibility with regular block\ndevices, that is, allows random write operations to be issued to any sector.\nBut this model also provides the same host control interface provided by\nthe host-managed model."))),(0,o.kt)("h3",{id:"host-managed-model"},"Host-Managed Model"),(0,o.kt)("p",null,"The host-managed model does not provide backwards compatibility with legacy\nhost storage stacks. Instead, it delegates management of the device sequential\nwrite constraint to the host software: the host must manage all write\noperations. This is done by using the write pointer to enforce sequential\nwriting within zones."),(0,o.kt)("p",null,"After data has been written to a zone, the write pointer increments in order to\nindicate the starting point of the next write operation in that zone. Any\nout-of-order write (write operation that does not start at the zone write\npointer location) forces the device to abort the operation and flag an error.\nRecovery from such an error is the responsibility of the controlling host\nsoftware. This enforcement allows host-managed devices to deliver predictable\nperformance."),(0,o.kt)("h3",{id:"host-aware-model"},"Host-Aware Model"),(0,o.kt)("p",null,"The host-aware model simultaneously preserves compatibility with legacy host\nstorage stacks by being backwards compatible with regular block devices but\nalso provides the same set of commands for a host to tightly control the device\nzones."),(0,o.kt)("p",null,"All matters of host-side software support and optimization that are discussed\non this site apply to host-aware devices when these devices are used similarly\nto host-managed devices."),(0,o.kt)("admonition",{title:"ZonedStorage.io focuses on host-managed devices",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The documentation pages on this site focus on host-managed devices. Host-aware\ndevices that are used as regular devices are not discussed.")),(0,o.kt)("h2",{id:"zone-types"},"Zone Types"),(0,o.kt)("p",null,"The standards governing the characteristics and operation of zoned storage\ndevices define three different types of zones."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conventional zones")," typically occupy a very small percentage of the overall\ncapacity of a device. Accesses to conventional zones are similar to those of\nregular block devices (that is: conventional zones accept random write\noperations and are usually used to store metadata). Conventional zones do not\nhave a write pointer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sequential-write-required zones")," accept random read commands and perform\ncomparably to random read commands on standard block devices. However, these\nzones are subject to the zoned storage sequential write constraint and thus\ncan only be written sequentially. Any write command must indicate a start\nsector that is aligned with the zone write pointer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sequential-write-preferred zones")," accept both random read and random write\ncommands. However, unlike conventional zones, sequential-write-preferred zones\nhave a write pointer and can be used exactly like sequential-write-required\nzones."))),(0,o.kt)("p",null,"In general, sequential-write-required and sequential-write-preferred zones are\ncollectively referred to as sequential zones."),(0,o.kt)("p",null,"The availability of each type of zone on a particular zoned device depends on\nthe device governing standard and the device zone model. Conventional zones are\noptional and can be found on both host-managed and host-aware devices.\nSequential write required zones are only defined for host-managed devices and\nsequential write preferred zones are only defined for host-aware devices."),(0,o.kt)("h2",{id:"zone-management-commands"},"Zone Management Commands"),(0,o.kt)("p",null,"Zoned storage devices also provide zone discovery and management commands as\nextensions of the device basic command set (which is similar to the set of\ncommands defined for regular block devices)."),(0,o.kt)("p",null,"Host software can discover the zone organization of a zoned storage device using\nthe ",(0,o.kt)("strong",{parentName:"p"},"REPORT ZONES")," command. This command returns a list of zone descriptors\nthat indicate the starting block, size, type, and state of a zone. For\nsequential write required zones and sequential write preferred zones, a zone\ndescriptor also indicates the current position of the zone write pointer. This\ninformation allows host software to implement sequential write streams to zones."),(0,o.kt)("p",null,"Zones can be managed using the following commands."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"RESET ZONE WRITE POINTER")," is the command that host software use to\nreset the location of a zone write pointer to the beginning of the zone. After\nthis command is executed, all data that was written to the zone is lost and\ncannot be accessed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"OPEN ZONE")," A zoned block device may require internal resources (for\nexample, persistent zone resources) to maintain each zone. Insufficient\nresources may result in degraded functionality (for example, reduced\nperformance or increased power consumption). The ",(0,o.kt)("em",{parentName:"p"},"OPEN ZONE")," command allows an\napplication to explicitly open a zone, and indicates to the device that the\nresources necessary for writing the zone should remain available until the zone\nis fully written or until the zone is closed by using the ",(0,o.kt)("em",{parentName:"p"},"CLOSE ZONE"),"\ncommand. The performance benefits achieved by using this command depend upon\nthe device media type and implementation of zone management.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CLOSE ZONE")," allows an application to explicitly close a zone that was\nopened using the ",(0,o.kt)("em",{parentName:"p"},"OPEN ZONE")," command. ",(0,o.kt)("em",{parentName:"p"},"CLOSE ZONE")," indicates to the device\nthat the resources used for writing to the zone are no longer necessary and\ncan be released.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"FINISH ZONE")," allows an application to move a zone's write pointer to the\nend of the zone, preventing any further write operations to the zone until it\nis reset."))),(0,o.kt)("h2",{id:"zone-states-and-state-transitions"},"Zone States and State Transitions"),(0,o.kt)("p",null,"Each sequential zone of a zoned storage device has a state attribute that\nindicates the usage of the blocks within the zone and the device resources that\nzone uses. The following states are defined."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Empty")," None of the blocks within the zone contain valid data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Full")," All of the blocks within the zone have been written or the zone has\nbeen finished by the host using the ",(0,o.kt)("em",{parentName:"p"},"FINISH ZONE")," command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Implicit Open")," Some blocks in the zone have recently been written by the\nhost. The zone is using device internal resources.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Explicit Open")," The zone was allocated device internal resources by the host\nsoftware through the execution of an ",(0,o.kt)("em",{parentName:"p"},"OPEN ZONE")," command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Closed")," The device internal resources used by a zone were freed explicitly\nby the host through the execution of a ",(0,o.kt)("em",{parentName:"p"},"CLOSE ZONE")," command, or the device\nimplicitly freed the internal resources assigned to the zone to serve write\noperations targetting different zones.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Read Only")," The zone can only be read. This state generally corresponds to a\ndefective state of the device, e.g. for a hard-disk, the zone is stored on a\nplatter with a broken write head .")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Offline")," The zone cannot be read nor written. This state generally\ncorresponds to a defective state of the device, e.g. the storage media for the\nzone is not operating anymore."))),(0,o.kt)("p",null,"The execution of zone management commands and of write operations may change the\nstate of a zone. The most common transitions defined by all zoned storage device\nstandards are shown in the figure below."),(0,o.kt)(i.Z,{src:"zone-state-machine.svg",title:"Zone State Transitions Overview",mdxType:"Image"}),(0,o.kt)("p",null,"Transition into the ",(0,o.kt)("em",{parentName:"p"},"read-only")," or ",(0,o.kt)("em",{parentName:"p"},"offline")," states happen generally after a\ndevice internal event causing defects. Zones that are in either state cannot\nreturn to a fully functional state."),(0,o.kt)("p",null,"For all other states, the execution of a ",(0,o.kt)("em",{parentName:"p"},"RESET ZONE")," command always changes the\nzone state to ",(0,o.kt)("em",{parentName:"p"},"empty"),", indicating that none of the blocks in the zone contain\nvalid data."),(0,o.kt)("p",null,"A write operation into a zone with the ",(0,o.kt)("em",{parentName:"p"},"empty")," state change the zone state to\n",(0,o.kt)("em",{parentName:"p"},"implicit open"),". Writing all blocks of an implicitly opened zone changes its\nstate to ",(0,o.kt)("em",{parentName:"p"},"full"),". A ",(0,o.kt)("em",{parentName:"p"},"FINISH ZONE")," command also changes a zone state to full."),(0,o.kt)("p",null,"An empty or implicitly open zone can be transitioned to the ",(0,o.kt)("em",{parentName:"p"},"explicitly open"),"\nstate using the ",(0,o.kt)("em",{parentName:"p"},"EXPLICIT OPEN")," command. Conversely, implicitly or explicitly\nopened zoned can be transitioned to the ",(0,o.kt)("em",{parentName:"p"},"closed")," state using the ",(0,o.kt)("em",{parentName:"p"},"CLOSE ZONE"),"\ncommand."),(0,o.kt)("h2",{id:"zone-resources-limits"},"Zone Resources Limits"),(0,o.kt)("p",null,"A zoned storage device implementation may require the allocation of internal\nresources (e.g. a write buffer) to execute write operations into zones.\nFurthermore, the storage media characteristics of the device may also limit the\namount of zones that can be in a partially written state."),(0,o.kt)("h3",{id:"open-zones-limit"},"Open Zones Limit"),(0,o.kt)("p",null,"Limitations on the total amount of internal resources available to a zoned\nstorage device for processing write operations may impose a limit on the total\nnumber of zones that can simultaneously be in the implicit open or explicit open\nstate (open zones). If such limit exists, the zoned storage device may fail write\nand ",(0,o.kt)("em",{parentName:"p"},"OPEN ZONE")," commands to avoid exceeding the maximum number of open zones\nallowed."),(0,o.kt)("p",null,"This limit does not affect read operations."),(0,o.kt)("h3",{id:"active-zones-limit"},"Active Zones Limit"),(0,o.kt)("p",null,"Any zone in the implicit open, explicit open or closed state is defined as an\nactive zone and correspond to any zone that is being written or that has been\nonly partially written. A zoned storage device may impose a limit on the maximum\nnumber of zones that can be active. This limit is always equal or larger than\nthe limit on the maximum number of open zones."),(0,o.kt)("p",null,"While the maximum number of open zones of a zoned storage device only limits the\nnumber of zones that a host software can simultaneously write, the maximum\nnumber of active zones imposes a limit on the number of zones that it can choose\nfor storing data. If the maximum number of active zones is reached, the host\nsoftware must either reset or finish some active zones before being able to\nchoose other zones for storing data."),(0,o.kt)("p",null,"Similar to the limit on the maximum number of open zones, a limit on the\nmaximum number of active zones does not affect read operations. Any zone that is\nnot offline can always be accessed for reading regardless of the current number\nof open and active zones."),(0,o.kt)("h2",{id:"zone-append"},"Zone Append"),(0,o.kt)("p",null,"The sequential write constraint imposed by the sequential write required zones\nof host-managed devices has implications on the host IO stack. Namely, all\nwrite commands directed at a sequential zone must not be reordered before they\nare received by the device and executed. Otherwise, the sequential write\nrequirement would not be met, resulting in write errors. However, the complexity\nof host IO stacks and the lack of ordering guarantees with some storage adapters\nand command transports may not allow an implementation to order write commands\nas required for sequential zones."),(0,o.kt)("p",null,"Host software can avoid write errors by limiting the number of write commands\noutstanding per zone to one. But this can result in poor performance, especially\nfor workloads issuing mostly small write operations."),(0,o.kt)("p",null,"To avoid this problem, some zoned storage devices define the ",(0,o.kt)("em",{parentName:"p"},"Zone Append"),"\ncommand. A zone append command is a write operation that specifies the first\nlogical block of a zone as the write position. When executing the command, the\ndevice write the data within the zone indicated, but do so at the current zone\nwrite pointer position. This change in the write position is automatic and the\neffective write position for the data is indicated to the host through the\ncommand completion information. This mechanism allows a host to simultaneously\nsubmit several zone append operations and let the device process these in any\norder."),(0,o.kt)("p",null,"The figure below illustrates the differences between regular write operations\nand zone append write operations."),(0,o.kt)(i.Z,{src:"intro-zone-append.png",title:"Regular Writes and Zone Append Writes",mdxType:"Image"}),(0,o.kt)("p",null,"In the example above, the host must issue to the same zone three different\nwrite operations for data A (4KB), B (8KB), and C (16KB). Using regular write\ncommands, this can be done safely only at a write queue depth of 1 per zone,\nthat is, the host must wait for the completion of an outstanding write\noperation before issuing the next write request. For each write request,\nthe write position must be equal to the zone write pointer position. This\nresults in the data being stored in the zone in the same order as issued."),(0,o.kt)("p",null,"Using zone append write operations, the write queue depth constraint is removed\nand the host can issue all three write requests simultaneously. Upon completion\nof all write requests, the zone write pointer position is identical to the\nprevious case as the total amount of data written is equal. However, the\nlocation of the written data within the zone may not correspond to the\nhost command issuing order as commands may have been reordered on their way to\nthe device. The host can discover the effective write position of each request\nthrough the zone append completion information."))}f.isMDXComponent=!0},5:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},2448:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},8244:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/qemu-151192c8ad3d711f862c27b8b9e5bec4.png"},308:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a="data:image/vnd.microsoft.icon;base64,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WP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU///////htqf/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/9Obh///+/v/cp5P/0YBZ/9GAWW/RgFka0YBZ/dGAWf/RgFn/9uvo/+S+sf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgVv/5sO4//Xo5P/x4Nv/8d/a//Tn4//v2tT/9enm//Xp5v/ShWL/0YBZ/9GAWf/RgFn/0YBZ/9eWe//8+fj/26GL/9GAWf/RgFn90YBZGtGAWQDRgFm20YBZ/9GAWf/fr53/+vTy/9SMbP/RgFn/0YBZ/9GAWf/RgFj/0YBY/9GAWP/RgFj/0YBZ/9SLa//UjG3/0YFc/9GAWP/ThmT/9uvo/+3Vzv/RgFn/0YBZ/9GAWf/RgFn/8d7Y/+zSyf/RgFn/0YBZ/9GAWbbRgFkAAAAAANGAWT/RgFn/0YBZ/9GAWf/w29T/8d/Z/9GBW//RgFn/04hm//nx7//69PL/+vTy//r08v/69PL/+vTy//r08v/69PL/+vTy//r08v/8+Pf//////9uijv/RgFn/0YBZ/+S+sf/58u//1Ipp/9GAWf/RgFn/0YBZPwAAAAAAAAAA0YBZANGAWarRgFn/0YBZ/9OJaP/37On/7dTM/9GBW//Rglz/2Z6H/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/2Z+I/9mfiP/Zn4j/04hn/9GAWf/gsqL//Pf2/9uhi//RgFn/0YBZ/9GAWarRgFkAAAAAAAAAAAAAAAAA0YBZEtGAWebRgFn/0YBZ/9aRdP/37er/8d7Y/9SLa//RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgVv/5sO4//z39v/dqZb/0YBZ/9GAWf/RgFnm0YBZEgAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZNdGAWfrRgFn/0YBZ/9SKav/w3db/+vTy/+K5qv/Sgl3/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26SP//Tm4f/47uv/2Z2G/9GAWf/RgFn/0YBZ+tGAWTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZUtGAWfrRgFn/0YBZ/9GAWv/gs6L/+O7r//rz8f/rz8f/3aqY/9WNbf/RgVv/0YFa/9OGYv/aoIr/5sK2//bq5v/89/b/6Mi9/9KFYv/RgFn/0YBZ/9GAWfrRgFlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZNdGAWebRgFn/0YBZ/9GAWf/RgVv/3qya/+3Wzv/47+z//vz8//36+f/9+ff//vz8//v18//x3tj/47ut/9OIZv/RgFn/0YBZ/9GAWf/RgFnm0YBZNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZEtGAWarRgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ThWH/1pJ1/9aUeP/UiWf/0YBY/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZqtGAWRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZANGAWT/RgFm20YBZ/dGAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn90YBZttGAWT/RgFkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGAWQDRgFka0YBZb9GAWa7RgFnf0YBZ/9GAWf/RgFn/0YBZ/9GAWd/RgFmu0YBZb9GAWRrRgFkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8="},51:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},1485:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/zone-state-machine-de3050d6565c6840b72bd055dbe01f3b.svg"},7356:(e,t,n)=>{var a={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":2448,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./qemu.png":8244,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zone-state-machine.svg":1485,"./zs-logo.ico":9972,"./zs-logo.png":51};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=7356}}]);