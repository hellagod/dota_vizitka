import youtube from './icons/youtube.svg'
import telegram from './icons/telegram.svg'
import twitch from './icons/twitch.svg'
import gabe from './icons/logo.svg'
import email from './icons/email.svg'
import stray from './img/stray.png'
import iltw from './img/iltw.png'
import csgonews from './img/csgonews.png'
import ybn from './img/ybn.png'
import travoman from './img/travoman.png'
import goodwin from './img/goodwin.png'
import back from './img/video_back.mp4'
import finger from './img/finger.png'

const logo = {
    icon: gabe, title: "Gabe"
}

const data = {
    back,
    header: {
        title: "Gabe Media", subtitle: "киберспортивное рекламное агентство"
    }, about: {
        logo,
        title: "Привет!",
        text: "Мы помогаем брендам найти новую аудиторию. Взгляни на нашу команду",
        emoji: finger
    }, report: {
        logo, upText: "Будем рады блогерам, стримерам и рекламодателям тут:", contacts: [{
            icon: telegram, name: "Telegram", href: "https://t.me/ffaqwest", id: 0
        }, {
            icon: email, name: "Почта", href: "https://t.me/ffaqwest", id: 1
        }], btText: "Мы на связи круглосуточно, без выходных.", form: {
            name: "Имя", phone: "Телефон", email: "Почта", comment: "Ваша идея", btn: "Оставить заявку"
        }
    }, team: {
        title: "Наша команда", participants: [{
            name: "Stray228", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/stray228?sr=a", audience: "1.5 млн", id: 0
            }, {
                icon: youtube, href: "https://www.youtube.com/@StrayBest", audience: "74k", id: 1
            }, {
                icon: telegram, href: "https://t.me/StrayDungeon228", audience: "124k", id: 2
            }],
            photo: stray
        }, {
            name: "ybicanoooobov", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/ybicanoooobov", audience: "664k", id: 0
            }, {
                icon: youtube, href: "https://www.youtube.com/@ybicanoooobov", audience: "17k", id: 1
            }, {
                icon: telegram, href: "https://t.me/YBNFedor", audience: "25k", id: 2
            }],
            photo: ybn
        }, {
            name: "TPaBoMaH", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/tpabomah", audience: "540k", id: 0
            }, {
                icon: youtube, href: "https://youtube.com/@tpabomah_?si=LRzcBjSEZbFXhzjx", audience: "390k", id: 1
            }, {
                icon: telegram, href: "https://t.me/travobet", audience: "136k", id: 2
            }],
            photo: travoman
        }, {
            name: "Goodwin", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/goodwin_dota?sr=a", audience: "46k", id: 0
            }, {
                icon: youtube, href: "https://youtube.com/@GoodWINLive?si=uea6_yadNnfZ017H", audience: "567k", id: 1
            }, {
                icon: telegram, href: "https://t.me/goodwin_bets", audience: "51k", id: 2
            }],
            photo: goodwin
        }, {
            name: "ILTW", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/iltw1", audience: "192k", id: 0
            }, {
                icon: youtube, href: "https://www.youtube.com/c/iLTW1", audience: "1k", id: 1
            }, {
                icon: telegram, href: "https://t.me/iltw123", audience: "2k", id: 2
            }],
            photo: iltw
        }, {
            name: "CS GO NEWS", statistics: [{
                icon: twitch, href: "https://www.twitch.tv/step_csgonews", audience: "4k", id: 0
            }, {
                icon: youtube, href: "https://youtube.com/@CSGONEWSru?si=HXoKpJ0in3raHMha", audience: "455k", id: 1
            }, {
                icon: telegram, href: "https://t.me/newcsgo", audience: "145k", id: 2
            }],
            photo: csgonews
        }]
    }

}

export default data