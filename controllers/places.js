const router = require ('express').Router()



router.get ('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
        // pic: 'http://placekitten.com/300/300'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/panini.jpg'
        
        
      }]
    
      res.render ('places/index', {places})
})
module.exports = router



  


  