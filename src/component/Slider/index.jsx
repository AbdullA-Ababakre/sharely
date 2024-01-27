import React, { useState } from "react";
import "./index.scss";

export function Slider({ sliderMax = 2000 }) {
  const [sliderValue, setSliderValue] = useState(sliderMax);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <h3>
        Earn up to <span className="slider-dollar">${sliderValue}</span> for
      </h3>
      <h4> {sliderValue * 500} views </h4>
      <input
        type="range"
        min="0"
        max={sliderMax}
        value={`${sliderValue}`}
        onChange={handleSliderChange}
      />
      <BonusList />
    </div>
  );
}

const bonusesData = [
  { id: 1, name: "Demonstration", bonus: 100, percent: 10, checked: true },
  { id: 2, name: "Has a hook", bonus: 100, percent: 10, checked: true },
  { id: 3, name: "Unique/Creative", bonus: 100, percent: 10, checked: true },
  { id: 4, name: "Good camera presence", bonus: 50, percent: 5, checked: true },
  { id: 5, name: "Product & logo shown", bonus: 50, percent: 5, checked: true },
  {
    id: 6,
    name: "Product first 5 seconds",
    bonus: 50,
    percent: 5,
    checked: true,
  },
  { id: 7, name: "Clear audio", bonus: 50, percent: 5, checked: true },
  { id: 8, name: "Good lighting", bonus: 50, percent: 5, checked: true },
];

const BonusItem = ({ name, bonus, onToggle, isChecked }) => (
  <div className="bonus-item">
    <hr className="div-line"></hr>
    <label>
      <span className="checkbox-wrapper">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        {name}
      </span>
    </label>
  </div>
);

function BonusList() {
  const [_, setSelectedBonuses] = useState([]);

  const handleToggle = (id) => {
    setSelectedBonuses((current) => {
      return current.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className="bonus-list">
      {bonusesData.map((bonus) => (
        <BonusItem
          key={bonus.id}
          name={bonus.name}
          bonus={bonus.bonus}
          isChecked={bonus.checked}
          onToggle={() => handleToggle(bonus.id)}
        />
      ))}
    </div>
  );
}

export { BonusList };
