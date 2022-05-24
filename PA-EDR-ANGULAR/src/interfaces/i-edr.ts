export interface iEdrBodyData {
    hash_id: string,
    path_file: string
}

export interface iEdrBody {
    _id: string,
    computer_windows_id: string,
    created_timestamp: string,
    data: iEdrBodyData,
    data_type: string
}

export interface iEdr {
    success?: boolean,
    body?: Array<iEdrBody>,
    message_error?: string
}