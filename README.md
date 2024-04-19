# BaseTheme - Laravel Vue.js Dashboard

BaseTheme is a dashboard-style project built with Laravel and Vue.js. This project provides a kick-start for developers looking to create web applications with a modern dashboard interface.

## Requirements

Before getting started, ensure you have the following installed:

- [XAMPP](https://www.apachefriends.org/index.html)
- [Git](https://git-scm.com/)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository into your XAMPP `htdocs` directory:
   ```bash
   git clone https://github.com/LACV/baseTheme.git baseTheme
   ```

2. Navigate to the project directory:
   ```bash
   cd baseTheme
   ```

3. Install PHP dependencies using Composer:
   ```bash
   composer install
   ```

4. Create a new MySQL database named `stockvault` using phpMyAdmin or any other database management tool.

5. Run database migrations to create tables:
   ```bash
   php artisan migrate
   ```

## Usage

1. Start the Laravel server:
   ```bash
   php artisan serve
   ```

2. Compile Vue.js assets:
   ```bash
   npm install
   npm run dev
   ```

3. Open your web browser and navigate to `http://localhost:8000` to access the BaseTheme dashboard.

## Buttons
1. Buttons component import:
   We use the directive
 ```bash
   <script setup>
   import Buttons from '@/components/buttons.vue';
   </script>
```
2. Using the Buttons component:
   In the  `<template>` block, we call the  `<Buttons> ` component and add a title inside it.
```bash
   <template>
   <Buttons>
      Botón
   </Buttons>
   </template>
```
## Button Customization
1. Specify button color:
   To specify the color of the button, we use the `colorButton` class.
```bash
   <Buttons colorButton="primary">
   Button Primary
   </Buttons>

```
2. Types of Colors for the Button:
   We can use different values ​​for the `colorButton` attribute for different types of colors:
```bash
   "primary" color primary
   "secondary" color secondary
   "i" color info
   "g" color gray
   "s" color success
   "e" color danger
   "w" color warning
   "p" color purple
   "glow-d" color glow danger
   "glow-w" color glow warning
   "glow-pr" color glow primary
   "glow-pu" color glow purple
   "glow-s" color glow secondary
   "glow-su" color glow success
   "glow-i" color glow info
```
3. Specify Button Width:
   To specify the width of the button, we use the `maxwidthButton` attribute.
```bash
 <Buttons colorButton="primary" maxwidthButton>
  Button Primary
</Buttons>
```
## Popup
1. Import of the Popup component:
   We use the directive
```bash
<script setup>
   import Popup from '@/components/Popup.vue';
</script>
```
2. Using the Popup component:
   In the `<template>` block, we call the `<Popup>` component
```bash
<PopUp title="Title Form" maxWidth="sm">
   <template #buttonForm>
      <Buttons colorButton="e"  @click="usePopUp.toggleShowClose"  >
            Cancelar
      </Buttons>
      <Buttons colorButton="s">
            Guardar
      </Buttons>
   </template>
   </PopUp> 

   <Buttons @click="usePopUp.toggleShowClose">
      Button Open Modal
    </Buttons>
This code will allow us to open the popup,
```
## Information cards
1. Import of the `InformationCards` Component:
We use the `<script setup>` directive to import the `InformationCards` component from the path `@/components/Spreadsheet.vue`.

2. Use of the `InformationCards` Component:
Inside the `<template>` block, we invoke the `<InformationCards>` component and configure its corresponding properties:
```bash
   <InformationCards
      title="title"
      footer="top 1"
      Icon="menu"
      colorcontent="pr">
      Here you can put relevant information!
   </InformationCards>
```
3. Explanation of the properties of the `<Information Cards>` components:
```bash
   "title:" Allows you to add a title to the sheet.
   "Footer:" Allows you to add a title, number, or description at the bottom of the sheet.
   "icon:" Allows you to specify the name of the icon you want to use (only works with Google Fonts icons).
   "colorcontent: pr" Allows you to modify the color of the sheet.
```
4.  Types of Colors for the Sheets:
Different values can be used for the `colorcontent` property:
```bash
   "pr" color primary
   "se" color secondary
   "i" color info
   "g" color gray
   "su" color success
   "e" color danger
   "w" color warning
   "p" color purple
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/LACV/baseTheme).

## License

This project is open-sourced software licensed under the [MIT license]().
