export interface iVirustotalResults {
    description: string
}

export interface iVirustotalBody {
    _id: string,
    crowdsourced_yara_results: Array<iVirustotalResults>,
    name: string
}

export interface iVirustotal {
    success?: boolean,
    body?: iVirustotalBody,
    message_error?: string
}