import React, { useState, useRef } from 'react';
import { Button, Typography, Box } from '@mui/material';
import '../index.css'
export default function Timer(props) {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }
    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }



    return (
        <>
            <Typography className="stopwatch">{formatTime()}</Typography>
            <Box id="timeContainer">
                {
                    !isActive && !isPaused ?
                        <Button onClick={handleStart}>Start</Button>
                        : (
                            isPaused ? <Button onClick={handlePause}>Pause</Button> :
                                <Button onClick={handleResume}>Resume</Button>
                        )
                }
                <Button onClick={handleReset} disabled={!isActive}>Reset</Button>
            </Box>
        </>
    )
}