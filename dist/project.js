export default {
  "source": "md",
  "form": {
    "values": {
      "title": "",
      "shortDescription": "",
      "description": "",
      "url": "",
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
      "relatedEvents": "",
      "relatedNews": "",
      "image": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "gallery": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "video": {
        "url": "",
        "alt": "",
        "caption": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "tags": {
        "name": "",
        "description": "",
        "icon": "",
        "createdAt": "",
        "updatedAt": ""
      },
      "files": {
        "name": "",
        "url": "",
        "size": "",
        "fileType": "",
        "hash": "",
        "path": "",
        "file": "",
        "image": "",
        "thumb": "",
        "createdAt": "",
        "updatedAt": "",
        "id": ""
      },
      "color": "",
      "date": "",
      "featured": ""
    },
    "_defaults": {
      "title": "",
      "shortDescription": "",
      "description": "",
      "url": "",
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
      "relatedEvents": "",
      "relatedNews": "",
      "image": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "gallery": {
        "url": "",
        "caption": "",
        "alt": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "video": {
        "url": "",
        "alt": "",
        "caption": "",
        "copyright": "Free of rights",
        "licence": "",
        "licenseUrl": "",
        "backgroundColor": ""
      },
      "tags": {
        "name": "",
        "description": "",
        "icon": "",
        "createdAt": "",
        "updatedAt": ""
      },
      "files": {
        "name": "",
        "url": "",
        "size": "",
        "fileType": "",
        "hash": "",
        "path": "",
        "file": "",
        "image": "",
        "thumb": "",
        "createdAt": "",
        "updatedAt": "",
        "id": ""
      },
      "color": "",
      "date": "",
      "featured": ""
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
      "shortDescription": {
        "label": "shortDescription",
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
        "meta": "shortDescription"
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
      "affiliations": {
        "label": "affiliations",
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
      "relatedEvents": {
        "label": "relatedEvents",
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
        "meta": "relatedEvents"
      },
      "relatedNews": {
        "label": "relatedNews",
        "component": "DocumentPicker",
        "type": 4,
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
        "meta": "relatedNews"
      },
      "image": {
        "label": "image",
        "component": "ObjectContainerPanel",
        "type": 3,
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
      "gallery": {
        "label": "gallery",
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
        "meta": "gallery",
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
      "video": {
        "label": "video",
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
        "meta": "video",
        "items": {
          "url": {
            "type": 0,
            "component": "TextField",
            "label": "url",
            "default": "",
            "description": "The url where the image is fetched from",
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
            },
            "meta": "url"
          },
          "alt": {
            "label": "alt",
            "type": 0,
            "component": "TextField",
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
          "caption": {
            "label": "caption",
            "type": 0,
            "component": "TextField",
            "default": "",
            "description": "",
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
            "meta": "caption"
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
            "component": "TextField",
            "default": null,
            "description": "The licence of the video",
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
            "meta": "licence"
          },
          "licenseUrl": {
            "label": "licenseUrl",
            "type": 0,
            "component": "TextField",
            "default": null,
            "description": "The caption of the video",
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
            "type": 0,
            "component": "TextColorPicker",
            "default": null,
            "description": "",
            "hint": false,
            "rules": {
              "required": true,
              "color": true
            },
            "visibility": {
              "default": false,
              "switchIf": [],
              "disjonctive": false
            },
            "meta": "backgroundColor"
          }
        }
      },
      "tags": {
        "label": "tags",
        "component": "ListAutoComplete",
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
      "files": {
        "label": "files",
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
        "meta": "files",
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
          "size": {
            "label": "size",
            "component": false,
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
            "meta": "size"
          },
          "fileType": {
            "label": "type",
            "component": "ListSelect",
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
            "meta": "type"
          },
          "hash": {
            "label": "hash",
            "component": false,
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
            "meta": "hash"
          },
          "path": {
            "label": "path",
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
            "meta": "path"
          },
          "file": {
            "label": "file",
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
            "meta": "file"
          },
          "image": {
            "label": "image",
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
            "meta": "image"
          },
          "thumb": {
            "label": "thumb",
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
            "meta": "thumb"
          },
          "createdAt": {
            "label": "createdAt",
            "component": false,
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
            "meta": "createdAt"
          },
          "updatedAt": {
            "label": "updatedAt",
            "component": false,
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
            "meta": "updatedAt"
          },
          "id": {
            "label": "id",
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
            "meta": "id"
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
      "date": {
        "label": "date",
        "component": "FiDatePicker",
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
      "status": {
        "type": "Select",
        "rules": {},
        "label": "status",
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