interface Logger {
  /*
  * simple replacement of console.log()
  * Will not log in production
  * */
  log(log): void;

  /*
  * simple replacement of console.log()
  * Will work in production.
  * */
  prod(log): void;

  /*
  * console.log() with red background color.
  * Will not log in production
  * */
  error(log): void;

  /*
  * console.log() with large font size.
  * Will not log in production
  * */
  large(log): void;

  /*
  * console.log() with different colors.
  * Will not log in production
  * */
  red(log): void;

  blue(log): void;

  yellow(log): void;

  green(log): void;
}

declare var logger: Logger;
