export interface IScheduled {
  especialidade: string;
  data: string;
  horario: string;
  local: string;
}

export const schedule: IScheduled[] = [
  {
    especialidade: "Dermatologia",
    data: "23/10/2021",
    horario: "10:00h",
    local: "Av. Dom Pedro I, 2840 - Planalto, Belo Horizonte/MG",
  },
  {
    especialidade: "Endocrinologia",
    data: "01/11/2021",
    horario: "15:00h",
    local: "Av. Dom Pedro I, 2840 - Planalto, Belo Horizonte/MG",
  },
];
