export interface ChampionsInterface {
    sys:      SysElement;
    total:    number;
    skip:     number;
    limit:    number;
    items:    Item[];
    includes: Includes;
}

export interface Includes {
    Asset: Asset[];
}

export interface Asset {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   AssetFields;
}

export interface AssetFields {
    title:       string;
    description: DescriptionEnum;
    file:        File;
}

export enum DescriptionEnum {
    AHorse = "A Horse",
    CityPicturedFromTheSky = "City pictured from the sky",
    Empty = "",
    ImagenDeZiggs = "Imagen de Ziggs",
    JohnWithSparkler = "John with Sparkler",
    TattooedManWalkingInAField = "Tattooed man walking in a field",
}

export interface File {
    url:         string;
    details:     Details;
    fileName:    string;
    contentType: ContentTypeEnum;
}

export enum ContentTypeEnum {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface Details {
    size:  number;
    image: Image;
}

export interface Image {
    width:  number;
    height: number;
}

export interface Metadata {
    tags: any[];
}

export interface AssetSys {
    space:        ContentType;
    id:           string;
    type:         FluffyType;
    createdAt:    Date;
    updatedAt:    Date;
    environment:  ContentType;
    revision:     number;
    locale:       Locale;
    contentType?: ContentType;
}

export interface ContentType {
    sys: ContentTypeSys;
}

export interface ContentTypeSys {
    id:       ID;
    type:     PurpleType;
    linkType: LinkType;
}

export enum ID {
    BlogPost = "blogPost",
    Champions = "champions",
    LolChampions = "lolChampions",
    Master = "master",
    Person = "person",
    The3Z392Wln8Jjc = "3z392wln8jjc",
}

export enum LinkType {
    ContentType = "ContentType",
    Environment = "Environment",
    Space = "Space",
}

export enum PurpleType {
    Link = "Link",
}

export enum Locale {
    EnUS = "en-US",
}

export enum FluffyType {
    Asset = "Asset",
    Entry = "Entry",
}

export interface Item {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   ItemFields;
}

export interface ItemFields {
    championName?:        string;
    championNickName?:    string;
    championImage?:       Asset;
    championRol?:         string;
    championDificult?:    ChampionDificult;
    championDescription?: ChampionAbilityE;
    championSkillImage?:  Asset[];
    championPassive?:     ChampionAbilityE;
    championAbilityQ?:    ChampionAbilityE;
    championAbilityW?:    ChampionAbilityE;
    championAbilityE?:    ChampionAbilityE;
    championAbilityR?:    ChampionAbilityE;
    championsSkins?:      Asset[];
    championSkinName?:    string[];
    name?:                string;
    description?:         ChampionAbilityE | string;
    title?:               string;
    slug?:                string;
    heroImage?:           Asset;
    body?:                string;
    author?:              Author;
    publishDate?:         string;
    tags?:                string[];
    company?:             string;
    shortBio?:            string;
    email?:               string;
    phone?:               string;
    facebook?:            string;
    twitter?:             string;
    github?:              string;
    image?:               Asset;
}

export interface Author {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   AuthorFields;
}

export interface AuthorFields {
    name:     string;
    title:    string;
    company:  string;
    shortBio: string;
    email:    string;
    phone:    string;
    facebook: string;
    twitter:  string;
    github:   string;
    image:    Asset;
}

export interface ChampionAbilityE {
    data:     Data;
    content:  ChampionAbilityEContent[];
    nodeType: ChampionAbilityENodeType;
}

export interface ChampionAbilityEContent {
    data:     Data;
    content:  ContentContent[];
    nodeType: FluffyNodeType;
}

export interface ContentContent {
    data:     Data;
    marks:    SysElement[];
    value:    string;
    nodeType: PurpleNodeType;
}

export interface Data {
}

export interface SysElement {
    type: string;
}

export enum PurpleNodeType {
    Text = "text",
}

export enum FluffyNodeType {
    Heading5 = "heading-5",
    Heading6 = "heading-6",
    Paragraph = "paragraph",
}

export enum ChampionAbilityENodeType {
    Document = "document",
}

export enum ChampionDificult {
    Alta = "ALTA",
    Baja = "BAJA",
    Moderada = "MODERADA",
}
