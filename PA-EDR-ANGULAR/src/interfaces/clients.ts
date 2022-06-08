export interface iClientsBody {
    _id: string,
    pc_name: string,
    username: string
}

export interface iClients {
    success?: boolean,
    body?: Array<iClientsBody>
}
