const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const cron = require('node-cron');
const axios = require('axios');// const addres_secondery = 


async function start() {
    // const browser = await puppeteer.launch()
    const browser = await puppeteer.launch({ headless: false, slowMo: 0, })
    const page = await browser.newPage()
    await page.goto("https://wolt.com/en/isr/tel-aviv/restaurants")
    // autoScroll(page);
    const restaurants_url = await page.evaluate(() => {
        const urls = Array.from(document.querySelectorAll('.VenueVerticalList__Grid-sc-1g9lh7x-1 a')).map((x) => x.href)
        const images_src = Array.from(document.querySelectorAll('#mainContent > div > div > div.RenderDiscoveryFormat__SectionWrapper-sc-o3nb6j-1.aLktm > div.VenueVerticalList__Grid-sc-1g9lh7x-1.cgAIgb > a > div > div.VenueCard__HeaderContainer-sc-m1skqj-0.ljKUmt > div.VenueCard__ImageContainer-sc-m1skqj-2.jKyHLF > div > img')).map((x) => x.src)
        const all = []
        for (let i in urls) {
            all.push({ url: urls[i], img: images_src[i], location })
        }
        return all
    });
    let all_restaurant_data = []

    for (let i = 0; i < restaurants_url.length; i++) {
        await page.goto(restaurants_url[i].url)

        const restaurant_data = await page.evaluate(() => {
            function reverseString(str) {return str.split("").reverse().join("");}
            const score = Array.from(document.querySelectorAll('.RatingsTooltip-module__restaurantRating___eTIGK > span')).map((x) => x.textContent)
            const title = document.querySelector('#venueHeroBanner > div.VenueHeroBanner-module__container___b_JlJ > div:nth-child(1) > h1 > span').textContent
            const location = document.querySelector('#mainContent > div > div.Venue__VenueContent-sc-3kit60-0.kJCkKO > div.Venue-module__container___vJcWL.rtl > div.VenueSideInfo__Root-sc-1bpnd7a-0.fgVEPM.VenueSideInfo-module__venueInformation___GimMp.VenueSideInfo-module__hideOnTablet___fKsjR.rtl > div.VenueSideInfo__Block-sc-1bpnd7a-1.jrwiYF.VenueSideInfo-module__venueAddress___W71Q7 > a').href

            const categories = Array.from(document.querySelectorAll('#mainContent > div > div.Venue__VenueContent-sc-3kit60-0.kJCkKO > div.Venue-module__container___vJcWL.rtl > div.VenueSideInfo__Root-sc-1bpnd7a-0.fgVEPM.VenueSideInfo-module__venueInformation___GimMp.VenueSideInfo-module__hideOnTablet___fKsjR.rtl > div:nth-child(5) > ul > li > a')).map((x) => x.textContent)
            const address = {
                prim: reverseString(document.querySelector('#mainContent > div > div.Venue__VenueContent-sc-3kit60-0.kJCkKO > div.Venue-module__container___vJcWL.rtl > div.VenueSideInfo__Root-sc-1bpnd7a-0.fgVEPM.VenueSideInfo-module__venueInformation___GimMp.VenueSideInfo-module__hideOnTablet___fKsjR.rtl > div.VenueSideInfo__Block-sc-1bpnd7a-1.jrwiYF.VenueSideInfo-module__venueAddress___W71Q7 > div.VenueSideInfo-module__primary___xK8qF').textContent),
                sec: document.querySelector('#mainContent > div > div.Venue__VenueContent-sc-3kit60-0.kJCkKO > div.Venue-module__container___vJcWL.rtl > div.VenueSideInfo__Root-sc-1bpnd7a-0.fgVEPM.VenueSideInfo-module__venueInformation___GimMp.VenueSideInfo-module__hideOnTablet___fKsjR.rtl > div.VenueSideInfo__Block-sc-1bpnd7a-1.jrwiYF.VenueSideInfo-module__venueAddress___W71Q7 > div.VenueSideInfo-module__secondary___Kuira').textContent
            }
            return { title, categories: categories.flat(), score: score.flat(), address, location  }
        });

        const restt = {...restaurant_data,img:restaurants_url[i].img }
        all_restaurant_data.push(restt)
    }
    console.log(all_restaurant_data)
    all_restaurant_data.forEach(async(restaurant) => {
        await axios.post('http://localhost:3009/newRestaurant', restaurant)
    })
    // await fs.writeFile('wolt1-list.txt', restaurants_url.join("\r\n"))
    await browser.close()
}







async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

// ...

// Schedule tasks to be run on the server.
// cron.schedule('* */24 * * *', function() {
//     console.log('running a task every minute');
//     start()
//   });
start()