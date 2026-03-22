export const SITE = {
  name: 'Noorjax Consulting',
  description: 'Simulation consulting experts specializing in AnyLogic, discrete events, agent-based modeling, and system dynamics.',
  url: 'https://noorjax.com',
  email: 'info@noorjax.com',
  calendly: 'https://calendly.com/noorjax',
  linkedin: 'https://www.linkedin.com/company/noorjax/',
  youtube: 'https://www.youtube.com/@noorjaxconsulting5209',
  address: 'Ahtri 12-512, 10151 Tallinn, Estonia',
} as const;

export const PRICING: Record<string, readonly { name: string; price: string; unit: string; description: string; features: readonly string[]; featured?: boolean }[]> = {
  en: [
    { name: 'Hourly', price: '€200', unit: '/hour', description: 'Ideal for targeted consultations, technical reviews, or short-term expert support.', features: ['Direct access to senior consultants', 'Rapid response', 'Flexible scheduling'] },
    { name: 'Daily', price: '€1,500', unit: '/day', description: 'Dedicated full-day engagement for focused simulation development and in-depth analysis.', features: ['Full-day dedication', 'Structured deliverables', 'Progress reporting'] },
    { name: 'Monthly', price: '€25,000', unit: '/month', description: 'Sustained partnership for complex, multi-phase simulation initiatives requiring ongoing collaboration.', features: ['Dedicated team allocation', 'Priority support', 'Weekly progress reviews'] },
    { name: 'Value-Based', price: 'Custom', unit: '', description: 'Fixed-scope engagements with a clear quote upfront — you know exactly what you will receive and what it will cost.', features: ['Transparent fixed pricing', 'Defined milestones', 'Outcome-oriented delivery'], featured: true },
  ],
  es: [
    { name: 'Por Hora', price: '€200', unit: '/hora', description: 'Ideal para consultas específicas, revisiones técnicas o soporte experto a corto plazo.', features: ['Acceso directo a consultores senior', 'Respuesta rápida', 'Horario flexible'] },
    { name: 'Diario', price: '€1.500', unit: '/día', description: 'Dedicación de un día completo para desarrollo de simulación enfocado y análisis en profundidad.', features: ['Dedicación de día completo', 'Entregables estructurados', 'Reportes de progreso'] },
    { name: 'Mensual', price: '€25.000', unit: '/mes', description: 'Asociación sostenida para iniciativas de simulación complejas y multifase que requieren colaboración continua.', features: ['Asignación de equipo dedicado', 'Soporte prioritario', 'Revisiones semanales de progreso'] },
    { name: 'Por Valor', price: 'Personalizado', unit: '', description: 'Proyectos de alcance fijo con cotización clara — sabes exactamente lo que recibirás y cuánto costará.', features: ['Precios fijos transparentes', 'Hitos definidos', 'Entrega orientada a resultados'], featured: true },
  ],
  ar: [
    { name: 'بالساعة', price: '€200', unit: '/ساعة', description: 'مثالي للاستشارات المستهدفة والمراجعات التقنية أو الدعم الخبير قصير المدى.', features: ['وصول مباشر لكبار المستشارين', 'استجابة سريعة', 'جدولة مرنة'] },
    { name: 'يومي', price: '€1,500', unit: '/يوم', description: 'مشاركة ليوم كامل مخصصة لتطوير المحاكاة والتحليل المعمق.', features: ['تخصيص ليوم كامل', 'مخرجات منظمة', 'تقارير تقدم'] },
    { name: 'شهري', price: '€25,000', unit: '/شهر', description: 'شراكة مستدامة لمبادرات المحاكاة المعقدة ومتعددة المراحل.', features: ['تخصيص فريق مخصص', 'دعم ذو أولوية', 'مراجعات أسبوعية'] },
    { name: 'حسب القيمة', price: 'مخصص', unit: '', description: 'مشاريع بنطاق محدد مع عرض سعر واضح مقدماً — تعرف بالضبط ما ستحصل عليه وكم سيكلف.', features: ['تسعير شفاف وثابت', 'معالم محددة', 'تسليم موجه بالنتائج'], featured: true },
  ],
};

export const HOW_WE_WORK: Record<string, readonly { step: number; title: string; description: string }[]> = {
  en: [
    { step: 1, title: 'Dig Deep', description: 'We invest time upfront to fully understand your system, constraints, and success criteria — ensuring the model addresses the right questions from day one.' },
    { step: 2, title: 'Plan', description: 'We define the simulation architecture, select the appropriate methodology, and establish clear milestones and deliverables aligned with your objectives.' },
    { step: 3, title: 'Sprint', description: 'We develop, validate, and refine the model through iterative cycles — with regular demonstrations and stakeholder feedback at every stage.' },
    { step: 4, title: 'Close', description: 'We deliver the verified model alongside comprehensive documentation and hands-on training, empowering your team to operate it independently.' },
  ],
  es: [
    { step: 1, title: 'Investigar', description: 'Invertimos tiempo desde el inicio para entender completamente tu sistema, restricciones y criterios de éxito — asegurando que el modelo aborde las preguntas correctas desde el primer día.' },
    { step: 2, title: 'Planificar', description: 'Definimos la arquitectura de simulación, seleccionamos la metodología apropiada y establecemos hitos y entregables claros alineados con tus objetivos.' },
    { step: 3, title: 'Ejecutar', description: 'Desarrollamos, validamos y refinamos el modelo a través de ciclos iterativos — con demostraciones regulares y retroalimentación de las partes interesadas en cada etapa.' },
    { step: 4, title: 'Cerrar', description: 'Entregamos el modelo verificado junto con documentación completa y capacitación práctica, empoderando a tu equipo para operarlo de forma independiente.' },
  ],
  ar: [
    { step: 1, title: 'التعمق', description: 'نستثمر الوقت مقدماً لفهم نظامك وقيوده ومعايير النجاح بشكل كامل — لضمان أن النموذج يعالج الأسئلة الصحيحة من اليوم الأول.' },
    { step: 2, title: 'التخطيط', description: 'نحدد بنية المحاكاة، ونختار المنهجية المناسبة، ونضع معالم ومخرجات واضحة متوافقة مع أهدافك.' },
    { step: 3, title: 'التنفيذ', description: 'نطور ونتحقق ونحسّن النموذج من خلال دورات تكرارية — مع عروض منتظمة وملاحظات أصحاب المصلحة في كل مرحلة.' },
    { step: 4, title: 'الإغلاق', description: 'نسلم النموذج المتحقق منه مع وثائق شاملة وتدريب عملي، مما يمكّن فريقك من تشغيله بشكل مستقل.' },
  ],
};

export const SERVICES: Record<string, readonly { name: string; icon: string }[]> = {
  en: [
    { name: 'Road Planning & Traffic', icon: '🚗' }, { name: 'Airports', icon: '✈️' }, { name: 'Manufacturing', icon: '🏭' },
    { name: 'Mining', icon: '⛏️' }, { name: 'Strategy', icon: '📊' }, { name: 'Public Transportation', icon: '🚌' },
    { name: 'Customer Service', icon: '🎧' }, { name: 'Fluid Logistics', icon: '💧' }, { name: 'Supply Chain', icon: '📦' },
    { name: 'Optimization', icon: '⚡' }, { name: 'People Behavior', icon: '👥' }, { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'Policy Advisory', icon: '📋' }, { name: 'Power Consumption', icon: '🔋' }, { name: 'Market Dynamics', icon: '📈' },
    { name: 'Construction', icon: '🏗️' }, { name: 'Healthcare', icon: '🏥' }, { name: 'Defense & Security', icon: '🛡️' },
  ],
  es: [
    { name: 'Planificación Vial y Tráfico', icon: '🚗' }, { name: 'Aeropuertos', icon: '✈️' }, { name: 'Manufactura', icon: '🏭' },
    { name: 'Minería', icon: '⛏️' }, { name: 'Estrategia', icon: '📊' }, { name: 'Transporte Público', icon: '🚌' },
    { name: 'Atención al Cliente', icon: '🎧' }, { name: 'Logística de Fluidos', icon: '💧' }, { name: 'Cadena de Suministro', icon: '📦' },
    { name: 'Optimización', icon: '⚡' }, { name: 'Comportamiento Humano', icon: '👥' }, { name: 'Inteligencia Artificial', icon: '🤖' },
    { name: 'Asesoría de Políticas', icon: '📋' }, { name: 'Consumo Energético', icon: '🔋' }, { name: 'Dinámica de Mercados', icon: '📈' },
    { name: 'Construcción', icon: '🏗️' }, { name: 'Salud', icon: '🏥' }, { name: 'Defensa y Seguridad', icon: '🛡️' },
  ],
  ar: [
    { name: 'تخطيط الطرق والمرور', icon: '🚗' }, { name: 'المطارات', icon: '✈️' }, { name: 'التصنيع', icon: '🏭' },
    { name: 'التعدين', icon: '⛏️' }, { name: 'الاستراتيجية', icon: '📊' }, { name: 'النقل العام', icon: '🚌' },
    { name: 'خدمة العملاء', icon: '🎧' }, { name: 'لوجستيات السوائل', icon: '💧' }, { name: 'سلسلة التوريد', icon: '📦' },
    { name: 'التحسين', icon: '⚡' }, { name: 'السلوك البشري', icon: '👥' }, { name: 'الذكاء الاصطناعي', icon: '🤖' },
    { name: 'الاستشارات السياسية', icon: '📋' }, { name: 'استهلاك الطاقة', icon: '🔋' }, { name: 'ديناميكيات السوق', icon: '📈' },
    { name: 'البناء', icon: '🏗️' }, { name: 'الرعاية الصحية', icon: '🏥' }, { name: 'الدفاع والأمن', icon: '🛡️' },
  ],
};

export const TEAM = [
  { name: 'Felipe Haro', role: { en: 'Founder', es: 'Fundador', ar: 'المؤسس' }, certifications: ['Bachelor in Engineering', 'Electronics Engineering', 'M.Phil. in System Dynamics', 'M.Sc. in Business Administration', 'Data Science Specialization', 'Lean Six Sigma Black Belt'], image: '/images/team-felipe.jpg' },
  { name: 'Joaquín Guzman', role: { en: 'AI & Advanced Analytics Lead', es: 'Líder de IA y Analítica Avanzada', ar: 'رئيس الذكاء الاصطناعي والتحليلات المتقدمة' }, certifications: [], image: '/images/team-joaquin.jpg' },
  { name: 'Soheila Antar', role: { en: 'Simulations Engineer', es: 'Ingeniera de Simulaciones', ar: 'مهندسة محاكاة' }, certifications: [], image: '/images/team-soheila.jpg' },
] as const;

export const PARTNERS = [
  { name: 'Simuland', description: { en: 'AI-enabled simulation platform', es: 'Plataforma de simulación con IA', ar: 'منصة محاكاة مدعومة بالذكاء الاصطناعي' }, since: { en: 'February 2026', es: 'Febrero 2026', ar: 'فبراير 2026' } },
  { name: 'AnyLogic Iberia / MSC Simulacion', description: { en: 'Spain & Portugal simulation partner', es: 'Socio de simulación para España y Portugal', ar: 'شريك المحاكاة لإسبانيا والبرتغال' }, since: { en: 'Late 2024', es: 'Finales de 2024', ar: 'أواخر 2024' } },
  { name: 'The AnyLogic Modeler / TOCsim Consulting', description: { en: 'Simulation modeling partner', es: 'Socio en modelado de simulación', ar: 'شريك نمذجة المحاكاة' }, since: { en: 'Late 2021', es: 'Finales de 2021', ar: 'أواخر 2021' } },
] as const;

export const NAV_LINKS = {
  en: [
    { label: 'Home', href: '/en/' },
    { label: 'Demo', href: '/en/simulation-services/' },
    { label: 'Business Cases', href: '/en/business-cases/' },
    { label: 'Products', href: '/en/products/' },
    { label: 'Courses', href: '/en/courses/' },
    { label: 'About', href: '/en/about-us/' },
    { label: 'Blog', href: '/en/blog/' },
    { label: 'Contact', href: '/en/contact/' },
  ],
  es: [
    { label: 'Inicio', href: '/es/' },
    { label: 'Demo', href: '/es/simulation-services/' },
    { label: 'Casos', href: '/es/business-cases/' },
    { label: 'Productos', href: '/es/products/' },
    { label: 'Cursos', href: '/es/courses/' },
    { label: 'Nosotros', href: '/es/about-us/' },
    { label: 'Blog', href: '/es/blog/' },
    { label: 'Contacto', href: '/es/contact/' },
  ],
  ar: [
    { label: 'الرئيسية', href: '/ar/' },
    { label: 'ديمو', href: '/ar/simulation-services/' },
    { label: 'المشاريع', href: '/ar/business-cases/' },
    { label: 'المنتجات', href: '/ar/products/' },
    { label: 'الدورات', href: '/ar/courses/' },
    { label: 'من نحن', href: '/ar/about-us/' },
    { label: 'المدونة', href: '/ar/blog/' },
    { label: 'اتصل بنا', href: '/ar/contact/' },
  ],
} as const;
