import React, { useState } from 'react';

const ProvinceTable = ({ data }) => {
  const { provinceName, provinceShortName, suspectedCount, confirmedCount, curedCount, deadCount, cities } = data;
  const [active, setActive] = useState(false);
  return (
    [
      <tr key={provinceName} className={`province ${active && 'active'}`} onClick={() => setActive(!active)} >
        <td>{provinceShortName}</td>
        <td>{suspectedCount}</td>
        <td>{confirmedCount}</td>
        <td>{curedCount}</td>
        <td>{deadCount}</td>
      </tr>,
      active && cities.map((city, i) => (
        <tr key={`city-${i}`} className="province-cities" >
          <td>{city.cityName}</td>
          <td>{city.suspectedCount}</td>
          <td>{city.confirmedCount}</td>
          <td>{city.curedCount}</td>
          <td>{city.deadCount}</td>
        </tr>
      ))
    ]
  );
};

export default ProvinceTable;