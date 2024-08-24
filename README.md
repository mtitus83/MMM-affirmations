# MMM-affirmations

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) project that displays random affirmations from the [Affirmations API](https://www.affirmations.dev/).

## AI Disclaimer

This module was developed with the assistance of AI technology. While efforts have been made to ensure its functionality and reliability, users should be aware of its AI-assisted origin.

## Features

- Retrieves random affirmations from the [Affirmations API](https://github.com/annthurium/affirmations)
- Displays affirmations with a fade in/out effect
- Configurable update interval and fade speed
- Uses a node helper for efficient API requests

## Installation

1. Navigate to your MagicMirror's `modules` folder:
   ```
   cd ~/MagicMirror/modules/
   ```
2. Clone this repository:
   ```
   git clone https://github.com/mtitus83/MMM-affirmations.git
   ```
3. Install the necessary dependencies:
   ```
   cd MMM-affirmations
   npm install
   ```

## Configuration

Add the following configuration to your `config/config.js` file:

```javascript
{
    module: "MMM-affirmations",
    position: "top_right",
    config: {
        updateInterval: 60000,  // Update every minute
        fadeSpeed: 1500  // Fade transition takes 1.5 seconds
    }
}
```

### Configuration Options

| Option | Description |
|--------|-------------|
| `updateInterval` | Time between affirmation updates in milliseconds (default: 60000) |
| `fadeSpeed` | Speed of the fade in/out effect in milliseconds (default: 1500) |

## How It Works

1. The node helper fetches a random affirmation from the [Affirmations API](https://github.com/annthurium/affirmations).
2. The affirmation is sent to the main module and displayed with a fade-in effect.
3. The affirmation remains visible for the configured `updateInterval`.
4. The process repeats with a new affirmation.

## Customization

You can customize the appearance of the module by modifying the `MMM-affirmations.css` file in the module directory.

## Contributing

If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

This module uses the [Affirmations API](https://github.com/annthurium/affirmations) created by [annthurium](https://github.com/annthurium). We appreciate their work in providing this free and open API for positive affirmations. The API can be accessed at [https://www.affirmations.dev/](https://www.affirmations.dev/).
