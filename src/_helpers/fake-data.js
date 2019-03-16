import {
  paulImg,
  intermarcheImg,
  franprixImg,
  selectaImg,
  oTacosImg,
  aviaImg,
  bpImg,
  coraImg,
  carrefourCityImg,
  essoImg,
  centralisationSocialMediaImg,
  icCentralisationImg,
  instantPlaisirImg,
  icInstantImg,
  foodAgregatorImg,
  icFoodAgregatorImg,
  campagneFacebookImg,
  icFacebookImg,
  snapImg,
  icSnapImg,
  wazeImg,
  icWazeImg,
  banner1Img,
  banner2Img,
  banner3Img,
  banner4Img
} from './load-images';

export let referencesFakeData = {
  references: [{
    id: 1,
    name: 'paul',
    img: paulImg
  }, {
    id: 2,
    name: 'Intermarché',
    img: intermarcheImg
  }, {
    id: 3,
    name: 'Franprix',
    img: franprixImg
  }, {
    id: 4,
    name: 'Selecta',
    img: selectaImg
  }, {
    id: 5,
    name: 'O’Tacos',
    img: oTacosImg
  }, {
    id: 6,
    name: 'Avia',
    img: aviaImg
  }, {
    id: 7,
    name: 'bp',
    img: bpImg
  }, {
    id: 8,
    name: 'Cora',
    img: coraImg
  }, {
    id: 9,
    name: 'Carrefour City',
    img: carrefourCityImg
  }, {
    id: 10,
    name: 'Esso',
    img: essoImg
  }]
};

export let campaignsFakeData = {
  campaigns: [{
      id: 1,
      name: 'Centralisation Social Media',
      img: centralisationSocialMediaImg,
      imgIco: icCentralisationImg
    },
    {
      id: 2,
      name: 'Instant Plaisir',
      img: instantPlaisirImg,
      imgIco: icInstantImg
    },
    {
      id: 3,
      name: 'Food Agregator',
      img: foodAgregatorImg,
      imgIco: icFoodAgregatorImg
    },
    {
      id: 4,
      name: 'Campagne Facebook',
      img: campagneFacebookImg,
      imgIco: icFacebookImg
    },
    {
      id: 5,
      name: 'snap',
      img: snapImg,
      imgIco: icSnapImg
    },
    {
      id: 6,
      name: 'waze',
      img: wazeImg,
      imgIco: icWazeImg
    }
  ]
};

export let campaignDetailsFakeData = {
  offers: [{
      id: 1,
      key: 'collapse1',
      title: 'Pourquoi cette offre ?',
      info: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
      banner: [{
          id: 1,
          label: 'Pavé',
          size: '300x250',
          img: banner1Img
        },
        {
          id: 2,
          label: 'Skyscraper',
          size: '120x600',
          img: banner2Img
        },
        {
          id: 3,
          label: 'Mégaskycraper',
          size: '160x600',
          img: banner3Img
        },
        {
          id: 4,
          label: 'Mégaskycraper',
          size: '160x600',
          img: banner4Img
        }
      ]
    },
    {
      id: 2,
      key: 'collapse2',
      title: 'Descriptif de la campagne',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    },
    {
      id: 3,
      key: 'collapse3',
      title: 'Pré-requis',
      info: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
    },
    {
      id: 4,
      key: 'collapse4',
      title: 'Aperçu de ma campagne',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    }
  ],
  packs: [{
      id: 1,
      title: 'Starter',
      info: 'J’attire des nouveaux clients grâce à la publicité locale sur Facebook.',
      duration: 15,
      singleReach: '10 000',
      totContacts: '5 000',
      totClicks: '1000'
    },
    {
      id: 2,
      title: 'Booster',
      info: 'J’attire des nouveaux clients grâce à la publicité locale sur Facebook.',
      duration: 15,
      singleReach: '10 000',
      totContacts: '5 000',
      totClicks: '1000'
    }
  ]
};