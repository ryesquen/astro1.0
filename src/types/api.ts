export type ApiResponse = {
    docs: Doc[]
    totalDocs: number
    offset: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: any
    nextPage: number
}

export type Doc = {
    fairings: Fairings
    links: Links
    static_fire_date_utc: string
    static_fire_date_unix: number
    net: boolean
    window: number
    rocket: string
    success: boolean
    failures: Failure[]
    details: string
    crew: any[]
    ships: any[]
    capsules: any[]
    payloads: string[]
    launchpad: string
    flight_number: number
    name: string
    date_utc: string
    date_unix: number
    date_local: string
    date_precision: string
    upcoming: boolean
    cores: Core[]
    auto_update: boolean
    tbd: boolean
    launch_library_id: any
    id: string
}

export type Fairings = {
    reused: boolean
    recovery_attempt: boolean
    recovered: boolean
    ships: any[]
}

export type Links = {
    patch: Patch
    reddit: Reddit
    flickr: Flickr
    presskit: any
    webcast: string
    youtube_id: string
    article: string
    wikipedia: string
}

export type Patch = {
    small: string
    large: string
}

export type Reddit = {
    campaign: any
    launch: any
    media: any
    recovery: any
}

export type Flickr = {
    small: any[]
    original: any[]
}

export type Failure = {
    time: number
    altitude: any
    reason: string
}

export type Core = {
    core: string
    flight: number
    gridfins: boolean
    legs: boolean
    reused: boolean
    landing_attempt: boolean
    landing_success: any
    landing_type: any
    landpad: any
}
