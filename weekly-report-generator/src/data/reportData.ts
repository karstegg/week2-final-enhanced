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
  weekNumber: 5,
  dateRange: '28 July 2025 to 03 August 2025',
  
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
        { site: 'N2', text: '2 new scalers (SR53, SR54) have arrived.' },
        { site: 'Gloria', text: 'TMM availability increased from 88% to 91%.' },
        { site: 'Gloria', text: 'Achieved 80,454 tons vs 79,237 tons target.' },
        { site: 'N3', text: 'Strong performance on standard fleet, with SR fleet at 94% availability.' },
        { site: 'N2', text: 'Good progress on fire suppression installation on conveyor.' }
    ],
    lowlights: [
        { site: 'N3', text: 'SR0030 Scaler overturned Incident.' },
        { site: 'N2', text: 'Breakdowns on Gr12 (brakes) and DT120 (MC34 issues) caused delays.' },
        { site: 'Gloria', text: 'FL Availability below 85% due to ongoing repairs on FL0083.' },
        { site: 'N3', text: 'Breakdowns on HD0056 (feed cylinder) and DT047 (tyre).' },
        { site: 'N2', text: 'Only one tip in operation - civil work completed.' },
        { site: 'N3', text: 'Below target performance on DTs and FLs (72%)' }
    ],
    emergingIssues: [
        { site: 'N2', text: 'Fire suppression installation for conveyors is a key focus.' },
        { site: 'Gloria', text: 'Awaiting spares for SR0040 (Starter).' },
        { site: 'Gloria', text: 'Labor shortage at Plant Section.' }
    ],
    priorities: [
        { site: 'N2', text: 'DMPR action: installing wheel nut indicators on LDs and Fermels.' },
        { site: 'Gloria', text: 'Complete line boring and bucket fitting for FL0083.' },
        { site: 'N2', text: 'Install CAS level 9.' },
        { site: 'N3', text: 'Scaler Incident investigation.' },
        { site: 'Gloria', text: 'Submit Capital application for DT105 & 106.' }
    ],
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week5/Gloria Weekly Availability Chart - Week5.png',
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 91.78, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'Compliance issues on HD (50%) and RT (67%).' },
      availability: [
        { label: 'DT', percentage: 98, target: 85 },
        { label: 'FL', percentage: 82, target: 85 },
        { label: 'HD', percentage: 95, target: 85 },
        { label: 'RT', percentage: 93, target: 85 },
        { label: 'SR', percentage: 89, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL0083', details: ['Line boring and bucket fitting outstanding'] },
        { equipment: 'SR0040', details: ['Waiting for spares (Starter)'] }
      ]
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week5/N2 Weekly Availability Chart - Week5.png',
        comment: 'Good performance with a weekly average of 87%. RT and SR fleets performed well, while FL and HD were slightly below target.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 87, target: 85 },
      serviceCompliance: { status: 'Good', details: 'All major fleets at 100% compliance.' },
      availability: [
        { label: 'DT', percentage: 85, target: 85 },
        { label: 'FL', percentage: 82, target: 85 },
        { label: 'HD', percentage: 83, target: 85 },
        { label: 'RT', percentage: 94, target: 85 },
        { label: 'SR', percentage: 88, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD Fleet', details: ['HD46 service', 'HD63 boom cylinder', 'HD65 steering'] },
        { equipment: 'DT120', details: ['Service', 'Steering cylinder', 'Strata issues'] }
      ]
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week5/N3 Weekly Availability Chart - Week5.png',
        comment: 'Solid performance with a weekly average of 87%. SR fleet was a standout at 94%, while DT was slightly below target.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 87, target: 85 },
      serviceCompliance: { status: 'Good', details: 'No major compliance issues reported for standard fleet.' },
      availability: [
        { label: 'DT', percentage: 83, target: 85 },
        { label: 'FL', percentage: 85, target: 85 },
        { label: 'HD', percentage: 84, target: 85 },
        { label: 'RT', percentage: 86, target: 85 },
        { label: 'SR', percentage: 94, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD0056', details: ['Feed cylinder issues'] },
        { equipment: 'DT0109', details: ['Strata issues, swelling parts'] },
        { equipment: 'DT0147', details: ['FTS and flat tyre replacement'] }
      ]
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 72, target: 85 },
      { label: 'FL BEV', value: 72, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: null },
      { label: 'FL BEV', value: null }
    ],
    breakdowns: [
      { equipment: 'DT0149', details: ['Hydraulic oil leak → Battery parts shortage (4-day outage)'] },
      { equipment: 'DT0150', details: ['Strata gear system failure (ongoing 3+ days)'] },
      { equipment: 'DT0147', details: ['Tire replacement (post-puncture repair)'] },
      { equipment: 'FL0099', details: ['Coolant leak - BMS error/not starting (2-day impact)'] },
      { equipment: 'FL0107', details: ['Bucket damage requiring boilershop repair'] }
    ],
    batteryThemes: [
      'Supply chain vulnerability: BEV parts unavailable (DT0149)',
      'BMS system faults: FL0099 battery management issues',
      'Parts lead times: Specialized components vs diesel equivalents',
      'Maintenance complexity: Multi-system failures on single units'
    ]
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 266, target: 523 },
    rwAvailability: { value: 96, target: 95 },
    highlights: [
      'Investigation on NLTI_FAC_Completed',
      'Possible solution identified with Safewind Control Systems to resolve "Tip and Start" issue',
      '1 x WED Identified'
    ],
    lowlights: [
      'Lamproom Findings Identified with Quarterly Audit',
      'Changehouse Issues at NCh3'
    ],
    emergingIssues: [
        'Low compliment of Fitters and Riggers in Mechanical Section continues to put pressure on the Section'
    ],
    priorities: [
        'Address Lamproom and Changehouse findings from audits.',
        'Finalize solution for "Tip and Start" issue with Safewind.'
    ]
  },
};