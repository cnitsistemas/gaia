export const mapCreateFrequencyResponse = (response) => {
  return {
    id: response["id"],
    dateFrequency: response["data_chamada"],
    shift: response["turno"],
    rota_id: response["rota_id"],
    accomplished: response["realizada"],
    observation: response["observacao"],
    sense: response["sentido"],
    hour: response["horario"],
    success: true,
  };
};

export const mapMakeFrequencyResponse = (response) => {
  return {
    success: response["success"],
  };
};

export const mapFrequencyDataResponse = (response) => {
  const alunos =
    response["alunos"].map((item) => {
      return {
        name: item["nome"],
        aluno_id: item["id"],
        presenca: false,
      };
    }) || [];

  return {
    frequencia_id: response["chamada"]["id"],
    success: true,
    frequencyData: alunos,
  };
};
