"use client";  // cause of hooks
import { CarProps } from '@/types';
import {useState} from 'react'
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface carCardProps {
    car : CarProps;
}
const CarCard = ( {car} : carCardProps) => {
 const { city_mpg,year,make,model,transmission,drive} = car;    
 const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p>
            <span>
                {carRent}
            </span>
        </p>
    </div>
  )
}

export default CarCard