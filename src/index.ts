import { ModuleType } from "../lib/generate"
import Model from "./model"
import { Sort, Views } from "./list"
import { Form, formType } from "./form"
import defaultConfigAction from "./action/action"
import defaultConfigAffilation from "./affiliation/affiliation"
import defaultConfigArticle from "./publications/article"
import defaultConfigExperiences, { ExperiencesForm } from "./people/experiences"
import defautConfigApp from "./apps/apps"
import defaultConfigConsent, { ConsentForm } from "./people/consent"
import defaultConfigDisciplines from "./misc/disciplines"
import defaultConfigDiscussants from "./people/discussants"
import defaultConfigEvents from "./events/events"
import defaultConfigEventSlot, { EventSlotForm } from "./events/eventSlot"
import defaultConfigFellows from "./people/fellows"
import defaultConfigFellowship from "./fellowships/fellowships"
import defaultConfigPublications from "./publications/publications"
import defaultConfigFellowshipDetails, {
  FellowshipDetailsForm,
} from "./fellowships/fellowshipDetails"
import defaultConfigFiles from "./files/files"
import defaultConfigGallery from "./files/gallery"
import defaultConfigGroup, { GroupsForm } from "./people/groups"
import defaultConfigImage from "./files/models/image"
import defaultConfigLocation, { LocationForm } from "./misc/location"
import defaultConfigMailing from "./mailing/mailing"
import defaultConfigMember from "./affiliation/member"
import defaultConfigNews from "./news/news"
import defaultConfigOrganizers from "./misc/organizers"
import defaultConfigPartner from "./affiliation/partner"
import defaultConfigPeople from "./people/people"
import defaultConfigPosition, { PositionForm } from "./people/position"
import defaultConfigProject from "./projects/projects"
import defaultConfigRelated from "./misc/related"
import defaultConfigSocials, { SocialsForm } from "./misc/socials"
import defaultConfigSpeakers from "./people/speakers"
import defaultConfigSponsor from "./misc/sponsor"
import defaultConfigTags from "./misc/tags"
import defaultConfigVideo from "./files/video"
import defaultConfigVintage from "./people/vintage"
import defaultConfigUsers from "./people/users"
type ConfigValue =
  | Model
  | ExperiencesForm
  | ConsentForm
  | EventSlotForm
  | FellowshipDetailsForm
  | GroupsForm
  | LocationForm
  | PositionForm
  | SocialsForm

const templates: Record<string, ConfigValue> = {
  action: defaultConfigAction,
  workExperience: defaultConfigExperiences,
  affiliation: defaultConfigAffilation,
  apps: defautConfigApp,
  article: defaultConfigArticle,
  consent: defaultConfigConsent,
  disciplines: defaultConfigDisciplines,
  discussants: defaultConfigDiscussants,
  events: defaultConfigEvents,
  eventSlot: defaultConfigEventSlot,
  experiences: defaultConfigExperiences,
  fellows: defaultConfigFellows,
  fellowships: defaultConfigFellowship,
  fellowshipDetails: defaultConfigFellowshipDetails,
  files: defaultConfigFiles,
  gallery: defaultConfigGallery,
  groups: defaultConfigGroup,
  image: defaultConfigImage,
  location: defaultConfigLocation,
  mailing: defaultConfigMailing,
  member: defaultConfigMember,
  news: defaultConfigNews,
  organizers: defaultConfigOrganizers,
  partner: defaultConfigPartner,
  people: defaultConfigPeople,
  positions: defaultConfigPosition,
  projects: defaultConfigProject,
  publications: defaultConfigPublications,
  related: defaultConfigRelated,
  socials: defaultConfigSocials,
  speakers: defaultConfigSpeakers,
  sponsor: defaultConfigSponsor,
  tags: defaultConfigTags,
  users: defaultConfigUsers,
  video: defaultConfigVideo,
  vintage: defaultConfigVintage,
}

export { templates }

export type { Form, Sort, Views, ConfigValue, Model, ModuleType, formType }
