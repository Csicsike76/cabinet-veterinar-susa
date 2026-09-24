import{A as $}from"./index-B2KTv49N.js";import{i as f}from"./vendor-i18n-y4lNZ1nl.js";function t(r){return r?r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function s(r,o){if(!r)return"-";try{return new Date(r).toLocaleDateString(o,{year:"numeric",month:"long",day:"numeric"})}catch{return r}}async function S(r){const d=new TextEncoder().encode(r),n=await crypto.subtle.digest("SHA-256",d);return Array.from(new Uint8Array(n)).map(l=>l.toString(16).padStart(2,"0")).join("")}function A(){const r=Date.now().toString(36).toUpperCase(),o=Math.random().toString(36).substring(2,6).toUpperCase();return`AC-${r}-${o}`}function _(){return`
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans',
               'Noto Sans CJK SC', 'Noto Sans CJK JP', 'Noto Sans CJK KR',
               'Noto Sans Arabic', 'Noto Sans Devanagari',
               Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #1e293b;
  background: #fff;
  line-height: 1.5;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.no-print { display: block; }
@media print {
  .no-print { display: none !important; }
  body { padding: 0; }
}

.print-btn {
  position: fixed; top: 16px; right: 16px;
  background: #4f46e5; color: #fff; border: none;
  padding: 10px 20px; border-radius: 8px; cursor: pointer;
  font-size: 14px; font-weight: 600; z-index: 9999;
}
.print-btn:hover { background: #4338ca; }

.header {
  border-bottom: 3px solid #1e293b;
  padding-bottom: 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.header h1 {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  color: #0f172a;
}
.header .subtitle { font-size: 16px; color: #64748b; margin-top: 4px; }
.header .meta { text-align: end; font-size: 13px; color: #64748b; }
.header .meta .date { font-size: 15px; font-weight: 500; color: #1e293b; }

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}
.info-grid .item { }
.info-grid .item .label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.5px;
}
.info-grid .item .value { font-weight: 700; font-size: 14px; }
.info-grid .item .value.mono { font-family: 'Courier New', monospace; }

.section {
  margin-bottom: 24px;
}
.section h2 {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #1e293b;
  padding-bottom: 6px;
  margin-bottom: 12px;
  color: #0f172a;
}

.alert-box {
  border: 2px solid #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 24px;
}
.alert-box h3 {
  font-size: 14px;
  font-weight: 700;
  color: #dc2626;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.alert-box p { font-size: 13px; color: #7f1d1d; margin-bottom: 4px; }

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-bottom: 8px;
}
th {
  text-align: start;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  color: #64748b;
  padding: 6px 8px;
  border-bottom: 2px solid #cbd5e1;
}
td {
  padding: 6px 8px;
  border-bottom: 1px solid #e2e8f0;
}
td.bold { font-weight: 700; }
td.end { text-align: end; }
td.mono { font-family: 'Courier New', monospace; }

.weight-list { list-style: disc; padding-inline-start: 20px; }
.weight-list li { margin-bottom: 4px; font-size: 13px; }
.weight-list strong { font-weight: 700; }

.empty { font-style: italic; color: #94a3b8; font-size: 13px; }

.footer {
  margin-top: 32px;
  border-top: 1px solid #e2e8f0;
  padding-top: 12px;
  font-size: 11px;
  color: #94a3b8;
  text-align: center;
}
.footer .export-id { font-family: 'Courier New', monospace; font-size: 10px; }

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
.two-col .col {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  background: #f8fafc;
}
.two-col .col h3 {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.two-col .col.alert { border-color: #fca5a5; background: #fef2f2; }
.two-col .col.alert h3 { color: #dc2626; }

@media print {
  .header { page-break-after: avoid; }
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; }
}
  `.trim()}function N(r){const{pet:o,activeMeds:d,vet:n,locale:a,isRTL:l,exportId:b,checksum:h}=r,e=f.t.bind(f),x=l?"rtl":"ltr",p=new Date;p.setFullYear(p.getFullYear()-1);const m=o.vaccinations.filter(i=>new Date(i.date)>=p).sort((i,g)=>new Date(g.date).getTime()-new Date(i.date).getTime()),c=new Date;c.setMonth(c.getMonth()-6);const v=o.weightHistory.filter(i=>new Date(i.date)>=c).sort((i,g)=>new Date(g.date).getTime()-new Date(i.date).getTime()).slice(0,5),u=o.gender==="Male"?e("pet_form.gender.male"):o.gender==="Female"?e("pet_form.gender.female"):e("common.unknown");return`<!DOCTYPE html>
<html lang="${t(a)}" dir="${x}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t(o.name)} — ${t(e("vet_report.title"))}</title>
<style>${_()}</style>
</head>
<body>

<button class="no-print print-btn" onclick="window.print()">${t(e("vet_report.save_pdf"))}</button>

<!-- HEADER -->
<div class="header">
  <div>
    <h1>${t(o.name)}</h1>
    <div class="subtitle">${t(o.species)}${o.breed?" &bull; "+t(o.breed):""}</div>
  </div>
  <div class="meta">
    <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">${t(e("vet_report.header_created"))}</div>
    <div class="date">${t(s(new Date().toISOString(),a))}</div>
    <div style="margin-top:8px;font-size:12px;">${t(e("vet_report.header_footer"))}</div>
  </div>
</div>

<!-- QUICK INFO -->
<div class="info-grid">
  <div class="item">
    <div class="label">${t(e("vet_report.dob"))}</div>
    <div class="value">${t(o.dateOfBirth?s(o.dateOfBirth,a):e("common.unknown"))}</div>
  </div>
  <div class="item">
    <div class="label">${t(e("vet_report.gender"))}</div>
    <div class="value">${t(u)}</div>
  </div>
  <div class="item">
    <div class="label">${t(e("vet_report.chip"))}</div>
    <div class="value mono">${t(o.microchipId||e("vet_report.chip_none"))}</div>
  </div>
  <div class="item">
    <div class="label">${t(e("vet_report.owner"))}</div>
    <div class="value">${t(o.ownerName||e("vet_report.owner_none"))}</div>
  </div>
</div>

<!-- CLINICAL NOTES + WEIGHTS -->
<div class="two-col">
  <div class="col alert">
    <h3>${t(e("vet_report.clinical_notes"))}</h3>
    <p><strong>${t(e("vet_report.allergies"))}</strong> ${t(o.allergies.text||e("vet_report.no_data"))}</p>
    <p><strong>${t(e("vet_report.chronic"))}</strong> ${t(o.chronicConditions.text||e("vet_report.no_data"))}</p>
  </div>
  <div class="col">
    <h3>${t(e("vet_report.recent_weights"))}</h3>
    ${v.length>0?`<ul class="weight-list">${v.map(i=>`<li>${t(s(i.date,a))}: <strong>${i.weight} ${t(i.unit||"kg")}</strong></li>`).join("")}</ul>`:`<p class="empty">${t(e("vet_report.no_recent_weights"))}</p>`}
  </div>
</div>

<!-- ACTIVE MEDICATIONS -->
<div class="section">
  <h2>${t(e("vet_report.active_meds"))}</h2>
  ${d.length>0?`<table>
    <thead><tr>
      <th>${t(e("vet_report.table_med"))}</th>
      <th>${t(e("vet_report.table_dosage"))}</th>
      <th>${t(e("vet_report.table_freq"))}</th>
      <th style="text-align:end">${t(e("vet_report.table_start"))}</th>
    </tr></thead>
    <tbody>
    ${d.map(i=>`<tr>
      <td class="bold">${t(i.name)}</td>
      <td>${t(i.dosage)}</td>
      <td>${t(i.frequency)}</td>
      <td class="end mono">${t(s(i.startDate,a))}</td>
    </tr>`).join("")}
    </tbody></table>`:`<p class="empty">${t(e("vet_report.no_active_meds"))}</p>`}
</div>

<!-- VACCINATIONS -->
<div class="section">
  <h2>${t(e("vet_report.vaccinations"))}</h2>
  ${m.length>0?`<table>
    <thead><tr>
      <th>${t(e("vet_report.table_date"))}</th>
      <th>${t(e("vet_report.table_vaccine"))}</th>
      <th style="text-align:end">${t(e("vet_report.table_clinic"))}</th>
    </tr></thead>
    <tbody>
    ${m.map(i=>`<tr>
      <td class="mono">${t(s(i.date,a))}</td>
      <td class="bold">${t(i.vaccineName)}</td>
      <td class="end">${t(i.vetClinic||"-")}</td>
    </tr>`).join("")}
    </tbody></table>`:`<p class="empty">${t(e("vet_report.no_recent_vaccinations"))}</p>`}
</div>

<!-- VETERINARIAN -->
${n?`<div class="section">
  <h2>${t(e("emergency.vet"))}</h2>
  <div class="info-grid" style="grid-template-columns: repeat(3, 1fr);">
    <div class="item">
      <div class="label">${t(e("vet_form.clinic_name"))}</div>
      <div class="value">${t(n.clinicName)}</div>
    </div>
    <div class="item">
      <div class="label">${t(e("vet_form.vet_name"))}</div>
      <div class="value">${t(n.vetName||"-")}</div>
    </div>
    <div class="item">
      <div class="label">${t(e("vet_form.phone"))}</div>
      <div class="value">${t(n.phoneNumber||"-")}</div>
    </div>
  </div>
</div>`:""}

<!-- FOOTER -->
<div class="footer">
  <p>${t($)} &mdash; ${t(e("vet_report.footer_generated"))} &bull; ${t(s(new Date().toISOString(),a))}</p>
  <p class="export-id">Export ID: ${t(b)} &bull; SHA-256: ${t(h.substring(0,16))}...</p>
</div>

</body>
</html>`}export{N as a,S as c,A as g};
