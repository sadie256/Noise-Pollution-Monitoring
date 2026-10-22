'use strict';

const app = document.getElementById('app');

// Later this will fetch('/api/sessions'). For now it returns the sample data.
async function loadSessions() {
  return SAMPLE_SESSIONS;
}

// Small helper: makes an element, sets attributes, adds children.
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) el.setAttribute(k, v);
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m} min ${s} s` : `${s} s`;
}

function formatLocation(loc) {
  return loc ? `${loc.lat.toFixed(5)}, ${loc.lon.toFixed(5)}` : 'No GPS';
}

function notes(session) {
  const out = [];
  if (session.moved) out.push(h('span', { class: 'badge' }, 'Moved'));
  if (session.clipped_count > 0) out.push(h('span', { class: 'badge' }, 'Mic maxed out'));
  return out;
}

async function showList() {
  const sessions = await loadSessions();

  const header = h('tr', {},
    h('th', {}, 'Started'), h('th', {}, 'Device'), h('th', {}, 'Duration'),
    h('th', {}, 'Location'), h('th', {}, 'Leq (dB)'), h('th', {}, 'Lmax (dB)'),
    h('th', {}, 'Notes'));

  const rows = sessions.map((s) =>
    h('tr', {},
      h('td', {}, new Date(s.started_at).toLocaleString()),
      h('td', {}, s.device_id),
      h('td', {}, formatDuration(s.duration_s)),
      h('td', {}, formatLocation(s.location)),
      h('td', {}, s.summary.leq.toFixed(1)),
      h('td', {}, s.summary.lmax.toFixed(1)),
      h('td', {}, notes(s))));

  app.replaceChildren(h('table', {}, h('thead', {}, header), h('tbody', {}, rows)));
}

showList();