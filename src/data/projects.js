import robotpaloozaImage from '../images/robotpalooza_image.jpg';
import sawiImage from '../images/banner.png';
import waxyImage from '../images/MiniaturaWaxy.jpg';
import retrucoImage from '../images/RetrucoImage.png';
import oneStepImage from '../images/OneStepImage.png';

export const projects = [
  {
    id: 2,
    title: 'Sawi, The Void Buster',
    description:
      '2D platformer made in Godot, pitched on GamesCom Latam. I worked on the main game design and level design.',
    image: sawiImage,
    viewLink: 'https://mvg-games.com.ar/game/sawi',
    codeLink: 'https://github.com/MaiineV',
    gddLink: '',
    categories: ['Game Development', 'Game Design'],
    technologies: ['Godot', '2D'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 3,
    title: 'Waxy: The Wick and the Witch',
    description:
      'A third-person 3D puzzle-platformer where you play as a living candle exploring the forgotten attic of a witch\u2019s house.',
    image: waxyImage,
    viewLink: 'https://3amgamesstudio.itch.io/waxy-the-wick-and-the-witch',
    codeLink: '',
    gddLink:
      'https://docs.google.com/document/d/1skRFyi93VuhgQmpYGfLQ1OmZlOqO3887zhP5It__0OI/edit?usp=sharing',
    categories: ['Game Development', 'Game Design'],
    technologies: ['C#', 'Unity'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 5,
    title: 'One Step Behind',
    description:
      'An incremental bullet-hell with metroidvania mechanics. The unique twist: you fight side by side with your past life.',
    image: oneStepImage,
    viewLink: 'https://andres-pittaluga.itch.io/one-step-behind',
    codeLink: '',
    gddLink: 'https://miro.com/app/board/uXjVJFkucr0=/?share_link_id=695560825167',
    categories: ['Game Design', 'Game Development'],
    technologies: ['C#', 'Unity'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 4,
    title: 'Retruco al Diablo',
    description:
      'A card game with single-match design, special abilities, and a complex lying system.',
    image: retrucoImage,
    viewLink: 'https://youtu.be/ntMhAfiPFYE',
    codeLink: '',
    gddLink:
      'https://docs.google.com/document/d/1nrsUY1v7X4N-dKN-YiLq7TMPnyXFkkjbknu9BOc9qPk/edit?usp=sharing',
    categories: ['Game Design'],
    technologies: ['C#', 'Unity'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 1,
    title: 'Robotpalooza',
    description:
      'Frenetic FPS made in Unity. Showcased at EVA 2023. I worked on the game\u2019s programming, game design and level design.',
    image: robotpaloozaImage,
    viewLink: 'https://burntcones.itch.io/robotpalooza',
    codeLink: 'https://github.com/TheSirYeti/ProjectFeverDream',
    gddLink:
      'https://docs.google.com/document/d/1bFFF-2n0IrftEVJ7uQ_9-dTtN_R2T2Wtoc3uTwaIJCc/edit?usp=sharing',
    categories: ['Game Development', 'Game Design'],
    technologies: ['Unity', 'C#', 'Game Design', 'Level Design'],
    status: 'Released',
    featured: false,
  },
];

export const projectCategories = ['All', 'Game Development', 'Game Design', 'FullStack'];
