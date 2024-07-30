# PicFlow

Simple and reliable image waterfall flow solution.

## How to Use?

### Step 1: Import PicFlow

Copy or download the `picflow.js` and `picflow.css` files to your project directory.

### Step 2: Initialize PicFlow

Create a new instance of `PicFlow` by providing the outer container (which must have a defined width) and the width (default 100) for each picture:

```javascript
const picFlow = new PicFlow(containerElement, width);
```

### Step 3: Add pic to PicFlow

Call the addPic method to add pictures to the container:

```javascript
picFlow.addPic("https://avatars.githubusercontent.com/u/73877052?v=4");
```

The parameter for addPic can be either a single URL string or an array of URLs.

## end

Thanks for using PicFlow!