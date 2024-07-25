/* eslint-disable react/prop-types */
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import './IpItem.css';

function IpItem({ ip, handleDeleteIp, onQuantityChange }) {
  return (
    <li className="ip">
      <div className="ip-details">
        <TiDelete
          onClick={() => handleDeleteIp(ip.code)}
          size={24}
          className="delete-icon"
        />
        <span>
          {ip.code} : {ip.description}
        </span>
      </div>
      <input
        className="input-description"
        placeholder="veuillez saisir une quantité"
        type="number"
        onChange={e => onQuantityChange(ip.code, e.target.value)}
        value={ip.quantity}
      />
    </li>
  );
}

export default IpItem;
