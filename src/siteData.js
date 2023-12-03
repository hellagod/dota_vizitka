import youtube from './icons/youtube.svg'
import telegram from './icons/telegram.svg'
import twitch from './icons/twitch.svg'
import gabe from './icons/gabe.svg'
import email from './icons/email.svg'
import stray from './img/stray.png'

const logo = {
    icon: gabe, title: "Gabe"
}

const dataSite = {
    header: {
        title: "Gabe Media", subtitle: "киберспортивное рекламное агентство"
    }, about: {
        logo, title: "Привет!", text: "Мы помогаем брендам найти новую аудиторию."
    }, report: {
        logo, upText: "Будем рады блогерам, стримерам и рекламодателям тут:", contacts: [{
            icon: telegram, name: "Telegram", href: "https://t.me/ffaqwest"
        }, {
            icon: email, name: "Почта", href: "https://t.me/ffaqwest"
        }], btText: "Мы на связи круглосуточно, без выходных.", form: {
            name: "Имя", phone: "Телефон", email: "Почта", comment: "Ваша идея", btn: "Оставить заявку"
        }
    }, team: {
        title: "Наша команда", participants: [{
            name: "Stray228", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/stray228?sr=a", audience: "1.5 млн",
            }, {
                icon: telegram, href: "https://t.me/StrayDungeon228", audience: "124k",
            }, {
                icon: telegram, href: "https://t.me/CyberStray", audience: "48k",
            },],
            photo: stray
        }, {
            name: "ybicanoooobov", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/ybicanoooobov", audience: "664k",
            }, {
                icon: telegram, href: "https://t.me/YBNFedor", audience: "25k",
            }],
            photo: stray
        }, {
            name: "TPaBoMaH", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/tpabomah", audience: "540k",
            }, {
                icon: youtube, href: "https://youtube.com/@tpabomah_?si=LRzcBjSEZbFXhzjx", audience: "390k",
            }, {
                icon: telegram, href: "https://t.me/travobet", audience: "136k",
            }],
            photo: stray
        }, {
            name: "Goodwin", statistics: [{
                icon: youtube, href: "https://youtube.com/@GoodWINLive?si=uea6_yadNnfZ017H", audience: "567k",
            }, {
                icon: telegram, href: "https://t.me/goodwin_bets", audience: "51k",
            }],
            photo: stray
        }, {
            name: "ILTW", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/iltw1", audience: "192k",
            }, {
                icon: telegram, href: "https://t.me/iltw123", audience: "2k",
            }],
            photo: stray
        }, {
            name: "CS GO NEWS", statistics: [{
                icon: youtube, href: "https://youtube.com/@CSGONEWSru?si=HXoKpJ0in3raHMha", audience: "455k",
            }, {
                icon: telegram, href: "https://t.me/newcsgo", audience: "145k",
            }],
            photo: stray
        }]
    }

}

export default dataSite