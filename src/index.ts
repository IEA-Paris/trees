import { ModuleType } from "../lib/generate"
import Model from "./model"
import { Sort, Views } from "./list"
import { Form, formType } from "./form"
import defaultConfigActions from "./actions/models/actions"
import defaultConfigAffilations from "./affiliations/models/affiliations"
import defaultConfigArticle from "./publications/models/article"
import defaultConfigExperiences, {
  ExperiencesForm,
} from "./people/models/experiences"
import defautConfigApp from "./apps/models/apps"
import defaultConfigConsent, { ConsentForm } from "./people/models/consent"
import defaultConfigDisciplines from "./misc/models/disciplines"
import defaultConfigDiscussants from "./people/models/discussants"
import defaultConfigEvents from "./events/models/events"
import defaultConfigEventSlot, {
  EventSlotForm,
} from "./events/models/eventSlot"
import defaultConfigFellows from "./people/models/fellows"
import defaultConfigFellowship from "./fellowships/models/fellowships"
import defaultConfigPublications from "./publications/models/publications"
import defaultConfigFellowshipDetails, {
  FellowshipDetailsForm,
} from "./fellowships/models/fellowshipDetails"
import defaultConfigFiles from "./files/models/files"
import defaultConfigGallery from "./files/models/gallery"
import defaultConfigGroup, { GroupsForm } from "./people/models/groups"
import defaultConfigImage from "./files/models/image"
import defaultConfigLocation, { LocationForm } from "./misc/models/location"
import defaultConfigMailing from "./mailing/models/mailing"
import defaultConfigMembers from "./affiliations/models/members"
import defaultConfigNews from "./news/models/news"
import defaultConfigOrganizers from "./misc/models/organizers"
import defaultConfigPartners from "./affiliations/models/partners"
import defaultConfigPeople from "./people/models/people"
import defaultConfigPosition, { PositionForm } from "./people/models/position"
import defaultConfigProject from "./projects/models/projects"
import defaultConfigRelated from "./misc/models/related"
import defaultConfigSocials, { SocialsForm } from "./misc/models/socials"
import defaultConfigSpeakers from "./people/models/speakers"
import defaultConfigSponsor from "./misc/models/sponsor"
import defaultConfigTags from "./misc/models/tags"
import defaultConfigVideo from "./files/models/video"
import defaultConfigVintage from "./people/models/vintage"
import defaultConfigUsers from "./people/models/users"
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
  actions: defaultConfigActions,
  workExperience: defaultConfigExperiences,
  affiliations: defaultConfigAffilations,
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
  members: defaultConfigMembers,
  news: defaultConfigNews,
  organizers: defaultConfigOrganizers,
  partners: defaultConfigPartners,
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
