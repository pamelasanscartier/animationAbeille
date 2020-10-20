gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

//Animer le titre de la page
var animate = function(titre){
  var textSplit = SplitText.create(titre, {
  type: "chars, words"
});
  return gsap.from(textSplit.chars, {
    duration: 0.1, visibility:"hidden", stagger: 0.1
  });
};
animate('.titre');

//Animation des blocs
const blocs = document.querySelectorAll('.bloc');
blocs.forEach((bloc, index) =>{
  const date = bloc.querySelector('.dateArticle');
  const titre = bloc.querySelector('.titreArticle');
  const infos = bloc.querySelector('.infos');
  var delai = index * 0.0005;
  console.log(delai);
  
const t1 = gsap.timeline({
  scrollTrigger:{
    start: 'bottom bottom',
    trigger : bloc,
    }
  })
  .from(bloc, {
    opacity: 0,
    x: -200,
    stagger: 0.5,
  })
  .from(date, {
    opacity: 0
  })
  .from(titre, {
    opacity: 0
  })
  .from(infos, {
    opacity: 0
  }) 
});

//Animation de l'abeille
const t2 = gsap.timeline({
  defaults: {
    ease: 'linear'
  },
  scrollTrigger: {
    trigger: '.bloc',
    markers: true,
    start: '200% bottom',
    end: '500% bottom',
    scrub: true,
  }
})  
t2.from('.abeille', {
  opacity: 0,
  delay: 1,
})
t2.to('.abeille', {
  pin: true,
   motionPath:{
     curviness: 2,
      path:[
        {x: -70, y:200},
        {x: 50, y: 100},
        {x: -120, y: 50},
        {x: 40, y:400},
        {x: 50, y: 300},
        {x: -70, y: 250},
        {x: -70, y:600},
        {x: 50, y: 400},
        {x: -70, y: 350},
        {x: -70, y:800},
        {x: 50, y: 700},
        {x: -70, y: 650},
     ],
   },
 })
t2.to('.abeille', {
  motionPath:{
      path:[
        {x: -600, y:650},
        {x: -800, y: 550},
        {x: -1000, y: 450},
        {x: -600, y:200},
        {x: -400, y: 450},
        {x: -800, y: 550},
     ],
  }
})
t2.to('.abeille', {
  x: '-1750%',
  opacity: 0,
})