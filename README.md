# pixiv-ui

[![npm version](https://badge.fury.io/js/pixiv-ui.svg)](https://badge.fury.io/js/pixiv-ui)
![build](https://github.com/ryohidaka/pixiv-ui/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/pixiv-ui/graph/badge.svg?token=RHP9TB2F51)](https://codecov.io/gh/ryohidaka/pixiv-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

React UI library inspired by [Pixiv](https://www.pixiv.net/en/).

## Installation

You can install this library using npm:

```shell
npm install pixiv-ui
```

## Usage

```tsx
import { FigureCell } from "pixiv-ui";

function App() {
  const image = { src: "https://via.placeholder.com/300" };
  const author = {
    id: "1",
    name: "Sample Author",
    avatarURL: "https://via.placeholder.com/300",
    link: { href: "https://example.com" },
  };
  const link = { href: "https://example.com" };

  return (
    <>
      <FigureCell
        image={image}
        pageCount={1}
        title="Sample Title"
        author={author}
        link={link}
      />
    </>
  );
}

export default App;
```

### Components

- [StoryBook](https://668dc2bdff90cbd49b534740-tljspwfhvy.chromatic.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
