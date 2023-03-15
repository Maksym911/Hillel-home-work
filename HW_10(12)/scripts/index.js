'use strict';

const age = +prompt('Введіть свій рік народження', '1990');
const yearsOld = 2023 - age;

const capital = ' Ви проживаєте в столиці';
const otherCity = ' Ви прожваєте в місті ';
const countryU = ' України';
const countryP = ' Польщі';
const countryS = ' Словакії';
const sportChess = '. Крутий вид спорту! Хочете стати Карлсеном?';
const sportСycling = '. Крутий вид спорту! Хочете стати Гончаром?';
const sportRun = '. Крутий вид спорту! Хочете стати Кіп"єґоном?';
const otherSport = ' - це крутий вид спорту!'

if (age !== 0) {
const city = prompt('В якому місті ви живете?', 'Київ');
    if (city !== null) {
        const kindOfSport = prompt('Напишіть свій улюблений вид спорту', 'Шахи');
            if (kindOfSport === 'Шахи') {
                if (city === 'Київ' || city === 'Варшава' || city === 'Братислава') {
                        if (city === 'Київ') {
                            alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryU + sportChess); 
                                } else if (city === 'Варшава') {
                                alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryP + sportChess); 
                                    } else if (city === 'Братислава') {
                                    alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryS + sportChess); 
                }} else {
                                    alert('Ваш вік складає ' + yearsOld + ' років;' + otherCity + city + sportChess);
                                }
            } else if (kindOfSport === 'Велоспорт') {
                            if (city === 'Київ' || city === 'Варшава' || city === 'Братислава') {
                                    if (city === 'Київ') {
                                        alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryU + sportСycling); 
                                            } else if (city === 'Варшава') {
                                            alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryP + sportСycling); 
                                                } else if (city === 'Братислава') {
                                                alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryS + sportСycling); 
                            }} else {
                                                alert('Ваш вік складає ' + yearsOld + ' років;' + otherCity + city + sportСycling);
                                            }
            } else if (kindOfSport === 'Біг') {
                            if (city === 'Київ' || city === 'Варшава' || city === 'Братислава') {
                                if (city === 'Київ') {
                                    alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryU + sportRun); 
                                        } else if (city === 'Варшава') {
                                        alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryP + sportRun); 
                                            } else if (city === 'Братислава') {
                                            alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryS + sportRun); 
                        }} else {
                                            alert('Ваш вік складає ' + yearsOld + ' років;' + otherCity + city + sportRun);
                                        }
            } else if (kindOfSport !==null ) {
                if (city === 'Київ' || city === 'Варшава' || city === 'Братислава') {
                    if (city === 'Київ') {
                        alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryU + '. ' + kindOfSport + otherSport); 
                            } else if (city === 'Варшава') {
                            alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryP + '. ' + kindOfSport + otherSport); 
                                } else if (city === 'Братислава') {
                                alert('Ваш вік складає ' + yearsOld + ' років;' + capital + countryS + '. ' + kindOfSport + otherSport); 
            }} else {
                                alert('Ваш вік складає ' + yearsOld + ' років;' + otherCity + city + '. ' + kindOfSport + otherSport);
                            }
            } else {
                alert('Шкода, що ви не захотіли вказати свій улюблений вид спорту');
            }
        } else {
            alert('Шкода, що ви не захотіли вказати своє місце проживання');
}
            } else {
                alert('Шкода, що ви не захотіли вказати свій рік народження');
            }
