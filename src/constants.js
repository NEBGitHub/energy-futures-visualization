import TotalIcon from '@material-ui/icons/DataUsage';
import ElectricityIcon from '@material-ui/icons/FlashOn';
import OilIcon from '@material-ui/icons/Opacity';
import GasIcon from '@material-ui/icons/LocalGasStation';
import BioIcon from '@material-ui/icons/EcoOutlined';
import CoalIcon from '@material-ui/icons/OutdoorGrillOutlined';
import HydroIcon from '@material-ui/icons/Waves';
import NuclearIcon from '@material-ui/icons/PanoramaVerticalOutlined';
import WindIcon from '@material-ui/icons/ToysOutlined';
import ResidentialIcon from '@material-ui/icons/HouseOutlined';
import CommercialIcon from '@material-ui/icons/ApartmentOutlined';
import IndustrialIcon from '@material-ui/icons/BuildOutlined';
import TransportIcon from '@material-ui/icons/LocalShippingOutlined';

export const applicationPath = {
  en: 'energy-future',
  fr: 'avenir-energetique',
};

export const lang = (typeof document !== 'undefined'
    && document.location
    && document.location.href
    && document.location.href.includes(applicationPath.fr))
  || (process.env.NODE_ENV === 'development'
    && typeof window !== 'undefined'
    && window.localStorage
    && window.localStorage.getItem('dev-lang') === 'fr')
  ? 'fr' : 'en';

// TODO: Remove and replace using intl in the relevant components for translations
export const UNIT_NAMES = {
  petajoules: 'PETAJOULES',
  kilobarrelEquivalents: 'kBOE/d',
  gigawattHours: 'GW.h',
  kilobarrels: 'kB/d',
  thousandCubicMetres: 'km³/d',
  cubicFeet: 'Bcf/d',
  millionCubicMetres: 'Mm³/d',
};

export const PAGES = [
  {
    label: 'Landing',
    id: 'landing',
    bg: '#EEE',
  },
  {
    label: 'By Region',
    id: 'by-region',
    bg: '#6799CC',
  },
  {
    label: 'By Sector',
    id: 'by-sector',
    bg: '#349999',
    sourceType: 'energy',
  },
  {
    label: 'Electricity',
    id: 'electricity',
    bg: '#363796',
    sourceType: 'electricity',
  },
  {
    label: 'Scenarios',
    id: 'scenarios',
    bg: '#CA9830',
  },
  // {
  //   label: 'Demand',
  //   id: 'demand',
  //   bg: '#CC6666',
  // },
];

export const CONFIG_LAYOUT = {
  energyDemand: {
    name: 'Total Demand',
    icon: TotalIcon,
    unit: ['petajoules', 'kilobarrelEquivalents'],
  },
  electricityGeneration: {
    name: 'Electricity',
    icon: ElectricityIcon,
    unit: ['gigawattHours', 'petajoules', 'kilobarrelEquivalents'],
  },
  oilProduction: {
    name: 'Oil Production',
    icon: OilIcon,
    unit: ['kilobarrels', 'thousandCubicMetres'],
  },
  gasProduction: {
    name: 'Gas Production',
    icon: GasIcon,
    unit: ['millionCubicMetres', 'cubicFeet'],
  },
};

export const SECTOR_LAYOUT = {
  total: {
    name: 'Total Demand',
    icon: TotalIcon,
  },
  residential: {
    name: 'Residential',
    icon: ResidentialIcon,
  },
  commercial: {
    name: 'Commercial',
    icon: CommercialIcon,
  },
  industrial: {
    name: 'Industrial',
    icon: IndustrialIcon,
  },
  transportation: {
    name: 'Transportation',
    icon: TransportIcon,
  },
};

/**
 * TODO: replace it with real colors from UI designers.
 */
export const SCENARIO_COLOR = {
  Reference: '#AAA',
  Technology: '#3692FA',
  'Higher Carbon Price': '#0B3CB4',
  'High Price': '#6C5AEB',
  'Low Price': '#082346',
  Constrained: '#333333',
  'High LNG': '#2B6762',
  'No LNG': '#3692FA',
};

export const REGION_COLORS = {
  YT: '#4E513F',
  SK: '#4D8255',
  QC: '#985720',
  PE: '#E49FAB',
  ON: '#E4812C',
  NU: '#683A96',
  NT: '#DA4367',
  NS: '#7773AF',
  NL: '#87C859',
  NB: '#B03AAB',
  MB: '#F2CB53',
  BC: '#82BCE4',
  AB: '#274368',
};

export const SOURCE_COLORS = {
  electricity: {
    BIO: '#4D8255',
    COAL: '#4E513F',
    HYDRO: '#274368',
    GAS: '#F2CB53',
    OIL: '#E4812C',
    RENEWABLE: '#B2BCE4',
    NUCLEAR: '#683A96',
  },
  energy: {
    BIO: '#4D8255',
    COAL: '#4E513F',
    ELECTRICITY: '#7ACBCB',
    GAS: '#F2CB53',
    OIL: '#E4812C',
  },
  gas: {},
  oil: {},
};

export const SOURCE_ICONS = {
  electricity: {
    BIO: BioIcon,
    COAL: CoalIcon,
    HYDRO: HydroIcon,
    GAS: GasIcon,
    OIL: OilIcon,
    RENEWABLE: WindIcon,
    NUCLEAR: NuclearIcon,
  },
  energy: {
    BIO: BioIcon,
    COAL: CoalIcon,
    ELECTRICITY: ElectricityIcon,
    GAS: GasIcon,
    OIL: OilIcon,
  },
  gas: {},
  oil: {},
};

export const DEFAULT_CONFIG = {
  page: 'landing', // e.g. by-region, by-sector, electricity, senarios, demand
  mainSelection: 'energyDemand', // e.g. electricityGeneration, oilProduction, gasProduction
  unit: 'petajoules', // e.g. kilobarrelEquivalents, gigawattHours, kilobarrels, thousandCubicMetres, cubicFeet, millionCubicMetres
  view: 'region', // e.g. region or source
  sector: 'total', // e.g. residential, commercial, industrial, or industrial
  scenarios: [],
  provinces: [],
  provinceOrder: [],
  sources: [],
  sourceOrder: [],
};
