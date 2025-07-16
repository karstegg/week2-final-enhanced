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
    serviceCompliance: { label: string; value: number }[];
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
  weekNumber: 2,
  dateRange: '08 July 2025 to 14 July 2025',
  
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
      { site: 'Gloria', text: 'TMM Availability improved to 83%.' },
      { site: 'N2', text: 'Successful DMRE inspection with no major findings.' },
      { site: 'N3', text: 'HD availability improved.' },
      { site: 'N3', text: 'Major repair on DT 0147 completed, addressing system faults.' },
    ],
    lowlights: [
      { site: 'Gloria', text: 'TMM availability low (Scaler 62%, FL 64%).' },
      { site: 'N2', text: 'RT performance below 85% & low Logistics TMM availability.' },
      { site: 'N3', text: 'Diesel DT availability low due to Strata issues.' },
      { site: 'N3', text: 'Schedule compliance at monthly low.' },
    ],
    emergingIssues: [
      { site: 'Gloria', text: 'HR delay on Shift Foreman recommendation.' },
      { site: 'N2', text: 'Plant Fitter staffing issues (1 resignation, 1 suspension).' },
      { site: 'N2', text: 'Feeder damaged from oversized rocks.' },
      { site: 'N3', text: 'RT outrigger cylinder failures & parts shortages.' },
    ],
    priorities: [
      { site: 'Gloria', text: 'Expedite parts for SR0037 & line boring for FL0083.' },
      { site: 'N2', text: 'Finalize Main sub breaker installation & update DB legends.' },
      { site: 'N3', text: 'Improve DT maintenance response for Strata issues.' },
      { site: 'N3', text: 'Resolve RT outrigger repairs & parts procurement.' },
    ],
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 284, target: 525 },
    rwAvailability: { value: 98.16, target: 95.0 },
    highlights: [
      'Positives Identified during the DMPR Audit'
    ],
    lowlights: [
      'Employee engagement/resignations due to culture issues.',
      'Lamproom findings from DMPR audit.'
    ],
    emergingIssues: [
      'Low compliment of Fitters and Riggers in Mechanical Section'
    ],
    priorities: [
      'Fill critical Fitter & Rigger positions.',
      'Complete shaft repair work with Solrock.',
      'Address all DMPR audit findings.',
      'Improve employee engagement culture (with SGM).'
    ]
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week2/Gloria Weekly Availability Chart - Week2.png',
        comment: 'Weekly trend for Gloria fleet availability.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 86, target: 85 },
      serviceCompliance: { status: 'Good', details: 'Clear' },
      availability: [
        { label: 'HD', percentage: 91, target: 85 },
        { label: 'RT', percentage: 97, target: 85 },
        { label: 'SR', percentage: 67, target: 85 },
        { label: 'DT', percentage: 99, target: 85 },
        { label: 'FL', percentage: 76, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'SR', details: ['SR0037: E-frame failure'] },
        { equipment: 'FL', details: ['FL0083: Bucket movement issues'] }
      ]
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week2/N2 Weekly Availability Chart - Week2.png',
        comment: 'Weekly trend for Nchwaning2 fleet availability.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 87.4, target: 85 },
      serviceCompliance: { status: 'Good', details: 'Clear' },
      availability: [
        { label: 'HD', percentage: 96, target: 85 },
        { label: 'RT', percentage: 81, target: 85 },
        { label: 'SR', percentage: 88, target: 85 },
        { label: 'DT', percentage: 82, target: 85 },
        { label: 'FL', percentage: 90, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT120 & DT159: Door sensor faulty'] },
        { equipment: 'RT', details: ['RT40: Not starting / feed lever', 'RT43: Percussion system failure'] }
      ]
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week2/N3 Weekly Availability Chart - Week2.png',
        comment: 'Weekly trend for Nchwaning fleet availability.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 86, target: 85 },
      serviceCompliance: { status: 'Good', details: 'Maintenance compliance at 95%.' },
      availability: [
        { label: 'HD', percentage: 91, target: 85 },
        { label: 'RT', percentage: 84.6, target: 85 },
        { label: 'SR', percentage: 89, target: 85 },
        { label: 'DT Diesel', percentage: 79, target: 85 },
        { label: 'FL Diesel', percentage: 86, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT Diesel', details: ['DT0161: Gearbox issues', 'DT0160: Brakes & fire suppression', 'Ongoing Strata system challenges'] },
        { equipment: 'HD', details: ['HD0056: Starting issues', 'HD0052: Operator/cable availability'] }
      ]
    }
  },
  bev: {
    name: 'BEV Performance Overview (Nchwaning 3)',
    safety: { status: 'Good', details: 'Clear' },
    availability: [
      { label: 'DT BEV', value: 77, target: 85 },
      { label: 'FL BEV', value: 89, target: 85 }
    ],
    serviceCompliance: [
        { label: 'DT BEV', value: 67 },
        { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
        { equipment: 'DT BEV', details: ['DT0147: Split drive', 'DT0146: Strata comms', 'DT0145: Tyre bay issue', 'Red stop lamp error', 'Engine cut-off at battery bay'] },
        { equipment: 'FL BEV', details: ['FL0112: Bucket issues', 'FL0099: Transmission oil leak', 'No contacting models error', 'Vehicle sent for repairs'] }
    ],
    batteryThemes: [
        'Charging & connection errors', 
        'Battery replacement & bay issues',
        'Critical component failures (split drive, transmission)'
    ]
  },
};