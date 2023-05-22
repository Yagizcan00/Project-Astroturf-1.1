import React from 'react'
import "./Home.scss"
import Heading from "../../Image/Pictures/HomePage.jpg"
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
import { TbArrowBigLeftLineFilled } from "react-icons/tb"
import { TbArrowBigRightLineFilled } from "react-icons/tb"

const Home = () => {

    const imageList = [
        {
            id: 1,
            picture: Heading
        },
        {
            id: 2,
            picture: One
        },
        {
            id: 3,
            picture: Two
        },
        {
            id: 4,
            picture: Three
        },
        {
            id: 5,
            picture: Four
        },
        {
            id: 6,
            picture: Five
        },
        {
            id: 7,
            picture: Six
        },
        {
            id: 8,
            picture: Seven
        },
        {
            id: 9,
            picture: Eight
        },
        {
            id: 10,
            picture: Nine
        },
        {
            id: 11,
            picture: Ten
        },
        {
            id: 12,
            picture: Eleven
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

    const currentID = 5

    imageList.map((item) => {
        if (item.id === currentID) {

        }
    })



    return (
        <div className='home'>
            <h1>Home</h1>
            <div className='slider'>
                <div className='images'>
                    {
                        imageList.map((item, index) => (
                            <img key={index} className="item" src={item.picture} />
                        ))
                    }
                </div>
                <div className='texts'>

                </div>
                <div className='list'>
                    <TbArrowBigLeftLineFilled className='icon' />
                    {Array.from({ length: imageList.length }, (_, i) => <section key={i} className='circle' />)}
                    <TbArrowBigRightLineFilled className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Home
