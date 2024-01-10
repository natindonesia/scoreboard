import styles from "./FootballFormation.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const FootballFormationAway = () => {
  // const [playerAway, setplayerAway] = useState([]);
  const [playerAway, setPlayerAway] = useState([]);

  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchPlayerAway = async () => {
      try {
        const response = await axios.get("http://localhost:5500/playerAway");
        setPlayerAway(response.data);

        const teamresponse = await axios.get("http://localhost:5500/team");
        setTeam(teamresponse.data[0]);
      } catch (error) {
        console.error("Error fetching player away:", error);
      }
    };

    fetchPlayerAway();
  }, []);

  // console.log(team.home);
  // console.log(playerAway);
  return (
    <>
      {playerAway.length > 0 ? (
        <h1 className="text-white text-3xl text-center mt-8">
          Liverpool Formation
        </h1>
      ) : (
        <span>Loading...</span>
      )}
      <div className={styles.parentContainer}>
        <div className={styles.footballPitch}>
          <div className={`${styles.player} ${styles.goalkeeper}`}>
            <div className={styles.playerCircle}>GK</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[0]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.defender1}`}>
            <div className={styles.playerCircle}>Def</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[1]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.defender2}`}>
            <div className={styles.playerCircle}>Def</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[2]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.defender3}`}>
            <div className={styles.playerCircle}>Def</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[3]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.defender4}`}>
            <div className={styles.playerCircle}>Def</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[4]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.dm5}`}>
            <div className={styles.playerCircle}>MID</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[5]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.mid2}`}>
            <div className={styles.playerCircle}>MID</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[6]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.mid3}`}>
            <div className={styles.playerCircle}>MID</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[7]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.am1}`}>
            <div className={styles.playerCircle}>MID</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[8]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.am4}`}>
            <div className={styles.playerCircle}>ST</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[9]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          <div className={`${styles.player} ${styles.striker2}`}>
            <div className={styles.playerCircle}>ST</div>

            {playerAway.length > 0 ? (
              <span className={styles.playerName}>{playerAway[10]?.name}</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FootballFormationAway;