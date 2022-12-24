import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import useWeather from '../hooks/useWeather';

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme("");
    //*weather data
    const [weatherData, setData] = useState();
    //*hook that returns current weather data

    useEffect(() => {
        useWeather()
            .then(function (data) {
                setData(data);
            })
        setMounted(true)
    }, []);
    // console.log(data);

    let weath = weatherData?.weather ? weatherData.weather[0].description : null;

    //*temperature in kelvin initializer
    let temp = weatherData?.main ? weatherData.main.temp : null;
    // console.log('farenheit= ', temp)

    //*function that converts kelvin to celcius
    const convertToCelcius = () => {
        let CelciusNum = temp - 273.15;
        let Celcius = CelciusNum.toFixed(0);
        return (<div>{Celcius}</div>);
    }

    //*function that shows icon according to weather
    const showIcon = () => {
        let icon = weatherData?.weather ? weatherData.weather[0].icon : null;
        return (<img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"></img>);
    }


    //*dark mode
    if (!mounted) return null;

    let themeButton;
    if (theme === 'light') {
        themeButton = <button onClick={() => setTheme("dark") && setMounted(true)}><img id={styles.mountain} src="/mountain.png" alt="mountain image"></img></button>
    }
    else {
        themeButton = <button onClick={() => setTheme("light") && setMounted(true)}><img id={styles.nightMountain} src="/night-landscape.png" alt="night mountain image"></img></button>
    };

    return (
        <div className={styles.nav} >
            <ul id={styles.navList} className={styles.navList}>
                <li>
                    <Link href="/"><h4>Stone Villa Mouzaki</h4></Link>
                </li>
            </ul>
            <ul id={styles.secondList} className={styles.navList}>
                <li id={styles.weather}><h4>{weath}</h4><h4>{convertToCelcius()}°C</h4><p>{showIcon()}</p></li>
                <li>
                    <Link href="/contact"><h4>Contact</h4></Link>
                </li>
                <li>
                    <Link href="/history"><h4>History</h4></Link>
                </li>
                <li>
                    {themeButton}
                </li>
            </ul>
            <div className={styles.mobileNav}>
                <ul>
                    <li>
                        <Link href="/">
                            <i className="fa-solid fa-house"></i>
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <i className="fa-sharp fa-solid fa-message-text"></i>
                            <h4>Contact</h4>
                        </Link>

                    </li>
                    <li>
                        <Link href="/history">
                            <i className="fa-solid fa-landmark"></i>
                            <h4>History</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}
export default Header