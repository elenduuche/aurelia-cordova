# Aurelia + Cordova

This project intends to serve as a starter repo for those wanting to use Aurelia with Cordova.  

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [gulp-shell](https://www.npmjs.com/package/gulp-shell) is installed. If you need to install it, use the following command:

  ```shell
  npm install gulp-shell
  ```
4. Execute [jspm](http://jspm.io/) to install additional packages included from jspm.  To do so issue the following command:

  ```shell
  jspm install -y
  ```

4. To build the code, you can now run:

  ```shell
  gulp build
  ```
