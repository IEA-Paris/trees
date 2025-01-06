import { ModuleType } from "../lib/generate"
import Model from "./model"
import { Sort, Views } from "./list"
import { Form } from "./form"
import defaultConfigAction from "./action"
import defaultConfigAffliation from "./affiliations"
import defautConfigApp from "./app"
import defaultConfigArticle from "./article"
import defaultConfigConsent, { ConsentForm } from "./consent"
import defaultConfigDisciplines from "./disciplines"
import defaultConfigDiscussants from "./discussants"
import defaultConfigEvents from "./events"
import defaultConfigRelatedPeople from "./relatedPeople"
import defaultConfigEventSlot, { EventSlotForm } from "./eventSlot"
import defaultConfigFellow from "./fellow"
import defaultConfigFellowship from "./fellowship"
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
import defaultConfigProject from "./project"
import defaultConfigRelatedEvents from "./relatedEvents"
import defaultConfigRelatedPublications from "./relatedPublications"
import defaultConfigRelatedNews from "./relatedNews"
import defaultConfigRelatedProject from "./relatedProject"
import defaultConfigSocials, { SocialsForm } from "./socials"
import defaultConfigSpeakers from "./speakers"
import defaultConfigSponsor from "./sponsor"
import defaultConfigTags from "./tags"
import defaultConfigVideo from "./video"
import defaultConfigVintage from "./vintage"

type ConfigValue =
  | Model
  | ConsentForm
  | EventSlotForm
  | FellowshipDetailsForm
  | GroupsForm
  | LocationForm
  | PositionForm
  | SocialsForm

const configData: Record<string, ConfigValue> = {
  action: defaultConfigAction,
  affiliations: defaultConfigAffliation,
  app: defautConfigApp,
  article: defaultConfigArticle,
  consent: defaultConfigConsent,
  disciplines: defaultConfigDisciplines,
  discussants: defaultConfigDiscussants,
  events: defaultConfigEvents,
  eventSlot: defaultConfigEventSlot,
  fellow: defaultConfigFellow,
  fellowship: defaultConfigFellowship,
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
  position: defaultConfigPosition,
  project: defaultConfigProject,
  publications: defaultConfigPublications,
  relatedEvents: defaultConfigRelatedEvents,
  relatedNews: defaultConfigRelatedNews,
  relatedProject: defaultConfigRelatedProject,
  relatedPublications: defaultConfigRelatedPublications,
  socials: defaultConfigSocials,
  speakers: defaultConfigSpeakers,
  sponsor: defaultConfigSponsor,
  tags: defaultConfigTags,
  video: defaultConfigVideo,
  vintage: defaultConfigVintage,
  relatedPeople: defaultConfigRelatedPeople,
}

export { configData }

export type { Form, Sort, Views, ConfigValue, Model, ModuleType }
