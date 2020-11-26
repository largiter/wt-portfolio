const imagesRoot = '/assets/images/projects-main/';

export const projects = [
  {
    slug: 'earthly',
    title: 'dupa',
    desc: 'desc',
    img: `${imagesRoot}earthly/main`,
    excerpt: 'dupa',
    content: [
      {
        id: 0,
        type: 0,
        contentTitle: 'Problem Description',
        contentBody: [
          {
            text:
              'The ongoing, fast pacing climate change requires from us immediate action. We need and more importantly - want to change some of our everyday habits to more eco-friendly ones - a task sometimes demanding and challenging. We don’t know where to start from, lack motivation or consistency, quickly give up.  Very often, we also underestimate the power of our contribution in a bigger change.',
          },
        ],
      },
      {
        id: 1,
        type: 1,
        contentTitle: 'Purpose',
        contentBody: [
          {
            text:
              'Creating an application that will help in forming a more eco-friendly lifestyle.',
          },
          {
            list: {
              listTitle: 'The application will have the following roles:',
              listItems: [
                <>
                  <strong>Informative:</strong> the user will be able to learn
                  more about our planet’s current situation regarding climate
                  and environmental changes
                </>,
                <>
                  <strong>Educational:</strong> in addition, the app will
                  provide tips and solutions on everyday habits and actions the
                  user can undertake to make the situation better
                </>,
                <>
                  <strong>Measuring and tracking:</strong> The build-in habit
                  tracker will allow the user to flag his/her progress on the
                  habits of his/ her own preference.
                </>,
              ],
            },
          },
        ],
      },
      {
        id: 2,
        type: 0,
        contentTitle: 'Research',
        contentBody: [
          {
            text:
              'A general research on traditional habit trackers in order to find some common features and see what components should be included in my tracker. An additional research was conducted on existing applications related to environmental and ecology topics.',
          },
          {
            titled: {
              titledTitle: 'Conclusion',
              titledText:
                'The selection of such applications is limited with the existing ones focusing mainly on giving tips on how to make your life more eco-friendly (how to recycle, where to recycle, buy local or used goods). I did not find an app that would combine the three elements I defined in my goals.',
            },
          },
        ],
      },
      {
        id: 3,
        type: 1,
        contentTitle: 'The User',
        contentBody: [
          {
            text:
              'Three interviews allowed me to highlight some common traits of potential users:',
          },
          {
            titled: {
              titledTitle: 'Age',
              titledText: 'between 20-35 years old',
            },
          },
          {
            titled: {
              titledTitle: 'Goals & needs',
              titledText:
                'having a busy 9 to 5 type of work, the user needs to plan his off-work activities and get reminders of them being a nature-lover, has a strong need to take his own role in protecting the environment likes to keep things in order - often groups or makes lists of different things',
            },
          },
        ],
      },
      {
        id: 4,
        type: 0,
        contentTitle: 'Information Architecture',
        contentBody: [{ img: `${imagesRoot}earthly/architecture.jpg` }],
      },
      {
        id: 5,
        type: 1,
        contentTitle: 'Wireframes',
        contentBody: [
          {
            text:
              'I started the process of designing the application from creating simple low fidelity sketches. This process helped me plan where each functionality will be included.',
          },
          { img: `${imagesRoot}earthly/wireframes.jpg` },
        ],
      },
      {
        id: 6,
        type: 1,
        contentTitle: 'Prototype',
        contentBody: [
          {
            titled: {
              titledTitle: 'Onboarding process',
              titledText:
                'After launching the application, a series of 3 screens introduces to the user some of the app’s features. In this way the user gets a sense of our mission and an insight into how the application can improve his life. For returning users the skip button is always available.  Creating an account consists of two steps - signing up and customising a personal list of habits to track.',
            },
          },
          { img: `${imagesRoot}earthly/prototype1.jpg` },
          {
            titled: {
              titledTitle: 'Home screen',
              titledText:
                'One of the application’s main goals has an educational character: to make the user aware of the humanity’s actual impact on the planet - the amount of resources Earth has to offer and how many of them we overuse everyday. Earthly does not only inform about the problems but also gives a solution suggestion by a daily tip that can be immediately implemented. Some of the other features the home screen includes are: habit reminders and statistics.',
            },
          },
          {
            titled: {
              titledTitle: 'Tracker',
              titledText:
                'The tracker allows the user to monitor his habit daily progress. When checking a habit as done a pop up window will ask about the action’s details.',
            },
          },
          {
            titled: {
              titledTitle: 'Recycle Analyser',
              titledText:
                'This tool allows the user to learn more on how to recycle every day items. A product name can be typed in the search box or choosen by category from the list.',
            },
          },
          { img: `${imagesRoot}earthly/prototype2.jpg` },
        ],
      },
    ],
  },
  {
    slug: 'nask',
    title: 'NASK Project',
    desc: 'An e-learning platform with games',
    img: `${imagesRoot}nask/about.png`,
    excerpt:
      'Creating an e-learning platform with interactive games where students can be educated (through entertainment) about topics related to cyber security .',
    content: [
      {
        id: 0,
        type: 0,
        contentTitle: 'Problem Description',
        contentBody: [
          {
            text:
              'The ongoing, fast pacing climate change requires from us immediate action. We need and more importantly - want to change some of our everyday habits to more eco-friendly ones - a task sometimes demanding and challenging. We don’t know where to start from, lack motivation or consistency, quickly give up.  Very often, we also underestimate the power of our contribution in a bigger change.',
          },
        ],
      },
      {
        id: 1,
        type: 1,
        contentTitle: 'Purpose',
        contentBody: [
          {
            text:
              'Creating an application that will help in forming a more eco-friendly lifestyle.',
          },
          {
            list: {
              listTitle: 'The application will have the following roles:',
              listItems: [
                <>
                  <strong>Informative:</strong> the user will be able to learn
                  more about our planet’s current situation regarding climate
                  and environmental changes
                </>,
                <>
                  <strong>Educational:</strong> in addition, the app will
                  provide tips and solutions on everyday habits and actions the
                  user can undertake to make the situation better
                </>,
                <>
                  <strong>Measuring and tracking:</strong> The build-in habit
                  tracker will allow the user to flag his/her progress on the
                  habits of his/ her own preference.
                </>,
              ],
            },
          },
        ],
      },
    ],
  },
];
