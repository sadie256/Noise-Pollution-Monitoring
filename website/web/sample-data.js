const SAMPLE_SESSIONS = [
  {
    id: 1, device_id: 'NM-0001',
    started_at: '2026-10-20T18:00:00Z', duration_s: 600,
    location: { lat: 53.5701, lon: -113.5062 },
    summary: { leq: 58.4, lmax: 74.9 },
    moved: false, clipped_count: 0,
  },
  {
    id: 2, device_id: 'NM-0001',
    started_at: '2026-10-20T19:30:00Z', duration_s: 480,
    location: null,
    summary: { leq: 62.1, lmax: 81.3 },
    moved: false, clipped_count: 0,
  },
  {
    id: 3, device_id: 'NM-0001',
    started_at: '2026-10-21T15:10:00Z', duration_s: 360,
    location: { lat: 53.5444, lon: -113.4909 },
    summary: { leq: 71.8, lmax: 96.2 },
    moved: true, clipped_count: 6,
  },
];