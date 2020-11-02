import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Win from './Win';
import Lose from './Lose';

const End = () => {
  // ======================================================
  //  To be modified when the main component is finished
  // ======================================================
  localStorage.setItem('playerWin', true);
  localStorage.setItem('murderId', 2);
  localStorage.setItem('mediumId', 3);

  const murderId = Number(localStorage.getItem('murderId'));
  const mediumId = Number(localStorage.getItem('mediumId'));
  const playerWin = localStorage.getItem('playerWin');

  // ======================================================
  // ======================================================

  const [datasForGameboard, setDataForGameboard] = useState({
    murder: '',
    medium: '',
  });

  /**
   * Extract the medium or killer object
   *
   * @param {array} responses
   * @param {number} index
   * @param {number} id
   */
  const extractDatas = (responses, index, id) => {
    return responses[index].data.filter((item) => item.id === id);
  };

  /**
   * Init axios with the get method
   * @param {string} url  the url of the API for the query
   */
  const initAxios = (url) => {
    return axios.get(url);
  };

  useEffect(() => {
    Promise.all([
      initAxios('https://mysterium-game.herokuapp.com/api/characters/'),
      initAxios('https://mysterium-game.herokuapp.com/api/mediums/'),
    ])
      .then((responses) => responses)
      .then((responses) => {
        const murder = extractDatas(responses, 0, murderId);
        const medium = extractDatas(responses, 1, mediumId);
        setDataForGameboard({
          ...datasForGameboard,
          murder: murder[0],
          medium: medium[0],
        });
      });
  }, []);

  return (
    <div>
      {playerWin === 'true' ? (
        <Win
          murder={datasForGameboard.murder}
          medium={datasForGameboard.medium}
        />
      ) : (
        <Lose medium={datasForGameboard.medium} />
      )}
    </div>
  );
};

export default End;
