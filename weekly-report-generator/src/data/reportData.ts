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
  weekNumber: 6,
  dateRange: '04 August 2025 to 10 August 2025',
  
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
        { site: 'N3', text: 'Consistent improvement trend on BEVs, week-on-week.' },
        { site: 'Gloria', text: 'Strong FL & RT availability.' },
        { site: 'N2', text: 'Good overall fleet availability, above target.' }
    ],
    lowlights: [
        { site: 'Gloria', text: 'Production loss: CV0051 torn for 25m (Wed-Fri outage).' },
        { site: 'N2', text: 'Plant stoppages and availability of scalers.' },
        { site: 'N3', text: 'Production targets not met.' }
    ],
    emergingIssues: [
      { site: 'N2', text: 'Grader on breakdown (brakes); utility section efficiency concerns.' },
      { site: 'Gloria', text: 'Labour shortages; relief staffing covering critical roles.' },
      { site: 'N3', text: 'Scaler OEM deviations noted; Epiroc spares availability critical.' }
    ],
    priorities: [
      { site: 'N2', text: 'Install RT50 transmission and commission new scalers.' },
      { site: 'Gloria', text: '9 West dam redesign; submit chute capital (await updated quote).' },
      { site: 'N3', text: 'Install scaler doors and correct deviations.' }
    ],
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week6/Gloria Weekly Availability Chart - Week6.png',
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 89, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'HD fleet at 50% compliance, other fleets at 100%.' },
      availability: [
        { label: 'DT', percentage: 94, target: 85 },
        { label: 'FL', percentage: 81, target: 85 },
        { label: 'HD', percentage: 90, target: 85 },
        { label: 'RT', percentage: 88, target: 85 },
        { label: 'SR', percentage: 92, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL0083', details: ['Line boring'] }
      ]
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week6/N2 Weekly Availability Chart - Week6.png',
        comment: 'Weekly average 86%. DT/HD strong; FL/SR below target; RT near target.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 86, target: 85 },
      serviceCompliance: { status: 'Good', details: 'DT, FL, HD, RT, SR fleets at 100% compliance; Support Equipment at 89%.' },
      availability: [
        { label: 'DT', percentage: 92, target: 85 },
        { label: 'FL', percentage: 77, target: 85 },
        { label: 'HD', percentage: 91, target: 85 },
        { label: 'RT', percentage: 86, target: 85 },
        { label: 'SR', percentage: 80, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['FL66 front propshaft', 'FL86 engine cut off'] },
        { equipment: 'SR', details: ['SR27 wiring', 'SR42 boom'] }
      ]
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week6/N3 Weekly Availability Chart - Week6.png',
        comment: 'Weekly average 86.14%. RT/FL strong; SR moderate; DT below target.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 86.14, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'SR fleet at 80% compliance with HD0050 not in service.' },
      availability: [
        { label: 'DT', percentage: 82, target: 85 },
        { label: 'FL', percentage: 90, target: 85 },
        { label: 'HD', percentage: 87, target: 85 },
        { label: 'RT', percentage: 91, target: 85 },
        { label: 'SR', percentage: 88, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['Water coolant issues', 'Weld hose frame problems'] },
        { equipment: 'RT', details: ['Drill rig no power'] },
        { equipment: 'DT Diesel', details: ['Overspeed', 'Oil leak', 'Gears fault'] }
      ]
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 89, target: 85 },
      { label: 'FL BEV', value: 79, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100 },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      { equipment: 'FL0098', details: ['EMS error (reported Aug 8 & 9) - critical battery/electrical system issue.'] },
      { equipment: 'FL0107', details: ['Oil leak (Aug 8) impacting operations post-bucket replacement.'] },
      { equipment: 'FL0101', details: ['Tyre damage (Aug 9) taking unit out of service.'] },
      { equipment: 'DT0150', details: ['Park brake engaging due to faulty door switch (initially suspected Strata/CAS issue).'] }
    ],
    batteryThemes: [
      'FL BEV Availability Root Causes: EMS/electrical faults (FL0098) and hydraulic oil leaks (FL0107) were primary drivers.',
      'Persistent Battery Charging Issues: DT0150 & DT0163 both required intervention for charging, impacting overall fleet readiness.',
      'Maintenance Interplay: While scheduled work (bucket replacements) was completed, emergent issues on other units negated availability gains.'
    ]
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 394, target: 523 },
    rwAvailability: { value: 97, target: 95 },
    highlights: [
      'Safewind Control Systems Completed Loadcell Installation in Nch2 + Nch3 Headgear',
      '1 x Winder Filter Started'
    ],
    lowlights: [
      'Employee Engagement/Resignations Engagement with SGM due to Culture Issues Identified in Section',
      'Issues with lamp room - PP360, findings from DMR/HQ audits'
    ],
    emergingIssues: [
        'Low compliment of Fitters and Riggers in Mechanical Section is still putting pressure on the Section',
        'Massive impact of providing full Maintenance of Changehouses of all 3 x Shafts',
        'No Budget Provision for New Changehouse Maintenance Scope'
    ],
    priorities: [
        'Nch2 Main Fan No.1 impeller/bearings replacement; address WTW audit findings',
        'Shaft repairs with Solrock (Wk 6) and prep for DMPR audit (12 Aug 2025)',
        'Implement NLTI FAC recommendations; close lamproom audit findings; employee engagement follow-ups'
    ]
  },
};