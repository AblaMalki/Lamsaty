import React from 'react';
import { pizza } from '../constants/constants';

const MenuCard = () => {
  return (
    <div>
      {pizza.map((pizza, Idx) => (
        <div className="w-[180px] h-[250px] bg-transparent flex-col flex items-center justify-between py-2">
          <img
            src={pizza.icon}
            alt=""
            className="object-contain max-w-[150px] h-32"
          />
          <div className=" text-center">
            <h1 className="font-poppins font-bold capitalize">{pizza.title}</h1>
            <h3 className="font-poppins italic text-sm pb-4">
              {typeof pizza.price == 'number' ? `${pizza.price} DA` : `\u00A0`}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
