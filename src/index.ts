import { ModuleType } from "../lib/generate"
import Model from "./model"
import { Sort, Views } from "./list"
import { Form, formType, FormWithMeta } from "./form"
import defaultConfigAction from "./action"
import defaultConfigAffilation from "./affiliation"
import defaultConfigExperiences, { ExperiencesForm } from "./experiences"
import defautConfigApp from "./apps"
import defaultConfigArticle from "./article"
import defaultConfigConsent, { ConsentForm } from "./consent"
import defaultConfigDisciplines from "./disciplines"
import defaultConfigDiscussants from "./discussants"
import defaultConfigEvents from "./events"
import defaultConfigEventSlot, { EventSlotForm } from "./eventSlot"
import defaultConfigFellows from "./fellows"
import defaultConfigFellowship from "./fellowships"
import defaultConfigPublications from "./publications"
import defaultConfigFellowshipDetails, {
  FellowshipDetailsForm,
} from "./fellowshipDetails"
import defaultConfigFiles from "./files"
import defaultConfigGallery from "./gallery"
import defaultConfigGroup, { GroupsForm } from "./groups"
import defaultConfigImage from "./image"
import defaultConfigLocation, { LocationForm } from "./location"
import defaultConfigMailing from "./mailing"
import defaultConfigMember from "./member"
import defaultConfigNews from "./news"
import defaultConfigOrganizers from "./organizers"
import defaultConfigPartner from "./partner"
import defaultConfigPeople from "./people"
import defaultConfigPosition, { PositionForm } from "./position"
import defaultConfigProject from "./projects"
import defaultConfigRelated from "./related"
import defaultConfigSocials, { SocialsForm } from "./socials"
import defaultConfigSpeakers from "./speakers"
import defaultConfigSponsor from "./sponsor"
import defaultConfigTags from "./tags"
import defaultConfigVideo from "./video"
import defaultConfigVintage from "./vintage"
import defaultConfigUsers from "./users"
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
