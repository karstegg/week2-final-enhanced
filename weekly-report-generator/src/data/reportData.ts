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
  weekNumber: 12,
  dateRange: '15 - 20 September',
  
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
      { site: 'Nchwaning 2', text: 'Replacement of electrical switchgear at 3-6 Main Sub' },
      { site: 'Nchwaning 2', text: 'Management concession to approve bonus payout for employees for August KPI’s' },
      { site: 'Gloria', text: 'TMM availability 91%' },
      { site: 'Gloria', text: 'UV0068 was commissioned successfully' },
      { site: 'Gloria', text: 'Out of plan capital application for LED light installation submitted and two post lift' },
      { site: 'Nchwaning 3', text: 'Achieved strong performance across key operational metrics – Primary Production Fleet' },
      { site: 'Nchwaning 3', text: 'Successfully implemented structural changes to improve efficiency within the TMM teams' },
      { site: 'Nchwaning 3', text: 'Load and haul team has prioritized critical product mining effectively' },
      { site: 'Nchwaning 3', text: 'Positive momentum observed in team coordination and execution for improved overall results (Maintenance and Production)' },
      { site: 'Nchwaning 3', text: 'On time completion of 11.5 investigation  - HD 0054' },
      { site: 'Nchwaning 3', text: 'Offer acceptance and signing by the selected Electrical Forman position candidate' },
    ],
    lowlights: [
      { site: 'Nchwaning 2', text: 'Poor availability on FL’s and SR’s' },
      { site: 'Gloria', text: '55CV01 torn 250mm from the edge of the conveyor belt' },
      { site: 'Nchwaning 3', text: 'Property damage incident involving a DT 0161' },
      { site: 'Nchwaning 3', text: 'Battery replacement delays due to overhead crane motor failure' },
      { site: 'Nchwaning 3', text: 'Delayed interventions to Disel fleet by OEM and specialist services teams (BWE & Strata)' },
      { site: 'Nchwaning 3', text: 'HD’s radiator cleaning impacting equipment availability' },
    ],
    emergingIssues: [
      { site: 'Nchwaning 2', text: 'Adjusting to CAS level 9 (operators struggled with new scalers and also with the dump trucks)' },
      { site: 'Nchwaning 2', text: 'Employees not reporting incidents' },
      { site: 'Nchwaning 2', text: 'Site support from Kenru is still a concern (substandard work, poor reporting)' },
      { site: 'Gloria', text: 'Schedule a meeting with Emily regarding not recommended Shift Foreman: IDP, Psychometric results, Shortcomings' },
      { site: 'Nchwaning 3', text: 'HD radiator interventions are underway to enhance engine cooling performance' },
    ],
    priorities: [
      { site: 'Nchwaning 2', text: 'Continue with DMR actions' },
      { site: 'Nchwaning 2', text: 'Completion pre-production checklist on Grader' },
      { site: 'Nchwaning 2', text: 'Continue with leaky feeder repairs' },
      { site: 'Nchwaning 2', text: 'Complete the commissioning of RT62' },
      { site: 'Gloria', text: 'MTV screen non destructive test to be conducted weekend' },
      { site: 'Gloria', text: 'Vibration analysis to be conducted weekend' },
      { site: 'Gloria', text: 'Steel cord belt splice scanning to be done next week' },
      { site: 'Gloria', text: 'Stabilis to submit proposal for new 9 west dam' },
      { site: 'Nchwaning 3', text: 'Ensure consistent stock levels of essential components—cranes, fans, and battery spares—to prevent downtime and maintain operational continuity.' },
      { site: 'Nchwaning 3', text: 'Provide a rationale for excluding HD 0054 from the productivity metrics' },
      { site: 'Nchwaning 3', text: 'Stress the importance of timely intervention by OEMs and technical specialists for site equipment breakdowns, with clear escalation protocols to minimize delays.' },
      { site: 'Nchwaning 3', text: 'Develop a proactive and well-planned maintenance schedule focused on HD radiator interventions, aimed at improving engine cooling efficiency and reducing reactive repairs.' },
    ],
  },
  shaftsAndWinders: {
    tonsPerHour: { value: 371, target: 523 },
    rwAvailability: { value: 96.12, target: 95 },
    heal: {
      highlights: [
        'All planned Earthing (Annual) Test completed_awaiting reports',
        'WTE: Interviews completed',
        'Scheduled Winder Training by OEM Completed'
      ],
      lowlights: [
        'Positions to be filled taking considerable to complete:',
        '2 x Rigger Ropesman: @ Interview Stage',
        '2 x WTFitter: We have to go out on advert',
        '1 x WED: Accepted Offer starting 06Oct2025',
        '1 x WTE: Interview Stage'
      ],
      emergingIssues: [
        'Low compliment of Fitters and Riggers in Mechanical Section is still putting pressure on the Section',
        'Massive impact of providing full Maintenance of Changehouses of all 3 x Shafts….'
      ],
      priorities: [
        'Shaft Repair Work with Solrock Team_Weekend No.9',
        'Planning for Winder FE',
        'Planning for RW Slider Installation'
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week12/Gloria Weekly Availability Chart - Week12.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 91, target: 95 },
      serviceCompliance: { status: 'Good', details: 'No issues.' },
      availability: [
        { label: 'DT', percentage: 91, target: 95 },
        { label: 'FL', percentage: 99, target: 95 },
        { label: 'HD', percentage: 93, target: 95 },
        { label: 'RT', percentage: 89, target: 95 },
        { label: 'SR', percentage: 83, target: 95 }
      ],
      keyBreakdowns: [
        { equipment: 'RT', details: ['RT0060 - Resin nozzle', 'RT0046 - Resin nozzle fitting'] },
        { equipment: 'SR', details: ['SR0040 - Wiring'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week12/N2 Weekly Availability Chart - Week12.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 85, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'HD fleet at 67% and Support Equipment at 50% (UV84 breakdown).' },
      availability: [
        { label: 'DT', percentage: 85, target: 85 },
        { label: 'FL', percentage: 73, target: 85 },
        { label: 'HD', percentage: 95, target: 85 },
        { label: 'RT', percentage: 88, target: 85 },
        { label: 'SR', percentage: 82, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['FL66 brakes'] },
        { equipment: 'SR', details: ['SR27 Fire suppression system (struggled to locate scaler for 2 days)'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week12/N3 Weekly Availability Chart - Week12.png',
        comment: '',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'Issues with HD (80%), SR (80%), and Support Equipment (83%).' },
      availability: [
        { label: 'DT', percentage: 81, target: 85 },
        { label: 'FL', percentage: 93, target: 85 },
        { label: 'HD', percentage: 79, target: 85 },
        { label: 'RT', percentage: 90, target: 85 },
        { label: 'SR', percentage: 93, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['HD62 Turbo/radiator clean, low oil pressure HD56 Engine oil System and gally box, HD0054'] },
        { equipment: 'DT Diesel', details: ['DT119 Gears, DT154 Overspeed, DT148 Not starting'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 87, target: 85 },
      { label: 'FL BEV', value: 98, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100, target: 95 },
      { label: 'FL BEV', value: null, target: 95 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Top causes: Electrical issues (overheating, power loss), battery-related delays.',
          'Top machines: DT0150, DT0149, DT0147.'
        ]
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Battery charging, mechanical issues (centre bearing, gears).',
          'Top machines: FL0108, FL0107, FL0098.'
        ]
      }
    ],
    batteryThemes: [
      'Frequent battery changes and charging cycles are a primary driver of operational delays.',
      'Electrical faults, including STRATA communication and inverter errors, are a recurring issue.',
    ],
  },
};