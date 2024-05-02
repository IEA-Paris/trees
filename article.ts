import { image } from './image';
import { people } from './people';
import { discipline } from './discipline';
import { type } from './type';
import { video } from './video'
import { tag } from './tag'

export type article = {
    title: String,
    abstract: String,
    image: image,
    video: video,
    needDOI: boolean,
    DOI: string,
    Zid: string,
    highlight: boolean,
    date: Date,
    authors: [people],
    issue: string,
    lang: string,
    disciplines: [discipline],
    type: [type],
    tag: [tag]
}