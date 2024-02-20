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

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/LACV/baseTheme).

## License

This project is open-sourced software licensed under the [MIT license]().