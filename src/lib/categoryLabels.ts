const labels: Record<string, Record<string, string>> = {
  es: {
    // Portfolio categories
    'Agent-Based': 'Basado en Agentes',
    'Discrete Events': 'Eventos Discretos',
    'Optimization': 'Optimización',
    'Parameter Variation': 'Variación de Parámetros',
    'System Dynamics': 'Dinámica de Sistemas',
    'Road Traffic Library': 'Librería de Tráfico Vial',
    'Pedestrian': 'Peatones',
    'Fluid Library': 'Librería de Fluidos',
    'Material Handling Library': 'Librería de Manejo de Materiales',
    'GIS': 'GIS',
    'Railyard Library': 'Librería Ferroviaria',
    // Blog categories
    'AnyLogic Tips': 'Consejos de AnyLogic',
    'Noorjax Libraries': 'Librerías Noorjax',
    'Competitions': 'Competencias',
    'Client Guide': 'Guía para Clientes',
    'Case Studies': 'Casos de Estudio',
    'Simulation Concepts': 'Conceptos de Simulación',
    'About Noorjax': 'Sobre Noorjax',
  },
  ar: {
    // Portfolio categories
    'Agent-Based': 'قائم على الوكلاء',
    'Discrete Events': 'أحداث منفصلة',
    'Optimization': 'تحسين',
    'Parameter Variation': 'تغيير المعاملات',
    'System Dynamics': 'ديناميكيات النظام',
    'Road Traffic Library': 'مكتبة حركة المرور',
    'Pedestrian': 'مشاة',
    'Fluid Library': 'مكتبة السوائل',
    'Material Handling Library': 'مكتبة مناولة المواد',
    'GIS': 'نظم المعلومات الجغرافية',
    'Railyard Library': 'مكتبة ساحة السكك الحديدية',
    // Blog categories
    'AnyLogic Tips': 'نصائح AnyLogic',
    'Noorjax Libraries': 'مكتبات Noorjax',
    'Competitions': 'مسابقات',
    'Client Guide': 'دليل العملاء',
    'Case Studies': 'دراسات حالة',
    'Simulation Concepts': 'مفاهيم المحاكاة',
    'About Noorjax': 'عن Noorjax',
  },
};

export function translateCategory(cat: string, locale: string): string {
  if (locale === 'en') return cat;
  return labels[locale]?.[cat] || cat;
}
