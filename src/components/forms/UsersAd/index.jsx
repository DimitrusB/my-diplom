import { Link } from "react-router-dom";
import * as S from "../../../pages/profile/profile.style";

export const UsersAdComp = ({ userAdEmpty, baseImagePath, userAd }) => {
  return (
    <>
      {userAdEmpty ? (
        <p>Объявлений нет</p>
      ) : (
        <S.Main__Content>
          <S.Main__ContentCards>
            {userAd &&
              userAd.map((item, index) => (
                <S.Cards__Item key={index}>
                  <Link to={`/adpage/${item.id}`}>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <img
                          src={
                            item.images[0]
                              ? baseImagePath + item.images[0].url
                              : ""
                          }
                          alt={`Фото ${item.title}`}
                        />
                      </S.Card__Image>
                      <div>
                        <S.Card__Title>{item.title}</S.Card__Title>

                        <S.Card__Price>{item.price}&nbsp;₽</S.Card__Price>
                        <S.Card__Place>
                          Город&nbsp;{item.user.city}
                        </S.Card__Place>
                        <S.Card__Date>{item.created_on}</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </Link>
                </S.Cards__Item>
              ))}
          </S.Main__ContentCards>
        </S.Main__Content>
      )}
    </>
  );
};
