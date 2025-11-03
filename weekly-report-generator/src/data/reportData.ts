export interface Availability {
  label: string;
  percentage: number;
  target?: number;
}

export interface ReportData {
  weekNumber: number;
  dateRange: string;
  cover: {
    images: {
      src: string;
      alt: string;
      className: string;
    }[];
  };
  footerSrc: string;
  heal: {
    highlights: { site: string; text: string; }[];
    lowlights: { site: string; text: string; }[];
    emergingIssues: { site: string; text: string; }[];
    priorities: { site: string; text: string; }[];
  };
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: number; target: number };
      rockWinderAvailability: { value: number; target: number };
    };
    heal: {
      highlights: string[];
      lowlights: string[];
      emergingIssues: string[];
      priorities: string[];
    };
  };
  sites: {
    [key: string]: SitePerformance;
  };
  bev: {
    name: string;
    availability: { label: string; value: number; target: number }[];
    serviceCompliance: { label: string; value: number | null }[];
    breakdowns: { equipment: string; details: string[] }[];
    batteryThemes: string[];
  };
}

export interface SitePerformance {
  name: string;
  trendChart: {
    src: string;
    comment?: string;
  };
  safety: {
    status: 'Good' | 'Incident' | 'Concern';
    details: string;
  };
  weeklyAverage: { value: number; target: number };
  serviceCompliance: {
    status: 'Good' | 'Issues';
    details: string;
  };
  availability: Availability[];
  keyBreakdowns?: { equipment: string; details: string[] }[];
}

export const reportData: ReportData = {
  weekNumber: 18,
  dateRange: '25 - 31 October',
  
  cover: {
    images: [
      { src: '/images/AD30.png', alt: 'AD30 Dump Truck', className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/ST14.png', alt: 'ST14', className: 'absolute top-[35%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/S2.png', alt: 'S2', className: 'absolute top-[70%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/Winder.png', alt: 'Winder - Shafts & Winders', className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/cover-logo.png', alt: 'Logo', className: 'absolute top-[88%] left-1/2 -translate-x-1/2 w-1/4' }
    ],
  },
  footerSrc: '/images/Footer.png',
  heal: {
    highlights: [
      { site: 'Gloria', text: 'UV0128 Level 9 commissioning completed.' },
      { site: 'N3', text: 'HD, RT, SR performing well (96%, 97%, 97%); FL BEV at 97%.' },
    ],
    lowlights: [
      { site: 'Gloria', text: 'DT0153 belly plate damage; Production 30% below target; RT at 80% (RT0046 carousel damage).' },
      { site: 'N2', text: 'Vent door damaged Strata proxmod; Compressor failure; DT availability 80%.' },
      { site: 'N3', text: 'DT-Diesel 85%, FL-Diesel 74% (FL82 scrapped, FL91 fire suppression); DT BEV 67%; 65CV01 belt torn 260m.' },
    ],
    emergingIssues: [
      { site: 'Gloria', text: 'Stores shortage: carousel and RT transmission parts unavailable.' },
      { site: 'N2', text: 'Barlows support required; Illumination test failures (all scalers).' },
      { site: 'N3', text: 'DT171 A-frame bearing damaged (parts at workshop); EMI on BEV.' },
    ],
    priorities: [
      { site: 'Gloria', text: 'DT0153 transport to Broncho for line boring; Aard & Fermel CAS L9 implementation.' },
      { site: 'N2', text: '3rd party brake testing; FL100 investigation (03 Nov); LDO587 brake testing.' },
      { site: 'N3', text: 'EMI test report actions; Nerospec CAS implementation; Battery audit; S2 project support.' },
      { site: 'All Sites', text: 'CAS L9 implementation for all support equipment.' },
    ],
  },
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: 308, target: 523 },
      rockWinderAvailability: { value: 100, target: 95 },
    },
    heal: {
      highlights: [
        'All Winder MRTs completed.',
        'All Main Fan 3-monthly inspections completed.',
        'Approval to appoint Box Operators at 3-7 Level.',
      ],
      lowlights: [
        'Breakdown on Nch2 Fan No.2 coupling.',
      ],
      emergingIssues: [
        'Low compliment of Fitters and Riggers in Mechanical Section.',
        'Massive impact of providing full maintenance of changehouses across all 3 shafts.',
        'Sign-off delayed on 1 WTE and 1 Rigger Ropesman.',
      ],
      priorities: [
        'Shaft Repair Work with Solrock Team (Weekend 13).',
        'Employee engagement/resignations with SGM.',
        'Assist with 3rd Quarter Safety Campaign.',
        'Shaft exam with Machinery Inspector.',
        'Preparation for SHERQ System Audit.',
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week18/Gloria Weekly Availability Chart Week18.png',
        comment: 'Week Summary: DT 80%; FL 89%; RT 80% (carousel, compressor); Overall 88%.',
      },
      safety: { status: 'Incident', details: 'DT0153 belly plate damage (property damage)' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Good', details: 'FL, HD, RT, Support Equip at 100%.' },
      availability: [
        { label: 'DT', percentage: 80, target: 85 },
        { label: 'FL', percentage: 89, target: 85 },
        { label: 'HD', percentage: 89, target: 85 },
        { label: 'RT', percentage: 80, target: 85 },
        { label: 'SR', percentage: 98, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT0106 Nerospec; DT0152 Level 9 conversion'] },
        { equipment: 'RT', details: ['RT0046 carousel damage; RT0045 compressor issue'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week18/N2 Weekly Availability Chart Week18.png',
        comment: 'Week Summary: DT 80%; FL 81%; Overall 88%.',
      },
      safety: { status: 'Incident', details: 'Vent door damaged Strata proxmod (property damage)' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'FL, HD, RT at 100%; DT at 33% (DT128, DT121 breakdowns); Support Equip 6%.' },
      availability: [
        { label: 'DT', percentage: 80, target: 85 },
        { label: 'FL', percentage: 81, target: 85 },
        { label: 'HD', percentage: 92, target: 85 },
        { label: 'RT', percentage: 96, target: 85 },
        { label: 'SR', percentage: 87, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT121 park brake and gears; DT128 torque converter; DT120 aircon'] },
        { equipment: 'FL', details: ['FL106 upbox; FL102 seat; FL87 powerless; FL66 seat'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week18/N3 Weekly Availability Chart Week18.png',
        comment: 'Week Summary: DT 78%; FL 89%; Overall 89%.',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 89, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'DT/FL Diesel 100%; FL BEV 100%; DT BEV 50%; HD 100%; RT 100%; SR 80%.' },
      availability: [
        { label: 'DT-Diesel', percentage: 78, target: 85 },
        { label: 'FL-Diesel', percentage: 89, target: 85 },
        { label: 'HD', percentage: 96, target: 85 },
        { label: 'RT', percentage: 97, target: 85 },
        { label: 'SR', percentage: 97, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL-Diesel', details: ['FL82 scrapped; FL91 fire suppression system'] },
        { equipment: 'DT-Diesel', details: ['DT131 steering; DT161 no acceleration'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 67, target: 85 },
      { label: 'FL BEV', value: 97, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 50 },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Top causes: Strata faults (DT0146, DT0149, DT0150, DT0162, DT0163); Battery connection issues (DT0147, 9.6 hrs); Brake system/regenerative braking (DT0162, 8.9 hrs).',
          'Top machines: DT0146 (battery cut-off, 15.1 hrs); DT0150 (junction block valve, 37.2 hrs); DT0162 (brake/regen braking, 8.9 hrs).'
        ]
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Half arrows boilermaker (FL0113, 51.8 hrs; FL0112, 3.8 hrs); Strata faults (FL0107, 4.9 hrs); Mechanical issues (FL0108, 0.6 hrs).',
          'Top machines: FL0113 (half arrows, 51.8 hrs); FL0107 (Strata, 4.9 hrs); FL0112 (half arrows, 3.8 hrs).'
        ]
      }
    ],
    batteryThemes: [
      'Charger 7 & 8: 1 module each tripping mini sub-breaker; charging at 75% capacity.',
      'CCS connector cables (Posts 3, 6, 7) need replacement; new 300A cables received, upgraded spring set on order.',
      'Charger/battery inlet connector wear causing charging stops; DCDC campaign to kick off once technicians onboarded.',
      'Battery ratio: 10 ST14-B4 (1.6 ratio); 12 MT42-B5 (above 1.6 ratio); VPY00088 breakdown (spare parts at BR).',
    ],
  },
};