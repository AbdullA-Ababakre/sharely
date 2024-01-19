import React, { useState } from "react";
import "./index.scss";

export function Slider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <h3>
        Earn up to <span className="slider-dollar">${sliderValue}</span> for
      </h3>
      <h4> {sliderValue * 30} views </h4>
      <input
        type="range"
        min="0"
        max="10000000"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <BonusList />
    </div>
  );
}

const bonusesData = [
  { id: 1, name: "Demonstration", bonus: 100, percent: 10 },
  { id: 2, name: "Has a hook", bonus: 100, percent: 10 },
  { id: 3, name: "Unique/Creative", bonus: 100, percent: 10 },
  { id: 4, name: "Good camera presence", bonus: 50, percent: 5 },
  { id: 5, name: "Product & logo shown", bonus: 50, percent: 5 },
  { id: 6, name: "Product first 5 seconds", bonus: 50, percent: 5 },
  { id: 7, name: "Clear audio", bonus: 50, percent: 5 },
  { id: 8, name: "Good lighting", bonus: 50, percent: 5 },
];

const BonusItem = ({ name, bonus, onToggle, isChecked }) => (
  <div className="bonus-item">
    <hr className="div-line"></hr>
    <label>
      <span className="checkbox-wrapper">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        {name}
      </span>
      <span>+{bonus}%</span>
    </label>
  </div>
);

function BonusList() {
  const [selectedBonuses, setSelectedBonuses] = useState([]);

  const handleToggle = (id) => {
    setSelectedBonuses((current) => {
      if (current.includes(id)) {
        return current.filter((bonusId) => bonusId !== id);
      } else {
        return [...current, id];
      }
    });
  };

  const calculateTotalBonus = () => {
    return selectedBonuses.reduce((total, bonusId) => {
      const bonus = bonusesData.find((b) => b.id === bonusId);
      return total + (bonus ? bonus.bonus : 0);
    }, 0);
  };

  return (
    <div className="bonus-list">
      {bonusesData.map((bonus) => (
        <BonusItem
          key={bonus.id}
          name={bonus.name}
          bonus={bonus.bonus}
          isChecked={selectedBonuses.includes(bonus.id)}
          onToggle={() => handleToggle(bonus.id)}
        />
      ))}
      <div className="total-bonus">Total Bonus: {calculateTotalBonus()}%</div>
    </div>
  );
}

export { BonusList };
