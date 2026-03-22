// Maps each portfolio slug to one or more service tags from the SERVICES list in constants.ts
// These are the industry/application labels (distinct from the methodology categories like Agent-Based, etc.)
const serviceMap: Record<string, string[]> = {
  'optimization-for-sensor-locations-to-detect-sewer-overflows': ['Fluid Logistics'],
  'network-optimization-and-simulation-of-drones-supporting-fire-missions': ['Defense & Security'],
  'traffic-intersection': ['Road Planning & Traffic', 'Optimization'],
  'optimization-for-sensor-locations-to-detect-sewer-overflows-2-2': ['Policy Advisory'],
  'people-in-an-office': ['People Behavior'],
  'propan-raya': ['Manufacturing'],
  'platoon': ['Road Planning & Traffic'],
  'warehouse-with-bins': ['Supply Chain', 'Optimization'],
  'a-supply-chain-and-distribution-network-b2c-b2b': ['Supply Chain'],
  'school-traffic-analysis': ['Road Planning & Traffic'],
  '1118': ['Policy Advisory'],
  'pricing-segmentation-for-ride-sharing-platform': ['Market Dynamics'],
  'coal-mining': ['Mining'],
  'bus-depot-diesel-vs-electric': ['Public Transportation', 'Power Consumption'],
  'management-investment': ['Market Dynamics', 'Strategy'],
  'bridge-construction-field-preparation': ['Construction'],
  'speed-date': ['People Behavior'],
  'cars-and-pipes-effect-of-water-problems-on-road-traffic': ['Road Planning & Traffic', 'Fluid Logistics'],
  'employees-entering-an-office': ['People Behavior'],
  'newspaper-production': ['Manufacturing'],
  'warehouses-complex-for-canned-food-products': ['Supply Chain'],
  'cash-iot': ['Supply Chain'],
  'nunavik-ecosystem': ['Policy Advisory'],
  'online-grocery-shopping': ['Supply Chain', 'Optimization'],
  'epidemics': ['Healthcare'],
  'material_flow_safety': ['Manufacturing'],
  'warehouse-inbound-logistics': ['Supply Chain'],
  'swarm-mining-robots': ['Mining', 'Artificial Intelligence'],
  'biological-organisms-throughput': ['Manufacturing'],
  'military-gym-layout-optimization': ['Defense & Security', 'Optimization'],
  'bulk-material-transport-rail-system': ['Public Transportation'],
  'used-cooking-oil-recycling': ['Fluid Logistics', 'Manufacturing'],
  'production-facility-planning': ['Manufacturing'],
  'delivery-optimization': ['Supply Chain', 'Optimization'],
  'train-sequences-in-railyard': ['Public Transportation'],
  'multi-robot-navigation': ['Artificial Intelligence'],
};

export function getServicesForSlug(slug: string): string[] {
  return serviceMap[slug] || [];
}

// Translation map for the service labels
const serviceTranslations: Record<string, Record<string, string>> = {
  es: {
    'Road Planning & Traffic': 'Planificación Vial y Tráfico',
    'Airports': 'Aeropuertos',
    'Manufacturing': 'Manufactura',
    'Mining': 'Minería',
    'Strategy': 'Estrategia',
    'Public Transportation': 'Transporte Público',
    'Customer Service': 'Atención al Cliente',
    'Fluid Logistics': 'Logística de Fluidos',
    'Supply Chain': 'Cadena de Suministro',
    'Optimization': 'Optimización',
    'People Behavior': 'Comportamiento Humano',
    'Artificial Intelligence': 'Inteligencia Artificial',
    'Policy Advisory': 'Asesoría de Políticas',
    'Power Consumption': 'Consumo Energético',
    'Market Dynamics': 'Dinámica de Mercados',
    'Construction': 'Construcción',
    'Healthcare': 'Salud',
    'Defense & Security': 'Defensa y Seguridad',
  },
  ar: {
    'Road Planning & Traffic': 'تخطيط الطرق والمرور',
    'Airports': 'المطارات',
    'Manufacturing': 'التصنيع',
    'Mining': 'التعدين',
    'Strategy': 'الاستراتيجية',
    'Public Transportation': 'النقل العام',
    'Customer Service': 'خدمة العملاء',
    'Fluid Logistics': 'لوجستيات السوائل',
    'Supply Chain': 'سلسلة التوريد',
    'Optimization': 'التحسين',
    'People Behavior': 'السلوك البشري',
    'Artificial Intelligence': 'الذكاء الاصطناعي',
    'Policy Advisory': 'الاستشارات السياسية',
    'Power Consumption': 'استهلاك الطاقة',
    'Market Dynamics': 'ديناميكيات السوق',
    'Construction': 'البناء',
    'Healthcare': 'الرعاية الصحية',
    'Defense & Security': 'الدفاع والأمن',
  },
};

export function translateService(service: string, locale: string): string {
  if (locale === 'en') return service;
  return serviceTranslations[locale]?.[service] || service;
}
