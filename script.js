// write your JavaScript here

const buttonsPlanBasic = document.querySelector('#basic')

buttonsPlanBasic.addEventListener('click', function(){
  document.querySelector('#standart-label').classList.remove('checked')
  document.querySelector('#premium-label').classList.remove('checked')
  document.querySelector('#basic-label').classList.add('checked')

  document.querySelector('.description-title').innerHTML = 'Basic'

  document.querySelector('.description-value').innerHTML = '$60'

  document.querySelector('.decription-text').innerHTML = 'Up to 50 creative & professional  icons + one color versions/themes'

  document.querySelector('.description-list').innerHTML = `
    <li><img src="icon-ok.png" alt="icon ok" class="description-item-icon"><span class="description-item">Included  source files</span><li>
    <li><img src="icon-notok.png" alt="icon notok" class="description-item-icon"><span class="description-item">Converted to responsive components</span></li>
    `
})

const buttonsPlanStandart = document.querySelector('#standart')

buttonsPlanStandart.addEventListener('click', function(){
  document.querySelector('#basic-label').classList.remove('checked')
  document.querySelector('#premium-label').classList.remove('checked')
  document.querySelector('#standart-label').classList.add('checked')

  document.querySelector('.description-title').innerHTML = 'Standart'

  document.querySelector('.description-value').innerHTML = '$120'

  document.querySelector('.decription-text').innerHTML = 'Up to 100 creative & professional  icons + two color versions/themes per month'

  document.querySelector('.description-list').innerHTML = `
    <li><img src="icon-ok.png" alt="icon ok" class="description-item-icon"><span class="description-item">Included  source files</span><li>
    <li><img src="icon-ok.png" alt="icon ok" class="description-item-icon"><span class="description-item">Converted to responsive components</span></li>
    `
})

const buttonsPlanPremium = document.querySelector('#premium')

buttonsPlanPremium.addEventListener('click', function(){
  document.querySelector('#basic-label').classList.remove('checked')
  document.querySelector('#standart-label').classList.remove('checked')
  document.querySelector('#premium-label').classList.add('checked')

  document.querySelector('.description-title').innerHTML = 'Premium'
  document.querySelector('.description-value').innerHTML = '$180'

  document.querySelector('.decription-text').innerHTML = 'Up to 200 creative & professional  icons + four color versions/themes'

  document.querySelector('.description-list').innerHTML = `
    <li><img src="icon-ok.png" alt="icon ok" class="description-item-icon"><span class="description-item">Included  source files</span><li>
    <li><img src="icon-ok.png" alt="icon ok" class="description-item-icon"><span class="description-item">Converted to responsive components</span></li>
    `
})