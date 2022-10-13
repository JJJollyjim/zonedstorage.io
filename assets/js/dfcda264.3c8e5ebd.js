"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[2098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||c[u]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},a="Frequently Asked Questions",s={unversionedId:"faq/faq",id:"faq/faq",title:"Frequently Asked Questions",description:"Can I change the size of the zones of a device?",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/docs/faq/",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Ubuntu",permalink:"/docs/distributions/ubuntu"}},l={},p=[{value:"<strong>Can I change the size of the zones of a device?</strong>",id:"can-i-change-the-size-of-the-zones-of-a-device",level:3},{value:"<strong>With a host managed drive, how do I change the position of a zone write pointer?</strong>",id:"with-a-host-managed-drive-how-do-i-change-the-position-of-a-zone-write-pointer",level:3},{value:"<strong>How do I rewind the position of a zone write pointer?</strong>",id:"how-do-i-rewind-the-position-of-a-zone-write-pointer",level:3},{value:"<strong>How do I partially rewind the position of a zone write pointer?</strong>",id:"how-do-i-partially-rewind-the-position-of-a-zone-write-pointer",level:3},{value:"<strong>Can I create partitions on my host managed device?</strong>",id:"can-i-create-partitions-on-my-host-managed-device",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h3",{id:"can-i-change-the-size-of-the-zones-of-a-device"},(0,i.kt)("strong",{parentName:"h3"},"Can I change the size of the zones of a device?")),(0,i.kt)("p",null,"The size of the zones of a physical zoned device are fixed at manufacturing\ntime by the device vendor. For a particular device model, it is not possible\nto change the zone size."),(0,i.kt)("p",null,"Device emulation software such as\n",(0,i.kt)("a",{parentName:"p",href:"/docs/tools/tcmu-runner"},"tcmu-runner")," allow defining zoned block\ndevices with different zone sizes. While this does not replace the ability to\nchange an existing device zone size, such solution allows exploring the impact\nof the device zone size on the application being developed."),(0,i.kt)("h3",{id:"with-a-host-managed-drive-how-do-i-change-the-position-of-a-zone-write-pointer"},(0,i.kt)("strong",{parentName:"h3"},"With a host managed drive, how do I change the position of a zone write pointer?")),(0,i.kt)("p",null,"The write pointer position of a zone changes automatically in response to the\nfollowing operations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A write operation (regular write command, write same command) issued with\na starting LBA equal to the zone write pointer current location or a zone\nappend write operation issued with a starting LBA equal to the zone start LBA:\nthe write pointer position advances by an amount of LBAs written."),(0,i.kt)("li",{parentName:"ul"},"A zone reset operation: the write pointer position of the target zone(s)\nis reset to the start of the zone."),(0,i.kt)("li",{parentName:"ul"},"A zone finish operation: the write pointer position of the target zone(s)\nis changed an invalid value with the zone condition cnahed to FULL."),(0,i.kt)("li",{parentName:"ul"},"A device low level format operation: the write pointer of all zones is reset.")),(0,i.kt)("p",null,"No other command, operation or user action can change the position of a zone\nwrite pointer to any position within the zone."),(0,i.kt)("h3",{id:"how-do-i-rewind-the-position-of-a-zone-write-pointer"},(0,i.kt)("strong",{parentName:"h3"},"How do I rewind the position of a zone write pointer?")),(0,i.kt)("p",null,"As mentioned in the previous question reply, resetting a zone will rewind the\nzone write pointer position to the first LBA of the zone. A low level device\nformat operation will also reset all zones."),(0,i.kt)("h3",{id:"how-do-i-partially-rewind-the-position-of-a-zone-write-pointer"},(0,i.kt)("strong",{parentName:"h3"},"How do I partially rewind the position of a zone write pointer?")),(0,i.kt)("p",null,"This is not possible. A zone write pointer can only be moved back to the start\nLBA of the zone using a reset write pointer command."),(0,i.kt)("h3",{id:"can-i-create-partitions-on-my-host-managed-device"},(0,i.kt)("strong",{parentName:"h3"},"Can I create partitions on my host managed device?")),(0,i.kt)("p",null,"Kernel versions 4.10 to 5.4 include support for partition tables on host managed\nzoned block devices. However, partitioning tools such as"),(0,i.kt)("a",{href:"https://gparted.org/",target:"_blank"},"*gparted*")," generally used to create GUID partition tables do not support host managed zoned devices that do not have a conventional zone at the beginning and end of the LBA space. If the first zone and last zone of the device are sequential write required zones, writing the primary and secondary GPT header and table entries will likely fail, resulting in an incorrect or corrupted partition table that will not be recognized by the kernel block layer.",(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Linux","\xae"," kernel mandates that partitions of a zoned block device be zone\naligned. That is, the start sector of all device partitions must be the start\nsector of a zone and the end sector of the partitions must be the last sector of\na zone.")),(0,i.kt)("p",null,"Support for partition tables on host managed zoned block devices has been\nremoved from the kernel with version 5.5.0. Using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/linux/dm#dm-linear"},(0,i.kt)("em",{parentName:"a"},"dm-linear"))," device mapper target to logically\nisolate smaller portions of a host managed device is the replacement and\npreferred solution."),(0,i.kt)("p",null,"More information on partition support can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/linux/part"},"here"),"."))}c.isMDXComponent=!0}}]);