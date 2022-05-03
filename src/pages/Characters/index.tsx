import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import style from './Characters.module.scss';

interface ResponseData{
    id: string,
    name: string,
    description: string,
    thumbnail: {
        extension: string,
        path: string,
    }
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((resp) => {
        console.log(resp.data.data.results);
        setCharacters(resp.data.data.results);
        console.log('Segundo log: ', characters);
      })
      .then((e) => {
        console.log(e);
      });
  }, [characters]);
  return (
      <main>
          <h1>API - Marvel</h1>
          <br />
          <hr />
          <h1>Personagens</h1>
          <div className={style.fundo}>
              {characters.map(character => {
                  return(
                    <div key={character.id} className={style.personagem}>
                        <img width={200} height={200} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Foto do ${character.name}`} />
                        <br />
                        <span>{character.name}</span>
                    </div>
                  );
              })}
          </div>
      </main>
  );
};

export default Characters;
