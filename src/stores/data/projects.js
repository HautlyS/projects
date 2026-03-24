// Project data for Earth Guardians South America
// Using translation keys for i18n support
// Layout is now automatic - no hardcoded positions

export const projectsData = [
  // ═══════════════════════════════════════════════════════════════════
  // EM EXECUÇÃO - Active Projects (2025-2027)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'p1',
    type: 'active',
    size: 'card-lg',
    year: 2025,
    statusTagKey: 'status.pnab',
    titleKey: 'projects.p1.title',
    descriptionKey: 'projects.p1.description',
    territory: 'Brasil',
    axis: ['Arte', 'Tecnologia'],
    kpiLabelKey: 'labels.estimatedImpact',
    kpiValue: null,
    kpiDetail: 'labels.p1.kpiDetail',
    meta: [
      { labelKey: 'project.partners', value: 'SOS Águas da Prata, Mídia Ninja' },
      { labelKey: 'project.role', value: 'RCC Escrita técnica & Coordenação' }
    ],
    category: 'culture'
  },
  {
    id: 'p2',
    type: 'active',
    size: 'card-md',
    year: 2024,
    statusTagKey: 'status.cultsp',
    titleKey: 'projects.p2.title',
    descriptionKey: 'projects.p2.description',
    territory: 'Brasil',
    axis: ['Arte', 'Água', 'Tecnologia'],
    kpiLabelKey: 'labels.formation',
    kpiValue: null,
    kpiDetail: 'labels.p2.kpiDetail',
    meta: [
      { labelKey: 'project.award', value: 'Prêmio 11 anos - Gov. SP' },
      { labelKey: 'project.origin', value: 'projects.p2.origin' }
    ],
    category: 'culture'
  },
  {
    id: 'p3',
    type: 'active',
    size: 'card-md',
    year: 2025,
    statusTagKey: 'status.virada2026',
    titleKey: 'projects.p3.title',
    descriptionKey: 'projects.p3.description',
    territory: 'Brasil',
    axis: ['Água'],
    kpiLabelKey: 'labels.biodiversity',
    kpiValue: null,
    kpiDetail: 'labels.p3.kpiDetail',
    meta: [
      { labelKey: 'project.location', value: 'SOS - Horta Parque' },
      { labelKey: 'project.type', value: 'Educação Ambiental' }
    ],
    parentId: 'p18',
    connectionTypeKey: 'connections.subProject',
    category: 'environmental'
  },
  {
    id: 'p4',
    type: 'active',
    size: 'card-md',
    year: 2025,
    statusTagKey: 'status.virada2026',
    titleKey: 'projects.p4.title',
    descriptionKey: 'projects.p4.description',
    territory: 'Brasil',
    axis: ['Água'],
    kpiLabelKey: 'labels.saf',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.location', value: 'SOS - Horta Parque' },
      { labelKey: 'project.connection', value: 'labels.p4.connection' }
    ],
    parentId: 'p18',
    connectionTypeKey: 'connections.subProject',
    category: 'environmental'
  },
  {
    id: 'p4b',
    type: 'active',
    size: 'card-sm',
    year: 2027,
    statusTagKey: 'status.virada2027',
    titleKey: 'projects.p4b.title',
    descriptionKey: 'projects.p4b.description',
    territory: 'Brasil',
    axis: ['Arte', 'Direitos'],
    kpiLabelKey: 'labels.duration',
    kpiValue: null,
    kpiDetail: 'labels.p4b.kpiDetail',
    meta: [
      { labelKey: 'project.edition', value: '4ª Edição' },
      { labelKey: 'project.type', value: 'Celebração & Rede' }
    ],
    category: 'climate'
  },
  {
    id: 'p4c',
    type: 'active',
    size: 'card-lg',
    year: 2025,
    statusTagKey: 'status.active',
    titleKey: 'projects.p4c.title',
    descriptionKey: 'projects.p4c.description',
    territory: 'Brasil',
    axis: ['Arte', 'Direitos'],
    kpiLabelKey: 'labels.format',
    kpiValue: null,
    kpiDetail: 'labels.p4c.kpiDetail',
    meta: [
      { labelKey: 'project.focus', value: 'labels.p4c.focus' },
      { labelKey: 'project.format', value: 'labels.p4c.format' }
    ],
    category: 'climate'
  },

  // ═══════════════════════════════════════════════════════════════════
  // PIPELINE / WRITING - Future Projects
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'p5',
    type: 'pipeline',
    size: 'card-lg',
    year: 2027,
    statusTagKey: 'status.submission',
    titleKey: 'projects.p5.title',
    descriptionKey: 'projects.p5.description',
    territory: 'Brasil',
    axis: ['Água', 'Direitos'],
    kpiLabelKey: 'labels.territorialDefense',
    kpiValue: null,
    kpiDetail: 'labels.p5.kpiDetail',
    meta: [
      { labelKey: 'project.status', value: 'projects.p5.meta.status' },
      { labelKey: 'project.scope', value: 'projects.p5.meta.pillars' }
    ],
    category: 'climate'
  },
  {
    id: 'p6',
    type: 'pipeline',
    size: 'card-md',
    year: 2026,
    statusTagKey: 'status.submission',
    titleKey: 'projects.p6.title',
    descriptionKey: 'projects.p6.description',
    territory: 'Brasil',
    axis: ['Água'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.type', value: 'Pesquisa & Advocacy' },
      { labelKey: 'project.connection', value: 'Vulcan Observatory' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.research',
    category: 'environmental'
  },
  {
    id: 'p7',
    type: 'pipeline',
    size: 'card-sm',
    year: 2026,
    statusTagKey: 'status.submission',
    titleKey: 'projects.p7.title',
    descriptionKey: 'projects.p7.description',
    territory: 'Brasil',
    axis: ['Água', 'Tecnologia'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.origin', value: 'Escola São Roque' },
      { labelKey: 'project.production', value: 'SOS Águas da Prata' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.tool',
    category: 'environmental'
  },
  {
    id: 'p8',
    type: 'pipeline',
    size: 'card-sm',
    year: 2027,
    statusTagKey: 'status.submission',
    titleKey: 'projects.p8.title',
    descriptionKey: 'projects.p8.description',
    territory: 'Brasil',
    axis: ['Direitos'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.scope', value: 'Sul/Centro América' },
      { labelKey: 'project.connection', value: 'Vulcan Observatory' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.mapping',
    category: 'climate'
  },
  {
    id: 'p9',
    type: 'pipeline',
    size: 'card-sm',
    year: 2027,
    statusTagKey: 'status.submission',
    titleKey: 'projects.p9.title',
    descriptionKey: 'projects.p9.description',
    territory: 'Brasil',
    axis: ['Água', 'Direitos'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.focus', value: 'Radiologia & Alimentos' },
      { labelKey: 'project.connection', value: 'Vulcan Observatory' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.focusArea',
    category: 'climate'
  },
  {
    id: 'p10',
    type: 'pipeline',
    size: 'card-md',
    year: 2026,
    statusTagKey: 'status.writing',
    titleKey: 'projects.p10.title',
    descriptionKey: 'projects.p10.description',
    territory: 'Brasil',
    axis: ['Água', 'Tecnologia'],
    kpiLabelKey: 'labels.grantPhase',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.type', value: 'MapBiomas + Geohidrografia' },
      { labelKey: 'project.scope', value: 'Nascentes & Bacias' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.tracking',
    category: 'environmental'
  },
  {
    id: 'p14',
    type: 'done',
    size: 'card-lg',
    year: 2016,
    statusTagKey: 'status.historic',
    titleKey: 'projects.p14.title',
    descriptionKey: 'projects.p14.description',
    territory: 'Brasil',
    axis: ['Água', 'Direitos'],
    kpiLabelKey: 'labels.communityVictory',
    kpiValue: null,
    kpiDetail: 'Concurso Curta Prata 2016',
    meta: [
      { labelKey: 'project.legacy', value: 'labels.p14.legacy' },
      { labelKey: 'project.sponsorship', value: 'Banco do Brasil' }
    ],
    category: 'climate'
  },
  {
    id: 'p14b',
    type: 'done',
    size: 'card-sm',
    year: 2016,
    statusTagKey: 'status.award',
    titleKey: 'projects.p14b.title',
    descriptionKey: 'projects.p14b.description',
    territory: 'Brasil',
    axis: ['Arte'],
    kpiLabelKey: 'labels.award',
    kpiValue: null,
    kpiDetail: 'Concurso Curta Prata 2016',
    meta: [
      { labelKey: 'project.sponsorship', value: 'Banco do Brasil' },
      { labelKey: 'project.connection', value: 'Xô Mineradoras' }
    ],
    parentId: 'p14',
    connectionTypeKey: 'connections.culturalProduction',
    category: 'culture'
  },
  {
    id: 'p15',
    type: 'done',
    size: 'card-sm',
    year: 2025,
    statusTagKey: 'status.exchange',
    titleKey: 'projects.p15.title',
    descriptionKey: 'projects.p15.description',
    territory: 'Brasil',
    axis: ['Arte', 'Direitos'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.scope', value: 'Global Network' },
      { labelKey: 'project.connection', value: 'Vulcan Observatory' }
    ],
    parentId: 'p5',
    connectionTypeKey: 'connections.relatedEvent',
    category: 'climate'
  },
  {
    id: 'p16',
    type: 'done',
    size: 'card-md',
    year: 2025,
    statusTagKey: 'status.partnership',
    titleKey: 'projects.p16.title',
    descriptionKey: 'projects.p16.description',
    territory: 'Brasil',
    axis: ['Direitos', 'Água'],
    kpiLabelKey: 'labels.empowerment',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.partners', value: 'Instituto Federal do Brasil' },
      { labelKey: 'project.role', value: 'Isadora (EG Poços de Caldas)' }
    ],
    category: 'rights'
  },
  {
    id: 'p16b',
    type: 'done',
    size: 'card-sm',
    year: 2025,
    statusTagKey: 'status.advisor',
    titleKey: 'projects.p16b.title',
    descriptionKey: 'projects.p16b.description',
    territory: 'Brasil',
    axis: ['Direitos'],
    kpiLabelKey: 'labels.communityConnection',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.role', value: 'Conselheira de Saberes' },
      { labelKey: 'project.connection', value: 'EG Cascata' }
    ],
    parentId: 'p16',
    connectionTypeKey: 'connections.facilitator',
    category: 'rights'
  },
  {
    id: 'p17',
    type: 'done',
    size: 'card-md',
    year: 2024,
    statusTagKey: 'status.partnership',
    titleKey: 'projects.p17.title',
    descriptionKey: 'projects.p17.description',
    territory: 'Brasil',
    axis: ['Arte', 'Direitos'],
    kpiLabelKey: 'labels.livingCulture',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.type', value: 'Somente mulheres' },
      { labelKey: 'project.connection', value: 'Parceiro em eventos' }
    ],
    category: 'culture'
  },
  {
    id: 'p18',
    type: 'active',
    size: 'card-lg',
    year: 2025,
    statusTagKey: 'status.virada2026',
    titleKey: 'projects.p18.title',
    descriptionKey: 'projects.p18.description',
    territory: 'Brasil',
    axis: ['Água'],
    kpiLabelKey: 'projects.p18.kpiLabel',
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.type', value: 'SAF - Sistema Agroflorestal' },
      { labelKey: 'project.status', value: 'labels.p18.status' }
    ],
    category: 'restoration'
  },
  {
    id: 'p19',
    type: 'done',
    size: 'card-md',
    year: 2024,
    statusTagKey: 'status.creativeEconomy',
    titleKey: 'projects.p19.title',
    descriptionKey: 'projects.p19.description',
    territory: 'Brasil',
    axis: ['Arte'],
    kpiLabelKey: 'labels.sustainableFashion',
    kpiValue: null,
    kpiDetail: 'labels.p19.kpiDetail',
    meta: [
      { labelKey: 'project.base', value: 'SOS Águas da Prata NGO' },
      { labelKey: 'project.focus', value: 'Redução impacto indústria fashion' }
    ],
    category: 'culture'
  },
  {
    id: 'p20',
    type: 'done',
    size: 'card-sm',
    year: 2024,
    statusTagKey: 'status.partnership',
    titleKey: 'projects.p20.title',
    descriptionKey: 'projects.p20.description',
    territory: 'Brasil',
    axis: ['Arte'],
    kpiLabelKey: null,
    kpiValue: null,
    kpiDetail: null,
    meta: [
      { labelKey: 'project.facilitators', value: 'RCC Tupã Levi, Crew Leader Isadora' },
      { labelKey: 'project.type', value: 'Educação Ambiental' }
    ],
    parentId: 'p16',
    connectionTypeKey: 'connections.educational',
    category: 'environmental'
  },
  {
    id: 'p21',
    type: 'done',
    size: 'card-sm',
    year: 2019,
    statusTagKey: 'status.founder',
    titleKey: 'projects.p21.title',
    descriptionKey: 'projects.p21.description',
    territory: 'Brasil',
    axis: ['Arte'],
    kpiLabelKey: 'labels.founderProject',
    kpiValue: null,
    kpiDetail: 'labels.p21.kpiDetail',
    meta: [
      { labelKey: 'project.type', value: 'Projeto Formativo' },
      { labelKey: 'project.legacy', value: 'labels.p21.legacy' }
    ],
    category: 'culture'
  },
  {
    id: 'p21b',
    type: 'done',
    size: 'card-md',
    year: 2024,
    statusTagKey: 'status.professional',
    titleKey: 'projects.p21b.title',
    descriptionKey: 'projects.p21b.description',
    territory: 'Brasil',
    axis: ['Arte'],
    kpiLabelKey: 'labels.professionalProject',
    kpiValue: null,
    kpiDetail: 'labels.p21b.kpiDetail',
    meta: [
      { labelKey: 'project.origin', value: 'Oficina de Música e Meio Ambiente' },
      { labelKey: 'project.base', value: 'SOS Águas da Prata' }
    ],
    parentId: 'p21',
    connectionTypeKey: 'connections.evolution',
    category: 'culture'
  },
  {
    id: 'p22',
    type: 'done',
    size: 'card-lg',
    year: 2025,
    statusTagKey: 'status.completed',
    titleKey: 'projects.p22.title',
    descriptionKey: 'projects.p22.description',
    territory: 'Brasil',
    axis: ['Arte', 'Direitos'],
    kpiLabelKey: 'labels.fullCoverage',
    kpiValue: null,
    kpiDetail: 'labels.p22.kpiDetail',
    meta: [
      { labelKey: 'project.events', value: 'Virada Climática, COP30, Vulcan Festival' },
      { labelKey: 'project.format', value: 'Documentário, Fotos, Textos' }
    ],
    category: 'climate'
  }
]