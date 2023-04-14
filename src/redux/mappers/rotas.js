export const mapFetchRoutersResponse = (response) => {
    return response.map((item) => {
        return {
            id: item['id'],
            nome: item['nome'],
        }
    }) || []
}