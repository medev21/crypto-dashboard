export const fetchApi = async <RecordType>(
    url: string
): Promise<RecordType> => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};
