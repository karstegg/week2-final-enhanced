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
  weekNumber: 4,
  dateRange: '21 July 2025 to 27 July 2025',
  
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
      { site: 'N2', text: 'Improved machine availability' },
      { site: 'N3', text: 'Excellent improvement on BEV DT\'s and overall improved machines performance' },
      { site: 'Gloria', text: 'TMM availability increased to 88% and all scalers are back in production' },
      { site: 'Gloria', text: 'Steady recovery of equipment performance to above target, especially SCalers; however FLs still hampered by lineboring repair work on FL0083' }
    ],
    lowlights: [
      { site: 'N2', text: 'Gr12 brake issues & DT120 MC24 issues delaying operations' },
      { site: 'N3', text: 'Urgent bucket repairs required on FLs' },
      { site: 'Gloria', text: 'FL availability still a problem due to lineboring' },
      { site: 'Gloria', text: 'Diesel shortage underground' }
    ],
    emergingIssues: [
      { site: 'N2', text: 'Fire suppression system installations for conveyors and the workshop are a key focus' },
      { site: 'N3', text: 'Stores delivery issues for spares and frequent changes to TMM schedule impacting compliance' },
      { site: 'Gloria', text: 'Labour shortage at Plant Section' }
    ],
    priorities: [
      { site: 'N2', text: 'Focus on DMPR action for wheel nut indicators and increase focus on RTs' },
      { site: 'N3', text: 'Accelerated intervention on FL bucket repairs' },
      { site: 'N3', text: 'Focus on DMPR action for wheel nut indicators' },
      { site: 'Gloria', text: 'Bronco to line bore FL0083' },
      { site: 'Gloria', text: 'Complete new 9 West dam and appoint GES' }
    ]
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week4/Gloria Weekly Availability Chart - Week4.png',
        comment: 'Good performance with weekly average at 87.8%. Most fleets exceeded targets, but FL underperformed due to repairs and SR was below target.',
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 87.8, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'RT compliance at 50% as RT0045 was not brought in for service.' },
      availability: [
        { label: 'DT', percentage: 95, target: 85 },
        { label: 'FL', percentage: 75, target: 85 },
        { label: 'HD', percentage: 92, target: 85 },
        { label: 'RT', percentage: 100, target: 85 },
        { label: 'SR', percentage: 88, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL0083', details: ['Line boring'] }
      ]
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week4/N2 Weekly Availability Chart - Week4.png',
        comment: 'Excellent performance with an overall weekly availability of 90.39%. All fleets significantly exceeded their performance targets.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 90.39, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'Compliance issues on HD (50%) and RT (75%) due to artisan availability and breakdowns.' },
      availability: [
        { label: 'DT', percentage: 94, target: 85 },
        { label: 'FL', percentage: 93, target: 85 },
        { label: 'HD', percentage: 95, target: 85 },
        { label: 'RT', percentage: 90, target: 85 },
        { label: 'SR', percentage: 90, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'SR', details: ['SR25 pedal issues', 'SR29 lighting problems'] }
      ]
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week4/N3 Weekly Availability Chart - Week4.png',
        comment: 'Strong performance with weekly average availability at 89.23%. Most fleets performed well, though DT and FL had some significant breakdowns.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 89.23, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'Compliance issues on DT BEV (50%), RT (80%), and Support Equipment (40%).' },
      availability: [
        { label: 'DT', percentage: 90, target: 85 },
        { label: 'FL', percentage: 88, target: 85 },
        { label: 'HD', percentage: 94, target: 85 },
        { label: 'RT', percentage: 94, target: 85 },
        { label: 'SR', percentage: 96, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT0161: Major propshaft breakdown'] },
        { equipment: 'FL', details: ['FL0107: Camera issues', 'FL0102: Steering problems'] }
      ]
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 98, target: 85 },
      { label: 'FL BEV', value: 83, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 50 },
      { label: 'FL BEV', value: null } // No maintenance scheduled
    ],
    breakdowns: [
      { equipment: 'DT BEV', details: ['Auto electrical system faults'] },
      { equipment: 'FL BEV', details: ['Boilermaker repairs (FL0099, FL0098)', 'Mechanical & Electrical faults (FL0107, FL0108)', 'BMS errors preventing start-up', 'Steering system issues'] }
    ],
    batteryThemes: [
        'Persistent battery and charging issues impacting both fleets.',
        'Significant maintenance requirements, especially on FL fleet (boilermaker, cameras).',
        'Electrical and software (BMS, Camera) faults are a primary driver of downtime.'
    ]
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 224, target: 523 },
    rwAvailability: { value: 95.65, target: 95 },
    highlights: [
      'SolRock Progress for Week No.5',
      'Movement with Regards to Fitter and Rigger Positions....'
    ],
    lowlights: [
      'Employee Engagement/Resignations Engagement with SGM due to Culture Issues Identified in Section',
      'Lamproom Findings Identified with Quarterly Audit',
      'Changehouse Issues at NCh3'
    ],
    emergingIssues: [
      'Low compliment of Fitters and Riggers in Mechanical Section is still putting pressure on the Section'
    ],
    priorities: [
      'Nch2 Main Fan No.1 Impeller and Bearings Replacement',
      'Completing Fitter & Rigger Positions in Winder Mechanical Section',
      'Shaft Repair Work with Solrock Team Weekend No.5',
      'Address culture & resignation issues with SGM'
    ]
  },
};