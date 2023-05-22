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
    var currentItemID = 1
    const [currentImage, setCurrentImage] = useState(null)


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


    // Function for the catch last image ID.
    const handleImageChange = () => {
        imageList.filter(item => (item.id === currentItemID) && setCurrentImage(item.picture))
    }


    // Buttons for when user click the icons, change currentItemID.
    const handleIncrease = () => {
        currentItemID = currentItemID + 1
        console.log(currentItemID)
    }
    const handleDecrease = () => {
        currentItemID = currentItemID - 1
        console.log(currentItemID)
    }


    useEffect(() => {
        handleImageChange()
    }, [currentItemID])


    return (
        <div className='home'>
            <h1>Ana Sayfa</h1>
            <div className='slider'>
                <div className='images'>
                    <TbArrowBigLeftLineFilled className='icon' onClick={() => handleDecrease()} />
                    <img className='item' src={(currentImage !== null) ? currentImage : One} alt="Image" />
                    <TbArrowBigRightLineFilled className='icon' onClick={() => handleIncrease()} />
                </div>
                <div className='texts'>
                    <p>{textlist[currentItemID - 1].text}</p>
                </div>
                <div className='list'>
                    <TbArrowBigLeftLineFilled className='icon' onClick={() => handleDecrease()} />
                    {Array.from({ length: imageList.length }, (_, i) => <section key={i} className='circle' />)}
                    <TbArrowBigRightLineFilled className='icon' onClick={() => handleIncrease()} />
                </div>
            </div>
        </div>
    )
}

export default Home
