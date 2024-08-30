export default {
  "source": "gql",
  "form": {
    "values": {
      "title": "",
      "description": "",
      "image": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "color": "",
      "url": "",
      "date": "",
      "featured": "",
      "tags": {
        "name": "",
        "description": "",
        "icon": "",
        "createdAt": "",
        "updatedAt": ""
      },
      "relatedProject": "",
      "relatedEvents": "",
      "people": {
        "firstname": "",
        "lastname": "",
        "affiliations": {
          "location": {
            "name": "",
            "details": "",
            "alt": "",
            "street": "",
            "city": "",
            "country": "",
            "zip": "",
            "geocode": {
              "lat": "",
              "lng": ""
            }
          },
          "image": {
            "url": "",
            "caption": "",
            "alt": "",
            "copyright": "Free of rights",
            "licence": "",
            "licenseUrl": "",
            "backgroundColor": ""
          },
          "name": "",
          "ror": "",
          "url": ""
        },
        "image": {
          "url": "",
          "caption": "",
          "alt": "",
          "copyright": "Free of rights",
          "licence": "",
          "licenseUrl": "",
          "backgroundColor": ""
        },
        "socials": {
          "website": "",
          "wikipedia": "",
          "orcid": "",
          "twitter": "",
          "linkedin": "",
          "instagram": "",
          "scholar": "",
          "researchgate": "",
          "mendeley": "",
          "idRef": ""
        },
        "biography": "",
        "consent": {
          "data": false,
          "record": false,
          "diffusion": false,
          "publication": false,
          "email": false,
          "newsletter": false,
          "fellowshipnewsletter": false
        },
        "groups": {
          "team": "",
          "sab": "",
          "board": "",
          "fellow": "",
          "sponsor": "",
          "vintage": {
            "name": "",
            "year": "",
            "theme": "",
            "url": ""
          }
        },
        "lang": ""
      }
    },
    "_defaults": {
      "title": "",
      "description": "",
      "image": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "color": "",
      "url": "",
      "date": "",
      "featured": "",
      "tags": {
        "name": "",
        "description": "",
        "icon": "",
        "createdAt": "",
        "updatedAt": ""
      },
      "relatedProject": "",
      "relatedEvents": "",
      "people": {
        "firstname": "",
        "lastname": "",
        "affiliations": {
          "location": {
            "name": "",
            "details": "",
            "alt": "",
            "street": "",
            "city": "",
            "country": "",
            "zip": "",
            "geocode": {
              "lat": "",
              "lng": ""
            }
          },
          "image": {
            "url": "",
            "caption": "",
            "alt": "",
            "copyright": "Free of rights",
            "licence": "",
            "licenseUrl": "",
            "backgroundColor": ""
          },
          "name": "",
          "ror": "",
          "url": ""
        },
        "image": {
          "url": "",
          "caption": "",
          "alt": "",
          "copyright": "Free of rights",
          "licence": "",
          "licenseUrl": "",
          "backgroundColor": ""
        },
        "socials": {
          "website": "",
          "wikipedia": "",
          "orcid": "",
          "twitter": "",
          "linkedin": "",
          "instagram": "",
          "scholar": "",
          "researchgate": "",
          "mendeley": "",
          "idRef": ""
        },
        "biography": "",
        "consent": {
          "data": false,
          "record": false,
          "diffusion": false,
          "publication": false,
          "email": false,
          "newsletter": false,
          "fellowshipnewsletter": false
        },
        "groups": {
          "team": "",
          "sab": "",
          "board": "",
          "fellow": "",
          "sponsor": "",
          "vintage": {
            "name": "",
            "year": "",
            "theme": "",
            "url": ""
          }
        },
        "lang": ""
      }
    },
    "schema": {
      "title": {
        "label": "title",
        "component": "TextField",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "min": 5,
          "max": 200
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "title"
      },
      "description": {
        "label": "description",
        "component": "TextArea",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "min": 5,
          "max": 200
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "description"
      },
      "image": {
        "label": "image",
        "component": "ObjectContainerPanel",
        "type": 3,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "image",
        "items": {
          "url": {
            "type": 0,
            "component": "TextField",
            "label": "url",
            "default": "",
            "description": "The url where the image is fetched from",
            "meta": "logo",
            "hint": false,
            "rules": {
              "required": true,
              "url": true,
              "max": 2048
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            }
          },
          "caption": {
            "label": "caption",
            "component": "TextArea",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "caption"
          },
          "alt": {
            "label": "alt",
            "type": 0,
            "component": "TextArea",
            "default": "",
            "description": "Displayed if the image cannot be loaded",
            "hint": false,
            "rules": {
              "required": true,
              "min": 2,
              "max": 100
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "alt"
          },
          "copyright": {
            "label": "copyright",
            "type": 0,
            "component": "TextField",
            "default": "Free of rights",
            "description": "Owner of the image copyright",
            "hint": false,
            "rules": {
              "required": true,
              "min": 2,
              "max": 100
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "copyright"
          },
          "licence": {
            "label": "licence",
            "type": 0,
            "component": "ListAutoComplete",
            "default": null,
            "description": "The licence of the image",
            "hint": false,
            "rules": {
              "required": true,
              "min": 2,
              "max": 100
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            }
          },
          "licenseUrl": {
            "label": "licenseUrl",
            "type": 0,
            "component": "TextField",
            "default": null,
            "description": "The caption of the image",
            "hint": false,
            "rules": {
              "required": true,
              "url": true
            },
            "visibility": {
              "default": false,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "licenseUrl"
          },
          "backgroundColor": {
            "label": "backgroundColor",
            "component": "TextColorPicker",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "color": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "backgroundColor"
          }
        }
      },
      "color": {
        "label": "color",
        "component": "TextColorPicker",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "color": true
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "color"
      },
      "url": {
        "label": "url",
        "component": "TextField",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "url": true
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "url"
      },
      "date": {
        "label": "date",
        "component": "DatePicker",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "date": true
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "date"
      },
      "featured": {
        "label": "featured",
        "component": "DatePicker",
        "type": 0,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "date": true
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "featured"
      },
      "tags": {
        "label": "tags",
        "component": "CollectionContainerPanel",
        "type": 3,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "min": 1
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "tags",
        "items": {
          "name": {
            "label": "name",
            "component": "TextField",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "min": 5,
              "max": 200
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "name"
          },
          "description": {
            "label": "description",
            "component": "TextArea",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "min": 5,
              "max": 2000
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "description"
          },
          "icon": {
            "label": "icon",
            "component": "TextField",
            "type": 0,
            "default": "",
            "description": "Select your icon from material design icons https://pictogrammers.com/library/mdi/",
            "hint": false,
            "rules": {},
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "icon"
          },
          "createdAt": {
            "label": "createdAt",
            "component": false,
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {},
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "createdAt"
          },
          "updatedAt": {
            "label": "updatedAt",
            "component": false,
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {},
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "updatedAt"
          }
        }
      },
      "relatedProject": {
        "label": "relatedProject",
        "component": "DocumentPicker",
        "type": 4,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "min": 1
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "relatedProject"
      },
      "relatedEvents": {
        "label": "relatedEvent",
        "component": "DocumentPicker",
        "type": 4,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {},
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "event"
      },
      "people": {
        "label": "people",
        "component": "CollectionContainerPanel",
        "type": 3,
        "default": "",
        "description": "",
        "hint": false,
        "rules": {
          "required": true,
          "min": 1
        },
        "visibility": {
          "default": true,
          "switchIf": [],
          "disjonctive": false
        },
        "meta": "people",
        "items": {
          "firstname": {
            "label": "firstname",
            "component": "TextField",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "min": 1,
              "max": 200
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "firstname"
          },
          "lastname": {
            "label": "lastname",
            "component": "TextField",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "min": 1,
              "max": 200
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "lastname"
          },
          "affiliations": {
            "label": "affiliations",
            "component": "CollectionContainerPanel",
            "type": 3,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": false
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "affiliations"
          },
          "image": {
            "label": "image",
            "component": "ObjectContainerPanel",
            "type": 3,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": false
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "image"
          },
          "socials": {
            "label": "socials",
            "component": "ObjectContainerPanel",
            "type": 3,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {},
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "socials"
          },
          "biography": {
            "label": "biography",
            "component": "TextArea",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "min": 5,
              "max": 2000
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "biography"
          },
          "consent": {
            "label": "consent",
            "component": "ObjectContainerPanel",
            "type": 3,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "consent"
          },
          "groups": {
            "label": "groups",
            "component": "ObjectContainerPanel",
            "type": 3,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "groups"
          },
          "lang": {
            "label": "lang",
            "component": "ListAutoComplete",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "lang"
          }
        }
      }
    }
  },
  "list": {
    "items": [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    "itemsPerPage": 9,
    "itemsPerPageArray": [
      9,
      12,
      16
    ],
    "filtersCount": 0,
    "views": {
      "rows": {
        "icon": "view-list",
        "default": true
      },
      "tiles": {
        "name": "tiles",
        "icon": "view-quilt"
      },
      "grid": {
        "name": "grid",
        "icon": "view-day"
      }
    },
    "sort": {
      "nameasc": {
        "icon": "sort-alphabetical-ascending",
        "text": "by-name-from-a-to-z",
        "value": [
          "article_title",
          1
        ]
      },
      "namedesc": {
        "icon": "sort-alphabetical-descending",
        "text": "by-name-from-z-to-a",
        "value": [
          "article_title",
          -1
        ]
      },
      "dateasc": {
        "icon": "sort-calendar-descending",
        "text": "by-date-most-recent-first",
        "value": [
          "date",
          -1
        ],
        "default": true
      },
      "datedesc": {
        "icon": "sort-calendar-ascending",
        "text": "by-date-oldest-first",
        "value": [
          "date",
          1
        ]
      }
    },
    "view": {
      "icon": "view-list",
      "default": true,
      "name": "rows"
    },
    "filters": {
      "year": {
        "type": "Select",
        "rules": {},
        "label": "year",
        "items": []
      }
    },
    "limit": 9,
    "sortBy": [
      "date"
    ],
    "sortDesc": [
      -1
    ]
  },
  "loading": [],
  "current": null,
  "resetFilters": true
}