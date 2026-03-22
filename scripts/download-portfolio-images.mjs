import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, '..', 'public', 'images', 'portfolio', 'cases');

// Map of slug -> array of { url, localName }
// Using only full-size images (excluding WordPress -1030x thumbnails)
const imageMap = {
  'optimization-for-sensor-locations-to-detect-sewer-overflows': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/Manholes-Simulation-AnyLogic-Personal-Learning-Edition-2018-10-22-16-43-48.png', localName: 'hotspot-clusters.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/Sin-título.png', localName: 'visualization.png' },
  ],
  'network-optimization-and-simulation-of-drones-supporting-fire-missions': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-23-at-14.23.32.png', localName: 'drone-ui.png' },
  ],
  'traffic-intersection': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/flow.png', localName: 'flow-rates.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/road.png', localName: 'road-structure.png' },
  ],
  'optimization-for-sensor-locations-to-detect-sewer-overflows-2-2': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/1.png', localName: 'prison-population.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/2.png', localName: 'prison-month-end.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/3.png', localName: 'crime-summary.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/4.png', localName: 'criminal-justice-process.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/sd.png', localName: 'system-dynamics.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/de.png', localName: 'discrete-events.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/abm.png', localName: 'agent-based.png' },
  ],
  'people-in-an-office': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-19.16.34-1030x677.png', localName: 'density-map.png' },
  ],
  'propan-raya': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/10/process-flow-1-1030x757.png', localName: 'process-flow.png' },
  ],
  'platoon': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-20-at-08.35.05.png', localName: 'platoon-cameras.png' },
  ],
  'warehouse-with-bins': [
    { url: 'https://noorjax.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-28-at-15.36.37.png', localName: 'warehouse-2d.png' },
  ],
  'a-supply-chain-and-distribution-network-b2c-b2b': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-26-at-18.02.49.png', localName: 'simulation-ui.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-27-at-14.42.20.png', localName: 'kpi-analysis.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-27-at-14.42.38.png', localName: 'service-level.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-27-at-14.43.43.png', localName: 'order-management.png' },
  ],
  'school-traffic-analysis': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-05-31-at-19.16.21.png', localName: 'traffic-simulation.png' },
  ],
  '1118': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Picture1.png', localName: 'terrorism-cld.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Picture2.png', localName: 'yearly-attacks.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Picture3.png', localName: 'attacks-outcome.png' },
  ],
  'pricing-segmentation-for-ride-sharing-platform': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/map.png', localName: 'segmentation-map.png' },
  ],
  'coal-mining': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Picture1-1.png', localName: 'mine-configuration.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Picture2-1.png', localName: 'mining-simulation.png' },
  ],
  'bus-depot-diesel-vs-electric': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-13-at-12.31.52.png', localName: 'bus-depot-3d.png' },
  ],
  'management-investment': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-13-at-14.55.24.png', localName: 'investors-visualization.png' },
  ],
  'speed-date': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/scenario.png', localName: 'speed-date-scenario.png' },
  ],
  'cars-and-pipes-effect-of-water-problems-on-road-traffic': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-14-at-11.36.18.png', localName: 'network-state.png' },
  ],
  'employees-entering-an-office': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-14-at-13.33.30.png', localName: 'office-layouts.png' },
  ],
  'newspaper-production': [
    { url: 'https://noorjax.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-14-at-14.02.59.png', localName: 'newspaper-simulation.png' },
  ],
  'warehouses-complex-for-canned-food-products': [
    { url: 'https://noorjax.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-04-at-16.44.17.png', localName: 'warehouse-layout.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-04-at-16.49.52.png', localName: 'warehouse-simulation.png' },
  ],
  'cash-iot': [
    { url: 'https://noorjax.com/wp-content/uploads/2023/08/asdfasdf.png', localName: 'cash-process.png' },
  ],
  'nunavik-ecosystem': [
    { url: 'https://noorjax.com/wp-content/uploads/2023/08/Picture3.png', localName: 'ecosystem-model.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/08/asasdkkk.png', localName: 'household-model.png' },
  ],
  'online-grocery-shopping': [
    { url: 'https://noorjax.com/wp-content/uploads/2023/08/Picture14.png', localName: 'routing-algorithm.png' },
  ],
  'epidemics': [
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/seirs.png', localName: 'seirs-model.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/forest.png', localName: 'forest-fire.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/malaria.png', localName: 'malaria-model.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/marketing.png', localName: 'marketing-model.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/covid.png', localName: 'covid-model.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2023/09/wolf.png', localName: 'predator-prey.png' },
  ],
  'material_flow_safety': [
    { url: 'https://noorjax.com/wp-content/uploads/2023/10/Picture2.png', localName: 'warehouse-layout.png' },
  ],
  'warehouse-inbound-logistics': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/01/Picture1.png', localName: 'inbound-simulation.png' },
  ],
  'swarm-mining-robots': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/01/demo1.png', localName: 'robot-config-1.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/01/demo2.png', localName: 'robot-config-2.png' },
  ],
  'biological-organisms-throughput': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Monosnap-demo-interface.mp4-VLC-media-player-202.png', localName: 'pond-system.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture2.png', localName: 'system-dynamics.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture3.png', localName: 'pond-density.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture4.png', localName: 'powerbi-dashboard.png' },
  ],
  'military-gym-layout-optimization': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture1.jpg', localName: 'gym-layout-1.jpg' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture2.jpg', localName: 'gym-layout-2.jpg' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture3-1.png', localName: 'throughput-analysis.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture4-1.png', localName: 'bottleneck-analysis.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture5.png', localName: 'dashboard-1.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture6.png', localName: 'dashboard-2.png' },
  ],
  'bulk-material-transport-rail-system': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture1.png', localName: 'rail-layout.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture2-1.png', localName: 'visualization-scheme.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture3-2.png', localName: 'cycle-time.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture4-2.png', localName: 'throughput.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture5-1.png', localName: 'bottleneck.png' },
  ],
  'used-cooking-oil-recycling': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture6-1.png', localName: 'facility-process.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture7.png', localName: 'simulation-model.png' },
  ],
  'production-facility-planning': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/Picture1-1.png', localName: 'facility-layout.png' },
  ],
  'train-sequences-in-railyard': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/railyard.png', localName: 'railyard-overview.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/railyard2.png', localName: 'railyard-detail.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/02/railyard3.png', localName: 'railyard-results.png' },
  ],
  'multi-robot-navigation': [
    { url: 'https://noorjax.com/wp-content/uploads/2025/05/Picture1.png', localName: 'robot-map.png' },
    { url: 'https://noorjax.com/wp-content/uploads/2025/05/Picture2.jpg', localName: 'safety-zones.jpg' },
  ],
};

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    fs.mkdirSync(dir, { recursive: true });

    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(dest);
      });
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  let total = 0;
  let success = 0;
  let failed = 0;

  for (const [slug, images] of Object.entries(imageMap)) {
    const slugDir = path.join(baseDir, slug);
    for (const img of images) {
      total++;
      const dest = path.join(slugDir, img.localName);
      if (fs.existsSync(dest)) {
        console.log(`SKIP (exists): ${slug}/${img.localName}`);
        success++;
        continue;
      }
      try {
        await downloadFile(img.url, dest);
        console.log(`OK: ${slug}/${img.localName}`);
        success++;
      } catch (err) {
        console.error(`FAIL: ${slug}/${img.localName} - ${err.message}`);
        failed++;
      }
    }
  }
  console.log(`\nDone: ${success}/${total} downloaded, ${failed} failed`);
}

main();
