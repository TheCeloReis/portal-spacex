export interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

export interface Patch {
  small: string | null;
  large: string | null;
}

export interface Reddit {
  campaign: string | null;
  launch: string | null;
  media: string | null;
  recovery: string | null;
}

export interface Flickr {
  small: string[];
  original: string[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string | null;
  webcast: string | null;
  youtube_id: string | null;
  article: string | null;
  wikipedia: string | null;
}

export interface Failure {
  time: number;
  altitude?: number | null;
  reason: string;
}

export interface Core {
  core: string | null;
  flight: number | null;
  gridfins: boolean | null;
  legs: boolean | null;
  reused: boolean | null;
  landing_attempt: boolean | null;
  landing_success?: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export interface LaunchesResponse {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc?: string | null;
  static_fire_date_unix?: number | null;
  tbd: boolean;
  net: boolean;
  window: number | null;
  rocket: string;
  success: boolean | null;
  details: string | null;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  launch_library_id: string | null;
  failures: Failure[];
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  id: string;
}

export interface Height {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface ThrustSeaLevel {
  kN: number;
  lbf: number;
}

export interface FirstStageThrustVacuum {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  thrust_sea_level: ThrustSeaLevel;
  thrust_vacuum: FirstStageThrustVacuum;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number | null;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface CompositeHeight {
  meters?: number | null;
  feet?: number | null;
}

export interface CompositeDiameter {
  meters?: number | null;
  feet?: number | null;
}

export interface CompositeFairing {
  height: CompositeHeight;
  diameter: CompositeDiameter;
}

export interface Payloads {
  composite_fairing: CompositeFairing;
  option_1: string;
}

export interface SecondStage {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number | null;
}

export interface Isp {
  sea_level: number;
  vacuum: number;
}

export interface EngineThrustSeaLevel {
  kN: number;
  lbf: number;
}

export interface EngineThrustVacuum {
  kN: number;
  lbf: number;
}

export interface Engines {
  isp: Isp;
  thrust_sea_level: EngineThrustSeaLevel;
  thrust_vacuum: EngineThrustVacuum;
  number: number;
  type: string;
  version: string;
  layout: string | null;
  engine_loss_max: number | null;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

export interface LandingLegs {
  number: number;
  material: string | null;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface RocketsResponse {
  height: Height;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
