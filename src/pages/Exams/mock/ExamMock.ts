export interface IExam {
  titulo: string;
  data: string;
  horario: string;
  metodo: string;
  info?: {
    hemacias: string;
    hemoglobina: string;
    hematocrito: string;
    vcm: string;
    hcm: string;
    chcm: string;
    rdw: string;
    leucocitos: string;
    neutrofilos: string;
    linfocitos: string;
    monocitos: string;
    eosinofilos: string;
    basofilos: string;
    plaquetas: string;
  };
  interpretacao?: string;
  nota?: string;
}

export const exams: IExam[] = [
  {
    titulo: "HEMOGRAMA",
    data: "16/09/2021",
    horario: "08:17h",
    metodo: "Contagem automatizada através de citometria de fluxo",
    info: {
      hemacias: "5.040.000/mm3 (4.500.000 A 5.900.000/mm3)",
      hemoglobina: "14,7 g/dl (13,5 A 17,5 g/dl)",
      hematocrito: "45,0% (41,0 A 53,0 %)",
      vcm: "89,3 fl (80,0 A 100,0 fl)",
      hcm: "29,1 pg (26,0 A 34,0 pg)",
      chcm: "32,5 g/dl (31,0 A 36,0 g/dl)",
      rdw: "12,4 % (11,5 A 15,0 %)",
      leucocitos: "Global: 6.100/mm3 (3.500 A 10.500/mm3)",
      neutrofilos: "59,7% 3.650/mm3 (1.700 A 8.000/mm3)",
      linfocitos: "29,5% 1.810/mm3 (900 A 2.900/mm3)",
      monocitos: "8,3% 510/mm3 (300 A 900/mm3)",
      eosinofilos: "2,4% 140/mm3 (50 A 500/mm3)",
      basofilos: " 0,2% (10/mm3 ATE 100/mm3)",
      plaquetas: " 216.000/mm3 (150.000 A 450.000/mm3)",
    },
  },
  {
    titulo: "DIAGNÓSTICO MOLECULAR CORONAVÍRUS SARS-CoV-2",
    data: "03/03/2021",
    horario: " 13:13h",
    metodo:
      "RT-PCR (Transcrição Reversa seguida de Reação em Cadeia da Polimerase em Tempo Real)",
    interpretacao:
      "NÃO DETECTADO: Negativo na amostra analisada. DETECTADO O RNA DO SARS-CoV-2: Positivo na amostra analisada.",
    nota: "O método utilizado tem como base o protocolo disponibilizado pelo Centro de Controle de Doenças (Centers for Disease Control and Prevention - CDC) ou pelo Instituto de Virologia Charité - Universidade de Berlin. Ambos foram validados com amostras clínicas e/ou controles sintéticos, apresentando 100% de concordância.",
  },
];
