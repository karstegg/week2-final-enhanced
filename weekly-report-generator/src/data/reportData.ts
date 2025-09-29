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
  weekNumber: 13,
  dateRange: '22 - 27 September',
  
  cover: {
    images: [
      { src: '/images/AD30.png', alt: 'AD30 Dump Truck', className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/ST14.png', alt: 'ST14', className: 'absolute top-[35%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/S2.png', alt: 'S2', className: 'absolute top-[70%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/MT42B.png', alt: 'MT42B', className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/cover-logo.png', alt: 'Logo', className: 'absolute top-[88%] left-1/2 -translate-x-1/2 w-1/4' }
    ],
  },
  footerSrc: '/images/Footer.png',
  heal: {
    highlights: [
      { site: 'Gloria', text: '55CV01 safely spliced; NDT on MTV screen found no cracks.' },
      { site: 'N2', text: 'Grader returned and transported underground.' },
      { site: 'N3', text: 'BEV machine performance has been stable and improving.' },
      { site: 'N3', text: 'GES interviews conducted and candidates identified.' },
    ],
    lowlights: [
      { site: 'Gloria', text: 'Vibration analysis on MVT screen out of spec.' },
      { site: 'N2', text: 'Production below target; long lead time on spares for DT128 & FL92.' },
      { site: 'N3', text: 'Delayed interventions to diesel fleet by OEM/specialists.' },
      { site: 'N3', text: 'HD 0062 engine overheating leading to replacements.' },
    ],
    emergingIssues: [
      { site: 'N2', text: 'Experiencing new breakdowns after Level 9 commissioning on DTs (e.g., brakes not releasing)' },
      { site: 'N2', text: 'Similar problems with Scaler in crawl mode when working' },
      { site: 'Gloria', text: 'Meeting with HR required to discuss non-recommended Shift Foreman candidate.' },
    ],
    priorities: [
      { site: 'Gloria', text: 'Conduct vibration analysis on MTV; scan 78CV01/51CV01 belts.' },
      { site: 'N2', text: 'Review Iritron switchgear report; commission grader.' },
      { site: 'N3', text: 'Closure of major DMPR actions by 30 September 2025.' },
    ],
  },
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: 384, target: 523 },
      rockWinderAvailability: { value: 92.02, target: 95 },
    },
    heal: {
      highlights: [
        'Rerouting of water pipeline underneath Nch3 Laundry completed.',
        'Shaft Repair Work with Solrock Team (Weekend No.10) completed.',
        'WTE and Rigger Ropesman positions at recommendation stage.',
      ],
      lowlights: [
        'Recruitment delays: Rigger Ropesman at advert stage; 2x WTFitter positions require re-advertisement.',
      ],
      emergingIssues: [
        'Low compliment of Fitters and Riggers continues to pressure the Mechanical Section.',
        'Providing full maintenance of change houses for all 3 shafts has a significant impact.',
      ],
      priorities: [
        'Shaft Repair Work with Solrock Team (Weekend No.11).',
        'Planning for Winder FE and RW Slider Installation.',
        'Completing Gloria Injection tests and Nch2 EPCM Yard Minisub Maintenance.',
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week13/Gloria Weekly Availability Chart - Week13.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 93, target: 85 },
      serviceCompliance: { status: 'Good', details: 'All planned maintenance completed.' },
      availability: [
        { label: 'DT', percentage: 93, target: 85 },
        { label: 'FL', percentage: 86, target: 85 },
        { label: 'HD', percentage: 92, target: 85 },
        { label: 'RT', percentage: 87, target: 85 },
        { label: 'SR', percentage: 88, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'RT', details: ['RT0027 - Drifter'] },
        { equipment: 'FL', details: ['FL0064 - Damage axle yoke/drivelines/axle bolts'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week13/N2 Weekly Availability Chart - Week13.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 89, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'DT fleet at 67% (DT0128 breakdown), FL fleet at 33% (low availability).' },
      availability: [
        { label: 'DT', percentage: 82, target: 85 },
        { label: 'FL', percentage: 72, target: 85 },
        { label: 'HD', percentage: 91, target: 85 },
        { label: 'RT', percentage: 87, target: 85 },
        { label: 'SR', percentage: 98, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT128 - Input shaft bearing'] },
        { equipment: 'FL', details: ['FL66 - Leaking cylinders; FL120 - CAS L9 commissioning'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week13/N3 Weekly Availability Chart - Week13.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Good', details: 'All planned maintenance completed.' },
      availability: [
        { label: 'DT', percentage: 85, target: 85 },
        { label: 'FL', percentage: 90, target: 85 },
        { label: 'HD', percentage: 80, target: 85 },
        { label: 'RT', percentage: 92, target: 85 },
        { label: 'SR', percentage: 84, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['HD0062 - Engine overheat; HD0056 - No engine oil'] },
        { equipment: 'SR', details: ['SR0030 - Boom Cylinder; Strata rotation light'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 87, target: 85 },
      { label: 'FL BEV', value: 87, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: null },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Top causes: Hydraulic temperature high (DT0150), Hydraulic pipe burst (DT0171), Strata B1 comms error (DT0149).',
          'Top machines: DT0150 (39.2 hrs), DT0171 (20.5 hrs), DT0149 (12.1 hrs).'
        ]
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Battery lock stuck (FL0113), Battery not connecting (FL0107), Bucket lever faulty (FL0107).',
          'Top machines: FL0113 (12.5 hrs), FL0107 (20.2 hrs), FL0098 (12.6 hrs).'
        ]
      }
    ],
    batteryThemes: [
      'One B4 - ST14 battery pack (VPY-00048) is in a \'Breakdown\' state.',
      'Charger issues identified: Faulty modules on C4 & C5; tripping on C7 & C8.',
      'Several CCS connector cables require replacement.',
      'Low pressure in fire suppression canisters on three battery packs needs to be addressed.',
    ],
  },
};