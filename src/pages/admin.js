"use client";
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SelectHomeTeam from "@/components/SelectHomeTeam";
import SelectAwayTeam from "@/components/SelectAwayTeam";
import styles from "@/pages/adminFormation.module.css";
import YellowPlayer from "@/components/YellowPlayer";
import { useEffect } from "react";

export default function Admin() {
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [buttonsAway, setButtonsAway] = useState([]);
  const [playerHome, setPlayerHome] = useState([]);
  const [playerAway, setPlayerAway] = useState([]);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm1Away, setShowForm1Away] = useState(false);
  const [showForm2Away, setShowForm2Away] = useState(false);
  const [showForm3Away, setShowForm3Away] = useState(false);
  const [showYellowPlayer, setShowYellowPlayer] = useState(false);
  const [showRedPlayer, setShowRedPlayer] = useState(false);

  useEffect(() => {
    const fetchPlayerHome = async () => {
      try {
        const response = await axios.get("http://localhost:5500/playerHome");
        setPlayerHome(response.data);
      } catch (error) {
        console.error("Error fetching player home:", error);
      }
    };

    fetchPlayerHome();
  }, []);

  useEffect(() => {
    const fetchPlayerAway = async () => {
      try {
        const response = await axios.get("http://localhost:5500/playerAway");
        setPlayerAway(response.data);
      } catch (error) {
        console.error("Error fetching player home:", error);
      }
    };

    fetchPlayerAway();
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:5500/team").then((response) => {
      setOptions(response.data);
    });
    axios.get("http://localhost:5500/score").then((response) => {
      setScore(response.data[0]);
    });
    axios.get("http://localhost:5500/playerHome").then((response) => {
      setButtons(response.data);
    });
    axios.get("http://localhost:5500/playerAway").then((response) => {
      setButtonsAway(response.data);
    });
  }, []);
  // if (!team) return null;
  if (!score) return null;

  function updateTeam() {
    axios.put("http://localhost:5500/team/1", team).then((response) => {
      alert("data update succesfully");
    });
  }

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    setSelectedOption(selectedId);

    // Find the selected option's name
    const selectedOption = options.find(
      (option) => option.id === Number(selectedId)
    );
    if (selectedOption) {
      setSelectedName(selectedOption.name);
    } else {
      setSelectedName("");
    }
  };

  function updateScore() {
    axios.put("http://localhost:5500/score/1", score).then((response) => {});
  }

  const toggleComponent1Or3 = () => {
    localStorage.getItem("showComponent") === "1"
      ? localStorage.setItem("showComponent", "3")
      : localStorage.setItem("showComponent", "1");
  };

  const toggleComponent2 = () => {
    localStorage.getItem("showComponent") === "2"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "2");
  };
  const toggleComponent4 = () => {
    setShowYellowPlayer(!showYellowPlayer);
    localStorage.getItem("showComponent") === "4"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "4");
  };

  const toggleComponent5 = () => {
    setShowRedPlayer(!showRedPlayer);
    localStorage.getItem("showComponent") === "5"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "5");
  };

  const toggleComponent6 = () => {
    localStorage.getItem("showComponent") === "6"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "6");
  };
  const toggleComponent7 = () => {
    localStorage.getItem("showComponent") === "7"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "7");
  };
  const toggleComponent8 = () => {
    localStorage.getItem("showComponent") === "8"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "8");
  };
  const toggleComponent9 = () => {
    localStorage.getItem("showComponent") === "9"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "9");
  };
  const toggleComponent10 = () => {
    localStorage.getItem("showComponent") === "10"
      ? localStorage.removeItem("showComponent")
      : localStorage.setItem("showComponent", "10");
  };

  const renderForms = () => {
    return playerHome.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ML
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MR
          </label>
        ) : index >= 9 && index <= 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms2 = () => {
    return playerAway.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ML
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MR
          </label>
        ) : index >= 9 && index <= 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            id={player.name}
            value={player.name}
            onChange={(e) => handleInputChange2(e, index)}
            className={`rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
        </div>
      </div>
    ));
  };
  const handleSubmit = async () => {
    try {
      const promises = playerHome.map((player) =>
        axios.put(`http://localhost:5500/playerHome/${player.id}`, player)
      );
      await Promise.all(promises);
      console.log("All players updated successfully!");
    } catch (error) {
      console.error("Error updating players:", error);
    }
  };

  const handleSubmit2 = async () => {
    try {
      const promises = playerAway.map((player) =>
        axios.put(`http://localhost:5500/playerAway/${player.id}`, player)
      );
      await Promise.all(promises);
      console.log("All players updated successfully!");
    } catch (error) {
      console.error("Error updating players:", error);
    }
  };

  const handleInputChange = (e, index) => {
    const updatedPlayerHome = [...playerHome];
    updatedPlayerHome[index].name = e.target.value;
    setPlayerHome(updatedPlayerHome);
  };

  const handleInputChange2 = (e, index) => {
    const updatedPlayerAway = [...playerAway];
    updatedPlayerAway[index].name = e.target.value;
    setPlayerAway(updatedPlayerAway);
  };
  const renderForms442 = () => {
    return playerHome.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ML
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MR
          </label>
        ) : index >= 9 && index <= 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms4231 = () => {
    return playerHome.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index >= 5 && index <= 6 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMR
          </label>
        ) : index === 9 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AML
          </label>
        ) : index === 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms433 = () => {
    return playerHome.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DM
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMR
          </label>
        ) : index === 9 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AML
          </label>
        ) : index === 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms442Away = () => {
    return playerAway.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ML
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MR
          </label>
        ) : index >= 9 && index <= 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange2(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms4231Away = () => {
    return playerAway.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index >= 5 && index <= 6 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMR
          </label>
        ) : index === 9 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AML
          </label>
        ) : index === 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange2(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const renderForms433Away = () => {
    return playerAway.map((player, index) => (
      <div key={player.id}>
        {index === 0 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            GK
          </label>
        ) : index === 1 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DL
          </label>
        ) : index >= 2 && index <= 3 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DC
          </label>
        ) : index === 4 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DR
          </label>
        ) : index === 5 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            DM
          </label>
        ) : index >= 6 && index <= 7 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            MC
          </label>
        ) : index === 8 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AMR
          </label>
        ) : index === 9 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            AML
          </label>
        ) : index === 10 ? (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            ST
          </label>
        ) : (
          <label
            htmlFor={`playerName${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Player {index + 1} Name
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={player.name}
            onChange={(e) => handleInputChange2(e, index)}
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    ));
  };
  const handleButtonClick = (formNumber) => {
    // Toggle the respective form visibility based on the button clicked
    if (formNumber === 1) {
      setShowForm1(true);
      setShowForm2(false);
      setShowForm3(false);
    } else if (formNumber === 2) {
      setShowForm1(false);
      setShowForm2(true);
      setShowForm3(false);
    } else if (formNumber === 3) {
      setShowForm1(false);
      setShowForm2(false);
      setShowForm3(true);
    }
  };
  const handleButtonClickAway = (formNumber) => {
    // Toggle the respective form visibility based on the button clicked
    if (formNumber === 1) {
      setShowForm1Away(true);
      setShowForm2Away(false);
      setShowForm3Away(false);
    } else if (formNumber === 2) {
      setShowForm1Away(false);
      setShowForm2Away(true);
      setShowForm3Away(false);
    } else if (formNumber === 3) {
      setShowForm1Away(false);
      setShowForm2Away(false);
      setShowForm3Away(true);
    }
  };
  return (
    <Fragment>
      <Navbar />

      <div className="bg-slate-300">
        <Tabs>
          <TabList>
            <Tab>Control</Tab>
            <Tab>Team & Score</Tab>
            <Tab>Formation</Tab>
          </TabList>

          <TabPanel>
            <div>
              <button
                onClick={toggleComponent1Or3}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Goal
              </button>

              <button
                onClick={toggleComponent4}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {showYellowPlayer ? "Hide Yellow Player" : "Show Yellow Player"}
              </button>

              <button
                onClick={toggleComponent5}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                {showRedPlayer ? "Hide Red Player" : "Show Red Card"}
              </button>

              <button
                onClick={toggleComponent7}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 4231 Home
              </button>

              <button
                onClick={toggleComponent8}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 442 Home
              </button>
              <button
                onClick={toggleComponent2}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 433 Home
              </button>

              <button
                onClick={toggleComponent9}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 4231 Away
              </button>

              <button
                onClick={toggleComponent10}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 442 Away
              </button>

              <button
                onClick={toggleComponent6}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Formation 433 Away
              </button>
            </div>

            {/* <YellowPlayer /> */}
            {showYellowPlayer && <YellowPlayer />}
            {showRedPlayer && <YellowPlayer />}

            <div>
              <iframe
                src="http://localhost:3000/"
                title="Content from localhost:3000"
                width="100%"
                height="800"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-gray-500 flex h-screen">
              <SelectHomeTeam />
              <SelectAwayTeam />
              {/* <div className="flex-auto   bg-slate-300">
                <h1 className="p-2 text-black">Input Team</h1>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Home Team
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={team.home}
                    className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setTeam({ ...team, home: e.target.value })}
                  />
                </div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Away Team
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={team.away}
                    className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setTeam({ ...team, away: e.target.value })}
                  />
                </div>
                <button
                  class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={updateTeam}
                >
                  Update Team
                </button>
              </div> */}

              <div className="flex-auto bg-slate-300 ">
                <h1 className="p-2 text-black">Score</h1>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  {/* {team.home} */}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={score.home}
                    className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setScore({ ...score, home: e.target.value })
                    }
                  />
                </div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  {/* {team.away} */}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={score.away}
                    className="rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setScore({ ...team, away: e.target.value })
                    }
                  />
                </div>
                <button
                  class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={updateScore}
                >
                  Update Score
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={`${styles.container}`}>
              <div className={`${styles.box1}`}>
                <h2>Player Home</h2>
                <button onClick={() => handleButtonClick(1)}>4-4-2</button>
                <button onClick={() => handleButtonClick(2)}>4-2-3-1</button>
                <button onClick={() => handleButtonClick(3)}>4-3-3</button>

                {showForm1 && renderForms442()}
                {showForm2 && renderForms4231()}
                {showForm3 && renderForms433()}

                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Submit
                </button>
              </div>

              <div className={`${styles.box2}`}>
                <h2>Player Away</h2>
                <button onClick={() => handleButtonClickAway(1)}>4-4-2</button>
                <button onClick={() => handleButtonClickAway(2)}>
                  4-2-3-1
                </button>
                <button onClick={() => handleButtonClickAway(3)}>4-3-3</button>

                {showForm1Away && renderForms442Away()}
                {showForm2Away && renderForms4231Away()}
                {showForm3Away && renderForms433Away()}
                <button
                  onClick={handleSubmit2}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Fragment>
  );
}