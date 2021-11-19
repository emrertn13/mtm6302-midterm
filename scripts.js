//// PSOUDO CODE 
// Need to create 3 buttons for the story select page 
// Selecting a story should take the viewer to a form about the story 
// After inputs are filled form should be submittable without a page refresh 
// Submitting the form should create the story 
// A button should be created in the last page to take the viewer to the start 
// ------
// 3 buttons can be added using html which each button will link to their forms which are created using JS 

// DATA
const $missionStatementButton = document.getElementById('mission-statement-button')
const $lunchRoomButton = document.getElementById('lunch-room-button')
const $weatherReportButton = document.getElementById('weather-report-button')

const $container = document.getElementById('container')
const $oldContainer = $container.innerHTML

// CODE 
$missionStatementButton.addEventListener('click', function(missionStatementSubmit) {
    missionStatementSubmit.preventDefault()
    $container.textContent = ''
    $container.innerHTML = 
    `
        <h2>Provide the following words</h2>
        <form id="mission-statement-form">
            <input id="mission-statement-adjective" class="type-text-style" type="text" placeholder="${stories[0].words[0]}">
            <input id="mission-statement-verb1" class="type-text-style" type="text" placeholder="${stories[0].words[1]}">
            <input id="mission-statement-verb2" class="type-text-style" type="text" placeholder="${stories[0].words[2]}">
            <input id="mission-statement-noun1" class="type-text-style" type="text" placeholder="${stories[0].words[3]}">
            <input id="mission-statement-noun2" class="type-text-style" type="text" placeholder="${stories[0].words[4]}">
            <input id="mission-statement-noun3" class="type-text-style" type="text" placeholder="${stories[0].words[5]}">
        </form>
        <button id="mission-statement-submit">Read Story</button>
    `
    const $missionStatementForm = document.getElementById('mission-statement-form')

    const $missionStatementAdjective = document.getElementById('mission-statement-adjective')
    const $missionStatementVerb1 = document.getElementById('mission-statement-verb1')
    const $missionStatementVerb2 = document.getElementById('mission-statement-verb2')
    const $missionStatementNoun1 = document.getElementById('mission-statement-noun1')
    const $missionStatementNoun2 = document.getElementById('mission-statement-noun2')
    const $missionStatementNoun3 = document.getElementById('mission-statement-noun3')

    document.getElementById('mission-statement-submit').addEventListener('click', function() {
        const story = stories[0]
        const words = {
            'Adjective': $missionStatementAdjective.value,
            'Verb 1': $missionStatementVerb1.value,
            'Verb 2': $missionStatementVerb2.value,
            'Plural Noun 1': $missionStatementNoun1.value,
            'Plural Noun 2': $missionStatementNoun2.value,
            'Plural Noun 3': $missionStatementNoun3.value
        }
        
        story.output(words)
        console.log(story.output(words))

        $container.textContent = ''
        $container.innerHTML = 
        `
            <div id="story-div">
                <h1>Mission Statement</h1>
                <span>${story.output(words)}</span>
                <button id="go-back-to-start">Create Another Story</button>
            </div>
        `
        
        document.getElementById('go-back-to-start').addEventListener('click', function() {
            location.reload()
        })
    })
})

$lunchRoomButton.addEventListener('click', function(lunchRoomSubmit) {
    lunchRoomSubmit.preventDefault()
    $container.textContent = ''
    $container.innerHTML = 
    `
        <h2>Provide the following words</h2>
        <form id="lunch-room-form">
            <input id="lunch-room-animal" class="type-text-style" type="text" placeholder="${stories[1].words[0]}">
            <input id="lunch-room-adjective1" class="type-text-style" type="text" placeholder="${stories[1].words[1]}">
            <input id="lunch-room-adjective2" class="type-text-style" type="text" placeholder="${stories[1].words[2]}">
            <input id="lunch-room-vegetable1" class="type-text-style" type="text" placeholder="${stories[1].words[3]}">
            <input id="lunch-room-vegetable2" class="type-text-style" type="text" placeholder="${stories[1].words[4]}">
            <input id="lunch-room-noun" class="type-text-style" type="text" placeholder="${stories[1].words[5]}">
            <input id="lunch-room-container" class="type-text-style" type="text" placeholder="${stories[1].words[6]}">
        </form>
        <button id="lunch-room-submit">Read Story</button>
    `
    const $lunchRoomForm = document.getElementById('lunch-room-form')

    const $lunchRoomAnimal = document.getElementById('lunch-room-animal')
    const $lunchRoomAdjective1 = document.getElementById('lunch-room-adjective1')
    const $lunchRoomAdjective2 = document.getElementById('lunch-room-adjective2')
    const $lunchRoomVegetable1 = document.getElementById('lunch-room-vegetable1')
    const $lunchRoomVegetable2 = document.getElementById('lunch-room-vegetable2')
    const $lunchRoomNoun = document.getElementById('lunch-room-noun')
    const $lunchRoomContainer = document.getElementById('lunch-room-container')

    document.getElementById('lunch-room-submit').addEventListener('click', function() {
        const story = stories[1]
        const words = {
            'Animal': $lunchRoomAnimal.value,
            'Adjective 1': $lunchRoomAdjective1.value,
            'Adjective 2': $lunchRoomAdjective2.value,
            'Vegetable 1': $lunchRoomVegetable1.value,
            'Vegetable 2': $lunchRoomVegetable2.value,
            'Noun': $lunchRoomNoun.value,
            'Container': $lunchRoomContainer.value
        }
        
        story.output(words)
        console.log(story.output(words))

        $container.textContent = ''
        $container.innerHTML = 
        `
            <div id="story-div">
                <h1>Lunch Room!</h1>
                <span>${story.output(words)}</span>
                <button id="go-back-to-start">Create Another Story</button>
            </div>
        `
        
        document.getElementById('go-back-to-start').addEventListener('click', function() {
            location.reload()
        })
    })
})

$weatherReportButton.addEventListener('click', function(weatherReportSubmit) {
    weatherReportSubmit.preventDefault()
    $container.textContent = ''
    $container.innerHTML = 
    `
        <h2>Provide the following words</h2>
        <form id="weather-report-form">
            <input id="weather-report-adjective1" class="type-text-style" type="text" placeholder="${stories[2].words[0]}">
            <input id="weather-report-adjective2" class="type-text-style" type="text" placeholder="${stories[2].words[1]}">
            <input id="weather-report-article-clothing" class="type-text-style" type="text" placeholder="${stories[2].words[2]}">
            <input id="weather-report-number1" class="type-text-style" type="text" placeholder="${stories[2].words[3]}">
            <input id="weather-report-number2" class="type-text-style" type="text" placeholder="${stories[2].words[4]}">
            <input id="weather-report-noun1" class="type-text-style" type="text" placeholder="${stories[2].words[5]}">
            <input id="weather-report-noun2" class="type-text-style" type="text" placeholder="${stories[2].words[6]}">
        </form>
        <button id="weather-report-submit">Read Story</button>
    `
    const $weatherReportForms = document.getElementById('weather-report-form')

    const $weatherReportAdjective1 = document.getElementById('weather-report-adjective1')
    const $weatherReportAdjective2 = document.getElementById('weather-report-adjective2')
    const $weatherReportArticleClothing = document.getElementById('weather-report-article-clothing')
    const $weatherReportNumber1 = document.getElementById('weather-report-number1')
    const $weatherReportNumber2 = document.getElementById('weather-report-number2')
    const $weatherReportNoun1 = document.getElementById('weather-report-noun1')
    const $weatherReportNoun2 = document.getElementById('weather-report-noun2')

    document.getElementById('weather-report-submit').addEventListener('click', function() {
        const story = stories[2]
        const words = {
            'Adjective 1': $weatherReportAdjective1.value,
            'Adjective 2': $weatherReportAdjective2.value,
            'Article of Clothing': $weatherReportArticleClothing.value,
            'Number 1': $weatherReportNumber1.value,
            'Number 2': $weatherReportNumber2.value,
            'Plural Noun 1': $weatherReportNoun1.value,
            'Plural Noun 2': $weatherReportNoun2.value
        }
        
        story.output(words)
        console.log(story.output(words))

        $container.textContent = ''
        $container.innerHTML = 
        `
            <div id="story-div">
                <h1>Weather Report</h1>
                <span>${story.output(words)}</span>
                <button id="go-back-to-start">Create Another Story</button>
            </div>
        `

        document.getElementById('go-back-to-start').addEventListener('click', function() {
            location.reload()
        })
    })
})

// RUN 


// TRIAL & ERROR SECTION = FUNNY LOL 
        // console.log(stories[0].words[0])
        // console.log(stories[0].words[1])
        // console.log(stories[0].words[2])
        // console.log(stories[0].words[3])
        // console.log(stories[0].words[4])
        // console.log(stories[0].words[5])
        // const missionStatementDataToStore = {
        //     adjective: $missionStatementAdjective.value,
        //     verb1: $missionStatementVerb1.value,
        //     verb2: $missionStatementVerb2.value,
        //     noun1: $missionStatementNoun1.value,
        //     noun2: $missionStatementNoun2.value,
        //     noun3: $missionStatementNoun3.value
        // }
        // localStorage.setItem('Mission Statement Adjective', missionStatementDataToStore.adjective)
        // localStorage.setItem('Mission Statement Verb 1', missionStatementDataToStore.verb1)
        // localStorage.setItem('Mission Statement Verb 2', missionStatementDataToStore.verb2)
        // localStorage.setItem('Mission Statement Noun 1', missionStatementDataToStore.noun1)
        // localStorage.setItem('Mission Statement Noun 2', missionStatementDataToStore.noun2)
        // localStorage.setItem('Mission Statement Noun 3', missionStatementDataToStore.noun3)
        // stories[0].words[0] = $missionStatementAdjective.value
        // stories[0].words[1] = $missionStatementVerb1.value
        // stories[0].words[2] = $missionStatementVerb2.value
        // stories[0].words[3] = $missionStatementNoun1.value
        // stories[0].words[4] = $missionStatementNoun2.value
        // stories[0].words[5] = $missionStatementNoun3.value
        // const lunchRoomDataToStore = {
        //     animal: $lunchRoomAnimal.value,
        //     adjective1: $lunchRoomAdjective1.value,
        //     adjective2: $lunchRoomAdjective2.value,
        //     vegetable1: $lunchRoomVegetable1.value,
        //     vegetable2: $lunchRoomVegetable2.value,
        //     noun: $lunchRoomNoun.value,
        //     container: $lunchRoomContainer.value
        // }
        // localStorage.setItem('Lunch Room Animal', lunchRoomDataToStore.animal)
        // localStorage.setItem('Lunch Room Adjective 1', lunchRoomDataToStore.adjective1)
        // localStorage.setItem('Lunch Room Adjective 2', lunchRoomDataToStore.adjective2)
        // localStorage.setItem('Lunch Room Vegetable 1', lunchRoomDataToStore.vegetable1)
        // localStorage.setItem('Lunch Room Vegetable 2', lunchRoomDataToStore.vegetable2)
        // localStorage.setItem('Lunch Room Noun', lunchRoomDataToStore.noun)
        // localStorage.setItem('Lunch Room Container', lunchRoomDataToStore.container)
        // const weatherReportDataToStore = {
        //     adjective1: $weatherReportAdjective1.value,
        //     adjective2: $weatherReportAdjective2.value,
        //     clothing: $weatherReportArticleClothing.value,
        //     number1: $weatherReportNumber1.value,
        //     number2: $weatherReportNumber2.value,
        //     noun1: $weatherReportNoun1.value,
        //     noun2: $weatherReportNoun2.value
        // }
        // localStorage.setItem('Weather Report Adjective 1', weatherReportDataToStore.adjective1)
        // localStorage.setItem('Weather Report Adjective 2', weatherReportDataToStore.adjective2)
        // localStorage.setItem('Weather Report Article Clothing', weatherReportDataToStore.clothing)
        // localStorage.setItem('Weather Report Number 1', weatherReportDataToStore.number1)
        // localStorage.setItem('Weather Report Number 2', weatherReportDataToStore.number2)
        // localStorage.setItem('Weather Report Noun 1', weatherReportDataToStore.noun1)
        // localStorage.setItem('Weather Report Noun 2', weatherReportDataToStore.noun2)