export const mapCreateFrequencyResponse = (response) => {
    return response.map((item) => {
        return {
            id: item['id'],
            nome: item['nome'],
        }
    }) || []
}