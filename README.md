# VR Mode Watcher

This component adds a state to an entity signaling whether or not VR mode is active.

## API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| vrStateName    | The name of the state which will be added when VR mode is active. | `vr` |
| nonVrStateName | The name of the state which will be added when VR mode is not active. | `non-vr` |

### Installation

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-vr-mode-watcher@1.0.0/dist/aframe-vr-mode-watcher.min.js"></script>
</head>

<body>
  <a-scene>
    
    <a-entity
      vr-mode-watcher
      geometry="primitive: box">
    </a-entity>
    
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-vr-mode-watcher
```

Then register and use.

```js
require('aframe');
require('aframe-vr-mode-watcher');
```
