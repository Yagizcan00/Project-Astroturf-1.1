import React, { useState } from 'react'
import { SwatchesPicker } from "react-color"
import "./Tactic.scss"

const Tactic = () => {

    // State for choose the color.  
    const [colorOne, setColorOne] = useState("#fff")
    const [colorTwo, setColorTwo] = useState("#b71c1c")


    // State for open and close the palate.
    const [checkOne, setCheckOne] = useState(true)
    const [checkTwo, setCheckTwo] = useState(true)
    const [classNameOne, setClassNameOne] = useState("inactive")
    const [classNameTwo, setClassNameTwo] = useState("inactive")


    // Function for update the color.
    const handleChangeCompleteOne = (e) => {
        setColorOne(e.hex)
        setCheckOne(false)
        handleChangeClassNameOne()
    }
    const handleChangeCompleteTwo = (e) => {
        setColorTwo(e.hex)
        setCheckTwo(false)
        handleChangeClassNameTwo()
    }


    // Function for update the palate's check.
    const handleChangeClassNameOne = () => {
        setCheckOne(!checkOne)
        if (checkOne) {
            setClassNameOne("active")
        } else {
            setClassNameOne("inactive")
        }
    }
    const handleChangeClassNameTwo = () => {
        setCheckTwo(!checkTwo)
        if (checkTwo) {
            setClassNameTwo("active")
        } else {
            setClassNameTwo("inactive")
        }
    }


    // Style for showing chosen color to user.
    const chosenColorOne = {
        backgroundColor: colorOne
    }
    const chosenColorTwo = {
        backgroundColor: colorTwo
    }


    return (
        <div className='tactic'>
            <div className='parameters'>

                <section className="colorSelection">
                    <section className='colorOne'>
                        <div className='chooseColor'>
                            <button className='palateButton' onClick={handleChangeClassNameOne}>Renk-1{<section style={chosenColorOne} className='chosenColor'></section>}</button>
                        </div>

                        <SwatchesPicker
                            width={175}
                            height={170}
                            color={colorOne}
                            onChangeComplete={handleChangeCompleteOne}
                            className={classNameOne}
                        />
                    </section>

                    <section className='colorTwo'>
                        <div className='chooseColor'>
                            <button className='palateButton' onClick={handleChangeClassNameTwo}>Renk-2{<section style={chosenColorTwo} className='chosenColor'></section>}</button>
                        </div>

                        <SwatchesPicker
                            width={175}
                            height={170}
                            color={colorTwo}
                            onChangeComplete={handleChangeCompleteTwo}
                            className={classNameTwo}
                        />
                    </section>
                </section>

                <section className='formationSelection'>
                    <div className='chooseFormation'>
                        <button className='formationButton'>Formasyon</button>
                        <button className='currentFormaiton'>3-2-1</button>
                    </div>
                </section>

            </div>

            <div className='board'>

            </div>
        </div>
    )
}


export default Tactic
