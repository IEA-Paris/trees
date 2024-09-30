export default {
  "source": "gql",
  "form": {
    "values": {
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
    },
    "_defaults": {
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
    },
    "schema": {
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
        "meta": "affiliations",
        "items": {
          "location": {
            "label": "location",
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
            "meta": "location"
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
            "meta": "image"
          },
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
          "ror": {
            "label": "ror",
            "component": "TextField",
            "type": 0,
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "ror": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "ror"
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
          }
        }
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
        "meta": "socials",
        "items": {
          "website": {
            "label": "website",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "website"
          },
          "wikipedia": {
            "label": "wikipedia",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "wikipedia"
          },
          "orcid": {
            "label": "orcid",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "orcid": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "orcid"
          },
          "twitter": {
            "label": "twitter",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "twitter"
          },
          "linkedin": {
            "label": "linkedin",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "linkedin"
          },
          "instagram": {
            "label": "instagram",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "instagram"
          },
          "scholar": {
            "label": "scholar",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "scholar"
          },
          "researchgate": {
            "label": "researchgate",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "researchgate"
          },
          "mendeley": {
            "label": "mendeley",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "mendeley"
          },
          "idRef": {
            "label": "idRef",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
            "hint": false,
            "rules": {
              "url": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "idRef"
          }
        }
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
        "meta": "consent",
        "items": {
          "data": {
            "label": "data",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
            "description": "data consent (display info about me)",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "data"
          },
          "record": {
            "label": "record",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
            "description": "record consent (record my activity, droit à l'image)",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "record"
          },
          "diffusion": {
            "label": "diffusion",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
            "description": "broadcast consent (broadcast my activity, diffusion de contenus)",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "diffusion"
          },
          "publication": {
            "label": "publication",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
            "description": "publication consent (publish my content, generate DOIs)",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "publication"
          },
          "email": {
            "label": "email",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
            "description": "email communications (including newsletter)",
            "hint": false,
            "rules": {
              "required": true
            },
            "visibility": {
              "default": true,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "email"
          },
          "newsletter": {
            "label": "newsletter",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
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
            "meta": "newsletter"
          },
          "fellowshipnewsletter": {
            "label": "fellowshipnewsletter",
            "component": "BooleanCheckbox",
            "type": 0,
            "default": false,
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
            "meta": "fellowshipnewsletter"
          }
        }
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
        "meta": "groups",
        "items": {
          "team": {
            "label": "team",
            "component": "BooleanCheckbox",
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
            "meta": "team"
          },
          "sab": {
            "label": "sab",
            "component": "BooleanCheckbox",
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
            "meta": "sab"
          },
          "board": {
            "label": "board",
            "component": "BooleanCheckbox",
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
            "meta": "board"
          },
          "fellow": {
            "label": "fellow",
            "component": "BooleanCheckbox",
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
            "meta": "fellow"
          },
          "sponsor": {
            "label": "sponsor",
            "component": "BooleanCheckbox",
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
            "meta": "sponsor"
          },
          "vintage": {
            "label": "vintage",
            "component": "CollectionContainerPanel",
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
            "meta": "vintage"
          }
        }
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
        "items": ""
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
  "loading": true,
  "current": null,
  "resetFilters": true
}