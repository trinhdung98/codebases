(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{TD4Q:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("dDsW"),n=a("UWC4");const c=(e,t)=>{switch(t){case n.Ub.active_channels:case n.Ub.created_channels:return e.formatMessage({id:"chat.analytics.unit.channels"});case n.Ub.messages:case n.Ub.messages_per_user:return e.formatMessage({id:"chat.analytics.unit.messages"});case n.Ub.created_users:case n.Ub.deactivated_users:case n.Ub.deleted_users:case n.Ub.message_senders:case n.Ub.message_viewers:return e.formatMessage({id:"chat.analytics.unit.users"});case"channel_member":return e.formatMessage({id:"chat.analytics.unit.members"});default:return"all"}},i=()=>{const e=Object(s.a)();return{getMetricMessages:t=>Object.keys(n.Ub).includes(t)||"channel_member"===t?{header:e.formatMessage({id:`chat.analytics.${t}.header`,defaultMessage:t}),description:e.formatMessage({id:`chat.analytics.${t}.description`,defaultMessage:t}),detail:e.formatMessage({id:`chat.analytics.${t}.detail.description`,defaultMessage:t}),unit:c(e,t)}:void 0}}},qyVy:function(e,t,a){"use strict";a.r(t),a.d(t,"getDateValue",(function(){return v}));a("3bBZ");var s=a("q1tI"),n=a("dDsW"),c=a("/MKj"),i=a("vOnD"),r=a("JsuU"),o=a("gQMU"),l=a.n(o),d=a("b2r9"),m=a("UWC4"),p=a("6889"),u=a("TD4Q"),b=a("nKUr");const g=i.default.div.withConfig({displayName:"analyticsExportDialog__ExportTargetDate",componentId:"sc-1j58vtb-0"})(["margin-top:8px;display:flex;div[role='combobox']{margin-right:8px;}"]),h=i.default.div.withConfig({displayName:"analyticsExportDialog__ExportTarget",componentId:"sc-1j58vtb-1"})(["position:relative;padding:0 35px 0 0;margin-bottom:30px;.aaSegmentDropdown{margin-top:8px;}"]),y=i.default.div.withConfig({displayName:"analyticsExportDialog__ExportTargetRemove",componentId:"sc-1j58vtb-2"})(["position:absolute;top:10px;right:0;"]),j=i.default.div.withConfig({displayName:"analyticsExportDialog__ExportAddAction",componentId:"sc-1j58vtb-3"})(["border-top:1px solid ",";margin-top:20px;padding:20px 0;"],Object(r.cssVariables)("neutral-3")),x=Object.keys(m.Ub).concat("channel_member"),D=Object.keys(m.Xb),f={label:"None",value:""},_={[m.Ub.created_channels]:[f,{value:m.Wb.custom_channel_type,label:"Custom channel types"}],[m.Ub.messages]:[f,{value:m.Wb.custom_message_type,label:"Custom message types"},{value:m.Wb.custom_channel_type,label:"Custom channel types"},{value:`${m.Wb.custom_channel_type},${m.Wb.custom_message_type}`,label:"Both custom message & channel types"}]},v=(e,t)=>{switch(t.diff(e,"days")){case 6:return r.DateRangePickerValue.Last7Days;case 13:return r.DateRangePickerValue.Last14Days;case 29:return r.DateRangePickerValue.Last30Days;case 89:return r.DateRangePickerValue.Last90Days;default:return r.DateRangePickerValue.Custom}};t.default=({isFetching:e,dialogProps:t,onClose:a})=>{const o=Object(n.a)(),O=Object(c.f)(),{getMetricMessages:w}=Object(u.a)(),T=Object(s.useRef)(void 0),[U,C]=Object(s.useState)([]),{startDate:M,endDate:k,metricType:E}=t;Object(s.useEffect)(()=>{T.current={metricType:"",date:v(M,k),startDate:M,endDate:k,timeDimension:m.Xb.daily,segments:f},C([{...T.current,metricType:E||""}])},[E,M,k]);const S=e=>t=>{const a=[...U];a[e]={...U[e],timeDimension:t},C(a)},I=e=>t=>{const a=[...U];a[e]={...U[e],segments:t},C(a)},R=e=>t=>{const a=[...U];a[e]={...U[e],metricType:t},C(a)},N=e=>(t,a)=>{const s=[...U];s[e]={...U[e],...a,date:t},C(s)},W=e=>({start:t,end:a})=>{const s=[...U];s[e]={...U[e],startDate:t,endDate:a},C(s)},P=e=>()=>{const t=[...U];t.splice(e,1),C(t)},V=(e,t)=>{const a=Object(b.jsx)(r.DateRangePicker,{value:e.date,dateRange:{startDate:e.startDate,endDate:e.endDate},onChange:N(t),minimumNights:7,maximumNights:186,fullWidth:!0});return e.metricType===m.Ub.active_channels||e.metricType===m.Ub.message_senders?Object(b.jsxs)(g,{children:[Object(b.jsx)(r.Dropdown,{items:D,selectedItem:e.timeDimension,onItemSelected:S(t),itemToString:e=>l()(e),width:"120px"}),e.timeDimension===m.Xb.daily?a:Object(b.jsx)(p.Nb,{wrapperStyles:Object(i.css)(["flex:1;margin-left:10px;"]),targetStyles:Object(i.css)(["box-shadow:none;"]),placement:"bottom-start",start:e.startDate,end:e.endDate,onChange:W(t),usePortal:!1})]}):Object(b.jsx)(g,{children:a})};return Object(b.jsx)(p.K,{size:"small",onClose:a,title:o.formatMessage({id:"chat.analyticsExportDialog.title"}),description:Object(b.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:o.formatMessage({id:"chat.analyticsExportDialog.description"})}),body:Object(b.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=!0;var a;U.forEach(e=>{if(""===e.metricType)return r.toast.warning({message:"Please select metric."}),t=!1,!1}),t&&(a=U.map(e=>({...e,segments:e.segments.value})),O(d.a.exportAnalyticsRequest(a)))},children:[Object(b.jsxs)(p.R,{children:[U.length>0&&U.map((e,t)=>{var a,s;return Object(b.jsxs)(h,{"data-test-id":"ExportTarget",children:[Object(b.jsx)(r.Dropdown,{items:x,selectedItem:e.metricType,itemToString:e=>{var t,a;return null!=(t=null==(a=w(e))?void 0:a.header)?t:""},onItemSelected:R(t),placeholder:null!=(a=null==(s=w(e.metricType))?void 0:s.header)?a:"Select data",width:"100%"}),e.metricType===m.Ub.created_channels||e.metricType===m.Ub.messages&&Object(b.jsx)(r.Dropdown,{items:_[e.metricType],selectedItem:e.segments,onItemSelected:I(t),className:"aaSegmentDropdown",itemToString:e=>e.label,width:"100%"}),e.metricType&&V(e,t),t>0&&Object(b.jsx)(y,{children:Object(b.jsx)(p.Ib,{onClick:P(t)})})]},`selectedTarget_${e.metricType}_${t}`)}),Object(b.jsx)(j,{children:Object(b.jsx)(r.Button,{type:"button",buttonType:"tertiary",icon:"plus",onClick:()=>{U.length<x.length?C([...U,T.current]):r.toast.warning({message:"No additional data available."})},children:"Add metric"})})]}),Object(b.jsxs)(p.Q,{children:[Object(b.jsx)(p.n,{type:"button",onClick:a,children:"Cancel"}),Object(b.jsx)(p.x,{type:"submit",disabled:e,isFetching:e,"data-test-id":"DialogConfirmButton",children:"Export"})]})]})})}}}]);
//# sourceMappingURL=41.js.map?v=274f61f1f0db232a4715