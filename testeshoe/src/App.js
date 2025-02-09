import logo from './logo.svg';
import './App.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import SlDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';
import SlMenu from '@shoelace-style/shoelace/dist/react/menu';
import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';

import image1 from './fotos/image1.png';
import image2 from './fotos/image2.png';
import image3 from './fotos/image3.png';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SlButton variant="primary">Click me</SlButton>
        <SlDropdown>
          <SlButton slot="trigger" caret>
            Filtro
          </SlButton>
          <SlMenu>
            <SlMenuItem type="checkbox">
              Checkbox1
            </SlMenuItem>
            <SlMenuItem type="checkbox">
              Checbox2
            </SlMenuItem>
            <SlMenuItem type="checkbox">
              Checbox3
            </SlMenuItem>
            <SlDivider />
          </SlMenu>
        </SlDropdown>
      <SlCarousel pagination navigation >
        <SlCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src={image1}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src={image3}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src={image2}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src={image3}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src={image1}
          />
        </SlCarouselItem>
      </SlCarousel>
      </header>

    </div>

  );
}

export default App;
