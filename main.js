// block components
import Root from './src/block-components/Root';
import Hero, { config as HeroConfig } from './src/block-components/Hero';
import Team, { config as TeamConfig } from './src/block-components/Team';
// import Test, { config as TestConfig } from './src/block-components/Test';
import Footer, { config as FooterConfig } from './src/block-components/Footer';
import Mission, {
  config as MissionConfig
} from './src/block-components/Mission';
import Features, {
  config as FeaturesConfig
} from './src/block-components/Features';
import MailingList, {
  config as MailingListConfig
} from './src/block-components/MailingList';
import NavigationBar, {
  config as NavigationBarConfig
} from './src/block-components/NavigationBar';

// base components
import {
  H1,
  H2,
  Link,
  Text,
  Logo,
  Button,
  Paragraph,
  Subscribe,
  StyledText,
  StyledParagraph
} from './src/base-components';

export default {
  block: {
    Root: {
      module: Root
    },
    Hero: {
      config: HeroConfig,
      module: Hero
    },
    Team: {
      config: TeamConfig,
      module: Team
    },
    // Test: {
    //   config: TestConfig,
    //   module: Test
    // },
    Footer: {
      config: FooterConfig,
      module: Footer
    },
    Mission: {
      config: MissionConfig,
      module: Mission
    },
    Features: {
      config: FeaturesConfig,
      module: Features
    },
    MailingList: {
      config: MailingListConfig,
      module: MailingList
    },
    NavigationBar: {
      config: NavigationBarConfig,
      module: NavigationBar
    }
  },
  base: {
    H1,
    H2,
    Link,
    Text,
    Logo,
    Button,
    Paragraph,
    Subscribe,
    StyledText,
    StyledParagraph
  }
};
