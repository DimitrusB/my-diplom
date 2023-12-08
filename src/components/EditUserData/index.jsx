import * as S from "../pages/profile/profile.style"

export const EditUserData = () =>{
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
return(
<S.Settings__Right>
<S.Settings__Form action="#">
  <S.Settings__Div>
    <label htmlFor="fname">Имя</label>
    <S.Settings__Fname
      id="settings-fname"
      name="fname"
      type="text"
      placeholder="Имя"
    />
  </S.Settings__Div>

  <S.Settings__Div>
    <label htmlFor="lname">Фамилия</label>
    <S.Settings__Lname
      id="settings-lname"
      name="lname"
      type="text"
      placeholder="Фамилия"
    />
  </S.Settings__Div>

  <S.Settings__Div>
    <label htmlFor="city">Город</label>
    <S.Settings__City
      id="settings-city"
      name="city"
      type="text"
      placeholder={savedUserData.city}
    />
  </S.Settings__Div>

  <S.Settings__Div>
    <label htmlFor="phone">Телефон</label>
    <S.Settings__Phone
      id="settings-phone"
      name="phone"
      type="tel"
      placeholder="Номер телефона"
    />
  </S.Settings__Div>

  <S.Settings__Btn id="settings-btn">
    Сохранить
  </S.Settings__Btn>
</S.Settings__Form>
</S.Settings__Right>
)
}