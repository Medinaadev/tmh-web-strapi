import{r as m,u as x,b_ as T,b$ as v,j as h}from"./strapi-CGTkTAmZ.js";const R=["years","months","days","hours","minutes","seconds"],y=m.forwardRef(({timestamp:t,customIntervals:o=[],...a},i)=>{const{formatRelativeTime:c,formatDate:l,formatTime:u}=x(),e=T({start:t,end:Date.now()}),s=R.find(r=>e[r]>0&&Object.keys(e).includes(r)),d=v(t)?-e[s]:e[s],n=o.find(r=>e[r.unit]<r.threshold),f=n?n.text:c(d,s,{numeric:"auto"});return h.jsx("time",{ref:i,dateTime:t.toISOString(),role:"time",title:`${l(t)} ${u(t)}`,...a,children:f})});export{y as R};
