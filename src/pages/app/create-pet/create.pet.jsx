import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPet } from "../../../data/create-pet";
import { faker } from "../../../lib/faker";
import style from "./style.module.css";

export function CreatePet() {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("Macho");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("Pequeno");
  const [breed, setBreed] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  async function handleCreatePet(e) {
    e.preventDefault();

    await createPet({
      city,
      gender,
      age,
      name,
      size,
      breed,
      phone,
    });

    navigate("/dashboard");
  }

  function generatePet() {
    setCity(faker.address.city());
    setGender(faker.helpers.arrayElement(["Macho", "Fêmea"]));
    setAge(faker.datatype.number({ min: 1, max: 10 }));
    setName(faker.animal.dog());
    setSize(faker.helpers.arrayElement(["Pequeno", "Médio", "Grande"]));
    setBreed(faker.animal.type());
    setPhone(faker.phone.number());
  }

  return (
    <main className={style.container}>
      <form className={style.form} onSubmit={(e) => handleCreatePet(e)}>
        <div className={style.title}>
          <h1>Create</h1>
          <p>Register a pet.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            placeholder="Digite a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="gender">Gênero</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="age">Idade</label>
          <input
            id="age"
            type="number"
            placeholder="Digite a idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="size">Porte</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="breed">Raça</label>
          <input
            id="breed"
            type="text"
            placeholder="Digite a raça"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="tel">Telefone</label>
          <input
            id="tel"
            type="text"
            placeholder="Digite o telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={style.modular}>
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={() => generatePet()}>
          Gerar pet
        </button>

        </div>
      </form>
    </main>
  );
}
