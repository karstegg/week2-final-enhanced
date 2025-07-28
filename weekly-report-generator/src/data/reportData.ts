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
  weekNumber: 3,
  dateRange: '14 July 2025 to 20 July 2025',
  
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
      { site: 'N2', text: 'Engineering hunt completed' },
      { site: 'N3', text: 'DT 0147 back in operation' },
      { site: 'N3', text: 'Battery Bay Floor fibrecrete completed' },
      { site: 'Gloria', text: 'SR0037 tail wheel arrived' }
    ],
    lowlights: [
      { site: 'N2', text: 'Production 13,000T below target' },
      { site: 'N3', text: 'HT cable property damage – central sections' },
      { site: 'Gloria', text: 'TMM Availability at 81%' },
      { site: 'Gloria', text: 'HD0066 Cable damage' },
      { site: 'Gloria', text: 'RT0046 Hydraulic pump issue' },
      { site: 'Gloria', text: 'SR0037 E-Frame issue' },
      { site: 'Gloria', text: 'FL0083 requires line boring' }
    ],
    emergingIssues: [
      { site: 'N2', text: 'Large rocks blocking tips' },
      { site: 'N2', text: 'Fire suppression installation halting afternoon plant shifts' },
      { site: 'N2', text: 'DT120 controller fault unresolved by OEM' },
      { site: 'N2', text: 'Critical staff shortages: 2 Mechanics and 1 Plant Fitter resigned' },
      { site: 'N3', text: "DT's cooling fan failures due to ore being loaded directly onto the articulation area." }
    ],
    priorities: [
      { site: 'N2', text: 'Engage mining to address issue of large rocks at plant tips' },
      { site: 'N2', text: 'Follow up with Barlows and third parties for DT120 repair' },
      { site: 'N2', text: 'Submit motivation for fixed-term labor to address staff shortages' },
      { site: 'N3', text: "Focus on DMPR actions for Thursday's visit" },
      { site: 'Gloria', text: 'Bronco to line bore FL0083' },
      { site: 'Gloria', text: 'Complete new 9 West dam' },
      { site: 'Gloria', text: 'Focus on improving TMM availability through targeted maintenance' }
    ]
  },

  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week3/Gloria Weekly Availability Chart - Week3.png',
        comment: 'Overall Availability MTD for the Gloria site was 85.32%, slightly exceeding the target of 85%. Performance across the fleets was mixed. The DT (98%) and HD (95%) fleets performed exceptionally well, significantly above the 85% target. However, the FL (76%), RT (75%), and SR (65%) fleets all underperformed, falling short of the target.',
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 85.32, target: 85 },
      serviceCompliance: { status: 'Good', details: 'Maintenance schedules maintained despite equipment challenges.' },
      availability: [
        { label: 'DT', percentage: 98, target: 85 },
        { label: 'FL', percentage: 76, target: 85 },
        { label: 'HD', percentage: 95, target: 85 },
        { label: 'RT', percentage: 75, target: 85 },
        { label: 'SR', percentage: 65, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['FL0083: Line boring required', 'Overall FL fleet affected by equipment issues'] },
        { equipment: 'RT', details: ['RT0046: Hydraulic pump failure'] },
        { equipment: 'SR', details: ['SR0037: E Frame issues', 'SR0037 tail wheel replacement in progress'] },
        { equipment: 'HD', details: ['HD0068: Cable damage affecting operations'] }
      ]
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week3/N2 Weekly Availability Chart - Week3.png',
        comment: 'Continued strong and stable performance with an overall MTD availability of 89.47%. All fleets are meeting or exceeding their individual performance targets.'
      },
      safety: { status: 'Good', details: 'Clear' },
      weeklyAverage: { value: 89.47, target: 85 },
      serviceCompliance: { status: 'Good', details: 'Maintenance compliance maintained despite production challenges.' },
      availability: [
        { label: 'DT', percentage: 85, target: 85 },
        { label: 'FL', percentage: 84, target: 85 },
        { label: 'HD', percentage: 93, target: 85 },
        { label: 'RT', percentage: 91, target: 85 },
        { label: 'SR', percentage: 89, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT120: Machine still standing after Barlows technician could not resolve controller fault showing door is open'] },
        { equipment: 'General', details: ['Big rocks causing blockages at tips', 'Fire suppression installation on 2West ore-pass taking out entire afternoon shift', '2 Mechanics resigned and 1 on suspension, 1 plant fitter resigned and 1 on suspension'] }
      ]
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week3/N3 Primary Equipment Daily Availabilities - Week3.png',
        comment: 'Weekly average availability was 87.73%, exceeding the target. However, daily performance for DT and FL fleets showed some volatility.'
      },
      safety: { status: 'Concern', details: 'HT cable property damage in central sections.' },
      weeklyAverage: { value: 87.73, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'Weekly compliance at 85%, below the 95% target.' },
      availability: [
        { label: 'DT', percentage: 81.9, target: 85 },
        { label: 'FL', percentage: 81.6, target: 85 },
        { label: 'HD', percentage: 88.0, target: 85 },
        { label: 'RT', percentage: 87.0, target: 85 },
        { label: 'SR', percentage: 85.8, target: 85 },
        { label: 'UV', percentage: 98.1, target: 85 },
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ["Cooling fan failures due to ore loading practices"] },
        { equipment: 'General', details: ["HT cable property damage"] }
      ]
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 82, target: 85 },
      { label: 'FL BEV', value: 78, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 85 }, // NOTE: Compliance data not in source, placeholder value used
      { label: 'FL BEV', value: 85 }  // NOTE: Compliance data not in source, placeholder value used
    ],
    breakdowns: [
      { equipment: 'D10147', details: ['Electrical Breakdown: Replace Split drive'] },
      { equipment: 'FL0112', details: ['Electrical Breakdown: Bucket Problem - E/Bay (wait for parts), repairs on steering @ battery bay'] },
      { equipment: 'FL0107', details: ['Strata system faulty', 'Multiple battery-related delays and changes'] }
    ],
    batteryThemes: [
        'Critical unit D10147 (28% availability) down for split drive replacement.',
        'Critical unit FL0112 (19% availability) down for bucket repairs.',
        'Multiple battery and charging-related issues impacting FL0107.'
    ]
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 354, target: 523 },
    rwAvailability: { value: 95.2, target: 95 },
    highlights: ['[PENDING] - Awaiting highlights for Shafts & Winders.'],
    lowlights: ['[PENDING] - Awaiting lowlights for Shafts & Winders.'],
    emergingIssues: ['[PENDING] - Awaiting emerging issues for Shafts & Winders.'],
    priorities: ['[PENDING] - Awaiting priorities for Shafts & Winders.']
  },
};