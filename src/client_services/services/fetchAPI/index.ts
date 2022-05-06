// types
import { FetchConfig } from 'client_services/services/types';

export const fetchApi = async <RecordType>({
    url,
    method,
    payload,
}: FetchConfig): Promise<RecordType> => {
    let data: RecordType | null = null;

    switch (method) {
        case 'GET': {
            const response = await fetch(url);
            data = await response.json();
        }
    }

    if (data !== null) return data;

    throw new Error(
        `No response for: ${JSON.stringify({ url, method, payload })}`
    );
};
