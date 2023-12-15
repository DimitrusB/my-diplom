import { useEffect, useState } from "react";
import * as S from "../../pages/profile/profile.style";
import { ChangeUserData, GetUserData } from "../../../api/api";

export const EditUserData = () => {
  const UserData = JSON.parse(localStorage.getItem("userData"));
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  useEffect(() => {
    const areAllFieldsFilled =
      name.trim() !== "" ||
      surname.trim() !== "" ||
      city.trim() !== "" ||
      phone.trim() !== "";

    setIsSaveButtonDisabled(!areAllFieldsFilled);
  }, [name, surname, city, phone]);

  const handleEditUser = async (e) => {
    e.preventDefault();

    const newUserData = {
      // avatar: UserData.avatar,
      // email: UserData.email,
      name,
      surname,
      phone,
      city,
      role: "admin",
    };

    console.log(newUserData);

    try {
      await ChangeUserData(newUserData);
      const updatedUserData = await GetUserData();
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      window.location.reload();
      console.log("User data updated successfully");
    } catch (error) {
      console.error(
        "Error updating user data:",
        error.response?.data || error.message
      );
    }
  };



  return (
    <S.Settings__Right>
      <S.Settings__Form action="#">
        <S.Settings__Div>
          <label htmlFor="fname">Имя</label>
          <S.Settings__Fname
            name="name"
            type="text"
            placeholder={UserData.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.Settings__Div>

        <S.Settings__Div>
          <label htmlFor="lname">Фамилия</label>
          <S.Settings__Lname
            name="surname"
            type="text"
            placeholder={UserData.surname}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </S.Settings__Div>

        <S.Settings__Div>
          <label htmlFor="city">Город</label>
          <S.Settings__City
            name="city"
            type="text"
            placeholder={UserData.city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </S.Settings__Div>

        <S.Settings__Div>
          <label htmlFor="phone">Телефон</label>
          <S.Settings__Phone
            name="phone"
            type="tel"
            placeholder={UserData.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </S.Settings__Div>

        <S.Settings__Btn
          onClick={handleEditUser}
          disabled={isSaveButtonDisabled}
        >
          Сохранить
        </S.Settings__Btn>
      </S.Settings__Form>
    </S.Settings__Right>
  );
};
