import React, { useState, useEffect, useMemo } from "react";

const ui = {
  primary: "#111827", secondary: "#374151", muted: "#6b7280", subtle: "#9ca3af",
  border: "#e5e7eb", panel: "#f8fafc", surface: "#ffffff", info: "#3b82f6",
  success: "#10b981", warning: "#f59e0b", danger: "#ef4444"
};

const FALLBACK = [
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Orlando",name:"Derwin Martinez",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Michael Herring",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Miami",name:"Maui Cruz",isactive:true,total_revenue:255.71,booked_revenue:"",avg_ticket:255.71,jobs_per_day:"",aov_completion_rate:"",total_repairs:1,completed_jobs_w_invoice:1,repairs_per_job:1,cancel_rate:0,completed_jobs:1,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Eddie Catalan",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:"",completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Austin",name:"Kevin Camacho",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Dustin Morgan",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"San Antonio",name:"Joseph Gonzalez",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Nashville",name:"Kemper Stanley",isactive:true,total_revenue:1752.34,booked_revenue:"",avg_ticket:1752.34,jobs_per_day:"",aov_completion_rate:"",total_repairs:6,completed_jobs_w_invoice:1,repairs_per_job:6,cancel_rate:50,completed_jobs:1,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Atlanta",name:"Josh Horowitz",isactive:true,total_revenue:413.04,booked_revenue:"",avg_ticket:413.04,jobs_per_day:"",aov_completion_rate:"",total_repairs:2,completed_jobs_w_invoice:1,repairs_per_job:2,cancel_rate:0,completed_jobs:1,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Houston",name:"Tommy Moore",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Houston",name:"Edgar Khachaturyan",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Atlanta",name:"Dominique Simpson",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Jiovanny Perez",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Austin",name:"Richard Forcey",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Austin",name:"Mario Gonzalez",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Pablo Chavez",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Nashville",name:"Clint Hyde",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-19 00:00:00",week:"2026-03-19 00:00:00",month:"2026-03-01 00:00:00",market:"Houston",name:"Jorge Montenegro",isactive:true,total_revenue:0,booked_revenue:"",avg_ticket:"",jobs_per_day:"",aov_completion_rate:"",total_repairs:0,completed_jobs_w_invoice:0,repairs_per_job:"",cancel_rate:100,completed_jobs:0,days_worked:""},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Atlanta",name:"Dominique Simpson",isactive:true,total_revenue:3193.11,booked_revenue:2301.7,avg_ticket:638.622,jobs_per_day:5,aov_completion_rate:91.5,total_repairs:10,completed_jobs_w_invoice:5,repairs_per_job:2,cancel_rate:8,completed_jobs:5,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Nashville",name:"Kemper Stanley",isactive:true,total_revenue:2840.5,booked_revenue:2100.0,avg_ticket:710.125,jobs_per_day:4,aov_completion_rate:93.2,total_repairs:8,completed_jobs_w_invoice:4,repairs_per_job:2,cancel_rate:5,completed_jobs:4,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Miami",name:"Maui Cruz",isactive:true,total_revenue:1820.4,booked_revenue:1600.0,avg_ticket:455.1,jobs_per_day:4,aov_completion_rate:88.0,total_repairs:7,completed_jobs_w_invoice:4,repairs_per_job:1.75,cancel_rate:6,completed_jobs:4,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Houston",name:"Tommy Moore",isactive:true,total_revenue:2200.0,booked_revenue:1980.0,avg_ticket:550.0,jobs_per_day:4,aov_completion_rate:90.0,total_repairs:9,completed_jobs_w_invoice:4,repairs_per_job:2.25,cancel_rate:7,completed_jobs:4,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Dallas",name:"Dustin Morgan",isactive:true,total_revenue:1950.0,booked_revenue:1800.0,avg_ticket:487.5,jobs_per_day:4,aov_completion_rate:92.0,total_repairs:8,completed_jobs_w_invoice:4,repairs_per_job:2,cancel_rate:4,completed_jobs:4,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Austin",name:"Kevin Camacho",isactive:true,total_revenue:1760.0,booked_revenue:1600.0,avg_ticket:440.0,jobs_per_day:4,aov_completion_rate:89.0,total_repairs:7,completed_jobs_w_invoice:4,repairs_per_job:1.75,cancel_rate:6,completed_jobs:4,days_worked:1},
  {day:"2026-03-18 00:00:00",week:"2026-03-12 00:00:00",month:"2026-03-01 00:00:00",market:"Atlanta",name:"Josh Horowitz",isactive:true,total_revenue:1640.0,booked_revenue:1500.0,avg_ticket:410.0,jobs_per_day:4,aov_completion_rate:87.5,total_repairs:7,completed_jobs_w_invoice:4,repairs_per_job:1.75,cancel_rate:7,completed_jobs:4,days_worked:1},
];

const fmt$ = v => v == null || v === "" ? "—" : "$" + Number(v).toLocaleString("en-US", {minimumFractionDigits:0,maximumFractionDigits:0});
const fmtN = (v, d=1) => v == null || v === "" ? "—" : Number(v).toFixed(d);
const n = v => parseFloat(v) || 0;
const normGrain = v => v ? String(v).slice(0,10) : null;

function MiniBar({ value, max }) {
  const pct = max > 0 ? Math.min(100, (value/max)*100) : 0;
  return (
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:48,height:5,background:ui.border,borderRadius:3,overflow:"hidden",flexShrink:0}}>
        <div style={{width:`${pct}%`,height:"100%",background:ui.info,borderRadius:3}}/>
      </div>
      <span>{fmt$(value)}</span>
    </div>
  );
}

function TechCard({ r, maxRev }) {
  const rankBg = r.rank===1?"#fef9c3":r.rank===2?"#f1f5f9":r.rank===3?"#fdf3e7":ui.surface;
  const badge  = r.rank===1?"🥇":r.rank===2?"🥈":r.rank===3?"🥉":`#${r.rank}`;
  const cv = r.aov_completion_rate;
  const compColor = cv>=0.9?ui.success:cv>=0.75?ui.warning:ui.danger;
  return (
    <div style={{background:rankBg,border:`1px solid ${ui.border}`,borderRadius:10,padding:"12px 14px",marginBottom:8}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontWeight:700,fontSize:15,minWidth:28}}>{badge}</span>
          <div>
            <div style={{fontWeight:700,fontSize:14,color:ui.primary}}>{r.name}</div>
            <span style={{fontSize:11,background:ui.panel,border:`1px solid ${ui.border}`,borderRadius:5,padding:"1px 6px",color:ui.muted}}>{r.market}</span>
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:13,fontWeight:700,color:ui.info}}>{fmt$(r.avg_ticket)}</div>
          <div style={{fontSize:10,color:ui.muted}}>Avg Ticket</div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px 6px"}}>
        {[
          ["Overall Rev", fmt$(r.total_revenue)],
          ["Completed", r.completed_jobs],
          ["Jobs/Day", fmtN(r.jobs_per_day)],
          ["AOV Comp%", <span style={{color:compColor}}>{cv!=null?(n(cv)*100).toFixed(1)+"%":"—"}</span>],
          ["Repairs/Job", fmtN(r.repairs_per_job)],
        ].map(([label,val])=>(
          <div key={label} style={{background:ui.panel,borderRadius:6,padding:"5px 7px"}}>
            <div style={{fontSize:10,color:ui.muted,marginBottom:2}}>{label}</div>
            <div style={{fontSize:12,fontWeight:600,color:ui.secondary}}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [rawData, setRawData]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [dataSource, setDataSource] = useState("loading");
  const [grain, setGrain]       = useState("month");
  const [period, setPeriod]     = useState(null);   // selected period value (normalized date string)
  const [market, setMarket]     = useState("All");
  const [search, setSearch]     = useState("");
  const [sortKey, setSortKey]   = useState("avg_ticket");
  const [sortDir, setSortDir]   = useState("desc");
  const [activeOnly, setActiveOnly] = useState(true);
  const [vw, setVw]             = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = vw < 640;
  const isTablet = vw >= 640 && vw < 1024;

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/nubrakes-analytics/NuBrakes-Copilot@main/data/fact_nubrakes_technician_daily.json")
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(d => { const arr = Array.isArray(d)?d:[]; setRawData(arr.length?arr:FALLBACK); setDataSource(arr.length?"live":"fallback"); })
      .catch(() => { setRawData(FALLBACK); setDataSource("fallback"); })
      .finally(() => setLoading(false));
  }, []);

  const grainKey = grain==="day"?"day":grain==="week"?"week":"month";

  // All unique sorted period values for current grain
  const periodOptions = useMemo(() => {
    const vals = [...new Set(rawData.map(r => normGrain(r[grainKey])).filter(Boolean))].sort();
    return vals;
  }, [rawData, grainKey]);

  // Auto-select latest when grain or data changes
  useEffect(() => {
    if (periodOptions.length) setPeriod(periodOptions.at(-1));
  }, [periodOptions]);

  const selectedPeriod = period || periodOptions.at(-1) || null;

  // Format period option labels nicely
  const fmtPeriodLabel = (val) => {
    if (!val) return "";
    if (grain === "day")   return new Date(val+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
    if (grain === "week")  return "Week of " + new Date(val+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
    if (grain === "month") return new Date(val+"T00:00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});
    return val;
  };

  const markets = useMemo(() => {
    const s = new Set(rawData.map(r=>r.market).filter(Boolean));
    return ["All",...Array.from(s).sort()];
  }, [rawData]);

  const aggregated = useMemo(() => {
    const filtered = rawData.filter(r => normGrain(r[grainKey])===selectedPeriod && (market==="All"||r.market===market));
    const map = {};
    filtered.forEach(r => {
      const k = `${r.name}||${r.market}`;
      if (!map[k]) map[k] = {name:r.name,market:r.market,isactive:r.isactive,_rows:[]};
      map[k]._rows.push(r);
    });
    return Object.values(map).map(({_rows,...base}) => {
      const tot_rev = _rows.reduce((s,r)=>s+n(r.total_revenue),0);
      const bkd_rev = _rows.reduce((s,r)=>s+n(r.booked_revenue),0);
      const tot_rep = _rows.reduce((s,r)=>s+n(r.total_repairs),0);
      const cmp_inv = _rows.reduce((s,r)=>s+n(r.completed_jobs_w_invoice),0);
      const cmp_job = _rows.reduce((s,r)=>s+n(r.completed_jobs),0);
      const days    = _rows.reduce((s,r)=>s+n(r.days_worked),0);
      return {
        ...base, total_revenue:tot_rev, booked_revenue:bkd_rev, total_repairs:tot_rep,
        completed_jobs_w_invoice:cmp_inv, completed_jobs:cmp_job, days_worked:days,
        avg_ticket:     cmp_inv ? tot_rev/cmp_inv : null,
        jobs_per_day:   days    ? cmp_job/days    : null,
        aov_completion_rate: bkd_rev ? tot_rev/bkd_rev : null,
        repairs_per_job: cmp_inv ? tot_rep/cmp_inv : null,
      };
    });
  }, [rawData, grainKey, selectedPeriod, market]);

  const rankedData = useMemo(() => {
    let rows = [...aggregated];
    if (activeOnly) rows = rows.filter(r=>r.isactive);
    if (search.trim()) rows = rows.filter(r=>r.name.toLowerCase().includes(search.toLowerCase()));
    rows.sort((a,b)=>sortDir==="desc"?n(b[sortKey])-n(a[sortKey]):n(a[sortKey])-n(b[sortKey]));
    return rows.map((r,i)=>({...r,rank:i+1}));
  }, [aggregated, activeOnly, search, sortKey, sortDir]);

  const maxRev = useMemo(()=>Math.max(...rankedData.map(r=>n(r.total_revenue)),1),[rankedData]);

  const handleSort = key => {
    if (sortKey===key) setSortDir(d=>d==="desc"?"asc":"desc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  const SortIcon = ({k}) => sortKey!==k
    ? <span style={{color:ui.subtle,fontSize:9}}> ↕</span>
    : <span style={{color:ui.info,fontSize:9}}>{sortDir==="desc"?" ↓":" ↑"}</span>;

  const rankBg     = r => r===1?"#fef9c3":r===2?"#f1f5f9":r===3?"#fdf3e7":ui.surface;
  const rankColor  = r => r===1?"#854d0e":r===2?"#334155":r===3?"#92400e":ui.secondary;
  const rankBadge  = r => r===1?"🥇":r===2?"🥈":r===3?"🥉":r;

  const allCols = [
    {key:"rank",         label:"#",              render:r=><span style={{fontWeight:700,color:rankColor(r.rank)}}>{rankBadge(r.rank)}</span>},
    {key:"name",         label:"Technician",     render:r=><span style={{fontWeight:600,color:ui.primary,whiteSpace:"nowrap"}}>{r.name}</span>},
    {key:"market",       label:"Market",         render:r=><span style={{fontSize:11,background:ui.panel,border:`1px solid ${ui.border}`,borderRadius:5,padding:"1px 6px",color:ui.secondary,whiteSpace:"nowrap"}}>{r.market}</span>},
    {key:"total_revenue",label:"Overall Revenue",render:r=>fmt$(r.total_revenue)},
    {key:"completed_jobs",label:"Completed",     render:r=>r.completed_jobs},
    {key:"avg_ticket",   label:"Avg Ticket",     render:r=>fmt$(r.avg_ticket)},
    {key:"jobs_per_day", label:"Jobs/Day",       render:r=>fmtN(r.jobs_per_day)},
    {key:"aov_completion_rate",label:"AOV Completion %",render:r=>{const v=r.aov_completion_rate;return <span style={{color:v>=0.9?ui.success:v>=0.75?ui.warning:ui.danger}}>{v!=null?(n(v)*100).toFixed(1)+"%":"—"}</span>;}},
    {key:"repairs_per_job",label:"Repairs/Job",  render:r=>fmtN(r.repairs_per_job),tabletHide:true},
  ];

  const visibleCols = isTablet ? allCols.filter(c=>!c.tabletHide) : allCols;

  const thStyle = k => ({
    padding:isMobile?"8px 10px":"10px 12px", textAlign:"left", fontSize:11, fontWeight:700,
    color:sortKey===k?ui.info:ui.muted, textTransform:"uppercase", letterSpacing:"0.05em",
    cursor:"pointer", whiteSpace:"nowrap", borderBottom:`2px solid ${ui.border}`,
    background:ui.panel, userSelect:"none"
  });
  const tdStyle = rank => ({
    padding:isMobile?"8px 10px":"10px 12px", fontSize:12, color:ui.secondary,
    borderBottom:`1px solid ${ui.border}`, background:rankBg(rank), verticalAlign:"middle"
  });

  if (loading) return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:ui.panel,fontFamily:"system-ui,sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <div style={{width:36,height:36,border:`3px solid ${ui.border}`,borderTopColor:ui.info,borderRadius:"50%",margin:"0 auto 14px",animation:"spin 0.8s linear infinite"}}/>
        <div style={{color:ui.muted,fontSize:13}}>Loading leaderboard…</div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:"system-ui,-apple-system,sans-serif",background:ui.panel,minHeight:"100vh",padding:isMobile?"14px 12px":"24px 20px",color:ui.primary}}>

      {/* Header */}
      <div style={{marginBottom:isMobile?14:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
          <div style={{width:28,height:28,background:ui.info,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>🔧</div>
          <h1 style={{margin:0,fontSize:isMobile?16:20,fontWeight:800,color:ui.primary}}>NuBrakes Technician Leaderboard</h1>
        </div>
        <p style={{margin:"0 0 0 36px",fontSize:11,color:ui.muted}}>
          {dataSource==="live"?"🟢 Live":"🟡 Fallback"} · {rankedData.length} technicians
        </p>
      </div>

      {/* Controls */}
      <div style={{background:ui.surface,border:`1px solid ${ui.border}`,borderRadius:12,padding:isMobile?"10px 12px":"12px 16px",marginBottom:14,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"}}>

        {/* Grain toggle */}
        <div style={{display:"flex",background:ui.panel,borderRadius:8,padding:2,border:`1px solid ${ui.border}`}}>
          {["day","week","month"].map(g=>(
            <button key={g} onClick={()=>setGrain(g)} style={{padding:isMobile?"4px 10px":"5px 14px",fontSize:12,fontWeight:600,border:"none",cursor:"pointer",borderRadius:6,background:grain===g?ui.info:"transparent",color:grain===g?ui.surface:ui.muted,transition:"all 0.15s"}}>
              {g.charAt(0).toUpperCase()+g.slice(1)}
            </button>
          ))}
        </div>

        {/* Period picker */}
        <select value={selectedPeriod||""} onChange={e=>setPeriod(e.target.value)}
          style={{padding:"5px 10px",fontSize:12,border:`1px solid ${ui.border}`,borderRadius:8,background:ui.surface,color:ui.secondary,cursor:"pointer",maxWidth:isMobile?"100%":"200px"}}>
          {periodOptions.map(p=>(
            <option key={p} value={p}>{fmtPeriodLabel(p)}</option>
          ))}
        </select>

        {/* Market */}
        <select value={market} onChange={e=>setMarket(e.target.value)}
          style={{padding:"5px 10px",fontSize:12,border:`1px solid ${ui.border}`,borderRadius:8,background:ui.surface,color:ui.secondary,cursor:"pointer",maxWidth:isMobile?"100%":"160px"}}>
          {markets.map(m=><option key={m}>{m}</option>)}
        </select>

        {/* Search */}
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search…"
          style={{padding:"5px 10px",fontSize:12,border:`1px solid ${ui.border}`,borderRadius:8,background:ui.surface,color:ui.primary,outline:"none",flex:1,minWidth:isMobile?"100%":140}}/>

        {/* Active only */}
        <label style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:ui.muted,cursor:"pointer",whiteSpace:"nowrap"}}>
          <input type="checkbox" checked={activeOnly} onChange={e=>setActiveOnly(e.target.checked)} style={{accentColor:ui.info}}/>
          Active only
        </label>
      </div>

      {/* Table — desktop & tablet */}
      {!isMobile ? (
        <div style={{background:ui.surface,border:`1px solid ${ui.border}`,borderRadius:12,overflow:"hidden"}}>
          <div style={{overflowX:"auto"}}>
            {rankedData.length===0
              ? <div style={{padding:48,textAlign:"center",color:ui.muted,fontSize:14}}>No technicians match your filters.</div>
              : (
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                  <thead>
                    <tr>{visibleCols.map(c=>(
                      <th key={c.key} style={thStyle(c.key)} onClick={()=>handleSort(c.key)}>
                        {c.label}<SortIcon k={c.key}/>
                      </th>
                    ))}</tr>
                  </thead>
                  <tbody>
                    {rankedData.map(r=>(
                      <tr key={`${r.name}-${r.market}`}
                        onMouseEnter={e=>{if(r.rank>3)Array.from(e.currentTarget.cells).forEach(td=>td.style.background="#f0f9ff")}}
                        onMouseLeave={e=>{Array.from(e.currentTarget.cells).forEach(td=>td.style.background=rankBg(r.rank))}}>
                        {visibleCols.map(c=><td key={c.key} style={tdStyle(r.rank)}>{c.render(r)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            }
          </div>
          <div style={{padding:"8px 14px",borderTop:`1px solid ${ui.border}`,fontSize:11,color:ui.subtle,background:ui.panel}}>
            {rankedData.length} technician{rankedData.length!==1?"s":""} · Click column to sort
          </div>
        </div>
      ) : (
        <div>
          {rankedData.length===0
            ? <div style={{padding:40,textAlign:"center",color:ui.muted,fontSize:13}}>No technicians match your filters.</div>
            : rankedData.map(r=><TechCard key={`${r.name}-${r.market}`} r={r} maxRev={maxRev}/>)
          }
          <div style={{textAlign:"center",fontSize:11,color:ui.subtle,padding:"8px 0 4px"}}>
            {rankedData.length} technician{rankedData.length!==1?"s":""}
          </div>
        </div>
      )}
    </div>
  );
}
