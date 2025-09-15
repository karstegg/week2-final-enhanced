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
    tonsPerHour: { value: number; target: number };
    rwAvailability: { value: number; target: number };
    highlights: string[];
    lowlights: string[];
    emergingIssues: string[];
    priorities: string[];
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
  weekNumber: 11,
  dateRange: '08 - 14 September',
  
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
      { site: 'Nchwaning 2', text: 'New equipment commissioned (2 LCs, 2 Scalers) and positive feedback from TMM audit.' },
      { site: 'Gloria', text: 'TMM availability at 93% and crusher stop block safely repaired.' },
      { site: 'Nchwaning 3', text: 'Progress on fire suppression systems.' },
      { site: 'Nchwaning 3', text: 'BEV workshop prefab office delivered.' },
    ],
    lowlights: [
      { site: 'Nchwaning 2', text: 'Shortlisted candidates failed psychometric assessments for elec chargehand and shift foreman' },
      { site: 'Nchwaning 2', text: 'Behind on production performance due to stop and fix issued on machines' },
      { site: 'Nchwaning 3', text: 'Emergency water line pressure reducing valve (PRV) failure.' },
    ],
    emergingIssues: [
      { site: 'Nchwaning 2', text: 'Stop and fix issued for TMM which are not correctly setup for fire protection' },
      { site: 'Nchwaning 2', text: 'Disciplinary hearing for Mr Duba scheduled for Monday' },
      { site: 'Gloria', text: 'Labor shortages impacting Plant Section, Shift Foreman, and Boilermaker Chargehand roles.' },
      { site: 'Nchwaning 3', text: 'Response to breakdowns in the Utility section.' },
    ],
    priorities: [
      { site: 'Nchwaning 2', text: 'Address key maintenance: electrical switchgear installation, overdue services, and panel audits.' },
      { site: 'Nchwaning 2', text: 'Recruitment for 3 mechanics underway.' },
      { site: 'Gloria', text: 'Infrastructure focus: Replace conveyor, audit electricals, complete scaler audit, and improve road illumination.' },
      { site: 'Nchwaning 3', text: 'Complete fire suppression remediations.' },
      { site: 'Nchwaning 3', text: 'Focus on stabilizing the utility section.' },
    ],
  },
  shaftsAndWinders: {
    name: 'Shafts & Winders',
    production: {
      tonsPerHour: { value: 385, target: 523 },
      rockWinderAvailability: { value: 100.0, target: 95 },
    },
    heal: {
      highlights: [
        'Annual Shaft Schedule on Par.',
        'Dynamics Completed.'
      ],
      lowlights: [
        'Delays in filling key positions (2x Rigger, 2x Fitter, 1x WTE).'
      ],
      emergingIssues: [
        'Staff shortages in Mechanical section causing pressure.',
        'Maintenance of 3 change houses impacting resources.'
      ],
      priorities: [
        'Shaft Repair Work with Solrock Team (Weekend 9).',
        'Planning for Winder Front-Ends.',
        'Planning for RW Slider Installation.'
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week11/Gloria Weekly Availability Chart - Week11.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 93, target: 95 },
      serviceCompliance: { status: 'Issues', details: 'RT service compliance at 67% (RT0060 service pending).' },
      availability: [
        { label: 'DT', percentage: 98, target: 95 },
        { label: 'FL', percentage: 99, target: 95 },
        { label: 'HD', percentage: 89, target: 95 },
        { label: 'RT', percentage: 88, target: 95 },
        { label: 'SR', percentage: 90, target: 95 }
      ],
      keyBreakdowns: [
        { equipment: 'RT', details: ['RT0046 Cable'] },
        { equipment: 'SR', details: ['SR0017 Diesel tank loose'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week11/N2 Weekly Availability Chart - Week11.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 80, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'FL fleet at 67% due to reschedules for LHD availability, CAS installation, and stop-and-fix. Support Equipment at 83%.' },
      availability: [
        { label: 'DT', percentage: 88, target: 85 },
        { label: 'FL', percentage: 63, target: 85 },
        { label: 'HD', percentage: 93, target: 85 },
        { label: 'RT', percentage: 84, target: 85 },
        { label: 'SR', percentage: 70, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['Fire suppression stop and fix FL66 and FL87; CAS Level 9 commissioning FL66 and FL68'] },
        { equipment: 'RT', details: ['Fire suppression stop & fix RT40'] },
        { equipment: 'SR', details: ['Fire suppression stop & fix SR25; SR27; SR33 and SR45'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week11/N3 Weekly Availability Chart - Week11.png',
        comment: 'DT avail 72%, FL avail 60%, HD avail 77%, RT avail 87%, SR avail 81%',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 76, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'RT compliance at 80% (RT0041 not in use) and SR compliance at 80% (SR0034 not in for service).' },
      availability: [
        { label: 'DT', percentage: 72, target: 85 },
        { label: 'FL', percentage: 60, target: 85 },
        { label: 'HD', percentage: 77, target: 85 },
        { label: 'RT', percentage: 87, target: 85 },
        { label: 'SR', percentage: 81, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['Fire suppression issues (HD56), pump not switching, HD54 out of service, broken door bolts (HD51).'] },
        { equipment: 'SR', details: ['Broken boom (SR24).'] },
        { equipment: 'DT Diesel', details: ['Fire suppression (DT154), gear issues (DT119), camera fault (DT148).'] },
        { equipment: 'FL Diesel', details: ['Fire suppression issues (FL103, FL91, FL82).'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 84, target: 85 },
      { label: 'FL BEV', value: 90, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100, target: 95 },
      { label: 'FL BEV', value: null, target: 95 }
    ],
    breakdowns: [
      {
        fleet: 'DT BEV',
        details: [
          'Top causes: Cab loose (DT0150), Overheating & traction motor faults (DT147, DT171), STRATA/electrical issues (DT163, DT149).',
          'Top machines: DT0150, DT0171, DT0149.'
        ]
      },
      {
        fleet: 'FL BEV',
        details: [
          'Top causes: Boilermaker for half-arrows (FL0112), various electrical faults (BMS, door locks) (FL108, FL99), STRATA faults (FL98).',
          'Top machines: FL0112, FL0108, FL0098.'
        ]
      }
    ],
    batteryThemes: [
      'Multiple charger faults (modules, tripping, connectors) are impacting operations.',
      '3 batteries are currently out of service for maintenance (TMS, fire suppression).',
      'Worn charger and battery inlet connectors are a likely root cause for charging stops.',
      'Battery-to-machine ratio remains healthy, meeting the 1.6 target.',
    ],
  },
};