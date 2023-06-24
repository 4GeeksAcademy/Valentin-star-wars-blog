import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardsPeople = (props) => {
  const { store, actions } = useContext(Context);
 const characterImg = {
  uid1: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDU4NTkwMzE5MzU1MjQw/why-luke-skywalker-is-an-amazing-duelist.jpg',
  uid2: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/04/star-wars-ascenso-skywalker-c3po-1909895.jpg?tf=3840x',
  uid3: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/4XRKXFXN3VK37OAOT2HUU3KAYI.jpg',
  uid4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJz-INJ3DieSYfOgQpkKyt4Y2jGY4CzVDEcQ&usqp=CAU',
  uid5: 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/cinema/news/pretaliker-decouvrez-le-nouveau-costume-de-la-princesse-leia-dans-star-wars-7-2959388/55223670-1-fre-FR/Pretaliker-decouvrez-le-nouveau-costume-de-la-Princesse-Leia-dans-Star-Wars-7.jpg',
  uid6: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=8%2C0%2C774%2C774',
  uid7: 'https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg',
  uid8: 'https://www.looper.com/img/gallery/r5-d4-the-complete-history-of-din-djarins-ally-in-the-mandalorian-explained/intro-1678514086.jpg',
  uid9: 'https://static.wikia.nocookie.net/ptstarwars/images/2/20/Biggs.jpg/revision/latest?cb=20100205180536',
  uid10: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/65TRVIXMS5H7VAXK3BE5ZXMGDY.jpg',
  
 }


  const charStore = store.character.filter(
    (char) => char.name == props.character.name
  );

  useEffect(() => actions.charDescription(props.character.url), []);

  return (
    <div className="cards">
      <div className="card">
        <img
          src={characterImg}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          {charStore[0] ? (
            <div>
              <p className="card-text">Gender: {charStore[0].gender}</p>
              <p className="card-text">Hair color: {charStore[0].hair_color}</p>
              <p className="card-text">Birth Year: {charStore[0].birth_year}</p>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={"/single/" + props.character.uid}
              className="more"
              data={charStore}
            >
              <button className="btn btn-more">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPeople;
