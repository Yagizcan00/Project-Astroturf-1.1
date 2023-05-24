import { useEffect, useState } from 'react'
import "./Home.scss"
import One from "../../Image/Pictures/One.jpg"
import Two from "../../Image/Pictures/Two.jpg"
import Three from "../../Image/Pictures/Three.jpg"
import Four from "../../Image/Pictures/Four.jpg"
import Five from "../../Image/Pictures/Five.jpg"
import Six from "../../Image/Pictures/Six.jpg"
import Seven from "../../Image/Pictures/Seven.jpg"
import Eight from "../../Image/Pictures/Eight.jpg"
import Nine from "../../Image/Pictures/Nine.jpg"
import Ten from "../../Image/Pictures/Ten.jpg"
import Eleven from "../../Image/Pictures/Eleven.jpg"
import Twelve from "../../Image/Pictures/Twelve.jpg"
import { TbArrowBigLeftLineFilled } from "react-icons/tb"
import { TbArrowBigRightLineFilled } from "react-icons/tb"


const Home = () => {


    // State for catch the current item.
    const [currentItemID, setCurrentItemID] = useState(1)
    const [leftImgID, setLeftImgID] = useState(currentItemID - 1)
    const [rightImgID, setRightImgID] = useState(currentItemID + 1)


    // List of images and list of texts.
    const imageList = [
        {
            id: 1,
            picture: One
        },
        {
            id: 2,
            picture: Two
        },
        {
            id: 3,
            picture: Three
        },
        {
            id: 4,
            picture: Four
        },
        {
            id: 5,
            picture: Five
        },
        {
            id: 6,
            picture: Six
        },
        {
            id: 7,
            picture: Seven
        },
        {
            id: 8,
            picture: Eight
        },
        {
            id: 9,
            picture: Nine
        },
        {
            id: 10,
            picture: Ten
        },
        {
            id: 11,
            picture: Eleven
        },
        {
            id: 12,
            picture: Twelve
        },
    ]
    const textlist = [
        {
            id: 1,
            text: "Halısaha Nedir ?"
        },
        {
            id: 2,
            text: "Şu anda yana döne oynayacak 14. adamı aradığımız efsane bir spordur."
        },
        {
            id: 3,
            text: "En büyük keyfinin maçın kendisi yerine maç sonu muhabbetinin olduğu, eve dönüş vakti arabada mükemmel muhabbetlerin edildiği, her maç sonu muhabbetinde takımın taktik/ teknik açıdan zaaflarının her yönü ile analiz edilmesine rağmen ertesi hafta her şeyin en baştan bir kere daha yaşandığı bir romantik komedidir."
        },
        {
            id: 4,
            text: "Yaş kaç olursa olsun sizden önceki ekibin maçının bitmesini sahanın kapısının dibinde bekleyip, o zil çalar çalmaz koşa koşa sahaya dalma hissidir."
        },
        {
            id: 5,
            text: "Maç öncesi istektir/ arzudur maç sonrası ise gelen pişmanlık duygusudur."
        },
        {
            id: 6,
            text: "Hayatı futbol olan herkes için vazgeçilmez olan kutsal bir etkinliktir."
        },
        {
            id: 7,
            text: "Çoğu eril Türk birey için yaşama amacıdır. Ders, iş, vb. bir sürü sıkıntı ile dolu bir günün geride bırakıldığı ve topu karşı kaleye sokmak için verilen mücadelenin cereyan ettiği; heyecan, takım ruhu, ihtiras ve öfke gibi duygu çalkantıları ile donatılmış şiirsel bir mekandır."
        },
        {
            id: 8,
            text: "Türkiye'de halı saha; sayısı çok olan ama arandığı zaman asla bulunamayan bir olgudur. Mesela 14 kişiyi toplarsınız, maç yapmaya yeltenirsiniz ama hiç bir zaman o saha istediğiniz saatte boş olmaz. O saha bir anda bulunmaz hint kumaşı olur ve maç da yalan olur."
        },
        {
            id: 9,
            text: "Herkesin bir gaz ile 'Bir maç ayarla da oynayalım.' dediği, sonrasında maç ayarlamaya çalıştığım zaman 10 kişiyi zor toparladığım ama yine de ayarlamaya çalışmaktan bıkmadığım ve bazen gerçekten acayip keyifli maçlar yaptığım yerdir."
        },
        {
            id: 10,
            text: "Uzun zamandır hareket etmeyen bedenlerin ilk hafta mezarı, devam eden haftalarda ise sahnesi olan sosyal toplanma alanıdır."
        },
        {
            id: 11,
            text: "Bir erkeği tanımak konusunda insana muhteşem ipuçları verebilecek aktivitedir."
        },
        {
            id: 12,
            text: "Asla ama asla sadece HALI SAHA değildir !"
        },

    ]


    // Buttons for when user click the icons, change currentItemID.
    const handleIncrease = () => {
        if (currentItemID === 12) {
            setCurrentItemID(1)
        } else {
            setCurrentItemID(currentItemID + 1)
        }
    }
    const handleDecrease = () => {
        if (currentItemID === 1) {
            setCurrentItemID(12)
        } else {
            setCurrentItemID(currentItemID - 1)
        }
    }


    // Style for the current circle.
    const circleStyle = {
        backgroundColor: "rgb(0, 100, 0)",
        transition: "all 1s ease"
    }


    // Change current item ID when click the circle's.
    const handleClickCircle = (id) => {
        setCurrentItemID(id)
    }


    return (
        <div className='home'>
            <div className='slider'>

                <div className='images'>


                    {/* <button><TbArrowBigLeftLineFilled className='icon' onClick={() => handleDecrease()} /></button> */}
                    <button onClick={() => handleDecrease()}>
                        {
                            // <img className='left' src={imageList[leftImgID].picture} alt='left' />

                            (currentItemID - 1 !== 0)
                                ?
                                imageList.map(item => (
                                    <img
                                        key={`left_${item.id}`}
                                        className={`left${currentItemID - 1 === item.id ? " active" : ""}`}
                                        src={item.picture}
                                        alt="Left"
                                    />
                                ))
                                :
                                imageList.map(item => (
                                    <img
                                        key={`left_${item.id}`}
                                        className={`left${12 === item.id ? " active" : ""}`}
                                        src={item.picture}
                                        alt="Left"
                                    />
                                ))
                        }
                    </button>

                    {
                        imageList.map(imageItem => (
                            <img
                                key={`item_${imageItem.id}`}
                                className={`item${currentItemID === imageItem.id ? " active" : ""}`}
                                src={imageItem.picture}
                                alt="Image"
                            />
                        ))
                    }

                    <button onClick={() => handleIncrease()}>
                        {
                            // <img className='right' src={imageList[rightImgID].picture} alt='right' />

                            (currentItemID + 1 !== 13)
                                ?
                                imageList.map(item => (
                                    <img
                                        key={`right_${item.id}`}
                                        className={`right${currentItemID + 1 === item.id ? " active" : ""}`}
                                        src={item.picture}
                                        alt="Right"
                                    />
                                ))
                                :
                                imageList.map(item => (
                                    <img
                                        key={`right_${item.id}`}
                                        className={`right${1 === item.id ? " active" : ""}`}
                                        src={item.picture}
                                        alt="Right"
                                    />
                                ))
                        }
                    </button>


                    {/* <button><TbArrowBigRightLineFilled className='icon' onClick={() => handleIncrease()} /></button> */}
                </div>


                <div className='texts'>
                    {
                        textlist.map(textItem => {
                            return (
                                <p key={`item_${textItem.id}`} className={`p${currentItemID === textItem.id ? " active" : ""}`}>
                                    {textItem.text}
                                </p>
                            )
                        })
                    }
                    {/* <p className='p'>{textlist[currentItemID - 1].text}</p> */}
                </div>


                <div className='list'>
                    <TbArrowBigLeftLineFilled className='icon' onClick={() => handleDecrease()} />
                    {
                        // Array.from({ length: imageList.length }, (_, i) => <section key={i} className='circle' />)
                        imageList.map((item, index) => <section
                            key={index}
                            id={item.id}
                            className='circle'
                            style={(currentItemID === item.id) ? circleStyle : null}
                            onClick={() => handleClickCircle(item.id)}
                        />)
                    }
                    <TbArrowBigRightLineFilled className='icon' onClick={() => handleIncrease()} />
                </div>

            </div>
        </div>
    )
}

export default Home;
