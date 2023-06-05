import { useEffect, useState, createRef, useRef } from "react"
import { SwatchesPicker } from "react-color"
import Draggable from "react-draggable";
import { useScreenshot, createFileName } from 'use-react-screenshot'
import "./Tactic.scss"
import { BiLock, BiLockOpen } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

const Tactic = () => {

    // State for choose the color.  
    const [colorOne, setColorOne] = useState("#fff")
    const [colorTwo, setColorTwo] = useState("#b71c1c")


    // State for open and close formation options.
    const [checkFormation, setCheckFormation] = useState(false)


    // State for hold the current formation ID.
    const [curentFormation, setCurentFormation] = useState("3-2-1")


    // Formation list.
    const formationList = [
        {
            id: 1,
            formation: "1-0-5"
        },
        {
            id: 2,
            formation: "1-1-4"
        },
        {
            id: 3,
            formation: "1-2-3"
        },
        {
            id: 4,
            formation: "1-3-2"
        },
        {
            id: 5,
            formation: "1-4-1"
        },
        {
            id: 6,
            formation: "1-5-0"
        },
        {
            id: 7,
            formation: "2-0-4"
        },
        {
            id: 8,
            formation: "2-1-3"
        },
        {
            id: 9,
            formation: "2-2-2"
        },
        {
            id: 10,
            formation: "2-3-1"
        },
        {
            id: 11,
            formation: "2-4-0"
        },
        {
            id: 12,
            formation: "3-0-3"
        },
        {
            id: 13,
            formation: "3-1-2"
        },
        {
            id: 14,
            formation: "3-2-1"
        },
        {
            id: 15,
            formation: "3-3-0"
        },
        {
            id: 16,
            formation: "4-0-2"
        },
        {
            id: 17,
            formation: "4-1-1"
        },
        {
            id: 18,
            formation: "4-2-0"
        },
        {
            id: 19,
            formation: "5-1-0"
        },
        {
            id: 20,
            formation: "5-0-1"
        },
    ]


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


    // Function for update the palate"s check.
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


    // Style for active and inactive formation dropdown.
    const activeStyle = {
        display: "flex"
    }
    const inactiveStyle = {
        display: "none"
    }


    // States for player's positions.
    const [positionOne, setPositionOne] = useState()
    const [positionTwo, setPositionTwo] = useState()
    const [positionThree, setPositionThree] = useState()
    const [positionFour, setPositionFour] = useState()
    const [positionFive, setPositionFive] = useState()
    const [positionSix, setPositionSix] = useState()
    const [positionSeven, setPositionSeven] = useState()


    // Positions for every player in every formation.
    const readingPositions = () => {

        if (curentFormation === "1-0-5") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Sol-Forvet")
            setPositionFour("Sağ-Forvet")
            setPositionFive("Sol-Santrafor")
            setPositionSix("Sağ-Santrafor")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "1-1-4") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Merkez-Göbek-Ortasaha")
            setPositionFour("Sol-Forvet")
            setPositionFive("Sağ-Forvet")
            setPositionSix("Sol-Santrafor")
            setPositionSeven("Sağ-Santrafor")
        } else if (curentFormation === "1-2-3") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Sol-Göbek-Ortasaha")
            setPositionFour("Sağ-Göbek-Ortasaha")
            setPositionFive("Sol-Forvet")
            setPositionSix("Sağ-Forvet")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "1-3-2") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Sol-Kanat")
            setPositionFour("Merkez-Göbek-Ortasaha")
            setPositionFive("Sağ-Kanat")
            setPositionSix("Sol-Santrafor")
            setPositionSeven("Sağ-Santrafor")
        } else if (curentFormation === "1-4-1") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Sol-Kanat")
            setPositionFour("Sol-Göbek-Ortasaha")
            setPositionFive("Sağ-Göbek-Ortasaha")
            setPositionSix("Sağ-Kanat")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "1-5-0") {
            setPositionOne("Kaleci")
            setPositionTwo("Merkez-Stoper")
            setPositionThree("Sol-Kanat")
            setPositionFour("Sol-Göbek-Ortasaha")
            setPositionFive("Sağ-Göbek-Ortasaha")
            setPositionSix("Sağ-Kanat")
            setPositionSeven("Merkez-Ofansif-Ortasaha")
        } else if (curentFormation === "2-0-4") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Stoper")
            setPositionThree("Sağ-Stoper")
            setPositionFour("Sol-Forvet")
            setPositionFive("Sol-Santrafor")
            setPositionSix("Sağ-Santrafor")
            setPositionSeven("Sağ-Forvet")
        } else if (curentFormation === "2-1-3") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Stoper")
            setPositionThree("Sağ-Stoper")
            setPositionFour("Merkez-Göbek-Ortasaha")
            setPositionFive("Sol-Forvet")
            setPositionSix("Sağ-Forvet")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "2-2-2") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Stoper")
            setPositionThree("Sağ-Stoper")
            setPositionFour("Sol-Kanat")
            setPositionFive("Sağ-Kanat")
            setPositionSix("Sol-Santrafor")
            setPositionSeven("Sağ-Santrafor")
        } else if (curentFormation === "2-3-1") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Stoper")
            setPositionThree("Sağ-Stoper")
            setPositionFour("Sol-Kanat")
            setPositionFive("Merkez-Göbek-Ortasaha")
            setPositionSix("Sağ-Kanat")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "2-4-0") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Stoper")
            setPositionThree("Sağ-Stoper")
            setPositionFour("Merkez-Defansif-Ortasaha")
            setPositionFive("Sol-Kanat")
            setPositionSix("Merkez-Ofansif-Ortasaha")
            setPositionSeven("Sağ-Kanat")
        } else if (curentFormation === "3-0-3") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Merkez-Stoper")
            setPositionFour("Sağ-Bek")
            setPositionFive("Sol-Forvet")
            setPositionSix("Sağ-Forvet")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "3-1-2") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Merkez-Stoper")
            setPositionFour("Sağ-Bek")
            setPositionFive("Merkez-Göbek-Ortasaha")
            setPositionSix("Sol-Santrafor")
            setPositionSeven("Sağ-Santrafor")
        } else if (curentFormation === "3-2-1") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Merkez-Stoper")
            setPositionFour("Sağ-Bek")
            setPositionFive("Sol-Göbek-Ortasaha")
            setPositionSix("Sağ-Göbek-Ortasaha")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "3-3-0") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Merkez-Stoper")
            setPositionFour("Sağ-Bek")
            setPositionFive("Sol-Kanat")
            setPositionSix("Merkez-Ofansif-Ortasaha")
            setPositionSeven("Sağ-Kanat")
        } else if (curentFormation === "4-0-2") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Sol-Stoper")
            setPositionFour("Sağ-Stoper")
            setPositionFive("Sağ-Bek")
            setPositionSix("Sol-Santrafor")
            setPositionSeven("Sağ-Santrafor")
        } else if (curentFormation === "4-1-1") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Sol-Stoper")
            setPositionFour("Sağ-Stoper")
            setPositionFive("Sağ-Bek")
            setPositionSix("Merkez-Göbek-Ortasaha")
            setPositionSeven("Merkez-Santrafor")
        } else if (curentFormation === "4-2-0") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Sol-Stoper")
            setPositionFour("Sağ-Stoper")
            setPositionFive("Sağ-Bek")
            setPositionSix("Merkez-Defansif-Ortasaha")
            setPositionSeven("Merkez-Ofansif-Ortasaha")
        } else if (curentFormation === "5-1-0") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Sol-Stoper")
            setPositionFour("Merkez-Stoper")
            setPositionFive("Sağ-Stoper")
            setPositionSix("Sağ-Bek")
            setPositionSeven("Merkez-Ofansif-Ortasaha")
        } else if (curentFormation === "5-0-1") {
            setPositionOne("Kaleci")
            setPositionTwo("Sol-Bek")
            setPositionThree("Sol-Stoper")
            setPositionFour("Merkez-Stoper")
            setPositionFive("Sağ-Stoper")
            setPositionSix("Sağ-Bek")
            setPositionSeven("Merkez-Santrafor")
        } else {
            alert("Yanlış veya eksik bilgi girişi gerçekleştirdiniz !")
        }
    }


    // Download the div's screenshot part
    const ref = createRef(null);
    const [takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };
    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);


    // State for make disable item's draggability.
    const [checkDraggable, setCheckDraggable] = useState(true)


    // Calculating the screen size.
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        setWidth(windowSize.current[0])
        setHeight(windowSize.current[1])
    }, [windowSize])


    // When page is load, function will be start. 
    useEffect(() => {
        readingPositions()
    }, [curentFormation])


    return (
        <div className="tactic">
            <div className="parameters">

                <section className="colorSelection">
                    <section className="colorOne">
                        <div className="chooseColor">
                            <button className="palateButton" onClick={handleChangeClassNameOne}>Renk-1{<section style={chosenColorOne} className="chosenColor"></section>}</button>
                        </div>

                        <SwatchesPicker
                            width={175}
                            height={170}
                            color={colorOne}
                            onChangeComplete={handleChangeCompleteOne}
                            className={classNameOne}
                        />
                    </section>

                    <section className="colorTwo">
                        <div className="chooseColor">
                            <button className="palateButton" onClick={handleChangeClassNameTwo}>Renk-2{<section style={chosenColorTwo} className="chosenColor"></section>}</button>
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

                <section className="formationSelection">
                    <div className="chooseFormation">
                        <label className="formationLabel">Formasyon</label>

                        <section className="showFormation">
                            <button className="currentFormaiton" onClick={() => setCheckFormation(!checkFormation)}>{curentFormation}</button>

                            <section className="formationlist" style={checkFormation ? activeStyle : inactiveStyle}>
                                {
                                    formationList.map((item) => {
                                        return (
                                            <section onClick={() => { setCurentFormation(item.formation); setCheckFormation(false) }} key={item.id}>{item.formation}</section>
                                        )
                                    })
                                }
                            </section>

                        </section>

                    </div>
                </section>

                <section className="openCloseDraggable">
                    <button onClick={() => setCheckDraggable(!checkDraggable)}>
                        {checkDraggable ? `Dizilişi düzenlemeyi aç` : `Dizilişi düzenlemeyi kapat`} &nbsp; {checkDraggable ? <BiLock className="openCloseIcon" /> : <BiLockOpen className="openCloseIcon" />}
                    </button>
                </section>

                <section className="downloadButton">
                    <button onClick={downloadScreenshot}>Taktiği indir &nbsp; <FiDownload className="downloadIcon" /></button>
                </section>

            </div>

            <div className="board">
                <div className="field" ref={ref}>
                    <CreateDraggableItem number="1" role={positionOne} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="2" role={positionTwo} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="3" role={positionThree} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="4" role={positionFour} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="5" role={positionFive} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="6" role={positionSix} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                    <CreateDraggableItem number="7" role={positionSeven} colorOne={chosenColorOne} colorTwo={chosenColorTwo} checkDraggable={checkDraggable} width={width} height={height} formation={curentFormation} />
                </div>
            </div>
        </div>
    )
}

export default Tactic







const CreateDraggableItem = ({ number, role, colorOne, colorTwo, checkDraggable, width, height, formation }) => {

    // State for holding the changed positions.
    const [x, setX] = useState()
    const [y, setY] = useState()


    // Updating position 
    const handleStop = (e) => {
        setX(e.layerX - 25)
        setY(e.layerY - 25)
    }


    // If-else block for updating the Laptop positions.
    const updateRoleMid = () => {

        if (role === "Kaleci") {
            setX(270)
            setY(550)
        } else if (role === "Sol-Stoper") {
            setX(170)
            setY(425)
        } else if (role === "Merkez-Stoper") {
            setX(270)
            setY(425)
        } else if (role === "Sağ-Stoper") {
            setX(370)
            setY(425)
        } else if (role === "Sol-Bek") {
            setX(70)
            setY(375)
        } else if (role === "Sağ-Bek") {
            setX(475)
            setY(375)
        } else if (role === "Sol-Defansif-Ortasaha") {
            setX(170)
            setY(225)
        } else if (role === "Merkez-Defansif-Ortasaha") {
            setX(268)
            setY(315)
        } else if (role === "Sağ-Defansif-Ortasaha") {
            setX(370)
            setY(225)
        } else if (role === "Sol-Göbek-Ortasaha") {
            setX(210)
            setY(265)
        } else if (role === "Merkez-Göbek-Ortasaha") {
            setX(270)
            setY(265)
        } else if (role === "Sağ-Göbek-Ortasaha") {
            setX(327.5)
            setY(265)
        } else if (role === "Sol-Ofansif-Ortasaha") {
            setX(210)
            setY(190)
        } else if (role === "Merkez-Ofansif-Ortasaha") {
            setX(268)
            setY(175)
        } else if (role === "Sağ-Ofansif-Ortasaha") {
            setX(370)
            setY(190)
        } else if (role === "Sol-Kanat") {
            setX(100)
            setY(265)
        } else if (role === "Sağ-Kanat") {
            setX(440)
            setY(265)
        } else if (role === "Sol-Forvet") {
            setX(100)
            setY(155)
        } else if (role === "Merkez-Forvet") {
            setX(270)
            setY(155)
        } else if (role === "Sağ-Forvet") {
            setX(440)
            setY(155)
        } else if (role === "Sol-Santrafor") {
            setX(187.5)
            setY(125)
        } else if (role === "Merkez-Santrafor") {
            setX(267.5)
            setY(105)
        } else if (role === "Sağ-Santrafor") {
            setX(347.5)
            setY(125)
        }
    }
    // If-else block for updating the Mobile positions.
    const updateRoleMobile = () => {

        if (role === "Kaleci") {
            setX(182.5)
            setY(310)
        } else if (role === "Sol-Stoper") {
            setX(115)
            setY(230)
        } else if (role === "Merkez-Stoper") {
            setX(182.5)
            setY(230)
        } else if (role === "Sağ-Stoper") {
            setX(250)
            setY(230)
        } else if (role === "Sol-Bek") {
            setX(65)
            setY(190)
        } else if (role === "Sağ-Bek") {
            setX(305)
            setY(190)
        } else if (role === "Sol-Defansif-Ortasaha") {
            setX(120)
            setY(190)
        } else if (role === "Merkez-Defansif-Ortasaha") {
            setX(182.5)
            setY(190)
        } else if (role === "Sağ-Defansif-Ortasaha") {
            setX(240)
            setY(190)
        } else if (role === "Sol-Göbek-Ortasaha") {
            setX(137.5)
            setY(135)
        } else if (role === "Merkez-Göbek-Ortasaha") {
            setX(182.5)
            setY(135)
        } else if (role === "Sağ-Göbek-Ortasaha") {
            setX(230)
            setY(135)
        } else if (role === "Sol-Ofansif-Ortasaha") {
            setX(120)
            setY(100)
        } else if (role === "Merkez-Ofansif-Ortasaha") {
            setX(182.5)
            setY(100)
        } else if (role === "Sağ-Ofansif-Ortasaha") {
            setX(240)
            setY(100)
        } else if (role === "Sol-Kanat") {
            setX(70)
            setY(135)
        } else if (role === "Sağ-Kanat") {
            setX(300)
            setY(135)
        } else if (role === "Sol-Forvet") {
            setX(80)
            setY(100)
        } else if (role === "Merkez-Forvet") {
            setX(182.5)
            setY(90)
        } else if (role === "Sağ-Forvet") {
            setX(287.5)
            setY(100)
        } else if (role === "Sol-Santrafor") {
            setX(130)
            setY(70)
        } else if (role === "Merkez-Santrafor") {
            setX(182.5)
            setY(45)
        } else if (role === "Sağ-Santrafor") {
            setX(235)
            setY(70)
        }
    }


    // Styles for update the player's color.
    const nonDraggableStyle = {
        background: `linear-gradient(90deg, ${colorOne.backgroundColor} 50%, ${colorTwo.backgroundColor} 50%)`,
        cursor: "no-drop",
    }
    const draggableStyle = {
        background: `linear-gradient(90deg, ${colorOne.backgroundColor} 50%, ${colorTwo.backgroundColor} 50%)`,
        cursor: "move",
    }
    const numberStyleDark = {
        color: "black"
    }
    const numberStyleLight = {
        color: "#808080"
    }


    // When formation change, this useEffect will update the roles.
    useEffect(() => {
        (width + height) > 1800 && updateRoleMid();
        ((width + height) < 1800 && (width + height) > 1000) && updateRoleMobile();
    }, [role, formation])

    return (
        <Draggable
            onStop={handleStop}
            position={{ x: x, y: y }}
            disabled={checkDraggable}
        >
            <div className="player" style={checkDraggable ? nonDraggableStyle : draggableStyle}>
                <p style={(colorOne.backgroundColor === "#000000") || (colorTwo.backgroundColor === "#000000") ? numberStyleLight : numberStyleDark}>{number}</p>

                <div className="names">
                    <input type="text" placeholder="İsim" />
                </div>
            </div>
        </Draggable>
    )
}