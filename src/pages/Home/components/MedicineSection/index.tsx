import React, { FormEvent, useState } from "react";
import { GiMedicines } from "react-icons/gi";
import { Container, MedicineList } from "./style";

interface MedicineTime {
  medicine: string;
  time: string;
}

const MedicineSection: React.FC = () => {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [medicineTime, setMedicineTime] = useState<MedicineTime[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "medicine":
        setMedicine(e.target.value);
        break;
      case "time":
        setTime(e.target.value);
        break;
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!medicine) {
      alert("Preencha o campo de Medicamento");
    }
    if (!time) {
      alert("Preencha o campo de Horário");
    }
    if (time && medicine) {
      const data: MedicineTime = {
        medicine: medicine,
        time: time,
      };
      setMedicine("");
      setTime("");
      setMedicineTime([...medicineTime, data]);
    }
  };

  return (
    <Container>
      <h2>Seus medicamentos</h2>
      <p>Adicione e consulte seus medicamentos abaixo:</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="medicine"
          type="text"
          placeholder="Medicamento"
        />
        <input
          onChange={handleChange}
          id="time"
          type="time"
          placeholder="Horário de consumo"
        />
        <button>Adicionar</button>
      </form>
      <MedicineList>
        {medicineTime.map((item) => {
          return (
            <div className="medicine-time">
              <GiMedicines />
              <p>{item.medicine}</p>
              <p>{item.time}</p>
            </div>
          );
        })}
      </MedicineList>
    </Container>
  );
};

export default MedicineSection;
