const episode = document.querySelector('.episode')
console.log(episode)
const trendingContainer = document.querySelector('#trending .row')
console.log(trendingContainer)
const moviesContainer = document.querySelector('#latest-movies .row')
const tvShowContainer = document.querySelector('#latest-tv-show .row')
const comingSoonContainer = document.querySelector('#coming-soon .row')
for (let i = 0; i < 14; i++) {
    // console.log(episodeClone)
    const episodeClone = episode.cloneNode(true)
    trendingContainer.appendChild(episodeClone)

}
for (let i = 0; i < 14; i++) {
    // console.log(episodeClone)
    const episodeClone = episode.cloneNode(true)
    moviesContainer.appendChild(episodeClone)

}
for (let i = 0; i < 14; i++) {
    // console.log(episodeClone)
    const episodeClone = episode.cloneNode(true)
    comingSoonContainer.appendChild(episodeClone)
}

for (let i = 0; i < 14; i++) {
    // console.log(episodeClone)
    const episodeClone = episode.cloneNode(true)
    tvShowContainer.appendChild(episodeClone)
}
