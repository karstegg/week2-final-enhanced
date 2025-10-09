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
  weekNumber: 14,
  dateRange: '29 September - 4 October',
  
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
      { site: 'Gloria', text: 'TMM availability 89%; exceeded production target by 1,789 tons for September.' },
      { site: 'N2', text: 'Alignment session held with Drills section (Engineer, GES, Foreman & Chargehands).' },
      { site: 'N3', text: 'BEV Bay-2 construction: Partial handover completed, construction activities begun.' },
      { site: 'N3', text: 'DMPR actions: Significant progress on previously identified concerns.' },
      { site: 'N3', text: 'BEV machines demonstrated stable performance with positive trending.' },
      { site: 'N3', text: 'HD 0062 drill verified 100% compliant for automation project execution.' },
    ],
    lowlights: [
      { site: 'Gloria', text: 'DT availability 79% - DT0106 breakdown on Nerospec.' },
      { site: 'N2', text: 'Loader availability below target; recurring plant breakdowns (comms).' },
      { site: 'N3', text: 'Delayed interventions to diesel fleet by OEM and specialist services (BWE & Strata).' },
    ],
    emergingIssues: [
      { site: 'Gloria', text: 'LED lights approved; awaiting NCH II to be added to planned capital.' },
      { site: 'N2', text: 'CAS Level 9 challenges (OEMs and Strata rejecting faults, leaving machines standing).' },
      { site: 'N2', text: 'PowerBI monthly dashboards not updated, showing error.' },
      { site: 'N3', text: 'STRATA technician resourcing needs alignment to meet site requirements.' },
    ],
    priorities: [
      { site: 'Gloria', text: 'Steel cord belt splice scanning on 78CV01 and 51CV01; install Type F on 53H.' },
      { site: 'N2', text: 'Arrange Bell to resolve scaler issues; GES to investigate compressor relocation.' },
      { site: 'N3', text: 'STRATA, BWE resourcing to meet site requirements.' },
    ],
  },
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: 201, target: 523 },
      rockWinderAvailability: { value: 97.02, target: 95 },
    },
    heal: {
      highlights: [
        'Shaft Repair Work with Solrock Team (Weekend No.12) completed.',
        'WTE and Rigger Ropesman positions at recommendation stage.',
        'Gloria Injection tests completed; RW Slider Installation completed.',
      ],
      lowlights: [
        'Gas Bottle Incident by SolRock on Weekend No.12.',
        'Recruitment delays: Rigger Ropesman at advert stage; 2x WTFitter require re-advertisement.',
        'RW Discharge Feeder motor down to earth.',
      ],
      emergingIssues: [
        'Low complement of Fitters and Riggers in Mechanical Section still pressuring the section.',
        'Significant impact of providing full maintenance of changehouses for all 3 shafts.',
      ],
      priorities: [
        'Shaft Repair Work with Solrock Team (Weekend No.13) + Shaft Scanning.',
        'Implement learnings from SolRock Gas Cylinder Incident.',
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week14/Gloria Weekly Availability Chart - Week14.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'HD fleet at 50% (HD0066 serviced over weekend); RT fleet at 67% (RT0027 serviced today).' },
      availability: [
        { label: 'DT', percentage: 81, target: 85 },
        { label: 'FL', percentage: 96, target: 85 },
        { label: 'HD', percentage: 87, target: 85 },
        { label: 'RT', percentage: 85, target: 85 },
        { label: 'SR', percentage: 90, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT0106 - Nerospec not selecting gears', 'DT0153 - Articulation pin'] },
        { equipment: 'RT', details: ['RT0046 - Main hydraulic pump'] },
        { equipment: 'SR', details: ['SR0037 - Park brake not releasing'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week14/N2 Weekly Availability Chart - Week14.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 86, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'RT fleet at 67% (RT0053 planned for weekend); SR at 0% (TMM not arrived from Graben).' },
      availability: [
        { label: 'DT', percentage: 75, target: 85 },
        { label: 'FL', percentage: 80, target: 85 },
        { label: 'HD', percentage: 90, target: 85 },
        { label: 'RT', percentage: 91, target: 85 },
        { label: 'SR', percentage: 95, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT128 - Input shaft bearing', 'DT121 - Gears and overspeeding', 'DT170 - Steering cylinder'] },
        { equipment: 'FL', details: ['FL66 - Overheating', 'FL102 - Overheating', 'FL68 - No movement', 'FL87 - Pressure level'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week14/N3 Weekly Availability Chart - Week14.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 89, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'DT fleet at 50% (DT0119 on breakdown with brakes); SR fleet at 80% (SR0030 not in for service).' },
      availability: [
        { label: 'DT', percentage: 86, target: 85 },
        { label: 'FL', percentage: 77, target: 85 },
        { label: 'HD', percentage: 91, target: 85 },
        { label: 'RT', percentage: 95, target: 85 },
        { label: 'SR', percentage: 94, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['FL101 - Fire suppression', 'FL90 - Engine mountings', 'FL82 - SWD box', 'FL91 - Hose broken'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 86, target: 85 },
      { label: 'FL BEV', value: 88, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100 },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Top causes: No contact to Strata module (DT0147, 90.6 hrs); Suspension at battery bay (DT0150, 9.5 hrs); Puncture front left tyre (DT0163, 9.4 hrs).',
          'Top machines: DT0147 (96.7 hrs), DT0163 (21.4 hrs), DT0150 (9.5 hrs).'
        ]
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Strata Level 9 issue (FL0108, 25.4 hrs); Battery not connecting (FL0098, 21.0 hrs); Bucket blocks/strips install (FL0113, 18.4 hrs).',
          'Top machines: FL0108 (28.4 hrs), FL0098 (21.0 hrs), FL0113 (25.2 hrs).'
        ]
      }
    ],
    batteryThemes: [
      'BEV service compliance at 100% for both DT and FL fleets.',
      'Major delays: Strata communication faults (DT0147, FL0108) and battery connection issues.',
      'Mechanical issues: Suspension, tyres, and bucket repairs impacting availability.',
    ],
  },
};