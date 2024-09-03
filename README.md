# MMM-affirmations

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) project that displays random affirmations from a local text file. It includes over 100 positive affirmations to brighten your day.

## AI Disclaimer

This module was developed with the assistance of AI technology. While efforts have been made to ensure its functionality and reliability, users should be aware of its AI-assisted origin.

## Support Disclaimer

Please note that this module is provided as-is, without official support from the developer. While efforts have been made to ensure its functionality, users should use this module at their own discretion and risk. Contributions and issue reports from the community are welcome, but timely responses or fixes cannot be guaranteed.

## Features

- Retrieves random affirmations from a local text file containing over 100 affirmations
- Displays affirmations with a fade in/out effect
- Configurable update interval and fade speed
- Uses a node helper for efficient affirmation selection

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

1. The node helper loads affirmations from the `affirmations.txt` file in the module directory.
2. When requested, the node helper selects a random affirmation from the loaded list.
3. The affirmation is sent to the main module and displayed with a fade-in effect.
4. The affirmation remains visible for the configured `updateInterval`.
5. The process repeats with a new affirmation.

## Customization

You can customize the appearance of the module by modifying the `MMM-affirmations.css` file in the module directory.

To add, remove, or modify affirmations, edit the `affirmations.txt` file in the module directory. Each affirmation should be on a new line.

## Contributing

If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository. However, please be aware that due to the nature of this project, responses or fixes may not be immediate.
