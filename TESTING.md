# TESTING

## Code Validation

To validate all HTML files, the recommended validator service by Code Institute which is [HTML W3C](https://validator.w3.org/) was used.

| Validator                        | Comment  | Screenshot                                   |
| -------------------------------- | -------- | -------------------------------------------- |
| [W3C](https://validator.w3.org/) | No Error | ![](assets/documentation/html-validator.jpg) |

To validate the CSS file, the recommended validator service by Code Institute which is [Jigsaw W3C](https://jigsaw.w3.org/css-validator/) was used.

| Validator                                          | Comment  | Screenshot                                  |
| -------------------------------------------------- | -------- | ------------------------------------------- |
| [Jigsaw W3C](https://jigsaw.w3.org/css-validator/) | No Error | ![](assets/documentation/css-validator.jpg) |

To validate the JavaScript file, the recommended validator service by Code Institute which is [JSHint](https://jshint.com/) was used.

| Validator                                | Comment  | Screenshot                                 |
| ---------------------------------------- | -------- | ------------------------------------------ |
| [JavaScript JSHint](https://jshint.com/) | No Error | ![](assets/documentation/js-validator.jpg) |

## Lighthouse Testing

Lighthouse was used to evaluate the website's performance, accessibility and best practices. This testing ensures the site meets modern web standards and provides an optimised user experience accross devices.

| Device  | Comment                | Screenshot                                                                                       |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| Desktop | minor warning          | ![](assets/documentation/lighthouse-desktop.png)                                                 |
| Mobile  | some warnings as shown | ![](assets/documentation/lighthouse-mobile.png) ![](assets/documentation/lighthouse-mobile2.png) |

## Responsiveness

Flagtastic Mission is designed to be fully responsive across various screen seizes, ensuring a smooth and engaging experience on desktops, tablets, and mobile devices. The layout adapts dynamically, with buttons and text adjusting for readability and usability.

| Device                          | Comment                        | Screenshot                                                          |
| ------------------------------- | ------------------------------ | ------------------------------------------------------------------- |
| Iphone 414 x 736                | Achieves desired functionality | ![Mobile Device](assets/documentation/iphone.jpg)                   |
| Google Pixel 411 x 731          | Achieves desired functionality | ![Mobile Device](assets/documentation/google-pixel.jpg)             |
| Ipad Pro 1366 x 1024            | Achieves desired functionality | ![Tablet Device](assets/documentation/ipad-pro.jpg)                 |
| Amazon Kindle Fire 768 x 1024   | Achieves desired functionality | ![Tablet Device](assets/documentation/amazon-kindle.jpg)            |
| Laptop 1440px (Chrome DevTools) | Achieves desired functionality | ![Laptop1440px Device](assets/documentation/laptop1440-respons.jpg) |
| 22" Desktop 1920 x 1080         | Achieves desired functionality | ![Laptop1024px Device](assets/documentation/desktop22.jpg)          |

## Browser Compatability

Flagtastic Mission has been tested across multiple modern web browsers, including **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge**, and **Opera**. The game functions as intended, with consistent styling and interactive elements.

| Browser     | Screenshot                                        |
| ----------- | ------------------------------------------------- |
| **Chrome**  | ![Chrome](assets/documentation/google-chrome.jpg) |
| **Firefox** | ![Firefox](assets/documentation/firefox.jpg)      |
| **MS Edge** | ![MS Edge](assets/documentation/ms-edge.jpg)      |
| **Opera**   | ![Opera](assets/documentation/opera.jpg)          |

## Bugs

| Bug                                  | Comment                                                 | Screenshot                                                             |
| ------------------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| Text Overflow in Mobile screen       | To resolve, customise css                               | ![](assets/documentation/bug1.png), ![](assets/documentation/bug2.png) |
| Timer not cleared when the game ends | To resolve, clearTimer() called in showModal() function | ![](assets/documentation/bug-timer.png)                                |
